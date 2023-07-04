export const initClock = () =>{
    const clock = document.querySelector('.todo-title');
    const startClock = () =>{
        const now = new Date();
        clock.textContent = String(now).substring(16,24);
    }
    startClock();
    setInterval(startClock, 1000);
};


