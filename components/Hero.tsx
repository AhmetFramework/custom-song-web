import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative h-[500px]">
      <Image
        src="/hero-image.jpg"
        alt="Hero Image"
        fill
        className="z-0 object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
        <h1 className="text-5xl font-extrabold leading-tight">Yeni Nesil Hediyelerimiz</h1>
        <p className="mt-4 text-xl">Sıradan hediyelerden sıkılanlar için; en sıra dışı hediyeler!</p>
        <a
          href="/products"
          className="mt-8 rounded-full bg-rose-600 px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-rose-700"
        >
          Yeni Nesil Hediyeler alışverişi yapın →
        </a>
      </div>
    </section>
  );
};

export default Hero;
