import React, { useState } from 'react';
import Products from '../components/Products';

const Home = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div className='bg-gray-100 min-h-screen pt-20'>
            <section className="py-8">
                
                <div className=" w-full px-4 mb-8 flex items-center justify-between">
                <h3 className="text-2xl  font-bold text-gray-700 mb-6 text-center">Products</h3>

                    <div className=''>
                    <div className="flex justify-center  items-center gap-1">
                        <input 
                            type="text"
                            value={searchTerm}
                            onChange={handleSearch}
                            placeholder="Search for products..."
                            className="  p-2 border-2 border-gray-300 w-96  rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
                        />
                        <button className='bg-black p-2 px-5 rounded-sm text-white font-semibold'>Search</button>
                    </div>
                    </div>
                </div>

                
                <div className="container mx-auto px-4">
                    <Products searchTerm={searchTerm} />
                </div>
            </section>
        </div>
    );
};

export default Home;
