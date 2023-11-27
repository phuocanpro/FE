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
  const uniqueTypes = Array.from(
    new Set(games?.data?.map((game) => game.type))
  );
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

          {uniqueTypes.map((type) => (
            <div className="WrapperList">
              <div
                className="WrapperType"
                style={{
                  position: "absolute",
                  backgroundImage:
                    "linear-gradient(to right bottom, hsl(299, 100%, 52%), hsl(291, 100%, 58%), hsl(283, 100%, 60%), hsl(273, 100%, 62%), hsl(262, 100%, 63%), hsl(242, 100%, 69%), hsl(223, 100%, 62%), hsl(210, 100%, 50%), hsl(203, 100%, 50%), hsl(198, 100%, 50%), hsl(192, 100%, 48%), hsl(185, 90%, 48%))",
                  color: "hsla(0, 0%, 100%, 1)",
                  fontSize: "1.5rem",
                  fontWeight: "600",
                  marginTop: "20px",
                  padding: "10px",
                }}
                key={type}
              >
                {type}
              </div>
              <WrapperProducts>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    background: "hsla(240, 63%, 13%, 1)",
                  }}
                >
                  {games?.data
                    .filter((game) => game.type === type)
                    .map((game) => (
                      <CardComponent
                        key={game._id}
                        image={game.image}
                        name={game.name}
                        price={game.price}
                        type={game.type}
                        rating={game.rating}
                        platform={game.platform}
                        description={game.description}
                        discount={game.discount}
                        selled={game.selled}
                      />
                    ))}
                </div>
              </WrapperProducts>
            </div>
          ))}

          <WrapperButtonMore
            textButton="View More"
            type="outline"
            styleButton={{
              border: "1px solid rgb(11,116,229)",
              color: "#fff",
              width: "150px",
              height: "38px",
              borderRadius: "4px",
            }}
            styleTextButton={{ fontWeight: 500 }}
          />
        </div>
      </div>
    </>
  );
};

export default HomePage;
