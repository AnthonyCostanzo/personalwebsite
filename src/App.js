import Nav from "./components/Nav";
import { AiOutlineMail, AiTwotoneMail } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import styles from "./app.scss";
function App() {
  return (
    <div className="pb-10">
      <div className="text-white h-[100vh] relative">
        <div className="absolute h-full w-full">
          <img
            alt="hero"
            className="h-full opacity-50 w-full"
            src="/tech_cleanup.jpeg"
          />
        </div>
        <Nav />
        <div className="h-3/4 relative  font-bold font-['Roboto'] flex flex-col items-center  justify-center text-white z-10">
          <p className="text-center w-10/12 md:w-5/12 pt-40 ">
            <span className="text-[35px] md:text-[42px] lg:text-[62px] block">
              Programming
            </span>
            <span className="text-[32px] block md:text-[40px] lg:text-[60px] ">
              and Design
            </span>
            <span className="text-[32px] md:text-[40px] lg:text-[60px] ">
              from the Future{" "}
            </span>
          </p>
          <button className="border-white border-2 p-5 mt-5 hover:bg-purple-900 transition-all duration-150 ">
            <a href="#work">DIVE INTO MY WORLD</a>
          </button>
        </div>
      </div>
      <div className="md:grid md:grid-cols-2 pb-10 md:pb-0">
        <div className="h-[70vh] md:h-[80vh]">
          <img
            className="h-full w-full"
            src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60"
            alt="about_pic"
          />
        </div>
        <div className="mt-5 md:mt-20 text-white ml-10">
          <h1 className="text-xl font-semibold">About</h1>
          <div className="typing_slider w-1/4 mt-5">
            <p>Freelancer</p>
            <p className="">Software Engineer</p>
            <p>Problem Solver</p>
          </div>
          <p className="mt-4 w-10/12">
            I'm Anthony Costanzo, a passionate freelancer bringing you
            programming and design from the future. I am experienced in
            developing web and desktop applications including full front end
            design. This includes brand identity, graphics and illustrations.
          </p>
        </div>
      </div>
      <div id="work" className="bg-white  text-center p-10">
        <h1 className="font-semibold text-2xl text-fuchsia-500">Work</h1>
        <p className="text-[40px] font-bold font-sans">Dive into my world</p>
      </div>
      <div className="contact text-white grid md:grid-cols-2 ml-3 mt-20 lg:mt-10">
        <div className=" flex-col mb-10 justify-center flex pl-10 space-y-3 text-gray-200 md:pl-20">
          <h1 className="text-purple-700 text-3xl font-bold font-sans">
            Contact
          </h1>
          <p className="text-[35px] md:text-[40px] md:w-8/12 font-sans">
            Got a problem to solve ?{" "}
          </p>
          <p className="w-8/12">
            Get your space suit ready and tell me your ideas to develop your
            dream application.
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
          <form className="grid gap-5 m-auto ml-10 mt-10">
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
    </div>
  );
}

export default App;
