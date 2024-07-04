import React from "react";
import CartAction from "./CartAction";

interface Props {
    id: number;
    image: string;
    title: string;
    price: number;
    totalPrices: number;
    quantity: number;
}

const CartItem = ({
    id,
    quantity,
    totalPrices,
    image,
    title,
    price,
}: Props) => {
    return (
        <div className="border p-4 rounded mb-2">
            <div className=" flex items-center">
                <img
                    src={image}
                    alt={title}
                    className="w-10 h-10 object-cover mr-4"
                />
                <h3 className="font-semibold text-sm">{title}</h3>
            </div>
            <div className="flex items-center justify-between mt-1 px-4">
                <div>
                    <p className="text-sm">Quantity: {quantity}</p>
                    <p className="text-sm">Price: ${totalPrices}</p>
                </div>
                <CartAction id={id} price={price} />
            </div>
        </div>
    );
};

export default CartItem;
