import iconImage from "../assets/Icons/image.png";
import { IoEyeOutline } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

const ElonCard = () => {
  return (
    <div className="">
      <div className="">
        <div className="bg-slate-300 w-full md:p-32 py-28 px-20 flex justify-center text-center items-center">
          <img src={iconImage} alt="" />
        </div>
        <h2 className="font-semibold">Nomi</h2>
        <p className="md:text-[16px] text-[10px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est cum velit
          facilis ullam reprehenderit quo, minima natus odit architecto
          delectus.
        </p>
        <div className="text-end flex justify-between ">
          {/* <div className=""></div> */}
          <div className="flex flex-col justify-start md:justify-between md:flex-row md:gap-4 items-center">

          <div className="flex text-start gap-4 w-full">
          <p className="flex items-center gap-2">
            <IoEyeOutline />
            123
          </p>
          <p className=" flex items-center">
            <CiCalendar />
            01.02.2023
          </p>
          </div>
            <div className="">
              
            <button className=" bg-blue-900  text-white uppercase rounded-lg py-[2px] px-2">Batafsil</button>
          </div>
          </div>
            
        </div>
      </div>
    </div>
  );
};

export default ElonCard;
