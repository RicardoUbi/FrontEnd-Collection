import './App.css';
import { Navegacao } from './Navegacao';
import { ItemCardapio } from './ItemCardapio';
import {sobremesas, bebidas, pratosPrincipais} from "./cardapio";
import { useState } from 'react';



export function App(){
  const paginasMenu = [pratosPrincipais, sobremesas, bebidas];
  const [paginaSelect, atualizarPagina] = useState(0);

  return <>
          <img src="./src/assets/RestMar.jpg" alt="" className="capa"/>
          <Navegacao atualizarPagina={atualizarPagina}/>
          <div className='menu'>
            {paginasMenu[paginaSelect].map(item => <ItemCardapio nome={item.nome} descricao={item.descricao} preco={item.preco} imagem = {item.imagem}/>)}
          </div>
        </>
}