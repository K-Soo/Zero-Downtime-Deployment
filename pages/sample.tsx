import styled from "styled-components";
import axios from "axios";
interface ISample {}

export default function Sample() {
  const fetchProductList = async () => {
    try {
      const response = ".....";
      console.info("상품목록 API : ", response);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        // 예외 처리
      }
      return;
    } finally {
      console.log("finally");
    }
  };

  return (
    <S.Sample>
      <S.Text>안녕</S.Text>
      <S.Button>확인</S.Button>
    </S.Sample>
  );
}

const StyledBackground = styled.div`
  background-color: red;
`;

const S = {
  Sample: styled.div`
    border: 1px solid red;
  `,
  Text: styled.p`
    font-size: 14px;
  `,
  Button: styled.button`
    border: 1px solid #000;
  `,
};
