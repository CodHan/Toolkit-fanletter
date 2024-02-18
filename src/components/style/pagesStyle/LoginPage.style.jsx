import styled from 'styled-components';

export const MainStyle = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
  @media screen and (max-width: 768px) {
    padding-left: 0px;
    justify-content: center;
    height: 60vh;
  }
`;
export const Section = styled.section`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  text-align: center;
`;
export const H2 = styled.h2`
  font-size: 28px;
  font-weight: 700;
  line-height: 54px;
  padding-bottom: 30px;
`;
export const Wrapper = styled.div`
  width: 500px;
  font-size: 16px;
`;
export const InputWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const InputStyle = styled.input`
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  height: 100%;
  padding: 15px;
  box-sizing: border-box;
  margin-top: 10px;
`;
export const ButtonStyle = styled.button`
  color: #fff;
  cursor: pointer;
  width: 100%;
  padding: 15px 0;
  background: #0096d6;
  border-radius: 5px;
  font-size: 18px;
  border-color: transparent;
  margin-top: 20px;
  &:disabled {
    cursor: default;
    background: #dadada;
    color: white;
  }
`;
export const Validation = styled.div`
  color: #ff0000;
  display: flex;
  text-indent: 15px;
  font-size: 10px;
  margin-top: 5px;
`;

export const JoinWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  @media (max-width: 768px) {
    display: flex;
    width: 350px;
    flex-wrap: wrap;
    flex-direction: column;
    margin-left: 75px;
    & > ul > li {
      border: 1px solid #ccc;

      border-radius: 3px;
    }
    & > ul > li > a {
      display: block;
      padding: 20px 0px;
      width: 100%;
      heigth: 100%;
    }
  }
`;
export const EtcLoginWrap = styled.div`
  padding-top: 20px;
`;

export const EtcLoginUl = styled.ul`
  padding-top: 27px;
  height: 40px;
`;
export const FormStyle = styled.form`
  @media (max-width: 768px) {
    display: flex;
    width: 350px;
    flex-wrap: wrap;
    flex-direction: column;
    margin-left: 75px;
  }
`;
