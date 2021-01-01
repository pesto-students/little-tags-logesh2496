import { useEffect } from "react"

const useScrollIntoView = (dependencies = []) => {
    useEffect(() => {
        document.firstElementChild.scrollIntoView({ behavior: 'smooth' });
    }, dependencies);
}

export default useScrollIntoView;