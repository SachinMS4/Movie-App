import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Overview from "./pages/Overview";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import { MovieProvider } from "./context/Context";

function App() {
  return (
    <MovieProvider>
      <BrowserRouter>
        <div className="app">
          <Header />
          <Routes>
            <Route path="/" exact element={<Home />}></Route>
            <Route path="/overview/:id" element={<Overview />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </MovieProvider>
  );
}

export default App;
