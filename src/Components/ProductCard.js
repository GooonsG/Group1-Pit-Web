import React, { useState } from "react";
import PropTypes from "prop-types";
import lolo from "../img/lolole.avif";
import { Link } from "react-router-dom";
import ProductDetailsModal from "./ProductDetailsModal";

const ProductCard = ({ image, name, price, originalPrice, description, category}) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div
        className="group my-5 flex flex-col overflow-hidden border border-gray-200 bg-white shadow-lg rounded-lg"
        style={{
          width: "300px", // Fixed width for the card
          transition: "transform 0.3s ease",
          boxShadow: "0 4px 10px rgba(199, 25, 25, 0.1)",
          "&:hover": {
            transform: "scale(1.05)",
          },
        }}
      >
        {/* Image Section */}
        <div className="relative flex h-60 overflow-hidden" onClick={handleOpenModal}>
          <img
            className="absolute top-0 right-0 h-full w-full object-cover"
            src={image || lolo} // Use default image if no image is provided
            alt={name}
          />
        </div>

        {/* Content Section */}
        <div className="p-5">
          <Link to="#" onClick={handleOpenModal}>
            <h5 className="text-lg font-semibold text-gray-800 truncate">{name}</h5>
          </Link>
          <div className="mt-3 flex items-center justify-between">
            <p className="text-xl font-bold text-gray-900">${price}</p>
            {originalPrice && (
              <p className="text-sm text-gray-500 line-through">${originalPrice}</p>
            )}
          </div>
          <button
            className="mt-4 w-full bg-gray-900 text-white py-2 px-4 text-sm font-medium rounded-md hover:bg-gray-700 transition"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#F9BF3B",
              color: "#000000",
              "&:hover": {
                backgroundColor: "#E0AC33",
              },
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
            </svg>
            Contact Seller
          </button>
        </div>
      </div>

      {/* Product Details Modal */}
      <ProductDetailsModal
        open={modalOpen}
        onClose={handleCloseModal}
        product={{ image, name, price, originalPrice, description, category }}
      />
    </>
  );
};

ProductCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  originalPrice: PropTypes.number,
  description: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default ProductCard;