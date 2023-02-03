import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";
import Loading from "./Loading";

const PortCard = ({ title, des, img, frameworks, repoLink, demoLink }) => {
  return (
    <div className={`port-card-style text-white my-5 bg-primary`}>
      <div className="p-6 ">
        <div className="w-[60%] md:w-[40%] lg:w-[40%] h-[120px] bg-white border-4 border-black mx-auto sm:h-[120px] md:h-[180px] lg:h-[240px] rounded-md overflow-hidden">
          <Suspense fallback={<Loading />}>
            <Image src={img} alt="img" className="w-full h-full rounded-sm" />
          </Suspense>
        </div>
        <div className="space-y-3 mt-5">
          <div className="border-b-2 border-b-black">
            <h1 className="text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              {title}
            </h1>
            <p className="text-black text-md sm:text-lg md:text-xl lg:text-2xl py-2">
              {des}
            </p>
          </div>
          <h1 className=" text-lg text-black sm:text-xl md:text-2xl lg:text-3xl ">
            Framework That I Use
          </h1>
          <div className="flex justify-around items-center text-black gap-3">
            {frameworks.map((data) => (
              <div
                key={data}
                className="w-[80px] h-[35px] bg-white border-2 rounded-full border-black flex-center text-sm md:w-[100px] md:h-[40px] lg:w-[120px] lg:h-[45px] sm:text-md md:text-lg lg:text-xl"
              >
                {data}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-around items-center bg-black py-2">
        <Link href={repoLink} className="text-md sm:text-lg">
          Gihub Repo
        </Link>
        <Link href={demoLink} className="underline text-xl sm:text-2xl">
          Demo Link
        </Link>
      </div>
    </div>
  );
};

export default PortCard;
