import React, { useState } from 'react';
import './Form.css';

function Form() {
    const [countMessage, setCountMessage] = useState(0);
    const [historyMessages, setHistoryMessages] = useState([]);

    const pushHistoryMessages = (historyMessages) => {
        const message = {
            name: "",
            text: "",
            dataTime: new Date
        }

        historyMessages.push(message);
        setCountMessage(historyMessages.length);
        setHistoryMessages([...historyMessages]);
    }

    return(
        <div className="Form__box">
            <div className="Box__title">
                Сообщения {countMessage}
            </div>
            <div className="Box__messages">
                тут будут Сообщения
            </div>
            <div className="Box__send">
                <label>
                    Имя
                    <input type="text" />
                </label>

                <label>
                    Сообщение
                    <textarea />
                </label>
                <input type="text" />
                <button onClick={() => pushHistoryMessages(historyMessages)}>Добавить</button>
            </div>
        </div>
    );
}

export default Form;