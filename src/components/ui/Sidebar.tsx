'use client';
import { useState } from "react";
import { useCart } from "@/utils/cartContext";
import Image from "next/image";
import Modal from "./Modal";



export default function Sidebar() {
    const { cart, removeFromCart } = useCart();
    const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
    const orderTotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const [isModalOpen, setModalOpen] = useState(false);

    const toggleModal = () => setModalOpen((prev) => !prev);


    return (
        <div className="p-8 bg-white rounded-lg">
            {cart.length === 0 ? (
                <>
                    <h2>Your Cart(0)</h2>
                    <Image
                        src="/images/illustration-empty-cart.svg"
                        alt="Empty Cart"
                        width={200}
                        height={200}
                        className="shadow-none"
                    />
                    <p className="text-center">Your added items will appear here.</p>
                </>
            ) : (
                <div>
                    <h2 className="text-red">Your Cart ({totalQuantity})</h2>
                    {cart.map((item) => {
                        const totalQuantity = item.price * item.quantity;

                        return (
                            <div
                                key={item.id}
                                className="flex items-center justify-between my-4 flex-wrap border-b border-rose-100 pb-2 text-sm"
                            >
                                <div>
                                    <h3 className="text-sm font-bold">{item.name}</h3>
                                    <div className="flex items-center justify-between">
                                        <p className="font-bold text-red">
                                            {item.quantity}X
                                        </p>
                                        <p className="text-rose-500 font-normal">@ ${item.price.toFixed(2)}</p>
                                        <p className="text-rose-900 font-semibold"> ${totalQuantity.toFixed(2)}</p>

                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button
                                        className="px-2 py-1 border border-rose-300 rounded-full w-8 h-8 hover:bg-red-600"
                                        onClick={() => removeFromCart(item.id)}
                                    >
                                        <Image
                                            src="/images/icon-remove-item.svg"
                                            alt="remove item"
                                            width={10}
                                            height={10}
                                            className="shadow-none"
                                        />
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                    <div className="flex justify-between mt-4 items-center">
                        <p className="text-rose-400">Order Total:</p>
                        <h2 className="font-bold">${orderTotal.toFixed(2)}</h2>
                    </div>
                    <div className="bg-rose-100 p-4 rounded-lg flex items-center gap-2 justify-between mt-8">
                        <Image
                            src="/images/icon-carbon-neutral.svg"
                            alt="Carbon Neutral Delivery"
                            width={20}
                            height={20}
                            className="shadow-none m-0"
                        />
                        <p>This is carbon neutral delivery</p>
                    </div>
                    <button onClick={toggleModal} className="btn-primary">
                        Confirm Order
                    </button>
                    <Modal isOpen={isModalOpen} onClose={toggleModal} />
                </div>
            )}
        </div>
    );
}
