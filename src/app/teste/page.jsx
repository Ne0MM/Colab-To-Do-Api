"use client"

import React, { useEffect, useState } from "react"
import styles from "./teste.module.css"
import { postJanela, getJanela , putJanela , deleteJanela} from "../components/ToDoFunctions"

export default function page() {

  const [ dadosJanelas, setDadosJanelas] = useState([]);
  const [ idJanela, setIdJanela] = useState(0);
  const [ mensagemJanela, setMensagemJanela] = useState("");

  // Atualiza as informacoes quando entrar no site
  useEffect(() => {

    refreshJanela();

  },[])

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

    await postJanela(novaJanela);
    setIdJanela(idJanela + 1);
    refreshJanela();
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
    <div className={styles.mainSec}>

      {/* Header */}
      <header className={styles.header}>
        <h1 className={styles.headerText}>
          To Do List
        </h1>
      </header>

      {/* Search Bar */}
      <div className={styles.searchBar}>

        <input
        type="text"
        value={mensagemJanela}
        onChange={(e) => setMensagemJanela(e.target.value)}
        className={styles.messageInput}
        maxLength={60}
        />

        <button
        className={styles.messageButton}
        onClick={() => postDadosJanelas()}
        >
          adicionar
        </button>

      </div>

      {/* Task Windown */}
      {
        dadosJanelas.map((element) => {
          return (
            <div 
            key={element.id}
            className={styles.taskContainer}>

              <p>
                id : {element.id}
              </p>

              <div className={styles.taskMessageContainer}>
                <p>
                  {element.mensagem}
                </p>
              </div>
            </div>
          )
        })
      }

    </div>
  )
}