import React, { Component } from "react";
import { LeftContainer, LeftHeader, LeftNull } from "./style";
// import PropTypes from "prop-types";

class LeftAside extends Component {
  constructor(props) {
    super(props);
    this.state = {
      historyList: [
        { title: "我是谁" },
        { title: "我在哪儿" },
        { title: "这是在干什么" },
        { title: "从哪儿来" },
        { title: "到哪儿去" },
        { title: "吃什么" }
      ],
      collection: [
        { title: "这是狗" },
        { title: "这是猫" },
        { title: "这是驴" },
        { title: "这是马" },
        { title: "这是鸡" },
        { title: "这是鸭" },
      ]
    };
  }
  render() {
    const historyList = this.state.historyList,
      collection = this.state.collection;
    return (
      <div>
        <LeftContainer>
          <LeftHeader>我的收藏</LeftHeader>
          {collection.length === 0 ? (
            <LeftNull>快去浏览吧</LeftNull>
          ) : (
            collection.map((item, index) => {
              return (
                <div key={item.title} className="historyItem">
                  {index + 1}.{item.title}
                </div>
              );
            })
          )}
          <LeftHeader>历史足迹</LeftHeader>
          {historyList.length === 0 ? (
            <LeftNull>快去浏览吧</LeftNull>
          ) : (
            historyList.map((item, index) => {
              return (
                <div key={index} className="historyItem">
                  {index + 1}.{item.title}
                </div>
              );
            })
          )}
        </LeftContainer>
      </div>
    );
  }
}

// LeftAside.propTypes = {};

export default LeftAside;
