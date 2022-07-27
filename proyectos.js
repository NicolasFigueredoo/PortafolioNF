
  AOS.init({
    duration: 3000
  });

let datos = [

    {
        "imagen": "frida.jpeg",
        "titulo": "SYSTEMA TURNOS FRIDA NAILS",
        "tecnologias": "PHP JS JQUERY MYSQL ",
        "link": "https://well-mannered-invoi.000webhostapp.com/"
    },

    {
        "imagen": "replicanike.png",
        "titulo": "REPLICA PAGINA NIKE",
        "tecnologias": "HTML CSS JS JQUERY BOOTSTRAP",
        "link": "https://nicolasfigueredoo.github.io/NikePaginaFinal/"
    },
    {
        "imagen": "calculadora.png",
        "titulo": "CALCULADORA ANIMADA",
        "tecnologias": "HTML CSS JS JQUERY BOOTSTRAP",
        "link": "https://nicolasfigueredoo.github.io/CalculadoraFinal/"

    },
    {
        "imagen": "nightdrive.png",
        "titulo": "SIMPLE PAGE NIGHTDRIVE",
        "tecnologias": "HTML CSS JS JQUERY BOOTSTRAP",
        "link": "https://nicolasfigueredoo.github.io/NGT/"

    },
    {
        "imagen": "notas.png",
        "titulo": "SIMPLE PAGE NOTAS",
        "tecnologias": "HTML CSS JS ",
        "link": "https://nicolasfigueredoo.github.io/NotasFinal/"
    },
    {
        "imagen": "banco.png",
        "titulo": "SYSTEMA BANCO SIMPLE",
        "tecnologias": "C# PURO ",
        "link": "https://github.com/NicolasFigueredoo/SystemaBanco"
    },

]

datos.forEach(element => {

$(".proyectos").append(`

<div data-aos="fade-up" data-aos-duration="3000" class="tarjeta">
<img class="imagentarjeta" src="./img/${element.imagen}" alt="">
<div class="text">
<h1>${element.titulo} </h1>
<p>${element.tecnologias} </p>
<a href="${element.link}  "> <i class="fa-solid fa-earth-americas"></i> </a>
</div>

</div>


`



    )


});