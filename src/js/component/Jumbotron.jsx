import React from "react";
export default function  Jumbotron ({title, text, btn}) {
    return (
      <div className="p-5 my-3 mx-4 bg-body-tertiary rounded-3  bg-secondary">
        <div className="container-fluid py-5 d-flex flex-column align-items-start">
          <h1 className="display-5 fw-bold">A Warm Welcome!</h1>
          <p className="col-md-8 fs-4 text-start">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat esse sed non repellendus eveniet aliquam error possimus, eaque quae, dolores dolorum et molestias vero obcaecati itaque vitae asperiores magni laborum.
          </p>
          <button className="btn btn-primary btn-lg" type="button">
           Call to action!
          </button>
        </div>
      </div>
    );
  };