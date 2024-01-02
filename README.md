### Pair3 Amy , Jack , Daniel

### 과제 4번 - 리펙터링 하기

코드 전체적으로 퍼져있던 상수로 정의 된 못난놈들 모아둠 (ex limit , alert 등)

- 페이네이션

- pages 폴더

- diaLog

```
📦spaghetti
 ┣ 📂public
 ┃ ┣ 📜mockServiceWorker.js
 ┃ ┗ 📜vite.svg
 ┣ 📂src
 ┃ ┣ 📂__mock__
 ┃ ┃ ┣ 📂api
 ┃ ┃ ┃ ┗ 📜post.api.js
 ┃ ┃ ┣ 📂data
 ┃ ┃ ┃ ┗ 📜post.data.js
 ┃ ┃ ┣ 📜.DS_Store
 ┃ ┃ ┣ 📜browser.js
 ┃ ┃ ┗ 📜handler.js
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📂pagenation
 ┃ ┃ ┃ ┣ 📜Pagenation.Comment.jsx
 ┃ ┃ ┃ ┗ 📜Pagenation.Post.jsx
 ┃ ┃ ┣ 📜.DS_Store
 ┃ ┃ ┗ 📜Dialog.jsx
 ┃ ┣ 📂contexts
 ┃ ┃ ┗ 📜DiaLogProvider.jsx
 ┃ ┣ 📂pages
 ┃ ┃ ┣ 📜Home.jsx
 ┃ ┃ ┣ 📜Post.Detail.jsx
 ┃ ┃ ┗ 📜Post.List.jsx
 ┃ ┣ 📂third-party
 ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┗ 📜weather.config.js
 ┃ ┣ 📜.DS_Store
 ┃ ┣ 📜App.jsx
 ┃ ┣ 📜app.css
 ┃ ┗ 📜main.jsx
 ┣ 📜.DS_Store
 ┣ 📜index.html
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┣ 📜vite.config.js
 ┗ 📜yarn.lock
```

---

```
📦refactor
 ┣ 📂.vite
 ┣ 📂public
 ┃ ┣ 📜mockServiceWorker.js
 ┃ ┗ 📜vite.svg
 ┣ 📂src
 ┃ ┣ 📂__mock__
 ┃ ┃ ┣ 📂api
 ┃ ┃ ┃ ┗ 📜post.api.js
 ┃ ┃ ┣ 📂data
 ┃ ┃ ┃ ┗ 📜post.data.js
 ┃ ┃ ┣ 📜.DS_Store
 ┃ ┃ ┣ 📜browser.js
 ┃ ┃ ┗ 📜handler.js
 ┃ ┣ 📂apis
 ┃ ┃ ┣ 📜core.js
 ┃ ┃ ┣ 📜post.js
 ┃ ┃ ┗ 📜weather.js
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📂pagenation
 ┃ ┃ ┃ ┣ 📜pagenation.button.jsx
 ┃ ┃ ┃ ┗ 📜pagination.txt
 ┃ ┃ ┣ 📜.DS_Store
 ┃ ┃ ┗ 📜Dialog.jsx
 ┃ ┣ 📂consts
 ┃ ┃ ┣ 📜dialog.config.jsx
 ┃ ┃ ┗ 📜pagenation.config.jsx
 ┃ ┣ 📂contexts
 ┃ ┃ ┗ 📜DiaLogProvider.jsx
 ┃ ┣ 📂pages
 ┃ ┃ ┣ 📂home
 ┃ ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┃ ┣ 📜username.jsx
 ┃ ┃ ┃ ┃ ┗ 📜weather.jsx
 ┃ ┃ ┃ ┣ 📜home.jsx
 ┃ ┃ ┃ ┗ 📜homepage.txt
 ┃ ┃ ┣ 📂postDetail
 ┃ ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┃ ┣ 📜commentList.jsx
 ┃ ┃ ┃ ┃ ┣ 📜detailPost.jsx
 ┃ ┃ ┃ ┃ ┗ 📜oneComment.jsx
 ┃ ┃ ┃ ┣ 📜Post.Detail.jsx
 ┃ ┃ ┃ ┗ 📜postDetail.txt
 ┃ ┃ ┗ 📂postList
 ┃ ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┃ ┣ 📜onePost.jsx
 ┃ ┃ ┃ ┃ ┗ 📜postList.jsx
 ┃ ┃ ┃ ┣ 📜post.ListPage.jsx
 ┃ ┃ ┃ ┗ 📜postList.txt
 ┃ ┣ 📂routers
 ┃ ┃ ┗ 📜router.js
 ┃ ┣ 📂third-party
 ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┗ 📜weather.config.js
 ┃ ┣ 📂util
 ┃ ┃ ┣ 📜handle-page.js
 ┃ ┃ ┗ 📜util.refactor.txt
 ┃ ┣ 📜.DS_Store
 ┃ ┣ 📜.env
 ┃ ┣ 📜.env.sample
 ┃ ┣ 📜App.jsx
 ┃ ┣ 📜app.css
 ┃ ┗ 📜main.jsx
 ┣ 📜.DS_Store
 ┣ 📜index.html
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┣ 📜refactor.txt
 ┣ 📜vite.config.js
 ┗ 📜yarn.lock
```

