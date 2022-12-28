import { InferGetServerSidePropsType, GetServerSideProps, GetServerSidePropsContext } from "next";
import axios from "axios";

export default function profilePage(props: GetServerSideProps) {
  console.log("props: ", props);
  return <>profile</>;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const dev = process.env.NODE_ENV === "development";

  if (dev) {
    const res = await axios.get("http://localhost:3000/api/hello");
    console.log("res: ", res);
    return {
      props: { data: res.data }, // will be passed to the page component as props
    };
  }

  if (!dev) {
    const res = await axios.get("http://52.79.36.122:3000/api/hello");
    return {
      props: { data: res.data }, // will be passed to the page component as props
    };
  }
}
