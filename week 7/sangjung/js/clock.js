export function initClock(){
    const CLOCK = document.getElementsByClassName('todo-title')[0];
    function startClock(){
        const NOW = new Date();
        const END = new Date(NOW.getFullYear(), NOW.getMonth(), NOW.getDate() + 1,0,0,0);
        const DIF = END- NOW
        const HOUR = String(NOW.getHours()).padStart(2,"0");
        const MINUTE = String(NOW.getMinutes()).padStart(2,"0");
        const SECOND = String(NOW.getSeconds()).padStart(2,"0");
        CLOCK.innerHTML = `${HOUR}:${MINUTE}:${SECOND}`;
    
    }
    setInterval(startClock, 1000);
}

