// Retorna os dados das janelas
export const getJanela = async () => {

    let promessaDadosNovos = await fetch("/api/listData");
    let dadosNovos = await promessaDadosNovos.json();

    console.log(dadosNovos);
    return dadosNovos;

}

// Adiciona uma nova janela
export const postJanela = async (map) => {

    let response = await fetch("api/listData", {
      method : "POST",
      headers: {
        'content-type' : 'application/json',
      },
      body : JSON.stringify(map),
    })

    console.log(await response.json());

}

// Modifica alguma janela por id
export const putJanela = async (map) => {

    let response = await fetch("api/listData", {
      method : "PUT",
      headers : {
        'content-type' : 'application/json'
      },
      body : JSON.stringify(map),
    })

    console.log(await response.json());
}

// Deleta alguma janela por id
export const deleteJanela = async (id) => {

    let response = await fetch("api/listData", {
      method : "DELETE",
      headers : {
        'content-type' : 'application/json'
      },
      body : JSON.stringify(id),
    })
    
    console.log(await response.json());
}