import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [changeColor,setChangeColor]=useState("grey")
	function changingColor(color){
		setChangeColor(color);
	}
	return (
		<>
		<div className="col-12 mx-auto" id="traffickLight">
		<div className="col-12" id="redLight">
		  <button 
			onClick={() => changingColor("red")} 
			style={{ backgroundColor: changeColor === "red" ? "red" : "white" }}>
			Red
		  </button>
		</div>
		<div className="col-12" id="yellowLight">
		  <button 
			onClick={() => changingColor("yellow")} 
			style={{ backgroundColor: changeColor === "yellow" ? "yellow" : "white" }}>
			Yellow
		  </button>
		</div>
		<div className="col-12" id="greenLight">
		  <button 
			onClick={() => changingColor("green")} 
			style={{ backgroundColor: changeColor === "green" ? "green" : "white" }}>
			Green
		  </button>
		</div>
		</div>
	  </>
	)
}

export default Home;
