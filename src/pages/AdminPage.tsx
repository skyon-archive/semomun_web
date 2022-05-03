import React, { useState } from "react";
import yaml from "js-yaml";

export const AdminPage = () => {
  const [status, setStatus] = useState<string[][]>([]);

  const readEntriesPromise = (reader: any) =>
    new Promise((resolve, reject) => {
      reader.readEntries(resolve, reject);
    }) as Promise<any[]>;

  const readFolder = async (folder: any) => {
    if (!folder?.isDirectory) {
      console.log(`'${folder.fullPath}'는 폴더가 아님`);
      return [];
    }
    const reader = folder.createReader();
    const result: any[] = [];
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

  const getFile = (file: any) =>
    new Promise((resolve, reject) => file.file(resolve, reject));

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
      return `'${config.workbook.bookcover}'가 없습니다.`;

    const sections = config.sections;
    if (!sections) return "config.yaml에 sectinos가 없습니다.";
    let error = "";
    sections.forEach((section: any) => {
      if (!fileNames.includes(section.sectioncover)) {
        error = `'${section.sectioncover}'가 없습니다.`;
        return;
      }
      const views = section.views;
      if (!views) {
        error = "config.yaml에 views가 없습니다.";
        return;
      }
      views.forEach((view: any) => {
        if (view.material && !fileNames.includes(view.material)) {
          error = `'${view.material}'가 없습니다.`;
          return;
        }
        const problems = view.problems;
        if (!problems) {
          error = "config.yaml에 problems가 없습니다.";
          return;
        }
        problems.forEach((problem: any) => {
          if (!fileNames.includes(problem.content)) {
            error = `'${problem.content}'가 없습니다.`;
            return;
          }
          if (problem.explanation && !fileNames.includes(problem.explanation)) {
            error = `'${problem.explanation}'가 없습니다.`;
            return;
          }
        });
      });
    });
    return error;
  };

  const handleWorkbook = async (folder: FileSystemEntry) => {
    const files = await readFolder(folder);
    const configFile = files.find((file) => file.name === "config.yaml");
    if (!configFile) {
      setStatus((status) =>
        status.concat([
          [
            `'${folder.fullPath}'에 config.yaml이 없습니다.`,
            new Date().toISOString(),
          ],
        ])
      );
      return;
    }
    const config = await readFile(await getFile(configFile));
    const configObject = yaml.load(config);
    const validationError = validateImages(files, configObject);
    if (validationError) {
      setStatus((status) =>
        status.concat([[validationError, new Date().toISOString()]])
      );
      return;
    }
    setStatus((status) =>
      status.concat([
        [`'${folder.fullPath}' 업로드 시작`, new Date().toISOString()],
      ])
    );
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
    for (const innerFolder of innerFolders) {
      await handleWorkbook(innerFolder);
    }
  };

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
          className="w-full h-64 bg-gray-100 border border-black rounded flex flex-col justify-center items-center"
          onDrop={handleDrop}
          onDragOver={(e) => {
            e.preventDefault();
          }}
        >
          <p className="text-lg">업로드</p>
          <p>드래그 앤 드랍</p>
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
