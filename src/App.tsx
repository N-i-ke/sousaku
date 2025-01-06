import React from 'react';
import Header from './components/Header';
import News from './components/News';
import Product1 from './components/Product1';
import Product2 from './components/Product2';
import Access from './components/Access';
import Footer from './components/Footer';
import './App.css';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <News />
        <Product1 />
        <Product2 />
        <Access />
      </main>
      <Footer />
    </div>
  );
};

export default App;
