import React, { Component } from "react";
import _ from "lodash";
import { getCategories } from "../services/fakeCategories";
import { getFoods } from "../services/fakeFoods";
import { paginate } from "../utils/paginate";
import FoodsTable from "./foods-table";
import ListGroup from "./list-group";
import Pagination from "./pagination";

class Foods extends Component {
  state = {
    foods: [],
    categories: [],
    pageSize: 3,
    currentPage: 1,
    currentCategory: "all",
    sortColumn: {
      path: "title",
      order: "asc", // "asc" || "desc"
    },
  };

  handleDelete = (selectedID) => {
    const foods = this.state.foods.filter((food) => food._id !== selectedID);
    this.setState({ foods });
  };

  handleToggleLike = (selectedID) => {
    const foods = this.state.foods;
    const index = foods.findIndex((food) => food._id === selectedID);
    const food = foods[index];
    food.isLike = !food.isLike;

    this.setState({ foods });
  };

  handleChangePage = (selectedPage) => {
    this.setState({ currentPage: selectedPage });
  };

  handleSelect = (selectedItem) => {
    this.setState({ currentCategory: selectedItem, currentPage: 1 });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  componentDidMount() {
    const foods = getFoods();
    const categories = getCategories();
    this.setState({
      foods,
      categories: [{ name: "Barchasi", _id: "all" }, ...categories],
    });
  }

  render() {
    const {
      pageSize,
      currentPage,
      foods,
      categories,
      currentCategory,
      sortColumn,
    } = this.state;
    const filtered =
      currentCategory !== "all"
        ? foods.filter((food) => food.category._id === currentCategory)
        : foods;

    const sorted = _.orderBy(filtered, sortColumn.path, sortColumn.order);

    const paginated = paginate(sorted, currentPage, pageSize);
    const amount = filtered.length;

    if (!amount) return <p>Bizda Ma'lumotlar mavjud emas</p>;

    return (
      <div className='row my-5'>
        <div className='col-3'>
          <ListGroup
            items={categories}
            selectedItem={currentCategory}
            onSelect={this.handleSelect}
          />
        </div>
        <div className='col'>
          <FoodsTable
            amount={amount}
            onDelete={this.handleDelete}
            onToggleLike={this.handleToggleLike}
            onSort={this.handleSort}
            sortColumn={sortColumn}
            foods={paginated}
          />
          <Pagination
            currentPage={currentPage}
            totalCounts={amount}
            pageSize={pageSize}
            onChangePage={this.handleChangePage}
          />
        </div>
      </div>
    );
  }
}

export default Foods;
