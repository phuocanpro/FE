import React, { useState } from "react";

import SliderComponent from "../../components/SliderComponent/SliderComponent";
import TypeProduct from "../../components/TypeProduct/TypeProduct";
import {
  WrapperButtonMore,
  WrapperTypeProduct,
  WrapperProducts,
  WrapperBody,
} from "./style";
import slider1 from "../../assets/images/b1.jpg";
import slider2 from "../../assets/images/b2.png";
import slider3 from "../../assets/images/b3.png";

import CardComponent from "../../components/CardComponent/CardComponent";
import NavbarComponent from "../../components/NavbarComponent/NavbarComponent";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import banner from "../../assets/images/banner.png";
import { useQuery } from "@tanstack/react-query";
import * as GameService from "../../services/GameService.js";
const HomePage = () => {
  const fetchGameAll = async () => {
    const res = await GameService.getAllGame();
    return res;
  };
  fetchGameAll();
  const { isLoading, data: games } = useQuery({
    queryKey: ["games"],
    queryFn: fetchGameAll,
    retry: 3,
    retryDelay: 1000,
  });
  console.log("game", games);
  return (
    <>
      <div>
        <div style={{ textAlign: "center" }}></div>
        <div
          style={{
            margin: "0 auto",
            height: "1000px",
            width: "1270px",
          }}
        >
          <SliderComponent arrImages={[slider1, slider2, slider3]} />
          <WrapperProducts>
            {games?.data?.map((game) => {
              return (
                <CardComponent
                  key={game._id}
                  image={game.image}
                  name={game.name}
                  price={game.price}
                  type={game.type}
                  rating={game.rating}
                  platform={game.platform}
                  description={game.description}
                />
              );
            })}
          </WrapperProducts>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              background: "hsla(240, 63%, 13%, 1)",
            }}
          >
            <WrapperButtonMore
              textButton="Next"
              type="outline"
              styleButton={{
                border: "1px solid rgb(11,116,229)",
                color: "hsla(267, 100%, 63%, 0.3)",
                width: "240px",
                height: "38px",
                borderRadius: "4px",
              }}
              styleTextButton={{ fontWeight: 500 }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
