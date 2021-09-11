import PropTypes from "prop-types";

const Pagination = ({ pageSize, totalCounts, currentPage, onChangePage }) => {
  const pageCount = Math.ceil(totalCounts / pageSize);
  if (pageCount === 1) return null;
  const pages = Array(pageCount)
    .fill()
    .map((a, idx) => idx + 1);

  if (currentPage > pageCount) {
    onChangePage(pageCount);
    return null;
  }

  return (
    <ul className='pagination'>
      {pages.map((page) => (
        <li
          key={page}
          className={"page-item " + (currentPage === page ? "active" : null)}
          onClick={() => onChangePage(page)}>
          <a href='#1' className='page-link'>
            {page}
          </a>
        </li>
      ))}
    </ul>
  );
};

Pagination.propTypes = {
  pageSize: PropTypes.number.isRequired,
  totalCounts: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
};

export default Pagination;
