import { AiOutlineMail, AiTwotoneMail } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
const Contact = () => {
  return (
    <div className="contact text-white grid md:grid-cols-2 ml-3 mt-20 lg:mt-10">
      <div className=" flex-col mb-10 justify-center flex pl-10 space-y-3 text-gray-200 md:pl-20">
        <h1 className="text-purple-700 text-3xl font-bold font-sans">
          Contact
        </h1>
        <p className="text-[35px] md:text-[40px] md:w-8/12 font-sans">
          Got a problem to solve ?{" "}
        </p>
        <p className="w-8/12">
          Get your space suit ready and tell me your ideas to develop your dream
          application.
        </p>
        <div className="flex gap-x-5">
          <span>
            <AiOutlineMail size={24} />
          </span>
          <a href="mailto:anthonycostanzo23@gmail.com">
            anthonycostanzo23@gmail.com
          </a>
        </div>
      </div>
      <div className="text-gray-200">
        <form className="grid gap-5 m-auto ml-10 mt-5">
          <div className="relative">
            <label className="block mb-1" htmlFor="name">
              Name
            </label>
            <span className="absolute top-[2.3rem] left-1">
              <BsFillPersonFill size={24} />
            </span>
            <input
              className="bg-slate-800 rounded-sm p-2 pl-10 w-10/12"
              type="text"
              placeholder="name"
            ></input>
          </div>
          <div className="relative">
            <label className="block mb-1" htmlFor="email">
              Email
            </label>
            <span className="absolute top-[2.3rem] left-1">
              <AiTwotoneMail size={24} />
            </span>
            <input
              className="bg-slate-800 rounded-sm p-2 pl-10 w-10/12"
              type="text"
              placeholder="email"
            ></input>
          </div>
          <div>
            <label className="block mb-1" htmlFor="message">
              Message
            </label>
            <textarea className="bg-slate-800 rounded-sm p-2 w-10/12"></textarea>
          </div>
          <button
            className="bg-white p-2 w-3/12
             text-slate-800 border-[1px] border-slate-800
             hover:text-gray-300 hover:bg-slate-800 transition-all duration-300 ease-in-out"
          >
            <span></span>
            Contact Me
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
