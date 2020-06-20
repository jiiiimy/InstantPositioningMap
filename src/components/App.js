import React, { Component } from 'react';
import {Helmet} from 'react-helmet';
import '../assets/css/App.css';
import SideArea from './side';
import MainArea from './main';

class App extends Component {
  render() {
    return (
      <div className="container _all">
        <Helmet>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
          <meta property="og:title" content="InstantQuadrant" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://instantquadrant.netlify.app" />
          <meta property="og:image" content="https://instantquadrant.netlify.app/thumb.jpeg" />
          <meta property="og:site_name" content="InstantQuadrant" />
          <meta property="og:description" content="InstantQuadrantは、ポジショニングマップや四象限の図をを手軽に作成するWebアプリです。表をさくっと作ってブログや資料作成の時間を短縮しましょう。" />
          <meta property="fb:app_id" content="2471674503145611" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:image" content="https://instantquadrant.netlify.app/thumb.jpeg" />
          <meta name="twitter:site" content="@jiiiimy00" />
          <meta name="twitter:player" content="@jiiiimy00" />
          <link rel="shortcut icon" href="./favicon.ico" />
          <link rel="apple-touch-icon" href="./apple-icon.png" />
          <link rel="icon" type="image/png" href="./android-chrome-256x256.png" />
          <title>InstantQuadrant</title>
          <link href="https://fonts.googleapis.com/css?family=Noto+Sans+JP:400,700&display=swap" rel="stylesheet" />
        </Helmet>
        <SideArea />
        <MainArea />
      </div>
    ); 
  }
}

export default App;
