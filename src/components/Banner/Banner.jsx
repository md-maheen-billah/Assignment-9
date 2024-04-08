import { Swiper, SwiperSlide } from "swiper/react";
import slide1 from "../../assets/slide1.jpeg";
import slide2 from "../../assets/slide2.jpeg";
import slide3 from "../../assets/slide3.jpeg";
import slide4 from "../../assets/slide4.jpeg";
import slide5 from "../../assets/slide5.jpeg";
import slide6 from "../../assets/slide6.jpeg";
import "animate.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../Banner/style.css";

// import required modules
import { Pagination } from "swiper/modules";

const Banner = () => {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="bg-[url('././assets/sahape.svg')] w-full h-[400px] flex justify-center items-center rounded-lg">
        <div className="p-10">
          <h2 className="animate__animated animate__bounce animate__infinite text-4xl font-semibold text-[#EDF5E1] text-center">
            Discover Your Perfect Piece of Land
          </h2>
          <p className="text-[#EDF5E1] mt-6 leading-8">
            At TerraScope, we specialize in connecting you with the ideal
            agricultural land, ranches, farms, vineyards, forests, plantations,
            and more. Whether you&#39;re looking to rent or buy, our platform
            offers a comprehensive selection of diverse properties to suit your
            unique needs and aspirations.{" "}
          </p>
          <div className="flex justify-center mt-6">
            <a href="#estate-s">
              <button className="btn font-semibold bg-[#05386B] hover:bg-[#379683] text-[#5CDB95] border-none hover:text-[#EDF5E1]">
                Explore Now
              </button>
            </a>
          </div>
        </div>
      </div>
      <div>
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
