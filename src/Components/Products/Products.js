import React from 'react';

const Products = ({ product, addToCart }) => {
    const { name, img, price, seller } = product
    return (
        <div className=' border-2 shadow-xl p-3 rounded'>
            <img className='rounded' src={img} alt="" />
            <div className='mt-4 relative h-[200px]'>
                <h1 className='text-2xl font-bold' title={name}>{name.length > 20 ? name.slice(0, 20) + "..." : name}</h1>
                <p className='text-2xl font-bold font-mono'>Price: ${price}</p>
                <p className='text-2xl'>Brand: {seller}</p>
                <button onClick={() => addToCart(product)} className='py-3 px-3 text-white rounded-xl w-full absolute bottom-0 text-bold text-2xl bg-cyan-400 hover:text-orange-500'>Add to Cart</button>
            </div>

        </div>
    );
};

export default Products;