import dayjs from "dayjs";

// YYYY-MM-DD 형식으로 만들어 주는 함수
const dateFormat = (date) => {
  const resultDate = dayjs(date).format("YYYY-MM-DD");

  return resultDate;
};

export default dateFormat;
