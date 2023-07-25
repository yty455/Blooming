function MainHeader({ onCreatePost }) {
  return (
    <header>
      <p>
        오늘은 몇월 며칠 일정은 몇 개 있음
      </p>
      <p>
        <button onClick={onCreatePost}>
          일정 추가
        </button>
      </p>
    </header>
  );
}

export default MainHeader;