import React from "react";
import "./App.css";
import Contacts from "./components/Contacts";
import Users from "./components/Users";

function App() {
	return (
		<div className="App">
			<Users />
			<Contacts />
		</div>
	);
}

export default App;
