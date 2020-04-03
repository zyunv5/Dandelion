import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 660px;
  min-height: 1000px;
  margin: 15px 0 0 185px;
  box-shadow: 1px 1px 1px 1px #eee;
  background-color: #fff;
`;
export const HomeItem = styled.div`
  width: 100%;
  height: 100px;
  border-bottom: 1px solid red;
  .item_text {
    width: 70%;
    height: 100%;
    float:left;
    .item_text-title {
      width: 100%;
      height: 60px;
      line-height: 60px;
      text-align:left;
      font-size:20px;
      padding-left:20px;
    }
    .item_text-author{
      width:100px;
      float:left;
      text-align:center;
    }
    .item_text-collection{
      width:200px;
      float:left;
      text-align:center;
    }
  }
  .item_img {
    float:right;
    background-color:red;
    width:29%;
    height:100%;
  }
`;
