import { useSearchParams } from "react-router-dom";
import Pair3Form from "../../components/form";
/* 
step2. 연락처와 생년 월일을 입력합니다. 
        - 핸드폰 번호는 13글자이며 형태는 010-0000-0000
        - 생년 월일은 YYYY-MM-DD 형식
*/

const StepTwo = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const register = ["phoneNumber", "birthDay"];
  const inputType = ["text", "date"];

  const onSubmit = () => {
    searchParams.set("currentStep", 3);
    setSearchParams(searchParams);
  };

  return (
    <Pair3Form
      onSubmit={onSubmit}
      registerArr={register}
      buttonText="다음"
      inputTypeArr={inputType}
      currentStep={2}
    />
  );
};

export default StepTwo;
