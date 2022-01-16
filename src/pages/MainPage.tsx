import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { fetcher, useQueriesConsistent } from "../plugins/react-query";
import { CategoryInfo, NestedWorkbooks } from "../types";

export const MainPage = () => {
  const { data: category_info } = useQuery<CategoryInfo>(
    "info/category",
    fetcher
  );
  const categories: string[] = category_info?.category ?? [];
  const results = useQueriesConsistent<NestedWorkbooks>(
    categories.map((category) => `workbooks?c=${category}&page=1`)
  );
  const [images, setImages] = useState<string[][]>([]);

  useEffect(
    () =>
      setImages(
        results.map(({ data, isFetched }) =>
          isFetched
            ? data!.workbooks.slice(0, 5).map((workbook) => workbook.bookcover)
            : []
        )
      ),
    [results]
  );

  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex flex-col space-y-6 mt-4">
        {categories.map((category, idx) => (
          <div key={category}>
            <p className="font-bold">{category}</p>
            <div className="flex mt-2 space-x-2">
              {(images[idx] ?? []).map((img) => (
                <img
                  key={img}
                  alt="bookcover"
                  src={`${process.env.REACT_APP_API_URL}/images/bookcover/128x128/${img}`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
