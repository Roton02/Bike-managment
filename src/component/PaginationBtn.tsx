

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const PaginationBtn= ({ currentPage, totalPages, onPageChange }:PaginationProps) => {
  return (
    <div className="flex items-center flex-wrap gap-2 justify-center space-x-2 mt-4">
      {/* Previous Button */}
      <button
        className={`px-3 py-1 rounded ${currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-primary text-white hover:bg-[#27949e]"}`}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Prev
      </button>

      {/* Page Numbers */}
      {[...Array(totalPages)].map((_, index) => {
        const page = index + 1;
        return (
          <button
            key={page}
            className={`px-3 py-1 rounded ${currentPage === page ? "bg-primary text-white" : "bg-gray-200 hover:bg-gray-400"}`}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        );
      })}

      {/* Next Button */}
      <button
        className={`px-3 py-1 rounded ${currentPage === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-primary text-white hover:bg-[#27949e]"}`}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default PaginationBtn;