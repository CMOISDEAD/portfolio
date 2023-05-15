import { useState } from "react";
import { AiOutlineFolder } from "react-icons/ai";

const Button = ({ callback, data, value, current, setCurrent }) => {
  const handleSelect = (e) => {
    e.preventDefault();
    setCurrent(value);
    callback(data[value]);
  };

  return (
    <li onClick={handleSelect}>
      <a
        className={`uppercase text-xs md:text-sm ${
          current === value ? "text-blue-500" : "text-normal"
        } inline-flex content-center items-center gap-4`}
      >
        <>
          <AiOutlineFolder />
          {value}
        </>
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
