import '../index.css';
import logo from '../images/logo.svg';
import avatar from '../images/Avatar.png';

function App() {
  return (
<>
    <header className="header">
        <a href="#" className="header__link">
            <img src={logo} alt="Логотип Mesto-Russia" className="header__image" />
        </a>
    </header>

    <main>
        <section className="profile">
            <div className="profile__wrapper">
                <h1 className="profile__title">Жак-Ив Кусто</h1>
                <p className="profile__subtitle">Исследователь океана</p>
                <button type="button" className="profile__button-edit" aria-label="Кнопка для открытия окна редактирования имени пользователя и рода деятельности"></button>
            </div>
            <div className="profile__container-avatar">
                <img className="profile__avatar" src={avatar} alt="Аватар профиля" />
            </div>
            <button type="button" className="profile__button-add" aria-label="Кнопка для открытия окна добавления мест"></button>
        </section>

        <section className="gallery">
            <ul className="gallery__cards">
            </ul>
        </section>
    </main>
    <footer className="footer">
        <p className="footer__title">&copy; 2020 Mesto Russia</p>
    </footer>
    <div className="popup popup_edit">
        <div className="popup__container">
            <form className="popup__form" name="popup__form-edit" noValidate>
                <h2 className="popup__title">Редактировать профиль</h2>
                <input className="popup__input popup__input_value_name" id="name" name="name" type="text"
                    placeholder="Никнейм" minLength="2" maxLength="40" required />
                <span className="popup__error" id="name-error"></span>
                <input className="popup__input popup__input_value_job" id="job" name="job" type="text"
                    placeholder="Род деятельности" minLength="2" maxLength="200" required />
                <span className="popup__error" id="job-error"></span>
                <button type="submit" className="popup__btn">Сохранить</button>
            </form>
            <button type="button" className="popup__btn-closed" aria-label="Кнопка закрытия всплывающего окна"></button>            
        </div>
    </div>
    <div className="popup popup_add">
        <div className="popup__container">
            <form className="popup__form" name="popup__form-add" noValidate>
                <h2 className="popup__title popup__title_add">Новое место</h2>
                <input className="popup__input popup__input_value_place" id="place" name="name" type="text"
                    placeholder="Название" minLength="2" maxLength="30" required />
                <span className="popup__error" id="place-error"></span>
                <input className="popup__input popup__input_value_place-link" id="place-link" name="link" type="url"
                    placeholder="Ссылка на картинку" required />
                <span className="popup__error" id="place-link-error"></span>
                <button type="submit" className="popup__btn popup__btn-add">Создать</button>
            </form>
            <button type="button" className="popup__btn-closed" aria-label="Кнопка закрытия всплывающего окна"></button>  
        </div>
    </div>
    <div className="popup popup_view">
        <div className="popup__view-container">
            <h2 className="popup__view-title"></h2>
            <img src="#" alt="#" className="popup__view-image" />
            <button type="button" className="popup__btn-closed" aria-label="Кнопка закрытия всплывающего окна"></button>  
        </div>
    </div>
    <div className="popup popup_confirm">
        <div className="popup__container popup__container_confirm">
            <h2 className="popup__title popup__title_confirm">Вы уверены?</h2>
            <button type="button" className="popup__btn popup__btn_confirm">Да</button>
            <button type="button" className="popup__btn-closed" aria-label="Кнопка закрытия всплывающего окна"></button>  
        </div>
    </div>
    <div className="popup popup_update-avatar">
        <div className="popup__container">
            <form className="popup__form" name="popupUpdateAvatarForm" noValidate>
                <h2 className="popup__title">Обновить аватар</h2>
                <input className="popup__input" id="avatar-link" name="link" type="url"
                    placeholder="Ссылка на картинку" required />
                <span className="popup__error" id="avatar-link-error"></span>
                <button type="submit" className="popup__btn popup__btn-update">Сохранить</button>
            </form>
            <button type="button" className="popup__btn-closed" aria-label="Кнопка закрытия всплывающего окна"></button>  
        </div>
    </div>
    <template id="template-card">
        <li className="gallery__card">
            <h2 className="gallery__card-title"></h2>
            <img src="#" alt="#"
                className="gallery__card-img" />
            <button type="button" className="gallery__card-btn" aria-label="Кнопка лайка" data-before="0"></button>
            <button type="button" className="gallery__card-btn-trash" aria-label="Кнопка удаления карточки"></button>
        </li>
    </template>
</>
  );
}

export default App;
