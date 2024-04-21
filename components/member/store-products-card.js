import React from 'react'
import Card from 'react-bootstrap/Card'

export default function StoreProductsCard({ storeId, product }) {
  return (
    <Card
      style={{
        width: '210px',
        height: '275px',
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
        style={{ height: '63%' }}
      />
      <Card.Body
        style={{
          padding: '6px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Card.Text
          style={{
            marginBottom: '2px',
            fontSize: '14px',
            height: '65px',
            overflow: 'hidden',
          }}
        >
          {product.product_name}
        </Card.Text>
        <Card.Text
          style={{
            fontSize: '16px',
            display: 'flex',
            justifyContent: 'space-between',
            height: '20px',
          }}
        >
          <span>{product.product_price}</span>
          <span
            style={{ color: product.product_status == '1' ? 'red' : 'lime' }}
          >
            {product.product_status == '1' ? '二手' : '全新'}
          </span>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
