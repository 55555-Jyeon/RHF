import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../consts/schema";

const Pair3Form = ({ onSubmit, registerArr, buttonText, inputTypeArr }) => {
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onSubmitFuc = () => {
    onSubmit();
    console.log(isValid);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitFuc)}>
      {registerArr.map((el, idx) => (
        <div key={idx}>
          <label>{el}</label>
          <input
            type={inputTypeArr[idx]}
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
