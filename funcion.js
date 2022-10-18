function ir(){

    var c=1234;
    var u="JUANITO";
    if(document.form.password.value==c && document.form.login.value==u){
    alert ("Bienvenido a las tablas de registro");
    window.location="tabla.html";}
    else{
    alert("Porfavor ingrese, nombre y contraseña correctos.");
    }
}