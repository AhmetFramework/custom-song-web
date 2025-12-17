import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full border-b">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold">
          Hayatıma Bir Şarkı
        </Link>

        <nav className="flex gap-6 text-sm">
          <Link href="/packages">Paketler</Link>
          <Link href="/samples">Örnekler</Link>
          <Link href="/about">Hakkımızda</Link>
          <Link
            href="/order"
            className="rounded-md bg-pink-500 px-4 py-2 text-white"
          >
            Sipariş Ver
          </Link>
        </nav>
      </div>
    </header>
  );
}
