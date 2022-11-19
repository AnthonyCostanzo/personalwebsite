const Hero = () => (
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
        I'm Anthony Costanzo, a passionate freelancer bringing you programming
        and design from the future. I am experienced in developing web and
        desktop applications including full front end design. This includes
        brand identity, graphics and illustrations.
      </p>
    </div>
  </div>
);

export default Hero;
