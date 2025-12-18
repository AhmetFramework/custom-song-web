import Link from 'next/link';

const Header = () => {
  return (
    <header className="border-b border-gray-200 bg-white py-4 px-6 dark:border-gray-800 dark:bg-gray-950">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-gray-50">
            Sanal Hediyem
          </Link>
        </div>
        <nav className="hidden items-center space-x-6 md:flex">
          <Link href="/" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
            Ana Sayfa
          </Link>
          <Link href="/products" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
            Tüm Ürünler
          </Link>
          <Link href="/blog" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
            Blog
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
            İletişim
          </Link>
          <Link href="/about" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
            Hakkımızda
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
            Instagram
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
            TikTok
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
            Facebook
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
