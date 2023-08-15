
    const alasInput = document.getElementById('alas');
    const tinggiInput = document.getElementById('tinggi');
    const hitungLuasButton = document.getElementById('hitungLuas');
    const luasOutput = document.getElementById('luasOutput');

    hitungLuasButton.addEventListener('click', function () {
      let a = parseFloat(alasInput.value);
      let t = parseFloat(tinggiInput.value);
      let l = 0.5 * a * t;
      luasOutput.innerHTML = `Luas Segitiga dari alas ${a} dan tinggi ${t} adalah ${l.toFixed(2)} cm²`;
    });

    function hitungKeliling() {
      var sisiA = parseFloat(document.getElementById("sisiA").value);
      var sisiB = parseFloat(document.getElementById("sisiB").value);
      var sisiC = parseFloat(document.getElementById("sisiC").value);

      if (isNaN(sisiA) || isNaN(sisiB) || isNaN(sisiC)) {
        document.getElementById("kelilingHasil").innerHTML = "Masukkan panjang sisi dengan benar.";
      } else {
        var keliling = sisiA + sisiB + sisiC;
        document.getElementById("kelilingHasil").innerHTML = "Keliling segitiga adalah: " + keliling.toFixed(2);
      }
    }

