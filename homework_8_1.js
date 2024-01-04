function myBlend(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  
  //Перевірка
  const arr = [1, 2, 3, true, 5, "test", 7, 8, 9];
  myBlend(arr);
  console.log(arr);