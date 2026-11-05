import { useEffect, useState } from "react";
import { FaAngleLeft } from "react-icons/fa";

const Pagination = ({ allData, itemsPerPage, paginatedData }) => {
  const [currentCount, serCurrentCount] = useState(1);

  let allCount = allData.length;

  let shownCountInPage = Math.ceil(allCount / itemsPerPage);

  useEffect(() => {
    const finishIndex = itemsPerPage * currentCount;
    const startIndex = finishIndex - itemsPerPage;
    const paginatedCourses = allData.slice(startIndex, finishIndex);
    paginatedData(paginatedCourses);
  }, [currentCount, allData, itemsPerPage]);

  return (
    <>
      <div className="w-fit mt-6 flex gap-2 mx-auto">
        <button
          disabled={currentCount === 1}
          className="neu-btn size-13"
          onClick={() => serCurrentCount(currentCount - 1)}
        >
          <FaAngleLeft className="rotate-180" size={30} />
        </button>

        {Array.from({ length: shownCountInPage }).map((_, index) => (
          <button
            key={index}
            className={`neu-btn size-13 ${currentCount === index + 1 && "shadow-neu-inset"}`}
            onClick={() => serCurrentCount(index + 1)}
          >
            {index + 1}
          </button>
        ))}

        <button
          disabled={currentCount === shownCountInPage}
          className="neu-btn size-13"
          onClick={() => serCurrentCount(currentCount + 1)}
        >
          <FaAngleLeft size={30} />
        </button>
      </div>
    </>
  );
};

export default Pagination;
