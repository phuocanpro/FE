import { Button } from "antd";
import React from "react";

const ButtonComponent = ({
  size,
  styleButton,
  styleTextButton,
  textButton,
  disabled,
  ...rests
}) => {
  return (
    <Button
      size={size}
      // icon={<SearchOutlined style={{ color: { colorButton } }} />}
      style={{
        ...styleButton,
        background: disabled ? "#ccc" : styleButton.backgroundColor,
      }}
      {...rests}
    >
      <span style={styleTextButton}>{textButton}</span>
    </Button>
  );
};

export default ButtonComponent;
