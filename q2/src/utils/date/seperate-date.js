// 연 월 일 요일 시간 분 초를 각각 나눠주는 함수
import dayjs from "dayjs";

const seperateDate = (time) => {
  const year = dayjs(time).get("year");
  const month = dayjs(time).get("month");
  const date = dayjs(time).get("date"); // 일
  const day = dayjs(time).get("day"); // 요일
  const hour = dayjs(time).get("hour");
  const minute = dayjs(time).get("minute");
  const second = dayjs(time).get("second");
  const millisecond = dayjs(time).get("millisecond");

  return [year, month, date, day, hour, minute, second, millisecond];
};

export default seperateDate;
