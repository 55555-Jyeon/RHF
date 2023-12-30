import { mockDataKeyword } from "../../util/data-keyword";

const MovieList = () => {
  const movieList = mockDataKeyword(movieList);

  return (
    <div>
      <label>영화목록</label>
      {movieList.map((el, index) => (
        <div key={index}>{el}</div>
      ))}
    </div>
  );
};
export default MovieList;
