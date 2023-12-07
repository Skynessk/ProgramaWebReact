import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const dataContext = createContext();

const DataProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const [cart, setCart] = useState(savedCart);

    useEffect(() => { 
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    useEffect(() => {
        axios("data.json").then((res) => setData(res.data));
    }, []);

    const buyProducts = (product) => {
        const productrepeat = cart.find((item) => item.id === product.id);

        if(productrepeat){
            setCart(cart.map((item)=> (item.id === product.id ? {...product, quanty: 
            productrepeat.quanty + 1} : item)));
        } else { 
            setCart([...cart, product]);       
        }
    };

    return <dataContext.Provider value={{ data, cart, setCart, buyProducts }}>{children}</dataContext.Provider>;
};

export default DataProvider;