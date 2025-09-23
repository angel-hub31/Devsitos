saludar=function(){
    let nombre=recuperarTexto("txtNombre");
    let apellido=recuperarTexto("txtApellido");
    let saludo=generarSaludo(nombre,apellido);
    console.log(saludo);
}