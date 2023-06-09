import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaChalkboardTeacher } from "react-icons/fa";
import { BsCardChecklist, BsBook } from "react-icons/bs";
import apiClient from "../../apiClient";
import BookSendMessagePage from "../messagePage/Send/BookSendMessagePage";
import { BsFillTrashFill, BsFillSendFill } from "react-icons/bs";
import config from "../../config";

const BookShowPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState([]);
  const move = useNavigate();
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);
  const studentId = localStorage.getItem("studentId");
  const isAdmin = studentId === "admin";
  const saleStates = ["판매중", "예약중", "판매완료"];

  const getPost = (id) => {
    apiClient.get(`${config.API_BASE_URL}/book/${id}`).then((res) => {
      setPost(res.data);
    });
  };

  const deletePost = async (id) => {
    try {
      await apiClient.delete(`${config.API_BASE_URL}/book/${id}`);
      alert("게시물이 삭제되었습니다.");
      move("/bookstore");
    } catch (error) {
      alert("게시물 삭제에 실패했습니다.");
    }
  };

  const createSaleStateUpdater = (id, currentSaleState) => async () => {
    const currentIndex = saleStates.indexOf(currentSaleState);
    const nextIndex = (currentIndex + 1) % saleStates.length;
    const nextState = saleStates[nextIndex];

    try {
      await apiClient.patch(
        `${config.API_BASE_URL}/book/${id}?saleState=${nextState}`
      );
      setPost({
        ...post,
        saleState: nextState,
      });
    } catch (error) {
      alert("판매 상태 업데이트에 실패했습니다.");
    }
  };

  useEffect(() => {
    getPost(id);
  }, []);

  const updateSaleState = createSaleStateUpdater(post.id, post.saleState);

  return (
    <div className="p-4">
      {studentId && (
        <>
          <div className="d-flex">
            <div className="flex-grow-1">
              <span>
                <h5>
                  <strong>{post.bookName}</strong>&nbsp;|&nbsp;{post.author}
                  &nbsp;|&nbsp;
                  {post.publisher}&nbsp;
                  {studentId === post.studentId && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        updateSaleState();
                      }}
                      className="red-button"
                    >
                      {post.saleState}
                    </button>
                  )}
                  {studentId !== post.studentId && (
                    <>
                      <span className="sale-important">
                        <strong>{post.saleState}</strong>
                      </span>
                      &nbsp;
                    </>
                  )}
                </h5>
              </span>
              <FaChalkboardTeacher /> &nbsp;
              {post.lectureName}
            </div>

            {(isAdmin || post.studentId !== studentId) && (
              <>
                <div>
                  <BsFillSendFill
                    className="cursor-pointer message-icon"
                    onClick={() => {
                      setIsMessageModalOpen(true);
                    }}
                  />
                  <BookSendMessagePage
                    isOpen={isMessageModalOpen}
                    onRequestClose={() => setIsMessageModalOpen(false)}
                  />
                </div>
              </>
            )}

            {(isAdmin || studentId === post.studentId) && (
              <div>
                <span className="p-2">
                  <BsFillTrashFill
                    className="cursor-pointer icon"
                    onClick={() => {
                      if (window.confirm("게시물을 삭제하시겠습니까?")) {
                        deletePost(id);
                      }
                    }}
                  />
                  &nbsp;
                </span>
              </div>
            )}
          </div>
          <hr />
          <strong>
            <BsCardChecklist />
            &nbsp; 책 사진
          </strong>
          <br />:
          {post.imageFile && (
            <div className="mt-3">
              <img
                src={`data:image/png;base64,${post.imageFile}`}
                alt="preview"
                style={{ width: "300px", height: "auto" }}
              />
            </div>
          )}
          <br />
          <strong>
            <BsCardChecklist />
            &nbsp; 정가
          </strong>
          <br />: {post.originalPrice}원
          <br /> <br />
          <strong>
            <BsCardChecklist />
            &nbsp; 판매가
          </strong>
          <br />: {post.sellPrice}원
          <br /> <br />
          <strong>
            <BsCardChecklist />
            &nbsp; 책을 구매한 학기
          </strong>
          <br />: {post.semester}
          <br /> <br />
          <strong>
            <BsCardChecklist />
            &nbsp; 필기 흔적
          </strong>
          <br />: {post.writing}
          <br /> <br />
          <strong>
            <BsCardChecklist />
            &nbsp; 책 상태
          </strong>
          <br />: {post.state}
          <br /> <br />
          <strong>
            <BsCardChecklist />
            &nbsp; 책 훼손
          </strong>
          <br />: {post.broken}
          <br /> <br />
          <strong>
            <BsCardChecklist />
            &nbsp; 총평
          </strong>
          <br />: {post.content}
          <br />
          <br />
          <div className="grey">
            ** 책 구매를 원하면 쪽지 기능을 활용하세요!
          </div>
        </>
      )}
    </div>
  );
};

export default BookShowPage;
