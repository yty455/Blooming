package com.ssafy.backend.domain.invitation;

import static javax.persistence.FetchType.*;

import java.time.LocalDate;
import java.time.LocalTime;

import javax.persistence.*;

import org.springframework.format.annotation.DateTimeFormat;

import com.ssafy.backend.domain.couple.Couple;
import com.ssafy.backend.domain.invitation.dto.InvitationRegistDto;

import lombok.Getter;

@Entity
@Getter
public class Invitation {

    @Id
    @GeneratedValue
    @Column(name = "INVITATION_ID")
    private Long id;

    //이미지 - 일단 string으로 저장
    private String thumbnail;

    //신랑 부모님
    private String groomFatherName;
    private String groomFatherPhone;
    private String groomMotherName;
    private String groomMotherPhone;

    //신부 부모님
    private String brideFatherName;
    private String brideFatherPhone;
    private String brideMotherName;
    private String brideMotherPhone;

    //모시는 글
    private String title;
    private String content;
    private String weddingHallName;
    private String floor;
    private String address; //일단

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate date;
    @DateTimeFormat(pattern = "HH:mm")
    private LocalTime time;

    //신랑 신부 정보 추가
    private String groomName;
    private String groomPhone;
    private String brideName;
    private String bridePhone;

    //맞나
    @OneToOne(fetch = LAZY)
    @JoinColumn(name = "COUPLE_ID")
    private Couple couple;

    //==연관관계 메서드==//
    // 양방향 세팅 시 객체의 데이터 무결성 보장
    public void setCouple(Couple couple) {
        this.couple = couple;
    }

    public Invitation(InvitationRegistDto invitationRegistDto) {
        this.thumbnail = invitationRegistDto.getThumbnail();
        this.groomFatherName = invitationRegistDto.getGroomFatherName();
        this.groomFatherPhone = invitationRegistDto.getGroomFatherPhone();
        this.groomMotherName = invitationRegistDto.getGroomMotherName();
        this.groomMotherPhone = invitationRegistDto.getGroomMotherPhone();
        this.brideFatherName = invitationRegistDto.getBrideFatherName();
        this.brideFatherPhone = invitationRegistDto.getBrideFatherPhone();
        this.brideMotherName = invitationRegistDto.getBrideMotherName();
        this.brideMotherPhone = invitationRegistDto.getBrideMotherPhone();
        this.title = invitationRegistDto.getTitle();
        this.content = invitationRegistDto.getContent();
        this.weddingHallName = invitationRegistDto.getWeddingHallName();
        this.floor = invitationRegistDto.getFloor();
        this.address = invitationRegistDto.getAddress();
        this.date = invitationRegistDto.getDate();
        this.time = invitationRegistDto.getTime();
        this.groomName = invitationRegistDto.getGroomName();
        this.groomPhone = invitationRegistDto.getGroomPhone();
        this.brideName = invitationRegistDto.getBrideName();
        this.bridePhone = invitationRegistDto.getBridePhone();
    }

    public Invitation() {
    }

    public void update(InvitationRegistDto invitationRegistDto) {
        this.thumbnail = invitationRegistDto.getThumbnail();
        this.groomFatherName = invitationRegistDto.getGroomFatherName();
        this.groomFatherPhone = invitationRegistDto.getGroomFatherPhone();
        this.groomMotherName = invitationRegistDto.getGroomMotherName();
        this.groomMotherPhone = invitationRegistDto.getGroomMotherPhone();
        this.brideFatherName = invitationRegistDto.getBrideFatherName();
        this.brideFatherPhone = invitationRegistDto.getBrideFatherPhone();
        this.brideMotherName = invitationRegistDto.getBrideMotherName();
        this.brideMotherPhone = invitationRegistDto.getBrideMotherPhone();
        this.title = invitationRegistDto.getTitle();
        this.content = invitationRegistDto.getContent();
        this.weddingHallName = invitationRegistDto.getWeddingHallName();
        this.floor = invitationRegistDto.getFloor();
        this.address = invitationRegistDto.getAddress();
        this.date = invitationRegistDto.getDate();
        this.time = invitationRegistDto.getTime();

        //신랑신부 추가
        this.groomName = invitationRegistDto.getGroomName();
        this.groomPhone = invitationRegistDto.getGroomPhone();
        this.brideName = invitationRegistDto.getBrideName();
        this.bridePhone = invitationRegistDto.getBridePhone();
    }
}
