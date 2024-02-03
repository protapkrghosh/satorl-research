import Container from '../Container/Container';
import { FiDollarSign } from "react-icons/fi";
import { HiOutlineHashtag } from "react-icons/hi";
import CountUp from 'react-countup';

const Innovation = () => {
  return (
    <div className='bg-[#F6F4F2]'>
      <Container>
        {/* Section heading info */}
        <div className='py-[109px]'>
          <p className='font-dmSans text-[#5D423F] w-[95%] md:w-[65%] xl:w-[62%] mx-auto text-center text-[21px] capitalize'>Where ideas ignite, innovation takes flight, breaking the old chains, in decentralized domains – we champion the creators, share ownerships, and decentralize the gains</p>

          {/* Cards  */}
          <div className='md:flex justify-center gap-6 mt-10 px-3'>
            <div className='flex justify-around items-center bg-white md:w-[450px] xl:w-[507px] h-[150px] rounded-xl mb-6 md:mb-0'>
              <div>
                <CountUp start={0}
                  end={20}
                  duration={4}
                  separator=" "
                  suffix=" Million USD+"
                  className="text-[31px] text-[#441611] font-bold mb-2"
                />
                <p className='font-inter text-[#5D423F] text-[17px] capitalize'>Investment in USD</p>
              </div>

              <div className='bg-[#441611] w-14 h-14 rounded-full flex justify-center items-center'>
                <FiDollarSign className='text-[32px] text-white' />
              </div>
            </div>

            <div className='flex justify-around items-center bg-white  md:w-[450px] xl:w-[507px] h-[150px] rounded-xl'>
              <div>
                <CountUp
                  start={0}
                  end={28}
                  duration={4}
                  separator=" "
                  suffix=" (Since 2022)"
                  className="text-[31px] text-[#441611] font-bold mb-2"
                />
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