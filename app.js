
var div = document.querySelector("#table-print")

var num = 33;
for(var i = 1; i <= 12; i++){
    console.log(`${num} * ${i} = ${num * i} `);
    div.innerHTML += `${num} * ${i} = ${num * i} <br/>`

}