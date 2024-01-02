import { createContext, useContext, useRef, useState } from "react";
import Dialog from "../components/Dialog";
import { DialogConfig } from "../consts/dialog.config";

const DiaLogContext = createContext();

export const useDiaLogStore = () => useContext(DiaLogContext);

const DiaLogProvider = ({ children }) => {
  const diaLogRef = useRef();

  const [diaLogAttribute, setDiaLogAttribute] = useState({
    type: DialogConfig.ALERT,
    text: "",
    isOpen: false,
    endPoint: "",
  });

  // diaLogAttribute 상태 수정 함수
  const setKeepPrevDialogAttribute = (args) => {
    setDiaLogAttribute((prev) => ({
      ...prev,
      ...args,
    }));
  };

  // diaLog 컴포넌트 닫아주는 함수
  const onCloseDiaLog = () => {
    setDiaLogAttribute((prev) => ({
      ...prev,
      isOpen: false,
    }));
  };

  return (
    <DiaLogContext.Provider
      value={{
        diaLogAttribute,
        setKeepPrevDialogAttribute,
        onCloseDiaLog,
      }}
    >
      {children}
      <Dialog {...{ ...diaLogAttribute }} ref={diaLogRef} />
    </DiaLogContext.Provider>
  );
};
export default DiaLogProvider;
