import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer__inner">
        <div className="left">
          <p>
            <a href="">オンラインストアを見る</a>
            <a href="">お問い合わせ</a>
          </p>
        </div>
        <div className="right">
          <div className="logo">
            <img src="img/logo (2).svg" alt="Logo" />
          </div>
          <p className="info">
            〒１０６-００３２ 東京都港区六本木５丁目××××× <br />
            <a href="">電話: ０３-ＸＸＸＸ-ＸＸＸＸ</a>
          </p>
          <ul className="list">
            <li><a href="">お知らせ</a></li>
            <li><a href="">商品のご紹介</a></li>
            <li><a href="">店舗のご案内</a></li>
          </ul>
        </div>
      </div>
      <div className="bottom">© SOUSAKU</div>
    </footer>
  );
};

export default Footer;
