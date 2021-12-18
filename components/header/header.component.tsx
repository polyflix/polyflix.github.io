import Link from "next/link";
import { createRef, useEffect } from "react";
import { Button } from "../button/button.component";

interface Item {
  label: string;
  route: string;
}
type Items = Item[];

export const Header = () => {
  const navBarRef = createRef<HTMLElement>();
  useEffect(() => {
    scrollHandler();
    document.addEventListener("scroll", scrollHandler);
    return () => document.removeEventListener("scroll", scrollHandler);
  });

  const items: Items = [
    {
      label: "Polyflix",
      route: "/",
    },
    {
      label: "Description",
      route: "/#description",
    },
  ];

  const scrollHandler = () => {
    const isTop = window.scrollY < 100;
    const staticClass = "bg-transparent";
    const scrollClass = "bg-white/90";
    if (isTop) {
      navBarRef.current?.classList.add(staticClass);
      navBarRef.current?.classList.remove(scrollClass);
    } else {
      navBarRef.current?.classList.remove(staticClass);
      navBarRef.current?.classList.add(scrollClass);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 pt-4">
      <nav
        className="h-16 flex w-full justify-center transition duration-200 ease-out rounded-md"
        ref={navBarRef}
      >
        <ul className="flex justify-center md:justify-end items-center h-full w-full max-w-6xl">
          {items.map((item: Item, i: number) => (
            <li key={i} className="mx-2">
              <Link href={item.route} passHref={true}>
                <Button type="link" as="a">
                  {item.label}
                </Button>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
