import CartaoPersonagem from "./components/CartaoPersonagem";
import "./index.css";

function App() {

  
  return (
    <>
      <div className="bg-slate-900 text-neutral-100 flex items-center justify-center gap-4 flex-col">
        <h1 id="title" className="font text-4xl">
          Game of Thrones API Pesquisa
        </h1>
        <p>Digite um número até 2134:</p>
        <input
          id="input"
          type="number"
          className="text-slate-900"
        ></input>
        <button className="m-4">PESQUISAR!</button>
      </div>
      <div className="cartoes-personagem flex gap-4">
        <CartaoPersonagem />
      </div>
    </>
  );
}

export default App;
