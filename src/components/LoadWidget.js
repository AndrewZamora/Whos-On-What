import React, { Component } from "react";
import "./LoadWidget.css";

const spanStyle = {
    height: "1em",
    width: "1em",
    background: "#F64060",
    display: "inline-block",
    borderRadius: "50%",
    margin: "0.3em"
};

class LoadWidget extends Component {
    render() {
        return (
            <div id="widget">
                <span style={spanStyle} id="Circle-1" />
                <span style={spanStyle} id="Circle-2" />
                <span style={spanStyle} id="Circle-3" />
                <span style={spanStyle} id="Circle-4" />
            </div>
        );
    }
}

export default LoadWidget;
