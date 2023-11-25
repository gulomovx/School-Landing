import { IoSearchOutline } from "react-icons/io5";
import Calendar from "./Calendar";
import ImgTitle from "./ImgTitle";
import iconImage from "../assets/Icons/image.png";
import ElonCard from "../cards/ElonCard";
import Pagination from "./Pagination";
import Carousel from "./Carousel";
import Slider from "./Slider";
import SliderVideo from "./Slider";
import Galereya from "./Galereya";
import ContactUs from "./ContactUs";
import Footer from "./Footer";

const AboutUs = () => {
  return (
    <div className="max-w-7xl mx-auto mt-8 mb-56">
      <div className="flex justify-between  items-center gap-4">
        {/* search, calendar.... */}
        <div className="hidden md:block relative  top-[-1750px]">
          {/* input */}
          <div className="flex items-center relative gap-2 px-2 py-[4px] pr-12 border  ">
            <IoSearchOutline />
            <input
              type="text"
              placeholder="Search"
              className="outline-none w-full"
            />
          </div>
          {/* calendar */}
          <div className="hidden md:block relative ">
            <Calendar />
            <div className="flex flex-col gap-4 ">
              <ImgTitle img={iconImage} title="Biz haqimizda" />
              <ImgTitle img={iconImage} title={`E'lonlar`} />
              <ImgTitle img={iconImage} title="Maktab hayotidan lavhalar" />
              <ImgTitle img={iconImage} title="Galereya" />
              <ImgTitle img={iconImage} title="Boglanish uchun" />
            </div>
          </div>
          {/* titles */}
        </div>
        {/* about us , cards */}
        <div className=" md:w-[70%] w-[90%] mx-auto     ">
          <h1 className="text-4xl text-slate-900 text-center mb-8">
            Biz haqimizda
          </h1>
          <div className="flex justify-between items-center gap-4   ">
            <div className="bg-slate-300 w-full md:p-32 py-28 px-20 flex justify-center text-center items-center">
              <img src={iconImage} alt="" />
            </div>
            <div className="">
              <h1 className="text-2xl md:text-4xl">
                Insert awesome title here
              </h1>
              <p className="leading-1 text-[10px] md:text-[16px]">
                Section intro. Nulla vitae elit libero, a pharetra augue. Cras
                justo odio, dapibus ac facilisis in, egestas eget quam. Fusce
                dapibus, tellus ac cursus commodo, tortor mauris condimentum
                nibh, ut fermentum massa justo sit amet risus. Cum sociis
                natoque penatibus.
              </p>

              <p className=" leading-1  text-[10px] md:text-[16px]">
                Section intro. Nulla vitae elit libero, a pharetra augue. Cras
                justo odio, dapibus ac facilisis in, egestas eget quam. Fusce
                dapibus, tellus ac cursus commodo, tortor mauris condimentum
                nibh, ut fermentum massa justo sit amet risus. Cum sociis
                natoque penatibus.
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center gap-4 my-16 ">
            <div className="">
              <h1 className="text-2xl md:text-4xl">
                Insert awesome title here
              </h1>
              <p className="leading-1 text-[10px] md:text-[16px]">
                Section intro. Nulla vitae elit libero, a pharetra augue. Cras
                justo odio, dapibus ac facilisis in, egestas eget quam. Fusce
                dapibus, tellus ac cursus commodo, tortor mauris condimentum
                nibh, ut fermentum massa justo sit amet risus. Cum sociis
                natoque penatibus.
              </p>

              <p className=" leading-1  text-[10px] md:text-[16px]">
                Section intro. Nulla vitae elit libero, a pharetra augue. Cras
                justo odio, dapibus ac facilisis in, egestas eget quam. Fusce
                dapibus, tellus ac cursus commodo, tortor mauris condimentum
                nibh, ut fermentum massa justo sit amet risus. Cum sociis
                natoque penatibus.
              </p>
            </div>
            <div className="bg-slate-300 w-full md:p-32 py-28 px-20 flex justify-center text-center items-center">
              <img src={iconImage} alt="" />
            </div>
          </div>

          {/* E'lonlar */}

          <h1 className="text-center text-3xl my-8 font-semibold">E'lonlar</h1>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <ElonCard />
            <ElonCard />
            <ElonCard />
            <ElonCard />
            <ElonCard />
            <ElonCard />
          </div>
          {/* pagination */}
          <Pagination />
          {/* Maktab hayotidan lavhalar */}
          <div className="w-full mx-auto my-16">
            <h1 className="text-center font-semibold text-4xl my-8">
              Maktab hayotidan lavhalar
            </h1>
            <SliderVideo />
            <h1 className="text-slate-900 font-semibold text-3xl md:text-4xl text-center my-12 ">
              Galereya
            </h1>
            <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-2 gap-4 ">
              <Galereya />
              <Galereya />
              <Galereya />
              <Galereya />
              <Galereya />
              <Galereya />
              <Galereya />
              <Galereya />
              <Galereya />
              <Galereya />
              <Galereya />
              <Galereya />
            </div>
            {/* input calendar */}
            <div className="flex items-center relative gap-2 px-2 py-[4px] pr-12 border my-8 md:hidden  ">
              <IoSearchOutline />
              <input
                type="text"
                placeholder="Search"
                className="outline-none w-full"
              />
            </div>
            <div className="mb-72 md:hidden">
              <Calendar />
            </div>

            {/* boglanish */}
            <h1 className="text-slate-900 font-semibold text-3xl md:text-4xl text-center my-12 ">
              Bog'lanish uchun
            </h1>
            <ContactUs />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
