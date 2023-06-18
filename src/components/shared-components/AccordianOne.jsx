import { useState } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";

export default function AccordianOne() {
  const [isClicked, setClick] = useState(false);
  return (
    <div
      className="cursor-pointer shadow w-full rounded-md border p-5"
      onClick={() => setClick(!isClicked)}
    >
      <div className="cursor-pointer flex justify-between items-center">
        <p className="font-bold">Why park a domain name in Parkname?</p>
        <MdKeyboardArrowUp
          className={`${!isClicked && "rotate-180"}`}
          size={25}
        />
      </div>
      <p className={`${!isClicked && "hidden"} mt-8 text-slate-600`}>
        Parkname is the leading industry standard for domain name parking and
        monetization services.
      </p>
    </div>
  );
}
