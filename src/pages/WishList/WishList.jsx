import { useEffect, useState } from "react";
import { deleteWishList, getWishLand } from "../../utility";
import WishCard from "./WishCard";
import { RiArrowDropDownLine } from "react-icons/ri";
import Marque from "../../components/Marque/Marque";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const WishList = () => {
  const [lands, setLands] = useState([]);

  useEffect(() => {
    const storedLands = getWishLand();
    setLands(storedLands);
  }, []);

  const handlePriceSort = () => {
    const sortWish = getWishLand();
    const newSortWish = sortWish.sort((a, b) => {
      return b.price - a.price;
    });
    setLands(newSortWish);
  };

  const handleSizeSort = () => {
    const sortWish = getWishLand();
    const newSortWish = sortWish.sort((a, b) => {
      return b.area - a.area;
    });
    setLands(newSortWish);
  };

  const handleDelete = (id) => {
    deleteWishList(id);
    const storedLand = getWishLand();
    setLands(storedLand);
  };

  return (
    <div>
      <Helmet>
        <title>Wishlist</title>
      </Helmet>
      <div>
        <Marque></Marque>
        <div className="flex justify-center lg:mt-8 mt-6 mx-2 lg:mx-0 ">
          <details className="dropdown">
            <summary className="btn font-semibold text-xl bg-[#05386B] hover:bg-[#379683] text-[#5CDB95] border-none hover:text-[#EDF5E1]">
              Sort By <RiArrowDropDownLine />
            </summary>
            <ul className="p-2  shadow menu dropdown-content z-10 rounded-box w-32 bg-[#379683]">
              <li>
                <a className="text-[#EDF5E1]" onClick={handlePriceSort}>
                  Price
                </a>
              </li>
              <li>
                <a className="text-[#EDF5E1]" onClick={handleSizeSort}>
                  Size
                </a>
              </li>
            </ul>
          </details>
        </div>
      </div>
      <div className="space-y-6">
        <div className="animate__animated animate__fadeInUpBig">
          {lands.length < 1 && (
            <div className="lg:mt-36 lg:mb-48 mt-4 mb-8">
              <h1 className="text-4xl text-[#05386B] text-center">
                No Wishlisted Property Found!
              </h1>
              <div className="flex justify-center mt-6">
                <Link
                  to="/"
                  className="btn animate__animated animate__pulse animate__infinite font-semibold text-lg bg-[#05386B] hover:bg-[#379683] text-[#5CDB95] border-none hover:text-[#EDF5E1]"
                >
                  View Properties
                </Link>
              </div>
            </div>
          )}
          {lands.map((land) => (
            <WishCard
              key={land.id}
              handleDelete={handleDelete}
              land={land}
            ></WishCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WishList;
