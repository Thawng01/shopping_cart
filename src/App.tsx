import { useEffect, useState } from "react";

import ProductList from "./components/ProductList";
import Header from "./components/Header";

const App = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => {
                console.log("data : ", data);
                setProducts(data);
            });
    }, []);

    return (
        <div>
            <Header />
            <ProductList products={products} />
        </div>
    );
};

export default App;
