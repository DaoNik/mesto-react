import React from "react";
import avatar from "../images/Avatar.png";
import api from "../utils/api";

function Main(props) {
  const [userName, setUserName] = React.useState("Жак-Ив Кусто");
  const [userDescription, setUserDescription] = React.useState(
    "Исследователь океана"
  );
  const [userAvatar, setUserAvatar] = React.useState(avatar);

  React.useEffect(() => {
    api
      .getUserInfo()
      .then((data) => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
  }, []);

  return (
    <main>
      <section className="profile">
        <div className="profile__wrapper">
          <h1 className="profile__title">{userName}</h1>
          <p className="profile__subtitle">{userDescription}</p>
          <button
            type="button"
            onClick={props.onEditProfile}
            className="profile__button-edit"
            aria-label="Кнопка для открытия окна редактирования имени пользователя и рода деятельности"
          ></button>
        </div>
        <div className="profile__container-avatar" onClick={props.onEditAvatar}>
          <img
            className="profile__avatar"
            src={userAvatar}
            alt="Аватар профиля"
          />
        </div>
        <button
          type="button"
          onClick={props.onAddPlace}
          className="profile__button-add"
          aria-label="Кнопка для открытия окна добавления мест"
        ></button>
      </section>

      <section className="gallery">
        <ul className="gallery__cards"></ul>
      </section>
    </main>
  );
}

export default Main;
