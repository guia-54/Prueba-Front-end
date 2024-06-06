function validar() {
    var retorno_correo = validar_correo();
    var retorno_contraseña = validar_contraseña();
    var retorno_confirmar_contraseña = validar_confirmar_contraseña();
    var retorno_direccion = validar_direccion();
    var retorno_comuna = validar_comuna();
    var retorno_telefono = validar_telefono();
    var retorno_web = validar_web();
    var retorno_hobbies = validar_hobbies();
    return retorno_correo && retorno_contraseña && retorno_confirmar_contraseña && retorno_direccion && retorno_comuna && retorno_telefono && retorno_web && retorno_hobbies;
}

function validar_correo() {
    var input_email = document.getElementById("input-email");
    var div_error_email = document.getElementById("error-email");
    var correo = input_email.value;
    var pos_arroba = correo.indexOf("@");
    var pos_punto = correo.lastIndexOf(".");
    var arr_correo = correo.split(".");
    var extension = arr_correo[arr_correo.length - 1];
    if (pos_arroba > 0 && pos_punto > pos_arroba && (extension.length > 1 && extension.length <= 3 )) {
        div_error_email.innerHTML = "";
        return true;
    } else {
        div_error_email.innerHTML = "El correo ingresado no es valido";
        div_error_email.className = "text-danger small mt-1";
        return false;
    }
}

function validar_contraseña() {
    var input_contraseña = document.getElementById("input-password");
    var div_error_contraseña = document.getElementById("error-password");
    var contraseña = input_contraseña.value;
    var pattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{3,6}$/;
    if (contraseña == "") {
        div_error_contraseña.innerHTML = "La contraseña es obligatoria";
        div_error_contraseña.className = "text-danger small mt-1";
        return false;
    } else if (!pattern.test(contraseña)) {
        div_error_contraseña.innerHTML = "La contraseña debe contener de 3 y 6 caracteres, y contener al menos una letra y un dígito";
        div_error_contraseña.className = "text-danger small mt-1";
        return false;
    } else {
        div_error_contraseña.innerHTML = "";
        return true;
    }
}

function validar_confirmar_contraseña() {
    var input_contraseña = document.getElementById("input-password");
    var input_confirmar_contraseña = document.getElementById("input-confirm_password");
    var div_error_confirmar_contraseña = document.getElementById("error-confirm_password");
    var contraseña = input_contraseña.value;
    var confirmar_contraseña = input_confirmar_contraseña.value;
    if (confirmar_contraseña == "") {
        div_error_confirmar_contraseña.innerHTML = "Por favor confirme la contraseña";
        div_error_confirmar_contraseña.className = "text-danger small mt-1";
        return false;
    } else if (confirmar_contraseña !== contraseña) {
        div_error_confirmar_contraseña.innerHTML = "Las contraseña ingresada no son iguales, reintente";
        div_error_confirmar_contraseña.className = "text-danger small mt-1";
        return false;
    } else {
        div_error_confirmar_contraseña.innerHTML = "";
        return true;
    }
}

function validar_direccion() {
    var input_direccion = document.getElementById("input-direccion");
    var div_error_direccion = document.getElementById("error-direccion");
    var direccion = input_direccion.value;
    if (direccion == "") {
        div_error_direccion.innerHTML = "La dirección es obligatoria";
        div_error_direccion.className = "text-danger small mt-1";
        return false;
    } else {
        div_error_direccion.innerHTML = "";
        return true;
    }
}

function validar_comuna() {
    var select_comuna = document.getElementById("select-comuna");
    var div_error_comuna = document.getElementById("error-comuna");
    var comuna = select_comuna.value;
    if (comuna == "default") {
        div_error_comuna.innerHTML = "Debe seleccionar una comuna";
        div_error_comuna.className = "text-danger small mt-1";
        return false;
    } else {
        div_error_comuna.innerHTML = "";
        return true;
    }
}

function validar_telefono() {
    var input_telefono = document.getElementById("input-fono");
    var div_error_telefono = document.getElementById("error-fono");
    var telefono = input_telefono.value;
    var pattern = /^\+\d{11}$/;
    if (telefono == "") {
        div_error_telefono.innerHTML = "El teléfono es obligatorio";
        div_error_telefono.className = "text-danger small mt-1";
        return false;
    } else if (!pattern.test(telefono)) {
        div_error_telefono.innerHTML = "El teléfono debe tener el formato +XX XXXXXXXXX";
        div_error_telefono.className = "text-danger small mt-1";
        return false;
    } else {
        div_error_telefono.innerHTML = "";
        return true;
    }
}

function validar_web() {
    var input_web = document.getElementById("input-url");
    var div_error_web = document.getElementById("error-url");
    var web = input_web.value;
    var pattern = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
    if (web == "") {
        div_error_web.innerHTML = "La web es obligatoria";
        div_error_web.className = "text-danger small mt-1";
        return false;
    } else if (!pattern.test(web)) {
        div_error_web.innerHTML = "La web es erronea";
        div_error_web.className = "text-danger small mt-1";
        return false;
    } else {
        div_error_web.innerHTML = "";
        return true;
    }
}

function validar_hobbies() {
    var checkboxes_hobbies = document.querySelectorAll('input[name="hobbies"]:checked');
    var div_error_hobbies = document.getElementById("error-hobbies");
    if (checkboxes_hobbies.length < 2) {
        div_error_hobbies.innerHTML = "Por favor escoger minimo 2 hobbies";
        div_error_hobbies.className = "text-danger small mt-1";
        return false;
    } else {
        div_error_hobbies.innerHTML = "";
        return true;
    }
}
