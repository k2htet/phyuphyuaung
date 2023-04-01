import { Button, SectionCard } from "../../components";
import aboutPic from "../../public/aboutPic.svg";
import Image from "next/image";

const About = () => {
  return (
    <section className="bg-primary">
      <div className="min-h-screen flex-center container px-4 mx-auto">
        <SectionCard title="About">
          <div className="flex-center flex-col sm:py-6 lg:py-10 gap-3">
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-start flex-col gap-3">
              <div className="space-y-3">
                <div>
                  <h1 className="text-md md:text-lg lg:text-xl">Experience</h1>
                  <ul className="list-disc px-4">
                    <li>Web Developer in Netware Co.Ltd (6 Months)</li>
                    <li>I have been developed a furniture website with PHP</li>
                    <li>
                      I have been developed an income outcome website with Vue
                      and Laravel API
                    </li>
                  </ul>
                </div>
                <div>
                  <h1 className="text-md md:text-lg lg:text-xl">Education</h1>
                  <ul className="list-disc px-4">
                    <li>
                      Studying (4th year) Computer Science at University of
                      Computer Studies, Maubin
                    </li>
                  </ul>
                </div>
                <div>
                  <h1 className="text-md md:text-lg lg:text-xl">
                    Certifications
                  </h1>
                  <ul className="list-disc px-4">
                    <li>
                      PHP Development Course at TTES (TOP IT EDU & SERVICES)
                    </li>
                    <li>
                      Laravel Development Course at TTES (TOP IT EDU & SERVICES)
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h1 className="text-xl my-2 sm:text-2xl md:text-3xl ">
                  I’m develop website with laravel and some useful package.
                </h1>

                <p
                  className={`text-sm leading-normal sm:text-md md:text-xl lg:text:2xl`}
                >
                  I’m a hardworking and ambitious individual with a great
                  passion. I’m currently in fourth year of studying Computer
                  Science at University of Computer Studies, Maubin. I have
                  excellent communication skills, enabling me to effectively
                  communication with a wide range of people.
                </p>
              </div>
            </div>

            <Button
              title="check my portfolio"
              link="/portfolio"
              radius="rounded"
            />
          </div>
        </SectionCard>
      </div>
    </section>
  );
};

export default About;
