import { useEffect, useState } from "react";
import CartaoPersonagem from "./components/CartaoPersonagem";
import "./index.css";
import axios from "axios";
import MensagemInicial from "./components/MensagemInicial";

function App() {
  const [characterName, setCharacterName] = useState("");
  const [characterCultura, setCharacterCultura] = useState("");
  const [characterGenero, setCharacterGenero] = useState("");
  const [characterNascimento, setCharacterNascimento] = useState("");
  const [characterMorte, setCharacterMorte] = useState("");
  const [valorDigitado, setValorDigitado] = useState(0);
  const [valorPesquisado, setValorPesquisado] = useState(0);
  const [characterTitulos, setCharacterTitulos] = useState<string[]>([]);
  const [characterAliases, setCharacterAliases] = useState<string[]>([]);
  const [characterAliancas, setCharacterAliancas] = useState<string[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValorDigitado(Number(event.target.value));
  };

  const handleClick = () => {
    if(valorDigitado >= 2135){
      alert('Por favor, digite um número entre 1 e 2134')
    }
    setValorPesquisado(valorDigitado);
  };
  const fetchCharacterName = async (id: number) => {
    try {
      const response = await axios.get(
        `https://anapioficeandfire.com/api/characters/${id}`
      );

      console.log(response.data);
      setCharacterName(response.data.name);
      setCharacterCultura(response.data.culture);
      setCharacterGenero(response.data.gender);
      setCharacterNascimento(response.data.born);
      setCharacterMorte(response.data.died);
      setCharacterTitulos(response.data.titles);
      setCharacterAliases(response.data.aliases);
      setCharacterAliancas(response.data.allegiance);
    } catch (error) {
      console.error("Erro ao buscar o personagem:", error);
    }
  };

  useEffect(() => {
    fetchCharacterName(valorPesquisado);
  }, [valorPesquisado]);

  return (
    <>
      <div className="bg-slate-900 text-neutral-100 flex items-center justify-center gap-4 flex-col">
        <h1 id="title" className="font text-4xl mb-4">
          Game of Thrones API - Pesquisa
        </h1>
        <div>
          <input
            id="input"
            type="number"
            className="text-slate-900"
            onChange={handleInputChange}
          ></input>
          <button className="m-2 py-2 px-4 " onClick={handleClick}>
            PESQUISAR!
          </button>
        </div>
      </div>
      <div className="cartoes-personagem flex items-center justify-center mt-4">
        {valorPesquisado ? (
          <CartaoPersonagem
            nome={characterName}
            cultura={characterCultura}
            genero={characterGenero}
            titulos={characterTitulos}
            aliancas={characterAliancas}
            nascimento={characterNascimento}
            morte={characterMorte}
            apelidos={characterAliases}
          />
        ) : (
          <MensagemInicial />
        )}
      </div>
    </>
  );
}

export default App;
