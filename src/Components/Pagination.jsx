import React from "react";
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

const Pagination = ({ currentPage,firstIndex, lastIndex, numbers }) => {
  function prevPage() {
    if (currentPage !== firstIndex) {
      setCurrentPage(currentPage - 1);
    }
  }
  function changeCPage(id) {
    setCurrentPage(id);
  }
  function nextPage() {
    if (currentPage !== lastIndex) {
      setCurrentPage(currentPage + 1);
    }
  }

  const [active, setActive] = React.useState(1);

  const getItemProps = (index) => ({
    variant: active === index ? "filled" : "text",
    color: active === index ? "blue" : "blue-gray",
    onClick: () => setActive(index),
  });

  const next = () => {
    if (active === 5) return;
    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;
    setActive(active - 1);
  };

  return (
    <div className="my-10 flex flex-wrap items-center gap-1 sm:gap-4">
      <Button
        variant="text"
        color="blue-gray"
        className="flex items-center gap-0 sm:gap-2"
        onClick={prevPage}
        disabled={active === 1}
      >
        <ArrowLeftIcon strokeWidth={2} className="h-3 w-3" />
        <span className=" hidden sm:block">Previous</span>
      </Button>

      <div className="flex items-center gap-0 sm:gap-2">
        {numbers?.map((n, i) => {
          <IconButton
            className={`${currentPage === n ? "active" : ""}`}
            key={i}
            onClick={changeCPage}
            {...getItemProps(n)}
          >
            {n}
          </IconButton>;
        })}
      </div>
      <Button
        variant="text"
        color="blue-gray"
        className="flex items-center gap-0 sm:gap-2"
        onClick={nextPage}
        disabled={active === 5}
      >
        <span className="hidden sm:block">Next</span>
        <ArrowRightIcon strokeWidth={2} className="h-3 w-3" />
      </Button>
    </div>
  );
};

export default Pagination;
