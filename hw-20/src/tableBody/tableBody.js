import React from "react";
import Cell from "../cell";

class TableBody extends React.Component {
  constructor({ props }) {
    super(props);
  }

  showData(data) {
    return data;
  }

  render() {
    return (
      <tr className="border-b">
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
          {this.props.id}
        </td>
        <Cell data={this.showData(this.props.itemName)} />
        <Cell data={this.props.description} />
        <Cell data={this.props.price} />
        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
          {this.props.createdAt}
        </td>
      </tr>
    );
  }
}
export default TableBody;
