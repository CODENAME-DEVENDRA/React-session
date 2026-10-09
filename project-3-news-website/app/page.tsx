import en from "@/translations/en.json";

export default function Home() {
  return (
    <main className="mx-auto max-w-[1260px] px-5">
      <div className="flex justify-between border-b border-line py-4 text-date">
        <span>{en.home.mastheadDate}</span>
        <span>{en.home.issue}</span>
      </div>
      <section className="py-9">
        <p className="m-0 text-kicker font-bold text-accent uppercase">
          {en.home.eyebrow}
        </p>
        <h1 className="font-editorial text-display font-medium mt-5 mb-5">
          {en.home.headlineFirst} <br />{" "}
          <em className="text-accent">{en.home.headlineSecond}</em>
        </h1>
        <p className="text-sm text-muted">{en.home.summary}</p>
      </section>
    </main>
  );
}
