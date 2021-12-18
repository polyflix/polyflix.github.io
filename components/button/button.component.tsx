import { ElementType, PropsWithChildren } from "react";
import cn from "classnames";

type ButtonProps<T extends ElementType> = {
  as?: T;
  className?: string;
  type?: "flat" | "stroked" | "link" | "icon";
};

export const Button = <T extends ElementType = "button">({
  as,
  children,
  className,
  type = "flat",
  ...props
}: PropsWithChildren<ButtonProps<T>>) => {
  const Component = as || "button";

  let rootStyles: string = `text-sm
                            py-2
                            px-4
                            rounded-md
                            text-white
                            normal-case
                            font-semibold`;
  switch (type) {
    case "flat":
      rootStyles = cn(
        rootStyles,
        "bg-gradient-to-l from-poly-red/60 to-poly-red/80 transition ease duration-300 hover:bg-poly-red/90"
      );
      break;
    case "stroked":
      rootStyles += cn(
        rootStyles,
        "text-poly-red border-2 border-poly-red/40 hover:border-poly-red/90"
      );
    case "link":
      rootStyles += cn(rootStyles, "text-poly-red/60 hover:text-poly-red/90 ");
      break;
    case "icon":
      rootStyles += cn(
        rootStyles,
        "bg-poly-red/20 transition ease duration-300 hover:bg-poly-red/90 rounded-full px-2"
      );
      break;
  }

  return (
    <Component className={cn(rootStyles, className)} {...props}>
      {children}
    </Component>
  );
};
