import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  const [name, setName] = React.useState();
  const [link, setLink] = React.useState();

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeLink(e) {
    setLink(e.target.value);
  }

  function handleAddPlaceSubmit(e) {
    e.preventDefault();

    props.onAddPlace(name, link);

    props.onClose();
  }
  return (
    <PopupWithForm
      name={"add"}
      title={"Новое место"}
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleAddPlaceSubmit}
    >
      <input
        className="popup__input popup__input_value_place"
        id="place"
        name="name"
        type="text"
        placeholder="Название"
        minLength="2"
        maxLength="30"
        onChange={handleChangeName}
        required
      />
      <span className="popup__error" id="place-error"></span>
      <input
        className="popup__input popup__input_value_place-link"
        id="place-link"
        name="link"
        type="url"
        placeholder="Ссылка на картинку"
        onChange={handleChangeLink}
        required
      />
      <span className="popup__error" id="place-link-error"></span>
      <button type="submit" className="popup__btn popup__btn-add">
        Создать
      </button>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
