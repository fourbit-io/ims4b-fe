
import EditProduct from '@/components/pages/product/Edit'
import withManager from '@/lib/hoc/withManager'

const EditPage = () => {
  return (
      <EditProduct />
  )
}

export default withManager(EditPage)