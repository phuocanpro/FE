import { css } from '@emotion/core';

export const cartStyle = css`
 .cart {
    display: flex;
    flex-direction: column;
    align-items: center;
 }

 .cart-items {
    display: flex;
    flex-direction: column;
    width: 100%;
 }

 .cart-item {
    display: flex;
    flex-direction: column;
    width: 100%;
    border-bottom: 1px solid #ccc;
    padding: 10px 0;
 }

 .total {
    width: 100%;
    margin-top: 20px;
 }

 .checkout {
    width: 100%;
    margin-top: 20px;
 }

 form {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 300px;
 }

 input {
    flex: 1;
    padding: 10px;
    border: 1px solid #ccc;
    margin-right: 10px;
 }

 button {
    background-color: #007bff;
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
 }
`;