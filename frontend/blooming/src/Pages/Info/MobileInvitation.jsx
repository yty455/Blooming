import { NavLink } from "react-router-dom";
import { customAxios } from '../../lib/axios'
import { mobileInvitationState } from '../../recoil/MobileInvitationAtom';
import ConceptsList from "../../components/MobileInvitation/ConceptsList";
import { useEffect, useState } from "react";
import classes from './MobileInvitation.module.css'

function MobileInvitation() {
  const mobileInvitationData = useRecoilValue(mobileInvitationState);

  const fetchData = async () => {
    try {
      const response = await customAxios.get("invitation");
      console.log('가져오기 성공!')
      console.log(response.data.result[0]);
    } catch (error) {
      console.error(error);
      console.log('가져오기 실패!')
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='mainContainer'>
      <div className={classes.container}>
        <h1>Mobile Wedding Invitation</h1>
        <p>어디서나 간편하게 <br/>  완벽한 청첩장을 만들어보세요. <br/>우리의 모바일 청첩장 서비스로 손쉽게 결혼식 초대를 준비해보세요.</p>
        <hr />
        <ConceptsList />
        <hr />
        
        {mobileInvitationData ? (
          <button className={classes.btn}>나의 청첩장 보기</button>
        ) : (
          <NavLink to="/Create">
            <button className={classes.btn}>제작하기</button>
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default MobileInvitation;