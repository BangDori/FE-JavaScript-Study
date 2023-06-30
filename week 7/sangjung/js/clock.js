export function initClock(){
    const clock = document.querySelector('.todo-title');
    function startClock(){
        const now = new Date();
        clock.textContent = String(now).substring(16,24);
    }
    startClock();
    setInterval(startClock, 1000);
}

