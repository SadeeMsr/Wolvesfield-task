import { useState } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";

export default function AccordionTwo() {
  const [isClicked, setClick] = useState(false);
  return (
    <div
      className="cursor-pointer shadow w-full rounded-md border p-5"
      onClick={() => setClick(!isClicked)}
    >
      <div className="cursor-pointer flex justify-between items-center">
        <div className="flex justify-center items-center gap-2">
          <img
            className="w-12"
            src="https://icons-for-free.com/iconfiles/png/512/avatar+human+male+man+people+person+profile+user+users+icon-1320190727966457290.png"
            alt=""
          />
          <p className="font-bold text-md">About us ?</p>
        </div>
        <MdKeyboardArrowUp
          className={`${isClicked && "rotate-180"}`}
          size={25}
        />
      </div>
      <div className={`${isClicked && "hidden"} mt-8 text-slate-600`}>
        <p className="mt-8 text-slate-600">
          Hosting companies also play a significant role in optimizing website
          performance. They employ advanced technologies, such as content
          delivery networks (CDNs) and caching mechanisms, to enhance website
          loading speed and provide a seamless user experience.
        </p>

        <p className="mt-8 text-slate-600">
          Customer support is a vital aspect of a hosting company. A reliable
          hosting provider offers 24/7 technical support, ensuring prompt
          assistance in case of any issues or queries.
        </p>

        <p className="mt-8 text-slate-600">
          Hosting companies also play a significant role in optimizing website
          performance. They employ advanced technologies, such as content
          delivery networks (CDNs) and caching mechanisms, to enhance website
          loading speed and provide a seamless user experience.
        </p>

        <p className="mt-8 text-slate-600">
          A hosting company, also known as a web hosting provider, plays a
          crucial role in enabling individuals and businesses to make their
          websites accessible on the internet.
        </p>
      </div>
    </div>
  );
}
