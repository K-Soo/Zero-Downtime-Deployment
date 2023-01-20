import { InferGetServerSidePropsType, GetServerSideProps, GetServerSidePropsContext } from "next";
import axios from "axios";
import Error from "../pages/_error";
interface Props {
  data?: string | null;
  errorCode?: number;
}

export const getServerSideProps: GetServerSideProps<Props> = async (context: GetServerSidePropsContext) => {
  // const dev = process.env.NODE_ENV === "development";

  try {
    const res = await axios.get("http://localhost:3000/api/hello");
    return {
      props: {
        data: "asdasd",
      },
    };
  } catch (error) {
    return {
      // notFound: true,
      props: {
        errorCode: 500,
      },
    };
  }
};

export default function profilePage(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  if (props.errorCode) {
    return <Error statusCode={405} />;
  }

  return <>profile</>;
}
