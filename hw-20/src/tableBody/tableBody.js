import React from "react";
import Modal from "../modal/Modal";

class TableBody extends React.Component {
  constructor({ props }) {
    super(props);
    this.state = {
      showModal: false
    };
  }
  showTheModal() {
    console.log(this.state.showModal);
    this.setState({ showModal: true });
  }
  hideTheModal() {
    this.setState({ showModal: false });
  }
  render() {
    return (
      <tr className="border-b">
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
          {this.props.id}
        </td>
        <td
          className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
          onDoubleClick={this.showTheModal}
        >
          {this.props.itemName}
        </td>
        <td
          className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
          onDoubleClick={this.showTheModal}
        >
          {this.props.description}
        </td>
        <td
          className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
          onDoubleClick={this.showTheModal}
        >
          {this.props.price}
        </td>
        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
          {this.props.createdAt}
        </td>
      </tr>
    );
  }
}
export default TableBody;
