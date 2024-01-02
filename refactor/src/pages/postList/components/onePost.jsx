import { DialogConfig } from "../../../consts/dialog.config";
import { useDiaLogStore } from "../../../contexts/DiaLogProvider";

const OnePost = ({ title, content, nickName, id }) => {
  const { setKeepPrevDialogAttribute } = useDiaLogStore();

  const onClickPost = (postId) => {
    setKeepPrevDialogAttribute({
      type: DialogConfig.CONFIRM,
      text: "상세 페이지로 이동 하실?",
      isOpen: true,
      endPoint: `/post-detail/${postId}`,
    });
  };

  return (
    <tr onClick={() => onClickPost(id)}>
      <td>{title}</td>
      <td>{content}</td>
      <td>{nickName}</td>
    </tr>
  );
};

export default OnePost;
