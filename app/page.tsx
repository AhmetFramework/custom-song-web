import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <div className="flex-grow">
      <Hero />
      <ProductGrid />
      <FAQ />
    </div>
  );
}
