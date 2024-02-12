function FuncPrima() {
  let cek = document.getElementById("prime").value;
  let holder = 0;
  let pembagi = 0;
  cek = Math.round(cek);
  if (cek > 0) {
    for (let i = 1; i < cek + 1; i++) {
      if (cek % i == 0) {
        holder++;
        pembagi == i;
      }
    }
    let print = holder == 2 ? "bilangan prima" : "bukan bilangan prima";
    document.getElementById("ReturnPrime").innerHTML = cek + " " + print;
  } else {
    document.getElementById("ReturnPrime").innerHTML =
      cek + " tidak bisa ditentukan";
  }
}

function faktorisasi() {
  let cek = document.getElementById("faktor").value;
  let PrimeFactor = [];
  cek = Math.round(cek);
  let i = 2;
  let j = -1;
  if (cek > 1) {
    while (cek != i) {
      if (cek % i == 0) {
        j++;
        PrimeFactor[j] = i;
        cek = Math.round(cek / i);
      } else {
        i++;
      }
    }
    if (cek == i) {
      j++;
      PrimeFactor[j] = i;
    }
  }

  const output = JSON.stringify(PrimeFactor, null, PrimeFactor.length);
  document.querySelector(".outputfaktor").innerHTML = output;
}
