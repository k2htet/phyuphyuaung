import { Button, SectionCard } from "../../components";
import aboutPic from "../../public/aboutPic.svg";
import Image from "next/image";

import { Poppins } from "@next/font/google";

const poppins = Poppins({
  weight: "600",
  subsets: "latin",
});

const About = () => {
  return (
    <section className="bg-primary">
      <div className="min-h-screen flex-center container px-4 mx-auto">
        <SectionCard title="About">
          <div className="flex-center flex-col sm:py-6 lg:py-10 gap-3 lg:flex-row">
            <div className="lg:flex-none lg:w-2/5 flex-center">
              <Image
                src={aboutPic}
                alt="profile"
                className="w-[160px] h-auto sm:w-[180px] md:w-[200px] lg:w-[260px] xl:w-[270px]"
              />
            </div>
            <div className="flex-between lg:items-start flex-col gap-3">
              <h1 className="text-xl my-2 sm:text-2xl md:text-3xl lg:text-4xl">
                I’m develop user interface with React Js and some useful React
                package.
              </h1>

              <p
                className={`text-sm leading-normal sm:text-md md:text-xl lg:text:2xl ${poppins.className}`}
              >
                I'm a self-instructed programmer and one of the best features
                about me is being quite flexible in communication with people in
                almost every situations. Currently, I am learning and studying
                the advance concepts of (Js,React) which will significantly
                upgrade my current position and level.
              </p>
              <Button
                title="check my portfolio"
                link="/portfolio"
                radius="rounded"
              />
            </div>
          </div>
        </SectionCard>
      </div>
    </section>
  );
};

export default About;
