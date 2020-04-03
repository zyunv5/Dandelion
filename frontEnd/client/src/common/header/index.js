import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  HeaderWrapper,
  HeaderIcon,
  HeaderTab,
  TabItem,
  HeaderSearchContainer,
  HeaderSearch,
  SearchIcon,
  HeaderEdit,
  HeaderUser,
  UserLogin,
  UserRegister
} from "./style";
import { IconfontStyle } from "../../static/fontIcon/iconfont";

class Header extends Component {
  componentDidMount() {
    // console.log(111);
  }
  render() {
    return (
      <div>
        <IconfontStyle />
        <HeaderWrapper>
          <HeaderIcon />
          <HeaderTab>
            <TabItem>You see see, One day day</TabItem>
          </HeaderTab>
          <HeaderSearchContainer>
            <HeaderSearch />
            <SearchIcon className="iconfont">&#xe62f;</SearchIcon>
          </HeaderSearchContainer>
          <HeaderEdit>
            <Link to="/edit">记录</Link>
            <i className="iconfont">&#xe601;</i>
          </HeaderEdit>
          <HeaderUser>
            <UserLogin>登录<i className="iconfont">&#xe612;</i></UserLogin>
            <UserRegister>注册<i className="iconfont">&#xe683;</i></UserRegister>
          </HeaderUser>
        </HeaderWrapper>
      </div>
    );
  }
}

export default Header;
