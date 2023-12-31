// import { format } from "date-fns";
import DatePicker from "react-datepicker";
import { useRecoilState } from "recoil";
import { mobileInvitationState } from "../../../recoil/MobileInvitationAtom";
import ko from "date-fns/locale/ko";

import classes from "./Common.module.css";
import { useEffect, useState } from "react";

function WeddingDay() {
  const [invitation, setInvitation] = useRecoilState(mobileInvitationState);
  const [enteredDate, setEnteredDate] = useState(new Date())
  const [enteredTime, setEnteredTime] = useState(new Date())

  useEffect(() => {
    if (invitation.date) {
      setEnteredDate(new Date(invitation.date))
    }
    if (invitation.time) {
      const [hours, minutes] = invitation.time.split(":").map(Number);
      const newTime = new Date();
      newTime.setHours(hours);
      newTime.setMinutes(minutes);
      setEnteredTime(newTime);
    }
  }, [])

  const handleDateChange = (date) => {
    setEnteredDate(date)
    const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
    setInvitation((preInvitation) => ({
      ...preInvitation,
      date: formattedDate,
    }));
  };

  const handleTimeChange = (time) => {
    setEnteredTime(time)
    const formattedTime = `${time.getHours().toString().padStart(2, '0')}:${time.getMinutes().toString().padStart(2, '0')}`;
    setInvitation((preInvitation) => ({
      ...preInvitation,
      time: formattedTime,
    }));
  };

  return (
    <div className={classes.container}>
      <p className={classes.header}>예식일</p>
      <hr className={classes.hr}/>
      <div>
        <p className={classes.bodytext} htmlFor="date">예식일</p>
        <br />
        <DatePicker
          selected={enteredDate}
          dateFormat="yyyy-MM-dd"
          locale={ko}
          onChange={handleDateChange}
        />
      </div>

      <div>
        <p className={classes.bodytext} htmlFor="time">예식 시간</p>
        <br />
        <DatePicker
          selected={enteredTime}
          onChange={handleTimeChange}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={30}
          timeCaption="시간"
          dateFormat="HH:mm"
          locale={ko}
        />
      </div>
    </div>
  );
}

export default WeddingDay;