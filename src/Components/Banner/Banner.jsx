import Container from "../Container/Container";
import icon from '../../assets/header people/Vector.png'
import bannerImg from '../../assets/VCS landing page/Group 71031@2x.png'
import avatar from '../../assets/header people/Group 71017.png'

const Banner = () => {
  return (
    <Container>
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center mt-16 mb-[85px]">
        {/* Contents */}
        <div className="md:w-1/2">
          <div className="flex items-center">
            <p className="text-[#F6524E] text-[15px] font-semibold font-inter uppercase mr-2">Satori Ventures</p>
            <div className="relative">
              <img src={icon} alt="Icon" />
              <div className="animate-ping absolute top-0 inline-flex h-5 w-5 bg-[#F6524E] rounded-full opacity-40"></div>
            </div>
          </div>

          <div className="text-[42px] md:text-[62px] text-[#441611] font-dmSerifDisplay">
            <div className="flex items-center">
              <h2 className="mr-3">Fostering</h2>
              <img src={avatar} alt="Peoples" className="w-[120px] mt-3"/>
            </div>
            <h2 className="md:-my-5">The <span className="text-[#9B0801]">Blockchain</span></h2>
            <h2>Renaissance</h2>
          </div>

          <p className="text-[#5D423F] font-dmSans capitalize w-[86%] mt-1">the transformative power of blockchain and its capacity to redefine economies. We invest in the potential.</p>
        </div>

        {/* Image */}
        <div className="md:w-1/2">
          <img src={bannerImg} alt="Image" className="w-[80%] md:w-full mx-auto" />
        </div>
      </div>
    </Container>
  );
};

export default Banner;
