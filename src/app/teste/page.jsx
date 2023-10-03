"use client"

import React, { useState } from 'react'
import { postJanela, getJanela , putJanela , deleteJanela} from "../components/ToDoFunctions"

export default function page() {

  const [ dadosJanelas, setDadosJanelas] = useState([]);
  const [ idJanela, setIdJanela] = useState(0);
  const [ mensagemJanela, setMensagemJanela] = useState("");

  // Atualizar as janelas existentes
  const refreshJanela = async () => {

    let dadosNovos = await getJanela();

    setDadosJanelas(dadosNovos);
  }

  // Adicionar nova janela
  const postDadosJanelas = async () => {

    let novaJanela = {
      id : idJanela,
      mensagem : mensagemJanela,
    }

    postJanela(novaJanela);
  }

  // Modificar Janelas existentes por id
  const putDadosJanelas = async () => {

    let janelaModificada = {
      id : idJanela,
      mensagem : mensagemJanela,
    }

    putJanela(janelaModificada);
  }

  return (
    <div>

      <div>
        <button onClick={() => refreshJanela()}>Atualizar dados</button>
      </div>

      <div>
        <span>Id da janela</span>
        <input 
        type="text"
        value={idJanela}
        onChange={(e) => setIdJanela(e.target.value)}
        />

        <span>Mensagem Da janela</span>
        <input 
        type="text"
        value={mensagemJanela}
        onChange={(e) => setMensagemJanela(e.target.value)}
        />

        <button onClick={() => postDadosJanelas()}>Criar nova janela</button>
        <button onClick={() => putDadosJanelas()}>Modificar Janela Existente</button>
        <button onClick={() => deleteJanela(idJanela)}>Deletar janela</button>
      </div>
    </div>
  )
}