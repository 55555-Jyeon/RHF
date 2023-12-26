/* 
step3. 하고싶은 말을 입력합니다. (100자 이상 300자 이내)
*/

import Pair3Form from "../../components/form";

const StepThree = () => {
  const register = ["userText"];
  const inputType = ["text"];

  const onSubmit = () => {
    console.log("step three");
  };

  return (
    <Pair3Form
      onSubmit={onSubmit}
      registerArr={register}
      inputTypeArr={inputType}
      buttonText="회원가입"
    />
  );
};

export default StepThree;
