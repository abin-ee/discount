import React from 'react';
import { Modal } from 'antd';
import './index.css'

export default function CustomModal(props) {

    return (
        <>
            <Modal
                centered={true}
                visible={props.visible}
                title={props.title}
                okText={props.okText}
                cancelText={props.cancelText}
                onOk={props.handleOk && props.handleOk}
                onCancel={props.handleCancel && props.handleCancel}
                footer={props.footer}
            >
                {props.content}
            </Modal>
        </>
    );
};