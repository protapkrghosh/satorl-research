import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import Container from "../Container/Container";

const Portfolio = () => {
  return (
    <div className="my-32">
      <Container>
        <div className="text-center">
          <h2 className="text-[33px] md:text-[32px] xl:text-[41px] text-[#441611] font-dmSerifDisplay capitalize leading-[58px]">Let’s see Our portfolio</h2>

          <p className="text-[#6F5D5B] font-dmSans capitalize w-full md:w-[46%] xl:w-[41%] mx-auto mt-4 mb-10">Discover our portfolio for a glimpse into our expertise, showcasing achievements and diverse capabilities.</p>
        </div>

        <div>
          <div className="flex justify-center">
            <Link to="/" className="text-[#441611] text-[16px] font-dmSans font-semibold border border-[#E3E3E3] hover:border-[#d8d7d7] hover:bg-[#F6F4F2] w-[150px] py-3 flex justify-center items-center rounded-md group duration-200">
              <span className=''>See More</span>
              <IoIosArrowDown className='text-[18px] ml-2' />
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Portfolio;
