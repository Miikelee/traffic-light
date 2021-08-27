import React, {useState} from 'react';

const Trafficlight = () => {
    const [color, setColor] = useState("red");

    return (
        <div className="container">
            <div className="traffic-light">
                <div onClick={() => setColor("red")} className={"light red " +((color === "red") ? "glow-red" : "light red")}></div>
                <div onClick={() => setColor("yellow")} className={"light yellow " +((color === "yellow") ? "glow-yellow" : "light yellow")}></div>
                <div onClick={() => setColor("green")} className={"light green " +((color === "green") ? "glow-green" : "light")}></div>
            </div>
        </div>
    )
};

export default Trafficlight;