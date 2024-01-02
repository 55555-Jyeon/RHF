import React, { useEffect } from "react";
import { useDiaLogStore } from "../contexts/DiaLogProvider";
import { DialogConfig } from "../consts/dialog.config";
import { styled } from "styled-components";

const Dialog = React.forwardRef(({ type, text, isOpen, endPoint }, ref) => {
  const { onCloseDiaLog } = useDiaLogStore();

  useEffect(() => {
    if (isOpen) return ref.current.showModal();
    ref.current.close();
  }, [isOpen]);

  const onMovePage = () => {
    onCloseDiaLog();
    window.location.href = endPoint;
  };

  const onMovePageCancel = () => {
    onCloseDiaLog();
  };

  return (
    <S.Wrapper ref={ref}>
      <button onClick={onCloseDiaLog}>x</button>
      {text}
      <S.Button onClick={onMovePage}>확인</S.Button>
      {type === DialogConfig.CONFIRM && (
        <S.Button onClick={onMovePageCancel}>취소</S.Button>
      )}
    </S.Wrapper>
  );
});

export default Dialog;

const Wrapper = styled.dialog`
  width: 400px;
  position: absolute;
  left: 50%;
  top: 10%;
  transform: translate(-50%, -50%);
  border-radius: 8px;
  border: 1px solid #888;
  ::backdrop {
    background: rgba(0, 0, 0, 0.6);
  }
`;

const Button = styled.button`
  padding: 8px;
`;

const BackDrop = styled.div`
  width: 100%;
`;

const S = {
  Wrapper,
  Button,
  BackDrop,
};
