import React from 'react';
import ProductPicture from '../assets/products1.jpg';

const Product1: React.FC = () => {
  return (
    <section className="product1">
      <div className="product1__inner">
        <div className="title">
          <h1>新しい価値の創造</h1>
          <p className="text">Create New Values</p>
        </div>
        <div className="image">
          <img src={ProductPicture} alt="Product 1" />
          <p className="text">テキストテキスト<br />テキストテキスト</p>
        </div>
      </div>
    </section>
  );
};

export default Product1;
