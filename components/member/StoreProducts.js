import React from 'react'
import StoreProductsCard from './store-products-card'
import { GET_STORE_PRODUCTS } from '../config'
import { useState, useEffect } from 'react'
import style from '@/styles/lee-form.module.scss'

export default function StoreProducts({ storeId }) {
  console.log(storeId)
  const [products, setProducts] = useState([])
  const getStoreProducts = async () => {
    const response = await fetch(`${GET_STORE_PRODUCTS}/${storeId}`, {
      method: 'GET',
      credentials: 'include',
    })
    const result = await response.json()
    console.log(result)
    setProducts(result)
  }

  useEffect(() => {
    getStoreProducts()
  }, [])

  return (
    <div className={`${style.storeProducts} container`}>
      <div className="row gy-3 mx-auto">
        {products.map((product) => (
          <div className="col-12 col-sm-6 col-md-4 mx-auto" key={product.id}>
            <StoreProductsCard storeId={storeId} product={product} />
          </div>
        ))}
      </div>
    </div>
  )
}
