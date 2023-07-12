import Head from "next/head";

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
    <Head>
      <title>ড্যাসবোর্ড</title>
    </Head>
      <h1 className="text-4xl font-bold text-center my-12">ড্যাসবোর্ড</h1>
      <div className="mt-12 mx-32">
        <ul className="flex justify-between px-8">
          {stats.map((item, idx) => (
            <li
              key={idx}
              className="w-full text-center bg-primary-500 px-12 py-4 rounded-lg sm:w-auto">
              <h4 className="text-4xl text-white font-semibold">{item.data}</h4>
              <p className="mt-3 text-gray-100 font-medium">{item.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
