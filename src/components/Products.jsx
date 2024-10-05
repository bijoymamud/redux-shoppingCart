'use client'

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add } from '../store/cartSlice'
import { fetchProducts } from '../store/productSlice'
import { STATUSES } from '../store/productSlice'
import { Toaster, toast } from 'sonner'

export default function Products() {
  const dispatch = useDispatch()
  const { data: products, status } = useSelector((state) => state.product)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  const handleAdd = (product) => {
    dispatch(add(product))
    toast.success("Added into Cart", 100)
  }

  if (status === STATUSES.LOADING) {
    return <h2>Loading....</h2>
  }

  if (status === STATUSES.ERROR) {
    return <h2>Something went wrong!</h2>
  }

  return (
    <div className="relative ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 ">
        {products.map((product) => (
          <div 
            key={product._id} 
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
              className="w-1/2 mx-auto object-cover mt-8"
            />
            <div className="flex-grow p-4 flex flex-col justify-between">
              <div>
                <h4 className="font-semibold text-lg text-gray-800">{product.title}</h4>
                        <p className="text-gray-500 text-sm mb-2"><span className='font-semibold'>Brand Name: </span>{ product.brand}</p>
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