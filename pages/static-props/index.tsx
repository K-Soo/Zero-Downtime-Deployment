import { GetStaticProps, GetStaticPropsContext, InferGetStaticPropsType } from "next";
import fs from "fs/promises";
import path from "path";
import Link from "next/link";
//현재 작업 디렉토리가 pages 폴더가 아니다. 이 파일이 실행될 때 Next.js가 이를 실행하고 모든 파일이 루트 프로젝트 폴더에 있는 것처럼 취급합니다
//현재 작업 디렉토리는 pages 폴더가 아닌 전체 프로젝트 폴더가 됩니다(중요)
//process.cwd() 는 Nodejs 프로세스가 돌아가고 있는 Working directory를 출력하는 반면, __dirname은 해당 모듈의 경로를 출력한다.
import os from "os";
//Next.js는 매우 똑똑해서 getStaticProps나 나중에 배우는 함수에서만 쓰이는 임포트를 확인하고 클라이언트 사이드 코드 번들에서는 이 임포트를 제거합니다
//따라서 클라이언트 사이드 코드 브라우저 측 React 앱 코드가 준비될 때 그 임포트는 사라집니다 Next.js가 클라이언트 사이드에서 사용하지 않음을 알고 코드를 나누는 거죠

//MAC + LINUX = POSIX

// const dirname = __dirname;
// const filename = __filename;

interface Props {
  products: { id: string; title: string }[];
}

export default function staticPropsPage({ products }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      {products.map((el) => (
        <li key={el.id}>
          <Link href={`/static-props/${el.id}`}>{el.title}</Link>
        </li>
      ))}
    </>
  );
}

export const getStaticProps: GetStaticProps<Props> = async (context: GetStaticPropsContext) => {
  console.log("context: ", context);
  // const joinPath = path.join(__dirname, "/static-props"); // / <- 절대경로 무시하고 static-props됨
  const filePath = path.join(process.cwd(), "data", "dummy.json");
  // readFile을 사용하려면 콜백해야함.(비동기)
  // readFileSync(동기식) 콜백X
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData.toString());
  console.log("re-render...");
  return {
    props: {
      products: data.products,
    },
    revalidate: 10, // 증분생성
    // 404 error render * 데이터페칭실패시 사용
    // notFound: true,
    //데이터패칭 실패하거나 데이터자체가 없을경우 설정
    // redirect: {
    //   destination: "/",
    // },
  };
};

/**
매개변수를 추출할 때 차이점이 있습니다

1 . 컴포넌트 함수에서 매개변수를 추출
브라우저에서만 이루어징
컴포넌트 내부에서 사용 가능해요 추출된 ID를 사용하거나
일부 백엔드 서버에 요청을 보내 거기에서 페칭하기 위해서입니다

2. getStaticProps()
  getStaticProps 로 데이터를 준비하여 페이지를 사전 렌더링하게 되면 이 경우는 서버에서 이루어짐.

  getStaticProps는 컴포넌트 함수보다 먼저 실행(컴포넌트 함수가 페이지를 사전 렌더링하기 위해 실행되는 함수)
  
  그러므로 서버상에서 혹은 getStaticProps로 구축 과정 중에 페이지를 미리 준비하려면 매개변수로의 액세스가 필요

  즉 getStaticProps 내부의 동적 경로 세그먼트에 액세스해서 매개변수 데이터를 통해 컴포넌트에 대한 데이터를 준비
  그러면 컴포넌트 함수 안에도 동적 세그먼트가 필요한 게 아니면 추출할 필요가 없기 때문입니다
 */
