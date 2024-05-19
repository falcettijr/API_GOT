import nedImage from '../assets/imgs/ned.jpg';

const CartaoPersonagem = () => {
  return (
    <div className="cartao-personagem_container items-center flex border-2 border-solid rounded-lg border-slate-900 p-4 m-2 gap-8 w-screen">
      <div className="cartao-personagem_imagem"><img src={nedImage}/></div>
      <div className='cartao-personagem_dados m-2 border-2 border-solid rounded-lg border-slate-900 p-4'>
        <div className="cartao-personagem_nome_titulo text-lg font-bold">Nome: <div className="cartao-personagem_nome_valor text-sm font-normal"> Ned Stark</div></div>

        <div className="cartao-personagem_titulo_titulo text-lg font-bold">Título: <div className="cartao-personagem_titulo_valor text-sm font-normal">Sor</div></div>

        <div className="cartao-personagem_cultura_titulo text-lg font-bold">Cultura: <div className="cartao-personagem_cultura_valor text-sm font-normal">Nortenho</div></div>

        <div className="cartao-personagem_genero_titulo text-lg font-bold">Gênero: <div className="cartao-personagem_genero_valor text-sm font-normal">Male</div></div>

        <div className="cartao-personagem_nascimento_titulo text-lg font-bold">Nascimento: <div className="cartao-personagem_nascimento_valor text-sm font-normal">232 dc</div></div>

        <div className="cartao-personagem_morte_titulo text-lg font-bold">Morte: <div className="cartao-personagem_morte_valor text-sm font-normal">-</div></div>
        
        <div className="cartao-personagem_alianca_titulo text-lg font-bold">Aliança: <div className="cartao-personagem_alianca_valor text-sm font-normal">Casa Stark</div></div>
      </div>
    </div>
  )
}
export default CartaoPersonagem