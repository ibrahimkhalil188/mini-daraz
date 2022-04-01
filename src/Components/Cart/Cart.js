import React from 'react';

const Cart = ({ carts }) => {
    console.log(carts)

    for (const cart of carts) {
        <p>{cart.name}</p>
    }

    return (
        <div className='ml-8 sticky top-10'>
            <h1 className='text-3xl text-center '> Order summary</h1>
            <h1 className='text-xl pt-12 pb-4'>Your selected item: {carts.length}</h1>
            {
                carts.map(cart => <div key={cart.id}> <p title={cart.name}>{cart.name.length > 20 ? cart.name.slice(0, 20) + "..." : cart.name}</p></div>)
            }

        </div>
    );
};

export default Cart;