import React, { FC } from "react";
import { Link } from "react-router-dom";
import mainImage from "../assets/images/main_image.png";

interface BooksProps {
  title: string;
  tags?: string[];
  images: string[];
}
const Books: FC<BooksProps> = ({ title, tags = [], images }) => {
  return (
    <div>
      <div className="flex items-center">
        <p className="font-bold flex-shrink-0">{title}</p>
        <div className="flex overflow-x-scroll scrollbar-hidden items-center space-x-1 ml-2">
          {tags.map((tag) => (
            <Link
              className="text-brand-2 border-brand-1 rounded-full border px-2 py-1 text-xs w-max flex-shrink-0"
              to={`/search?keyword=${tag}`}
            >
              #{tag}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex mt-2 space-x-2 h-32 overflow-x-scroll scrollbar-hidden pr-4">
        {images.map((img) => (
          <img
            key={img}
            alt="bookcover"
            src={img}
            className="h-32 w-[6.4rem] object-cover"
          />
        ))}
      </div>
    </div>
  );
};

export const MainPage = () => {
  const imageUrl =
    "https://saemomoon.com/images/bookcover/256x256/5ad2d320-5e36-4fa6-a417-ed5daa7b644a.png";
  const bestSellers = [
    imageUrl,
    imageUrl,
    imageUrl,
    imageUrl,
    imageUrl,
    imageUrl,
  ];
  const tags = ["해커스어학연구소", "토익", "파고다교육그룹", "어쩌구"];
  const tagCovers = [
    imageUrl,
    imageUrl,
    imageUrl,
    imageUrl,
    imageUrl,
    imageUrl,
  ];
  const solve = [imageUrl, imageUrl, imageUrl, imageUrl, imageUrl, imageUrl];
  const buy = [imageUrl, imageUrl, imageUrl, imageUrl, imageUrl, imageUrl];

  return (
    <div className="w-full flex flex-col items-center mb-8">
      <div className="w-full bg-brand-1 flex justify-center items-center h-96 overflow-hidden">
        <p className="text-white font-bold text-xl">세상의 모든 문제를 담다</p>
        <img src={mainImage} alt="아이패드 이미지" className="h-80" />
      </div>
      <div className="flex flex-col space-y-6 mt-6 max-w-3xl w-full pl-4">
        <Books title="베스트 셀러" images={bestSellers} />
        <Books title="나의 태그" tags={tags} images={tagCovers} />
        <Books title="최근에 푼 문제집" images={solve} />
        <Books title="최근에 구매한 문제집" images={buy} />
      </div>
    </div>
  );
};
