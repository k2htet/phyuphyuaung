import { SectionCard, Button } from "../../components";
import Link from "next/link";
import Form from "../../components/Form";

const Contact = () => {
  return (
    <section className="bg-primary">
      <div className="min-h-screen flex-center container mx-auto p-5 ">
        <SectionCard title="Contact">
          <div>
            <div className="text-2xl text-center md:text-3xl lg:text-4xl bg-primary p-2 border-4 rounded-md btn-shadow border-black tracking-widest my-3">
              <h1>Looking for a fulltime</h1>
              <h1>Laravel Web Developer?</h1>
              <h1>You Found!</h1>

              <div>
                <Link href="/"></Link>
              </div>
            </div>
            <div className="bg-primary border-4 border-black rounded-md mt-5">
              <h1 className="text-center text-3xl md:text-4xl lg:text-5xl p-3 underline underline-offset-4">
                Get In Touch Here
              </h1>

              <Form />
              <div className="text-center">
                <h1 className="text-xl md:text-2xl lg:text-3xl">Or</h1>
                <h1 className="text-2xl md:text-3xl lg:text-4xl p-3 underline underline-offset-4">
                  Call : 09950572008
                </h1>
              </div>
            </div>
          </div>
        </SectionCard>
      </div>
    </section>
  );
};

export default Contact;
