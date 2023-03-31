import React from "react";

export default function Card ({imgURL, title,text,btn}) {
  return (
    <div className="cards d-flex justify-content-between row mx-4 my-4">
      <div className="card col-xl-3 col-lg-6 col-md-6 my-4 px-0">
        <img src={imgURL} className="card-img-top" alt="..." />
        <div className="card-body px-0">
          <h5 className="card-title">{title}</h5>
          <p className="card-text border-bottom px-4 pb-4">
            {text}
          </p>
          <a href="#" className="btn btn-primary">
            {btn}
          </a>
        </div>
      </div>
      <div className="card col-xl-3 col-lg-6 col-md-6 my-4 px-0">
        <img src={imgURL} className="card-img-top" alt="..." />
        <div className="card-body px-0">
          <h5 className="card-title">{title}</h5>
          <p className="card-text border-bottom px-4 pb-4">
           {text}
          </p>
          <a href="#" className="btn btn-primary">
            {btn}
          </a>
        </div>
      </div>
      <div className="card col-xl-3 col-lg-6 col-md-6 my-4 px-0">
        <img src={imgURL} className="card-img-top" alt="..." />
        <div className="card-body px-0">
          <h5 className="card-title">{title}</h5>
          <p className="card-text border-bottom px-4 pb-4">
           {text}
          </p>
          <a href="#" className="btn btn-primary">
            {btn}
          </a>
        </div>
      </div>
      <div className="card col-xl-3 col-lg-6 col-md-6 my-4 px-0">
        <img src={imgURL} className="card-img-top" alt="..." />
        <div className="card-body px-0">
          <h5 className="card-title">{title}</h5>
          <p className="card-text border-bottom px-4 pb-4">
           {text}
          </p>
          <a href="#" className="btn btn-primary">
            {btn}
          </a>
        </div>
      </div>
    </div>
  );
};