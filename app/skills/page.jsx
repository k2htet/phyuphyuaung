import { SectionCard, Button } from "../../components";
import { skills } from "../../constant";

const SkillsHeader = ({ title, des }) => (
  <div className="flex-between lg:justify-around md:text-2xl lg:text-3xl">
    <h1>{title}</h1>
    <div className="w-[30%] h-[2px] bg-black" />
    <h1>{des}</h1>
  </div>
);

const OtherSkills = ({ name }) => <h1>{name}</h1>;

const Skills = () => {
  return (
    <section className="bg-primary">
      <div className="min-h-screen flex-center container mx-auto p-5 ">
        <SectionCard title="Skills">
          <h1 className="text-center rounded-md border-2 border-black bg-primary p-2 mb-8 text-2xl sm:text-2xl md:text-3xl lg:text-4xl md:p-4 ">
            Skills That I Use While Frontend Development
          </h1>

          <div className="grid grid-cols-1 gap-3 text-xl text-start my-2">
            {skills.title.map((skillTitle) => (
              <SkillsHeader
                title={skillTitle.name}
                des={skillTitle.des}
                key={skillTitle}
              />
            ))}
          </div>

          <hr className="my-2 bg-gray-600 h-[4px]" />

          <h1 className="text-black md:text-xl lg:text-2xl lg:text-center">
            Other Skills
          </h1>
          <div className="grid grid-cols-2  text-md gap-3 text-black md:text-xl lg:text-3xl lg:text-center">
            {skills.otherSkills.map((otherSkill) => (
              <OtherSkills name={otherSkill} key={otherSkill} />
            ))}
          </div>

          <div className="flex-center mt-3">
            <Button title="Contact Me" radius="rounded" link="/contact" />
          </div>
        </SectionCard>
      </div>
    </section>
  );
};

export default Skills;
