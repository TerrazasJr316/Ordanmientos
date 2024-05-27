document.getElementById('formOrden').addEventListener('submit', function (event) {
    event.preventDefault();
    
});

const FRMOrden=document.querySelector("#formOrden");
FRMOrden.addEventListener("submit",calcular)
function calcular(evt){
   
let tipoDeMetodo = document.querySelector("#cmbTipoMet").value;
let tipoDeBusqueda = document.querySelector("#cmbBusqueda").value;

if (tipoDeMetodo == "Burbu"){
    let n = parseInt(prompt("Numero de Elementos para Burbuja"));
    let a = Array(n);
    for(let c = 0; c < n; c++){
        a[c] = parseInt(prompt("Ingrese Numero" + (c+1)));
    }   
    for (var i = 0; i < a.length - 1; i++) {
        for (var j = 0; j < a.length - i - 1; j++) {
            if (a[j] > a[j + 1]) {
                // Intercambiar elementos si están en el orden incorrecto
                var temp = a[j];
               a[j] = a[j + 1];
                a[j + 1] = temp;
            }
        }
    }
    alert('Números ordenados con el metodo Burbuja: ' + a.join(', '));
  
}else if (tipoDeMetodo == "T-Sort") {
    let n = parseInt(prompt("Numero de Elementos para Quick-Sort"));
    let b = Array(n);
    for (let c = 0; c < n; c++) {
        b[c] = parseInt(prompt("Ingrese Numero" + (c + 1)));
    }
    if (b.length <= 0) {
        console.log(b);
    } else {
        const quickSort = (arr) => {
            if (arr.length <= 1) {
                return arr;
            }
            const pivot = arr[0];
            const menores = [];
            const mayores = [];
            for (const num of arr.slice(1)) {
                (num <= pivot) ? menores.push(num) : mayores.push(num);
            }
            return [...quickSort(menores), pivot, ...quickSort(mayores)];
        };
         const Ordenado = quickSort(b);
        alert('Números ordenados con QuickSort: ' + Ordenado.join(', '));
     }
        }else if (tipoDeMetodo === "Shell-Sort") {
            const n = parseInt(prompt("Número de Elementos para Shell"));
            const arrayNumeros = Array(n);
            for (let c = 0; c < n; c++) {
                arrayNumeros[c] = parseInt(prompt("Ingrese Numero " + (c + 1)));
            }
            const g = arrayNumeros.length;
            for (let gap = Math.floor(g / 2); gap > 0; gap = Math.floor(gap / 2)) {
                for (let i = gap; i < g; i++) {
                    const temp = arrayNumeros[i];
                    let j = i;
                    while (j >= gap && arrayNumeros[j - gap] > temp) {
                        arrayNumeros[j] = arrayNumeros[j - gap];
                        j -= gap;
                    }
                    arrayNumeros[j] = temp;
                }
            }
            alert('Números ordenados con Shell-Sort: ' + arrayNumeros.join(', '));
        
        }else if (tipoDeBusqueda === "Secuenci") {
            function busquedaDeSecuencia(secuencia, valorBuscado) {
                for (let i = 0; i < secuencia.length; i++) {
                    if (secuencia[i] === valorBuscado) {
                        return i; 
                    }
                }
                return -1;
            }
            const miSecuencia = [8, 5, 2, 9, 1, 3, 7, 3, 10, 6];
            const valorABuscar = parseInt(prompt("Ingrese el número que desea buscar del 1-10:"));
            const posicion = busquedaDeSecuencia(miSecuencia, valorABuscar);
            if (posicion !== -1) {
                alert(`El valor ${valorABuscar} se encuentra en la posición ${posicion}.`);
            } else {
                alert(`El valor ${valorABuscar} no se encontró en la secuencia.`);
            }
          }else if (tipoDeBusqueda === "bi") {
let lista = [];
const longitudLista = parseInt(prompt("Ingrese la longitud de la lista ordenada:"));
for (let i = 0; i < longitudLista; i++) {
    const elemento = parseInt(prompt(`Ingrese el elemento ${i + 1} de la lista:`));
    lista.push(elemento);
}
lista.sort((a, b) => a - b);
const valorABuscar = parseInt(prompt("Ingrese el número que desea buscar en la lista ordenada:"));
let inicio = 0;
let fin = lista.length - 1;
let encontrado = false;
while (inicio <= fin) {
    let medio = Math.floor((inicio + fin) / 2);
    if (lista[medio] === valorABuscar) {
        alert(`El valor ${valorABuscar} se encuentra en la posición ${medio} de la lista ordenada.`);
        encontrado = true;
        break;
    } else if (lista[medio] < valorABuscar) {
        inicio = medio + 1; 
    } else {
        fin = medio - 1; 
    }
}
if (!encontrado) {
    alert(`El valor ${valorABuscar} no se encontró en la lista ordenada.`);
}
        }
    }