---

### http 요청 함수 분리

기존 스파게티 코드에서는 각 페이지마다 http 요청 함수를 쓰고 중복된 api 주소에 대한 요청도 많았습니다.

그래서 저희는 apis 폴더에 각 http 요청 함수를 api 주소와 관심사에 맞게 분리했습니다.

```

import { axiosInstance } from "./core";

export const getCommentData = async (paramsData) => {
  const res = await axiosInstance().get("/comments", {
    params: {
      page: paramsData.page,
      take: paramsData.take,
      limit: paramsData.limit,
    },
  });
  return res.data;
};

export const getPostData = async (paramsData) => {
  const res = await axiosInstance().get("/posts", {
    params: {
      page: paramsData.page,
      take: paramsData.take,
      limit: paramsData.limit,
    },
  });
  return res.data;
};

export const getDetailPostData = async () => {
  const res = await axiosInstance().get("/post");
  return res.data;
};

```

---

### consts 폴더 생성

기존 스파게티 코드에서 각 페이지마다 필요한 값을 상수로 정의해서 사용하고 있었습니다.

해당 상수들은 중복되는 값이 많았고 각페이지 마다 개별로 정의 되어 있어서 유지보수가 힘들 거 같다고 생각했습니다.

따라서 consts 폴더 생성 후 모듈화하여 관리하기로 했습니다.

```

export const DialogConfig = {
  ALERT: "ALERT",
  CONFIRM: "CONFIRM",
};

export const PaginationConfig = {
  LIMIT_PAGE: 10,
  LIMIT_TAKE: 20,
};

```

---

### 페이지네이션 로직

기존 코드에서는 CommentPageNation와 PostPageNation의 jsx 부분이 완전히 동일하고 request url만 달랐습니다.

그래서 저희는 postListPage와 postDetailPage에서 api 요청 값인 res.data.Pagination값을 프롭으로 전달 받아,페이지네이션 버튼을 생성 해주는

paginationBtn 공용 컴포넌트를 만들었습니다.

```
[ spaghetti code ] : pagenation.post.jsx

import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const LIMIT_PAGE = 10;
const LIMIT_TAKE = 20;

const PostPageNation = () => {
  const [params, setParams] = useSearchParams();
  const [pageNation, setPageNation] = useState();

  const fetchPostPageNation = useCallback(async () => {
    const response = await axios.get("/api/posts", {
      params: {
        page: params.get("page") ?? 1,
        take: params.get("take") ?? LIMIT_TAKE,
        limit: params.get("limit") ?? LIMIT_PAGE,
      },
    });
    const pageNation = response.data.PageNation;
    setPageNation({
      ...pageNation,
    });
  }, [params]);

  useEffect(() => {
    fetchPostPageNation();
  }, [fetchPostPageNation, params]);

  const onClickPage = (page) => {
    setParams({
      page,
    });
  };

  const isPrevPageVisible = pageNation?.startPage !== 1;
  const isNextPageVisible =
    Math.ceil(pageNation?.currentPage / LIMIT_PAGE) !==
    Math.ceil(pageNation?.totalPage / LIMIT_PAGE);

  return (
    <div>
      {isPrevPageVisible && (
        <button onClick={() => setParams({ page: pageNation.startPage - 1 })}>
          이전
        </button>
      )}
      {pageNation &&
        Array(pageNation.endPage - pageNation.startPage + 1)
          .fill()
          .map((_, i) => pageNation.startPage + i)
          .map((page) => (
            <button key={page} onClick={() => onClickPage(page)}>
              {page}
            </button>
          ))}
      {isNextPageVisible && (
        <button onClick={() => setParams({ page: pageNation.endPage + 1 })}>
          다음
        </button>
      )}
    </div>
  );
};
export default PostPageNation;

```

