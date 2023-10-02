import React from "react";

function LoadingSpinner() {
  return (
    <div className="absolute top-0 left-0 flex w-screen h-screen items-center justify-center">
      <div className="bouncing-loader">
        <div></div>
        <div></div>
        <div></div>
        </div>
    </div>
  );
}

export default LoadingSpinner;
