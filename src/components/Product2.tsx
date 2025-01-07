import React from 'react';
import ProductPicture from '../assets/products2.jpg';

const Product2: React.FC = () => {
  return (
    <section className="product2">
      <div className="product2__inner">
        <div className="title">
          <h1>化学と技術の調和</h1>
          <p className="text">Science & Technology</p>
        </div>
        <div className="image">
          <img src={ProductPicture} alt="Product 2" />
          <p className="text">テキストテキスト<br />テキストテキスト</p>
        </div>
      </div>
    </section>
  );
};

export default Product2;
