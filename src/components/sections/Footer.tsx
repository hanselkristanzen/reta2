import { profile } from "@/data/portfolio";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-5 text-center sm:px-8">
        <p className="font-display text-sm text-paper">{profile.fullName}</p>
        <p className="text-xs text-mist-dim">Cyber Security Student · {profile.university}</p>
        <p className="mt-3 font-mono text-[11px] text-mist-dim">
          © {year} {profile.fullName}
        </p>
      </div>
    </footer>
  );
}
