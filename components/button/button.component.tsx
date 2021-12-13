import { ElementType, PropsWithChildren } from "react";
import cn from "classnames";

type ButtonProps<T extends ElementType> = {
  as?: T;
  className?: string;
};

export const Button = <T extends ElementType = "button">({
  as,
  children,
  className,
  ...props
}: PropsWithChildren<ButtonProps<T>>) => {
  const Component = as || "button";

  return (
    <Component
      className={cn(
        "transition-all relative duration-300 hover:after:content-[''] after:absolute after:-z-10 after:w-0 hover:after:w-full after:h-1/2 after:bottom-0 after:left-0 after:bg-poly-red/50 after:transition-all after:duration-300",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};
