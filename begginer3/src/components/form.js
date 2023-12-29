import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../consts/schema";

const Pair3Form = ({
  onSubmit,
  registerArr,
  buttonText,
  inputTypeArr,
  currentStep,
}) => {
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema(currentStep)),
  });

  // 06. 뒤로가기 >> 이전 폼의 데이터가 그대로 유지될 것 (sessionStorage에 저장)
  const onSubmitFuc = (e) => {
    const arr = ["email", "password", "phoneNumber", "birthDay", "userText"];

    arr.map((inputName) => {
      if (e[inputName]) {
        sessionStorage.setItem(inputName, e[inputName]);
      }
    });

    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit(onSubmitFuc)}>
      {registerArr.map((el, idx) => (
        <div key={idx}>
          <label>{el}</label>
          <input
            type={inputTypeArr[idx]}
            name={el}
            value={sessionStorage.getItem(el)}
            {...register(el, { required: true })}
          />
          {errors[el] && <p>{errors[el].message}</p>}
        </div>
      ))}
      <button>{buttonText}</button>
    </form>
  );
};
export default Pair3Form;
