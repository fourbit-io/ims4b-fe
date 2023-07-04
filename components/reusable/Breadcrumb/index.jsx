import { useRouter } from "next/router";
import React from "react";

const BreadCrumb = ({ previousPages, currentPage }) => {
  const router = useRouter();
  return (
    <nav className="flex p-4" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        {previousPages?.map((item, id) => (
          <li className="inline-flex items-center" key={id}>
            <button
              href="#"
              onClick={() => router.push(item?.url)}
              className="inline-flex gap-2 items-center text-md font-medium text-gray-700 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400">
              {item?.icon}
              {item?.name}
            </button>
          </li>
        ))}

        <li aria-current="page">
          <div className="flex items-center">
            <svg
              aria-hidden="true"
              className="w-6 h-6 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"></path>
            </svg>
            <span className="ml-1 text-md font-medium text-primary-500 md:ml-2 dark:text-primary-400">
              {currentPage}
            </span>
          </div>
        </li>
      </ol>
    </nav>
  );
};

export default BreadCrumb;
