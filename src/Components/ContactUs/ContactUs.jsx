import Container from "../Container/Container";
import { useForm } from "react-hook-form"

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  return (
    <div className="bg-[#F6F4F2] pt-[100px] pb-[120px]">
      <Container>
        <div className="md:flex">
          <div className="md:w-1/2 md:pl-[40px] xl:pl-[60px] mb-12 md:mb-0">
            <h2 className="text-[33px] md:text-[32px] xl:text-[41px] text-[#441611] font-dmSerifDisplay capitalize leading-[58px]">Let's start the <br /> conversation here</h2>
            <p className="text-[#6F5D5B] font-dmSans capitalize sm:w-[70%] md:w-[80%] xl:w-[71%]">Your success is our mission. As business advisors, we offer expert guidance, unlocking your potential for growth and profitability.</p>
          </div>

          {/* Contact Form */}
          <div className="md:w-1/2 md:mx-5">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="md:flex gap-x-4 mb-3">
                <div className="form-control md:w-1/2 mb-3 md:mb-0">
                  <label className="label mb-1">
                    <span className="label-text text-[#6F5D5B] font-dmSans">Full Name</span>
                  </label>
                  <input type="text" {...register("name", { required: true })} name="name" placeholder="Your Full Name" className="input placeholder:text-[14px] placeholder:text-[#6F5D5B] pl-3 font-semibold font-dmSans border border-[#e5d8d7b2]" />
                  {errors.name && <span className='text-[14px] text-rose-600'>Name is required</span>}
                </div>

                <div className="form-control md:w-1/2">
                  <label className="label mb-1">
                    <span className="label-text text-[#6F5D5B] font-dmSans">Email</span>
                  </label>
                  <input type="email" {...register("email", { required: true })} name="email" placeholder="Example@Venture.Com" className="input placeholder:text-[14px] placeholder:text-[#6F5D5B] pl-3 font-semibold font-dmSans border border-[#e5d8d7b2]" />
                  {errors.email && <span className='text-[14px] text-rose-600'>Email is required</span>}
                </div>
              </div>

              <div className="form-control mb-3">
                <label className="label mb-1">
                  <span className="label-text text-[#6F5D5B] font-dmSans">Subject</span>
                </label>
                <input type="text" {...register("subject", { required: true })} name="subject" placeholder="Example@Venture.Com" className="input placeholder:text-[14px] placeholder:text-[#6F5D5B] pl-3 font-semibold font-dmSans border border-[#e5d8d7b2]" />
                {errors.subject && <span className='text-[14px] text-rose-600'>Subject is required</span>}
              </div>

              <label className="form-control">
                <div className="label mb-1">
                  <span className="label-text text-[#6F5D5B] font-dmSans">Message</span>
                </div>
                <textarea  {...register("message", { required: true })} name="message" className="textarea h-36 placeholder:text-[14px] placeholder:text-[#6F5D5B] pl-3 font-semibold font-dmSans border border-[#e5d8d7b2]" placeholder="Text Here..."></textarea>
                {errors.message && <span className='text-[14px] text-rose-600'>Message is required</span>}
              </label>

              <div className="form-control mt-6">
                <input type="submit" value="Send Message" className="bg-[#9B0801] hover:bg-[#9b0901d8] text-white text-[15px] font-dmSans px-8 py-3 rounded-md w-[150px] flex justify-center cursor-pointer duration-200" />
              </div>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactUs;
