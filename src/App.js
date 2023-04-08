import NavBar from "./NavBar";
import "./App.css";
import Card from "./Card";

import FreeWritePage from "./page/freeBoardPage/FreeWritePage";
import FreeListPage from "./page/freeBoardPage/FreeListPage";
import FreeEditPage from "./page/freeBoardPage/FreeEditPage";
import FreeShowPage from "./page/freeBoardPage/FreeShowPage";

import LectureWritePage from "./page/lectureBoardPage/LectureWritePage";
import LectureListPage from "./page/lectureBoardPage/LectureListPage";
import LectureShowPage from "./page/lectureBoardPage/LectureShowPage";

import SecretWritePage from "./page/secretBoardPage/SecretWritePage";
import SecretListPage from "./page/secretBoardPage/SecretListPage";
import SecretEditPage from "./page/secretBoardPage/SecretEditPage";
import SecretShowPage from "./page/secretBoardPage/SecretShowPage";
import ChatBotPage from "./page/chatbotPage/ChatBotPage";
import NewChatBot from "./page/chatbotPage/NewChatBot";

import LoginPage from "./page/loginPage/LoginPage";
import SignUpPage from "./page/signupPage/SignUpPage";
import FindIdPage from "./page/signupPage/FindIdPage";
import FindPwPage from "./page/signupPage/FindPwPage";
import EmailAuthPage from "./page/signupPage/EmailAuthPage";
import SetPasswdPage from "./page/signupPage/SetPasswdPage";

import MessagePage from "./page/messagePage/MessagePage";

import MyPage from "./page/myPage/MyPage";
import HowToUsePage from "./page/myPage/AboutPage/HowToUsePage";
import ServiceAgreementPage from "./page/myPage/AboutPage/ServiceAgreementPage";
import PrivacyPage from "./page/myPage/AboutPage/PrivacyPage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./page/mainPage/MainPage";
import ChangeEmailPage from "./page/myPage/AccountPage/ChangeEmailPage";
import ChangeNickPage from "./page/myPage/AccountPage/ChangeNickPage";
import DeleteAccountPage from "./page/myPage/OtherPage/DeleteAccountPage";

import Footer from "./page/mainPage/Footer";

import Authentication from "./page/myPage/AccountPage/Authentication/Authentication";
import ChooseStudentAuth from "./page/myPage/AccountPage/Authentication/ChooseStudentAuth";
import CardAuthentication from "./page/myPage/AccountPage/Authentication/CardAuthentication";
import ChooseGraduateAuth from "./page/myPage/AccountPage/Authentication/ChooseGraduateAuth";
import CertificateAuthentication from "./page/myPage/AccountPage/Authentication/CertificateAuthentication";
import MemberMainPage from "./page/mainPage/MemberMainPage";

import BookListPage from "./page/bookPage/BookListPage";
import BookWritePage from "./page/bookPage/BookWritePage";
import BookShowPage from "./page/bookPage/BookShowPage";

