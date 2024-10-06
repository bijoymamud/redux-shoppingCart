import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TbShoppingBagPlus } from 'react-icons/tb';

const Navbar = () => {
    const items = useSelector((state) => state.cart);

    return (
        <nav className="bg-white shadow-lg sticky top-0 z-50">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                {/* Logo Section */}
                <Link to="/" className="text-2xl font-bold text-blue-600">
                    <span className="logo">Dev-Store</span>
                </Link>

                {/* Links Section */}
                <div className="flex items-center space-x-6">
                    <div className='flex items-center gap-5'>
                    <Link className="text-black hover:text-blue-600  font-semibold text-lg transition duration-300" to="/">
                        Home
                        </Link>
                        
                    <Link className="text-black hover:text-blue-600  font-semibold text-lg transition duration-300" to="/clothings">
                        Cloathings
                        </Link>
                        
                    <Link className="text-black font-semibold hover:text-blue-600 text-lg transition duration-300" to="/cart">
                        Cart
                    </Link>
                    </div>
                    
                    <div className="relative">
                        <Link to="/cart" className="flex items-center ">
                            {/* Cart Icon */}
                            <TbShoppingBagPlus className="w-8 h-8  text-black hover:text-blue-600 text-lg transition duration-300" />
                        </Link>
                        {/* Cart Badge */}
                        <span className="absolute top-0  inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full -right-3">
                            {items.length}
                        </span>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
