import { useSearchParams } from "react-router-dom";

const PagenationBtn = ({ startPage, currentPage, totalPage, endPage }) => {
  const [params, setParams] = useSearchParams();

  const isPrevPageVisible = startPage !== 1;
  const isNextPageVisible =
    Math.ceil(currentPage / LIMIT_PAGE) !== Math.ceil(totalPage / LIMIT_PAGE);

  const onClickPage = (page) => {
    setParams({
      page,
    });
  };

  return (
    <div>
      {isPrevPageVisible && (
        <button onClick={() => setParams({ page: startPage - 1 })}>이전</button>
      )}
      {Array(endPage - startPage + 1)
        .fill()
        .map((_, i) => startPage + i)
        .map((page) => (
          <button key={page} onClick={() => onClickPage(page)}>
            {page}
          </button>
        ))}
      {isNextPageVisible && (
        <button onClick={() => setParams({ page: endPage + 1 })}>다음</button>
      )}
    </div>
  );
};
export default PagenationBtn;
