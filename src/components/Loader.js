import React from "react";
import "../style/Loader.css";

const Loader = () => {
  return (
    <section>
      <div className="loading">
        <div className="blocks" style={{'--i':1}}></div><div className="blocks" style={{'--i':2}}></div>
        <div className="blocks" style={{'--i':3}}></div>
        <div className="blocks" style={{'--i':4}}></div>
        <div className="blocks" style={{'--i':5}}></div>
        <div className="blocks" style={{'--i':6}}></div>
        <div className="blocks" style={{'--i':7}}></div>
        <div className="blocks" style={{'--i':8}}></div>
        <div className="blocks" style={{'--i':9}}></div>
        <div className="blocks" style={{'--i':10}}></div>
        <div className="blocks" style={{'--i':11}}></div>
        <div className="blocks" style={{'--i':12}}></div>
        <h3>Loading</h3>
      </div>
    </section>
  );
};

export default Loader;
