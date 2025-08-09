const categories = [
  { id: "laptops", label: "Laptops" },
  { id: "fragrances", label: "Fragrances" },
  { id: "smartphones", label: "Smartphones" },
  { id: "groceries", label: "Groceries" },
];

export default function CategoryFilter({ selectedCategory, setCategory }) {
  return (
    <div className="space-y-3">
      <h2 className="text-lg font-semibold border-b pb-2 ">Categories</h2>
      <ul className="space-y-2">
        {categories.map((cat) => (
          <li key={cat.id}>
            <p
              onClick={() => setCategory(cat.id)}
              className={`block w-full text-left px-3 py-2 rounded-md transition ${
                selectedCategory === cat.id
                  ? "text-pink-900 font-semibold"
                  : "hover:text-blue-800 hover:cursor-pointer"
              }`}
            >
              {cat.label}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
