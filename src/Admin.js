import React, { Component } from "react";
import Orders from "./components/Orders";

export default class Admin extends Component {
  render() {
    return (
      <div className="content">
        <Orders></Orders>
      </div>
    );
  }
}
