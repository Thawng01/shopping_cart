import { useSelector } from "react-redux";

import { TCart } from "../type";
import { RootState } from "../store/store";
import Overlay from "./Overlay";
import CartFooter from "./CartFooter";
import CartItem from "./CartItem";

interface Props {
    onDismiss: React.Dispatch<React.SetStateAction<boolean>>;
}
const Cart = ({ onDismiss }: Props) => {
    const cart = useSelector((state: RootState) => state.cart.items);

    return (
        <>
            <Overlay onClick={onDismiss} />
            <div className="w-[350px] fixed right-0 bg-white h-full z-40">
                <h2 className="text-xl fixed font-semibold bg-white w-full px-4 py-3 border-b">
                    Cart
                </h2>
                {cart.length === 0 ? (
                    <p className="text-center pt-14">No items in cart</p>
                ) : (
                    <div className="overflow-auto h-[calc(100vh-110px)] mt-12">
                        {cart.map((item: TCart) => (
                            <CartItem
                                key={item.id}
                                id={item.id}
                                image={item.image}
                                price={item.price}
                                totalPrices={item.totalPrices}
                                quantity={item.quantity}
                                title={item.title}
                            />
                        ))}
                    </div>
                )}
                <CartFooter />
            </div>
        </>
    );
};

export default Cart;
