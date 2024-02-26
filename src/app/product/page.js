"use client";

import { useState } from "react";
import "./product.css";
import Image from "next/image";
import { useEffect } from "react";
import image1 from "/public/image1.jpg";
import image2 from "/public/image2.jpg";
import image3 from "/public/image3.jpg";
import image4 from "/public/image4.jpg";
import { useInView } from "react-intersection-observer";

const ProductPage = () => {
  const [selectImage, setSelectImage] = useState(0);
  const [allImages, setAllImages] = useState([image1, image2, image3, image4]);
  const [showingHam, setShowingHam] = useState(true);
  const [showingCan, setShowingCan] = useState(false);
  const [showDesign, setShowDesign] = useState(true);
  const [showDiscover, setShowDiscover] = useState(false);
  const [showDispatch, setShowDispatch] = useState(false);

  const { ref: profileButton, inView: profileButtonIsVisible } = useInView({
    threshold: 0,
  });
  const [activeTab, setActiveTab] = useState(null);

  const { ref: processAnimationOne, inView: isProcessOneVis } = useInView();
  const { ref: processAnimationTwo, inView: isProcessTwoVis } = useInView();
  const { ref: processAnimationThree, inView: isProcessThreeVis } = useInView();
  const { ref: processAnimationFour, inView: isProcessFourVis } = useInView();
  const { ref: processAnimationFive, inView: isProcessFiveVis } = useInView();
  const { ref: processAnimationSix, inView: isProcessSixVis } = useInView();
  const { ref: processAnimationSeven, inView: isProcessSevenVis } = useInView();
  const { ref: processAnimationEight, inView: isProcessEightVis } = useInView();
  const { ref: processAnimationNine, inView: isProcessNineVis } = useInView();
  const { ref: processAnimationTen, inView: isProcessTenVis } = useInView();
  const { ref: processAnimationEleven, inView: isProcessElevenVis } =
    useInView();
  const { ref: processAnimationTwelve, inView: isProcessTwelveVis } =
    useInView();
  const { ref: processAnimationThirteen, inView: isProcessThirteenVis } =
    useInView();
  const { ref: processAnimationFourteen, inView: isProcessFourteenVis } =
    useInView();

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

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSelectImage((selectImage) => (selectImage < 3 ? selectImage + 1 : 0));
    }, 2000);

    return () => clearInterval(intervalId);
  }, [selectImage]);

  const showingHandler = () => {
    setShowingHam(false);
    setShowingCan(true);
  };

  const cancelHandler = () => {
    setShowingHam(true);
    setShowingCan(false);
  };

  const showDesignHandler = () => {
    setShowDiscover(false);
    setShowDesign(true);
    setShowDispatch(false);
    setActiveTab("design");
    console.log("naveen");
  };

  const showDiscoverHandler = () => {
    setShowDiscover(true);
    setShowDesign(false);
    setShowDispatch(false);
    setActiveTab("discover");
    console.log("naveen");
  };

  const showDispatchHandler = () => {
    setShowDiscover(false);
    setShowDesign(false);
    setShowDispatch(true);
    setActiveTab("dispatch");
    console.log("naveen");
  };

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
          {showingHam ? (
            <svg
              onClick={showingHandler}
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
          ) : (
            ""
          )}

          {showingCan ? (
            <svg
              onClick={cancelHandler}
              id="cancel"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-x-lg"
              viewBox="0 0 16 16"
            >
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
            </svg>
          ) : (
            ""
          )}
        </label>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="/product">Product</a>
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
        <div className="product-page-df">
          <div className="product-page-left">
            <Image
              src={allImages[selectImage]}
              alt="slider-images"
              width={500}
              height={400}
              unoptimized
            ></Image>
          </div>
          <div className="product-page-right">
            <h1>Product Description</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptatum placeat quaerat illum facilis cupiditate quo suscipit
              recusandae fugiat perferendis quisquam iste similique possimus
              quasi, eum praesentium eaque beatae cumque! Obcaecati! Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Consequuntur quas
              impedit debitis quisquam, officia et animi illo explicabo ab rem
              necessitatibus omnis architecto ut fugiat vel inventore maxime
              tempore cupiditate? fugiat perferendis quisquam iste similique
              possimus quasi, eum praesentium eaque beatae cumque! Obcaecati!
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur quas impedit debitis quisquam,
            </p>
          </div>
        </div>
      </section>

      <section className="specs-container">
        <h2>Technical Specifications</h2>

        <div className="specs-grid">
          <div className="spec-item">
            <h3>Fin Fold Length (L)</h3>
            <p>
              Minimum: 300 mm
              <br />
              Maximum: 1300 mm
            </p>
          </div>

          <div className="spec-item">
            <h3>Fin Height (H)</h3>
            <p>
              Minimum: 50 mm
              <br />
              Maximum: 400 mm
            </p>
          </div>

          <div className="spec-item">
            <h3>Pitch (P)</h3>
            <p>
              Minimum: 40 mm
              <br />
              Maximum: As per customer
            </p>
          </div>

          <div className="spec-item">
            <h3>Sheet Thickness</h3>
            <p>
              Minimum: 1 mm
              <br />
              Maximum: 1.5 mm
            </p>
          </div>

          <div className="spec-item">
            <h3>Inner Gap (IG)</h3>
            <p>
              Minimum: 6 mm
              <br />
              Maximum: As per customer
            </p>
          </div>

          <div className="spec-item">
            <h3>Edge Front/Rear (ER/EF)</h3>
            <p>10 mm</p>
          </div>

          <div className="spec-item">
            <h3>Embossing and Spot Welding</h3>
            <p>
              Length ≥ 600 mm, Height ≥ 200 mm. Positioning of embossing as per
              embossing chart.
            </p>
          </div>
        </div>
      </section>

      <section className="design-sec">
        <div className="design-top-header">
          <h1>Our 3D Model</h1>
        </div>

        <div className="three-d-models">
          <div className="models" id="design">
            <Image
              src={"/3-d2.png"}
              alt="design"
              width={100}
              height={100}
              unoptimized
            ></Image>
            <div className="model-df">
              <div className="model-left">
                <h1>Design</h1>
              </div>
              <div className="model-right">
                <li>3d modeling</li>

                <li>Design understanding and clarification</li>

                <li>
                  Finding out all possible raodblocks and amned the design and
                  hassle free production
                </li>

                <li>Project procurement planning</li>
              </div>
            </div>
          </div>

          <div className="models" id="discover">
            <Image
              src={"/discover.png"}
              alt="design"
              width={100}
              height={100}
              unoptimized
            ></Image>
            <div className="model-df">
              <div className="model-left">
                <h1>Discover</h1>
              </div>
              <div className="model-right">
                <li>Prototype is made as per 3D modelling</li>
                <li>
                  All practical problems are addressed before going for mass
                  production
                </li>
                <li>Inspection and testing as per approved/agreed methods</li>
                <li>Approve and signoff for mass production</li>
                <li>Production planning for the project</li>
              </div>
            </div>
          </div>

          <div className="models" id="delivery">
            <Image
              src={"/container.png"}
              alt="design"
              width={100}
              height={100}
              unoptimized
            ></Image>
            <div className="model-df">
              <div className="model-left">
                <h1>Delivery</h1>
              </div>
              <div className="model-right">
                <li>Mass production as per agreed plan</li>
                <li>Inspection and Testing as per prototype</li>
                <li>
                  Weekly porduction updates and sent so you can trace the stage
                  wise timeliness
                </li>
                <li>
                  Weekly trackers are sent so you can track and trace your
                  shipments/documents
                </li>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="three-d-header-name">
          <div
            className={`three-d-header ${
              activeTab === "design" ? "active" : ""
            }`}
            id="design-name"
            onClick={showDesignHandler}
          >
            <h1>Design</h1>
          </div>

          <div
            className={`three-d-header ${
              activeTab === "discover" ? "active" : ""
            }`}
            id="discover-name"
            onClick={showDiscoverHandler}
          >
            <h1>Discover</h1>
          </div>
          <div
            className={`three-d-header ${
              activeTab === "dispatch" ? "active" : ""
            }`}
            id="dispatch-name"
            onClick={showDispatchHandler}
          >
            <h1>Dispatch</h1>
          </div>
        </div> */}

        {/* <div className="design-pos">
          {showDesign ? (
            <section className="design" id="design">
              <div className="design-images">
                <Image
                  src={"/design1.jpg"}
                  alt="design-images"
                  width={350}
                  height={230}
                  unoptimized
                ></Image>

                <Image
                  src={"/design2.jpg"}
                  alt="design-images"
                  width={350}
                  height={230}
                  unoptimized
                ></Image>

                <Image
                  src={"/design3.jpg"}
                  alt="design-images"
                  width={350}
                  height={230}
                  unoptimized
                ></Image>
              </div>
            </section>
          ) : (
            ""
          )}

          {showDiscover ? (
            <section className="design" id="discovery">
              <div className="design-images">
                <Image
                  src={"/discover.jpeg"}
                  alt="design-images"
                  width={350}
                  height={230}
                  unoptimized
                ></Image>

                <Image
                  src={"/discover2.jpeg"}
                  alt="design-images"
                  width={350}
                  height={230}
                  unoptimized
                ></Image>

                <Image
                  src={"/discover3.jpeg"}
                  alt="design-images"
                  width={350}
                  height={230}
                  unoptimized
                ></Image>
              </div>
            </section>
          ) : (
            ""
          )}

          {showDispatch ? (
            <section className="design" id="dispatch">
              <div className="design-images">
                <Image
                  src={"/design1.jpg"}
                  alt="design-images"
                  width={350}
                  height={230}
                  unoptimized
                ></Image>

                <Image
                  src={"/design1.jpg"}
                  alt="design-images"
                  width={350}
                  height={230}
                  unoptimized
                ></Image>

                <Image
                  src={"/design1.jpg"}
                  alt="design-images"
                  width={350}
                  height={230}
                  unoptimized
                ></Image>
              </div>
            </section>
          ) : (
            ""
          )}
        </div> */}
      </section>

      <section className="process-steps">
        <div className="process-image">
          <Image
            src={"./process-water2.jpg"}
            alt="Process-overlap-image"
            width={100}
            height={100}
            unoptimized
          ></Image>
        </div>
        <div className="process-color"></div>
        <div className="process-header">
          <h1>Our Manufacturing Process</h1>
        </div>
        <div className="steps-container">
          <div
            ref={processAnimationOne}
            className={`${isProcessOneVis ? "steps-first" : "steps"}`}
            id="first"
          >
            <h2>Cold rolled steel</h2>
          </div>
          <div
            ref={processAnimationTwo}
            className={`${isProcessTwoVis ? "steps-second" : "steps"}`}
            id="second"
          >
            <h2>Decoiler</h2>
          </div>
          <div
            ref={processAnimationThree}
            className={`${isProcessThreeVis ? "steps-third" : "steps"}`}
            id="third"
          >
            <h2>Fin Folding</h2>
          </div>
          <div
            ref={processAnimationFour}
            className={`${isProcessFourVis ? "steps-fourth" : "steps"}`}
            id="fourth"
          >
            <h2>Edge Cutting & upward bending</h2>
          </div>

          <div
            ref={processAnimationFive}
            className={`${isProcessFiveVis ? "steps-fifth" : "steps"}`}
            id="fifth"
          >
            <h2>Auto steam welding for fin edges using robots</h2>
          </div>
          <div
            ref={processAnimationSix}
            className={`${isProcessSixVis ? "steps-six" : "steps"}`}
            id="six"
          >
            <h2>Strip welding</h2>
          </div>
          <div
            ref={processAnimationSeven}
            className={`${isProcessSevenVis ? "steps-seven" : "steps"}`}
            id="seven"
          >
            <h2>spot welding on embossement</h2>
          </div>
          <div
            ref={processAnimationEight}
            className={`${isProcessEightVis ? "steps-eight" : "steps"}`}
            id="eight"
          >
            <h2>edge downword ending</h2>
          </div>
          <div
            ref={processAnimationNine}
            className={`${isProcessNineVis ? "steps-nine" : "steps"}`}
            id="nine"
          >
            <h2>leakage test(dye penetrant)</h2>
          </div>

          <div
            ref={processAnimationTen}
            className={`${isProcessTenVis ? "steps-ten" : "steps"}`}
            id="ten"
          >
            <h2>tank assembly & welding</h2>
          </div>
          <div
            ref={processAnimationEleven}
            className={`${isProcessElevenVis ? "steps-eleven" : "steps"}`}
            id="eleven"
          >
            <h2>sub-assembly fitment and welding</h2>
          </div>
          <div
            ref={processAnimationTwelve}
            className={`${isProcessTwelveVis ? "steps-twelve" : "steps"}`}
            id="twelve"
          >
            <h2>metal parts prepration</h2>
          </div>
          <div
            ref={processAnimationThirteen}
            className={`${isProcessThirteenVis ? "steps-thirteen" : "steps"}`}
            id="thirteen"
          >
            <h2>hot rolled steel</h2>
          </div>

          <div
            ref={processAnimationFourteen}
            className={`${isProcessFourteenVis ? "steps-fourteen" : "steps"}`}
            id="fourteen"
          >
            <h2>leakage test</h2>
          </div>
        </div>
      </section>

      <section className="footer-contact-form">
        <div className="form">
          <div className="form-left">
            <p>
              Get in Touch Have questions, feedback, or just want to say hello?
              We re here to help! Fill out the form below and we ll get back to
              you as soon as possible. Your inquiries are important to us, and
              we strive to provide timely and helpful responses to all messages.
              Thank you for reaching out!
            </p>
            <div className="form-header">
              <Image
                src={"/footer-call.png"}
                alt="contac-img"
                width={100}
                height={100}
                unoptimized
              ></Image>
              <h1>Contact Us</h1>
            </div>
          </div>
          <div className="form-right-overlap"></div>

          <div className="form-right">
            <form action="" className="needs-validation">
              <div className="form-top">
                <div className="name-f was-validated">
                  <input
                    type="text"
                    name=""
                    id="name"
                    placeholder="Your Name"
                    required
                  />
                </div>

                <div className="email-f was-validated">
                  <input
                    type="email"
                    name=""
                    id="email"
                    placeholder="example@gmail.com"
                    required
                  />
                </div>
              </div>
              <div className="company-name-f was-validated">
                <input
                  type="text"
                  name=""
                  id="company-name"
                  placeholder="Company Name"
                  required
                />
              </div>

              <div className="phone-f was-validated">
                <input
                  type="tel"
                  name=""
                  id="phone-no"
                  placeholder="Phone No"
                  required
                />
              </div>

              <div className="message-f was-validated">
                <textarea
                  name=""
                  id="message"
                  cols="39"
                  rows="5"
                  placeholder="your message here..."
                ></textarea>
              </div>
              <div className="submit-btn">
                <button
                  ref={profileButton}
                  className={`${
                    profileButtonIsVisible
                      ? "animate__animated animate__jello"
                      : ""
                  }`}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <div className="footer">
        <div className="footer-top-df">
          <hr id="footer-top" />
        </div>
        <div id="desktop-view" className="footer-df">
          <div className="footer-left">
            <div className="footer-logo">
              <Image
                src={"/tashe5.png"}
                alt="logo"
                width={100}
                height={50}
                unoptimized
              ></Image>
            </div>
          </div>

          <div className="fotter-servcie">
            <h3>Our services</h3>
            <li>Home</li>
            <li>About us</li>
            <li>Product</li>
            <li>Contact us</li>
            <li>Infrastructure</li>
          </div>

          <div className="footer-contact">
            <h3>Tashe Power india pvt limited</h3>
            <li>
              <b>Work</b> : F-194, Khushkhera industrial area,bhiwadi, district,
              alwar, rajasthan 301019(india)
            </li>
            <li>
              <b>regd</b> : address: r-616, new rajender nagar, new delhi
              110060(india)
            </li>
            <li>tel: +91 1493 250 709</li>
            <li>M: +91 9711718600</li>
            <li>
              Email: <span id="footer-email">info@tashe.co.in</span>
            </li>
          </div>
        </div>

        <div id="mobile-view" className="footer-df">
          <div className="footer-left">
            <div className="footer-logo">
              <Image
                src={"/tashe5.png"}
                alt="logo"
                width={100}
                height={50}
                unoptimized
              ></Image>
            </div>
            <div className="fotter-servcie">
              <h3>Our services</h3>
              <li>Home</li>
              <li>About us</li>
              <li>Product</li>
              <li>Contact us</li>
              <li>Infrastructure</li>
            </div>
          </div>

          <div className="mobile-df">
            <div className="footer-contact">
              <h3>Tashe Power india pvt limited</h3>
              <li>
                <b>Work</b> : F-194, Khushkhera industrial area,bhiwadi,
                district, alwar, rajasthan 301019(india)
              </li>
              <li>
                <b>regd</b> : address: r-616, new rajender nagar, new delhi
                110060(india)
              </li>
              <li>tel: +91 1493 250 709</li>
              <li>M: +91 9711718600</li>
              <li>
                Email: <span id="footer-email">info@tashe.co.in</span>
              </li>
            </div>
          </div>
        </div>
        <div className="footer-bottom-df"></div>
      </div>
    </div>
  );
};

export default ProductPage;
