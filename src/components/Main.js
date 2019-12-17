import React from "react";
import { Quotes } from "./Quotes";

export class Main extends React.Component {
  render() {
    return (
      <div className="main">
        <h2>Quotes Farm</h2>
        <Quotes />
      </div>
    );
  }
}
