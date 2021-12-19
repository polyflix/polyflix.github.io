import { Dots } from "../dots/dots.components";
import { GradientText } from "../gradiant-text/gradiant-text.component";

export const Description = () => {
  return (
    <section className="min-h-[500px] flex flex-col items-center justify-center mx-2 sm:mx-8">
      <div className="relative w-full">
        <div className="py-16 px-8 max-w-5xl mx-auto relative z-10 bg-white rounded-md">
          <GradientText
            as="h2"
            className="text-2xl text-center font-medium mb-8 font-bold"
          >
            Polyflix
          </GradientText>
          <p className="text-lg text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
            dolor minus pariatur aliquam quaerat quae vero reprehenderit sunt
            doloribus beatae optio tempore amet, suscipit voluptas velit ratione
            ab reiciendis quidem.
          </p>
        </div>
        <Dots className="absolute -left-0 -bottom-10 z-0 w-1/2 sm:w-3/12 min-h-[100px] h-1/2" />
        <Dots className="absolute -right-0 -top-10 z-0 w-1/2 sm:w-3/12 min-h-[100px] h-1/2" />
      </div>
    </section>
  );
};
