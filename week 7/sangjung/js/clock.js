export function initClock(){
    const clock = document.getElementsByClassName('todo-title')[0];
    function startClock(){
        const now = new Date();
        const hour = String(now.getHours()).padStart(2,"0");
        const minut = String(now.getMinutes()).padStart(2,"0");
        const second = String(now.getSeconds()).padStart(2,"0");
        clock.innerHTML = `${hour}:${minut}:${second}`;
    
    }
    startClock();
    setInterval(startClock, 1000);
}

