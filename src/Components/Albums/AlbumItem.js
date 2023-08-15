import React, { Fragment, useContext,useState} from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import CartContext from "../Store/CartContext";
import '../Cart/imageAnimation.css';
import MessageonAdd from "../UI/MessageonAdd";
import Errmsg from '../UI/Errmessage';

const AlbumItem = () => {
  const ctxt = useContext(CartContext);
  const [showMsg,setShowMsg]=useState(false);
  const [messageTitle, setMessageTitle] = useState(""); // State to store message title
  const [errMsgShow,seterrMsg]=useState(false);
  const productsArr = [
    {
      title: "ALBUM 1",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {
      title: "ALBUM 2",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
    {
      title: "ALBUM 3",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
    {
      title: "ALBUM 4",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
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
