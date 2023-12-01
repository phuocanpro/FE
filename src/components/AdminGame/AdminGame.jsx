import React, { useState } from "react";
import { WrapperHeader, WrapperUploadFile } from "./style";
import { Button, Form, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import TableComponent from "../TableComponent/TableComponent";

import InputComponent from "../InputComponent/InputComponent";
import { getBase64 } from "../../utils";
import * as GameService from "../../services/GameService.js";
import { useMutationHooks } from "../../hooks/userMutationHook.js";
import Loading from "../LoadingComponent/Loading";
const AdminGame = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [stateGame, setStateGame] = useState({
    name: "",
    type: "",
    price: "",
    platform: "",
    rating: "",
    description: "",
    discount: "",
    selled: "",
  });
  const mutation = useMutationHooks((data) => {
    const {
      name,
      type,
      price,
      platform,
      rating,
      description,
      discount,
      selled,
    } = data;
    const res = GameService.createGame(
      name,
      type,
      price,
      platform,
      rating,
      description,
      discount,
      selled
    );
    console.log("res", res);
  });

  const { data, isLoading, isSuccess, isError } = mutation;
  const [loading, setLoading] = useState(false);
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const onFinish = () => {
    setLoading(true);
    mutation.mutate(stateGame);
    console.log("finish", stateGame);
    setLoading(false);
  };
  const handleOnchange = (e) => {
    setStateGame({
      ...stateGame,
      [e.target.name]: e.target.value,
    });
  };
  const handleOnchangeAvatar = async ({ fileList }) => {
    const file = fileList[0];
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    console.log("file", file.preview);
    setStateGame({
      ...stateGame,
      image: file.preview,
    });
  };

  return (
    <div style={{ marginTop: "10px" }}>
      <WrapperHeader>Manager Games</WrapperHeader>
      <div>
        <Button
          style={{
            height: "150px",
            width: "150px",
            borderRadius: "6px",
            borderStyle: "dashed",
          }}
          onClick={() => setIsModalOpen(true)}
        >
          <PlusOutlined style={{ fontSize: "60px" }} />
        </Button>
      </div>
      <div style={{ marginTop: "20px" }}>
        <TableComponent />
      </div>
      <Modal
        title="Add New Game"
        open={isModalOpen}
        onCancel={handleCancel}
        okText=""
      >
        {" "}
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="Name"
            name="Name"
            rules={[{ required: true, message: "Please input name game!" }]}
          >
            <InputComponent
              value={stateGame.name}
              onChange={handleOnchange}
              name="name"
            />
          </Form.Item>

          <Form.Item
            label="Type"
            name="Type"
            rules={[{ required: true, message: "Please input type game!" }]}
          >
            <InputComponent
              value={stateGame.type}
              onChange={handleOnchange}
              name="type"
            />
          </Form.Item>
          <Form.Item
            label="Price"
            name="Price"
            rules={[{ required: true, message: "Please input price game!" }]}
          >
            <InputComponent
              value={stateGame.price}
              onChange={handleOnchange}
              name="price"
            />
          </Form.Item>
          <Form.Item
            label="Platform"
            name="Platform"
            rules={[{ required: true, message: "Please input platform game!" }]}
          >
            <InputComponent
              value={stateGame.platform}
              onChange={handleOnchange}
              name="platform"
            />
          </Form.Item>
          <Form.Item
            label="Rating"
            name="Rating"
            rules={[{ required: true, message: "Please input rating game!" }]}
          >
            <InputComponent
              value={stateGame.rating}
              onChange={handleOnchange}
              name="rating"
            />
          </Form.Item>
          <Form.Item
            label="Discount"
            name="Discount"
            rules={[{ required: true, message: "Please input discount!" }]}
          >
            <InputComponent
              value={stateGame.discount}
              onChange={handleOnchange}
              name="discount"
            />
          </Form.Item>
          <Form.Item
            label="Selled"
            name="Selled"
            rules={[{ required: true, message: "Please input selled!" }]}
          >
            <InputComponent
              value={stateGame.selled}
              onChange={handleOnchange}
              name="selled"
            />
          </Form.Item>
          <Form.Item
            label="Description"
            name="Description"
            rules={[{ required: true, message: "Please input description!" }]}
          >
            <InputComponent
              value={stateGame.description}
              onChange={handleOnchange}
              name="description"
            />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default AdminGame;
