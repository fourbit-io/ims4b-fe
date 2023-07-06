
const Pagination = ({ pages, setPages, currentPage, setCurrentPage }) => {
    const handlePrevPage = () => {
        if(currentPage > 1){
            setCurrentPage(currentPage - 1);
        }
    }
    const handleNextPage = () => {
        if(currentPage < pages[pages?.length - 1]){
            setCurrentPage(currentPage + 1);
        }
    }
    const changePage = (item)=> {
        if(currentPage !== item){
            setCurrentPage(item);
        }
    } 
  return (
    <div className="max-w-screen-xl mx-auto mt-12 px-4 text-gray-600 md:px-8">
      <div className="hidden justify-center sm:flex" aria-label="Pagination">
        <ul className="flex items-center">
          <li onClick={handlePrevPage} className="hover:text-primary-600 hover:bg-gray-50 px-4 py-2.5 border border-r-0 rounded-tl-lg rounded-bl-lg cursor-pointer">
            {"<"}
          </li>
          {pages?.map((item, idx) => (
            <li onClick={() => changePage(item)} key={item} className="">
              {item == "..." ? (
                <span className="px-4 py-3 border border-l-0">{item}</span>
              ) : (
                <a
                  aria-current={currentPage == item ? "page" : false}
                  className={`px-4 py-3 border border-l-0 duration-150 hover:text-primary-600 hover:bg-primary-50 ${
                    currentPage == item
                      ? "bg-primary-50 text-primary-600 font-medium"
                      : ""
                  }`}>
                  {item}
                </a>
              )}
            </li>
          ))}
          <li onClick={handleNextPage} className="hover:text-primary-600 hover:bg-gray-50 px-4 py-2.5 border border-l-0 rounded-tr-lg rounded-br-lg cursor-pointer">
            {">"}
          </li>
        </ul>
      </div>
      {/* On mobile version */}
      <div className="flex items-center justify-between text-sm text-gray-600 font-medium sm:hidden">
        <a
          onClick={handlePrevPage}
          className="px-4 py-2 border rounded-lg duration-150 hover:bg-gray-50">
          Previous
        </a>
        <div className="font-medium">
          Page {currentPage} of {pages.length}
        </div>
        <a
          onClick={handleNextPage}
          className="px-4 py-2 border rounded-lg duration-150 hover:bg-gray-50">
          Next
        </a>
      </div>
    </div>
  );
};

export default Pagination;
