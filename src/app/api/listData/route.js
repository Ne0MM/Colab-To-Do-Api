import { NextResponse } from "next/server";

let taskData = [];

export async function GET(){

    return NextResponse.json(taskData);

}

export async function POST(req){

    let newTask = await req.json();

    // Verificar se a requisicao tem id
    if(newTask.id == undefined || newTask.id == null){
        return NextResponse.json("Insira um id valido");
    }

    // Verificar se existe um id igual
    for(let i = 0; i < taskData.length; i++){

        if(newTask.id == taskData[i].id){
            return NextResponse.json("O id inserido ja existe");
        }

    }

    taskData.push(newTask); // Inserir nova task

    return NextResponse.json("A nova janela foi adicionada");

}

export async function PUT(request){

    let newTask = await request.json();
    let taskId = newTask.id;

    // Quando o Id nao e enviado
    if(taskId == undefined){

        return NextResponse.json("A task precisa ter um id valido para ser modificada");
    };

    // Achar task por id
    for(let i = 0; i < taskData.length; i++){

        if(taskData[i].id == taskId){
            taskData[i] = newTask; // Modificar Task
        }

    }

    return NextResponse.json("A task de id : " + taskId + " foi modificada");
}

export async function DELETE(request){

    let taskId = await request.json();

    // Achar a task por id
    for(let i = 0; i < taskData.length; i++){

        if(taskData[i].id == taskId){
            taskData.splice(i, i); // Deletar task
            return NextResponse.json("A task de id : " + taskId + " foi apagada");
        }

    }

    return NextResponse.json("A janela de id : " + taskId + " foi apagada");
}