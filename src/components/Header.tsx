import { useSelector } from "react-redux";
import { BiCart } from "react-icons/bi";
import { RootState } from "../store/store";
import { useState } from "react";
import Cart from "./Cart";

const Header = () => {
    const [showCart, setShowCart] = useState(false);

    const cartItems = useSelector((state: RootState) => state.cart.items);
    const cartItemCount = cartItems.reduce(
        (count, item) => count + item.quantity,
        0
    );

    return (
        <>
            <header className="bg-white shadow-md py-4 px-10 flex justify-between items-center fixed w-full">
                <h1 className="text-xl font-bold text-black">Shopping Site</h1>
                <div className="relative">
                    <div
                        className="relative flex items-center"
                        onClick={() => setShowCart(true)}
                    >
                        <BiCart size={28} />
                        {cartItemCount > 0 && (
                            <span className="absolute -top-3 -right-3 bg-red-500 text-white text-xs rounded-full px-2 py-1">
                                {cartItemCount}
                            </span>
                        )}
                    </div>
                </div>
            </header>
            {showCart && <Cart onDismiss={setShowCart} />}
        </>
    );
};

export default Header;
