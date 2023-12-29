import { useSearchParams } from "react-router-dom";
import Pair3Form from "../../components/form";

/* 
step1. 아이디와 비밀번호를 입력합니다
        - 아이디는 이메일 형태 
        - 비밀번호는 8글자 이상 대소문자, 특수문자를 1자 이상 포함
*/
const StepOne = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const register = ["email", "password"];
  const inputType = ["email", "password"];

  const onStepOneSubmit = () => {
    searchParams.set("currentStep", 2);
    setSearchParams(searchParams);
  };

  return (
    <Pair3Form
      onSubmit={onStepOneSubmit}
      registerArr={register}
      inputTypeArr={inputType}
      buttonText="다음"
      currentStep={1}
    />
  );
};

export default StepOne;
