import { useEffect, useState } from "react";
import CartaoPersonagem from "./components/CartaoPersonagem";
import "./index.css";
import axios from "axios";

function App() {
  const [characterName, setCharacterName] = useState("");
  const [characterTitulo, setCharacterTitulo] = useState("");
  const [characterCultura, setCharacterCultura] = useState("");
  const [characterGenero, setCharacterGenero] = useState("");
  const [characterAlianca, setCharacterAlianca] = useState("");
  const [characterNascimento, setCharacterNascimento] = useState("");
  const [characterMorte, setCharacterMorte] = useState("");
  const [valorDigitado, setValorDigitado] = useState(0);
  const [valorPesquisado, setValorPesquisado] = useState(0);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValorDigitado(Number(event.target.value));
  };

  const handleClick = () => {
    setValorPesquisado(valorDigitado);
  }
  const fetchCharacterName = async (id: number) => {
    try {
      const response = await axios.get(
        `https://anapioficeandfire.com/api/characters/${id}`
      );
      setCharacterName(response.data.name);
      setCharacterTitulo(response.data.titles[0]);
      setCharacterCultura(response.data.culture);
      setCharacterGenero(response.data.gender);
      setCharacterAlianca(response.data.allegiance[0]);
      setCharacterNascimento(response.data.born);
      setCharacterMorte(response.data.died);
    } catch (error) {
      console.error("Erro ao buscar o nome do personagem:", error);
    }
  };

  useEffect(() => {
    fetchCharacterName(valorPesquisado);
  }, [valorPesquisado]);

  return (
    <>
      <div className="bg-slate-900 text-neutral-100 flex items-center justify-center gap-4 flex-col">
        <h1 id="title" className="font text-4xl">
          Game of Thrones API - Pesquisa
        </h1>
        <p>Digite um número até 2134:</p>
        <input id="input" type="number" className="text-slate-900" onChange={handleInputChange}></input>
        <button className="m-4" onClick={handleClick}>PESQUISAR!</button>
      </div>
      <div className="cartoes-personagem flex gap-4">
        <CartaoPersonagem
          nome={characterName}
          cultura={characterCultura}
          genero={characterGenero}
          titulo={characterTitulo}
          alianca={characterAlianca}
          nascimento={characterNascimento}
          morte={characterMorte}
        />
      </div>
    </>
  );
}

export default App;
