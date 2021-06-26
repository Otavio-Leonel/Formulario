function apagarCampos()
{
    $(".forms").val("");
};

function verificarCampos()
{
   if($("#nomes").val() == "" || $("#cpf").val() == "" || $("#email").val() == "" || $("#datanascimento").val() == "" || $("#senha").val() == "" || $("#confsenha").val() == "")
   {
        alert("Existem campos vazios, favor preencher")
   }
   else
   {
       alert ("Obrigado está tudo preenchido")
   };

   if ($("#senha").val() != $("#confsenha").val())
   {
        alert("senhas diferentes")
   }
   else
   {
       alert("As senhas conferem!")
   }
}

function verificacpf(i)
{
    var m = i.value;

    if (isNaN(m[m.length-1]))
    {
        i.value = m.substring(0,m.length-1);
        return;
    }
    i.serAttribute("maxlength", "14");
    if (m.length == 3 || m.length == 7) i.value += ".";
    if (m.length == 11) i.value += "-";
 
}