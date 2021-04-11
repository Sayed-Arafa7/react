import React, { Component } from "react";
import Cart from "./cart";
import Filter from "./filter";
import Pagination from "./pagination";

class Menu extends Component {
  render() {
    // Filter
    let filteredProducts = this.props.filteredSearch;
    if (this.props.activeFilter)
      filteredProducts = this.props.filteredSearch.filter(
        (p) => p.type === this.props.activeFilter
      );
    // Pagination
    const { activePage, pageSize } = this.props;
    let start = (activePage - 1) * pageSize;
    let end = start + pageSize;
    let showedProducts = filteredProducts.slice(start, end);
    return (
      <>
        <div className="container p-3 d-flex align-items-center justify-content-center">
          <div className="input-group rounded w-50">
            <input
              type="search"
              className="form-control rounded"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-addon"
              ref="searchWord"
              onChange={(event) => this.props.handleSearch(event.target.value)}
            />
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-3">
            <Filter
              types={this.props.types}
              activeFilter={this.props.activeFilter}
              onActiveFilterChange={this.props.onActiveFilterChange}
            />
          </div>
          <div className="col">
            <table className="table">
              <thead>
                <tr key="haeding">
                  <th>
                    Name{" "}
                    <span
                      onClick={() => this.props.onSort("name")}
                      style={{ cursor: "pointer" }}
                    >
                      <i
                        className={
                          (this.props.sort[0] === "des") &
                          (this.props.sort[1] === "name")
                            ? "fas fa-arrow-down"
                            : "fas fa-arrow-up"
                        }
                      ></i>
                    </span>
                  </th>
                  <th>
                    Price{" "}
                    <span
                      onClick={() => this.props.onSort("price")}
                      style={{ cursor: "pointer" }}
                    >
                      <i
                        className={
                          (this.props.sort[0] === "des") &
                          (this.props.sort[1] === "price")
                            ? "fas fa-arrow-down"
                            : "fas fa-arrow-up"
                        }
                      ></i>
                    </span>
                  </th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {showedProducts.map((prdct) => (
                  <tr key={prdct.id}>
                    <td>{prdct.name}</td>
                    <td>{prdct.price}</td>
                    <td style={{ cursor: "pointer" }}>
                      <Cart
                        product={prdct}
                        onToggleInCart={this.props.onToggleInCart}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination */}
            {filteredProducts.length >= this.props.pageSize && (
              <Pagination
                pageSize={this.props.pageSize}
                activePage={this.props.activePage}
                count={filteredProducts.length}
                onActivePageChange={this.props.onActivePageChange}
              />
            )}
          </div>
        </div>
      </>
    );
  }
}

export default Menu;
