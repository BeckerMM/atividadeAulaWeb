const label= document.getElementById('text');
const back= document.getElementById('back');


document.getElementById('simples').addEventListener("click", function(){
    back.style.backgroundColor='white';
            label.innerText='White';
            label.style.color='white';
    document.getElementById('botao').classList.remove('hexa');
    document.getElementById('botao').classList.add('simples');
    
});

document.getElementById('hexa').addEventListener("click", function(){
    
    document.getElementById('botao').classList.remove('simples');
    document.getElementById('botao').classList.add('hexa')
    });


    document.getElementById('botao').addEventListener("click",function(){
        if( document.getElementById('botao').classList.contains('simples')){

        if(back.style.backgroundColor == 'white'){
            back.style.backgroundColor='blue';
            label.innerText='Blue';
            label.style.color='blue';
    
        }
        else if(back.style.backgroundColor == 'blue'){
            back.style.backgroundColor='green';
            label.innerText='Green';
            label.style.color='green';
        }
        else if(back.style.backgroundColor == 'green'){
            back.style.backgroundColor='red';
            label.innerText='Red';
            label.style.color='red';
        }
        else if(back.style.backgroundColor == 'red'){
            back.style.backgroundColor='purple';
            label.innerText='Purple';
            label.style.color='purple';
        }
        else if(back.style.backgroundColor == 'purple'){
            back.style.backgroundColor='grey';
            label.innerText='Grey';
            label.style.color='grey';
        }
        else if(back.style.backgroundColor == 'grey'){
            back.style.backgroundColor='orange';
            label.innerText='Orange';
            label.style.color='orange';
        }else if(back.style.backgroundColor == 'orange'){
            back.style.backgroundColor='white';
            label.innerText='White';
            label.style.color='white';
        }
        
    }    
        })

    document.getElementById('botao').addEventListener('click',function(){
        if(document.getElementById('botao').classList.contains('hexa')){
            const color = hexaRandom();
            back.style.backgroundColor=color;
    
            label.textContent.remove;
            label.innerText= color
            label.style.color=color
    }

    })
    
    
    function hexaRandom () {
        let n = (Math.random() * 0xfffff * 1000000).toString(16);
        return '#' + n.slice(0, 6);
      };
    
