import React from "react";
import "../index.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import PopupWithForm from "./PopupWithForm";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
  }

  return (
    <>
      <Header />

      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
      />

      <Footer />

      <PopupWithForm
        name={"edit"}
        title={"Редактировать профиль"}
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        children={
          <>
            <input
              className="popup__input popup__input_value_name"
              id="name"
              name="name"
              type="text"
              placeholder="Никнейм"
              minLength="2"
              maxLength="40"
              required
            />
            <span className="popup__error" id="name-error"></span>
            <input
              className="popup__input popup__input_value_job"
              id="job"
              name="job"
              type="text"
              placeholder="Род деятельности"
              minLength="2"
              maxLength="200"
              required
            />
            <span className="popup__error" id="job-error"></span>
            <button type="submit" className="popup__btn">
              Сохранить
            </button>
          </>
        }
      />

      <PopupWithForm
        name={"add"}
        title={"Новое место"}
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        children={
          <>
            <input
              className="popup__input popup__input_value_place"
              id="place"
              name="name"
              type="text"
              placeholder="Название"
              minLength="2"
              maxLength="30"
              required
            />
            <span className="popup__error" id="place-error"></span>
            <input
              className="popup__input popup__input_value_place-link"
              id="place-link"
              name="link"
              type="url"
              placeholder="Ссылка на картинку"
              required
            />
            <span className="popup__error" id="place-link-error"></span>
            <button type="submit" className="popup__btn popup__btn-add">
              Создать
            </button>
          </>
        }
      />

      <PopupWithForm
        name={"update-avatar"}
        title={"Обновить аватар"}
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        children={
          <>
            <input
              className="popup__input"
              id="avatar-link"
              name="link"
              type="url"
              placeholder="Ссылка на картинку"
              required
            />
            <span className="popup__error" id="avatar-link-error"></span>
            <button type="submit" className="popup__btn popup__btn-update">
              Сохранить
            </button>
          </>
        }
      />

      <div className="popup popup_confirm">
        <div className="popup__container popup__container_confirm">
          <h2 className="popup__title popup__title_confirm">Вы уверены?</h2>
          <button type="button" className="popup__btn popup__btn_confirm">
            Да
          </button>
          <button
            type="button"
            className="popup__btn-closed"
            aria-label="Кнопка закрытия всплывающего окна"
          ></button>
        </div>
      </div>

      <template id="template-card">
        <li className="gallery__card">
          <h2 className="gallery__card-title"></h2>
          <img src="#" alt="#" className="gallery__card-img" />
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
      </template>
    </>
  );
}

export default App;
