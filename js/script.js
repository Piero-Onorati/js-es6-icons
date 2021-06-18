/* MILESTONE 1 : Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.*/

const icons = [
    {
      name: 'cat',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'crow',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dog',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dove',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dragon',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'horse',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'hippo',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'fish',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'carrot',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'apple-alt',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'lemon',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'pepper-hot',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'user-astronaut',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-graduate',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-ninja',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-secret',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
];


// print(icons);

/* MILESTONE 2 : Coloriamo le icone per tipo */
// Creaiamo un nuovo array uguale ad ICONS ma a cui vado ad aggiungere la KEY COLOR
// N.B. Alla funzione in basso abbiamo aggiunto color nel destructuring e style="color:${color} all'icon

const coloredIcons = icons.map((element) => {

    let color = 'purple';
    if (element.type == 'animal') {
        color = 'blue';
    }else if (element.type == 'vegetable') {
        color ='orange';
    }

    return {
        ...element, color
    }

});

print(coloredIcons);

/* MILESTONE 3 : Creiamo una select con i tipi di icone e usiamola per filtrare le icone */

// Inserire nella SELECT dell'HTML 3 option: animal, vegetable e user : creo un array= type. 
// In esso inserisco le 3 option, quindi le stampo nell'HTML

const type = [];

coloredIcons.forEach((element)=>{
    if (!type.includes(element.type)) {
        type.push(element.type);

        // stampo nell'HTML le option nella select
        document.getElementById('type').innerHTML += 
        `<option value="${element.type}">${element.type}</option>`
    }
    
});


const select = document.getElementById('type');

select.addEventListener('change', function(){
    const valueOfSelect = select.value;

    const filteredIcons = coloredIcons.filter((element) => {
        return element.type == valueOfSelect
    });
    
    print(filteredIcons);

    if (valueOfSelect == 'All') {
        print(coloredIcons)
    }

});


// ------------------------------------------------------------------------------ //

/* FUNCTION */

function print(array){

    document.getElementById('main').innerHTML ='';


    array.forEach((element) => {
        const{name, prefix, family, color} = element;
        document.getElementById('main').innerHTML +=
        `<div class="card">
            <i class=" ${family} ${prefix}${name}" style="color:${color}"></i>
            <h4>${name}</h4>
        </div>
        `
    });

}



