import Link from "next/link";
import en from "@/translations/en.json";

const AboutPage = () => {
  return (
    <main className="mx-auto min-h-[70vh] max-w-[1260px] px-5 pb-20 pt-8">
      <Link className="mb-12 text-small text-link hover:text-live" href="/">
        {en.about.backHome}
      </Link>
      <p className="text-body font-bold uppercase text-accent">
        {en.about.eyebrow}
      </p>
      <h1 className="font-editorial text-page-display font-medium mt-5 mb-5">
        {en.about.headlineFirst} <br />{" "}
        <em className="text-accent">{en.about.headlineSecond}</em>
      </h1>
      <p className="mb-14 mt-6 max-w-[650px] font-editorial text-lead text-copy">
        {en.about.introduction}
      </p>
    </main>
  );
};

export default AboutPage;
