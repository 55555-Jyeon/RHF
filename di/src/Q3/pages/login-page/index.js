import useInputs from "../../hooks/use-input";
import UseLocalStorage from "../../hooks/uselocalstorage";

const SignInPage = () => {
  const [{ id, password }, onChange] = useInputs({
    id: "",
    password: "",
  });

  const onLogin = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div onSubmit={onLogin}>
        <label>아이디</label>
        <input name="id" />
        <label>비밀번호</label>
        <input name="password" />
        <button>로그인</button>
      </div>
      <UseLocalStorage />
    </>
  );
};

export default SignInPage;
