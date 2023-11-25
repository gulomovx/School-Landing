import React from "react";
import bg from "../../public/Rectangle 5.png";
const ContactUs = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center bg-slate-200 ">
        <div className="">
          {/* img */}
          <img src={bg} alt="" />
        </div>

        <div className=" flex flex-col p-4  h-full">
          {/* content */}
          <div className="">
            {/* text */}
            <h1 className="text-3xl my-4">Insert awesome title here</h1>
            <p className="">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex,
              quibusdam.
            </p>
          </div>
                  <div className="mt-8 flex flex-col gap-4">
                      {/* inputs */}
                      <input type="text" placeholder="Name" className="w-full p-2 outline-none" />
                      <input type="text" placeholder="+998 93-112-12-12" className="w-full p-2 outline-none" />
                      <input type="text" placeholder="Your text" className="w-full p-2 outline-none" />
                  </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
