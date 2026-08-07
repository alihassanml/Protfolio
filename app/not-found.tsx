import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-[88rem] flex-col justify-center px-6 py-32 lg:px-12">
      <p className="label">404</p>
      <h1 className="d-1 mt-5 max-w-2xl font-display font-bold text-ink">
        That page is not here.
      </h1>
      <p className="lede mt-6 max-w-lg">
        The link is either old or mistyped. The work is all on the projects
        page.
      </p>
      <div className="mt-10">
        <Link
          href="/"
          className="rounded-full bg-ink px-7 py-4 font-mono text-[0.72rem] font-medium uppercase tracking-[0.14em] text-paper transition-colors duration-300 hover:bg-pine"
        >
          Back to home
        </Link>
      </div>
    </section>
  );
}
