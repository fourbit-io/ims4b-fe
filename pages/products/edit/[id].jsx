
import EditProduct from '@/components/pages/product/Edit'
import withStorekeeper from '@/lib/hoc/withStoreKeeper'

const EditPage = () => {
  return (
      <EditProduct />
  )
}

export default withStorekeeper(EditPage)