/* MILESTONE 1 */

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

/* MILESTONE 2 */
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

/* MILESTONE 3 */




function print(array){
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



