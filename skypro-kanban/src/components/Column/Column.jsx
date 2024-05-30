import PropTypes from "prop-types";

function Column({ column, columnTitle, children }) {
  return (
    <div className={"main__column " + column}>
      <div className="column__title">
        <p>{columnTitle}</p>
      </div>
      <div className="cards">{children}</div>
    </div>
  );
}

Column.propTypes = {
    column: PropTypes.string.isRequired,
    columnTitle: PropTypes.string.isRequired,
    children: PropTypes.any.isRequired,
}

export default Column;
