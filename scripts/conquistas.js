
const conquistas ={
    conquista1 :{
        nome: "Você fez seus primeiros 100 cookies!",
        variavel: cookies,
        criterio: function criterio(){
            return cookies>100
        }
    },
    conquista2 :{
        nome: "Você comprou 10 +1 cookie!",
        variavel: upgrade1.melhoria,
        criterio: function criterio(){
            return upgrade1.melhoria>= 10
        }
    }
}
