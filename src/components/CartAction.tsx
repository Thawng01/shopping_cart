import { useDispatch } from "react-redux";
import {
    decreaseQuantity,
    increaseQuantity,
    removeItem,
} from "../store/cartSlice";
import { BiPlus, BiMinus, BiTrash } from "react-icons/bi";

interface Props {
    id: number;
    price: number;
}

const CartAction = ({ id, price }: Props) => {
    const dispatch = useDispatch();
    return (
        <div className="flex items-center">
            <button
                onClick={() => dispatch(increaseQuantity({ id, price }))}
                className="px-2 py-1 rounded border-2"
            >
                <BiPlus />
            </button>
            <button
                onClick={() => dispatch(decreaseQuantity({ id, price }))}
                className="px-2 py-1 rounded border-2 mx-2"
            >
                <BiMinus />
            </button>
            <button
                onClick={() => dispatch(removeItem(id))}
                className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-700"
            >
                <BiTrash />
            </button>
        </div>
    );
};

export default CartAction;
