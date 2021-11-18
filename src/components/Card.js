import React from "react";

function Card({ card }) {
  return (
    <li className="gallery__card">
      <h2 className="gallery__card-title">{card.name}</h2>
      <img src={card.link} alt={card.name} className="gallery__card-img" />
      <button
        type="button"
        className="gallery__card-btn"
        aria-label="Кнопка лайка"
        data-before="0"
      ></button>
      <button
        type="button"
        className="gallery__card-btn-trash"
        aria-label="Кнопка удаления карточки"
      ></button>
    </li>
  );
}

export default Card;
