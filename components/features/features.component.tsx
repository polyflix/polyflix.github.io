import { Feature } from "../../shared/types/feature.type";
import { FeatureCard } from "./feature-card/feature-card.component";

export const Features = () => {
  const features: Feature[] = [
    {
      title: "Neque porro",
      description:
        "Vestibulum fringilla urna id lectus viverra, in pulvinar erat finibus. Vestibulum congue id lacus eget ultrices.",
    },
    {
      title: "Curabitur hendrerit",
      description:
        "Sed sed urna ac dui dignissim malesuada. Morbi eget sollicitudin est, sit amet porta tellus.",
    },
    {
      title: "Ut dui sapien",
      description:
        "Aliquam euismod, mi quis dignissim varius, quam mi aliquam justo, in laoreet urna elit et felis. Aliquam fermentum varius elit non volutpat.",
    },
    {
      title: "Ut porro",
      description:
        "Sed Aliquam urna id dignissim viverra, in pulvinar erat finibus. Vestibulum congue id lacus eget ultrices.",
    },
  ];
  return (
    <section
      id="features"
      className="flex flex-col justify-center p-4 max-w-7xl m-auto mb-52"
    >
      <h2 className="text-2xl mb-8 max-w-content relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-1 after:w-12 after:bg-gradient-to-r after:from-poly-red/40 after:to-poly-red after:rounded">
        Features
      </h2>
      <div className="w-full grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature: Feature, i: number) => (
          <FeatureCard key={i} feature={feature} />
        ))}
      </div>
    </section>
  );
};
