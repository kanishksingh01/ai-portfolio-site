export function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-8">
      <div className="mx-auto flex max-w-6xl items-center justify-center">
        <p className="text-sm text-zinc-600">
          &copy; {new Date().getFullYear()} Kanishk Singh
        </p>
      </div>
    </footer>
  );
}
