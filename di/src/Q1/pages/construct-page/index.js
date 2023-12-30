import { useUser } from "../../context";

const ConstructPage = () => {
  const { isLogin } = useUser();

  return (
    <div>
      <h3>글쓰기</h3>
      <textarea />
      <button disabled={isLogin}>제출하기</button>
    </div>
  );
};

export default ConstructPage;