```
[refactor code] : PagenationButton.jsx

const PagenationBtn = ({
  startPage,
  currentPage,
  totalPage,
  endPage,
  setParams,
  LIMIT_PAGE,
}) => {
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

```

---

### pages 폴더 관심사 분리

기존 스파게티 코드에서는 한 컴포넌트가 하는 기능이 너무 많다고 느꼈습니다.

그래서 저희는 각 페이지 마다 components 폴더를 만들어서 하나의 컴포넌트가 하나의 기능만 담당 할 수 있도록 했습니다.

```
[spaghetti code] : Home.jsx

import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { weatherConfig } from "../third-party/weather.config";
import { DialLogState, useDiaLogStore } from "../contexts/DiaLogProvider";

const HomePage = () => {
  const [isBackGroundBlur, setIsBackGroundBlur] = useState(true);
  const [weather, setWeather] = useState();
  const [, setDiaLogAttribute] = useDiaLogStore();

  const fetchWeather = async () => {
    try {
      const response = await axios.get("/getUltraSrtNcst", {
        baseURL: weatherConfig.api,
        params: {
          serviceKey: weatherConfig.secret_key,
          dataType: "JSON",
          base_date: new Date()
            .toISOString()
            .substring(0, 10)
            .replace(/-/g, ""),
          base_time: "0600",
          nx: 60,
          ny: 127,
        },
      });
      setWeather(response.data.response.body.items.item);
    } catch (err) {
      console.log(err);
      throw new Error("failed to load weather api");
    }
  };
  /*
    http 요청 함수 분리시키기
  */

  useEffect(() => {
    fetchWeather();
    const userName = localStorage.getItem("userName");
    if (!userName) {
      return setIsBackGroundBlur(true);
    } else setIsBackGroundBlur(false);
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    const userName = e.target.userName.value.trim();
    if (!userName) return alert("이름을 입력해주세요");
    localStorage.setItem("userName", userName);
    setIsBackGroundBlur(false);
    e.target.userName.value = "";
  };

  const onPressNavigateBlog = () => {
    setDiaLogAttribute({
      type: DialLogState.ALERT,
      text: "정말로 페이지를 이동하겠습니까",
      isOpen: true,
      onConfirm: async () => {
        await setDiaLogAttribute({ isOpen: false });
        window.location.href = "/posts";
      },
    });
  };

  return (
    <>
      {isBackGroundBlur && (
        <S.BlurBackGround>
          <S.UserNameForm onSubmit={onSubmit}>
            <input type="text" name="userName" placeholder="Enter your name" />
            <button type="submit">Submit</button>
          </S.UserNameForm>
        </S.BlurBackGround>
      )}
      <div>
        <h1>Home Page</h1>
        <p>오늘의 기온</p>
        <p>{weather?.find((el) => el.category === "T1H").obsrValue}도</p>
        <S.Button onClick={onPressNavigateBlog}>블로그 보러가기</S.Button>
      </div>
    </>
  );
};
export default HomePage;

const BlurBackGround = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 9999;
  backdrop-filter: blur(10px);
`;

const UserNameForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const Button = styled.button``;

const S = {
  BlurBackGround,
  UserNameForm,
  Button,
};

```

```
[refactor code] : home.jsx

import { DialogConfig } from "../../consts/dialog.config";
import { useDiaLogStore } from "../../contexts/DiaLogProvider";
import UserName from "./components/username";
import Weather from "./components/weather";

const HomePage = () => {
  const { setKeepPrevDialogAttribute } = useDiaLogStore();

  const onPressNavigateBlog = () => {
    setKeepPrevDialogAttribute({
      type: DialogConfig.ALERT,
      text: "정말로 페이지를 이동하겠습니까?",
      isOpen: true,
      endPoint: "/posts",
    });
  };

  return (
    <>
      <UserName />
      <div>
        <Weather />
        <button onClick={onPressNavigateBlog}>블로그 보러가기</button>
      </div>
    </>
  );
};
export default HomePage;


