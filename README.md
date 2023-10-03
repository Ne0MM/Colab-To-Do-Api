Colecao de API e Funcoes com o intuito de ajudar os estudantes da materia de LOP a criar uma To-Do-List em Next.js

funcoes:
    getJanela():
        -Retorna a lista de dados das presentes na API

    postJanela(mapa):
        -Cria uma nova janela dentro da API
        -Entrada com um mapa da janela em JSON com no minimo um ID
        mapa = {
            id : 5,
            [key : string] : any,
        }
    
    putJanela(mapa):
        -Modifica uma janela existente usando o ID
        -Entrada e um mapa que contem o ID igual ao que deve ser modificado
        mapa = {
            id : "Id da janela a ser modificada",
            [key : string] : any,
        }

    deleteJanela(id):
        -Apaga uma janela existente usando o ID
        -Entrada e o ID da janela a ser apagada