import React from 'react'
import ProductList from './ProductList'
import SelectedProduct from './SelectedProduct'


const CreateWithProduct = ({incQty, mutate, isLoading, remark}) => {
  return (
    <div className="mt-5 px-4 py-2 grid grid-cols-1 md:grid-cols-2 gap-2">
        <ProductList incQty={incQty} />
        <SelectedProduct mutate={mutate} isLoading={isLoading} remarkValue={remark} />
      </div>
  )
}

export default CreateWithProduct