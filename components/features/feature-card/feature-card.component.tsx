import { Feature } from "../../../shared/types/feature.type";

type FeatureCardProps = {
  feature: Feature;
};

export const FeatureCard = ({ feature }: FeatureCardProps) => {
  return (
    <article className="p-2 transition-all duration-300 hover:shadow-2xl rounded">
      <h2 className="text-xl mb-4 text-center font-bold">{feature.title}</h2>
      <p className="text-md text-center">{feature.description}</p>
    </article>
  );
};
