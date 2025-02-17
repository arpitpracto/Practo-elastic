
export default function SearchBar({ query, setQuery, onSearch }) {
    return (
      <div className="flex justify-center mt-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border p-2 rounded-l-lg w-1/2"
          placeholder="Search for doctors or clinics..."
        />
        <button
          onClick={onSearch}
          className="bg-blue-500 text-white px-4 py-2 rounded-r-lg"
        >
          Search
        </button>
      </div>
    );
  }