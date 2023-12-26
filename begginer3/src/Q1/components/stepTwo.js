import Pair3Form from "../../components/form";
/* 
step2. 연락처와 생년 월일을 입력합니다. 
        - 핸드폰 번호는 13글자이며 형태는 010-0000-0000
        - 생년 월일은 YYYY-MM-DD 형식
*/

const StepTwo = () => {
  const register = ["phoneNumber", "birthDay"];
  const inputType = ["text", "date"];

  const onSubmit = () => {
    console.log("step two");
  };

  return (
    <Pair3Form
      onSubmit={onSubmit}
      registerArr={register}
      buttonText="다음"
      inputTypeArr={inputType}
    />
  );
};

export default StepTwo;
