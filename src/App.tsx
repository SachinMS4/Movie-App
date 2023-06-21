import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./pages/home";
import Overview from "./pages/movie-details";
import Header from "./components/header";
import Footer from "./components/footer";
import NotFound from "./pages/not-found";
// import { MovieProvider } from "./context/Context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      {/* <MovieProvider> */}
      <BrowserRouter>
        <div className="app-wrapper">
          <Header />
          <div className="app-body">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/overview/:id" element={<Overview />}></Route>
              <Route path="*" element={<NotFound />}></Route>
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
      {/* </MovieProvider> */}
    </QueryClientProvider>
  );
}

export default App;
