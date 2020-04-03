import styled from "styled-components";

export const RightContainer = styled.div`
  width: 190px;
  min-height: 100px;
  position: absolute;
  top: 83px;
  right: 170px;
  background-color: #fff;
`;

export const RecommendContainer = styled.div`
  width: 100%;
  min-height: 300px;
  .header {
    text-align: center;
    width: 100%;
    height: 32px;
    margin: 5px 0 0 0;
  }
  .item {
    width: 80px;
    height: 32px;
    border-radius: 16px;
    float: left;
    text-align: center;
    line-height: 32px;
    margin: 5px 5px;
    font-size: 14px;
    color:#fff;
  }
  .bj {
    background-color: #e4393c;
  }
`;

export const RightMain = styled.div`
  width: 100%;
  min-height: 400px;
`;

export const RightFooter = styled.div`
  width: 100%;
  min-height: 100px;
`;
