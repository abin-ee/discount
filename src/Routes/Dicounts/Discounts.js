import React, { useState } from "react";
import RightSection from "./childrens/RightSection";
import LeftSection from "./childrens/LeftSection";
import "./index.css";
import CustomModal from "../../Components/Modal/Modal";
import { getModalLabel } from "./helpers";
import ModalContent from "./childrens/ModalContent";
import { DEFAULT_TEMPLATE } from "./constants";

export default function Discounts(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDiscount, setSelectedDiscount] = useState({});
  const [fromAddManual, setFromAddManual] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleModalCancel = () => {
    setSelectedDiscount({});
    setIsModalOpen(false);
    setFromAddManual(false);
  };

  const handleSave = () => {
    props.onUpdateData({ add: fromAddManual, data: selectedDiscount });
    handleModalCancel();
  };

  const onChangeFormField = (value, field) => {
    let data = { ...selectedDiscount };
    if (field === "discountType") {
      data.discountData = 50;
    }
    if (field === "oneTime" && value) {
      data.duration = 0;
    }
    data[field] = value;
    setSelectedDiscount(data);
  };

  const clickDeleteModal = (record) => {
    setSelectedDiscount(record);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = ()=>{
    props.onUpdateData({ delete: true, data: selectedDiscount });
    setSelectedDiscount({});
    setIsDeleteModalOpen(false);

  }

  const cancelDeleteModal = () => {
    setSelectedDiscount({});
    setIsDeleteModalOpen(false);
  };

  const getFooterData = () => {
    return (
      <div className={`modal-footer ${fromAddManual ? "display-content" : ""}`}>
        <button
          type="button"
          class="btn btn-light margin-right"
          onClick={() => handleModalCancel()}
        >
          Cancel
        </button>
        <button type="button" class="btn btn-primary" onClick={handleSave}>
          {fromAddManual ? "Add" : "Save"}
        </button>
      </div>
    );
  };

  const getModalContent = () => {
    return (
      <CustomModal
        fromAddManual={fromAddManual}
        content={
          <ModalContent
            data={selectedDiscount}
            onChangeFormField={onChangeFormField}
          />
        }
        title={getModalLabel(selectedDiscount)}
        visible={isModalOpen}
        handleCancel={() => handleModalCancel()}
        footer={getFooterData()}
      />
    );
  };

  const getDeleteModalFooter = () => {
    return (
      <div>
        <button type="button" class="btn btn-danger" onClick={confirmDelete}>
          Delete Discount
        </button>
      </div>
    );
  };

  const getDeleteModal = () => {
    return (
      <CustomModal
        content={<span className="delete-content">Are you sure want to delete this discount</span>}
        title={<h5 className="modal-title-label">Delete discount</h5>}
        visible={isDeleteModalOpen}
        handleCancel={() => cancelDeleteModal()}
        footer={getDeleteModalFooter()}
      />
    );
  };

  return (
    <>
      {getModalContent()}
      {getDeleteModal()}
      <div className="discount-section">
        <button type="button" class="btn btn-secondary button-section">
          Previous
        </button>
        <div className="content-section">
          <div className="left-section">
            <LeftSection
              clickDeleteModal={clickDeleteModal}
              setIsModalOpen={(value, fromAddButton, data) => {
                setIsModalOpen(value);
                setFromAddManual(fromAddButton);
                if (fromAddButton) {
                  setSelectedDiscount(DEFAULT_TEMPLATE);
                } else {
                  setSelectedDiscount(data);
                }
              }}
            />
          </div>
          <div className="right-section">
            <RightSection />
          </div>
        </div>
      </div>
    </>
  );
}
