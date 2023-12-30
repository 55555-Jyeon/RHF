const compactString = (textLength) => {
  const MAX_LENGTH = textLength; // 문자열 길이 제한

  const compactText = (text) => {
    if (textLength > MAX_LENGTH) {
      return text.substring(0, MAX_LENGTH) + "...";
    }
    return text;
  };

  return compactText;
};

export default compactString;
