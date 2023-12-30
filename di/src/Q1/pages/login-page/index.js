import { useUser } from "../../context";

const LoginPage = () => {
  const { setIsLogin } = useUser();

  const onLogin = (e) => {
    e.preventDefault();
    setIsLogin(true);
  };

  return (
    <form onSubmit={onLogin}>
      <label>아이디</label>
      <input />
      <label>비밀번호</label>
      <input />
      <button>로그인</button>
    </form>
  );
};

export default LoginPage;
