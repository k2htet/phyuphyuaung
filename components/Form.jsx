"use client";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import emailjs from "@emailjs/browser";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    des: yup.string().required(),
  })
  .required();

const notify = () => toast.success("Successfully");

const FormInput = () => {
  const formRef = useRef();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onChange", resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    const param = {
      from_name: data.name,
      message: data.des,
    };

    try {
      emailjs.send(
        "service_rbwh8rh",
        "template_qmal2bx",
        param,
        "JBS4NQzdIJ0E3PGC1"
      );
      notify();
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} theme="dark" />
      <form
        ref={formRef}
        onSubmit={handleSubmit(onSubmit)}
        className=" w-full md:w-[70%] lg:w-1/2 text-xl md:text-2xl mx-auto p-2"
      >
        <div>
          <label htmlFor="name" className="block ">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full bg-white placeholder:text-gray-600 rounded-sm border-2 border-black shadow-xl py-2 px-3 placeholder:px-2"
            autoComplete="none"
            placeholder="Enter Your Name"
            {...register("name")}
          />
        </div>
        <div className="my-3">
          <label htmlFor="email" className="block">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full rounded-sm bg-white border-2 border-black shadow-xl py-2 px-3 placeholder:px-2 placeholder:text-gray-600 hover:focus:hidden"
            placeholder="Enter Your Email"
            {...register("email")}
          />
        </div>
        <div>
          <label htmlFor="des" className="block">
            Description
          </label>
          <textarea
            id="des"
            className="w-full rounded-sm border-2 border-black shadow-xl py-2 px-3 placeholder:px-2 placeholder:align-middle bg-white placeholder:text-gray-600"
            autoComplete="none"
            placeholder="Enter Description"
            {...register("des")}
          />
        </div>
        <div className="text-center my-2">
          <button
            type="submit"
            className="btn-shadow w-full rounded-md text-2xl active:scale-90 py-1 hover:bg-secondary hover:text-white"
          >
            Send
          </button>
        </div>
      </form>
    </>
  );
};

export default FormInput;
