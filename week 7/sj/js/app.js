import { timer } from './clock.js';
import { todoEvent } from './event.js';

function app() {
    timer();        //현재시각 호출
    todoEvent();  //이벤트 초기세팅
}

app(); //초기세팅