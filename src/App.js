import React, { useEffect } from "react";
import {
  Row,
  Col,
  Container,
  Image,
  Card,
  Form,
  OverlayTrigger,
  Accordion,
} from "react-bootstrap";
import "./App.css";
import { properties } from "./properties";
import SpecialImage from "./SpecialImage";
import StoreRating from "./StoreRating";

const chaoticList = [
  "egg",
  "double",
  "triple",
  "quadruple",
  "ton",
  "queso",
  "taco",
  "garlic",
  "fries",
  "burrito",
  "smothered",
  "hash", //hashbrowns 
  "pancake",
  "cinnamon",
  "strawberry",
  "syrup",
  "cajun",
  "curds",
  "guac",
  "jalape", //jalapenos but they use n-tilde so jalape instead
  "tortilla",
  "sticks", //Mozarella sticks

];

const lawfulList = [
  "burger",
  "patty",
  "bun",
  "onion",
  "tomato",
  "lettuce",
  "cheese",
  "burg",
  "cheddar",
  "pickle",
  "bacon",
  "mayo",
  "mustard",
  "lawful",
];

const evilList = [
  "dog",
  "dog",
  "corn",
  //"ranch", ranch is good (midwest)
  "bbq",
  "italian",
  "pastry",
  "bagel",
  "pickled",
  "deep",
  "fried",
  "quadruple", //Quadruple is chaotic + evil. NOTHING needs 4.
  "butter", //Same as fried
  "flat", //Flatbread but anything flat probably evil
  "buttermilk",
  "weiners", 
  "sauerkraut",
  "pizza",
  "provel", //Evil midwest
  "pepperoni",
  "belly", //Pork belly. Up for debate imo.
  "fat", //bacon fat

];

const goodList = [
  "burger",
  "patty",
  "cheese",
  "mozzarella",
  "sauce",
  "grilled",
  "onion",
  "bun",
  "sausage",
  "bell pappers",
  "chicken",
  "potato bun", //potato bun is good lawful, regular bun just lawful
  "honey",
  "swiss",
  "sourdough",
  "cojita",
  "avocado",
  "ranch", //midwest <3
  "garlic",

];

const chaoticWords = ["overwhelming", "busy", "noisy", "fast-paced"];

const lawfulWords = ["relaxing", "calm", "easygoing", "mild"];

const evilWords = ["painful", "meaningless", "worthless", "horrible", "dangerous"];

const goodWords = ["fulfilling", "accomplishing", "rewarding", "empowering"];

const bsBeginnings = [
  "The cheese has sealed your fate. Today is a ",
  "I sense you will have a ",
  "I see it in the beef. It will be a ",
  "The meat foretells of a ",
  "The buns contain your future. It will be a ",
];

