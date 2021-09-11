import { Component } from "react";
import Like from "./common/like";
import { Link } from "react-router-dom";

export default class FoodsTable extends Component {
  raiseSort = (newPath) => {
    const { sortColumn, onSort } = this.props;
    const { order, path } = sortColumn;
    let newSortColumn = {
      path: newPath,
      order: path === newPath ? (order === "asc" ? "desc" : "asc") : "asc",
    };

    onSort(newSortColumn);
  };

  render() {
    const { foods, onToggleLike, onDelete, amount } = this.props;
    return (
      <>
        <p className="d-flex justify-content-between">
          <p>Bizda {amount} ta mahsulot bor</p>
          <form className="d-flex">
            <input className="form-control" type="search" placeholder="Search"/>
            <Link to='/add-food'>
              <button className="btn btn-primary ms-3">AddFood</button>
            </Link>
          </form>
        </p>
        <table className='table table-bordered text-center'>
          <thead className='bg-success text-light '>
            <tr>
              <th onClick={() => this.raiseSort("title")} className='nav-item cursor-pointer'>Title</th>
              <th onClick={() => this.raiseSort("category.name")} className="cursor-pointer">Category</th>
              <th onClick={() => this.raiseSort("price")} className="cursor-pointer">Price</th>
              <th onClick={() => this.raiseSort("amount")} className="cursor-pointer">Amount</th>
              <th onClick={() => this.raiseSort("type")} className="cursor-pointer">Type</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {foods.map(
              ({
                _id,
                title,
                category,
                price,
                amount,
                unit,
                isLike = false,
              }) => (
                <tr key={_id}>
                  <td>{title}</td>
                  <td>{category.name}</td>
                  <td>{price}</td>
                  <td>{amount}</td>
                  <td>{unit}</td>
                  <td>
                    <Like
                      onToggleLike={() => onToggleLike(_id)}
                      isLike={isLike}
                    />
                    <button
                      className='btn btn-danger m-2'
                      onClick={() => onDelete(_id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </>
    );
  }
}
