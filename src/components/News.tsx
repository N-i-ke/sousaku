import React from 'react';

const News: React.FC = () => {
  return (
    <section className="news">
      <div className="news__inner">
        <div className="title">
          <p>News</p>
          <h1>お知らせ</h1>
        </div>
        <dl className="list">
          <dt>2021.01.01</dt>
          <dd>タイトルタイトルタイトルタイトル</dd>
          <dt>2021.01.01</dt>
          <dd>タイトルタイトルタイトルタイトル</dd>
          <dt>2021.01.01</dt>
          <dd className="border">タイトルタイトルタイトルタイトル</dd>
          <dt className="none">2021.01.01</dt>
          <dd className="none">タイトルタイトルタイトルタイトル</dd>
        </dl>
      </div>
    </section>
  );
};

export default News;
