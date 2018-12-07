import React, { Component } from "react";
import "./LoadWidget.css";

const spanStyle = {
    height: "1em",
    width: "1em",
    background: "#333",
    display: "inline-block",
    borderRadius: "50%",
    margin: "0.3em"
};

class Loading extends Component {
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

export default Loading;
