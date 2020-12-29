import { useEffect } from "react"

const UseRouterClass = () => {
    useEffect(() => {
        document.getElementsByClassName('home-header')[0].classList.add('product-header');

        return () => {
            document.getElementsByClassName('home-header')[0].classList.remove('product-header');
        }
    }, [])
}

export default UseRouterClass;