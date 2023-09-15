import Header from "./Header";
import InfoSquare from "../assets/InfoSquare.png";
import Diagram from "../assets/diagram.png";
import Document from "../assets/document-code.png";
import videoHorizontal from "../assets/video-horizontal.png";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Content() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/media")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="">
      <Header />
      <div className="grid grid-cols-4 pr-3">
        <div className="p-4 mx-7.5 ">
          <div className="h-[246px] flex justify-center items-center">
            <img src="" alt="Hinh anh" />
            <button className="w-12 h-12 rounded-full bg-blue-300 focus:outline-none absolute"></button>
          </div>
          <p className="text-[18px] font-semibold py-[10px]">eqqrreg.mp4</p>
          <div className="flex flex-col gap-2.5 py-7.5">
            <button className="flex gap-2 py-1 pl-4 pr-6 hover:bg-blue-400 focus:text-white">
              <img src={InfoSquare} alt="" />
              <p className="text-[#64748B]">Thông tin Media</p>
            </button>
            <button className="flex gap-2 py-1 pl-4 pr-6">
              <img src={Diagram} alt="" />
              <p className="text-[#64748B]">Thống kê phân tích</p>
            </button>
            <button className="flex gap-2 py-1 pl-4 pr-6">
              <img src={Document} alt="" />
              <p className="text-[#64748B]">Quản lý transcoding</p>
            </button>
            <button className="flex gap-2 py-1 pl-4 pr-6">
              <img src={videoHorizontal} alt="" />
              <p className="text-[#64748B]">Quản lý xuất bản</p>
            </button>
          </div>
        </div>

        <div className="col-span-3">
          <div className="uppercase font-bold text-[24px]">video liên quan</div>
          <div className="col-span-3 grid grid-cols-3 gap-x-[30px] gap-y-4">
            {data.map((item) => (
              <div className="flex flex-col gap-2" key={item.id}>
                <div className="relative">
                  <img src={item.image} alt="" />
                  <div className="bg-[#0F1A2AB2] px-2 py-1 w-fit absolute bottom-2 right-2 text-white text-[14px]">
                    {item.time}
                  </div>
                </div>
                <p className="line-clamp-2 px-4 mb-4 font-semibold">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
