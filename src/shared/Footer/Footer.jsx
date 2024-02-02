import { Link } from 'react-router-dom';
import img from '../../assets/footer/Group 71033.png'
import Container from '../../Components/Container/Container';

const Footer = () => {
  return (
    <div className='bg-[#441611] pt-12'>
      <Container>
        <div className='md:flex justify-between items-center mb-12'>
          <Link to="/">
            <img src={img} alt="Image" className='w-[130px]' />
          </Link>

          <div className='font-dmSans flex gap-x-10 text-white'>
            <Link to="/">Home</Link>
            <Link to="/">Portfolio</Link>
            <Link to="/">About</Link>
            <Link to="/">Contact</Link>
          </div>
        </div>
      </Container>
      <p className='text-white text-[16px] text-center font-dmSans uppercase py-5 border-t border-[#4D211D]'>©{new Date().getFullYear()} SATORI RESEARCH. All Rights Reserved.</p>
    </div>
  );
};

export default Footer;
