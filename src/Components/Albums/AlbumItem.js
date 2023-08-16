import React, { Fragment, useContext,useState} from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import CartContext from "../Store/CartContext";
import '../Cart/imageAnimation.css';
import MessageonAdd from "../UI/MessageonAdd";
import Errmsg from '../UI/Errmessage';
import IMG1 from'../../Concert Page/assests/img1.jpg';
import IMG2 from'../../Concert Page/assests/img2.jpeg';
import IMG3 from'../../Concert Page/assests/img3.jpg';
import IMG4 from'../../Concert Page/assests/Img4.jpg';
import IMG5 from'../../Concert Page/assests/img5.jpeg';
import IMG6 from'../../Concert Page/assests/img6.jpeg';
import IMG7 from'../../Concert Page/assests/img7.jpg';
import IMG8 from'../../Concert Page/assests/img8.jpg';

const AlbumItem = () => {
  const ctxt = useContext(CartContext);
  const [showMsg,setShowMsg]=useState(false);
  const [messageTitle, setMessageTitle] = useState(""); // State to store message title
  const [errMsgShow,seterrMsg]=useState(false);
  const productsArr = [
    {
      title: "ALBUM 1",
      price: 100,
      imageUrl:IMG3,
    },
    {
      title: "ALBUM 2",
      price: 150,
      imageUrl:IMG4,
    },
    {
      title: "ALBUM 3",
      price: 170,
      imageUrl:IMG5,
    },
    {
      title: "ALBUM 4",
      price: 400,
      imageUrl:IMG6,
    },
    {
      title: "ALBUM 5",
      price: 800,
      imageUrl:IMG1,
    },
    {
      title: "ALBUM 6",
      price: 900,
      imageUrl:IMG2,
    },
    {
      title: "ALBUM 7",
      price: 750,
      imageUrl:IMG7,
    },
    {
      title: "ALBUM 8",
      price: 1000,
      imageUrl:IMG8,
    },
  ];

  // Create pairs of products for adjacent columns
  const pairedProducts = [];
  for (let i = 0; i < productsArr.length; i += 2) {
    pairedProducts.push(productsArr.slice(i, i + 2));
  }

  // Add Item to cart
  const AddToCart = (id) => {
    const avl=ctxt.item.find((item)=>item.title === id);
    if(avl){
      seterrMsg(true);
      return;
    }
    const selectedItem = productsArr.find((item) => item.title === id);
    if (selectedItem) {
      ctxt.addItem({ ...selectedItem });
      setShowMsg(true);
      setMessageTitle(selectedItem.title);
    }
    setTimeout(() => {
      setShowMsg(false);
    }, 1000);
  };

  

  return (
    <Fragment>
      {pairedProducts.map((pair, index) => (
        <div className="d-flex justify-content-center mt-4" key={index}>
          <Container>
            <Row className="justify-content-center">
              {pair.map((item) => (
                <Col key={item.title} xs={12} md={6} lg={4} className="mb-4">
                  <Card className="w-75 mx-auto">
                    {" "}
                    {/* Adjust card width and center */}
                    <Card.Img variant="top" src={item.imageUrl} className="pord" />
                    <Card.Body>
                      <Card.Title>{item.title}</Card.Title>
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="text-md font-semibold">
                          $ {item.price}
                        </span>
                        <Button
                          variant="primary"
                          onClick={() => AddToCart(item.title)}
                        >
                          Add to Cart
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
          {showMsg && <MessageonAdd tit={messageTitle}/>}
          {errMsgShow && <Errmsg  clk={seterrMsg}/>}
        </div>
      ))}
    </Fragment>
  );
};

export default AlbumItem;
