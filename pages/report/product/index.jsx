import { CSVLink } from "react-csv";

import withManager from "@/lib/hoc/withManager";

const ProductReport = () => {
  const headers = [
    { label: "First Name", key: "firstname" },
    { label: "Last Name", key: "lastname" },
    { label: "Email", key: "email" },
  ];

  const data = [
    { firstname: "Ahmed", lastname: "Tomi", email: "ah@smthing.co.com" },
    { firstname: "Raed", lastname: "Labes", email: "rl@smthing.co.com" },
    { firstname: "Yezzi", lastname: "Min l3b", email: "ymin@cocococo.com" },
  ];
  return (
    <div className="mt-10">
      <CSVLink
        data={data}
        headers={headers}
        filename={"my-file.csv"}
        style={{
          backgroundColor: "green",
          color: "white",
          padding: 5,
          borderRadius: 5,
          cursor: "pointer",
        }}>
        Download me
      </CSVLink>
    </div>
  );
};

export default withManager(ProductReport);
