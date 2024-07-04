import React from "react";

interface Props {
    image: string;
    title: string;
    category: string;
    price: number;
    onAddItem: () => void;
}

const ProductListItem = ({
    image,
    title,
    category,
    price,
    onAddItem,
}: Props) => {
    return (
        <div className="border p-4 rounded shadow">
            <img
                src={image}
                alt={title}
                className="w-full h-56 object-cover mb-4"
            />
            <h3 className="font-semibold">
                {title.substring(0, 40)}
                {title.length > 40 ? "..." : ""}
            </h3>
            <div className="flex items-center justify-between mt-3 p-2">
                <div>
                    <p className="text-gray-600 capitalize">{category}</p>
                    <p className="text-primary font-semibold">${price}</p>
                </div>
                <button
                    onClick={onAddItem}
                    className="mt-2 px-4 py-2 bg-primary text-white rounded hover:bg-blue-700"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductListItem;
