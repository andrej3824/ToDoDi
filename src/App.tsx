import React from 'react';
import './App.css';

function App() {

    return (
        <div className="App">
            <Todolist/>
            <Todolist/>
            <Todolist/>
        </div>
    );
}

function Todolist() {

    return (
        <div>
            <h3>What to learn</h3>
            <div>
                <input/>
                <button>+</button>
                <ul>
                    <li><input type={'checkbox'} checked={true}/><span>CSS</span></li>
                    <li><input type={'checkbox'} checked={true}/><span>React</span></li>
                    <li><input type={'checkbox'} checked={false}/><span>Redux</span></li>
                </ul>
                <div>
                    <button>all</button>
                    <button>active</button>
                    <button>completed</button>
                </div>
            </div>
        </div>
    )
}

export default App;
