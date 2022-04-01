import React from 'react';
import useProduct from '../CustomHook/FetchHook';


const Home = () => {
    const [products] = useProduct()
    return (
        <div>
            <h1>This is home page {products.length}</h1>
        </div>
    );
};

export default Home;