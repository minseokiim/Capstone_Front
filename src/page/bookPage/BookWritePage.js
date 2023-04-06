import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./BookWritePage.css";

const BookWritePage = () => {
  const [lectureName, setLectureName] = useState("");
  const [bookName, setBookName] = useState("");

  const [semester, setSemester] = useState("평가 안함");
  const [state, setState] = useState("평가 안함");
  const [broken, setBroken] = useState("평가 안함");
  const [writing, setWriting] = useState("평가 안함");
  const [content, setContent] = useState("");
  const move = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();

    if (lectureName.trim().length === 0) {
      alert("강의명을 입력하세요");
      return;
    } else if (bookName.trim().length === 0) {
      alert("책 이름을 입력하세요");
      return;
    } else {
      axios
        .post("http://localhost:8080/bookstore", {
          lectureName,
          content,
          semester,
          bookName,
          state,
          writing,
        })
        .then(() => {
          alert("작성되었습니다!");
          move("/bookstore/list");
        });
    }
  };

  return (
    <form className="lec-back">
      <div className="mb-3">
        <label className="form-label m-2 mb-0">
          <strong>책 설명</strong>
        </label>
        <hr />
        <div className="mb-3">
          <input
            className="form-control"
            value={bookName}
            onChange={(e) => {
              setBookName(e.target.value);
            }}
            placeholder="책 제목을 입력해주세요."
          ></input>
        </div>

        <div className="mb-3">
          <input
            className="form-control"
            value={lectureName}
            onChange={(e) => {
              setLectureName(e.target.value);
            }}
            placeholder="이 책을 이용한 강의명을 입력해주세요."
          ></input>
        </div>

        <div className="mb-3 p-1">
          <label>*책을 구매한 학기</label>
          <br />

          <select
            size="3"
            id="semester"
            multiple="multiple"
            onChange={(e) => {
              setSemester(e.target.value);
            }}
          >
            <option value="2023-1학기"> 2023-1학기</option>
            <option value="2022-2학기"> 2022-2학기</option>
            <option value="2022-1학기"> 2022-1학기</option>
            <option value="2021-2학기"> 2021-2학기</option>
            <option value="2021-1학기"> 2021-1학기</option>
            <option value="~2020-2학기"> ~2020-2학기</option>
          </select>
          <br />
        </div>

        <div className="mb-3 p-1">
          *필기 흔적 <br />
          <input
            type="radio"
            name="writing"
            value="필기 많음"
            onChange={(e) => {
              setWriting(e.target.value);
            }}
          />
          필기 많음 &nbsp;&nbsp;
          <input
            type="radio"
            name="writing"
            value="필기 조금"
            onChange={(e) => {
              setWriting(e.target.value);
            }}
          />
          필기 조금 &nbsp;&nbsp;
          <input
            type="radio"
            name="writing"
            value="필기 없음"
            onChange={(e) => {
              setWriting(e.target.value);
            }}
          />
          필기 없음
        </div>

        <div className="mb-3 p-1">
          *책 상태 <br />
          <input
            type="radio"
            name="state"
            value="낡음"
            onChange={(e) => {
              setState(e.target.value);
            }}
          />
          낡음 &nbsp;&nbsp;
          <input
            type="radio"
            name="state"
            value="보통"
            onChange={(e) => {
              setState(e.target.value);
            }}
          />
          보통&nbsp;&nbsp;
          <input
            type="radio"
            name="state"
            value="새 책"
            onChange={(e) => {
              setState(e.target.value);
            }}
          />
          새 책
        </div>

        <div className="mb-3 p-1">
          *책 훼손 <br />
          <input
            type="radio"
            name="broken"
            value="있음"
            onChange={(e) => {
              setBroken(e.target.value);
            }}
          />
          낡음 &nbsp;&nbsp;
          <input
            type="radio"
            name="broken"
            value="없음"
            onChange={(e) => {
              setBroken(e.target.value);
            }}
          />
          보통
        </div>

        <textarea
          className="form-control"
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
          rows="8"
          placeholder="이 책에 대해 더 할말이 있다면 자세히 작성해주세요."
        ></textarea>
      </div>

      <div>
        <div className="important">
          ** 책방은 수정 불가능 하니 신중하게 작성해주세요.
        </div>
        <br />
        <button
          className="lec-button mb-3"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            move("/bookstore/list");
          }}
        >
          돌아가기
        </button>
        <button className="lec-button mb-3" type="submit" onClick={onSubmit}>
          평가하기
        </button>
      </div>
    </form>
  );
};

export default BookWritePage;