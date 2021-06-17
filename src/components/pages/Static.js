import React from 'react';
import Carousel from '../layout/Carousel';
import About from '../layout/About';
import Counter from '../layout/Counter';
import Services from '../layout/Services';
import ProductList from '../product/ProductList';
import Team from '../layout/Team';
import Contact from '../layout/Contact';

const Static = () => {
    return(
        <>
        <Carousel />
        <About />
        <Counter />
        <Services />
        <ProductList />
        <Team />
        <Contact />
        </>
    )
}

export default Static;