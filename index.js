function inicializadora(){
    $.ajax({
        url: 'https://api.nasa.gov/planetary/apod?api_key=SXNBClotpHaB1PHeYERRZLnPu53JQ9AhyjSfZv36',
        success:function (result) {
         let titulo=(result.title)
         let explicacao=(result.explanation)
         let img=(result.url);
         console.log(titulo)
         let titulor=$('#nome-requisicao');
         let expli=$('#explicacao');
         let imagem=$("#imagem-espaco");
         expli.text(explicacao);
         titulor.text(titulo);
         imagem.attr("src", img)
        }
    })}
    oi();