import * as yup from "yup";
import { REGEXP } from "./regexp";

// 함수 schema
export const schema = (step) => {
  if (step === 1) {
    return yup.object().shape({
      email: yup
        .string()
        .email("이메일 양식이 올바르지 않습니다")
        .matches(REGEXP.email, "이메일 양식이 올바르지 않습니다")
        .required("이메일을 입력해주세요"),
      password: yup
        .string()
        .min(8, "8글자 이상 입력해주세요")
        .matches(
          REGEXP.password,
          "대소문자, 특수문자를 1자 이상 포함해야 합니다"
        )
        .required("비밀번호를 입력해주세요"),
    });
  } else if (step === 2) {
    return yup.object().shape({
      phoneNumber: yup
        .string()
        .matches(REGEXP.phone, "010-0000-0000 형식에 맞게 입력해주세요")
        .required("핸드폰 번호를 입력해주세요"),
      birthDay: yup.string().required("생년월일을 입력해주세요"),
    });
  } else if (step === 3) {
    return yup.object().shape({
      userText: yup
        .string()
        .min(100, "100자 이상 입력해주세요")
        .max(300, "300자 이하로 입력해주세요")
        .required("하고 싶은 말을 입력해주세요"),
    });
  }
};

// 개별 schema

// step. 01
// export const LoginSchema = yup.object().shape({
//   email: yup
//     .string()
//     .email("이메일 양식이 올바르지 않습니다") // email에 맞지 않으면 나올 에러메세지
//     .matches(REGEXP.email, "이메일 양식이 올바르지 않습니다")
//     .required("이메일을 입력해주세요"), // 입력하지 않았을때 메세지
//   password: yup
//     .string()
//     .min(8, "8글자 이상 입력해주세요") // 최소 몇자리인지:number, 에러메세지
//     .matches(REGEXP.password, "대소문자, 특수문자를 1자 이상 포함해야 합니다")
//     .required("비밀번호를 입력해주세요"), // 입력하지 않았을때 메세지
// });

// step. 02
// export const NumberSchema = yup.object().shape({
//   phoneNumber: yup
//     .string()
//     .matches(REGEXP.phone, "010-0000-0000 형식에 맞게 입력해주세요")
//     .required("핸드폰 번호를 입력해주세요"),
//   birthDay: yup.string().required("생년월일을 입력해주세요"),
// });

// step. 03
// export const UserSchema = yup.object().shape({
//   userText: yup
//     .string()
//     .min(100, "100자 이상 입력해주세요")
//     .max(300, "300자 이하로 입력해주세요")
//     .required("하고 싶은 말을 입력해주세요"),
// });
