 

    export  let frutas = [ 
    { descricao: 'Banana', preco: 3.40 }, 
    { descricao: 'Morango', preco: 5.30 }, 
    { descricao: 'Pessego', preco: 6.10 }, 
    { descricao: 'Kiwi', preco: 12.60 },
    { descricao: 'Melao', preco: 4.20 },
    { descricao: 'Melancia', preco: 1.90 },
    { descricao: 'Abacaxi', preco: 3.40 },
    ]
    
     export const listaFrutas = document.querySelector("#produtos");
     export const cestaFrutas = document.querySelector('#cestaDoCliente');
     export const total = document.querySelector('#mostraTotalCompra');
    
    export function kitanda (){
     

        let totalzinho = 0;
        
        for (let pro of frutas){
            const filholi = document.createElement('li');
            listaFrutas.appendChild(filholi).textContent= pro.descricao;
            filholi.setAttribute('data-preco', pro.preco );
          for(let listaP in pro){
            let cesta = [];
            filholi.addEventListener('click', function(){
              if( listaP == 'descricao'){
                    if( cesta.indexOf(pro[listaP]) !== -1){ 
                        alert(`A fruta ${pro[listaP]} já está adicionada na cesta de compras!`);
                    }else{
                       cesta.push(pro[listaP]);
                       const filho2 = document.createElement('li');
                       cestaFrutas.appendChild(filho2).textContent = cesta;
                        
                    }                
              }else{
                if( cesta.indexOf(pro[listaP]) !== -1){ 
                    console.log("Fruta já somada no total!");
                }else{
                  cesta.push(pro[listaP]);  
                  totalzinho += pro[listaP];
                  total.value = `R$ ${totalzinho.toFixed(2)}`;
                }
                }     
            })  
        }
    }                
     }kitanda(frutas);  
