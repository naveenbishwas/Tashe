"use client";

import React, { useState } from "react";
import "./product.css";
import Image from "next/image";
import { useEffect } from "react";
import image1 from "/public/image1.jpg";
import image2 from "/public/image2.jpg";
import image3 from "/public/image3.jpg";
import image4 from "/public/image4.jpg";

const page = () => {
  const [selectImage, setSelectImage] = useState(1);
  const [allImages, setAllImages] = useState([image1, image2, image3, image4]);

  useEffect(() => {
    const interval = 5000;
    const valueDisplays = document.querySelectorAll(".num");

    valueDisplays.forEach((valueDisplay) => {
      const endValue = parseInt(valueDisplay.getAttribute("data-val"));
      const duration = Math.floor(interval / endValue);
      let startValue = 0;

      const counter = setInterval(() => {
        startValue += 1;
        valueDisplay.textContent = startValue.toLocaleString();

        if (startValue === endValue) {
          clearInterval(counter);
        }
      }, duration);

      return () => clearInterval(counter);
    });
  }, []);
  return (
    <div className="main-container">
      <header>
        <div className="logo">
          <Image
            src={"/tashe5.png"}
            alt="logo"
            width={100}
            height={80}
            unoptimized
          ></Image>
        </div>
        <input type="checkbox" name="" id="check" />
        <label htmlFor="check" className="checkbtn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
            />
          </svg>
        </label>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Product</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
            <li>
              <a href="#">Infrastructure</a>
            </li>
          </ul>
        </nav>
      </header>

      <section className="product-page-banner">
        <div className="product-page-left">
          <Image
            src={allImages[selectImage]}
            alt="slider-images"
            width={500}
            height={400}
            unoptimized
          ></Image>
          <button onClick={() => {}}>Next</button>
        </div>
        <div className="product-page-right">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum
            placeat quaerat illum facilis cupiditate quo suscipit recusandae
            fugiat perferendis quisquam iste similique possimus quasi, eum
            praesentium eaque beatae cumque! Obcaecati! Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Consequuntur quas impedit debitis
            quisquam, officia et animi illo explicabo ab rem necessitatibus
            omnis architecto ut fugiat vel inventore maxime tempore cupiditate?
          </p>
        </div>
      </section>
    </div>
  );
};

export default page;
