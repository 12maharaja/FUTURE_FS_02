import React from "react";
import { useParams, useNavigate } from "react-router-dom";
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

function ProductDetailsPage({ addToCart }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "Jersey",
      price: 299,
      image: jersey,
      description:
        "Intermilan clube jersey and High quality sports jersey for comfort.",
    },
    {
      id: 2,
      name: "Boot",
      price: 499,
      image: boot,
      description: "Durable football boots with great grip and feel comfort.",
    },
    {
      id: 3,
      name: "Tennis Racket",
      price: 799,
      image: bat,
      description: "Protective helmet for cricket players with metal goated.",
    },
    {
      id: 4,
      name: "Volley Ball",
      price: 299,
      image: vball,
      description: "Official size volleyball for matches and primeum quality.",
    },
    {
      id: 5,
      name: "Cricket Helmet",
      price: 999,
      image: chelmet,
      description:
        "MASURI Protective helmet for cricket players with pvc plastic goated.",
    },
    {
      id: 6,
      name: "Dumbbell",
      price: 599,
      image: dumble20,
      description: "20kg metal dumbbell for weight training with crip.",
    },
    {
      id: 7,
      name: "Barbell",
      price: 1499,
      image: barble,
      description: "Sturdy barbell for heavy lifts with metal plates.",
    },
    {
      id: 8,
      name: "Treadmill",
      price: 9999,
      image: treadmill,
      description: "Electric treadmill for home gym with multiple features.",
    },
    {
      id: 9,
      name: "Gym Bench",
      price: 1999,
      image: bench,
      description:
        "Adjustable gym bench for workouts, quality and very comfortable .",
    },
    {
      id: 10,
      name: "Gym Set",
      price: 4999,
      image: gset,
      description: "Complete home gym setup with good quality products.",
    },
    {
      id: 11,
      name: "Protein Powder",
      price: 1499,
      image: protien,
      description: "Protein powder supplement for fitness to fast weight gain.",
    },
    {
      id: 12,
      name: "Creatine Powder",
      price: 999,
      image: creatien,
      description: "Creatine for muscle growth and good muscle efficiency.",
    },
    {
      id: 13,
      name: "Mass Gainer",
      price: 1999,
      image: mass,
      description: "Mass Weight gainer supplement with good quality.",
    },
    {
      id: 14,
      name: "Omega 3",
      price: 599,
      image: fish,
      description: "Omega 3 Fish oil capsules for health and high quality.",
    },
    {
      id: 15,
      name: "Zinc",
      price: 299,
      image: zinc,
      description: "Zinc supplement for immunity booster with good result.",
    },
  ];

  const product = products.find((p) => p.id === parseInt(id));
  if (!product) return <h2 className="pd-notfound">Product not found</h2>;

  // ✅ Add to Cart → store only
  const handleAddToCart = () => {
    addToCart(product);
    alert(`${product.name} added to cart ✅`);
  };

  // ✅ Buy Now → store + go to cart
  const handleBuyNow = () => {
    addToCart(product);
    navigate("/cart");
  };

  return (
    <div className="pd-wrapper">
      <div className="pd-card">
        <div className="pd-image-wrap">
          <img src={product.image} alt={product.name} className="pd-image" />
        </div>
        <div className="pd-info">
          <h1 className="pd-title">{product.name}</h1>
          <p className="descript">{product.description}</p>
          <div className="pd-price-row">
            <span className="pd-price">₹{product.price}</span>
          </div>
          <div className="button-group">
            <button
              type="button"
              className="btn btn-outline-warning"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
            <button
              type="button"
              className="btn btn-warning"
              onClick={handleBuyNow}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
