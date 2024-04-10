import { useLoaderData, useParams } from "react-router-dom";
const Details = () => {
  const lands = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const land = lands.find((book) => book.id === idInt);
  return (
    <div>
      <h2>This is details {land.id}</h2>
    </div>
  );
};

export default Details;
