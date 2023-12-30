import { useUser } from "../context";

const Header = () => {
  const { isLogin } = useUser();

  return (
    <div>
      <h1>게시판</h1>

      {isLogin ? <div>안녕하세요 OOO님</div> : <button>로그인하기</button>}
    </div>
  );
};

export default Header;
