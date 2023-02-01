"use client";
import { ThreeDots } from "react-loader-spinner";

const loading = () => {
  return (
    <div className="min-h-screen flex-center">
      <ThreeDots
        height="100"
        width="100"
        radius="9"
        color="#000000"
        ariaLabel="three-dots-loading"
        visible={true}
      />
    </div>
  );
};

export default loading;
