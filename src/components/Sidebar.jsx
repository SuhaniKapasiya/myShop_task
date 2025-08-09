const items = [
  { id: "smartphones", label: "smartphones" },
  { id: "laptops", label: "laptops" },
  { id: "fragrances", label: "fragrances" },
  { id: "groceries", label: "groceries" },
];

export default function Sidebar({ selected, setSelected }) {
  return (
    <aside
      id="separator-sidebar"
      className="fixed top-18 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
        <ul className="space-y-2 font-medium">
          {items.map((item) => (
            <li key={item.id}>
              <a
                href="#"
                onClick={() => setSelected(item.id)}
                className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${
                  selected === item.id ? "bg-gray-100 dark:bg-gray-700" : ""
                }`}
              >
                {/* Placeholder for SVG icon */}
                <svg
                  className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8Z" />
                </svg>

                <span className="ms-3">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
