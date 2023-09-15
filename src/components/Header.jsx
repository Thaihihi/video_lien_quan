import Notification from "../assets/Notification.png";
import Flag from "../assets/Flag.png";
import MenuHide from "../assets/MenuHide.png";

export default function Header() {
  return (
    <div className="flex justify-between px-7 mt-4">
      <div className="flex gap-4">
        <img src={MenuHide} className="h-fit" alt="" />
        <span className="font-bold ">Quản lý nội dung</span>
      </div>
      <div className="flex gap-7 items-center">
        <img src={Notification} className="h-fit" alt="" />
        <img src={Flag} className="h-fit" alt="" />
        <div className="flex gap-4">
          <div className="w-[50px] h-[50px] rounded-full bg-orange-200"></div>
          <div className="">
            <div>Quản Trị Viên</div>
            <div>Super Admintrator</div>
          </div>
        </div>
      </div>
    </div>
  );
}
