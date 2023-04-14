const simples= document.getElementsByClassName('p-headersimples')

const label= document.getElementById('text');
const back= document.getElementById('back');


    document.getElementById('botao').addEventListener("click",function(){
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
        
    
        })
    
    
    const random_hex_color_code = () => {
        let n = (Math.random() * 0xfffff * 1000000).toString(16);
        return '#' + n.slice(0, 6);
      };
    
