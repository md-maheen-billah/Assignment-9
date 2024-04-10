import { Swiper, SwiperSlide } from "swiper/react";
import slide1 from "../../assets/slide1.jpeg";
import slide2 from "../../assets/slide2.jpeg";
import slide3 from "../../assets/slide3.jpeg";
import slide4 from "../../assets/slide4.jpeg";
import slide5 from "../../assets/slide5.jpeg";
import slide6 from "../../assets/slide6.jpeg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../Banner/style.css";

// import required modules
import { Pagination } from "swiper/modules";

const Banner = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between gap-4 mt-6 lg:mt-10 animate__animated animate__fadeInUpBig">
      <div className="bg-[url('././assets/sahape.svg')] w-full lg:w-9/12 lg:h-[400px] bg-cover flex justify-center items-center rounded-lg ">
        <div className="p-10">
          <h2 className="animate__animated animate__headShake  animate__slow animate__infinite text-3xl lg:text-4xl font-semibold text-[#EDF5E1] text-center">
            Discover Your Perfect Piece of Land
          </h2>
          <p className="text-[#EDF5E1] mt-6 lg:leading-8 lg:animate__animated animate__fadeInRight">
            At TerraScope, we specialize in connecting you with the ideal
            agricultural land, ranches, farms, vineyards, forests, plantations,
            and more. Whether you&#39;re looking to rent or buy, our platform
            offers a comprehensive selection of diverse properties to suit your
            unique needs and aspirations.{" "}
          </p>
          <div className="flex justify-center mt-6">
            <a href="#estate-s">
              <button className="btn animate__animated animate__pulse animate__infinite font-semibold bg-[#05386B] hover:bg-[#379683] text-[#5CDB95] border-none hover:text-[#EDF5E1]">
                Explore Now
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-3/12">
        <Swiper
          spaceBetween={20}
          slidesPerView={3}
          direction={"vertical"}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img className="transition hover:scale-95" src={slide1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="transition hover:scale-95" src={slide2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="transition hover:scale-95" src={slide3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="transition hover:scale-95" src={slide4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="transition hover:scale-95" src={slide5} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="transition hover:scale-95" src={slide6} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
