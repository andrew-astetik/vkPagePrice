import state from './state.js';
import R from './render.js';
import './css/bootstrap.css';
import './css/bootstrap-addon.css';
import './css/main.css';
import './fonts/FA5PRO/css/all.css';
import reportWebVitals from './reportWebVitals';

let link = window.location;
state.data.appid = link.href.split('vk_app_id=')[1].split('&')[0];
state.data.homedir = link.href.split('/').slice(0,-1).join('/');
if (link.href.split('#').length === 1) link.href = '#/0';

R(state);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