function App() {

  useEffect(() => {
    document.title = "BurgerScopes";
  }, []);

  function getVerdict(desc) {
    let chaoticLawful = 0;
    let evilGood = 0;
    let vibes = 0;

    const lowerText = desc.toLowerCase();

    chaoticList.forEach((e) => {
      if (lowerText.includes(e)) {
        chaoticLawful -= 1;
      }
    });
    lawfulList.forEach((e) => {
      if (lowerText.includes(e)) {
        chaoticLawful += 1;
        vibes += 1;
      }
    });
    evilList.forEach((e) => {
      if (lowerText.includes(e)) {
        evilGood -= 1;
      }
    });
    goodList.forEach((e) => {
      if (lowerText.includes(e)) {
        evilGood += 1;
        vibes += 1;
      }
    });

    vibes = vibes * vibes + (chaoticLawful + evilGood);

    return {
      cl: chaoticLawful,
      eg: evilGood,
      v: vibes,
    };
  }

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  // Random from array
  function rfa(arr) {
    return arr[getRandomInt(arr.length)];
  }

  function getBurgerscope(ranks) {
    let vibeCheck = ranks.v / 10.0;

    let burgerScope = "";

    if (vibeCheck < 2) {
      burgerScope += bsBeginnings[0];
    } else if (vibeCheck < 5) {
      burgerScope += bsBeginnings[1];
    } else if (vibeCheck < 10) {
      burgerScope += bsBeginnings[2];
    } else {
      burgerScope += bsBeginnings[3];
    }

    let egCount = Math.abs(ranks.eg);
    let clCount = Math.abs(ranks.cl);

    for (let i = 0; i < egCount; ++i) {
      burgerScope += ranks.eg < 0 ? rfa(evilWords) : rfa(goodWords);
      burgerScope += " ";
    }

    for (let i = 0; i < clCount; ++i) {
      burgerScope += ranks.cl < 0 ? rfa(chaoticWords) : rfa(lawfulWords);
      burgerScope += " ";
    }

    burgerScope += "day for you.";

    return burgerScope;
  }

  const verdicts = {
    kirkwood: getVerdict(properties.kirkwood.description),
    mccausland: getVerdict(properties.mccausland.description),
    downtownstl: getVerdict(properties.downtownstl.description),
    ofallonil: getVerdict(properties.ofallonil.description),
    alittlehi: getVerdict(properties.alittlehi.description),
  };

  const burgerscopes = {
    kirkwood: getBurgerscope(verdicts.kirkwood),
    mccausland: getBurgerscope(verdicts.mccausland),
    downtownstl: getBurgerscope(verdicts.downtownstl),
    ofallonil: getBurgerscope(verdicts.ofallonil),
    alittlehi: getBurgerscope(verdicts.alittlehi),
  };

  return (
    <div className="App">
      <header className="App-header">
        <Container className="p-5">
          <Row>
            <Col>
              <Image
                src="https://chickenoutchicken.com/wp-content/uploads/2020/08/logo-hipointe.svg"
                className="App-logo"
                alt="logo"
                fluid
              />
            </Col>
          </Row>
          <Row style={{ zIndex: 1 }}>
            <Col className="AppZinherit">
              <SpecialImage store={properties.kirkwood} />
            </Col>
            <Col className="AppZinherit">
              <SpecialImage store={properties.mccausland} />
            </Col>
            <Col className="AppZinherit">
              <SpecialImage store={properties.downtownstl} />
            </Col>
            <Col className="AppZinherit">
              <SpecialImage store={properties.ofallonil} />
            </Col>
            <Col className="AppZinherit">
              <SpecialImage store={properties.alittlehi} />
            </Col>
          </Row>
          <Row>
            <Col>
              <StoreRating ranks={verdicts.kirkwood} />
            </Col>
            <Col>
              <StoreRating ranks={verdicts.mccausland} />
            </Col>
            <Col>
              <StoreRating ranks={verdicts.downtownstl} />
            </Col>
            <Col>
              <StoreRating ranks={verdicts.ofallonil} />
            </Col>
            <Col>
              <StoreRating ranks={verdicts.alittlehi} />
            </Col>
          </Row>
          <Row>
            <h1 style={{ color: "purple" }}>
              <span>
                <b>
                  BurgerScopes for
                  <span style={{ color: "teal" }}> 1/18/2023</span>:
                </b>
              </span>
            </h1>
          </Row>
          <Row>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Kirkwood</Accordion.Header>
                <Accordion.Body>{burgerscopes.kirkwood}</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>McCausland</Accordion.Header>
                <Accordion.Body>{burgerscopes.mccausland}</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Downtown STL</Accordion.Header>
                <Accordion.Body>{burgerscopes.downtownstl}</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Ofallon</Accordion.Header>
                <Accordion.Body>{burgerscopes.ofallonil}</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>A Little Hi</Accordion.Header>
                <Accordion.Body>{burgerscopes.alittlehi}</Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Row>
        </Container>
      </header>
    </div>
  );
}

export default App;
