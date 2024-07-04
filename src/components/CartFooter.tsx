import { RootState } from "../store/store";
import { useSelector } from "react-redux";

const CartFooter = () => {
    const carts = useSelector((state: RootState) => state.cart.items);

    const cartItemCount = carts.reduce(
        (count, item) => count + item.totalPrices,
        0
    );
    return (
        <div className="flex items-center justify-between py-4 px-6 border-t">
            <p className="font-semibold text-lg">Total Amount </p>
            <p className="font-semibold text-lg text-primary">
                $ {cartItemCount.toFixed(2)}
            </p>
        </div>
    );
};

export default CartFooter;
