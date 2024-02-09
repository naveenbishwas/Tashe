"use client";

import Image from "next/image";
import "animate.css";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  const { ref: profileImageOne, inView: ProfileImageOneVisibile } = useInView({
    threshold: 0,
  });

  const { ref: profileHeader, inView: profileHeaderVisibile } = useInView({
    threshold: 0,
  });
  const { ref: productOne, inView: productOneIsVisible } = useInView({
    threshold: 0,
  });
  const { ref: productTwo, inView: productTwoIsVisible } = useInView({
    threshold: 0,
  });
  const { ref: productThree, inView: productThreeIsVisible } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    const cursorDot = document.querySelector("[data-cursor-dot]");
    const cursorOutline = document.querySelector("[data-cursor-outline]");

    const handleMouseMove = (e) => {
      const posX = e.clientX;
      const posY = e.clientY;

      cursorDot.style.left = `${posX}px`;
      cursorDot.style.top = `${posY}px`;

      cursorOutline.animate(
        {
          left: `${posX}px`,
          top: `${posY}px`,
        },
        { duration: 100, fill: "forwards" }
      );
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div className="main-conatiner">
        <div class="cursor-dot" data-cursor-dot></div>
        <div class="cursor-outline" data-cursor-outline></div>
        <header>
          <div className="logo">
            {/* <Image
              src="/tashe.png"
              width={200}
              height={100}
              alt="Picture of the author"
            /> */}
            <h1>Tashe</h1>
          </div>
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

        <section className="banner">
          <div className="banner-img">
            <Image
              src="/banner-img.jpeg"
              width={100}
              height={100}
              alt="Banner Image"
              objectFit="cover"
              unoptimized
            ></Image>
          </div>
          <div className="banner-color"></div>
          <div className="banner-text">
            <h1>Tashe Power India</h1>
          </div>
        </section>

        <section className="profile">
          <div className="profile-info">
            <div className="profile-info-left">
              <div
                ref={profileImageOne}
                className={`${
                  ProfileImageOneVisibile
                    ? "profile-info-left-one-float"
                    : "profile-info-left-one"
                }`}
              >
                <Image
                  src={"/section-second-img-one.jpeg"}
                  width={100}
                  height={100}
                  alt="Coruggated Tank"
                  unoptimized
                ></Image>
              </div>
              <div className="profile-info-left-second">
                <Image
                  src={"/section-img-second.png"}
                  width={100}
                  height={100}
                  alt="Coruggated Tank"
                  unoptimized
                ></Image>
              </div>
            </div>

            <div ref={profileHeader} className="profile-info-right">
              <div
                ref={profileHeader}
                className={`${
                  profileHeaderVisibile
                    ? "profile-trans-float"
                    : "profile-trans"
                }`}
              >
                <div className="profile-header">
                  <h1>Our Profile</h1>
                </div>
                <p>
                  We are one of the first companies in India to manufacture
                  Corrugated Tanks and Corrugated Fin Walls and have been
                  serving in India and across the globe to various transformer
                  OEMs.
                </p>
                <p>
                  With a total area of approximately 16,000 sq. feet, our
                  state-of-the-art manufacturing unit houses most modern
                  machines like automatic fin folding and fin welding line, CNC
                  cutting and marking machine, shearing and press brake, dust
                  proof paint shop. We also have an in-house design team who can
                  assist you in making most economical and production oriented
                  tank designs.{" "}
                </p>

                <button className="animate__animated animate__bounce">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </section>

        <div className="quality-assurance">
          <p>
            Quality assurance is most importanct for us. All tanks and fill
            walls are subject to stringnet inspecetion.
          </p>
        </div>

        <section className="product">
          <div className="product-header">
            <h1>Product we manufacture</h1>
          </div>
          <div className="product-df">
            <div
              ref={productOne}
              className={`${
                productOneIsVisible ? "product1-float" : "product1"
              }`}
            >
              <div className="product-color">
                <h1>More Info</h1>
              </div>
              <div className="product-image">
                <Image
                  src={"/c2.avif"}
                  alt="product1"
                  width={100}
                  height={100}
                  unoptimized
                ></Image>
              </div>
              <div className="product-text">
                <h4>Coruggated Tank</h4>
              </div>
            </div>
            <div
              ref={productTwo}
              className={`${
                productTwoIsVisible ? "product2-float" : "product2"
              }`}
            >
              <div className="product-color">
                <h1>More Info</h1>
              </div>

              <div className="product-image">
                <Image
                  id="finn-wall"
                  src={"/finn wall.png"}
                  alt="product1"
                  width={100}
                  height={100}
                  unoptimized
                ></Image>
              </div>
              <div className="product-text">
                <h4>Finn Wall</h4>
              </div>
            </div>
            <div
              ref={productThree}
              className={`${
                productThreeIsVisible ? "product3-float" : "product3"
              }`}
            >
              <div className="product-color">
                <h1>More Info</h1>
              </div>

              <div className="product-image">
                <Image
                  src={"/tank.png"}
                  alt="product1"
                  width={100}
                  height={100}
                  unoptimized
                ></Image>
              </div>
              <div className="product-text">
                <h4>Tank Wall</h4>
              </div>
            </div>
          </div>
        </section>

        <div className="aero">
          <Image
            src={"/aero.png"}
            alt="down"
            width={80}
            height={80}
            unoptimized
          ></Image>
        </div>

        <section className="map">
          <div className="map-header">
            <h1>Customers across the World</h1>
          </div>

          <div className="map-img">
            {/* <img src= alt="" /> */}
            <Image
              src={"map3.png"}
              alt="worldmap"
              height={100}
              width={100}
              unoptimized
            ></Image>
          </div>
        </section>

        <section className="certification">
          <div className="certification-header">
            <h1>Certification</h1>
          </div>

          <div className="certification-img">
            <div className="certification-img-first">
              <Image
                src={"/certification1.png"}
                alt="certifcation"
                width={250}
                height={300}
                unoptimized
              ></Image>
            </div>
            <div className="certification-img-two">
              <Image
                src={"/certification4.png"}
                alt="certifcation"
                width={300}
                height={330}
                unoptimized
              ></Image>
            </div>
          </div>
        </section>

        <section className="footer-contact-form">
          <div className="form">
            <div className="form-left">
              <div className="form-header">
                <h1>Contact Us</h1>
              </div>
              <p>
                Get in Touch Have questions, feedback, or just want to say
                hello? We re here to help! Fill out the form below and we ll get
                back to you as soon as possible. Your inquiries are important to
                us, and we strive to provide timely and helpful responses to all
                messages. Thank you for reaching out!
              </p>
              <Image
                src={"/contact-us5.png"}
                width={100}
                height={100}
                alt="contact-us"
                unoptimized
              ></Image>
            </div>
            <div className="form-right">
              <form action="" className="needs-validation">
                <div className="form-top">
                  <div className="name-f was-validated">
                    {/* <label htmlFor="name">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-person-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                    <path
                      fill-rule="evenodd"
                      d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                    />
                  </svg>
                  Name
                </label> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-person-circle"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                      <path
                        fill-rule="evenodd"
                        d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                      />
                    </svg>
                    <input
                      type="text"
                      name=""
                      id="name"
                      placeholder="Name"
                      required
                    />
                  </div>

                  <div className="email-f was-validated">
                    {/* <label htmlFor="email">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-envelope-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
                  </svg>
                  Email
                </label> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-envelope-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
                    </svg>
                    <input
                      type="email"
                      name=""
                      id="email"
                      placeholder="Email"
                      required
                    />
                  </div>
                </div>
                <div className="company-name-f was-validated">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-buildings-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15 .5a.5.5 0 0 0-.724-.447l-8 4A.5.5 0 0 0 6 4.5v3.14L.342 9.526A.5.5 0 0 0 0 10v5.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V14h1v1.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5zM2 11h1v1H2zm2 0h1v1H4zm-1 2v1H2v-1zm1 0h1v1H4zm9-10v1h-1V3zM8 5h1v1H8zm1 2v1H8V7zM8 9h1v1H8zm2 0h1v1h-1zm-1 2v1H8v-1zm1 0h1v1h-1zm3-2v1h-1V9zm-1 2h1v1h-1zm-2-4h1v1h-1zm3 0v1h-1V7zm-2-2v1h-1V5zm1 0h1v1h-1z" />
                  </svg>
                  <input
                    type="text"
                    name=""
                    id="company-name"
                    placeholder="Company Name"
                    required
                  />
                </div>

                <div className="phone-f was-validated">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-telephone-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
                    />
                  </svg>
                  <input
                    type="tel"
                    name=""
                    id="phone-no"
                    placeholder="Phone No"
                    required
                  />
                </div>

                <div className="message-f was-validated">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-chat-right-dots-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h9.586a1 1 0 0 1 .707.293l2.853 2.853a.5.5 0 0 0 .854-.353zM5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 1a1 1 0 1 1 0-2 1 1 0 0 1 0 2" />
                  </svg>
                  <textarea
                    name=""
                    id="message"
                    cols="33"
                    rows="5"
                    placeholder="message..."
                  ></textarea>
                </div>
                <div className="submit-btn">
                  <button>Submit</button>
                </div>
              </form>
            </div>
          </div>
        </section>

        <div className="footer">
          <div className="footer-top-df">
            <hr id="footer-top" />
          </div>
          <div className="footer-df">
            <div className="footer-left">
              <div className="footer-logo">
                <h1>Tashe Logo</h1>
              </div>
              <div className="footer-follow-us">
                <h4>Follow us</h4>
                <div className="footer-icons">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-twitter-x"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                    </svg>
                  </span>
                  <span>
                    <svg
                      id="linkedin"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-linkedin"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                    </svg>
                  </span>
                  <span>
                    <svg
                      id="youtube"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-youtube"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
                    </svg>
                  </span>
                  <span>
                    <svg
                      id="facebook"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-facebook"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                    </svg>
                  </span>
                </div>
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
                <b>Work</b>: F-194, Khushkhera industrial area,bhiwadi,
                district, alwar, rajasthan 301019(india)
              </li>
              <li>
                <b>regd</b>: address: r-616, new rajender nagar, new delhi
                110060(india)
              </li>
              <li>tel: +91 1493 250 709</li>
              <li>M: +91 9711718600</li>
              <li>
                Email: <span id="footer-email">info@tashe.co.in</span>
              </li>
            </div>

            <div className="footer-right">
              <div className="footer-qr">
                <Image
                  src={"/qr.png"}
                  width={100}
                  height={100}
                  alt="QR code"
                  unoptimized
                ></Image>
                <p>www.tashe.co.in</p>
              </div>
            </div>
          </div>
          <div className="footer-bottom-df">
            <hr id="footer-bottom" />
          </div>
        </div>
      </div>
    </>
  );
}
