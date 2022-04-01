import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import useProduct from '../CustomHook/FetchHook';
import Products from '../Products/Products';
import "./Home.css"


const Home = () => {
    const [products] = useProduct()
    const [carts, setCarts] = useState([])

    const addToCart = (product) => {
        let newCart = []
        newCart = [...carts, product]
        setCarts(newCart)


    }

    return (
        <div className='home ml-8 mt-12'>
            <div className='grid grid-cols-3 gap-4'>
                {
                    products.map(product => <Products
                        key={product.id}
                        product={product}
                        addToCart={addToCart}
                    ></Products>)
                }
            </div>
            <div>
                <Cart carts={carts}></Cart>
            </div>

        </div>
    );
};

export default Home;