import { useState, useEffect } from "react";
import styled from "styled-components";

const UserName = () => {
  const [isBackGroundBlur, setIsBackGroundBlur] = useState(true);

  const onSubmitUserName = (e) => {
    e.preventDefault();
    const userName = e.target.userName.value.trim();
    if (!userName) return alert("이름을 입력해주세요");
    localStorage.setItem("userName", userName);
    setIsBackGroundBlur(false);
    e.target.userName.value = "";
  };

  useEffect(() => {
    const userName = localStorage.getItem("userName");
    if (!userName) {
      return setIsBackGroundBlur(true);
    } else setIsBackGroundBlur(false);
  }, []);

  return (
    isBackGroundBlur && (
      <S.BlurBackGround>
        <S.UserNameForm onSubmit={onSubmitUserName}>
          <input type="text" name="userName" placeholder="Enter your name" />
          <button type="submit">Submit</button>
        </S.UserNameForm>
      </S.BlurBackGround>
    )
  );
};

export default UserName;

const BlurBackGround = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 9999;
  backdrop-filter: blur(10px);
`;

const UserNameForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const S = {
  BlurBackGround,
  UserNameForm,
};
