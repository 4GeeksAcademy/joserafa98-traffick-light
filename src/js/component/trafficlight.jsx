
import React, { useState } from "react";

const TraffickLight = () => {
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
		</div>
	  </>
	)
}
export default TraffickLight