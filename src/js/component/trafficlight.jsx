
import React, { useState } from "react";

const TraffickLight = () => {
    const [changeColor, setChangeColor] = useState("grey");
    const [isPurpleVisible, setIsPurpleVisible] = useState(false);

    const colorLight = ["red", "yellow", "green", "purple"];

    function changingColor(color) {
        setChangeColor(color);
    }

    function randomizeColor() {
        const availableColors = isPurpleVisible ? colorLight : colorLight.slice(0, 3);
        const randomIndex = Math.floor(Math.random() * availableColors.length);
        changingColor(availableColors[randomIndex]);
    }

    function revealPurple() {
        setIsPurpleVisible(true);
    }

    return (
        <>
            <div className="col-12 mx-auto" id="traffickLight">
                <div className="col-12" id="redLight">
                    <button 
                        onClick={() => changingColor("red")} 
                        style={{ backgroundColor: changeColor === "red" ? "red" : "white" }}>
                    </button>
                </div>
                <div className="col-12" id="yellowLight">
                    <button 
                        onClick={() => changingColor("yellow")} 
                        style={{ backgroundColor: changeColor === "yellow" ? "yellow" : "white" }}>
                    </button>
                </div>
                <div className="col-12" id="greenLight">
                    <button 
                        onClick={() => changingColor("green")} 
                        style={{ backgroundColor: changeColor === "green" ? "green" : "white" }}>
                    </button>
                </div>
               
                {isPurpleVisible && (
                    <div className="col-12" id="purpleLight">
                        <button 
                            onClick={() => changingColor("purple")} 
                            style={{ backgroundColor: changeColor === "purple" ? "purple" : "white" }}>
                        </button>
                    </div>
                )}
            </div>
            <div className="col-12 w-25 mx-auto" id="randomButton">
                <button 
                    onClick={randomizeColor} 
                    type="button" 
                    className="btn btn-secondary mt-3">
                    Let the destiny decide
                </button>

                <button 
                    onClick={revealPurple} 
                    type="button" 
                    className="btn btn-outline-light mt-3">
                    Show Purple
                </button>
            </div>
        </>
    );
}

export default TraffickLight;
