import React from "react";
import TableBody from "../tableBody";
import products from "../products/products.json";
//import Modal from "../modal/Modal";

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products
    };
  }

  tableBody = products.map((item) => {
    return (
      <TableBody
        id={item.id}
        itemName={item.name}
        description={item.description}
        price={item.price}
        createdAt={item.createdAt}
      />
    );
  });

  handleChange({ id, fieldName, value }) {
    this.setState({
      products: this.state.data.map((item) => {
        if (item.id === id) {
          item[fieldName] = value;
        }
        return item;
      })
    });
  }
  render() {
    return (
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="border-b">
                  <tr>
                    <th
                      scope="col"
                      class="text-lg font-medium text-gray-900 px-6 py-4 text-center"
                    >
                      ID
                    </th>
                    <th
                      scope="col"
                      class="text-lg font-medium text-gray-900 px-6 py-4 text-center"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      class="text-lg font-medium text-gray-900 px-6 py-4 text-center"
                    >
                      Description
                    </th>
                    <th
                      scope="col"
                      class="text-lg font-medium text-gray-900 px-6 py-4 text-center"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      class="text-lg font-medium text-gray-900 px-6 py-4 text-center"
                    >
                      Created At
                    </th>
                  </tr>
                </thead>
                <tbody>{this.tableBody}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Table;