```

---

### diaLog

기존 diaLogAttribute 상태는 다른 로직과 의존성이 높고 재사용성이 낮다고 생각이 들었습니다.

그래서 저희는 기존 navigate 기능을 담당했던 onConfirm, onCancel 함수를 지우고 endPoint라는 키 값을 생성하여

DiaLog 컴포넌트에서만 navigate 기능을 담당하게 했습니다.

또한 style적인 기능이 담긴 position 값도 분리하였습니다.

추가로 DiaLog 컴포넌트를 닫는 기능의 함수가 중복되어서 onCloseDiaLog 함수를 만들어 onCloseDiaLog함수만 컴포넌트를 닫는

역할을 하게끔 했습니다.

```
[spaghetti code] : Dialog.jsx

import React from "react";
import { DialLogState } from "../contexts/DiaLogProvider";
import { styled } from "styled-components";

const Dialog = React.forwardRef(
  ({ type, text, onConfirm, onCancel, onClose, position }, ref) => {
    return (
      <S.Wrapper ref={ref} $position={position}>
        <button onClick={onClose}>x</button>
        {text}
        <S.Button onClick={onConfirm}>확인</S.Button>
        {type === DialLogState.CONFIRM && (
          <S.Button onClick={onCancel}>취소</S.Button>
        )}
      </S.Wrapper>
    );
  }
);
// Debugging...
Dialog.displayName = "dialog";

export default Dialog;

```

```
[spaghetti code] : dialog가 post.list.jsx 에서 사용된 모습

import axios from "axios";
import { useEffect, useState } from "react";
import PostPageNation from "../components/pagenation/Pagenation.Post";
import { useSearchParams } from "react-router-dom";
import { DialLogState, useDiaLogStore } from "../contexts/DiaLogProvider";

const LIMIT_TAKE = 10;
const PostListPage = () => {
  const [params] = useSearchParams();
  const [postList, setPostList] = useState([]);
  const [, setDiaLogAttribute] = useDiaLogStore();

  const fetchPostList = async () => {
    const response = await axios.get("/api/posts", {
      params: {
        take: params.get("take") ?? LIMIT_TAKE,
      },
    });
    setPostList(response.data.Posts);
  };

  useEffect(() => {
    const userName = localStorage.getItem("userName");
    if (!userName) {
      alert("로그인이 필요합니다");
      window.location.href = "/";
    }
  }, []);

  useEffect(() => {
    fetchPostList();
  }, [params]);

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
    <table>
      <caption>Post List Page</caption>
      <tr>
        <th>제목</th>
        <th>내용</th>
        <th>작성자</th>
      </tr>
      {postList.map((post) => (
        <tr key={post.id} onClick={() => onClickPost(post.id)}>
          <td>{post.title}</td>
          <td>{post.content}</td>
          <td>{post.User.nickName}</td>
        </tr>
      ))}
      <PostPageNation />
    </table>
  );
};
export default PostListPage;


```

```
[refactor code] : Dialog.jsx

import React, { useEffect } from "react";
import { useDiaLogStore } from "../contexts/DiaLogProvider";
import { DialogConfig } from "../consts/dialog.config";
import { styled } from "styled-components";

const Dialog = React.forwardRef(({ type, text, isOpen, endPoint }, ref) => {
  const { onCloseDiaLog } = useDiaLogStore();

  useEffect(() => {
    if (isOpen) return ref.current.showModal();
    ref.current.close();
  }, [isOpen]);

  const onMovePage = () => {
    onCloseDiaLog();
    window.location.href = endPoint;
  };

  const onMovePageCancel = () => {
    onCloseDiaLog();
  };

  return (
    <S.Wrapper ref={ref}>
      <button onClick={onCloseDiaLog}>x</button>
      {text}
      <S.Button onClick={onMovePage}>확인</S.Button>
      {type === DialogConfig.CONFIRM && (
        <S.Button onClick={onMovePageCancel}>취소</S.Button>
      )}
    </S.Wrapper>
  );
});

export default Dialog;

```

```
[refactor code] : dialog가 onePost.jsx 에서 사용된 모습

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


```

---

#### Common Memoirs : 공통 회고

스파게티 코드를 리팩터링하면서 처음부터 폴더 구조와 재사용성, 모듈화를 고려해 작성해야겠다고 생각했습니다.

기능 구현에 급급해 관심사 분리나 모듈화는 나중에 하자, 하고 작성하게 된다면 스파게티 코드처럼 짜여질텐데,
이번 기회에 리팩터링을 하면서 뒤늦은 분리는 오히려 더 많은 시간이 소요된다는 것을 직접 느꼈습니다.
패스 내용에 포함되어 있던 보일러 템플릿을 적극 활용해 유지보수가 용이한 DI가 어느 정도 적용된 코드를 작성하는 것이 좋을 것 같습니다.
