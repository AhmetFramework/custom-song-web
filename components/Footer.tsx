import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-8 px-6 text-white">
      <div className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-4">
        <div>
          <h3 className="mb-4 text-xl font-bold">Sanal Hediyem</h3>
          <p className="text-gray-400">
            Senin Şarkın, sevdiğini özel hissettirmenin en güzel yolu.
          </p>
        </div>
        <div>
          <h3 className="mb-4 text-xl font-bold">Alışveriş</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/search" className="text-gray-400 hover:text-white">
                Search
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-xl font-bold">İletişim</h3>
          <p className="text-gray-400">Bursa, Türkiye</p>
          <p className="text-gray-400">+90 541 621 58 49</p>
          <p className="text-gray-400">info@seninsarkin.com</p>
        </div>
        <div>
          <h3 className="mb-4 text-xl font-bold">
            Yeniliklerden Haberdar Olun
          </h3>
          <p className="text-gray-400">
            En son ürünler ve özel teklifler için bültenimize abone olun.
          </p>
          <form className="mt-4 flex">
            <input
              type="email"
              placeholder="E-posta adresiniz"
              className="flex-grow rounded-l-md border bg-gray-800 p-2 text-white"
            />
            <button
              type="submit"
              className="rounded-r-md bg-rose-600 px-4 py-2 font-semibold text-white hover:bg-rose-700"
            >
              Abone Ol
            </button>
          </form>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-800 pt-4 text-center text-gray-400">
        <p>© 2025 Senin Şarkın. Tüm hakları saklıdır.</p>
        <div className="mt-2 space-x-4">
          <Link href="/privacy-policy" className="hover:text-white">
            Gizlilik Politikası
          </Link>
          <Link href="/terms-of-use" className="hover:text-white">
            Kullanım Şartları
          </Link>
          <Link href="/refund-policy" className="hover:text-white">
            İade Politikası
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
