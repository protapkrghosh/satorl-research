import Container from '../Container/Container';
import { FiDollarSign } from "react-icons/fi";
import { HiOutlineHashtag } from "react-icons/hi";

const Innovation = () => {
  return (
    <div className='bg-[#F6F4F2]'>
      <Container>
        {/* all information */}
        <div className='py-[109px]'>
          <p className='font-dmSans text-[#5D423F] w-[95%] md:w-[65%] xl:w-[62%] mx-auto text-center text-[21px] capitalize'>Where ideas ignite, innovation takes flight, breaking the old chains, in decentralized domains – we champion the creators, share ownerships, and decentralize the gains</p>

          {/* 2part section  */}
          <div className='md:flex justify-center gap-6 mt-10 px-3'>
            <div className='flex justify-around items-center bg-white md:w-[450px] xl:w-[507px] h-[150px] rounded-xl mb-6 md:mb-0'>
              <div>
                <p className='font-dmSans text-[#441611] font-bold text-[32px] mb-2'>20 Million USD+</p>
                <p className='font-inter text-[#5D423F] text-[17px] capitalize'>Investment in USD</p>
              </div>

              <div className='bg-[#441611] w-14 h-14 rounded-full flex justify-center items-center'>
                <FiDollarSign className='text-[32px] text-white' />
              </div>
            </div>

            <div className='flex justify-around items-center bg-white  md:w-[450px] xl:w-[507px] h-[150px] rounded-xl'>
              <div>
                <p className='font-dmSans text-[#441611] font-bold text-[32px] mb-2'>28 (Since 2022)</p>
                <p className='font-inter text-[#5D423F] text-[17px] capitalize'>Number Of Investments</p>
              </div>
              <div className='bg-[#441611] w-14 h-14 rounded-full flex justify-center items-center'>
                <HiOutlineHashtag className='text-[32px] text-white'/>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Innovation;