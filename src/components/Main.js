import React from "react";
import avatar from "../images/Avatar.png";
import api from "../utils/api";
import Card from "./Card";

function Main(props) {
  const [userName, setUserName] = React.useState("Жак-Ив Кусто");
  const [userDescription, setUserDescription] = React.useState(
    "Исследователь океана"
  );
  const [userAvatar, setUserAvatar] = React.useState(avatar);
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.addCards()])
      .then((res) => {
        const user = res[0];
        const newCards = res[1];
        setUserName(user.name);
        setUserDescription(user.about);
        setUserAvatar(user.avatar);
        return newCards;
      })
      .then((newCards) => {
        setCards(newCards);
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
        <ul className="gallery__cards">
          {cards.map((card) => {
            return (
              <Card
                key={card._id}
                card={card}
                onCardClick={props.onCardClick}
              />
            );
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
