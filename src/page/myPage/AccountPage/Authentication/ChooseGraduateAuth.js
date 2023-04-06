import { useState } from "react";
import axios from "axios";
import "../../../signupPage/SignUpPage.css";
import { useNavigate } from "react-router-dom";
import "./Auth.css";
import { AiOutlinePicture } from "react-icons/ai";
import { FaUserGraduate } from "react-icons/fa";
import { TbCertificate } from "react-icons/tb";

const ChooseGraduateAuth = () => {
  const move = useNavigate();
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
      setPreview(URL.createObjectURL(e.target.files[0]));
    }
  };

  const removeImage = () => {
    setImage(null);
    setPreview(null);
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("image", image);

    try {
      const response = await axios.post(
        "http://localhost:8080/auth/graduate",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // Handle the server response here
      console.log(response.data);
    } catch (error) {
      // Handle errors here
      console.error("Error uploading the image:", error);
    }
  };

  return (
    <div className="p-3">
      <strong>
        <TbCertificate />
        졸업 증명서
      </strong>
      <div className="cursor-pointer">
        <div className="grey">
          학교에서 공식적으로 발급한 졸업 증명서를 제출 하여 인증
        </div>
        <hr />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="t-3"
          id="file-input"
        />
        <label for="file-input">파일 선택</label>
        {preview && (
          <div className="mt-3">
            <img src={preview} alt="preview" width="400" />
            <br /> <br />
            <button type="button" onClick={removeImage} className="button ml-3">
              파일 삭제
            </button>
          </div>
        )}
        <hr />
        <button type="button" onClick={handleSubmit} className=" button ">
          파일 제출
        </button>
      </div>
    </div>
  );
};

export default ChooseGraduateAuth;
