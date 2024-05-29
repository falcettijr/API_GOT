import axios from "axios";
import { useEffect, useState } from "react";

export type Personagem = {
  nome: string;
  titulos: string[] | undefined;
  cultura: string;
  genero: string;
  aliancas: string[] | undefined;
  nascimento: string;
  morte: string;
  apelidos: string[] | undefined;
};

const CartaoPersonagem = ({
  nome,
  titulos,
  cultura,
  genero,
  aliancas,
  nascimento,
  morte,
  apelidos,
}: Personagem) => {
  nome;
  titulos;
  cultura;
  genero;
  aliancas;
  nascimento;
  morte;
  apelidos;

  const [casaPesquisada, setCasaPesquisada] = useState<string>("");

  const fetchNomeCasa = async (uri: string): Promise<string[] | undefined> => {
    try {
      const response = await axios.get(uri);

      setCasaPesquisada(response.data.name);
      return response.data.name;
    } catch (error) {
      console.error("Erro ao buscar o personagem:", error);
    }
  };

  const getHouses = async () => {
    aliancas?.map(async (alianca) => {
      const resInterno = await fetchNomeCasa(alianca);

      return resInterno;
    });
  };

  useEffect(() => {
    getHouses();
  }, [aliancas]);

  return (
    <div className="cartao-personagem_container items-center flex border-2 border-solid rounded-lg border-slate-900 p-8 m-2 gap-8 w-screen justify-center">
      <div className="cartao-personagem_dados m-2 w-2/5 border-2 border-solid rounded-lg border-slate-900">
        <div className="cartao-personagem_nome_titulo text-2xl font-bold  border-black border-b-2 border-solid p-3 text-white bg-slate-900">
          Cartão do personagem
        </div>
        <div className="cartao-personagem_nome_titulo text-lg font-bold p-4">
          <div className="cartao-personagem_nome_titulo text-lg font-bold">
            Casa:{" "}
            <div className="cartao-personagem_nome_valor text-sm font-normal">
              {casaPesquisada ? casaPesquisada : "Não Disponível"}
            </div>
          </div>
          Nome:
          <div className="cartao-personagem_nome_valor text-sm font-normal">
            {nome ? nome : "Não Disponível"}
          </div>
          {titulos && titulos.length > 0 && (
            <div className="cartao-personagem_titulo_titulo text-lg font-bold">
              Título:
              <div className="cartao-personagem_titulo_valor text-sm font-normal">
                {titulos?.map((titulo, index) => (
                  <ol key={index}>
                    <li key={index}>
                      {titulos.length > 1
                        ? `${index + 1} - ${titulo}`
                        : `${titulo}`}
                    </li>
                  </ol>
                ))}
              </div>
            </div>
          )}
          <div className="cartao-personagem_cultura_titulo text-lg font-bold">
            Cultura:{" "}
            <div className="cartao-personagem_cultura_valor text-sm font-normal">
              {cultura ? cultura : "Não Disponível"}
            </div>
          </div>
          <div className="cartao-personagem_genero_titulo text-lg font-bold">
            Gênero:{" "}
            <div className="cartao-personagem_genero_valor text-sm font-normal">
              {genero === "Male"
                ? "Masculino"
                : genero === "Female"
                ? "Feminino"
                : "Não Disponível"}
            </div>
          </div>
          <div className="cartao-personagem_nascimento_titulo text-lg font-bold">
            Nascimento:{" "}
            <div className="cartao-personagem_nascimento_valor text-sm font-normal">
              {nascimento ? nascimento : "Não Disponível"}
            </div>
          </div>
        </div>

        {morte && (
          <div className="cartao-personagem_morte_titulo text-lg font-bold">
            Morte:{" "}
            <div className="cartao-personagem_morte_valor text-sm font-normal">
              {morte}
            </div>
          </div>
        )}

        {apelidos && apelidos.length > 0 && (
          <div className="cartao-personagem_alianca_titulo text-lg font-bold">
            Conhecido(a) por:{" "}
            <div className="cartao-personagem_alianca_valor text-sm font-normal">
              {
                <ul>
                  {apelidos?.map((alias, index) => (
                    <ol key={index}>
                      <li key={index}>
                        {index + 1} - {alias}
                      </li>
                    </ol>
                  ))}
                </ul>
              }
            </div>
          </div>
        )}
      </div>
      <div className="cartao-casas_dados m-2 w-2/5 border-2 border-solid rounded-lg border-slate-900">
        <div className="cartao-personagem_nome_titulo text-2xl font-bold  border-black border-b-2 border-solid p-3 text-white bg-slate-900">
          Cartão da Casa
        </div>
        <div className="cartao-personagem_nome_titulo text-lg font-bold p-4">
          <div className="cartao-personagem_nome_titulo text-lg font-bold">
            Casa:{" "}
            <div className="cartao-personagem_nome_valor text-sm font-normal">
              {casaPesquisada ? casaPesquisada : "Não Disponível"}
            </div>
          </div>
          Nome:
          <div className="cartao-personagem_nome_valor text-sm font-normal">
            {nome ? nome : "Não Disponível"}
          </div>
          {titulos && titulos.length > 0 && (
            <div className="cartao-personagem_titulo_titulo text-lg font-bold">
              Título:
              <div className="cartao-personagem_titulo_valor text-sm font-normal">
                {titulos?.map((titulo, index) => (
                  <ol key={index}>
                    <li key={index}>
                      {titulos.length > 1
                        ? `${index + 1} - ${titulo}`
                        : `${titulo}`}
                    </li>
                  </ol>
                ))}
              </div>
            </div>
          )}
          <div className="cartao-personagem_cultura_titulo text-lg font-bold">
            Cultura:{" "}
            <div className="cartao-personagem_cultura_valor text-sm font-normal">
              {cultura ? cultura : "Não Disponível"}
            </div>
          </div>
          <div className="cartao-personagem_genero_titulo text-lg font-bold">
            Gênero:{" "}
            <div className="cartao-personagem_genero_valor text-sm font-normal">
              {genero === "Male"
                ? "Masculino"
                : genero === "Female"
                ? "Feminino"
                : "Não Disponível"}
            </div>
          </div>
          <div className="cartao-personagem_nascimento_titulo text-lg font-bold">
            Nascimento:{" "}
            <div className="cartao-personagem_nascimento_valor text-sm font-normal">
              {nascimento ? nascimento : "Não Disponível"}
            </div>
          </div>
        </div>

        {morte && (
          <div className="cartao-personagem_morte_titulo text-lg font-bold">
            Morte:{" "}
            <div className="cartao-personagem_morte_valor text-sm font-normal">
              {morte}
            </div>
          </div>
        )}

        {apelidos && apelidos.length > 0 && (
          <div className="cartao-personagem_alianca_titulo text-lg font-bold">
            Conhecido(a) por:{" "}
            <div className="cartao-personagem_alianca_valor text-sm font-normal">
              {
                <ul>
                  {apelidos?.map((alias, index) => (
                    <ol key={index}>
                      <li key={index}>
                        {index + 1} - {alias}
                      </li>
                    </ol>
                  ))}
                </ul>
              }
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default CartaoPersonagem;
