// 숫자 사이에 "," 넣는 함수 (000,000)
export const numberComma = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
