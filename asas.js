
document.addEventListener('DOMContentLoaded', () => {
    const activateReaderButton = document.getElementById('activate-reader');

    // Função para ativar o leitor de página
    function activateReader() {
        const elementsToRead = document.querySelectorAll('.dish-name, .dish-price, .dish-description');
        elementsToRead.forEach(element => {
            responsiveVoice.speak(element.textContent, "Brazilian Portuguese Female");
        });
    }

    activateReaderButton.addEventListener('click', activateReader);
});
document.addEventListener('DOMContentLoaded', () => {
    const languageLinks = document.querySelectorAll('#language-menu a');
    
    languageLinks.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const lang = event.target.getAttribute('data-lang');
            changeLanguage(lang);
        });
    });

    const activateReaderButton = document.getElementById('activate-reader');
    activateReaderButton.addEventListener('click', activateReader);

    const defaultLanguage = 'pt-BR'; 
    translateElements(defaultLanguage);
});

    
// Dicionário de traduções
const translations = {
    'pt-BR': {
        'menu-title': 'Cardápio',
        'french-dishes-title': 'Pratos franceses',
        'brazilian-dishes-title': 'Pratos brasileiros',
        'pizzas-title': 'Pizzas',
        'drinks-title': 'Bebidas',
        // Adicione mais traduções conforme necessário
    },

    "french-dish-1": {
        'en': "A slow-cooked beef stew in red wine, with carrots, onions, mushrooms, and bacon.",
        'es': "Un guiso de carne de res cocinado a fuego lento en vino tinto, con zanahorias, cebollas, champiñones y tocino."
    },
    "french-dish-2": {
        'en': "A savory shortcrust pastry filled with eggs, sour cream, cheese and bacon.",
        'es': "Una sabrosa masa quebrada rellena de huevos, crema agria, queso y tocino."
    },
    "french-dish-3": {
        'en': "A vegetarian dish of oven-roasted vegetables such as eggplant, zucchini, tomatoes, onions and garlic.",
        'es': "Plato vegetariano de verduras asadas al horno, como berenjena, calabacín, tomate, cebolla y ajo."
    },
    // Traduções para pratos brasileiros
    "brazilian-dish-1": {
        'en': "A black bean stew with pork and sausage, served with rice, sautéed collard greens, farofa, and orange slices.",
        'es': "Un guiso de frijoles negros con cerdo y salchicha, servido con arroz, couve refogada, farofa y rodajas de naranja."
    },
    "brazilian-dish-2": {
        'en': "A stew of fish and shrimp with coconut milk, palm oil, tomatoes, onions and cilantro.",
        'es': "Un guiso de pescado y camarones con leche de coco, aceite de palma, tomates, cebollas y cilantro."
    },
    "brazilian-dish-3": {
        'en': "A cheesy bread roll made with cassava flour and cheese, soft on the inside and crispy on the outside.",
        'es': "Un rollo de pan de queso hecho con harina de yuca y queso, suave por dentro y crujiente por fuera."
    },
    // Traduções para pizzas
    "pizza-1": {
        'en': "A thin-crust pizza topped with tomato sauce, mozzarella cheese, and slices of calabrese sausage.",
        'es': "Una pizza de masa fina cubierta con salsa de tomate, queso mozzarella y rodajas de salchicha calabresa."
    },
    "pizza-2": {
        'en': "A thin-crust pizza topped with tomato sauce, mozzarella cheese, shredded chicken, and catupiry cheese.",
        'es': "Una pizza de masa fina cubierta con salsa de tomate, queso mozzarella, pollo desmenuzado y queso catupiry."
    },
    "pizza-3": {
        'en': "A thin-crust pizza topped with tomato sauce, mozzarella cheese, gorgonzola cheese, provolone cheese, and parmesan cheese.",
        'es': "Una pizza de masa fina cubierta con salsa de tomate, queso mozzarella, queso gorgonzola, queso provolone y queso parmesano."
    },
    // Traduções para bebidas
    "drink-1": {
        'en': "A bottle of dry red wine from the Burgundy region in France.",
        'es': "Una botella de vino tinto seco de la región de Borgoña en Francia."
    },
    "drink-2": {
        'en': "A glass of natural and cold orange juice.",
        'es': "Un vaso de jugo de naranja natural y frío."
    },
    "drink-3": {
        'en': "A can of cola, guaraná or lemon soda.",
        'es': "Una lata de cola, guaraná o refresco de limón."
    }
    // Adicione outras traduções aqui...  
};
const elementsToTranslate = document.querySelectorAll('[id]');
elementsToTranslate.forEach(element => {
    const translationKey = element.id;
    const lang = 'pt-BR'; // Defina o idioma padrão ou obtenha-o de outra forma
    if (translations[lang] && translations[lang][translationKey]) {
        element.textContent = translations[lang][translationKey];
    }
});


// Função para traduzir um texto
function changeLanguage(textKey, targetLang) {
    const translatedText = translations[textKey][targetLang];
    return translatedText;
}

// Event listener para o botão de ativar leitor de página
document.getElementById("activate-reader").addEventListener("click", function() {
    const targetLang = "pt-BR"; // Língua de destino (pode ser obtida a partir do link clicado)
    
    // Traduzir e ler a descrição do prato
    const dishDescriptionElements = document.querySelectorAll(".dish-description");
    dishDescriptionElements.forEach(function(element) {
        const textKey = element.dataset.dish; // Obtém a chave do atributo data-dish
        const translatedText = changeLanguage(textKey, targetLang);
        
        // Use a biblioteca ResponsiveVoice para ler o texto traduzido
        responsiveVoice.speak(translatedText, targetLang);
    });
});
