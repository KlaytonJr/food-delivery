import React, { useEffect, useState } from 'react'
import RestaurantCard from '../../components/RestaurantCard'
import Search from '../../components/Search'
import Pills from '../../components/Pills'
import ItemCard from '../../components/ItemCard'
import { useParams, useSearchParams } from 'react-router-dom'
import { Comments } from '@hyvor/hyvor-talk-react';

const allProducts = [
    {
        id: 1,
        type: 'pizza',
        name: 'Pizza Portuguesa',
        description: 'Molho de tomate, muçarela, presunto, ovos, cebola, pimentão e orégano',
        price: 94.90,
        priceWithDiscount: 64.90,
        numOfEaters: 4,
        imageUrl: 'https://images.pexels.com/photos/19709551/pexels-photo-19709551/free-photo-of-bistro-caixa-bau-arca.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
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
        priceWithDiscount: null,
        numOfEaters: 2,
        imageUrl: 'https://images.pexels.com/photos/19709551/pexels-photo-19709551/free-photo-of-bistro-caixa-bau-arca.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
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
        imageUrl: 'https://images.pexels.com/photos/19709551/pexels-photo-19709551/free-photo-of-bistro-caixa-bau-arca.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        new: false,
        promotion: false,
        quantityAvaiable: 18,
    },
    // More Massas
    {
        id: 4,
        type: 'pasta',
        name: 'Lasanha Bolonhesa',
        description: 'Massa de lasanha, molho bolonhesa, muçarela e parmesão',
        price: 64.90,
        priceWithDiscount: 49.90,
        numOfEaters: 2,
        imageUrl: 'https://images.pexels.com/photos/19709551/pexels-photo-19709551/free-photo-of-bistro-caixa-bau-arca.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        new: true,
        promotion: true,
        quantityAvaiable: 12,
    },
    {
        id: 5,
        type: 'pasta',
        name: 'Spaghetti Carbonara',
        description: 'Spaghetti, molho de ovos, bacon, queijo parmesão e pimenta preta',
        price: 56.90,
        priceWithDiscount: 42.90,
        numOfEaters: 2,
        imageUrl: 'https://images.pexels.com/photos/19709551/pexels-photo-19709551/free-photo-of-bistro-caixa-bau-arca.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        new: false,
        promotion: false,
        quantityAvaiable: 15,
    },
    // More Pães Artesanais
    {
        id: 6,
        type: 'bread',
        name: 'Pão de Alho',
        description: 'Pão artesanal com alho e ervas finas',
        price: 12.90,
        priceWithDiscount: 9.90,
        numOfEaters: 4,
        imageUrl: 'https://images.pexels.com/photos/19709551/pexels-photo-19709551/free-photo-of-bistro-caixa-bau-arca.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        new: true,
        promotion: true,
        quantityAvaiable: 25,
    },
    {
        id: 7,
        type: 'bread',
        name: 'Pão Integral',
        description: 'Pão artesanal integral com sementes',
        price: 15.90,
        priceWithDiscount: 11.90,
        numOfEaters: 4,
        imageUrl: 'https://images.pexels.com/photos/19709551/pexels-photo-19709551/free-photo-of-bistro-caixa-bau-arca.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        new: false,
        promotion: false,
        quantityAvaiable: 20,
    },
    // More Sobremesas
    {
        id: 8,
        type: 'dessert',
        name: 'Tiramisu',
        description: 'Sobremesa italiana com biscoitos champagne, café, queijo mascarpone e cacau',
        price: 34.90,
        priceWithDiscount: 27.90,
        numOfEaters: 2,
        imageUrl: 'https://images.pexels.com/photos/19709551/pexels-photo-19709551/free-photo-of-bistro-caixa-bau-arca.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        new: true,
        promotion: false,
        quantityAvaiable: 10,
    },
    {
        id: 9,
        type: 'dessert',
        name: 'Pudim de Leite',
        description: 'Pudim de leite condensado caseiro',
        price: 22.90,
        priceWithDiscount: 18.90,
        numOfEaters: 4,
        imageUrl: 'https://images.pexels.com/photos/19709551/pexels-photo-19709551/free-photo-of-bistro-caixa-bau-arca.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        new: false,
        promotion: true,
        quantityAvaiable: 15,
    },
    // More Bebidas
    {
        id: 10,
        type: 'drink',
        name: 'Refrigerante Cola',
        description: 'Refrigerante sabor cola',
        price: 5.90,
        priceWithDiscount: 4.90,
        numOfEaters: 1,
        imageUrl: 'https://images.pexels.com/photos/19709551/pexels-photo-19709551/free-photo-of-bistro-caixa-bau-arca.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        new: false,
        promotion: false,
        quantityAvaiable: 30,
    },
    {
        id: 11,
        type: 'drink',
        name: 'Suco de Laranja Natural',
        description: 'Suco de laranja espremido na hora',
        price: 8.90,
        priceWithDiscount: 6.90,
        numOfEaters: 1,
        imageUrl: 'https://images.pexels.com/photos/19709551/pexels-photo-19709551/free-photo-of-bistro-caixa-bau-arca.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        new: true,
        promotion: true,
        quantityAvaiable: 20,
    },
];

function Menu() {
    const [activeTab, setActiveTab] = useState("informations")
    const [products, setProducts] = useState([])

    const { filter } = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams.get('search'));

    function searchProducts(query) {
        // Convertendo a consulta para letras minúsculas para garantir uma correspondência sem distinção entre maiúsculas e minúsculas
        const queryLowerCase = query.toLowerCase();
    
        // Filtrando os produtos com base na consulta de pesquisa
        const filteredProducts = allProducts.filter(product => {
            // Convertendo o nome do produto para letras minúsculas
            const productNameLowerCase = product.name.toLowerCase();
            // Verificando se a consulta de pesquisa está presente no nome do produto
            return productNameLowerCase.includes(queryLowerCase);
        });
    
        // Retornando o array filtrado
        return filteredProducts;
    }

    function filterProducts(type) {
        return allProducts.filter(product => product.type === type);
    }

    useEffect(() => {
        setProducts(allProducts)
    }, [])

    useEffect(() => {
        if(searchParams.get('search')) {
            setProducts(searchProducts(searchParams.get('search')))
        } else {
            setProducts(allProducts)
        }
    }, [searchParams.get('search')])
    
    useEffect(() => {
        if(filter) {
            setProducts(filterProducts(filter))
        } else {
            setProducts(allProducts)
        }
    }, [filter])
    
    // Criar array com os tipos únicos de produtos
    const uniqueProductTypes = new Set();
    const pills = allProducts.map((product) => {
        if (!uniqueProductTypes.has(product.type)) {
            uniqueProductTypes.add(product.type);
            return product.type;
        }
        return null;
    }).filter((type) => type !== null);

  return (
    <div className='py-5 px-40'>
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

        {activeTab === 'informations' && (
            <>
                <Search
                    placeholder="Buscar no cardápio"   
                />
                <Pills types={pills} />
        
                <div className='flex gap-5 flex-wrap justify-center mt-10'>
                    { products.map((item, index) => <ItemCard key={index} item={item} />) }
                </div>
            </>
        )}

        {activeTab === 'reviews' && (
            <>
                <Comments
                    website-id={10295}
                    page-id="1"
                    on={{
                        'loaded': () => console.log('Comments loaded'),
                        'comment:published': (comment) => console.log('Comment published', comment),
                    }}
                />
            </>
        )}
    </div>
  )
}

export default Menu