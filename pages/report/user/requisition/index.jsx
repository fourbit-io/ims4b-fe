import withUser from "@/lib/hoc/withUser";
import UserRequisitionReport from "@/components/pages/report/user/requisition";

const RequisitionReportPage = () => {
  return <UserRequisitionReport />;
};

export default withUser(RequisitionReportPage);
