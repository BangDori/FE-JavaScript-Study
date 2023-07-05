export const initClock = () =>{
    const clock = document.querySelector('.todo-title');
    const startClock = () =>{
        clock.textContent = Date().substring(16,24);
    }
    startClock();
    setInterval(startClock, 1000);
};


