import NewRequisition from "@/components/pages/requisition/New";
import withUser from "@/lib/hoc/withUser";

const New = () => {
  return <NewRequisition />;
};

export default withUser(New);
