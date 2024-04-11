import Banner from "../../components/Banner/Banner";
import { useLoaderData } from "react-router-dom";
import Land from "../../components/Land/Land";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Marque from "../../components/Marque/Marque";
import { Helmet } from "react-helmet-async";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 700 });
  }, []);
  const lands = useLoaderData();
  return (
    <div className="mb-6">
      <Helmet>
        <title>Terra Scope</title>
      </Helmet>
      <Marque></Marque>
      <Banner></Banner>
      <div className="mt-8 lg:mt-28" data-aos="fade-up">
        <h2
          id="estate-s"
          className="text-center text-[#05386B] font-bold text-3xl  animate__animated animate__headShake  animate__slow animate__infinite mb-4"
        >
          Estate Section
        </h2>
        <p className="text-center text-[#05386B]">
          Explore our curated estate list below and choose your ideal property
          from a diverse selection of options.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 mt-4 lg:mt-10">
          {lands.map((land, idx) => (
            <Land land={land} key={idx}></Land>
          ))}
        </div>
        <div className="mt-8 lg:mt-28" data-aos="fade-up">
          <h2
            id="estate-s"
            className="text-center text-[#05386B] font-bold text-3xl  animate__animated animate__headShake  animate__slow animate__infinite mb-4"
          >
            Look For Us
          </h2>
          <p className="text-center text-[#05386B]">
            Below you will be able to see the current location of our
            organization.
          </p>
        </div>
        <div data-aos="fade-up" className="mt-4 lg:mt-10 mb-14">
          <MapContainer
            center={[50.892, 4.4182]}
            zoom={13}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[50.892, 4.4182]}>
              <Popup>We are here!</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default Home;
