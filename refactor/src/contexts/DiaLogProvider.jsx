import { createContext, useContext, useEffect, useRef, useState } from "react";
import Dialog from "../components/Dialog";

export const DialLogState = {
  ALERT: "ALERT",
  CONFIRM: "CONFIRM",
};
/*
  상태가 아닌데 이름에 state가 들어감 이름 바꾸장
*/

const DiaLogContext = createContext();

export const useDiaLogStore = () => useContext(DiaLogContext);

const DiaLogProvider = ({ children }) => {
  const diaLogRef = useRef();

  const [diaLogAttribute, setDiaLogAttribute] = useState({
    type: DialLogState.ALERT,
    text: "",
    isOpen: false,
    onConfirm: () => {},
    onCancel: () => {},
    position: {
      x: 50,
      y: 10,
    },
  });

  useEffect(() => {
    if (diaLogAttribute.isOpen) return diaLogRef.current.showModal();
    // showModal() : <dialog>태그의 메서드. 모달 형태로 표시해줌.
    diaLogRef.current.close();
  }, [diaLogAttribute.isOpen]);

  const setKeepPrevDialogAttribute = async (args) => {
    setDiaLogAttribute((prev) => ({
      ...prev,
      ...args,
    }));
  };

  const onCloseDiaLog = () => {
    setDiaLogAttribute((prev) => ({
      ...prev,
      isOpen: false,
    }));
  };

  return (
    <DiaLogContext.Provider
      value={[diaLogAttribute, setKeepPrevDialogAttribute]}
    >
      {children}
      <Dialog
        {...{ ...diaLogAttribute }}
        ref={diaLogRef}
        onClose={onCloseDiaLog}
      />
    </DiaLogContext.Provider>
  );
};
export default DiaLogProvider;

/*
  context관련 로직과 dialog컴포넌트에 필요한 로직을 분리시키기.
*/
