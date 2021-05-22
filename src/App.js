/** @format */

import "./App.css";
import Header from "./Components/Header";
import SideBar from "./Components/SideBar";
import RecommendedVideo from "./Components/RecommendedVideo";

function App() {
	return (
		<div className="app">
			<Header />
			<div className="app__page">
				<SideBar />
				<RecommendedVideo />
			</div>
		</div>
	);
}

export default App;
