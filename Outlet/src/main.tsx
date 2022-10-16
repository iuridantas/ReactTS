import React from 'react';
import ReactDOM from 'react-dom/client';
import { Home } from './pages/home/home';
import { Footer } from './components/footer/footer';
import GlobalStyle, { Content } from './styles/global';
import { Header } from './components/header/header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CreateProduct } from './pages/createproduct/createProduct';
import { Register } from './pages/register/register';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <Header />
      <Content>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateProduct />} />
          <Route path="/update/:id" element={<CreateProduct />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Content>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
);
