const obj = {
    name: 'Bob',
    age: 60,
    height: 180,
    weight: 80,
    getInfo: function () {
      let info = '';
      for (let key in this) {
        if (typeof this[key] !== 'function') {
          info += `${key}: ${this[key]}\n`;
        }
      }
      console.log(info);
    },
  };
  
  obj.getInfo(); 
  
  //Перевірка
  obj.city = 'Kyiv';
  obj.getInfo();