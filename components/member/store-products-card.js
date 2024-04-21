import React from 'react'
import Card from 'react-bootstrap/Card'

export default function StoreProductsCard({ storeId, product }) {
  return (
    <Card style={{ width: '210px', height: '290px' }}>
      <Card.Img
        variant="top"
        src={
          product.product_photos.includes(',')
            ? `/${product.product_photos.split(',')[0]}`
            : `/${product.product_photos}`
        }
        style={{ height: '65%' }}
      />
      <Card.Body style={{ padding: '8px' }}>
        <Card.Text style={{ marginBottom: '2px', fontSize: '14px' }}>
          {product.product_name}
        </Card.Text>
        <Card.Text style={{ fontSize: '16px' }}>
          {product.product_price}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
