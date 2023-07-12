import StockShow from '@/components/pages/stock/Show'
import withStorekeeper from '@/lib/hoc/withStoreKeeper'

const StocktShowPage = () => {
  return (
    <StockShow/>
  )
}

export default withStorekeeper(StocktShowPage)