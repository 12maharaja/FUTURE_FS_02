import React from "react";
import ProductCards from "./homepage/ProductCards";
import jersey from "../images/jersey.jpeg";
import boot from "../images/boot.jpeg";
import bat from "../images/tbat.jpeg";
import vball from "../images/vball.jpeg";
import chelmet from "../images/chelmat.jpg";
import dumble20 from "../images/dumble20.jpeg";
import barble from "../images/barble.jpeg";
import treadmill from "../images/treadmill.jpeg";
import bench from "../images/bench.jpeg";
import gset from "../images/gymset.jpeg";
import protien from "../images/protien.webp";
import creatien from "../images/creatien.jpeg";
import mass from "../images/mass.jpeg";
import fish from "../images/fish.jpeg";
import zinc from "../images/zinc.jpeg";



function ProductList() {
  const Products = [
    { id: 1, name: "Jersey", price: "299.Rs", image: jersey,description: "Intermilan clube jersey and High quality sports jerse..." },
    { id: 2, name: "Boot", price: "299.Rs", image: boot,description: "Durable football boots with great grip and feel comfort." },
    { id: 3, name: "Tennis Racket", price: "299.Rs", image: bat,description: "Protective helmet for cricket players with metal..." },
    { id: 4, name: "Volley Ball", price: "299.Rs", image: vball,description: "Official size volleyball for matches and premium..." },
    { id: 5, name: "Cricket Helmet", price: "299.Rs", image: chelmet,description: "MASURI Protective helmet for cricket players..." },
    { id: 6, name: "Dumbbell", price: "299.Rs", image: dumble20,description: "20kg metal dumbbell for weight training with crip." },
    { id: 7, name: "Barbell", price: "299.Rs", image: barble,description: "Sturdy barbell for heavy lifts with metal plates and quality." },
    { id: 8, name: "Treadmill", price: "299.Rs", image: treadmill,description: "Electric treadmill for home gym with multiple ..." },
    { id: 9, name: "Gym Bench", price: "299.Rs", image: bench,description: "Adjustable gym bench for workouts, quality and very..." },
    { id: 10, name: "Gym Set", price: "299.Rs", image: gset,description: "Complete home gym setup with good quality products." },
    { id: 11, name: "Protien Powder", price: "299.Rs", image: protien,description: "protein powder supplement for fitness to fast..." },
    { id: 12, name: "Creatien powder", price: "299.Rs", image: creatien, description: "Creatine for muscle growth and good mauscle..." },
    { id: 13, name: "Mass Gainer", price: "299.Rs", image: mass,description: "Mass Weight gainer supplement with good quality." },
    { id: 14, name: "Omega 3", price: "299.Rs", image: fish, description: "Omega 3 Fish oil capsules for health and high quality." },
    { id: 15, name: "Zinc", price: "299.Rs", image: zinc,description: "Zinc supplement for immunity booster with good result." },
  ];

  const productItems = Products.map((product) => (
    <ProductCards key={product.id} id={product.id} name={product.name} image={product.image} description={product.description}/>
  ));

  return <>{productItems}</>;
}

export default ProductList;
