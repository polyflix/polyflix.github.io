import Image from "next/image";

export const Jumbotron = () => {
  return (
    <section className="bg-white h-screen flex items-center justify-center px-4">
      <div className="relative max-w-5xl w-full h-2/3 flex flex-col align-center justify-center p-2 z-10">
        <h1
          className="title text-7xl text-center relative max-w-content sm:text-left sm:text-8xl md:text-9xl font-bold text-black
          hover:after:content-[''] after:absolute after:-z-10 after:w-full after:h-1/3 after:bottom-0 after:left-0 after:bg-poly-red after:transition-all after:duration-300
          before:content-[attr(data-content)] before:absolute before:z-10 before:w-full before:h-full before:top-0 before:left-0 before:text-black before:transition-all before:duration-300
          "
        >
          Polyflix,
        </h1>
        <h1 className="text-6xl text-center sm:text-left sm:text-7xl md:text-8xl font-bold text-black">
          Study with <span className="text-poly-red">simplicity.</span>
        </h1>
      </div>
    </section>
  );
};
