import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

import image1 from "./assets/JohnWick1.jpg";
import image2 from "./assets/JohnWick2.jpg";
import image3 from "./assets/JohnWick3.jpg";
import image4 from "./assets/JohnWick4.jpg";
import imageDefault  from "./assets/image1.webp";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Card
        image={imageDefault}
        title="Imaginary"
        rate={1.6}
        description="Lorem ipsum dolor sit asimet consectetur."
      ></Card>
      <Card
        image={image1}
        title="John Wick (2014)"
        rate={4.5}
        description="John Wick é um lendário assassino de aluguel aposentado, lidando com o luto após perder o grande amor de sua vida. Quando um gângster invade sua casa, mata seu cachorro e rouba seu carro, ele é forçado a voltar à ativa e inicia sua vingança."
      ></Card>
      <Card
        image={image2}
        title="John Wick: Capítulo 2 (2017)"
        rate={4.5}
        description="John Wick é forçado a deixar a aposentadoria mais uma vez por causa de uma promessa antiga e viaja para Roma, com o objetivo de ajudar um velho amigo a derrubar uma organização secreta, perigosa e mortal de assassinos procurados em todo o mundo."
      ></Card>
      <Card
        image={image3}
        title="John Wick: Capítulo 3 - Parabellum (2019)"
        rate={5.0}
        description="O lendário John Wick luta para sair de Nova York quando um contrato de 14 milhões de dólares faz dele o alvo dos maiores assassinos do mundo."
      ></Card>
      <Card
        image={image4}
        title="John Wick 4: Baba Yaga"
        rate={5.0}
        description="Com o preço por sua cabeça cada vez maior, o lendário assassino de aluguel John Wick leva sua luta contra o High Table global enquanto procura os jogadores mais poderosos do submundo, de Nova York a Paris, do Japão a Berlim."
      ></Card>
      <Card
        image={image4}
        title="John Wick 4: Baba Yaga"
        rate={5.0}
        description="Com o preço por sua cabeça cada vez maior, o lendário assassino de aluguel John Wick leva sua luta contra o High Table global enquanto procura os jogadores mais poderosos do submundo, de Nova York a Paris, do Japão a Berlim."
      ></Card>
      <Card
        image={image4}
        title="John Wick 4: Baba Yaga"
        rate={5.0}
        description="Com o preço por sua cabeça cada vez maior, o lendário assassino de aluguel John Wick leva sua luta contra o High Table global enquanto procura os jogadores mais poderosos do submundo, de Nova York a Paris, do Japão a Berlim."
      ></Card>
      <Card
        image={image4}
        title="John Wick 4: Baba Yaga"
        rate={5.0}
        description="Com o preço por sua cabeça cada vez maior, o lendário assassino de aluguel John Wick leva sua luta contra o High Table global enquanto procura os jogadores mais poderosos do submundo, de Nova York a Paris, do Japão a Berlim."
      ></Card>
      <Card
        image={image4}
        title="John Wick 4: Baba Yaga"
        rate={5.0}
        description="Com o preço por sua cabeça cada vez maior, o lendário assassino de aluguel John Wick leva sua luta contra o High Table global enquanto procura os jogadores mais poderosos do submundo, de Nova York a Paris, do Japão a Berlim."
      ></Card>
      <Card
        image={image4}
        title="John Wick 4: Baba Yaga"
        rate={5.0}
        description="Com o preço por sua cabeça cada vez maior, o lendário assassino de aluguel John Wick leva sua luta contra o High Table global enquanto procura os jogadores mais poderosos do submundo, de Nova York a Paris, do Japão a Berlim."
      ></Card>
    </div>
  );
}

export default App;
