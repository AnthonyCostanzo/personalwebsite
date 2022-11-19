import Nav from "./Nav";
const Header = () => (
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
);

export default Header;
