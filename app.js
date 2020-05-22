let e1 = document.getElementById("e1");
let e2 = document.getElementById("e2");
let cavab = document.getElementById("cavab");
let btn = document.getElementById("btn");
let soccer = document.getElementById("soccer");


function load() {

    let a1 = Math.floor(Math.random() * 100);
    let a2 = Math.floor(Math.random() * 100);
    let c = a1 + a2;
    e1.innerHTML = a1;
    e2.innerHTML = a2;
    btn.addEventListener("click", function(s) {
        s.preventDefault();

        if (cavab.value == c) {
            soccer.innerHTML = "✅ Cavab doğrudur";
        } else { soccer.innerHTML = "❌ Cavab səhvdir. Doğru cavab: " + c; }
        load();

    });
};