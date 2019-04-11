import React, { Component } from 'react'
import '../App.css';

export class PageSideBar extends Component {
  render() {
    return (
      <div className="sideBars">
        <div className = "bar1"></div>
        <div className = "bar2"></div>
        <div className = "bar3"></div>
        <br style={{clear: 'left'}} />
      </div>
    )
  }
}
