import Image from "next/image";
import { Button } from "../components";
import proPic from "../public/proPic.jpg";
import profileLineVector from "../public/profileLineVector.svg";

export default function Home() {
  return (
    <main className="bg-primary min-h-screen flex-center flex-col gap-5">
      <div className=" page-container flex flex-col-reverse gap-10 pt-10 lg:grid lg:grid-cols-3 items-center">
        <div className="text-center lg:col-span-2 lg:text-start items-center space-y-2">
          <h2 className="text-4xl md:text-5xl lg:text-6xl">Hello, I'm</h2>
          <h1 className="text-5xl md:text-6xl  lg:text-7xl">
            <span className="underline">Phyu Phyu Aung</span>
          </h1>
          <h2 className="text-3xl md:text-4xl lg:text-5xl ">
            I am a Laravel web developer
          </h2>
        </div>
        <div className="flex-center flex-col gap-5">
          <div className=" border-shadow rounded-sm w-[50%] lg:w-[80%]">
            <Image src={proPic} alt="profile" className="w-full h-auto " />
          </div>
          <div>
            <Image
              src={profileLineVector}
              alt="profile"
              className="w-[180px] h-auto sm:w-[220px] md:w-[240px] lg:w-[260px] xl:w-[305px]"
            />
          </div>
        </div>
      </div>
      <Button link="/about" color="bg-primary" />
    </main>
  );
}
