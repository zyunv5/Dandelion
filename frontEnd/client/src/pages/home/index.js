import React, { Component } from "react";
import { HomeContainer, HomeItem } from "./style";
import LeftAside from "./leftAside";
import RightAside from "./rightAside";

class Home extends Component {
  render() {
    return (
      <div style={{ width: "1040px", margin: "0 auto" }}>
        <LeftAside />
        <HomeContainer>
          <HomeItem>
            <div className="item_text">
              <div className="item_text-title">你20岁了，要明白这十件事</div>
              <div className="item_text-author">wenfu赵</div>
              <div className="item_text-collection">100</div>
            </div>
            <div className="item_img"></div>
          </HomeItem>
        </HomeContainer>
        <RightAside />
      </div>
    );
  }
}

export default Home;
