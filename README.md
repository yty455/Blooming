<img title="" src="README_assets/df44f536b80d0d6e4948a3a76fefff95dc535d88.PNG" alt="123.PNG" width="349" data-align="center">

# BLOOMING

- 모바일 웨딩 플래너

# 목차

1. [결과물](#결과물)
2. [서비스 화면](#서비스-화면)
3. [주요 기능](#주요-기능)
4. [개발 환경](#개발-환경)
5. [기술 소개](#기술-소개)
6. [설계 문서](#설계-문서)
7. [팀원 소개](#팀원-소개)

# 결과물

- 📽 [UCC](https://youtu.be/o2EBLNdY8w4)

- 🎤 [중간발표 자료](https://drive.google.com/file/d/1COA8hVxKce2ITqUMMZi81D2oJvRxbZyO/view?usp=sharing)

- 🎤 [최종발표 자료](https://drive.google.com/file/d/1Zd7H1pnseM33wLsKeWNzw6r47Dtfco3s/view?usp=sharing)

# 서비스 화면

<br>
<img src="gif_files/00랜딩페이지.gif" width="200px">
<img src="gif_files/01카카오로그인후추가정보입력후가입.gif" width="200px">
<br>

- 카카오 로그인 성공 시, 서비스에 등록된 회원이 아니라면 회원가입 진행
- 커플 코드가 있으면 커플 코드를 등록하고 진행
- 신랑, 신부와 이름을 입력하고 (기본적으로 카카오로그인시 성별과 이름을 가져와서 기본값으로 지정해줌)
- 이후, 전화번호와 닉네임을 설정
- 결혼식 날짜가 정해졌으면 남은 D-day에 따른 Tip과 알림 요청 기능 제공

## 메인 페이지

<br>
<img src="./gif_files/02메인페이지.gif" width="200px">
<img src="./gif_files/03메인페이지웨딩정보.gif" width="200px">
<br>

- 메인페이지에서 Dday에 따른 Tip, 웨딩 박람회, 결혼 준비에 대한 TIP 등 다양한 정보를 얻을 수 있음.
- 결혼 준비에 대한 TIP에서는 결혼 용어에 대한 특징 등 여러가지에 대한 정보를 얻을 수 있음.

<br>
<img src="./gif_files/04메인페이지웨딩박람회정보.gif" width="200px">
<img src="./gif_files/05메인페이지최근본상품.gif" width="200px">
<br>

- 박람회에 대한 정보를 얻을 수 있음.
- 최근 본 상품에 대한 정보를 얻을 수 있음.

## 정보 페이지

<br>
<img src="./gif_files/06웨딩홀찜담기예약.gif" width="200px">
<img src="./gif_files/07상품후기쓰고도움돼요버튼누르기.gif" width="200px">
<br>

- 정보페이지에는 웨딩홀, 스튜디오, 드레스, 메이크업, 모바일 청첩장 페이지가 있음.
- 모바일 청첩장을 제외한 4개의 페이지는 각각 상품에 대한 찜과 예약하기 기능이 있음.
- 예약을 하면 자동으로 해당 날짜와 시간에 일정이 생성이 되며 일정 디테일로 이동합니다. 세부적인 내용을 수정을 통해 자세히 적을 수 있습니다.
- 각각의 상품에는 별점과 함께 후기를 줄 수 있다.

<br>
<img src="./gif_files/08리뷰댓글도움돼요누르기.gif" width="200px">
<img src="./gif_files/09청첩장만들기.gif" width="200px">
<br>

- 적혀진 리뷰에 대해 도움이 돼요 버튼이 존재.
- 청첩장 만들기를 통해 본인만의 메시지를 담은 모바일 청첩장 페이지가 존재하고 카카오톡 공유하기 버튼을 통해 카카오톡으로 해당 페이지에 대한 공유 가능

## 스케쥴 페이지

<br>
<img src="gif_files/10개인일정등록후알림.gif" width="200px">
<img src="gif_files/11일정등록알림.gif" width="200px">
<img src="gif_files/12일정리마인드알림.gif" width="200px">
<br>

- 개인일정을 스케쥴 페이지에서 등록이 가능하며, 등록된 약혼자의 일정과 공유하는 일정을 확인할 수 있다.
- 스케쥴을 등록하면 약혼자에게도 알림을 전달하여 어떤 일정이 등록되었는지 알려준다.
- 등록된 일정도 30일 7일 1일 당일에 리마인드 알림을 준다.

## 다이어리 페이지

<br>
<img src="./gif_files/13다이어리페이지시작.gif" width="200px">
<img src="./gif_files/14다이어리메인.gif" width="200px">
<br>

- 다이어리페이지는 작성에대한 설명과함께 작성페이지로 이동할 수 있음
- 메인페이지에서는 자신이 작성한 다이어리와 약혼자가 작성한 다이어리를 보여주며 약혼자의 다이어리는 개수를 알 수 있으나 내용을 확인할 수는 없습니다.

<br>
<img src="./gif_files/15다이어리글작성.gif" width="200px">
<img src="./gif_files/16커플다이어리결혼식날오픈.gif" width="200px">
<br>

- 다이어리 작성에는 기본적인 사진과 제목, 내용이 입력가능합니다.
- 결혼식 당일이 되면 약혼자의 다이어리에 대한 정보 확인할 수 있습니다.

## 마이 페이지

<br>
<img src="./gif_files/17커플코드연결.gif" width="200px">
<img src="./gif_files/18커플연결성공후프로필.gif" width="200px">
<img src="./gif_files/19푸시알림설정.gif" width="200px">
<br>

- 커플코드는 가입할 때 입력을 할 수 있으나, 입력하지 않고 건너갔을 경우에 마이페이지에 있는 상대방과 연결하기를 통해서 이름과 커플코드를 입력하여 확인을 거친 후 연결이 가능(연결은 1명과 가능하며, 이미 연결이 된 사람과의 연결은 불가합니다.)
- 커플 코드 연결을 성공하면 프로필에 약혼자의 프로필이 꼭 붙어 나타납니다
- PUSH알림 설정을 통해 푸쉬 설정을 ON / OFF 설정이 가능합니다.

<br>
<img src="./gif_files/20마이페이지내후기.gif" width="200px">
<img src="./gif_files/21찜등록내찜목록보기.gif" width="200px">
<img src="./gif_files/22커플찜확인.gif" width="200px">
<br>

- 마이페이지 나의 후기를 통해 내가 작성한 모든 후기를 볼 수 있으며, 후기 클릭 시 해당 상품디테일로 이동합니다.
- 찜에 등록이 된 상품은 마이페이지의 찜목록에 들어가 있으며, 내가 찜한 거와 약혼자가 찜한 거 그리고 동시에 찜한 상품을 확인할 수 있습니다.

# 주요 기능

- ##### 1. 알림 기능
  
  - ###### D-day 에 따른 알림
  - ###### 예약 및 스케쥴에 따른 알림
  - ###### 다이어리 작성에 따른 알림

- ##### 2. 다이어리 기능
  
  - ###### 내 다이어리
  
  - ###### 약혼자 다이어리

- ##### 3. 모바일 청첩장
  
  - ###### 작성 후 카카오톡을 이용한 공유

# 개발 환경

## ⚙ Management Tool

- 형상 관리 : Gitlab
- 이슈 관리 : Jira
- 커뮤니케이션 : Mattermost, Webex, Notion, Discord
- 디자인 : Figma, PowerPoint

## 💻 IDE

- Visual Studio Code `1.18.1`
- IntelliJ `11.0.19`

## 📱 Frontend

- React `18.2.0`
- Vite `^4.4.5`
- Recoil `^0.7.7`
- React-Router-Dom `6.14.2`
- Library
  - antd : `^5.7.3`
  - antd-mobile : `^5.32.0`
  - axios : `^1.4.0`
  - clipboard-copy : `^4.0.1`
  - dayjs : `^1.11.9`
  - framer-motion : `^10.13.0`
  - gsap : `^3.12.2`
  - qrcode : `^1.5.2`
  - react-calendar : `^4.5.0`
  - react-datepicker : `^4.16.0`
  - react-dom : `^18.2.0`
  - react-icons : `4.10.1`
  - react-infinite-scroll-component : `^6.1.0`
  - react-kakao-link : `^0.1.2`
  - react-loading-skeleton : `^3.3.1`
  - react-pageflip : `^2.0.3`
  - react-rating : `2.0.5`
  - react-responsice-carousel : `^3.2.23`
  - react-slick : `^0.29.0`
  - react-swipeable : `^7.0.1`
  - react-swipable-list : `^1.8.1`
  - slick-carousel : `^1.8.1`
  - styled-components : `^6.0.7`
- Flutter
  - library
    - inapp_webview
- Android Studio

## 💾 Backend

- Springboot `2.7.13`
- Lombok
- Spring Data JPA
- Spring Data Redis(lettuce)
- Spring Web
- Springdoc-openapi-ui `1.6.11`
- Oauth2
- Swagger 3.0.0
- Oauth2
- Redis
- MySql 8.0.34

## Infra

- AWS S3
- AWS EC2
- Nginx 1.18.0
- Docker 20.10.12
- Ubuntu 20.04.6 LTS
- CertBot(CA Certificates)
- SSL

# 기술 소개

- 웹 기반 하이브리드 어플리케이션
  
  - `Flutter`를 활용하여 웹 및 앱 플랫폼 모두 사용 가능

- 사용자 알림
  
  - `Firebase Cloud Message`를 이용하여 사용자에게 필요한 알림 제공, `Redis`를 이용한 FCM Token 관리

- 카카오 로그인
  
  - `OAUTH2` 인증을 이용해 불필요한 개인정보 입력 최소화

- 상품 실시간 예약 랭킹, 최근 본 상품
  
  - in-memory DB인 `Redis`의 sorted set 자료구조를 이용해 실시간 예약 랭킹과 사용자별 최근 본 상품 정보 제공

# 설계 문서

## 🎨 와이어프레임

<img title="" src="README_assets/9005bf0508ad6b1640da37aaf236527847462a4b.jpg" alt="Group 1 (1).jpg" width="702">

## 📃 기능 명세서

![7.PNG](README_assets/81e14af2401c798e67b35a0a670b9260bb268d45.PNG)

![8.PNG](README_assets/5b00a2242164dd377305361c27344280bcff3f91.PNG)

## 📝 API 명세서

![1.PNG](README_assets/3674abed7430e2ab4655ee9ac516111d316a6b66.PNG)

![2.PNG](README_assets/bae47ca24fb0bb348a98fb5e5f5f96ae5ee093bb.PNG)

![3.PNG](README_assets/ff053b7c0450734fc3cd4da63cb50eec8682827d.PNG)

![4.PNG](README_assets/8308685bed8fdbf1e1a7e1c5776bd830c3faef8f.PNG)

![5.PNG](README_assets/a1d905bd7614f156c39e5a2e4e8f3c14442642d1.PNG)

![6.PNG](README_assets/5f2d5013dfb56d63dc8211fc1ae8cf797804d58e.PNG)

## 📏 ERD

![image.png](README_assets/73d0eb2c4e0f672b49e231b2767145e6c75e0960.png)

![image (1).png](README_assets/d16a1b6b607ae6111b7be51a15bc703b586b90fb.png)

## 📐 시스템 아키텍처

![architecture.png](README_assets/1cdf902b533381a38dedc536f451ac3ef56dd738.png)

# 팀원 소개

| **[정훈석](https://github.com/AndreaStudy)**                                                          | **[정소정](https://github.com/sojeong025)**                                                           | **[구희영](https://github.com/hi9900)**                                                               | **[강동윤](https://github.com/yty455)**                                                               | **[김성인](https://github.com/ksi2564)**                                                              | **[김승연](https://github.com/ksy00826)**                                                             |
|:--------------------------------------------------------------------------------------------------:|:--------------------------------------------------------------------------------------------------:|:--------------------------------------------------------------------------------------------------:|:--------------------------------------------------------------------------------------------------:|:--------------------------------------------------------------------------------------------------:|:--------------------------------------------------------------------------------------------------:|
| <img title="" src="README_assets/55ac68fc918d4490436f82f00dd3f3c4164f2749.png" alt="" width="800"> | <img title="" src="README_assets/690a04ad5a318806b42b791fd7bd47d92f653511.png" alt="" width="800"> | <img title="" src="README_assets/d7bb36dcc1e37676036feaa62e09706509decb54.png" alt="" width="800"> | <img title="" src="README_assets/37b1fff8dbfc3003baec1caf3d36a1f30050762e.png" alt="" width="800"> | <img title="" src="README_assets/4d14c09f98a7285f2c6bd6f795f2f45873fd8697.png" alt="" width="800"> | <img title="" src="README_assets/a99f938e62bd81dd32e82d1182de3a048440b6ee.png" alt="" width="800"> |
| Frontend                                                                                           | Frontend                                                                                           | Frontend                                                                                           | Backend                                                                                            | Backend                                                                                            | Backend                                                                                            |

## 😎 역할 분담

**Frontend**

- 정훈석 : 프론트 Token 처리 / Flutter / 카카오톡 공유하기 / 리액트 베이스 코드 제작 / 에러 수정
- 정소정 : UX/UI 설계 / PPT제작 / 영상 제작 / 발표 / 모바일 청첩장 페이지 제작
- 구희영 : UX/UI 설계 / PPT제작 / Route 설정 /회원 정보, 상품 정보, 마이페이지 제작

**Backend**

- 강동윤: Fluttter / infra 구축 / 다이어리, 찜하기, 도움돼요 API 제작

- 김성인 : DB설계 및 구축 / 회원(Oauth, JWT) 관련 API / S3 / 커플, 회원 등 API 제작

- 김승연 : 상품 크롤링 및 기타 API / FCM 알림 / Redis를 이용한 예약 랭킹 및 최근 본 상품 리스트 API 제작
