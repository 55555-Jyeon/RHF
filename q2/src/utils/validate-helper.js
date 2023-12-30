export const FormValidate = ({
  email,
  pw,
  pwConfirm,
  nickName,
  phone,
  region,
  title,
}) => {
  // sign-in
  let disabled =
    !/^[0-9a-zA-Z]([-_|.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_|.]?[0-9a-zA-Z])*|.[a-zA-Z]{2,3}$/.test(
      email,
    ) || !/^[a-z0-9]+$/.test(pw);
  if (pwConfirm) {
    // sign-up
    disabled =
      disabled ||
      (pw !== pwConfirm &&
        !/^[a-zA-Z0-9]$/.test(nickName) &&
        !/^[0-9]+${,11}/.test(phone));
  }

  let errors = {
    email:
      !/^[0-9a-zA-Z]([-_|.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_|.]?[0-9a-zA-Z])*|.[a-zA-Z]{2,3}$/.test(
        email,
      ) && "이메일 양식을 확인해주세요",
    pw: !/^[a-z0-9]+$/.test(pw) && "비밀번호는 영문과 숫자만 입력해주세요",
    pwConfirm: pw !== pwConfirm && "비밀번호가 일치하지 않습니다",
    nickName:
      !/^[a-zA-Z0-9ㄱ-ㅣ가-힣]+$/.test(nickName) &&
      "닉네임에는 특수문자가 포함될 수 없습니다",
    phone: !/^[0-9]+${,11}/.test(phone) && "11자리의 숫자만 입력 가능합니다",
    region:
      !/^[ㄱ-ㅣ가-힣]+$/.test(region) &&
      "한글만 입력 가능합니다, 한국 주소를 입력해주세요",
    title:
      !/^[a-zA-Z0-9ㄱ-ㅣ가-힣]+$/.test(title) &&
      "제목은 특수문자가 포함될 수 없습니다",
  };

  let access = {
    email:
      /^[0-9a-zA-Z]([-_|.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_|.]?[0-9a-zA-Z])*|.[a-zA-Z]{2,3}$/.test(
        email,
      ) && "중복 확인을 해주세요",
    pw: /^\d+$/.test(pw) && "",
    pwConfirm: pw === pwConfirm && "비밀번호가 확인되었습니다",
    nickName: /^[a-zA-Z0-9]+$/.test(nickName) && "중복 확인을 해주세요",
    phone: /^[0-9]+${,11}/.test(phone) && "",
    region: /^[ㄱ-ㅣ가-힣]+$/.test(region) && "",
  };

  return { disabled, errors, access };
};
