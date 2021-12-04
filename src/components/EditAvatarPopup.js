import React from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const inputAvatarLink = React.useRef(currentUser.avatar);
  function handleSubmit(e) {
    e.preventDefault();
    inputAvatarLink.current.focus();
    props.onUpdateAvatar({
      avatar: inputAvatarLink.current.value,
    });
    currentUser.avatar = inputAvatarLink.current.value;
    props.onClose();
  }

  return (
    <PopupWithForm
      name={"update-avatar"}
      title={"Обновить аватар"}
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <input
        className="popup__input"
        id="avatar-link"
        name="link"
        type="url"
        placeholder="Ссылка на картинку"
        ref={inputAvatarLink}
        required
      />
      <span className="popup__error" id="avatar-link-error"></span>
      <button type="submit" className="popup__btn popup__btn-update">
        Сохранить
      </button>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
