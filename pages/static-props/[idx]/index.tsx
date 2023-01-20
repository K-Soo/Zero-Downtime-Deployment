import { GetStaticProps, GetStaticPropsContext, InferGetStaticPropsType } from "next";
import fs from "fs/promises";
import path from "path";

interface Props {
  products: { title: string; desc: string; id: string };
}

export default function staticPropsDetail(props: InferGetStaticPropsType<typeof getStaticProps>) {
  const { products } = props;

  return (
    <>
      <h1>{products.title}</h1>
      <p>{products.desc}</p>
    </>
  );
}

export const getStaticPaths = async (test: any) => {
  return {
    paths: [{ params: { idx: "1" } }, { params: { idx: "2" } }, { params: { idx: "3" } }],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async (context: GetStaticPropsContext) => {
  const { params } = context;
  console.log("params: ", params);
  if (!params) {
    return {
      notFound: true,
    };
  }

  const filePath = path.join(process.cwd(), "data", "dummy.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData.toString());

  const result = data.products.find((product: any) => product.id === params.idx);
  console.log("result: ", result);

  return {
    props: {
      products: result,
    },
    revalidate: 10, // 증분생성
  };
};
