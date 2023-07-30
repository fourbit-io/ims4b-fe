import Dashboard from "../components/pages/dashboard";

export default function Home() {

  const stats = [
    {
      data: "35K",
      title: "Customers",
    },
    {
      data: "40+",
      title: "Countries",
    },
    {
      data: "30M+",
      title: "Total revenue",
    },
    {
      data: "30M+",
      title: "Total revenue",
    },
  ];

  return (
    <>
      <Dashboard/>
    </>
  );
}
