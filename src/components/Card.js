import React from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";

function Card({ card, onCardClick, onCardLike }) {
  const currentUser = React.useContext(CurrentUserContext);
  const [likesLength, setLikesLength] = React.useState(card.likes.length);
  const isLiked = card.likes.some((i) => i._id === currentUser._id);
  const isOwn = card.owner._id === currentUser._id;

  const cardDeleteButtonClassName = `gallery__card-btn-trash ${
    isOwn ? "" : "gallery__card-btn-trash_hidden"
  }`;

  // // Создаём переменную, которую после зададим в `className` для кнопки лайка
  // const cardLikeButtonClassName = `${
  //   isLiked ? "gallery__card-btn_active" : ""
  // }`;

  function handleClick() {
    onCardClick(card);
  }

  function handleLikeClick() {
    onCardLike(card);
    if (isLiked) {
      setLikesLength(likesLength - 1);
    } else {
      setLikesLength(likesLength + 1);
    }
  }

  return (
    <li className="gallery__card">
      <h2 className="gallery__card-title">{card.name}</h2>
      <img
        onClick={handleClick}
        src={card.link}
        alt={card.name}
        className="gallery__card-img"
      />
      <button
        type="button"
        className={`gallery__card-btn ${
          isLiked ? "gallery__card-btn_active" : ""
        }`}
        aria-label="Кнопка лайка"
        data-before={likesLength}
        onClick={handleLikeClick}
      ></button>
      <button
        type="button"
        className={cardDeleteButtonClassName}
        aria-label="Кнопка удаления карточки"
      ></button>
    </li>
  );
}

export default Card;
