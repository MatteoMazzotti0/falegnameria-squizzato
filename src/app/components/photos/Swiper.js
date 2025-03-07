import Image from "next/image";

const Swiper = () => {
  return (
    <div className="container-fluid m-0 p-0 g-0">
      <div className="card border-0 pt-4">
        <h1 className="text-center">Falegnameria Squizzato</h1>

      <div id="carouselExampleIndicators" className="carousel slide mt-3">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner rounded-5">
          <div className="carousel-item active">
            <div className="swiper-element">
              <Image
                src="/images/swiper/first.jpg"
                alt="..."
                layout="fill"
                objectFit="cover"
              />
              <div className="carousel-caption">
                <p>Testo di prova.</p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="swiper-element">
              <Image
                src="/images/swiper/second.jpg"
                alt="..."
                layout="fill"
                objectFit="cover"
              />
              <div className="carousel-caption">
                <p>Testo di prova.</p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="swiper-element">
              <Image
                src="/images/swiper/third.jpg"
                alt="..."
                layout="fill"
                objectFit="cover"
              />
              <div className="carousel-caption">
                <p>Testo di prova.</p>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    </div>
  );
};

export default Swiper;
