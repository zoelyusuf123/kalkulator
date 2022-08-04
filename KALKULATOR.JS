var angka1 = document.getElementById("angka1");
var angka2 = document.getElementById("angka2");
var hasil = document.getElementById("hasil");

function ftambah() {
  hasil.value = Number(angka1.value) + Number(angka2.value);
}
function fkurang() {
  hasil.value = Number(angka1.value) - Number(angka2.value);
}
function fkali() {
  hasil.value = Number(angka1.value) * Number(angka2.value);
}
function fbagi() {
  hasil.value = Number(angka1.value) / Number(angka2.value);
}
function frefres() {
  alert("mamam");
  Number.reload();
  document.getElementById("reset").reset();
}
