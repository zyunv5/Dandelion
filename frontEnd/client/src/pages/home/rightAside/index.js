import React, { Component } from "react";
import {
  RightContainer,
  RecommendContainer,
  RightMain,
  RightFooter
} from "./style";

class RightAside extends Component {
  constructor() {
    super();
    this.state = {
      itemList: [
        { place: "北京",class:'bj', },
        { place: "上海",class:'sh', },
        { place: "广州",class:'gz', },
        { place: "深圳",class:'sz', },
        { place: "成都",class:'cd', },
        { place: "重庆",class:'cq', },
        { place: "哈尔滨",class:'heb', },
        { place: "天津",class:'tj', },
        { place: "长沙",class:'cs', },
        { place: "武汉",class:'wh', },
        { place: "苏州",class:'sz', },
        { place: "南京",class:'nj', }
      ]
    };
  }
  render() {
    const itemList = this.state.itemList;
    return (
      <RightContainer>
        <RecommendContainer>
          <div className="header">推荐</div>
          {itemList.map((item, index) => {
            return (
              <div className={`item ${item.class}`} key={item.place}>
                # {item.place}
              </div>
            );
          })}
        </RecommendContainer>
        <RightMain />
        <RightFooter>10086</RightFooter>
      </RightContainer>
    );
  }
}

export default RightAside;
