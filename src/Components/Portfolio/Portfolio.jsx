import { useState } from "react";
import { Link } from "react-router-dom";
import { companies } from "../../data/data";
import Container from "../Container/Container";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Portfolio = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="my-32">
      <Container>
        <div className="text-center">
          <h2 className="text-[33px] md:text-[32px] xl:text-[41px] text-[#441611] font-dmSerifDisplay capitalize leading-[58px]">Let’s see Our portfolio</h2>
          <p className="text-[#6F5D5B] font-dmSans capitalize w-full md:w-[46%] xl:w-[41%] mx-auto mt-4 mb-10">Discover our portfolio for a glimpse into our expertise, showcasing achievements and diverse capabilities.</p>
        </div>

        {/* Render the first 5 to 10 logos */}
        <div className="relative">
          <div className="md:border-b border-[#ebedf0f6] w-[99%] absolute -mt-3 ml-4 "></div>
          <div className="border-t border-[#ebedf0f6] w-16 h-10 absolute mt-[1%] ml-[96.5%] rotate-90"></div>
          <div className="border-t border-[#ebedf0f6] w-16 h-10 absolute mt-[8.8%] ml-[96.5%] rotate-90"></div>
          {
            showMore ? <>
              <div className="border-t border-[#ebedf0f6] w-16 h-10 absolute mt-[16.2%] ml-[96.5%] rotate-90"></div>
              <div className="border-t border-[#ebedf0f6] w-16 h-10 absolute mt-[23.5%] ml-[96.5%] rotate-90"></div>
              <div className="border-t border-[#ebedf0f6] w-16 h-10 absolute mt-[31%] ml-[96.5%] rotate-90"></div>
              <div className="md:border-t border-[#ebedf0f6] w-16 h-10 absolute mt-[38.6%] ml-[56.6%] rotate-90"></div>
            </> : ''
          }

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
            {companies.slice(0, showMore ? companies.length : 10).map((company, index) => (
              <div key={index} className="flex justify-center items-center border-l p-5 relative group">
                <img src={company.logo} alt='Image' className="w-auto h-7 group-hover:scale-110 duration-300" />
                <div className="border-t border-[#ebedf0f6] w-[95%] absolute -mb-[42%] ml-5"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Render "See More" button */}
        <div className="flex justify-center mt-[45px]">
          <Link onClick={() => setShowMore(!showMore)} to="/" className="text-[#441611] text-[16px] font-dmSans font-semibold border border-[#E3E3E3] hover:border-[#d8d7d7] hover:bg-[#F6F4F2] w-[150px] py-3 flex justify-center items-center rounded-md group duration-200">
            <span>{showMore ? "Show Less" : "See More"}</span>
            {showMore ? <IoIosArrowUp className='text-[18px] ml-2 duration-300 group-hover:rotate-180' /> : <IoIosArrowDown className='text-[18px] ml-2 duration-300 group-hover:rotate-180' />}
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Portfolio;
