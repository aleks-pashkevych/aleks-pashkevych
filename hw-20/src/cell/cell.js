import { useState } from "react";
import Modal from "../modal/Modal";

function Cell({ data }) {
  const [openModal, setOpenModal] = useState(false);
  const [cellData, setCellData] = useState(data);
  return (
    <td
      className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
      onDoubleClick={() => {
        setOpenModal(true);
      }}
    >
      {cellData}
      {openModal && <Modal closeModal={setOpenModal} data={setCellData} />}
    </td>
  );
}

export default Cell;
