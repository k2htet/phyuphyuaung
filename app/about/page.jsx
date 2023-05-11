import { Button, SectionCard } from "../../components";
import aboutPic from "../../public/aboutPic.svg";
import Image from "next/image";

const About = () => {
  return (
    <section className="bg-primary">
      <div className="min-h-screen flex-center container px-4 py-2 mx-auto">
        <SectionCard title="About">
          <div className="flex-center flex-col sm:py-6 lg:py-10 gap-3">
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-start flex-col gap-3">
              <div className="space-y-3">
                <div>
                  <h1 className="text-md md:text-lg lg:text-xl">Experience</h1>
                  <ul className="list-disc px-4">
                    <li>
                      Netware Information Technology (Web Developer | 6 months)
                    </li>
                    <li>I have developed a furniture website with PHP</li>
                    <li>
                      I have developed a Dental Clinic website with pure PHP
                    </li>
                    <li>I have developed an Blog API project with Laravel</li>
                    <li>
                      I have been currently modifying my old PHP Furniture
                      website with Laravel.
                    </li>
                    <li>I have developed a royal.edu_feedback with PHP</li>
                    <li>Internship in CareerConyat (4 months)</li>
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
                    <li>Oracle SQL Fundamentals (Info Wave Training Center)</li>
                  </ul>
                </div>
              </div>

              <div>
                <h1 className="text-xl my-2 sm:text-2xl md:text-3xl ">
                  I am develop website with laravel and some useful package.
                </h1>

                <p
                  className={`text-sm leading-normal sm:text-md md:text-xl lg:text:2xl`}
                >
                  I have a background in information technology, with a focus on
                  web development . I am the type of person who seizes every
                  opportunity to learn something new. That is why I enjoy
                  challenges. From there, I am under pressure to learn quickly
                  and gain a lot of new experience.And I am currently in fourth
                  year of studying Computer Science at University of Computer
                  Studies, Maubin. I am a undergraduate student.
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
