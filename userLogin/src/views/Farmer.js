import Axios from 'axios';
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import React, { useEffect, useState } from "react";
import { Space, Table, Tag } from 'antd';

export default function Index() {

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

  return (
    <>
      <IndexNavbar fixed />
      <section className="mt-48 md:mt-40 pb-40 relative">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
          <div className="container px-4 mx-auto">
                <div className="wrap-title">
                  <h1 className="title">
                    Cuts List
                  </h1>
                  <a href='/farmer/new' className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                        Prepare Cut
                      </a>

                </div>
            </div>

            <div className="w-full md:w-12/12 table-wrap">
              <div>
              <Table columns={columns} dataSource={data} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
