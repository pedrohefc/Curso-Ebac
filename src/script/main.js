document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('somas').addEventListener('submit', function(evento){
        evento.preventDefault()

        let n1 = parseInt(document.getElementById('n1').value);
        let n2 = parseInt(document.getElementById('n2').value);
        let soma = n1 + n2
        
        document.getElementById('r1').innerText = n1
        document.getElementById('r2').innerText = n2 
        document.getElementById('r3').innerText = soma 

        document.querySelector('.resultado').style.display = 'block'
    })
})