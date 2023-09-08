class BankAccount {
  constructor(saldo) {
    this.saldo = saldo;
  }

  Deposit(amount) {
    setTimeout(() => {
      if (amount > 0) {
        this.saldo += amount;
        console.log(
          `Nasabah melakukan deposit ${amount}, selanjutnya ditambahkan kedalam rekening. Total saldo saat ini adalah: ${this.saldo}`
        );
      } else {
        console.log("jumlah saldo harus lebih dari 0");
      }
    }, 2000);
  }

  WithDraw(amount) {
    setTimeout(() => {
      if (amount < this.saldo) {
        this.saldo -= amount;
        console.log(
          `Nasabah melakukan penarikan uang sebesar ${amount}. Total saldo saat ini adalah: ${this.saldo}`
        );
      } else {
        console.log(
          `saldo anda sekarang ${this.saldo}, tidak cukup melakukan penarikan`
        );
      }
    }, 1000);
  }

  TotalSaldo() {
    setTimeout(() => {
      console.log(`saldo anda sekarang ${this.saldo}`);
    }, 4000);
  }
}

const NewAccount = new BankAccount(1000);

NewAccount.TotalSaldo();
NewAccount.Deposit(1000);
NewAccount.WithDraw(1500);
