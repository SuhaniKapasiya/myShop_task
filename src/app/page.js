"use client";
import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import ProductCard from "../components/ProductCard";

export default function Home() {
  
  const [selected, setSelected] = useState("smartphones");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    const fetchProducts = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://dummyjson.com/products/category/${selected}`
        );
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const data = await res.json();
        setProducts(data.products || []);
      } catch (error) {
        console.error("Failed to fetch products:", error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    if (selected) {
      fetchProducts();
    }
  }, [selected]);

  return (
    <div className="min-h-screen">
     
      <header className="bg-gray-200 py-4 shadow fixed top-0 w-full z-10">
        <div className="max-w-7xl mx-auto px-6 flex items-center gap-6">
          <div className="text-2xl font-bold">Logo</div>
          <div className="flex-1">
            <input
              className="w-full rounded-md px-4 py-2 border"
              placeholder="Search..."
            />
          </div>
          <div className="w-10 h-10 bg-gray-300 rounded-full" />
        </div>
      </header>

     
     
      <div className="pt-[76px] max-w-7xl mx-auto px-6 py-8 flex gap-6">

        {/* Left sidebar */}
        <aside className="w-64">
          <div className="sticky top-[84px]">
            <Sidebar selected={selected} setSelected={setSelected} />
          </div>
        </aside>

        {/* Main */}
        <main className="flex-1 ">
          <div className="mb-5 mt-2 ">
            <input
              className="w-full rounded-md px-4 py-3 border shadow-sm"
              placeholder="Filter"
            />
          </div>
          {loading ? (
            <div className="text-center py-20">Loading...</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}
        </main>

        {/* Right sidebar */}
        <aside className="w-72 hidden lg:block">
          <div className="sticky top-[84px]">
            <div className="p-6 bg-white rounded shadow h-52">Right panel</div>
          </div>
        </aside>
      </div>
    </div>
  );
}
