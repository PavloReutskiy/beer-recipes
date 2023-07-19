import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import './index.scss';
import { App } from './App';

const element = document.querySelector('#root');

createRoot(element).render (
  <HashRouter>
    <App />
  </HashRouter>
);
