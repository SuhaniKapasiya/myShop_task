"use client";
import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import ProductCard from "../components/ProductCard";
import DashboardContent from "@/components/DashboardContent";
import OrdersContent from "@/components/OrdersContent";
import SettingsContent from "@/components/SettingsContent";
import CategoryFilter from "@/components/CategoryFilter";

export default function Home() {
  const [selected, setSelected] = useState("dashboard");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("smartphones");

  useEffect(() => {
    if (selected !== "products") return; 

    const fetchProducts = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://dummyjson.com/products/category/${category}`
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

    fetchProducts();
  }, [selected, category]); 

  // Decide what to render
  const renderContent = () => {
    switch (selected) {
      case "dashboard":
        return <DashboardContent />;
      case "products":
        return loading ? (
          <div className="text-center py-20">Loading...</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        );
      case "orders":
        return <OrdersContent />;
      case "settings":
        return <SettingsContent />;
      default:
        return <div className="p-6">Select a section</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* HEADER */}
      <header className="bg-gray-200 py-4 shadow fixed top-0 w-full z-10">
        <div className="flex items-center w-full flex-1">
          {/* Logo */}
          <div className="text-2xl flex  font-bold ml-3 ">Logo</div>

          {/* Search Bar */}
          <div className="flex-1 flex justify-center w-full">
            <div className="w-full mx-48 pr-12">
              <input
                className="w-full rounded-md px-4 py-2 border"
                placeholder="Search..."
              />
            </div>
          </div>

          {/* Avatar */}
          <div className="w-10 h-10 bg-gray-300 rounded-full mr-3 " />
        </div>
      </header>

      {/* LAYOUT */}
      <div className="pt-16 flex">
        {/* LEFT SIDEBAR */}
        <div className="hidden lg:block w-64 fixed left-0 top-16 h-[calc(100vh-4rem)] border-r bg-white">
          <Sidebar selected={selected} setSelected={setSelected} />
        </div>

        {/* MAIN CONTENT */}
      
        <main className="flex-1 lg:ml-64 lg:mr-72 p-6">
          <div className="mb-5">
            <input
              className="w-full rounded-md px-4 py-3 border shadow-sm"
              placeholder="Filter"
            />
          </div>
          {renderContent()}
        </main>

        {/* RIGHT SIDEBAR */}
        <div className="hidden lg:block w-72 fixed right-0 top-16 h-[calc(100vh-4rem)] border-l bg-white p-6 overflow-y-auto">
          <CategoryFilter
            selectedCategory={category}
            setCategory={setCategory}
          />
        </div>
      </div>
    </div>
  );
}
