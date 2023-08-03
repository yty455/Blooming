import { useNavigate, useParams } from "react-router-dom";
import classes from "./Join.module.css";
// 에러 모달
import useErrorModal from "../../components/Error/useErrorModal";
// Label Input Component
import InputForm from "../../components/Common/InputText";
import { useRecoilState } from "recoil";
import useErrorModal from "../../components/Error/useErrorModal";
import { userState } from "../../recoil/ProfileAtom";
import { useEffect, useState } from "react";
import { customAxios } from "../../lib/axios";

export default function Join() {
  // 에러 모달
  const [ErrorModal, handleError] = useErrorModal();
  const navigate = useNavigate();

  const [userData, setUserData] = useRecoilState(userState);
  // 추가정보 데이터 넣기
  const [formData, setFormData] = useState({
    nickname: "",
    gender: "",
    name: "",
    phoneNumber: "",
  });

  // 카카오 유저 정보 받아오기
  const getKakaoProfile = async () => {
    try {
      const response = await customAxios.get("kakao-profile");
      console.log(response.data.result[0]);
      const kakaoData = response.data.result[0];

      setFormData({ ...formData, ...kakaoData });
    } catch (error) {
      console.log("카카오 유저 정보 에러: ", error);
      // 더미 넣기
      const kakaoData = {
        email: "lotus0028@kakao.com",
        nickname: "ㅎㅇ",
        gender: "FEMALE",
      };
      setFormData({ ...formData, ...kakaoData });
    }
  };

  const [accessToken, setAccessToken] = useState(localStorage.getItem('accessToken'));

  useEffect(() => {
    const syncToken = () => {
      setAccessToken(localStorage.getItem('accessToken'));
    };

    window.addEventListener("storage", syncToken);
    return () => {
      window.removeEventListener("storage", syncToken);
    };
  }, []);

  useEffect(() => {
    if (accessToken) {
      getKakaoProfile();
    }
  }, [accessToken]);

  // 추가 정보 입력
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  // 추가 정보 작성 POST 요청 주고, 유저 데이터에 넣기
  const handleSignUp = async () => {
    try {
      const response = await customAxios.post("sign-up", formData);
      console.log(response.data.result);
      setUserData({ ...formData });
    } catch (error) {
      console.log(error);
      // 더미 넣기
      setUserData({ ...userData, ...formData });
    }
  };

  // 제출 버튼 클릭
  const joinSubmit = async (event) => {
    console.log(formData);
    event.preventDefault();

    // window.flutter_inappwebview
    //   .callHandler("handleFoo")
    //   .then(function (result) {
    //     console.log(JSON.stringify(result));
    //     let fcmtext = document.getElementById("fcminput");
    //     // fcm_token: 얘가 value
    //     fcmtext.value = result.fcmT;
    //   });

    handleSignUp();
    navigate("/Question");
  };

  return (
    <div className='mainContainer'>
      <div className={classes.header}>
        <h2>추가 정보 입력</h2>
      </div>
      {/* <input type='text' id='fcminput'></input> */}

      <div className={classes.container}>
        <form onSubmit={joinSubmit}>
          {/* 이름은 본명 */}
          <InputForm
            label='이름'
            name='name'
            value={formData.name}
            onChange={handleChange}
            placeholder='이름을 작성해주세요.'
            autoFocus
            required
          />
          {/* 카카오에서 받은 닉네임 디폴트 */}
          <InputForm
            label='닉네임'
            name='nickname'
            value={formData.nickname}
            onChange={handleChange}
            placeholder='닉네임을 작성해주세요.'
          />

          <InputForm
            label='전화번호'
            name='phoneNumber'
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder='전화번호를 작성해주세요.'
            required
          />
          {/* gender */}
          <div className={`${classes.genderSelect}`}>
            <div className={`${classes.genderButton} radio_male`}>
              <input
                id='gender-1'
                type='radio'
                name='gender'
                value='MALE'
                onChange={handleChange}
                checked={formData.gender === "MALE"}
              />
              <label htmlFor='gender-1'>신랑</label>
            </div>
            <div className={`${classes.genderButton} radio_male`}>
              <input
                id='gender-2'
                type='radio'
                name='gender'
                value='FEMALE'
                onChange={handleChange}
                checked={formData.gender === "FEMALE"}
              />
              <label htmlFor='gender-2'>신부</label>
            </div>
          </div>

          {/* 추천인 코드 */}
          <InputForm
            label='약혼자 코드'
            name='coupleCode'
            value={formData.coupleCode}
            onChange={handleChange}
          />
          <button type='submit'>인증</button>

          <button type='submit' className={classes.submitButton}>
            제출
          </button>
        </form>
      </div>
    </div>
  );
}
