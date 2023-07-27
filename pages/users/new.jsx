import withAdmin from "@/lib/hoc/withAdmin";
import NewUser from "@/components/pages/user/New";

const New = () => {
  return <NewUser />;
};

export default withAdmin(New);
