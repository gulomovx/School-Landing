import bg from '../../public/m.webp'

const Hero = () => {
  return (
    <div className="w-full mx-auto  bg-slate-300">
      <div className="mx-auto content-center pt-8 h-full max-w-7xl  flex flex-col  lg:flex-row  lg:justify-between lg:items-center ">
        {/* text content */}
        <div className="text-center">
          <h1 className="text-4xl font-semibold my-4 lg:text-6xl">Insert awesome title here</h1>
          <p className="">
            Section intro. Nulla vitae elit libero, a pharetra augue. Cras justo
            odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus,
            tellus ac cursus commodo, tortor mauris condimentum nibh, ut
            fermentum massa justo sit amet risus. Cum sociis natoque penatibus.
          </p>
        </div>
              {/* img content */}
              <div className="">
                  
                 <img className=' object-cover p-8 w-full  h-[600px]  md:h-[900] md:w-[1100px] relative bottom-[-30px] '   src={bg} alt="img" /> 
              </div>
              
        
      </div>
    </div>
  );
};

export default Hero;
