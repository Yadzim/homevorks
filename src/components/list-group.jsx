const ListGroup = ({ items, selectedItem, onSelect, valueKey, idKey }) => {
  return (
    <ul className='list-group'>
      {items.map((item) => (
        <li
          key={item[idKey]}
          className={`list-group-item ${
            item[idKey] === selectedItem ? "active" : ""
          }
          }`}
          onClick={() => onSelect(item[idKey])}>
          {item[valueKey]}
        </li>
      ))}
    </ul>
  );
};
ListGroup.defaultProps = {
  valueKey: "name",
  idKey: "_id",
};

export default ListGroup;
