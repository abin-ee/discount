import { Checkbox, Select } from "antd";
import React from "react";
import "./index.css";

export default function ModalContent(props) {
  const getDescriptionSection = () => {
    return (
      <div class="form-group margin-top">
        <label for="exampleInputEmail1">Description</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          value={
            props.data && props.data.description ? props.data.description : null
          }
          onChange={(e) => {
            props.onChangeFormField(e.target.value, "description");
          }}
        />
      </div>
    );
  };

  const getOneTimeSection = () => {
    return (
      <div>
        <Checkbox
          className={`row-reverse checkbox-label ${
            props.data && props.data.oneTime ? "selected" : ""
          }`}
          onChange={() => {
            props.onChangeFormField(true, "oneTime");
          }}
          checked={props.data && props.data.oneTime}
        >
          <span>One time price</span>
        </Checkbox>
        <Checkbox
          className={`row-reverse checkbox-label ${
            props.data && !props.data.oneTime ? "selected" : ""
          }`}
          onChange={() => {
            props.onChangeFormField(false, "oneTime");
          }}
          checked={props.data && !props.data.oneTime}
        >
          <span>Monthly price</span>
        </Checkbox>
      </div>
    );
  };

  const getDiscountSection = () => {
    return (
      <div class="form-group margin-top">
        <label for="exampleInputEmail1">Discount</label>
        <div class="input-group mb-3">
          <div class="dropdown">
            <Select
              defaultValue={"euro"}
              value={
                props.data && props.data.discountType
                  ? props.data.discountType
                  : "euro"
              }
              onChange={(e) => {
                props.onChangeFormField(e, "discountType");
              }}
              options={[
                { value: "percentage", label: "%" },
                { value: "euro", label: "€" },
              ]}
            />
          </div>
          <input
            type="number"
            class="form-control"
            onChange={(e) => {
              props.onChangeFormField(e.target.value, "discountData");
            }}
            value={
              props.data && props.data.discountData
                ? props.data.discountData
                : null
            }
          />
        </div>
      </div>
    );
  };

  const getDurationSection = () => {
    return (
      <>
        {props.data && !props.data.oneTime && (
          <div class="form-group margin-top">
            <label for="exampleInputEmail1">Duration</label>
            <input
              type="number"
              class="form-control"
              value={
                props.data && props.data.duration ? props.data.duration : null
              }
              onChange={(e) => {
                props.onChangeFormField(e.target.value, "duration");
              }}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Number of months"
            />
          </div>
        )}
      </>
    );
  };

  const getAddContent = () => {
    return (
      <div>
        <span className="modal-content-label">
          For which price do you calculate the discount
        </span>
        {getOneTimeSection()}
        {getDiscountSection()}
        {getDescriptionSection()}
        {getDurationSection()}
      </div>
    );
  };

  return <div className="modal-main-content">{getAddContent()}</div>;
}
