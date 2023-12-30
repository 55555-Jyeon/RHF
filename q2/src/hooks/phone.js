import React, { useState } from "react";

const PhoneDashGenerator = (phoneNumber) => {
  const [phoneNum, setPhoneNum] = useState(phoneNumber);

  const recreatePhoneNum = () => {
    const value = phoneNumber.replace(/\D+/g, "");
    const numberLength = 11;

    let result;

    for (let i = 0; i < value.length && i < numberLength; i++) {
      switch (i) {
        case 3:
          result += "-";
          break;
        case 7:
          result += "-";
          break;

        default:
          break;
      }

      result += value[i];
    }

    setPhoneNum(result);
  };

  return [phoneNum, setPhoneNum, recreatePhoneNum];
};

export default PhoneDashGenerator;
