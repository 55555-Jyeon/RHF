import { mockDataKeyword } from "../../util/data-keyword";

const OrderByRate = () => {
  const rate = mockDataKeyword(rate);

  return (
    <div>
      <h3>평점순</h3>
      {rate.map((movie, idx) => (
        <div key={idx}>{movie}</div>
      ))}
    </div>
  );
};
export default OrderByRate;
