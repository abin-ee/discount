import React from "react";
import charger from "../../../../images/charger.jpeg";
import "./index.css";
import { getCalculatedTotalAmount, getDiscountData, getDiscountLabel } from "./helpers";

export default function RightSection(props) {
  const getHeaderSection = () => {
    return (
      <div className="overview-header">
        <h3>Overview</h3>
        <div className="label-data-section">
          <span>Webasto Pure ll laadpaal type 2</span>
          <span>€ 1,0000,00</span>
        </div>
        <div className="label-data-section ">
          <span className="italics">Maandejikse prijis</span>
          <span>€ 10,00</span>
        </div>
        <span className="overview-header-edit">Edit</span>
      </div>
    );
  };

  const getMiddleSection = () => {
    return (
      <div className="overview-middle">
        <div className="label-data-section  bold">
          <span>Eventually per month excl.btw</span>
          <span>€ 10,00</span>
        </div>
      </div>
    );
  };

  const getFooterSection = () => {
    let discountData = getDiscountData(props.discountData.data);
    return (
      <div className="overview-footer">
        <div className="label-data-section">
          <span>Subtotal onetime costs excl.btw</span>
          <span>€ 1,0000,00</span>
        </div>
        {discountData && discountData.discountApplied && (
          <div className="label-data-section ">
            <span className="italics">{discountData.discount.label}</span>
            <span>{getDiscountLabel(discountData.discount)}</span>
          </div>
        )}
        <div className="label-data-section  bold">
          <span>Onetime costs excl. btw</span>
          <span>{getCalculatedTotalAmount(discountData.discount)}</span>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="image-section">
        <img height={80} src={charger} alt="data" />
      </div>
      {getHeaderSection()}
      {getMiddleSection()}
      {getFooterSection()}
    </>
  );
}
