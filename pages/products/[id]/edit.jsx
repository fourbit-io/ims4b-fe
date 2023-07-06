
import EditProduct from '@/components/pages/product/Edit'
import { useRouter } from 'next/router'

const EditPage = () => {
    const router = useRouter();
    const id = router?.query?.id;
  return (
      <EditProduct id={id} />
  )
}

export default EditPage