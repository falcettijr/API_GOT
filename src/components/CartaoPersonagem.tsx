
export type Personagem = {
  nome: string;
  titulo: string;
  cultura: string;
  genero: string;
  alianca: string;
  nascimento: string;
  morte: string;
}

const CartaoPersonagem = ({nome, titulo, cultura, genero, alianca, nascimento, morte}: Personagem) => {
  nome
  titulo
  cultura
  genero
  alianca
  nascimento
  morte

  return (
    <div className="cartao-personagem_container items-center flex border-2 border-solid rounded-lg border-slate-900 p-8 m-2 gap-8 w-screen justify-center">
      <div className='cartao-personagem_dados m-2 w-2/5 border-2 border-solid rounded-lg border-slate-900 p-4'>
        <div className="cartao-personagem_nome_titulo text-lg font-bold">Nome: <div className="cartao-personagem_nome_valor text-sm font-normal">{nome}</div></div>

        <div className="cartao-personagem_titulo_titulo text-lg font-bold">Título: <div className="cartao-personagem_titulo_valor text-sm font-normal">{titulo}</div></div>

        <div className="cartao-personagem_cultura_titulo text-lg font-bold">Cultura: <div className="cartao-personagem_cultura_valor text-sm font-normal">{cultura ? cultura : 'Não Disponível'}</div></div>

        <div className="cartao-personagem_genero_titulo text-lg font-bold">Gênero: <div  className="cartao-personagem_genero_valor text-sm font-normal">{genero === 'Male' && 'Masculino' || genero === 'Female' && 'Feminino' || genero ? genero : 'Não Disponível'}</div></div>

        <div className="cartao-personagem_nascimento_titulo text-lg font-bold">Nascimento: <div className="cartao-personagem_nascimento_valor text-sm font-normal">{nascimento ? nascimento : 'Não Disponível'}</div></div>

        <div className="cartao-personagem_morte_titulo text-lg font-bold">Morte: <div className="cartao-personagem_morte_valor text-sm font-normal">{morte ? morte : 'Vivo'}</div></div>
        
        <div className="cartao-personagem_alianca_titulo text-lg font-bold">Aliança: <div className="cartao-personagem_alianca_valor text-sm font-normal">{alianca}</div></div>
      </div>
    </div>
  )
}
export default CartaoPersonagem