
import { GoChevronLeft } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";

const Pagination = () => {
  return (
    <div className="mt-8 w-full   ">
      <nav aria-label="Page navigation example ">
        <ul className="list-style-none flex justify-center bg-slate-20">
          <li className="flex items-center">
            <a
              className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
              href="#"
                      >
                   <GoChevronLeft size={20}/>       
            </a>
          </li>
          <li>
            <a
              className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
              href="#"
            >
              1
            </a>
          </li>
          <li aria-current="page">
            <a
              className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
              href="#"
            >
              2
            </a>
          </li>
          <li>
            <a
              className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
              href="#"
            >
              3
            </a>
          </li>
          <li>
            <a
              className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
              href="#"
            >
                             <GoChevronRight size={20}/>       

            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
