import { DialLogState, useDiaLogStore } from "../../contexts/DiaLogProvider";
import UserName from "./components/username";
import Weather from "./components/weather";

const HomePage = () => {
  const [, setDiaLogAttribute] = useDiaLogStore();

  const onPressNavigateBlog = () => {
    setDiaLogAttribute({
      type: DialLogState.ALERT,
      text: "정말로 페이지를 이동하겠습니까",
      isOpen: true,
      onConfirm: async () => {
        await setDiaLogAttribute({ isOpen: false });
        window.location.href = "/posts";
      },
    });
  };

  return (
    <>
      <UserName />
      <div>
        <Weather />
        <button onClick={onPressNavigateBlog}>블로그 보러가기</button>
      </div>
    </>
  );
};
export default HomePage;
