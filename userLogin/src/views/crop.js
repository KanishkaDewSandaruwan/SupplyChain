import Axios from 'axios';
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import React, { useEffect, useState } from "react";
import { Button, Form, Input, Select, Space, Table, Tag } from 'antd';
import { Option } from 'antd/es/mentions';

export default function Index() {

    const [form] = Form.useForm();

    const [requiredMark, setRequiredMarkType] = useState('optional');
    const onRequiredTypeChange = ({ requiredMarkValue }) => {
        setRequiredMarkType(requiredMarkValue);
    };

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Tags',
            key: 'tags',
            dataIndex: 'tags',
            render: (_, { tags }) => (
                <>
                    {tags.map((tag) => {
                        let color = tag.length > 5 ? 'geekblue' : 'green';
                        if (tag === 'loser') {
                            color = 'volcano';
                        }
                        return (
                            <Tag color={color} key={tag}>
                                {tag.toUpperCase()}
                            </Tag>
                        );
                    })}
                </>
            ),
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <a>Invite {record.name}</a>
                    <a>Delete</a>
                </Space>
            ),
        },
    ];
    const data = [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
        },
        {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: ['loser'],
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
        },
    ];


    const onFinish = () => {
        window.location.href = `details/:${12}`;
    }

    return (
        <>
            <IndexNavbar fixed />
            <section className="mt-48 md:mt-40 pb-40 relative">
                <div className="container mx-auto">
                    <div className="flex flex-wrap items-center">
                        <div className="container px-4 mx-auto">
                            <div className="wrap-title">
                                <h1 className="title">
                                    Prepare Cut
                                </h1>
                            </div>
                        </div>

                        <div className="w-full md:w-12/12 table-wrap">
                            <div>
                                <Form
                                    form={form}
                                    layout="vertical"
                                    initialValues={{
                                        requiredMarkValue: requiredMark,
                                    }}
                                    className="crop-form"
                                    onValuesChange={onRequiredTypeChange}
                                    requiredMark={requiredMark}
                                    onFinish={onFinish}
                                >

                                    <Form.Item
                                        name="crop_name"
                                        label="Crop Name"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please enter Crop!',
                                            },
                                        ]}
                                    >
                                        <Input className='fields' />
                                    </Form.Item>

                                    <Form.Item
                                        name="soill_type"
                                        label="Soil Type"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please Select Soil Type!',
                                            },
                                        ]}
                                    >
                                        <Select placeholder="Select the Soil Type">
                                            <Option value="1">Loamy</Option>
                                            <Option value="2">Clay</Option>
                                            <Option value="3">Peaty</Option>
                                            <Option value="4">Silty</Option>
                                            <Option value="5">Other</Option>
                                        </Select>
                                    </Form.Item>
                                    <Form.Item className='wrap_button'>
                                        <Button type="primary" htmlType="submit">
                                            Submit
                                        </Button>
                                    </Form.Item>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </>
    );
}
