import React from 'react'
import Card from 'react-bootstrap/Card'

export default function StoreProductsCard({ storeId, product }) {
  return (
    <Card
      style={{
        width: '210px',
        height: '300px',
        margin: '0px auto',
      }}
    >
      <Card.Img
        variant="top"
        src={
          product.product_photos.includes(',')
            ? `/${product.product_photos.split(',')[0]}`
            : `/${product.product_photos}`
        }
        style={{ height: '65%' }}
      />
      <Card.Body
        style={{
          padding: '8px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Card.Text style={{ marginBottom: '2px', fontSize: '14px' }}>
          {product.product_name}
        </Card.Text>
        <Card.Text
          style={{
            fontSize: '16px',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <span>{product.product_price}</span>
          <span style={{ color: 'red' }}>
            {product.product_status == '1' ? '二手' : '全新'}
          </span>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
