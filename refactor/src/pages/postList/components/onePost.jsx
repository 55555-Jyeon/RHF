import { DialLogState, useDiaLogStore } from "../../../contexts/DiaLogProvider";

const OnePost = ({ title, content, nickName, id }) => {
  const [, setDiaLogAttribute] = useDiaLogStore();

  const onClickPost = async (postId) => {
    await setDiaLogAttribute({
      type: DialLogState.CONFIRM,
      text: "정말로 페이지를 이동하겠습니까",
      isOpen: true,
      onConfirm: async () => {
        await setDiaLogAttribute({
          text: "정말로 이동해버린다요!",
          onConfirm: async () => {
            window.location.href = `/post-detail/${postId}`;
          },
        });
      },
      onCancel: () => {
        setDiaLogAttribute({ isOpen: false });
      },
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
