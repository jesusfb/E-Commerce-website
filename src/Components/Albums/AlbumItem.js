import React, { Fragment, useContext, useState} from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import CartContext from "../Store/CartContext";
import "../Cart/imageAnimation.css";
import MessageonAdd from "../UI/MessageonAdd";
import Errmsg from "../UI/Errmessage";
import AlbumDetails from "../Albums/AlbumDetails";
import IMG1 from "../../Concert Page/assests/img1.jpg";
import IMG2 from "../../Concert Page/assests/img2.jpeg";
import IMG3 from "../../Concert Page/assests/img3.jpg";
import IMG4 from "../../Concert Page/assests/Img4.jpg";
import IMG5 from "../../Concert Page/assests/img5.jpeg";
import IMG6 from "../../Concert Page/assests/img6.jpeg";
import IMG7 from "../../Concert Page/assests/img7.jpg";
import IMG8 from "../../Concert Page/assests/img8.jpg";
// Working on crudcrud
// import axios from "axios";
// import AuthContext from "../../LoginPage/AuthContext";

const AlbumItem = () => {
  const ctxt = useContext(CartContext);

  // const Authctxt = useContext(AuthContext);
  // console.log(Authctxt.MailId);
  // const userMail = Authctxt.MailId;

  // let cleanedEmail;
  // if (userMail) {
  //   cleanedEmail = userMail.replace(/[^a-zA-Z0-9]/g, "");
  // }

  // console.log(cleanedEmail); get error here. it is auto empty.
  // let URLCrud = `https://crudcrud.com/api/b0dcfaa6cb714ec2b9ad9f9c9184bf4a/cart${cleanedEmail}`;

  const [showMsg, setShowMsg] = useState(false);
  const [messageTitle, setMessageTitle] = useState(""); // State to store message title
  const [errMsgShow, seterrMsg] = useState(false);

  // For display Product Details
  const [selectedAlbum, setSelectedAlbum] = useState(null); //for Name
  const [selectedImg, setSelectedImg] = useState(null); //For image
  const [selectedLyrics, setSelectedLyrics] = useState(null); //For Lyrics
  const [selectedStar, setSelectedStar] = useState(null); //For Star
  const [selectedSinger, setSelectedSinger] = useState(null); //For Singer

  const productsArr = [
    {
      title: "ALBUM 1",
      Name: "Tera Zikr",
      Lyrics:
        "Abhi abhi to mile the Phir juda ho gaye Kya thi meri khataa Tum sazaa ho gaye Mujhe khone ke baad ik din Tum mujhe yaad karoge Phir dekhna milne ki mujhse Tum fariyad karoge Mujhe khone ke baad ik din Tum mujhe yaad karoge Phir dekhna milne ki mujhse Tum fariyad karoge.....",
      Rating: 4.5,
      Singer: "Darshan Raval",
      price: 100,
      imageUrl: IMG3,
    },
    {
      title: "ALBUM 2",
      Name: "Asal Mein",
      Lyrics:
        "Kyun Khuda ne di laqeerein Jisme zaahir naam nahi tera Likh raha hoon dard saare Yun toh shayar naam nahi mera Itna bhi kya bewafa koi hota hai Yeh soch kar raat bhar dil ye rota hai Asal mein, tum nahi ho mereTum nahi ho mere .....",
      Rating: 4.6,
      Singer: "Darshan Raval",
      price: 150,
      imageUrl: IMG4,
    },
    {
      title: "ALBUM 3",
      Name: "How Many",
      Lyrics:
        "Remember when I’d throw stones at your window I could tell you’re the one you’re the end goal We were set, we were what everyone wants No one thinks when you’re deep,How many times can we break our hearts?How many times can we fall apart? .....",
      Rating: 3.5,
      Singer: "Arman Malik",
      price: 170,
      imageUrl: IMG5,
    },
    {
      title: "ALBUM 4",
      Name: "Hits Of Arman Malik",
      Lyrics:
        "HUM NAHI SUDHREGE,DIL MEIN HO TUM,PEHLA PYAAR,BOL DO NA ZARA,KAUN TUJHE ANd MANY MORE ....",
      Rating: 4.0,
      Singer: "Arman Malik",
      price: 400,
      imageUrl: IMG6,
    },
    {
      title: "ALBUM 5",
      Name: "Hits of Arijit Singh",
      Lyrics:
        "KESARIYA,AGAR TUM SATH HO,O BEDARDEYA,PHIR AUR KYA CHAHIYE,TUJHE KITNA CHAHNE LAGE ANd MANY MORE ....",
      Rating: 4.5,
      Singer: "Arijit Singh",
      price: 800,
      imageUrl: IMG1,
    },
    {
      title: "ALBUM 6",
      Name: "Rishton ke Saare Manjar",
      Lyrics:
        "रिश्तों के सारे मंज़र चुपचाप देखता हूँ रिश्तों के सारे मंज़र चुपचाप देखता हूँ हाथों में सबके खंजर हाथों में सबके खंजर चुपचाप देखता हूँ रिश्तों के सारे मंज़र चुपचाप देखता हूँ जिसमें पला है मेरे बचपन का लम्हा लम्हा जिसमें पला है मेरे बचपन का लम्हा लम्हा जिसमें पला है मेरे बचपन का लम्हा लम्हा उजड़ा हुआ सा वो घर चुपचाप देखता हूँ उजड़ा हुआ सा वो घर चुपचाप देखता हूँ ....",
      Rating: 3.0,
      Singer: "Arijit Singh",
      price: 900,
      imageUrl: IMG2,
    },
    {
      title: "ALBUM 7",
      Name: "Teri Hogaiyaan",
      Lyrics:
        "Kaisa pyaar tu jataaye Kaise paas mere aaye Kaisa pyaar tu jataaye Kaise paas mere aaye Main nibhaaun tere dil ki ye choriyaan Main teri hogaiyaan, haan.. Main teri hogaiyaan... Main teri hogaiyaan... Hmm... haan... Teri laag aisi laagi Rain saari saari jaagi Teri laag kaisi maahiya .... ",
      Rating: 5.0,
      Singer: "Vishal Mishra",
      price: 750,
      imageUrl: IMG7,
    },
    {
      title: "ALBUM 8",
      Name: "Yeh Kya Hua",
      Lyrics:
        "Yeh kya hua Kuch pata na chala Kyun haadsa ban gaya silsila Tukdo mein tum the Tukdo mein main bhi Tukde bane toh hum bane Yeh dil zindagi se Khafa ho chala tha Jisey phir se jeene ke bahaane tum bane Tanha safar ke mushkil dagar mein Tum humsafar jo mil gaye Hai zakhm saare sil gaye ..... ",
      Rating: 4.9,
      Singer: "Shreya Ghoshal & Dev Negi ",
      price: 1000,
      imageUrl: IMG8,
    },
  ];

  const handleViewDetails = (albumName, img, lyrics, rating, singer) => {
    setSelectedAlbum(albumName);
    setSelectedImg(img);
    setSelectedLyrics(lyrics);
    setSelectedStar(rating);
    setSelectedSinger(singer);
  };

  // Add Item to cart
  const AddToCart = async (id) => {
    const avl = ctxt.item.find((item) => item.title === id);
    if (avl) {
      seterrMsg(true);
      return;
    }
    const selectedItem = productsArr.find((item) => item.title === id);
    if (selectedItem) {
      ctxt.addItem({ ...selectedItem });

      // Working on CrudCrud
      // const Response = await axios.post(URLCrud, { ...selectedItem });
      // console.log(Response.data);

      setShowMsg(true);
      setMessageTitle(selectedItem.title);
    }
    setTimeout(() => {
      setShowMsg(false);
    }, 1000);
  };

  // Fetch the updated cart data after adding the item
  // const fetchCartData = () => {
  //   axios
  //     .get(URLCrud)
  //     .then((response) => {
  //       const cartData = response.data;
  //       // console.log(response.data);
  //       for (var i = 0; i < cartData.length; i++) {
  //         ctxt.addItem(cartData[i]);
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching cart data:", error);
  //     });
  // };
  // Load cart data from CRUD service when the component mounts
  // useEffect(() => {
  //   fetchCartData();
  // }, []);

  return (
    <Fragment>
      <div className="d-flex justify-content-center mt-4">
        <Container>
          <Row className="justify-content-center">
            {productsArr.map((item) => (
              <Col key={item.title} xs={12} md={6} className="mb-4">
                <Card className="w-75 mx-auto">
                  <Card.Img
                    variant="top"
                    src={item.imageUrl}
                    className="pord"
                  />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <div className="flex justify-between items-center">
                      <span className="text-md font-semibold whitespace-nowrap overflow-hidden overflow-ellipsis">
                        $ {item.price}
                      </span>
                      <div className="flex flex-col sm:flex-row gap-2">
                        <Button
                          variant="primary"
                          onClick={() => {
                            AddToCart(item.title);
                          }}
                          className="mb-2 sm:mb-0"
                        >
                          Add to Cart
                        </Button>
                        <Button
                          variant="secondary"
                          onClick={() => {
                            handleViewDetails(
                              item.Name,
                              item.imageUrl,
                              item.Lyrics,
                              item.Rating,
                              item.Singer
                            );
                          }}
                          className="mb-2 sm:mb-0"
                        >
                          View Details
                        </Button>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
        {showMsg && <MessageonAdd tit={messageTitle} />}
        {errMsgShow && <Errmsg clk={seterrMsg} />}
      </div>
      {selectedAlbum && (
        <AlbumDetails
          onclk={() => setSelectedAlbum(null)}
          name={selectedAlbum}
          img={selectedImg}
          Lyrics={selectedLyrics}
          Rating={selectedStar}
          Singer={selectedSinger}
        />
      )}
    </Fragment>
  );
};

export default AlbumItem;

// Show Album Details on click viewDetails button in other page not by modal.

/* import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const AlbumItem = () => {

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          </Route>
          <Route path="/details/:albumTitle">
            <AlbumDetails />
          </Route>
        </Switch>
      </Router>
    );
  };
  
  export default AlbumItem;


import { Link } from "react-router-dom";
const AlbumItem = () => {

  return (
    <Button
      variant="secondary"
      as={Link}
      to={`/details/${item.title}`}
      className="mb-2 sm:mb-0"
    >
      View Details
    </Button>
  );
};

import { useParams } from "react-router-dom";

const AlbumDetails = () => {
  const { albumTitle } = useParams();
  const album = productsArr.find((item) => item.title === albumTitle);

  if (!album) {
    return <div>Album not found</div>;
  }

  return (
    <div>
       Display the details of the album using the 'album' object
       For example, album.Name, album.imageUrl, etc. 
      </div>
      );
    };
    
    export default AlbumDetails;
    
*/
