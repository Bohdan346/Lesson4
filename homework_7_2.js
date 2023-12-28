var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн"
  };
  
  // Метод для розпарсування рядка та отримання числового значення
  function parsePrice(str) {
    const match = str.match(/\d+/);
    return match ? parseInt(match[0]) : 0;
  }
  
  // Метод для обчислення загальної вартості послуг
  services.price = function () {
    let total = 0;
    for (let value of Object.values(this)) {
      if (typeof value === 'string') {
        total += parsePrice(value);
      }
    }
    return total;
  };
  
  //Метод для обчислення найдешевшої послуги
  services.minPrice = function () {
    let min = Infinity;
    for (let value of Object.values(this)) {
      if (typeof value === 'string') {
        min = Math.min(min, parsePrice(value));
      }
    }
    return min;
  };
  

  //Метод для обчислення найдорожчої послуги
  services.maxPrice = function () {
    let max = 0;
    for (let value of Object.values(this)) {
      if (typeof value === 'string') {
        max = Math.max(max, parsePrice(value));
      }
    }
    return max;
  };


  //Додаємо нову послугу
  services['Розбити скло'] = "200 грн";
  
  //Перевірка
  console.log("Загальна вартість послуг:", services.price(), "грн");
  console.log("Найдешевша послуга:", services.minPrice(), "грн");
  console.log("Найдорожча послуга:", services.maxPrice(), "грн");