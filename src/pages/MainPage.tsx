import React, { FC, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import bannerImage from "../assets/images/banner1.png";
import bannerImage2 from "../assets/images/landing1.png";
import { useInterval, useThrottle } from "../hooks";
import { range } from "../utils";

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
              key={tag}
            >
              #{tag}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex mt-2 space-x-2 h-32 overflow-x-scroll pr-4">
        {images.map((img, idx) => (
          <img
            key={idx}
            alt="bookcover"
            src={img}
            className="h-32 w-[6.4rem] object-cover"
          />
        ))}
      </div>
    </div>
  );
};

interface DotsProps {
  count: number;
  current: number;
  size: number;
  onClick?: (idx: number) => void;
}

const Dots: FC<DotsProps> = ({ count, current, size, onClick }) => {
  return (
    <div className="flex absolute -translate-x-1/2 left-2/4 space-x-2 z-20 bottom-2">
      {range(count).map((idx) => (
        <div
          key={idx}
          className={`rounded-full h-1.5 w-1.5 ${
            current === idx ? "bg-gray-200" : "bg-gray-400"
          }`}
          style={{ width: `${size}px`, height: `${size}px` }}
          onClick={() => onClick?.(idx)}
        />
      ))}
    </div>
  );
};

const Banner = () => {
  const banner = useMemo(() => [bannerImage, bannerImage2], []);
  const [bannerIdx, setBannerIdx] = useState(0);
  const mod = banner.length * 50;
  const [timerReset, timerClear] = useInterval(
    () => setBannerIdx((idx) => (idx + 1) % mod),
    3500
  );
  const originXRef = useRef<number | null>(null);
  const newXRef = useRef<number | null>(null);

  const onTouchMove = useThrottle((e: TouchEvent) => {
    newXRef.current = e.touches[0].clientX;
  }, 50);

  const slideNext = useThrottle(
    () => setBannerIdx((bannerIdx) => (bannerIdx + 1) % mod),
    300
  );
  const slidePrev = useThrottle(
    () => setBannerIdx((bannerIdx) => (bannerIdx - 1 + mod) % mod),
    300
  );

  const onTouchEnd = () => {
    if (originXRef.current && newXRef.current) {
      if (newXRef.current < originXRef.current - 50) slideNext();
      if (newXRef.current > originXRef.current + 50) slidePrev();
      originXRef.current = null;
      newXRef.current = null;
    }
    document.ontouchmove = null;
    document.ontouchend = null;
    timerReset();
  };

  const onTouchStart = (e: React.TouchEvent) => {
    originXRef.current = e.touches[0].clientX;
    document.ontouchmove = onTouchMove;
    document.ontouchend = onTouchEnd;
    timerClear();
  };

  const dotOnClick = (idx: number) => {
    setBannerIdx(
      (bannerIdx) => bannerIdx + ((idx - bannerIdx + mod) % banner.length)
    );
    timerReset();
  };

  return (
    <>
      <div className="hidden md:flex w-full bg-brand-1 justify-center items-center h-96 overflow-hidden relative">
        <div className="max-w-2xl flex items-center h-full w-144 relative overflow-hidden">
          {range(21, -10).map((idx) => (
            <img
              onTouchStart={onTouchStart}
              className="object-contain w-full h-full transform transition-all -translate-x-1/2 absolute duration-1000"
              style={{ left: `${50 + 100 * idx}%` }}
              key={(bannerIdx + idx + mod) % mod}
              src={banner[(bannerIdx + idx + mod) % banner.length]}
              alt="banner"
            />
          ))}
        </div>
        <Dots
          count={banner.length}
          current={bannerIdx % banner.length}
          size={7}
          onClick={dotOnClick}
        />
      </div>
      <div className="md:hidden relative w-full h-48">
        <div className="md:hidden relative w-full overflow-hidden h-full">
          {range(banner.length + 4, -2).map((idx) => (
            <div
              className={`bg-brand-1 h-full w-72 grid place-content-center transform transition-all duration-1000 absolute -translate-x-1/2`}
              style={{ left: `calc( 50vw + ${20 * idx}rem )` }}
              key={(bannerIdx + idx + mod) % mod}
              onTouchStart={onTouchStart}
            >
              <img
                src={banner[(bannerIdx + idx + mod) % banner.length]}
                alt="banner"
              />
            </div>
          ))}
        </div>
        <Dots
          count={banner.length}
          current={bannerIdx % banner.length}
          size={7}
          onClick={dotOnClick}
        />
      </div>
    </>
  );
};

export const MainPage = () => {
  const imageUrl =
    "https://saemomoon.com/images/bookcover/256x256/5ad2d320-5e36-4fa6-a417-ed5daa7b644a.png";
  const bestSellers = [imageUrl];
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
      <Banner />
      <div className="flex flex-col space-y-6 mt-6 max-w-3xl w-full pl-4">
        <Books title="베스트 셀러 (준비중)" images={bestSellers} />
        {/*<Books title="나의 태그" tags={tags} images={tagCovers} />
        <Books title="최근에 푼 문제집" images={solve} />
  <Books title="최근에 구매한 문제집" images={buy} />*/}
      </div>
    </div>
  );
};
