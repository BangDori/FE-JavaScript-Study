const clock = document.querySelector('.todo-title');

export const getTime = () => {
    const chtime = new Date();
    const hours = chtime.getHours();
    const minutes = chtime.getMinutes();
    const seconds = chtime.getSeconds();
    clock.innerHTML = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
}