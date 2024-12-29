import "./Panel.css";

const Panel = () => {
  return (
    <header className="nav">
      <div className="info-btns">
        <button className="nav-btn">Пользователям</button>
        <button className="nav-btn">Водителям</button>
        <button className="nav-btn">Бизнесу</button>
        <button className="nav-btn">Партнерам</button>
        <button className="nav-btn">Скачать приложение</button>
      </div>
      <div className="user">
        <button className="user-btn">
          <img src="https://avatars.mds.yandex.net/get-yapic/0/0-0/islands-middle" alt="userIcon" />
        </button>
      </div>
    </header>
  );
};

export default Panel;