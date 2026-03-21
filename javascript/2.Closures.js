function outer() {
  let count = 0;
  function inner() {
    count++;
    console.log(count);
  }
  return inner;
}

const counter = outer();
counter();
counter();
counter();

function createWallet(initial) {
  let balance = initial;
  return {
    deposit: (n) => (balance += n),
    withdraw: (n) => (balance -= n),
    getBalance: () => balance,
  };
}

const wallet = createWallet(100);
console.log(wallet.getBalance());
wallet.deposit(50);
console.log(wallet.getBalance());
wallet.withdraw(20);
console.log(wallet.getBalance());
