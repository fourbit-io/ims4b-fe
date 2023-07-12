import RequisitionShow from "@/components/pages/requisition/Show";
import withUser from "@/lib/hoc/withUser";

const RequisitionShowPage = () => {
  return <RequisitionShow />;
};

export default withUser(RequisitionShowPage);
