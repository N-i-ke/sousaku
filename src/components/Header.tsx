import React from 'react';

const Header: React.FC = () => {
  return (
    <header>
      <div className="header__inner">
        <h1 className="title">
          <a href="">
            <img src="img/logo (2).svg" alt="Logo" />
          </a>
        </h1>
        <nav>
          <ul>
            <li><a href="">お知らせ</a></li>
            <li><a href="">商品のご紹介</a></li>
            <li><a href="">店舗のご案内</a></li>
          </ul>
        </nav>
        <div className="online__store">
          <a href="">オンラインストアを見る</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
