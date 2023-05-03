import { useState } from "react";

const Button = ({ callback, data, value, current, setCurrent }) => {
  const handleSelect = (e) => {
    e.preventDefault();
    setCurrent(value);
    callback(data[value]);
  };

  return (
    <li onClick={handleSelect}>
      <a
        className={`uppercase text-xs md:text-sm ${current == value ? "underline text-cyan-500" : "text-normal"
          }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="w-4 h-4 mr-2 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
          ></path>
        </svg>
        {value}
      </a>
    </li>
  );
};

export const BreadCrumb = ({ callback, data }) => {
  const [current, setCurrent] = useState("frontend");
  return (
    <div className="text-sm breadcrumbs">
      <ul>
        {["frontend", "backend", "mobile"].map((item, i) => (
          <Button
            callback={callback}
            data={data}
            value={item}
            current={current}
            setCurrent={setCurrent}
            key={i}
          />
        ))}
      </ul>
    </div>
  );
};
