import React from "react";

export const MonthSelector = () => {
  const months = ["3개월", "6개월", "9개월", "12개월"];
  return (
    <div className="flex bg-brand-3 py-1 px-4 space-x-2">
      <div className="flex space-x-1.5">
        {months.map((month) => (
          <button key={month} className="rounded bg-white text-sm px-2 py-0.5">
            {month}
          </button>
        ))}
      </div>
      <div className="flex-grow" />
      <div className="rounded-full bg-white flex px-3 text-sm space-x-2">
        <input className="w-36" type="date" />
        <p>~</p>
        <input className="w-36" type="date" />
      </div>
      <button className="rounded-full bg-white px-4 py-0.5 text-sm">
        검색
      </button>
    </div>
  );
};
