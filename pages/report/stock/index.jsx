import withManager from "@/lib/hoc/withManager";
import StockReport from "@/components/pages/report/stock";

const StockReportPage = () => {
  return <StockReport />;
};

export default withManager(StockReportPage);
