// Pagination.tsx
const Pagination = ({ totalPost, postPerPage, currentPage, setCurrentPage }) => {
  const pages = [];
  for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="flex gap-2 justify-center mt-6">
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => setCurrentPage(page)}
          className={`px-3 py-1 rounded ${
            page === currentPage ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
          }`}
        >
          {page}
        </button>
      ))}
    </div>
  );
};
export default Pagination;
