import { mockDataKeyword } from "../../util/data-keyword";

const Bookingrateorder = () => {
  const Bookingrateorder = mockDataKeyword(Bookingrateorder);

  return (
    <div>
      <label>예매율순</label>
      {Bookingrateorder.map((el) => (
        <div>el</div>
      ))}
    </div>
  );
};
export default Bookingrateorder;
