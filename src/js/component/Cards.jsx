import React from "react";

const cardsData = [
  {
    id: 1,
    imgURL: "https://via.placeholder.com/150",
    title: "Card 1",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat quam nesciunt illo, illum eveniet, iure mollitia provident molestias, natus deleniti amet! Sit distinctio quisquam laboriosam aliquam iste id, voluptates molestiae!",
    btn: "Button 1"
  },
  {
    id: 2,
    imgURL: "https://via.placeholder.com/150",
    title: "Card 2",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat quam nesciunt illo, illum eveniet, iure mollitia provident molestias, natus deleniti amet! Sit distinctio quisquam laboriosam aliquam iste id, voluptates molestiae!",
    btn: "Button 2"
  },
  {
    id: 3,
    imgURL: "https://via.placeholder.com/150",
    title: "Card 3",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat quam nesciunt illo, illum eveniet, iure mollitia provident molestias, natus deleniti amet! Sit distinctio quisquam laboriosam aliquam iste id, voluptates molestiae!",
    btn: "Button 3"
  },
  {
    id: 4,
    imgURL: "https://via.placeholder.com/150",
    title: "Card 4",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat quam nesciunt illo, illum eveniet, iure mollitia provident molestias, natus deleniti amet! Sit distinctio quisquam laboriosam aliquam iste id, voluptates molestiae!",
    btn: "Button 4"
  }
];

export default function Cards() {
  return (
    <div className="cards d-flex justify-content-between row mx-4 my-4">
      {cardsData.map(card => (
        <div key={card.id} className="card col-xl-3 col-lg-6 col-md-6 my-4 px-0">
          <img src={card.imgURL} className="card-img-top" alt="..." />
          <div className="card-body px-0">
            <h5 className="card-title">{card.title}</h5>
            <p className="card-text border-bottom px-4 pb-4">
              {card.text}
            </p>
            <a href="#" className="btn btn-primary">
              {card.btn}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};
