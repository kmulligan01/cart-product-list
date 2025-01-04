'use client';

import Image from "next/image";
import { useEffect, useState } from "react";
import { useCart } from "@/utils/cartContext";

interface ButtonProps {
    id: number;
    name: string;
    price: number;
    image: string;
}

export default function Button({ id, name, price, image }: ButtonProps) {
    const [count, setCount] = useState<number>(1);
    const [activeBtn, setActiveBtn] = useState<boolean>(false);
    const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, cart } = useCart();

    useEffect(() => {
        const cartItem = cart.find((item) => item.id === id);
        setActiveBtn(!!cartItem);
        setCount(cartItem ? cartItem.quantity : 1);
    }, [cart, id]);

    const toggleButton = () => {
        if (activeBtn) {
            removeFromCart(id);
            setCount(1);
        } else {
            addToCart({ id, name, price, quantity: count, image });
        }
        setActiveBtn((prev) => !prev);
    };

    const increaseCount = () => {
        setCount((prev) => prev + 1);
        increaseQuantity(id);
    };

    const decreaseCount = () => {
        if (count > 1) {
            setCount((prev) => prev - 1);
            decreaseQuantity(id);
        }
    };

    return (
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-full flex justify-center">
            {activeBtn ? (

                <div className="flex items-center gap-2  bg-red rounded-[100px] border-2 border-red px-6 py-2 justify-between w-1/2">
                    <button className="border border-white rounded-[100%] flex items-center w-5 h-5" onClick={decreaseCount}>
                        <Image
                            aria-hidden
                            src="/images/icon-decrement-quantity.svg"
                            alt="Decrease Quantity"
                            width={8}
                            height={8}

                            className=" shadow-none "
                        />
                    </button>

                    <p className="m-0 text-white">{count}</p>
                    <button className="border border-white rounded-[100%] flex items-center w-5 h-5" onClick={increaseCount}>
                        <Image
                            aria-hidden
                            src="/images/icon-increment-quantity.svg"
                            alt="Increase Quantity"
                            width={8}
                            height={8}
                            className="shadow-none "
                        />
                    </button>
                </div>

            ) : (

                <button
                    className="flex items-center gap-2 hover:text-red bg-foreground rounded-[100px] border-2 border-red px-6 py-2"
                    onClick={toggleButton}
                >
                    <Image
                        aria-hidden
                        src="/images/icon-add-to-cart.svg"
                        alt="Add item to cart"
                        width={16}
                        height={16}
                    />
                    Add to Cart
                </button>

            )}
        </div>
    );
}
