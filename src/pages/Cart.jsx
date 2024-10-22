import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../store/cartSlice';
import { RxCrossCircled } from 'react-icons/rx';

const Cart = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.cart);

    const handleRemove = (productId) => {
        console.log('Removing product with id:', productId);  // Debugging
        dispatch(remove(productId));
    };
    

    return (
        <div className="container mx-auto mt-5  md:mt-8 p-4 md:w-4/6 ">
            <h3 className="text-3xl font-bold mb-8 text-center">Shopping Cart</h3>
            <div className="md:grid md:grid-cols-3 gap-5 py-10">
                
                {products.map((product) => (
                    
                    <div 
                        key={product._id} 
                        className="   bg-gray-50 border-2 mb-5 md:mb-0 border-gray-200 drop-shadow-lg rounded-sm  transition hover:shadow-lg" >
                    
                        {/* Remove Button */}
                        <div className='flex justify-end items-center'>
                        <button
                                className="absolute -top-2 -right-2 text-red-600 text-2xl bg-red-600 rounded-full hover:text-red-700 transition"
                                onClick={() => handleRemove(product._id)} >
                            
                            <RxCrossCircled  className='text-3xl text-white'/>
                        </button>
                        </div>
                        
                        <img    
                            src={product.image} 
                            alt={product.title} 
                            className="md:w-1/2 h-[200px] md:h-0 object-cover mx-auto rounde-full"
                        />
                        
                        {/* Product Details */}
                        <div className=" flex-1 text-center pb-3">
                            <h5 className="text-xl font-semibold">{product.title}</h5>
                            {/* <p className="text-gray-500 text-sm mb-2"><span className='font-semibold'>Brand Name: </span>{ product.brand}</p> */}

                            <h5 className="text-gray-700 mt-1 "><span className='font-semibold'>Price : </span>${product.price}</h5>
                        </div>

                       
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cart;
