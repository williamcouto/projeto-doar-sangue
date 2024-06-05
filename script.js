function verificaTipo(){
    let userSelection = document.getElementById('user_bloodType').value
    let res_doar = document.querySelector('.resultado_doar')
    let res_recebe = document.querySelector('.resultado_receber')
    doaPara(userSelection, res_doar)
    recebeDe(userSelection, res_recebe)
}  

// Tipo de sangue que o usuario pode doar
function doaPara(userSelection, res_doar){
    switch (userSelection){
    case 'A+':
        const pA = document.createElement("span")
        const textBlood = document.createTextNode("A+ AB+")
        pA.appendChild(textBlood)
        res_doar.innerHTML = ''
        res_doar.appendChild(pA)
        break;

    case 'O+': 
        const pO_positive = document.createElement("span")
        const textBlood_O = document.createTextNode("A+ B+ AB+ O+")
        pO_positive.appendChild(textBlood_O)
        res_doar.innerHTML = ''
        res_doar.appendChild(pO_positive)
    break;

    case 'B-': 
        const bNegative = document.createElement("span")
        const textBlood_Bneg = document.createTextNode("AB- AB+ B+ B-")
        bNegative.appendChild(textBlood_Bneg)
        res_doar.innerHTML = ''
        res_doar.appendChild(bNegative)
    break;

    case 'A-': 
        const aNegative = document.createElement("span")
        const textBlood_Aneg = document.createTextNode("A+ A- AB+ AB-")
        aNegative.appendChild(textBlood_Aneg)
        res_doar.innerHTML = ''
        res_doar.appendChild(aNegative)
    break;

    case 'B+': 
        const bPositive = document.createElement("span")
        const textBlood_Bpos = document.createTextNode("B+ AB+")
        bPositive.appendChild(textBlood_Bpos)
        res_doar.innerHTML = ''
        res_doar.appendChild(bPositive)
    break;

    case 'O-': 
        const oNegative = document.createElement("span")
        const textBlood_Oneg = document.createTextNode("A+ A- B+ B- AB+ AB- O- O+")
        oNegative.appendChild(textBlood_Oneg)
        res_doar.innerHTML = ''
        res_doar.appendChild(oNegative)
        break;

    case 'AB+':
        const abPositive = document.createElement("span")
        const textBlood_ABpos = document.createTextNode("AB+")
        abPositive.appendChild(textBlood_ABpos)
        res_doar.innerHTML = ''
        res_doar.appendChild(abPositive)
        break;

    case 'AB-':
        const abNegative = document.createElement("span")
        const textBlood_ABneg = document.createTextNode("AB+ AB-")
        abNegative.appendChild(textBlood_ABneg)
        res_doar.innerHTML = ''
        res_doar.appendChild(abNegative)
        break;
    }
}

// Mostra o tipo de sangue que o usuario pode receber
function recebeDe(userSelection, res_recebe){
switch(userSelection){
    case 'A+':
        const pA = document.createElement("span")
        const textBlood = document.createTextNode("A+ O- O+ A-")
        pA.appendChild(textBlood)
        res_recebe.innerHTML = ''
        res_recebe.appendChild(pA)
        break;

    case 'A-':
        const aNegative = document.createElement("span")
        const textBlood_Aneg = document.createTextNode("A- O-")
        aNegative.appendChild(textBlood_Aneg)
        res_recebe.innerHTML = ''
        res_recebe.appendChild(aNegative)
        break;

    case 'B-':
        const bNegative = document.createElement("span")
        const textBlood_Bneg = document.createTextNode("O- B-")
        bNegative.appendChild(textBlood_Bneg)
        res_recebe.innerHTML = ''
        res_recebe.appendChild(bNegative)
        break;

    case 'O+':
        const pO_positive = document.createElement("span")
        const textBlood_O = document.createTextNode("O- O+")
        pO_positive.appendChild(textBlood_O)
        res_recebe.innerHTML = ''
        res_recebe.appendChild(pO_positive)
        break;  

    case 'B+':
        const bPositive = document.createElement("span")
        const textBlood_Bpos = document.createTextNode("B+ B- O+ O-")
        bPositive.appendChild(textBlood_Bpos)
        res_recebe.innerHTML = ''
        res_recebe.appendChild(bPositive)
        break;

    case 'O-':
        const oNegative = document.createElement("span")
        const textBlood_Oneg = document.createTextNode("O-")
        oNegative.appendChild(textBlood_Oneg)
        res_recebe.innerHTML = ''
        res_recebe.appendChild(oNegative)
        break;

    case 'AB+':
        const abPositive = document.createElement("span")
        const textBlood_ABpos = document.createTextNode("A+ A- B+ B- AB+ AB- O- O+")
        abPositive.appendChild(textBlood_ABpos)
        res_recebe.innerHTML =''
        res_recebe.appendChild(abPositive)
        break;

    case 'AB-':
        const abNegative = document.createElement("span")
        const textBlood_ABneg = document.createTextNode("A- AB- B- O-")
        abNegative.appendChild(textBlood_ABneg)
        res_recebe.innerHTML = ''
        res_recebe.appendChild(abNegative)
        break;
    }
}



function clickMenu(){
    
}