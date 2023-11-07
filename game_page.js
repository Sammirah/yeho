player1Name = localStorage.getItem("player1Name");
player2Name = localStorage.getItem("player2Name");
question_turn = "player";
answer_turn = "player2";

player1Score = 0;
player2Score = 0;

document.getElementById("player1_name").innerHTML = player1Name +  " : ";
document.getElementById("player2_name").innerHTML = player2Name +  " : ";

document.getElementById("player1Score").innerHTML = player1Score + " : ";
document.getElementById("player2Score").innerHTML = player2Score + " : ";

document.getElementById("PlayerQuestion").innerHTML = "Turno de Pergunta - " + player1Name;
document.getElementById("PlayerAnswer").innerHTML = "Turno de Responder - " + player2Name;

function enviar() {
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2);

    question_number = "<h4>" + number1 + "X" + number2 + "</h4>";
    input_box = "<br>Resposta : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn' onclick='check()'>Checar</button>";
    row = question_number + input_box + check_button;

    document.getElementById("output").innerHTML = row;
}

function check() {
    get_answer = document.getElementById("input_check_box").value;
    if(get_answer == actual_answer)
    {
        if(answer_turn == "player")
        {
            player1Score = player1Score +1
            document.getElementById("player1Score").innerHTML = player1Score;
        }
        else {
            player2Score = player2Score +1;
            document.getElementById("player2Score").innerHTML = player2Score;
        }
    }
    if(question_turn == "player")
    {
        question_turn = "player2"
        document.getElementById("PlayerQuestion").innerHTML = "Turno de pergunta - " + player2Name;
    }
    else {
        question_turn = "player"
        document.getElementById("PlayerQuestion").innerHTML = "Turno de pergunta - " + player1Name;
    }
    if(answer_turn == "player")
    {
        answer_turn = "player2"
        document.getElementById("PlayerAnswer").innerHTML = "Turno de resposta - " + player2Name;
    }
    else {
        answer_turn = "player"
        document.getElementById("PlayerAnswer").innerHTML = "Turno de resposta - " + player1Name;
    }
}