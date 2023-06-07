import React from "react";
import "./index.css";
import { Table } from "antd";
import { TABLE_COLUMN } from "./constants";

export default function LeftSection(props) {
  const getTableProps = () => {
    return {
      onChangeLabel: (record, value) =>
        props.onChangeLabel({ data: record, value }),
      setIsModalOpen: (record) => props.setIsModalOpen(true, false, record),
      clickDeleteModal: (record) => props.clickDeleteModal(record),
      onChangeActiveStatus: (data) =>
        props.onChangeActiveStatus({ on: data.on, data: data.record }),
    };
  };

  const getTableContent = () => {
    return (
      <div>
        <Table
          pagination={false}
          dataSource={props.discountData.data}
          columns={TABLE_COLUMN(getTableProps())}
        />
      </div>
    );
  };

  const getFooter = () => {
    return (
      <div className="main-footer">
        <div className="button-space">
          <button type="button" class="btn btn-light">
            Previous
          </button>
          <button type="button" class="btn btn-primary">
            Next
          </button>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="table-heading">Discounts</div>
      <div className="manual-add-button">
        <span
          className="manual-button-label"
          onClick={() => props.setIsModalOpen(true, true)}
        >
          + Add manual discount
        </span>
      </div>
      {getTableContent()}
      {getFooter()}
      <div className="label-space">
        <span className="footer-label"> Klantegegevens</span>
        <span className="footer-label"> Productgegevens</span>
        <span className="footer-label"> Checkout</span>
      </div>
    </div>
  );
}
