import './style.css'
import './javascript.svg'
import { setupCounter } from './counter'
import { init, use } from "echarts/core";
init, use;
setupCounter(document.querySelector('#counter'))