import TimeTable from "./timeTable/TimeTable";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* //nav 보여주고 싶은 페이지 */}
        <Route element={<NavBar />}>
          <Route
            path="/timetable"
            element={
              <div className="p-5 m-5 ">
                <TimeTable />
                <br />
                <br />
                <Footer />
              </div>
            }
          />

          <Route
            path="/chatbot"
            element={
              <div className="p-5 m-5 ">
                <NewChatBot className="m-5 " />
                <br />
                <br />
                <Footer />
              </div>
            }
          />
          <Route
            path="/my"
            element={
              <div>
                <Card>
                  <MyPage />
                </Card>
                <br />
                <br />
                <Footer />
              </div>
            }
          />
          <Route
            path="/message"
            element={
              <Card>
                <MessagePage />
              </Card>
            }
          />
          <Route
            path="/freeboard/post"
            element={
              <Card>
                <FreeWritePage />
              </Card>
            }
          />
          <Route
            path="/freeboard/list"
            element={
              <div>
                <Card>
                  <FreeListPage />
                </Card>
                <br />
                <br />
                <Footer />
              </div>
            }
          />
          <Route
            path="/freeboard/edit/:id"
            element={
              <Card>
                <FreeEditPage />
              </Card>
            }
          />
          <Route
            path="/freeboard/:id"
            element={
              <Card>
                <FreeShowPage />
              </Card>
            }
          />

          <Route
            path="/secretboard/post"
            element={
              <Card>
                <SecretWritePage />
              </Card>
            }
          />
          <Route
            path="/secretboard/list"
            element={
              <div>
                <Card>
                  <SecretListPage />
                </Card>
                <br />
                <br />
                <Footer />
              </div>
            }
          />
          <Route
            path="/secretboard/edit/:id"
            element={
              <Card>
                <SecretEditPage />
              </Card>
            }
          />
          <Route
            path="/secretboard/:id"
            element={
              <Card>
                <SecretShowPage />
              </Card>
            }
          />

          <Route
            path="/lectureboard/post"
            element={
              <Card>
                <LectureWritePage />
              </Card>
            }
          />
          <Route
            path="/lectureboard/list"
            element={
              <div>
                <Card>
                  <LectureListPage />
                </Card>

                <br />
                <br />
                <Footer />
              </div>
            }
          />
          <Route
            path="/lectureboard/:id"
            element={
              <Card>
                <LectureShowPage />
              </Card>
            }
          />

          <Route
            path="/bookstore/post"
            element={
              <Card>
                <BookWritePage />
              </Card>
            }
          />
          <Route
            path="/bookstore/list"
            element={
              <div>
                <Card>
                  <BookListPage />
                </Card>
                <br />
                <br />
                <Footer />
              </div>
            }
          />
          <Route
            path="/bookstore/:id"
            element={
              <Card>
                <BookShowPage />
              </Card>
            }
          />
          <Route
            path="/page/rules"
            element={
              <Card>
                <HowToUsePage />
              </Card>
            }
          />
          <Route
            path="/page/serviceagreement"
            element={
              <div>
                <Card>
                  <ServiceAgreementPage />
                </Card>
                <br />
                <br />
                <Footer />
              </div>
            }
          />

          <Route
            path="/page/privacy"
            element={
              <div>
                <Card>
                  <PrivacyPage />
                </Card>
                <br />
                <br />
                <Footer />
              </div>
            }
          />

          <Route
            path="/my/deleteaccount"
            element={
              <div>
                <DeleteAccountPage />
                <br />
                <br />
                <Footer />
              </div>
            }
          />

          <Route
            path="/my/auth"
            element={
              <div>
                <Card>
                  <Authentication />
                </Card>
                <br />
                <br />
                <Footer />
              </div>
            }
          />
          <Route
            path="/auth/student"
            element={
              <div>
                <Card>
                  <ChooseStudentAuth />
                </Card>
                <br />
                <br />
                <Footer />
              </div>
            }
          />

          <Route
            path="/auth/graduate"
            element={
              <div>
                <Card>
                  <ChooseGraduateAuth />
                </Card>
                <br />
                <br />
                <Footer />
              </div>
            }
          />

          <Route
            path="/auth/idcard"
            element={
              <div>
                <Card>
                  <CardAuthentication />
                </Card>
                <br />
                <br />
                <Footer />
              </div>
            }
          />

          <Route
            path="/auth/certificate"
            element={
              <div>
                <Card>
                  <CertificateAuthentication />
                </Card>
                <br />
                <br />
                <Footer />
              </div>
            }
          />

          <Route
            path="/my/email"
            element={
              <div>
                <ChangeEmailPage />
                <br />
                <br />
                <Footer />
              </div>
            }
          />
          <Route
            path="/my/nickname"
            element={
              <div>
                <ChangeNickPage />
                <br />
                <br />
                <Footer />
              </div>
            }
          />

          <Route
            path="/membermain"
            element={
              <div>
                <Card>
                  <MemberMainPage />
                </Card>
                <br />
                <br />
                <Footer />
              </div>
            }
          />
        </Route>

        {/* //nav를 숨기고 싶은 페이지 */}

        <Route path="/" element={<MainPage />} />

        <Route path="/register" element={<SignUpPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>

        <Route path="/forgot" element={<FindIdPage />}></Route>
        <Route path="/forgot/password" element={<FindPwPage />}></Route>
        <Route
          path="/forgot/password/userid"
          element={<EmailAuthPage />}
        ></Route>
        <Route
          path="/forgot/password/identity/result"
          element={<SetPasswdPage />}
        ></Route>
      </Routes>
    </Router>
  );
};

export default App;
