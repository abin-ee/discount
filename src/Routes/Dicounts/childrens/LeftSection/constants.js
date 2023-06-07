import { DeleteFilled, EditFilled } from "@ant-design/icons";
import Switch from "../../../../Components/Switch";
import { Input } from "antd";

export const TABLE_COLUMN = (props) => {
  return [
    {
      title: "",
      dataIndex: "label",
      key: "label",
      render: (item, record) => (
        <span>
          <Input className="table-label" value={item}  onChange={(e)=>{props.onChangeLabel(record,e.target.value)}} bordered={false}/>
        </span>
      ),
    },
    {
      title: "",
      dataIndex: "",
      key: "",
      render: (item, record) => (
        <div>
          <EditFilled onClick={() => props.setIsModalOpen(record)} />
          <span className="table-label">{getLabel(record)}</span>
        </div>
      ),
    },
    {
      title: "",
      dataIndex: "isActive",
      key: "isActive",
      render: (item, record) => {
        return (
          <>
            {record.isManual ? (
              <div className="manual-icons">
                <EditFilled onClick={() => props.setIsModalOpen(record)} />
                <DeleteFilled onClick={() => props.clickDeleteModal(record)} />
              </div>
            ) : (
              <Switch
                checked={item}
                onChange={(e) => {
                  props.onChangeActiveStatus({
                    on: e.target.value,
                    record: record,
                  });
                }}
              />
            )}
          </>
        );
      },
    },
  ];
};

const getLabel = (record) => {
  if (record.discountType === "percentage") {
    return `- ${record.discountData.toString()} % ${
      record.oneTime
        ? "one time"
        : record.duration === 1
        ? "monthly"
        : record.duration.toString() + "months"
    }`;
  } else {
    return `- € ${record.discountData.toString()} ${
      record.oneTime
        ? "one time"
        : record.duration === 1
        ? "monthly"
        : record.duration.toString() + "months"
    }`;
  }
};
