import { paginationText } from "@/contents/bengali";

const Pagination = ({ pages, setPages, currentPage, setCurrentPage }) => {
  const {previous, next } = paginationText;
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNextPage = () => {
    if (currentPage < pages ) {
      setCurrentPage(currentPage + 1);
    }
  };
  return (
    <>
      {
        pages !== 0 ? 

    <div className="max-w-screen-xl mx-auto mt-12 px-4 text-gray-600 md:px-8">
      <div className="hidden justify-center sm:flex" aria-label="Pagination">
        <ul className="flex items-center gap-4">
          <li
            onClick={handlePrevPage}
            className={`${currentPage === 1 ? 'bg-gray-400 cursor-not-allowed' : 'bg-primary-600 hover:bg-primary-500  cursor-pointer'} text-white  px-4 py-2.5 border rounded-lg`}>
            {previous}
          </li>
          <li className="">
            <span>
               {currentPage} / {pages}
            </span>
          </li>
          <li
            onClick={handleNextPage}
            className={`${currentPage === pages ? 'bg-gray-400 cursor-not-allowed' : 'bg-primary-600 hover:bg-primary-500  cursor-pointer'} text-white  px-4 py-2.5 border rounded-lg`}>
            {next}
          </li>
        </ul>
      </div>
      {/* On mobile version */}
      <div className="flex items-center justify-between text-sm text-gray-600 font-medium sm:hidden">
        <a
          onClick={handlePrevPage}
          className="px-4 py-2 border rounded-lg duration-150 hover:bg-gray-50">
          {previous}
        </a>
        <div className="font-medium">
           {currentPage} / {pages}
        </div>
        <a
          onClick={handleNextPage}
          className="px-4 py-2 border rounded-lg duration-150 hover:bg-gray-50">
          {next}
        </a>
      </div>
    </div>
    :
    ""
      }
    </>
  );
};

export default Pagination;
