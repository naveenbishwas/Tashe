import Image from "next/image";
import "animate.css";

export default function Home() {
  return (
    <>
      <div className="main-conatiner">
        <header>
          <div className="logo">
            {/* <Image
              src="/tashe.png"
              width={200}
              height={100}
              alt="Picture of the author"
            /> */}
            <h1>Logo</h1>
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
          <div className="profile-header">
            <h1>Our Profile</h1>
          </div>

          <div className="profile-info">
            <div className="profile-info-left">
              <div className="profile-info-left-one">
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

            <div className="profile-info-right">
              <p>
                We are one of the first companies in India to manufacture
                Corrugated Tanks and Corrugated Fin Walls and have been serving
                in India and across the globe to various transformer OEMs.
              </p>
              <p>
                With a total area of approximately 16,000 sq. feet, our
                state-of-the-art manufacturing unit houses most modern machines
                like automatic fin folding and fin welding line, CNC cutting and
                marking machine, shearing and press brake, dust proof paint
                shop. We also have an in-house design team who can assist you in
                making most economical and production oriented tank designs.{" "}
              </p>

              <button className="animate__animated animate__bounce">
                Read More
              </button>
            </div>
          </div>
        </section>

        <section className="product">
          <div className="product-header">
            <h1>Our Product</h1>
          </div>
          <div className="product-df">
            <div className="product1">
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
            <div className="product1">
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
            <div className="product1">
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
            <p>Discover Tashe where quality knows no borders.</p>
          </div>

          <div className="map-img">
            <iframe
              id="map"
              src="https://www.google.com/maps/d/embed?mid=1nNdwulUa3zVCyfnwwBmTNEX105jfjuw&ehbc=2E312F"
            ></iframe>
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
      </div>
    </>
  );
}
