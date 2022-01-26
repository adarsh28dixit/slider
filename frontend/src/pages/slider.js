import React, { useEffect, useState } from "react";

function Slider() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("./api/car.json")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  console.log(data);

  return (
    <div>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="cards-wrapper">
              {data.slice(0, 1).map((item) => (
                <div className="card " key={item.id}>
                  <div className="card-body">
                    <h6 className="card-title">{item.bodyType}</h6>
                    <p className="card-text">
                      <strong className="strong">{item.modelName}</strong>{" "}<span className="span1">{item.modelType}</span>
                    </p>
                  </div>
                  <img
                    src={item.imageUrl}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                   
                    <p className="card-text">
                      <span className="span">LEARN {">"}</span><span className="span" >SHOP {">"}</span>
                    </p>
                  </div>
                </div>
              ))}
              {data.slice(1,4).map((item) => (
                <div className="card d-none d-md-block" key={item.id}>
                  <div className="card-body">
                    <h6 className="card-title">{item.bodyType}</h6>
                    <p className="card-text">
                      <strong className="strong">{item.modelName}</strong>{" "}<span className="span1">{item.modelType}</span>
                    </p>
                  </div>
                  <img
                    src={item.imageUrl}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                   
                    <p className="card-text">
                      <span className="span">LEARN {">"}</span><span className="span" >SHOP {">"}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="carousel-item">
            <div className="cards-wrapper">
              {data.slice(4,5).map((item) => (
                <div className="card " key={item.id}>
                  <div className="card-body">
                    <h6 className="card-title">{item.bodyType}</h6>
                    <p className="card-text">
                      <strong className="strong">{item.modelName}</strong>{" "}<span className="span1">{item.modelType}</span>
                    </p>
                  </div>
                  <img
                    src={item.imageUrl}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                   
                   <p className="card-text">
                     <span className="span">LEARN {">"}</span><span className="span" >SHOP {">"}</span>
                   </p>
                 </div>
                </div>
              ))}
              {data.slice(5,8).map((item) => (
                <div className="card d-none d-md-block" key={item.id}>
                  <div className="card-body">
                    <h6 className="card-title">{item.bodyType}</h6>
                    <p className="card-text">
                      <strong className="strong">{item.modelName}</strong>{" "}<span className="span1">{item.modelType}</span>
                    </p>
                  </div>
                  <img
                    src={item.imageUrl}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                   
                    <p className="card-text">
                      <span className="span">LEARN {">"}</span><span className="span" >SHOP {">"}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </div>
        
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          
        </a>
        
      </div>
    </div>
  );
}

export default Slider;
