
const items = [
  { id: "dashboard", label: "Dashboard" },
  { id: "products", label: "Products" },
  { id: "orders", label: "Orders" },
  { id: "settings", label: "Settings" },
];

export default function Sidebar({ selected, setSelected }) {
  return (
 

    <div className="h-full overflow-y-auto">
      <ul className="space-y-2 p-4">
        {items.map((item) => (
          <li key={item.id}>
            <a
              onClick={() => setSelected(item.id)}
              className={`flex w-full p-2 text-left rounded-lg transition ${
                selected === item.id
                  ? "bg-gray-200 font-semibold"
                  : "hover:bg-gray-100"
              }`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
