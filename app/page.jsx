import Image from "next/image";
import { Button } from "../components";
import proPic from "../public/proPic.svg";
import profileLineVector from "../public/profileLineVector.svg";

export default function Home() {
  return (
    <main className="bg-primary min-h-screen flex-center flex-col gap-5">
      <div className=" page-container flex flex-col-reverse gap-10 pt-10 lg:grid lg:grid-cols-3">
        <div className="text-center lg:col-span-2 lg:text-start">
          <h2 className="text-4xl md:text-5xl lg:text-7xl xl:text-8xl text">
            Hello,
          </h2>
          <h1 className="text-5xl md:text-6xl md:my-3 lg:text-8xl xl:text-heroXl">
            I am <span className="underline">KoKoHtet</span>
          </h1>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            I am a frontend web developer
          </h2>
        </div>
        <div className="flex-center flex-col gap-5">
          <div className="bg-white border-shadow rounded-sm">
            <Image
              src={proPic}
              alt="profile"
              className="w-[200px] h-auto sm:w-[220px] md:w-[240px] lg:w-[260px] xl:w-[305px] "
            />
          </div>
          <div>
            <Image
              src={profileLineVector}
              alt="profile"
              className="w-[200px] h-auto sm:w-[220px] md:w-[240px] lg:w-[260px] xl:w-[305px]"
            />
          </div>
        </div>
      </div>
      <Button link="/about" color="bg-primary" />
    </main>
  );
}
