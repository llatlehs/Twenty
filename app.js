alert(`This game is called the twenty game.`)

var total = 0
var ctotal = 0

do{
    var cscore = 0
    var pscore = 0

    do{
        var num1 = Math.floor(Math.random() * 10) + 1;
        cscore = cscore + num1
        alert(`the computer rolled ${num1}, the new score is ${cscore}`)
        if(cscore > 20){
            alert(`it went over 20. you win `)
            total++
        }
    }while (cscore < 16)
    if(cscore <= 20){
        alert("your turn!!")
        do{
            var num2 = Math.floor(Math.random() * 10) + 1;
            pscore = pscore + num2
            alert(`you rolled ${num2}, you total is ${pscore}`)
            if(pscore > 20) {
                alert("you rolled over 20, you lose")
                ctotal++
               break
            }
        if(pscore <= 20){
            var q = prompt("do you want to roll again?")
        }
        }while(q == "y")
    
    }

    if((cscore > pscore) && (cscore <= 20)){
        alert(`you rolled ${pscore}, the computer rolled ${cscore}. you lose!!`)
        ctotal++
    } else if((cscore < pscore) && (pscore <= 20)){
        alert(`you rolled ${pscore}, the computer rolled ${cscore}. you win!!`)
        total++
    } else if (cscore == pscore){
        alert(`yall drawed. your score were ${cscore}`)
    }

    alert(`you won ${total} to the computers wins ${ctotal}`)
    var play = prompt("do you play again y or n")
}while(play == "y")

