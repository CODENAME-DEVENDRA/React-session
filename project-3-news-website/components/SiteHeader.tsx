import Link from "next/link";
import en from "@/translations/en.json";

const SiteHeader = () => {
  return (
    <header className="mx-auto flex max-w-[1260px] h-[70px] items-center justify-between gap-2 border-b border-line px-5">
      <Link className="font-editorial text-brand font-bold" href="/">
        {en.brand.name}
      </Link>
      <nav className="flex items-center gap-2.5 text-small text-secondary">
        <Link
          className="border-l pl-2.5 border-line hover:text-live"
          href="/about"
        >
          {en.navigation.about}
        </Link>
      </nav>
      <span className="text-kicker font-bold text-muted">
        {en.brand.edition}
      </span>
    </header>
  );
};

export default SiteHeader;
