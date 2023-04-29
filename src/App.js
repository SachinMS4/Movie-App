import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/home";
import Overview from "./pages/movie-details";
import Header from "./components/header";
import Footer from "./components/footer";
import NotFound from "./pages/not-found";
import { MovieProvider } from "./context/Context";

function App() {
	return (
		<MovieProvider>
			<BrowserRouter>
				<div className="app-wrapper">
					<Header />
					<div className="app-body">
						<Routes>
							<Route path="/" exact element={<Home />}></Route>
							<Route path="/overview/:id" element={<Overview />}></Route>
							<Route path="*" element={<NotFound />}></Route>
						</Routes>
					</div>
					<Footer />
				</div>
			</BrowserRouter>
		</MovieProvider>
	);
}

export default App;
