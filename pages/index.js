import { useEffect, useState } from "react";
import Layout from "../layout";
import LoginPage from "./login";

export default function Home() {
  const [accessToken, setAccessToken] = useState(null);
  useEffect(() => {
    setAccessToken(localStorage.getItem("access-token"));
  }, []);

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
      {accessToken !== null ? (
        <Layout>
          <h1 className="text-4xl font-bold text-center my-12">ড্যাসবোর্ড</h1>
          <div className="mt-12 mx-32">
            <ul className="flex justify-between px-8">
              {stats.map((item, idx) => (
                <li
                  key={idx}
                  className="w-full text-center bg-primary-500 px-12 py-4 rounded-lg sm:w-auto">
                  <h4 className="text-4xl text-white font-semibold">
                    {item.data}
                  </h4>
                  <p className="mt-3 text-gray-100 font-medium">{item.title}</p>
                </li>
              ))}
            </ul>
          </div>
        </Layout>
      ) : (
        <LoginPage />
      )}
    </>
  );
}
