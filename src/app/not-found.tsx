import GhostButton from "@/components/GhostButton";

export default function NotFound() {
  return (
    <section className="container-x flex min-h-[80svh] flex-col justify-end pb-[var(--section)] pt-[calc(var(--header-h)+4rem)]">
      <p className="eyebrow mb-6">404</p>
      <h1 className="display t-interior">
        Nothing
        <br />
        here yet.
      </h1>
      <p className="t-lead mt-8 max-w-[40ch] text-white/75">The page you&rsquo;re looking for doesn&rsquo;t exist—or it moved. Let&rsquo;s get you somewhere useful.</p>
      <div className="mt-10 flex flex-wrap gap-4">
        <GhostButton href="/">Back home</GhostButton>
        <GhostButton href="/work" arrow={false}>
          See our work
        </GhostButton>
      </div>
    </section>
  );
}
