let saldo = 1000;
document.getElementById("saldo").textContent = saldo;

const updateSaldo = (saldo) => {
  document.getElementById("saldo").textContent = saldo;
};

const tambahSaldo = () => {
  let input = prompt("masukan jumlah saldo yang ingin ditambahkan");
  saldo = saldo + parseInt(input);
  updateSaldo(saldo);
};

const kurangiSaldo = () => {
  let input = prompt("masukan jumlah saldo yang ingin dikurangi");
  if (saldo < input) {
    alert("saldo anda tidak cukup");
  } else {
    saldo = saldo - parseInt(input);
    updateSaldo(saldo);
  }
};
