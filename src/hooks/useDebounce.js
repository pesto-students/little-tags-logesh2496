import { useRef } from "react"

const UseDebounce = (fn, ms) => {
    const timer = useRef(null);
    const invokeCallback = (...args) => {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = setTimeout(() => fn(...args), ms);
    }
    return invokeCallback;
}

export default UseDebounce;