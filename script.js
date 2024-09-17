

const arrayUsuarios = []

const capturar = (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;

    arrayUsuarios.push({
        nombre: nombre,
        apellido: apellido
    });

    localStorage.setItem("usuarios", JSON.stringify(arrayUsuarios));
    
}


document.getElementById("form").innerHTML = `<form onsubmit="capturar(event)">
                    <div>
                        <label for="">Nombre</label>
                        <input type="text" id="nombre">
                    </div>

                    <div>
                        <label for="">Apellido</label>
                        <input type="text" id="apellido"> 
                    </div>

                    <div>
                        <button type="submit">Guardar</button>
                    </div>
                </form>`