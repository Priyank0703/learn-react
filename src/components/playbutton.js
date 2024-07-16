import './playbutton.css'


function PlayButton(){

function handleclick(){
    console.log('play')
}


return(
    <button onClick={handleclick}>Play</button>
) 

}

export default PlayButton;