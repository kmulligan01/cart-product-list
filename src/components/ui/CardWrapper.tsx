'use client'

import Image from "next/image";
import Button from "./Button";
import cardData from '@/utils/cardData';
import { useCart } from "@/utils/cartContext";


export default function CardWrapper() {
    const { isItemInCart } = useCart();
    return (

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-8">
            {cardData.map((card, index) => {
                const { id: id, image, name: title, category: category, price: price } = card;

                return (
                    <div key={index} className="max-w-xs ">
                        <div className='relative max-w-xs'>
                            <Image
                                aria-hidden
                                src={image.desktop}
                                alt={title}
                                width={320}
                                height={320}
                                className={isItemInCart(id) ? 'border-2 border-red  ' : ''}
                            />
                            <Button id={id} name={title} price={price} image={image.thumbnail} />
                        </div>

                        <div className="mt-7 p-4">
                            <h6>{category}</h6>
                            <h3 className="font-bold">{title}</h3>
                            <p className="font-bold text-red">${price.toFixed(2)} </p>
                        </div>
                    </div>

                );
            })}
        </div>
    )
}