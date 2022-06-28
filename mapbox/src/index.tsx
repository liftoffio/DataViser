import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MyScene from "./MyScene";
import { Slider } from "./components";
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Slider />
    <MyScene />
  </React.StrictMode>
);
