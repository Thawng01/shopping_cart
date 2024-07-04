import { useDispatch } from "react-redux";
import { Product } from "../type";
import ProductListItem from "./ProductListItem";
import { AppDispatch } from "../store/store";
import { addItem } from "../store/cartSlice";

interface Props {
    products: Product[];
}
const ProductList = ({ products }: Props) => {
    const dispatch = useDispatch<AppDispatch>();

    const handleAddToCart = (product: Product) => {
        const newProduct = {
            ...product,
            quantity: 1,
            totalPrices: product.price,
        };
        dispatch(addItem(newProduct));
    };

    return (
        <div className="px-6 pb-6 pt-20">
            <h2 className="text-xl font-semibold mb-4">Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {products.map((product) => (
                    <ProductListItem
                        key={product.id}
                        image={product.image}
                        title={product.title}
                        category={product.category}
                        price={product.price}
                        onAddItem={() => handleAddToCart(product)}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductList;
