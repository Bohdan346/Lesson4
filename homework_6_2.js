function pad(str, symbol, count, addToStart) {
    const currentLength = str.length;
  
    if (count <= currentLength) {
      return str;
    }
  
    const text = symbol.repeat(count - currentLength);
    
    return addToStart ? text + str : str + text;
  }
  
  // Перевірка
  console.log(pad('qwerty', '+', 7, true));  
  console.log(pad('qwerty', '+', 7, false)); 
