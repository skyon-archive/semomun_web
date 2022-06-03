import React, { useState } from "react";
import yaml from "js-yaml";
import axios from "axios";
import { rootapi } from "../plugins/axios";
import { CustomError } from "../types";

export const AdminPage = () => {
  const [status, setStatus] = useState<string[][]>([]);
  const [dragDiv, setDragDiv] = useState<string>(
    "https://dev.api.semomun.com/upload"
  );


  const updateStatus = (text: string) => {
    setStatus((status) => status.concat([[text, new Date().toISOString()]]));
  };

  const readEntriesPromise = (reader: any) =>
    new Promise((resolve, reject) => {
      reader.readEntries(resolve, reject);
    }) as Promise<FileSystemEntry[]>;

  const readFolder = async (folder: any) => {
    if (!folder?.isDirectory) {
      console.log(`'${folder.fullPath}'는 폴더가 아님`);
      return [];
    }
    const reader = folder.createReader();
    const result: FileSystemEntry[] = [];
    while (true) {
      const entries = await readEntriesPromise(reader);
      if (entries.length === 0) return result;
      result.push(...entries);
    }
  };

  const getInnerFolders = async (outerFolder: FileSystemEntry) => {
    const middleFolders = await readFolder(outerFolder);
    const innerFolderLists = await Promise.all(middleFolders.map(readFolder));
    const l: any[] = [];
    const result = l.concat(...innerFolderLists);
    return result.filter((folder) => {
      if (folder.isDirectory) return true;
      else {
        console.log(`'${folder.fullPath}'는 폴더가 아님`);
        return false;
      }
    });
  };

  const getFile = (file: FileSystemFileEntry) =>
    new Promise((resolve, reject) =>
      file.file(resolve, reject)
    ) as Promise<File>;

  const readFile = (file: any) => {
    const reader = new FileReader();
    return new Promise((resolve, reject) => {
      reader.onerror = () => {
        reader.abort();
        reject(new DOMException("Problem parsing input file."));
      };
      reader.onload = () => {
        resolve(reader.result as string);
      };
      reader.readAsText(file);
    }) as Promise<string>;
  };

  const validateImages = (files: FileSystemEntry[], config: any) => {
    const fileNames = files.map((file) => file.name);

    if (!fileNames.includes(config.workbook.bookcover))
      throw new CustomError(`'${config.workbook.bookcover}'가 없습니다.`);

    const sections = config.sections;
    if (!sections) throw new CustomError("config.yaml에 sectinos가 없습니다.");
    sections.forEach((section: any) => {
      if (!fileNames.includes(section.sectioncover))
        throw new CustomError(`'${section.sectioncover}'가 없습니다.`);
      const views = section.views;
      if (!views) throw new CustomError("config.yaml에 views가 없습니다.");
      views.forEach((view: any) => {
        if (view.material && !fileNames.includes(view.material))
          throw new CustomError(`'${view.material}'가 없습니다.`);
        const problems = view.problems;
        if (!problems)
          throw new CustomError("config.yaml에 problems가 없습니다.");
        problems.forEach((problem: any) => {
          if (!fileNames.includes(problem.content))
            throw new CustomError(`'${problem.content}'가 없습니다.`);
          if (problem.explanation && !fileNames.includes(problem.explanation))
            throw new CustomError(`'${problem.explanation}'가 없습니다.`);
        });
      });
    });
  };

  const uploadImages = async (files: FileSystemEntry[], posts: any[]) => {
    await Promise.all(
      posts.map(async ({ post: { fields, url }, filename }) => {
        const formData = new FormData();
        Object.entries(fields).forEach(([name, value]) =>
          formData.append(name, value as any)
        );
        const file = files.find((file) => file.name === filename);
        if (!file) throw new CustomError(`'${filename}'가 없습니다.`);
        formData.append("file", await getFile(file as FileSystemFileEntry));

        await axios.post(url, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      })
    );
    updateStatus("이미지 업로드 완료");
  };

  const handleWorkbook = async (folder: FileSystemEntry) => {
    try {
      const files = await readFolder(folder);
      const configEntry = files.find((file) => file.name === "config.yaml");
      if (!configEntry)
        throw new CustomError(`'${folder.fullPath}'에 config.yaml이 없습니다.`);
      const configFile = await getFile(configEntry as FileSystemFileEntry);
      const config = await readFile(configFile);
      const configObject = yaml.load(config);

      validateImages(files, configObject);
      updateStatus(`'${folder.fullPath}' 업로드 시작`);

      const formData = new FormData();
      formData.append("config", configFile);

        const {
          data: { key, posts },
        } = await rootapi
          .post(dragDiv+"/config", formData, {
            headers: { "Content-Type": "multipart/form-data" },
          })
          .catch((err) =>
          {
            throw new CustomError(err.response.data);
          });

      await uploadImages(files, posts);

      await rootapi.post(dragDiv + "/confirm", { key }).catch((err) => {
        throw new CustomError(`Error: ${err.response.data}`);
      });
      updateStatus(`'${folder.fullPath}' 완료`);
    } catch (err) {
      if (err instanceof CustomError) {
        updateStatus(`${folder.fullPath}: ${(err as CustomError).message}`);
      } else alert(err);
    }
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    const items = e.dataTransfer.items;
    if (items.length !== 1) {
      alert("하나의 폴더만 업로드해주세요");
      return;
    }
    const outerFolder = items[0].webkitGetAsEntry() as FileSystemEntry | null;
    if (!outerFolder?.isDirectory) {
      alert("폴더를 업로드해주세요");
      return;
    }

    const innerFolders = await getInnerFolders(outerFolder);
    if (innerFolders.length === 0) {
      alert("올바른 폴더가 없습니다.");
      return;
    }
    for (const innerFolder of innerFolders) await handleWorkbook(innerFolder);
  };
  // const handleDropRoot = async (e: React.DragEvent<Element>) => {
  //   setDragDiv("https://api.semomun.com/upload");

  //   await handleDrop(e);
  // };
  // const handleDropTest = async (e: React.DragEvent<Element>) => {
  //   setDragDiv("https://dev.api.semomun.com/upload");

  //   await handleDrop(e);
  // };
  return (
    <div className="w-screen h-screen flex">
      <div className="w-2/4 h-full flex-col px-2">
        <section className="p-4">
          <p>예시)</p>
          <p className="text-sm">큰 폴더</p>
          <p className="text-sm">ㄴ 중간 폴더</p>
          <p className="pl-4 text-sm">ㄴ 작은 폴더</p>
          <p className="pl-8 text-sm">ㄴ config.yaml</p>
          <p className="pl-8 text-sm">ㄴ title.png</p>
          <p className="pl-8 text-sm">ㄴ img_10001.png</p>
        </section>
        <div
          className="w-full h-64 mb-6 bg-gray-100 border border-black rounded flex flex-col justify-center items-center"
          onDrop={handleDrop}
          onDragOver={(e) => {
            e.preventDefault();
          }}
        >
          <p className="text-lg">
            {dragDiv === "https://api.semomun.com/upload" ? "본": "테스트"} 서버 업로드
          </p>
          <p>드래그 앤 드랍</p>
        </div>

        <div className="grid grid-cols-2 gap-4 h-10 mt-5">

            <div
              onClick={() => setDragDiv("https://api.semomun.com/upload")}
              className="flex justify-center items-center bg-slate-300 h-10 hover:bg-slate-400 hover:text-white hover:transition"
            >
              본 서버 admin 업로드 모드
            </div>
          

            <div
              onClick={() => setDragDiv("https://dev.api.semomun.com/upload")}
              className="flex justify-center items-center bg-slate-300 h-10 hover:bg-slate-400 hover:text-white hover:transition"
            >
              테스트 서버 admin 업로드 모드
            </div>

        </div>
      </div>
      <div className="w-2/4 h-full p-2">
        <p>실행 결과</p>
        <section className="bg-gray-50 w-full h-full flex flex-col">
          {status.map((text) => (
            <p key={text[1]}>{text[0]}</p>
          ))}
        </section>
      </div>
    </div>
  );
};
