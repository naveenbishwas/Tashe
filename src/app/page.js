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
            <h1>Logo </h1>
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

        <footer>
          <div className="form">
            <div className="form-left">
              <div className="form-header">
                <h1>Contact Us</h1>
              </div>
              <p>
                "Get in Touch Have questions, feedback, or just want to say
                hello? We're here to help! Fill out the form below and we'll get
                back to you as soon as possible. Your inquiries are important to
                us, and we strive to provide timely and helpful responses to all
                messages. Thank you for reaching out!"
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
        </footer>
      </div>
    </>
  );
}
