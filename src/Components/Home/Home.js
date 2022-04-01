import React from 'react';
import useProduct from '../CustomHook/FetchHook';
import Products from '../Products/Products';
import "./Home.css"


const Home = () => {
    const [products] = useProduct()
    return (
        <div className='home ml-8 mt-12'>
            <div className='grid grid-cols-3 gap-4'>
                {
                    products.map(product => <Products key={product.id} product={product} ></Products>)
                }
            </div>
            <div>
                <h1>This is Cart</h1>
            </div>

        </div>
    );
};

export default Home;