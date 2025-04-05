export default function BookDetails({ author, title, isbn, price }) {
    return (
      <div className="p-4 border rounded-lg shadow-lg bg-white max-w-sm mt-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-gray-600">Author: {author}</p>
        <p className="text-gray-500">ISBN: {isbn}</p>
        <p className="text-green-600 font-bold">Price: ${price}</p>
      </div>
    );
  }
  