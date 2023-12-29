import StepOne from "./components/stepOne";
import StepTwo from "./components/stepTwo";
import StepThree from "./components/stepThree";
import { useSearchParams } from "react-router-dom";

const Begginer3SignUp = () => {
  // 쿼리 스트링으로 현재 단계 표시?
  const [searchParams, setSearchParams] = useSearchParams();

  const currentStep = searchParams.get("currentStep") || 1;

  console.log("현재 스탭 -> ", currentStep);

  return (
    <div>
      <h1>Zi존피넛123 사이트</h1>

      {Number(currentStep) === 1 && <StepOne />}
      {Number(currentStep) === 2 && <StepTwo />}
      {Number(currentStep) === 3 && <StepThree />}
    </div>
  );
};

export default Begginer3SignUp;
