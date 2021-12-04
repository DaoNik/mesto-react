import React from "react";

function PopupWithForm({ name, title, children, isOpen, onClose, onSubmit }) {
  return (
    <div className={`popup popup_${name} ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <form
          className="popup__form"
          name={name}
          onSubmit={onSubmit}
          noValidate
        >
          <h2 className="popup__title">{title}</h2>
          {children}
        </form>
        <button
          onClick={onClose}
          type="button"
          className="popup__btn-closed"
          aria-label="Кнопка закрытия всплывающего окна"
        ></button>
      </div>
    </div>
  );
}

export default PopupWithForm;
