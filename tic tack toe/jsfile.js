
const xClass='x'
const oClass='o'

const cellElem =document.querySelectorAll('#cell')
const board =document.getElementById('board')
let oturn                           
const series=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]
const winning_message = document.querySelector('.winning_message')
const winning_message_text = document.querySelector('.winning_message_text')

cellElem.forEach((cell)=>{
    cell.addEventListener('click', handleclick,{ once: true})
    // alert('hi')
    board.classList.add(xClass)
})
const newGameBtn = document.getElementById('newGame')
newGameBtn.addEventListener('click',()=>{
    location.reload()
    // console.log('hi')

})

function handleclick(e){
    const cell =e.target
    const currentClass= oturn ? oClass :xClass
    cell.classList.add(currentClass)
    if(checkWin(currentClass)){
        let winer=oturn ? oClass :xClass
        winning_message_text.innerText=`${winer} win's`
        winning_message.classList.add('show')
    }else if(isDraw()){
        winning_message_text.innerText='Draw'
        winning_message.classList.add('show')
    }else{
    //hoverEffect()
        oturn=!oturn
        hoverEffect()
    }
}
function isDraw(){
    return [...cellElem].every(cell => {                        //destructure
        return cell.classList.contains(xClass) || cell.classList.contains(oClass)
    })
}

hoverEffect = ()=> {
    board.classList.remove(oClass)
    board.classList.remove(xClass)
    if(oturn){
        board.classList.add(oClass)
    }
    else{
        board.classList.add(xClass)

    }
}
function checkWin(currentClass){
    return series.some(seriesIndex=>{
        return seriesIndex.every(index=>{
            return cellElem[index].classList.contains(currentClass)
        })
    })
}
