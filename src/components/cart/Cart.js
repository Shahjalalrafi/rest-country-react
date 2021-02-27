// import React from 'react';

// const Cart = (props) => {
//     const cart = props.carts
//     console.log(props)

//     let totalPopulation = 0
//     for(let i= 0; i < cart.length; i++) {
//         totalPopulation = totalPopulation + cart.population
//     }

//     return (
//         <div>
//             <h1>Cart added: {cart.length}</h1>
//             <p>population: {totalPopulation}</p>
//         </div>
//     );
// };

// export default Cart;

import React from 'react';

const Cart = (props) => {
    const cart = props.cartDetails

    let total = 0
    for(let i = 0; i< cart.length; i++) {
        total += cart.pupulation
    }

    return (
        <div>
            <h3>add country: {cart.length}</h3>
            <h1>total population: {total}</h1>
        </div>
    );
};

export default Cart;