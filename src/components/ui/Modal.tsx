'use client';

import { useCart } from "@/utils/cartContext";
import Image from "next/image";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function Modal({ isOpen, onClose }: ModalProps) {
    if (!isOpen) return null;
    const { cart, resetAll } = useCart();
    const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
    const orderTotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const handleReset = () => {
        resetAll(); // Reset the cart
        onClose(); // Close the modal
    };

    return (
        <div className=" fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg w-1/3 ">
                < Image
                    src="/images/icon-order-confirmed.svg"
                    alt="remove item"
                    width={50}
                    height={50}
                    className="shadow-none m-0"
                />
                <h2 className="text-red">Order Confirmed</h2>
                <p>We hope you enjoy your food!</p>
                <div className="bg-rose-100 rounded p-4">
                    {
                        cart.map((item) => {
                            const totalQuantity = item.price * item.quantity;

                            return (
                                <div
                                    key={item.id}
                                    className={cart.length <= 1 ? "flex items-center justify-between my-4 flex-wrap text-sm" : "flex items-center justify-between my-4 flex-wrap text-sm border-b border-rose-50 pb-2 "}
                                >

                                    <div className="flex items-center justify-start gap-4">
                                        <Image
                                            src={item.image}
                                            alt="remove item"
                                            width={90}
                                            height={90}
                                            className="shadow-none m-0"
                                        />
                                        <div>
                                            <h3 className="text-sm font-bold m-0">{item.name}</h3>
                                            <div className="flex items-center justify-start">
                                                <p className="font-bold text-red m-0">
                                                    {item.quantity}X
                                                </p>
                                                <p className="text-rose-500 font-normal m-0">@ ${item.price.toFixed(2)}</p>

                                            </div>
                                        </div>
                                    </div>
                                    <div>     <p className="text-rose-900 font-semibold"> ${totalQuantity.toFixed(2)}</p></div>
                                </div>
                            );
                        })
                    }
                </div>
                <div className="flex justify-between mt-4">
                    <p className="text-rose-400">Order Total:</p>
                    <h2 className="font-bold">${orderTotal.toFixed(2)}</h2>
                </div>
                <button className="btn-primary" onClick={handleReset}>
                    Start New Order
                </button>
            </div>
        </div >
    );
}
