import React from "react";

function ImagePopup() {
    return (
    <div className="popup popup_view">
        <div className="popup__view-container">
            <h2 className="popup__view-title"></h2>
            <img src="#" alt="#" className="popup__view-image" />
            <button type="button" className="popup__btn-closed" aria-label="Кнопка закрытия всплывающего окна"></button>  
        </div>
    </div>
    )
}

export default ImagePopup;