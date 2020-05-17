var inputArea = document.getElementById("input-field");
var outputArea = document.getElementById("output-field");
var numeric = document.getElementById("numeric");

var encState = "enc";

numeric.onkeypress,
  (numeric.onpaste = (event) => {
    event.preventDefault();
  });

numeric.oncut,
  (numeric.onkeydown = (event) => {
    event.preventDefault();
  });

document.getElementById("btnDecrypt").onclick = () => {
  encState = "dec";
  if (outputArea.value) {
    caesarCipher(outputArea.value, parseInt(-numeric.value));
  } else {
    inputArea.value = "Nothing to decrypt :(";
  }
};

document.getElementById("btnEncrypt").onclick = () => {
  encState = "enc";
  if (inputArea.value) {
    caesarCipher(inputArea.value, parseInt(numeric.value));
  } else {
    outputArea.value = "Nothing to encrypt :(";
  }
};

var caesarCipher = (str, shift) => {
  if (shift < 0) return caesarCipher(str, shift + 26);

  var res = "";
  for (i = 0; i < str.length; i++) {
    var c = str[i];
    var currentCode = str.charCodeAt(i);

    if (currentCode >= 65 && currentCode <= 90) {
      c = String.fromCharCode(((currentCode - 65 + shift) % 26) + 65);
    } else if (currentCode >= 97 && currentCode <= 122) {
      c = String.fromCharCode(((currentCode - 97 + shift) % 26) + 97);
    }
    res += c;
  }
  if (encState === "enc") {
    outputArea.value = res;
  } else {
    inputArea.value = res;
  }
};
