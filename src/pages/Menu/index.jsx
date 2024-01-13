import React, { useState } from 'react'
import RestaurantCard from '../../components/RestaurantCard'
import Search from '../../components/Search'
import Pills from '../../components/Pills'
import ItemCard from '../../components/ItemCard'

function Menu() {
    const [activeTab, setActiveTab] = useState("informations")

    const products = [
        {
            id: 1,
            type: 'pizza',
            name: 'Pizza Portuguesa',
            description: 'Molho de tomate, muçarela, presunto, ovos, cebola, pimentão e orégano',
            price: 94.90,
            priceWithDiscount: 64.90,
            numOfEaters: 4,
            imageUrl: '',
            new: false,
            promotion: true,
            quantityAvaiable: 15,
        },
        // More Pizzas
        {
            id: 2,
            type: 'pizza',
            name: 'Pizza Margherita',
            description: 'Molho de tomate, muçarela, tomate e manjericão',
            price: 79.90,
            priceWithDiscount: 54.90,
            numOfEaters: 2,
            imageUrl: '',
            new: true,
            promotion: false,
            quantityAvaiable: 20,
        },
        {
            id: 3,
            type: 'pizza',
            name: 'Pizza Calabresa',
            description: 'Molho de tomate, muçarela, calabresa, cebola e azeitonas',
            price: 85.90,
            priceWithDiscount: 59.90,
            numOfEaters: 3,
            imageUrl: '',
            new: false,
            promotion: false,
            quantityAvaiable: 18,
        },
        // More Massas
        {
            id: 4,
            type: 'massa',
            name: 'Lasanha Bolonhesa',
            description: 'Massa de lasanha, molho bolonhesa, muçarela e parmesão',
            price: 64.90,
            priceWithDiscount: 49.90,
            numOfEaters: 2,
            imageUrl: '',
            new: true,
            promotion: true,
            quantityAvaiable: 12,
        },
        {
            id: 5,
            type: 'massa',
            name: 'Spaghetti Carbonara',
            description: 'Spaghetti, molho de ovos, bacon, queijo parmesão e pimenta preta',
            price: 56.90,
            priceWithDiscount: 42.90,
            numOfEaters: 2,
            imageUrl: '',
            new: false,
            promotion: false,
            quantityAvaiable: 15,
        },
        // More Pães Artesanais
        {
            id: 6,
            type: 'pão artesanal',
            name: 'Pão de Alho',
            description: 'Pão artesanal com alho e ervas finas',
            price: 12.90,
            priceWithDiscount: 9.90,
            numOfEaters: 4,
            imageUrl: '',
            new: true,
            promotion: true,
            quantityAvaiable: 25,
        },
        {
            id: 7,
            type: 'pão artesanal',
            name: 'Pão Integral',
            description: 'Pão artesanal integral com sementes',
            price: 15.90,
            priceWithDiscount: 11.90,
            numOfEaters: 4,
            imageUrl: '',
            new: false,
            promotion: false,
            quantityAvaiable: 20,
        },
        // More Sobremesas
        {
            id: 8,
            type: 'sobremesa',
            name: 'Tiramisu',
            description: 'Sobremesa italiana com biscoitos champagne, café, queijo mascarpone e cacau',
            price: 34.90,
            priceWithDiscount: 27.90,
            numOfEaters: 2,
            imageUrl: '',
            new: true,
            promotion: false,
            quantityAvaiable: 10,
        },
        {
            id: 9,
            type: 'sobremesa',
            name: 'Pudim de Leite',
            description: 'Pudim de leite condensado caseiro',
            price: 22.90,
            priceWithDiscount: 18.90,
            numOfEaters: 4,
            imageUrl: '',
            new: false,
            promotion: true,
            quantityAvaiable: 15,
        },
        // More Bebidas
        {
            id: 10,
            type: 'bebida',
            name: 'Refrigerante Cola',
            description: 'Refrigerante sabor cola',
            price: 5.90,
            priceWithDiscount: 4.90,
            numOfEaters: 1,
            imageUrl: '',
            new: false,
            promotion: false,
            quantityAvaiable: 30,
        },
        {
            id: 11,
            type: 'bebida',
            name: 'Suco de Laranja Natural',
            description: 'Suco de laranja espremido na hora',
            price: 8.90,
            priceWithDiscount: 6.90,
            numOfEaters: 1,
            imageUrl: '',
            new: true,
            promotion: true,
            quantityAvaiable: 20,
        },
    ];
    

  return (
    <div className='px-12 py-5'>
        <ul className='flex gap-5'>
            <li 
                className={ activeTab === 'informations' ? 'text-red-500 font-bold' : 'text-slate-400 font-medium' && 'cursor-pointer' }
                onClick={() => setActiveTab('informations')}
            >Informações</li>
            <li 
                className={ activeTab === 'reviews' ? 'text-red-500 font-bold' : 'text-slate-400 font-medium' && 'cursor-pointer'  }
                onClick={() => setActiveTab('reviews')}
            >Avaliações</li>
        </ul>
        <RestaurantCard />
        <Search />
        <Pills />

        { products.map((item, index) => <ItemCard key={index} item={item} />) }
    </div>
  )
}

export default Menu