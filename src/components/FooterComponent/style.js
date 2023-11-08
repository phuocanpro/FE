import { Row } from "antd";
import styled from "styled-components";

// Footer
export const WrapperFooter = styled(Row)`
  width: 1270px;
  background-color: hsla(240, 63%, 13%, 1);
  align-items: center;
  gap: 16px;
  flex-wrap: nowrap;
`;

//Text Logo Header
export const WrapperTextHeader = styled.span`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
  text-align: left;
`;

// Account Header
export const WrapperHeaderAccount = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  gap: 10px;
  font-size: 12px;
`;

//Text Header
export const WrapperTextHeaderSmall = styled.span`
  font-size: 12px;
  color: #fff;
  white-space: nowrap;
`;
