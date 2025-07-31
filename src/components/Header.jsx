import { ThemeToggle } from "./ThemeToggle";

function Header() {
  return (
    <header className="flex justify-end items-center w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
      <ThemeToggle />
    </header>
  );
}

export { Header };
