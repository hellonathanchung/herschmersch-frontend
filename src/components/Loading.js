import React from "react";

function Loading() {
  return (
    <div>
      <div className="ui segment centered">
        <div className="ui active inverted dimmer">
          <div className="ui text loader">
            <h1>Loading!</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loading;
