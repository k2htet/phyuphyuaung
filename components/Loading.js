"use client";
import { ThreeDots } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="flex-center w-[60%] h-[120px] sm:h-[120px] md:h-[180px] lg:h-[240px]">
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

export default Loading;
