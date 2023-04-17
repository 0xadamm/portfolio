import { BrowserRouter } from "react-router-dom";
import {
	Navbar,
	Hero,
	About,
	Experience,
	Tech,
	Works,
	Feedbacks,
	Contact,
	StarsCanvas,
} from "./components";
import React from "react";

const App = () => {
	return (
		<BrowserRouter>
			<div className="relative z-0 bg-primary">
				<div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
					<Navbar />
					<Hero />
				</div>
				<About />
				<Experience />
				<Tech />
				<Works />
				<Feedbacks />
				<div className="relative Z-0">
					<Contact />
					<StarsCanvas />
				</div>
			</div>
		</BrowserRouter>
	);
};

export default App;
