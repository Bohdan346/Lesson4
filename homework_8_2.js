const company = {
    name: 'Велика Компанія',
    type:'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
        {
            name: 'Клієнт 1',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
                {
                    name: 'Клієнт 1.1',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                },
                {
                    name: 'Клієнт 1.2',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                    partners: [
                        {
                            name: 'Клієнт 1.2.3',
                            type: 'subSubCompany',
                            uses: 'Рішення для продажу квитків',
                            sells: 'Рішення для продажу квитків',
                        }
                    ]
                }
            ]
        },
        {
            name: 'Клієнт 2',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків'
        }
    ]
}

function findValueByKey(companyName, company) {
    if (company.name === companyName) {
        return company;
    } else if (company.clients) {
        for (const client of company.clients) {
            const result = findValueByKey(companyName, client);
            if (result) {
                return result;
            }
        }
    } else if (company.partners) {
        for (const partner of company.partners) {
            const result = findValueByKey(companyName, partner);
            if (result) {
                return result;
            }
          
            if (partner.partners) {
                const innerResult = findValueByKey(companyName, partner);
                if (innerResult) {
                    return innerResult;
                }
            }
        }
    }
    return null;
}

// Перевірка
const companyName = 'Клієнт 1';
const result = findValueByKey(companyName, company);

if (result) {
    console.log(`Інформація про компанію "${companyName}":`, result);
} else {
    console.log(`Компанію з іменем "${companyName}" не знайдено.`);
}
