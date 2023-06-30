import { timer } from './clock.js';
import { todoEvent } from './event.js';

function app() {
    const TD = {
        words: [],    // 할 일 이름 저장(중복 방지)
        length: 0 ,    // 배열의 인덱스
        done: [],     // false: 남은 일 true: 끝낸 일
        
        hal1() {      // 남은 할 일 계산
            let count=0;
            for(let i=TD.length; i>=0; i--) if(TD.done[i]==0) count++;
            const leftItems = document.querySelector(".left-items");
            leftItems.textContent = "🥕 오늘 할 일이 " + count + "개 남았습니다 🥕";
        },

        init: function () {
            timer();        //현재시각 호출
            todoEvent(TD);  //이벤트 초기세팅
        }
    }
    TD.init();  //초기세팅
}

app(); //초기세팅