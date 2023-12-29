/* 
step3. 하고싶은 말을 입력합니다. (100자 이상 300자 이내)
*/
import { useSearchParams } from "react-router-dom";
import Pair3Form from "../../components/form";

const StepThree = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const register = ["userText"];
  const inputType = ["text"];

  const onSubmit = () => {
    // 05. 회원가입 버튼을 누르면 이전 단계에서 작성했던 모든 데이터가 alert에 노출
    alert(`
      email : ${sessionStorage.getItem("email")},
      password : ${sessionStorage.getItem("password")},
      phoneNumber : ${sessionStorage.getItem("phoneNumber")},
      birthDay : ${sessionStorage.getItem("birthDay")},
      userText : ${sessionStorage.getItem("userText")},
    `);
  };

  return (
    <Pair3Form
      onSubmit={onSubmit}
      registerArr={register}
      inputTypeArr={inputType}
      buttonText="회원가입"
      currentStep={3}
    />
  );
};

export default StepThree;
