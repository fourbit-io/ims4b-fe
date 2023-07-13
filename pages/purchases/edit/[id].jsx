
import withManager from '@/lib/hoc/withManager'
import EditPurchase from '@/components/pages/purchase/Edit'

const EditPage = () => {
  return (
     <EditPurchase/>
  )
}

export default withManager(EditPage)