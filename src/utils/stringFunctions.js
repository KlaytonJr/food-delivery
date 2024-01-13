export function translateType(type) {
    switch(type) {
        case 'pizza':
            return 'Pizzas';
        case 'pasta':
            return 'Massas';
        case 'bread':
            return 'Pães artesanal';
        case 'dessert':
            return 'Sobremesas';
        case 'drink':
            return 'Bebidas';
        default: 
            return type
    }
}