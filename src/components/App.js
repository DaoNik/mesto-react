import React from "react";
import "../index.css";
import Header from "./Header";
import api from "../utils/api";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import avatar from "../images/Avatar.png";
import PopupWithForm from "./PopupWithForm";
import CurrentUserContext from "../contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({
    isOpen: false,
    name: "",
    link: "",
  });
  const [currentUser, setCurrentUser] = React.useState({
    name: "Жак-Ив Кусто",
    about: "Исследователь океана",
    avatar: avatar,
  });

  React.useEffect(() => {
    api
      .getUserInfo()
      .then((user) => {
        setCurrentUser(user);
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
  }, []);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard({
      isOpen: true,
      name: card.name,
      link: card.link,
    });
  }

  function handleUpdateUser({ name, about }) {
    api.addNewUserInfo(name, about).catch((err) => {
      console.log(`Ошибка: ${err}`);
    });
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({
      isOpen: false,
      name: "",
      link: "",
    });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Header />

      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />

      <Footer />

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />

      <EditProfilePopup
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        onUpdateUser={handleUpdateUser}
      />

      <PopupWithForm
        name={"add"}
        title={"Новое место"}
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
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
      </PopupWithForm>

      <PopupWithForm
        name={"update-avatar"}
        title={"Обновить аватар"}
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
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
      </PopupWithForm>
    </CurrentUserContext.Provider>
  );
}

export default App;
