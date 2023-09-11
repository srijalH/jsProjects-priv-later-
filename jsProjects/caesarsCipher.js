function rot13(str) {
    return str.replace(/[A-Z]/g, (char) => {

      const charCode = char.charCodeAt(0);
      if (charCode >= 65 && charCode <= 90) {
        return String.fromCharCode(((charCode - 65 + 13) % 26) + 65);
      } else {
        return char;
      }
    });
  }
  
  const encryptedStr = rot13("SERR PBQR PNZC");
  console.log(encryptedStr); 