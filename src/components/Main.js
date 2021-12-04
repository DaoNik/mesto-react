import React from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";
import api from "../utils/api";
import Card from "./Card";

function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const [cards, setCards] = React.useState([]);
  const [isLiked, setIsLiked] = React.useState(false);

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    if (isLiked) {
      api.deleteLike(card._id).catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
      setIsLiked(!isLiked);
    } else {
      api.addLike(card._id).catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
      setIsLiked(!isLiked);
    }
  }

  React.useEffect(() => {
    api
      .addCards()
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
          <h1 className="profile__title">{currentUser.name}</h1>
          <p className="profile__subtitle">{currentUser.about}</p>
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
            src={currentUser.avatar}
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
                onCardLike={handleCardLike}
              />
            );
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
