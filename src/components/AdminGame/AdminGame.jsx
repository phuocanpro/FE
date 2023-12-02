import React, { useEffect, useState } from "react";
import { WrapperHeader, WrapperUploadFile } from "./style";
import { Button, Form, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import TableComponent from "../TableComponent/TableComponent";

import InputComponent from "../InputComponent/InputComponent";
import { getBase64 } from "../../utils";
import * as GameService from "../../services/GameService.js";
import { useMutationHooks } from "../../hooks/userMutationHook.js";
import Loading from "../LoadingComponent/Loading";
import * as message from "../../components/Message/Message.js";
import { useQuery } from "@tanstack/react-query";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import DrawerComponent from "../DrawerComponent/DrawerComponent";
import { useSelector } from "react-redux";
const AdminGame = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const [rowSelected, setRowSelected] = useState("");
  const [isLoadingUpdate, setIsLoadingUpdate] = useState(false);
  const user = useSelector((state) => state?.user);

  const [stateGame, setStateGame] = useState({
    name: "",
    type: "",
    price: "",
    platform: "",
    rating: "",
    description: "",
    discount: "",
    selled: "",
    image: "",
  });
  const [stateGameDetails, setStateGameDetails] = useState({
    name: "",
    type: "",
    price: "",
    platform: "",
    rating: "",
    description: "",
    discount: "",
    selled: "",
    image: "",
  });

  const [form] = Form.useForm();

  const mutation = useMutationHooks((data) => GameService.createGame(data));
  const { data, isLoading, isSuccess, isError } = mutation;

  const onUpdateGame = () => {
    mutationUpdate.mutate({
      id: rowSelected,
      token: user?.access_token,
      stateGameDetails,
    });
    console.log("stateGameDetails", stateGameDetails);
  };

  const mutationUpdate = useMutationHooks(async (data) => {
    const { id, token, ...rests } = data;
    const res = await GameService.updateGame(id, token, rests);
    return res;
  });

  const {
    data: dataUpdated,
    isLoading: isLoadingUpdated,
    isSuccess: isSuccessUpdated,
    isError: isErrorUpdated,
  } = mutationUpdate;

  console.log("dataUpdated", dataUpdated);

  const getAllGames = async () => {
    const res = await GameService.getAllGame();
    return res;
  };

  const fetchGetDetailsGame = async () => {
    const res = await GameService.getDetailsGame(rowSelected);
    if (res?.data) {
      setStateGameDetails({
        name: res?.data?.name,
        type: res?.data?.type,
        price: res?.data?.price,
        platform: res?.data?.platform,
        rating: res?.data?.rating,
        description: res?.data?.description,
        discount: res?.data?.discount,
        selled: res?.data?.selled,
        image: res?.data?.image,
      });
    }
    // setIsLoadingUpdate(false);
  };
  useEffect(() => {
    form.setFieldsValue(stateGameDetails);
  }, [form, stateGameDetails]);

  useEffect(() => {
    if (rowSelected) {
      fetchGetDetailsGame(rowSelected);
    }
    // setIsOpenDrawer(true);
  }, [rowSelected]);

  const renderAction = () => {
    return (
      <div>
        <DeleteOutlined
          style={{ color: "red", fontSize: "30px", cursor: "pointer" }}
        />
        <EditOutlined
          style={{ color: "orange", fontSize: "30px", cursor: "pointer" }}
          onClick={handleDetailsGames}
        />
      </div>
    );
  };
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Price",
      dataIndex: "price",
    },
    {
      title: "Rating",
      dataIndex: "rating",
    },
    {
      title: "Type",
      dataIndex: "type",
    },
    {
      title: "Action",
      dataIndex: "action",
      render: renderAction,
    },
  ];

  const { isLoading: isLoadingGames, data: games } = useQuery({
    queryKey: ["games"],
    queryFn: getAllGames,
  });

  const dataTable =
    games?.data?.length &&
    games?.data?.map((game) => {
      return { ...game, key: game._id };
    });

  useEffect(() => {
    if (isSuccess && data?.status === "OK") {
      message.success();
      handleCancel();
    } else if (isError) {
      message.error();
    }
  }, [isSuccess, isError]);

  const handleCloseDrawer = () => {
    setIsOpenDrawer(false);
    setStateGameDetails({
      name: "",
      type: "",
      price: "",
      platform: "",
      rating: "",
      description: "",
      discount: "",
      selled: "",
      image: "",
    });
    form.resetFields();
  };

  useEffect(() => {
    if (isSuccessUpdated && dataUpdated?.status === "OK") {
      message.success();
      handleCloseDrawer();
    } else if (isErrorUpdated) {
      message.error();
    }
  }, [isSuccessUpdated, isErrorUpdated]);

  const handleDetailsGames = () => {
    if (rowSelected) {
      // setIsLoadingUpdate(true);
      fetchGetDetailsGame(rowSelected);
    }
    setIsOpenDrawer(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setStateGame({
      name: "",
      type: "",
      price: "",
      platform: "",
      rating: "",
      description: "",
      discount: "",
      selled: "",
      image: "",
    });
    form.resetFields();
  };

  const onFinish = () => {
    mutation.mutate(stateGame);
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

  const handleOnchangeDetails = (e) => {
    console.log("check", e.target.name, e.target.value);
    setStateGameDetails({
      ...stateGameDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnchangeAvatarDetails = async ({ fileList }) => {
    const file = fileList[0];
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    console.log("file", file.preview);
    setStateGameDetails({
      ...stateGameDetails,
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
        <TableComponent
          columns={columns}
          isLoading={isLoadingGames}
          data={dataTable}
          onRow={(record, rowIndex) => {
            return {
              onClick: (event) => {
                setRowSelected(record._id);
              },
            };
          }}
        />
      </div>
      <Modal
        title="Add New Game"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        {" "}
        <Form
          name="basic"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 18 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="on"
          form={form}
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
          <Form.Item
            label="Image"
            name="Image"
            rules={[{ required: true, message: "Please input image!" }]}
          >
            <WrapperUploadFile onChange={handleOnchangeAvatar} maxCount={1}>
              <Button type="button">Select File</Button>
              {stateGame?.image && (
                <img
                  src={stateGame?.image}
                  style={{
                    height: "60px",
                    width: "60px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    marginLeft: "10px",
                  }}
                  alt="game"
                />
              )}
            </WrapperUploadFile>
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 20, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
      <DrawerComponent
        title="Details Game"
        isOpen={isOpenDrawer}
        onClose={() => setIsOpenDrawer(false)}
        width="90%"
      >
        <Form
          name="basic"
          labelCol={{ span: 2 }}
          wrapperCol={{ span: 22 }}
          onFinish={onUpdateGame}
          autoComplete="on"
          form={form}
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input name game!" }]}
          >
            <InputComponent
              value={stateGameDetails.name}
              onChange={handleOnchangeDetails}
              name="name"
            />
          </Form.Item>

          <Form.Item
            label="Type"
            name="type"
            rules={[{ required: true, message: "Please input type game!" }]}
          >
            <InputComponent
              value={stateGameDetails.type}
              onChange={handleOnchangeDetails}
              name="type"
            />
          </Form.Item>
          <Form.Item
            label="Price"
            name="price"
            rules={[{ required: true, message: "Please input price game!" }]}
          >
            <InputComponent
              value={stateGameDetails.price}
              onChange={handleOnchangeDetails}
              name="price"
            />
          </Form.Item>
          <Form.Item
            label="Platform"
            name="platform"
            rules={[{ required: true, message: "Please input platform game!" }]}
          >
            <InputComponent
              value={stateGameDetails.platform}
              onChange={handleOnchangeDetails}
              name="platform"
            />
          </Form.Item>
          <Form.Item
            label="Rating"
            name="rating"
            rules={[{ required: true, message: "Please input rating game!" }]}
          >
            <InputComponent
              value={stateGameDetails.rating}
              onChange={handleOnchangeDetails}
              name="rating"
            />
          </Form.Item>
          <Form.Item
            label="Discount"
            name="discount"
            rules={[{ required: true, message: "Please input discount!" }]}
          >
            <InputComponent
              value={stateGameDetails.discount}
              onChange={handleOnchangeDetails}
              name="discount"
            />
          </Form.Item>
          <Form.Item
            label="Selled"
            name="selled"
            rules={[{ required: true, message: "Please input selled!" }]}
          >
            <InputComponent
              value={stateGameDetails.selled}
              onChange={handleOnchangeDetails}
              name="selled"
            />
          </Form.Item>
          <Form.Item
            label="Description"
            name="description"
            rules={[{ required: true, message: "Please input description!" }]}
          >
            <InputComponent
              value={stateGameDetails.description}
              onChange={handleOnchangeDetails}
              name="description"
            />
          </Form.Item>
          <Form.Item
            label="Image"
            name="image"
            rules={[{ required: true, message: "Please input image!" }]}
          >
            <WrapperUploadFile
              onChange={handleOnchangeAvatarDetails}
              maxCount={1}
            >
              <Button type="button">Select File</Button>
              {stateGameDetails?.image && (
                <img
                  src={stateGameDetails?.image}
                  style={{
                    height: "60px",
                    width: "60px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    marginLeft: "10px",
                  }}
                  alt="game"
                />
              )}
            </WrapperUploadFile>
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 20, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </DrawerComponent>
    </div>
  );
};

export default AdminGame;
