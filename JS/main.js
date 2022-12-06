let nombre = prompt("¿Cual es tu nombre?");

const saludar = () => alert(" Hola " + nombre + "," + " si querés conocer tu requerimiento proteico diario completá los siguientes campos ")



let consulta = "si";
while (consulta == "si") {

    const calculoProteico = (peso, factor) => peso * factor;

    let entrenamiento = prompt("¿Entrenas? Ingresá si o no").toLocaleLowerCase();
    let peso = parseFloat(prompt("Ingresá tu peso: "));

    let resultado;
    if (entrenamiento == "si") {
        resultado = calculoProteico(peso, 1.8);
        alert("necesitas un consumo diario de " + resultado + " g de proteinas para que aumente tu musculatura")
    } else if (entrenamiento == "no") {
        resultado = calculoProteico(peso, 0.8);
        alert("necesitas un consumo diario de " + resultado + " g de proteinas para mantener tu cuerpo saludable");
    } else {
        alert("error en la carga de datos, por favor volvé a intentarlo")
    }

    alert("Esperamos que te haya sido útil este contador proteico")

    consulta = prompt("¿Querés realizar un calculo de requerimiento proteico con otro nivel de entrenamiento?").toLocaleLowerCase()
}