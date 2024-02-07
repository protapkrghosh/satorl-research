import Container from "../Container/Container";
import icon from '../../assets/header people/Vector.png'
import bannerImg from '../../assets/VCS landing page/Group 71031@2x.png'
import avatar from '../../assets/header people/Group 71017.png'

const Banner = () => {
  return (
    <Container>
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center mt-16 mb-[85px]" id="home">
        {/* Contents */}
        <div className="md:w-1/2">
          <div>
            <p className="text-[#F6524E] text-[15px] font-semibold font-inter uppercase mr-2">Satori Ventures</p>
          </div>

          <div className="text-[42px] md:text-[62px] text-[#441611] font-dmSerifDisplay">
            <h2 className="mr-3" data-aos="fade-up" data-aos-duration="600">Fostering</h2>
            <h2 className="md:-my-5" data-aos="fade-up" data-aos-duration="800">The <span className="text-[#9B0801]">Blockchain</span></h2>
            <h2 data-aos="fade-up" data-aos-duration="1000">Renaissance</h2>
          </div>

          <p className="text-[#5D423F] font-dmSans capitalize w-[86%] 2xl:w-[54%] mt-1" data-aos="fade-up" data-aos-duration="1500">the transformative power of blockchain and its capacity to redefine economies. We invest in the potential.</p>
        </div>

        {/* Image */}
        <div className="md:w-1/2 mt-14 md:mt-0" data-aos="zoom-in" data-aos-duration="1000">
          <img src={bannerImg} alt="Image" className="w-[80%] xl:w-[80%] md:w-full mx-auto heroImg" />
        </div>
      </div>
    </Container>
  );
};

export default Banner;
