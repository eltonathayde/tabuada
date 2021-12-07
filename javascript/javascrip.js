
// let condicao = 'teste';
// let  pessoas =['joao','Pedro ','Lucas','Maria']

// console.log(pessoas[2]);


// if(condicao =='teste'){
//     // while(numero <= 3){
//         // for(numero= 0;numero <=3; numero++)
//         do{  
//             let pessoas = ['Arthur', 'Ana',];
//             var numero = 0;
//         }while(numero<=3){
//         switch(numero){
//         case numero:
//            alert(`ola , ${pessoas[numero]}`)
//         break;
//        }
    //    numero++;
    // } 
//     }
// }
    let resultado = document.getElementById('tabuada');
for(let numero = 1;numero <=10; numero=numero+1){
    for(let multiplica = 0; multiplica<= 10; multiplica=multiplica+1){
        let multiplicacao = numero * multiplica;
        let linha = "" + numero + " * "  + multiplica + "=" + multiplicacao + "<br>" ;   
        resultado.innerHTML += (linha); 
    }

}
























// switch(pessoas){
//     case 0:
//     alert(`ola, ${pessoas[0]}`);
             
//     break;
    
    
//     case 1:
    
//     break;

//     case 2:
    

//     break
    
//     case 3:
    

//     break;

//     default:

// }

// while(numero < 10){
//     numero++;
//     alert('Esse é o numero' + numero) ; 
//     alert('Esse é o numero ${numero}');
// }

// do{
//     console.log(numero);
//     alert('ele passou por aqui');
//     numero++
// } while(numero <10){
//     alert(`esse é o numero ${numero}`)
// }

    // for(numero =0; numero<=10;numero++){
    // console.log(numero)
// }