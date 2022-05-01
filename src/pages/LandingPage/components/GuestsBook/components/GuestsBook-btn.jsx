import React from "react";

import "./styles/styles.css";

import book from "./images/book.png";

function GuestsBook_Btn() {
    return(
        <div className="guests-book-btn-container">
            <img src={book} alt="Guests Book" />
        </div>
    );
}

export default GuestsBook_Btn;