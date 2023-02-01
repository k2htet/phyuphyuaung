import { Button, SectionCard } from "../../components";
import PortCard from "../../components/PortCard";

import { portCardData } from "../../constant";

const Portfolio = () => {
  return (
    <section className="bg-primary">
      <div className="min-h-screen flex-center container mx-auto p-5 ">
        <SectionCard title="Portfolio">
          <div className="">
            {portCardData.card.map((data) => (
              <PortCard
                title={data.title}
                des={data.des}
                frameworks={data.frameworks}
                repoLink={data.repo}
                demoLink={data.live}
                img={data.img}
                key={data}
              />
            ))}
          </div>

          <div className="flex-center mt-3">
            <Button
              title="Skills That I Have"
              radius="rounded"
              link="/skills"
            />
          </div>
        </SectionCard>
      </div>
    </section>
  );
};

export default Portfolio;
