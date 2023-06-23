import Login from "@/components/pages/auth/Login";
import { login as benLogin } from "@/contents/bengali";
import Head from "next/head";

const LoginPage = () => {
  const { header } = benLogin;
  return (
    <div>
      <Head>
        <title>{header}</title>
      </Head>
      <Login />
    </div>
  );
};

export default LoginPage;
