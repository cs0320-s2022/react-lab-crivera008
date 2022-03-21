import React from 'react';
import './App.css';

function TextBox(props: any) {
    const handler = (event: any) => {
        props.change(event.target.value)
    }
    return (
        <div className="Horoscope">
            <header className="Horoscope-header">
                <label>
                    {props.label}
                    <input type="text" onChange={handler}/>
                </label>
            </header>
        </div>
    );
}

export default TextBox;