import Link from "next/link";
import { Button } from "../button/button.component";

interface Item {
  label: string;
  route: string;
}
type Items = Item[];

export const Header = () => {
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

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80">
      <nav className="h-16 flex w-full justify-center">
        <ul className="flex justify-end items-center h-full w-full max-w-5xl">
          {items.map((item: Item, i: number) => (
            <li key={i} className="mx-2">
              <Link href={item.route} passHref={true}>
                <Button as="a">{item.label}</Button>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
