import styled from "styled-components";
import logo from "./../../static/logoko.png";

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 68px;
  position: relative;
  background-color: #fff;
  box-shadow: 0 1px 0 0 #eee;
`;
export const HeaderIcon = styled.div`
  width: 60px;
  height: 54px;
  position: absolute;
  top: 10px;
  left: 75px;
  background-image: url(${logo});
  background-size: 100% 100%;
`;

export const HeaderTab = styled.div`
  width: 480px;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-70%, -50%);
`;
export const TabItem = styled.div`
  width: 100%;
  height: 100%;
  line-height: 68px;
  float: left;
  text-align: center;
  color: rgba(0, 0, 0, 0.5);
  font-weight: bold;
`;
export const HeaderSearchContainer = styled.div`
  width: 200px;
  height: 32px;
  position: absolute;
  right: 300px;
  top: 50%;
  transform: translate(0, -50%);
`;
export const HeaderSearch = styled.input.attrs({
  placeholder: "搜索"
})`
  width: 100%;
  height: 100%;
  position: absolute;
  background: #f0f0f0;
  border: 1px solid transparent;
  border-radius: 4px;
  &:focus {
    border: 1px solid #00adb5;
    outline: 1px solid transparent;
  }
`;
export const SearchIcon = styled.i`
  position: absolute;
  top: 0;
  right: 5px;
  line-height: 32px;
`;
export const HeaderEdit = styled.div`
  width: 80px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  position: absolute;
  right: 200px;
  top: 50%;
  transform: translate(0, -50%);
  color: #00adb5;
  text-decoration: none;
`;
export const HeaderUser = styled.div`
  width: 160px;
  height: 40px;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translate(0, -50%);
`;
export const UserLogin = styled.div`
  width: 80px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  float: left;
`;
export const UserRegister = styled.div`
  width: 80px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  float: left;
`;
