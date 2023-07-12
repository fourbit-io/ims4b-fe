import React from 'react'
import ProductShow from '@/components/pages/product/Show'
import withStorekeeper from '@/lib/hoc/withStoreKeeper'

const ProductShowPage = () => {
  return (
    <ProductShow/>
  )
}

export default withStorekeeper(ProductShowPage)