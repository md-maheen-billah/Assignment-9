import { useEffect, useState } from "react";
import { getWishLand } from "../../utility";
import WishCard from "./WishCard";

const WishList = () => {
  const [lands, setLands] = useState([]);

  useEffect(() => {
    const storedLands = getWishLand();
    setLands(storedLands);
  }, []);
  return (
    <div>
      <div className="mt-8 space-y-6">
        {lands.map((land) => (
          <WishCard key={land.id} land={land}></WishCard>
        ))}
      </div>
    </div>
  );
};

export default WishList;
