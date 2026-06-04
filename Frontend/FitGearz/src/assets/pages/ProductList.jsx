import React from "react";
import ProductCards from "./homepage/ProductCards";

import jersey from "../images/jersey.jpeg";
import boot from "../images/boot.jpeg";
import bat from "../images/tbat.jpeg";
import vball from "../images/vball.jpeg";
import chelmat from "../images/chelmat.webp";
import dumble20 from "../images/dumble20.jpeg";
import barble from "../images/barble.jpeg";
import treadmill from "../images/treadmill.jpeg";
import bench from "../images/bench.jpeg";
import gymset from "../images/gymset.jpeg";
import protien from "../images/protien.webp";
import creatien from "../images/creatien.jpeg";
import mass from "../images/mass.jpeg";
import fish from "../images/fish.jpeg";
import zinc from "../images/zinc.jpeg";

function ProductList() {
  const products = [
    {
      id: 1,
      name: "Jersey",
      image: jersey,
      description: "Sports jersey...",
    },
    {
      id: 2,
      name: "Boot",
      image: boot,
      description: "Football boots...",
    },
    {
      id: 3,
      name: "Tennis Racket",
      image: bat,
      description: "Tennis racket...",
    },
    {
      id: 4,
      name: "Volley Ball",
      image: vball,
      description: "Volleyball...",
    },
    {
      id: 5,
      name: "Cricket Helmet",
      image: chelmat,
      description: "Cricket helmet...",
    },
    {
      id: 6,
      name: "Dumbbell",
      image: dumble20,
      description: "Dumbbell...",
    },
    {
      id: 7,
      name: "Barbell",
      image: barble,
      description: "Barbell...",
    },
    {
      id: 8,
      name: "Treadmill",
      image: treadmill,
      description: "Treadmill...",
    },
    {
      id: 9,
      name: "Gym Bench",
      image: bench,
      description: "Gym bench...",
    },
    {
      id: 10,
      name: "Gym Set",
      image: gymset,
      description: "Gym set...",
    },
    {
      id: 11,
      name: "Protein Powder",
      image: protien,
      description: "Protein...",
    },
    {
      id: 12,
      name: "Creatine",
      image: creatien,
      description: "Creatine...",
    },
    {
      id: 13,
      name: "Mass Gainer",
      image: mass,
      description: "Mass gainer...",
    },
    {
      id: 14,
      name: "Omega 3",
      image: fish,
      description: "Omega 3...",
    },
    {
      id: 15,
      name: "Zinc",
      image: zinc,
      description: "Zinc...",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        justifyContent: "center",
      }}
    >
      {products.map((p) => (
        <ProductCards
          key={p.id}
          id={p.id}
          name={p.name}
          image={p.image}
          description={p.description}
        />
      ))}
    </div>
  );
}

export default ProductList;
