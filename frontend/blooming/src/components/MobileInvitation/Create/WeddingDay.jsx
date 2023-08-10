// import { format } from "date-fns";
import DatePicker from "react-datepicker";
import { useRecoilState } from "recoil";
import { mobileInvitationState } from "../../../recoil/MobileInvitationAtom";
import ko from "date-fns/locale/ko";

import classes from "./Common.module.css";

function WeddingDay() {
  const [invitation, setInvitation] = useRecoilState(mobileInvitationState);

  const handleDateChange = (date) => {
    const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
    setInvitation((preInvitation) => ({
      ...preInvitation,
      date: formattedDate,
    }));
  };

  const timeFormatter = new Intl.DateTimeFormat(ko, {
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  });

  const handleTimeChange = (time) => {
    setInvitation((preInvitation) => ({
      ...preInvitation,
      time: timeFormatter.format(time),
    }));
  };

  return (
    <div className={classes.container}>
      <p className={classes.header}>예식일</p>
      <hr />
      <div>
        <label htmlFor="date">예식일</label>
        <br />
        <DatePicker
          selected={new Date(invitation.date)}
          dateFormat="yyyy-MM-dd"
          locale={ko}
          onChange={handleDateChange}
        />
      </div>

      <div>
        <label htmlFor="time">예식 시간</label>
        <br />
        <DatePicker
          selected={new Date(invitation.time)}
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