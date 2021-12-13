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
  ];
  return (
    <section className="flex justify-center p-4">
      <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(240px,_1fr))] gap-4 max-w-5xl">
        {features.map((feature: Feature, i: number) => (
          <FeatureCard key={i} feature={feature} />
        ))}
      </div>
    </section>
  );
};
