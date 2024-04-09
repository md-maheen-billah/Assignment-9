import Banner from "../../components/Banner/Banner";
import { useLoaderData } from "react-router-dom";
import Land from "../../components/Land/Land";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Marque from "../../components/Marque/Marque";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 700 });
  }, []);
  const lands = useLoaderData();
  return (
    <div className="my-6">
      <Marque></Marque>
      <Banner></Banner>
      <div className="mt-28" data-aos="fade-up">
        <h2
          id="estate-s"
          className="text-center text-[#05386B] font-bold text-3xl  animate__animated animate__pulse animate__infinite mb-4"
        >
          Estate Section
        </h2>
        <p className="text-center text-[#05386B]">
          Explore our curated estate list below and choose your ideal property
          from a diverse selection of options.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10 mb-14">
          {lands.map((land, idx) => (
            <Land land={land} key={idx}></Land>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
