import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "./css/BookInfo.css"
import Carousel from 'react-bootstrap/Carousel';
import { useState } from "react";

export const BookInfo = ({ array1 }) => {
  let { id } = useParams();


    
  

  return (
    <>
      {array1.map(item => {
        console.log(item.id === +id)
        if (item.id === +id) {
          return (
            <div className="div">
              <div className="back-button-block">
                <Link to={"/"}>
                  <button className="back_btn">
                    Назад
                  </button>
                </Link>
              </div>
              <hr />
              <div className="book-info">
                <div className="book-img">
                  <img className="item_img" src={item.src} />
                </div>
                <div className="book-date">
                  <p className="item_h">{item.name}</p>
                  <p>Жанр: {item.genre}</p>
                  <p className="item_author">Автор: {item.author}</p>
                </div>
              </div>


              {/* <p className="item_text">
                {item.text}
              </p> */}
              {/* <a href="https://pstu.ru/files/file/rpd_uop/serye_rpd/pm/161100_68_vysshaya_matematika_specialnye_glavy.pdf" className="links">
                Читать
              </a> */}




              <Carousel variant="dark">
                <Carousel.Item>
                  <p style={{ padding: 50, textAlign: "justify" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas euismod vulputate mauris, vitae cursus lectus egestas faucibus. Sed eget mauris dui. Sed at lorem nec enim gravida porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin augue tortor, convallis nec enim a, fringilla commodo diam. Curabitur elementum nibh vestibulum, cursus tortor et, condimentum urna. Proin facilisis dui quis felis pellentesque, vitae aliquam nunc commodo. Fusce gravida lacus sed libero tempus luctus vel ac lorem. Etiam non nisi nec nisi tempor cursus. Sed nec auctor dolor. Nam accumsan tempus ante nec vestibulum.
                  </p>
                </Carousel.Item>
                <Carousel.Item>
                  <p style={{ padding: 50, textAlign: "justify" }}>
                    In vulputate nunc ac nisi tristique, non tincidunt risus porta. Maecenas sit amet pellentesque lorem, id blandit dolor. Integer arcu libero, congue quis elementum eget, feugiat nec ipsum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam in mauris sit amet ante malesuada iaculis. Phasellus tempus elit in sollicitudin venenatis. Aliquam erat volutpat. Sed convallis, nisl vitae rhoncus volutpat, arcu justo rhoncus urna, at luctus odio eros in erat. Mauris venenatis orci in enim dignissim ullamcorper. Aliquam efficitur ex dapibus dui ullamcorper, id congue magna egestas.
                  </p>
                </Carousel.Item>
                <Carousel.Item>
                  <p style={{ padding: 50, textAlign: "justify" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas euismod vulputate mauris, vitae cursus lectus egestas faucibus. Sed eget mauris dui. Sed at lorem nec enim gravida porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin augue tortor, convallis nec enim a, fringilla commodo diam. Curabitur elementum nibh vestibulum, cursus tortor et, condimentum urna. Proin facilisis dui quis felis pellentesque, vitae aliquam nunc commodo. Fusce gravida lacus sed libero tempus luctus vel ac lorem. Etiam non nisi nec nisi tempor cursus. Sed nec auctor dolor. Nam accumsan tempus ante nec vestibulum.
                  </p>
                </Carousel.Item>
              </Carousel>
            </div>
          );
        }
      })}
    </>
  );
};