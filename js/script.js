
const container = document.querySelector('.container');
const listNumbers = [];
const button = document.getElementById("mode_btn");
let selectMode = document.getElementById("select_mode");
let bombs = [];
let bomb = [];




button.addEventListener("click", function(){


    container.innerHTML = "";
    let box = difficultySelect(selectMode);


    console.log('button', box);



    init(box);

  

})



function init(tot){

    bomb = genBomb(bombs);
    console.log('bombe', bomb); 
    
    for(let i = 0; i < tot; i++){

        console.log('functionInit', tot);

        // creo l'elemento square e lo aggiungo al container
        const sq = createSquare(container);
        let plus = i + 1;
        console.log('contatore', plus);
        sq.innerHTML = plus;


        let control = 1;
        while (control == 0) {
            

            sq.addEventListener('click',function(){

                //  console.log(this);
                if (bomb.includes(plus)) {
      
                  this.classList.add('bombs');
                  alert('HAI PERSO');
                  control == 0;
                  
                    
                }else
                  this.classList.add('clicked');
              }
              
              )


        }
        
    
    }
    
}

function genBomb(bomb){
    bomb = [];
    let bombRandom = 0;
    let num = difficultySelect(selectMode);

    console.log('num', num);

    for (let i = 0; i < 16; i++) {
        bombRandom = generateRandomInt(1, num);   

        if (bomb.includes(bombRandom)) {
            i--;         
        }else{
            bomb.push(bombRandom);
        }
    }
    return bomb;
}


function createSquare(target){
    
    const sq = document.createElement('div');
    // const numRandom = generateUniqueRandomInt(listNumbers, 1 , box1);

    
    let classMode = '';
    if(selectMode.value == "easy"){
        classMode = 'square_easy';

    } else if(selectMode.value == "normal"){
        classMode = 'square_normal';
 
    } else {
        classMode = 'square_crazy';
    }

    sq.classList.add(classMode);

    console.log('difficoltà', classMode)


    target.append(sq);
    return sq;
}




function generateRandomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}



function difficultySelect(selection){

    let grid = 0;
    
    if(selection.value == "easy"){
        grid = 100;
        
    } else if(selection.value == "normal"){
        grid = 81;
       
    } else {
        grid = 49;
       
    };

    return grid;
}