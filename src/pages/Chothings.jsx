import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchClothingData } from '../store/chothingSlice'
import { toast, Toaster } from 'sonner'
import { add } from '../store/cartSlice'

function Chothings() {

    const dispatch = useDispatch()

    const { loading, productInfo, error } = useSelector((state) => state.clothing);

    const handleAdd = (product) => {
        dispatch(add(product));
        toast.success("Added into Cart", 100)

    }
    
    useEffect(()=>{
        dispatch(fetchClothingData())
    }, [dispatch])
    
    if (loading) {
        return <p>Loading......</p>
    }

    if (error) {
        return <p>{error}</p>
    }
    return (
        
        <div className="relative py-20 px-4">
            <h2 className='pt-10 text-2xl  font-bold text-gray-700 mb-5 '>Cloathings : </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 ">
        {productInfo.map((product) => (
          <div 
            key={product.id} 
            className="relative bg-white shadow-lg rounded-sm border-amber-200 flex flex-col border-2"
          >
            <div className="absolute top-2 -left-1 bg-black text-white text-xs px-2 py-1 rounded-sm z-10">
              25% OFF
            </div>
            <div className="absolute top-2 right-2">
              <button className="text-gray-500 hover:text-red-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.84 4.61c-1.68-1.68-4.41-1.68-6.09 0l-.75.75-.75-.75c-1.68-1.68-4.41-1.68-6.09 0-1.68 1.68-1.68 4.41 0 6.09l6.84 6.84 6.84-6.84c1.68-1.68 1.68-4.41 0-6.09z" />
                </svg>
              </button>
            </div>
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-[200px] mx-auto object-cover "
            />
            <div className="flex-grow p-4 flex flex-col justify-between">
              <div>
                <h4 className="font-semibold text-lg text-gray-800">{product.title}</h4>
                       
                <div className="flex items-center space-x-4">
                  <span className="text-lg font-bold text-gray-900">${product.price}</span>
                  <span className="text-sm line-through text-gray-500">$120.00</span>
                </div>
              </div>
              <button
                onClick={() => handleAdd(product)}
                className="mt-4 w-full bg-yellow-400 font-semibold hover:bg-yellow-500 text-black py-2 px-4 rounded-none transition-colors duration-300"
              >
                + Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="fixed bottom-0 right-0 p-4 z-50 ">
        <Toaster  position="bottom-right" />
      </div>
    </div>
    )
}

export default Chothings
