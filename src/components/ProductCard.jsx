
export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col">
      <div className="h-40 w-full overflow-hidden rounded">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="mt-3 font-semibold text-lg">{product.title}</h3>
      <p className="text-sm text-gray-500 flex-1 mt-1">{product.description}</p>

      <div className="mt-4 flex gap-3">
        <button className="px-3 py-1 rounded-md bg-gray-200">Edit</button>
        <button className="px-3 py-1 rounded-md bg-gray-200">Delete</button>
      </div>
    </div>
  );
}
