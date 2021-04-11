import React from "react";

const Pagination = (props) => {
  let pages = Math.ceil(props.count / props.pageSize);
  let pagesArray = [];
  for (let i = 1; i <= pages; i++) {
    pagesArray.push(i);
  }
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {pagesArray.map((page) => (
          <li
            key={"m" + page}
            onClick={() => props.onActivePageChange(page)}
            className={
              page === props.activePage ? "page-item active" : "page-item"
            }
          >
            <span className="page-link " style={{ cursor: "pointer" }}>
              {page}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
