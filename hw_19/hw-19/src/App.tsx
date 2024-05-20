import React from 'react';
import logo from './logo.svg';
import './App.css';
import Title from "./components/title";
import Button from "./components/Button";

function App() {
    return (
        <div className="App">
            <h2>First task</h2>
            <p>Создать компонент “Title”</p>
            <Title value="Sign in"/>
            <h2>Second task</h2>
            <p>Кнопка “menu hamburger”</p>
            <div className="btnWrapper">
                <Button/>
            </div>

        </div>
    );
}

export default App;
