import { useState } from "react";
import { Link } from "react-router-dom";
import { companies } from "../../Data/data";
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
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-5">
            {companies.slice(0, showMore ? companies.length : 10).map((company, index) => (
              <div className="flex justify-center items-center border p-5">
                <img key={index} src={company.logo} alt='Image' className="w-auto h-7" />
              </div>
            ))}
          </div>
        </div>

        {/* Render "See More" button */}
        <div className="flex justify-center mt-8">
          <Link onClick={() => setShowMore(!showMore)} to="/" className="text-[#441611] text-[16px] font-dmSans font-semibold border border-[#E3E3E3] hover:border-[#d8d7d7] hover:bg-[#F6F4F2] w-[150px] py-3 flex justify-center items-center rounded-md group duration-200">
            <span>{showMore ? "Show Less" : "See More"}</span>
            {showMore ? <IoIosArrowUp className='text-[18px] ml-2 duration-200' /> : <IoIosArrowDown className='text-[18px] ml-2 duration-200' />}
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Portfolio;
