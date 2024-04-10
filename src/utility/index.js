import toast from "react-hot-toast";
// get
export const getWishLand = () => {
  let lands = [];
  const storedWishLands = localStorage.getItem("lands");
  if (storedWishLands) {
    lands = JSON.parse(storedWishLands);
  }
  return lands;
};
// save
export const saveWishLand = (land) => {
  let lands = getWishLand();
  const isExist = lands.find((l) => l.id === land.id);
  if (isExist) {
    return toast.error("Already Wishlisted");
  }
  lands.push(land);
  localStorage.setItem("lands", JSON.stringify(lands));
  toast.success("Wishlisted");
};
// delete
export const deleteWishList = (id) => {
  let lands = getWishLand();
  const remaining = lands.filter((l) => l.id !== id);
  localStorage.setItem("lands", JSON.stringify(remaining));
  toast.success("Removed from Wishlist");
};
