
const UseDebounce = (fn, ms) => {
    let timer = null;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), ms);
    }
}

export default UseDebounce;