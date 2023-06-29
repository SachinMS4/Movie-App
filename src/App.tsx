import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import './App.css';
import Overview from './pages/movie-details';
import Header from './components/header';
import Footer from './components/footer';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Home from './pages/home';
import NotFound from './pages/not-found';
// import { MovieProvider } from "./context/Context";

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

      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
