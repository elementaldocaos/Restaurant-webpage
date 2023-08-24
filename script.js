document.addEventListener("DOMContentLoaded", function () {
    const languageMenu = document.getElementById("language-menu");
    const menuTitle = document.getElementById("menu-title");
    const dishes = document.querySelectorAll(".dish-description");
    const drinks = document.querySelectorAll(".drink-description");

    languageMenu.addEventListener("click", function (event) {
        const lang = event.target.getAttribute("data-lang");
        if (lang) {
            translate(lang);
        }
    });
    //função para ativar o leitor de página
    function activateReader() {
        const elementsToRead = document.querySelectorAll('[data-translation]');
        const textToRead = Array.from(elementsToRead).map(element => element.textContent).join(' ');
        
        // Use a biblioteca ResponsiveVoice para ler o texto
        responsiveVoice.speak(textToRead, defaultLanguage);
    }
        // Event listener para ativar o leitor de página
        const activateReaderButton = document.getElementById('activate-reader');
        activateReaderButton.addEventListener('click', activateReader);
        
    // Event listener para os links de idioma
      const languageLinks = document.querySelectorAll('#language-menu a');
      languageLinks.forEach(link => {
          link.addEventListener('click', event => {
              event.preventDefault();
              const lang = event.target.getAttribute('data-lang');
              translateElements(lang);
          });
      });
    function translate(lang) {
        // Traduz o título do menu
        menuTitle.textContent = menuTitle.getAttribute(`data-translation-${lang}`);

        // Traduz as descrições dos pratos
        dishes.forEach(function (dish) {
            const dishId = dish.getAttribute("data-dish");
            if (dishId) {
                dish.textContent = dish.getAttribute(`data-translation-${lang}-${dishId}`);
            }
        });

        // Traduz as descrições das bebidas
        drinks.forEach(function (drink) {
            const drinkId = drink.getAttribute("data-drink");
            if (drinkId) {
                drink.textContent = drink.getAttribute(`data-translation-${lang}-${drinkId}`);
            }
        });
    }
});
    
    // Dicionário de traduções
    const translations = {
        'pt-BR': {
            'Cardápio': 'Cardápio',
            'Pratos franceses': 'Pratos franceses',
            'Pratos brasileiros': 'Pratos brasileiros',
            'Pizzas': 'Pizzas',
            'Bebidas': 'Bebidas',
            // Adicione mais traduções conforme necessário
        },
        'french-dish-1': {
            'Um ensopado de carne bovina cozida lentamente em vinho tinto, com cenoura, cebola, cogumelos e bacon.': 'Um cozido de carne bovina cozido lentamente em vinho tinto, com cenoura, cebola, cogumelos e bacon.',
        },
        'french-dish-2': {
            'Uma torta salgada de massa quebrada recheada com ovos, creme de leite, queijo e bacon.': 'Uma torta salgada de massa quebrada recheada com ovos, creme de leite, queijo e bacon.',
        },
        'french-dish-3': {
            'Um prato vegetariano de legumes assados no forno, como berinjela, abobrinha, tomate, cebola e alho.': 'Um prato vegetariano de legumes assados no forno, como berinjela, abobrinha, tomate, cebola e alho.',
        },
        'brazilian-dishe-1': {
            'Um cozido de feijão preto com carne de porco e linguiça, acompanhado de arroz, couve refogada, farofa e laranja.': 'Um cozido de feijão preto com carne de porco e linguiça, acompanhado de arroz, couve refogada, farofa e laranja.',
        },
        'brazilian-dishe-2': {
            'Um ensopado de peixe e camarão com leite de coco, azeite de dendê, tomate, cebola e coentro.': 'Um ensopado de peixe e camarão com leite de coco, azeite de dendê, tomate, cebola e coentro.',
        },
        'brazilian-dishe-3': {
            'Um pãozinho feito com polvilho e queijo, macio por dentro e crocante por fora.': 'Um pãozinho feito com polvilho e queijo, macio por dentro e crocante por fora.',
        },
        'pizza-1': {
            'Uma pizza de massa fina coberta com molho de tomate, queijo mussarela e fatias de linguiça calabresa.': 'Uma pizza de massa fina coberta com molho de tomate, queijo mussarela e fatias de linguiça calabresa.',
        },
        'pizza-2': {
            'Uma pizza de massa fina coberta com molho de tomate, queijo mussarela, frango desfiado e catupiry.': 'Uma pizza de massa fina coberta com molho de tomate, queijo mussarela, frango desfiado e catupiry.',
        },
        'pizza-3': {
            'Uma pizza de massa fina coberta com molho de tomate, queijo mussarela, queijo gorgonzola, queijo provolone e queijo parmesão.': 'Uma pizza de massa fina coberta com molho de tomate, queijo mussarela, queijo gorgonzola, queijo provolone e queijo parmesão.',
        },
        'drink-1': {
            'Uma garrafa de vinho tinto seco da região da Borgonha, na França.': 'Uma garrafa de vinho tinto seco da região da Borgonha, na França.',
        },
        'drink-2': {
            'Um copo de suco de laranja natural e gelado.': 'Um copo de suco de laranja natural e gelado.',
        },
        'drink-3': {
            'Uma lata de refrigerante de cola, guaraná ou limão.': 'Uma lata de refrigerante de cola, guaraná ou limão.',
        },

        'en': {
            'Cardápio': 'Menu',
            'Pratos franceses': 'French Dishes',
            'Pratos brasileiros': 'Brazilian Dishes',
            'Pizzas': 'Pizzas',
            'Bebidas': 'Drinks',
            'french-dish-1': {
                'Um cozido de carne bovina cozido lentamente em vinho tinto, com cenoura, cebola, cogumelos e bacon.': 'A slow-cooked beef stew in red wine, with carrots, onions, mushrooms, and bacon.',
            },
            'french-dish-2': {
                'Uma torta salgada de massa quebrada recheada com ovos, creme de leite, queijo e bacon.': 'A savory shortcrust pastry filled with eggs, sour cream, cheese and bacon.',
            },
            'french-dish-3': {
                'Um prato vegetariano de legumes assados no forno, como berinjela, abobrinha, tomate, cebola e alho.': 'A vegetarian dish of oven-roasted vegetables such as eggplant, zucchini, tomatoes, onions and garlic.',
            },
            'brazilian-dishe-1': {
                'Um cozido de feijão preto com carne de porco e linguiça, acompanhado de arroz, couve refogada, farofa e laranja.': 'A black bean stew with pork and sausage, served with rice, sautéed collard greens, farofa, and orange slices.',
            },
            'brazilian-dishe-2': {
                'Um ensopado de peixe e camarão com leite de coco, azeite de dendê, tomate, cebola e coentro.': 'A stew of fish and shrimp with coconut milk, palm oil, tomatoes, onions and cilantro.',
            },
            'brazilian-dishe-3': {
                'Um pãozinho feito com polvilho e queijo, macio por dentro e crocante por fora.': 'A cheesy bread roll made with cassava flour and cheese, soft on the inside and crispy on the outside.',
            },
            'pizza-1': {
                'Uma pizza de massa fina coberta com molho de tomate, queijo mussarela e fatias de linguiça calabresa.': 'A thin-crust pizza topped with tomato sauce, mozzarella cheese, and slices of calabrese sausage.',
            },
            'pizza-2': {
                'Uma pizza de massa fina coberta com molho de tomate, queijo mussarela, frango desfiado e catupiry.': 'A thin-crust pizza topped with tomato sauce, mozzarella cheese, shredded chicken, and catupiry cheese.',
            },
            'pizza-3': {
                'Uma pizza de massa fina coberta com molho de tomate, queijo mussarela, queijo gorgonzola, queijo provolone e queijo parmesão.': 'A thin-crust pizza topped with tomato sauce, mozzarella cheese, gorgonzola cheese, provolone cheese, and parmesan cheese.',
            },
            'drink-1': {
                'Uma garrafa de vinho tinto seco da região da Borgonha, na França.': 'A bottle of dry red wine from the Burgundy region in France.',
            },
            'drink-2': {
                'Um copo de suco de laranja natural e gelado.': 'A glass of natural and cold orange juice.',
            },
            'drink-3': {
                'Uma lata de refrigerante de cola, guaraná ou limão.': 'A can of cola, guaraná or lemon soda.',
            }
            // ...
        },
        'es': {
            'Cardápio': 'Menú',
            'Pratos franceses': 'Platos franceses',
            'Pratos brasileiros': 'Platos brasileños',
            'Pizzas': 'Pizzas',
            'Bebidas': 'Bebidas',
            // ...
            'french-dish-1': {
                'Um cozido de carne bovina cozido lentamente em vinho tinto, com cenoura, cebola, cogumelos e bacon.': 'Un guiso de carne de res cocinado a fuego lento en vino tinto, con zanahorias, cebollas, champiñones y tocino.',
            },
            'french-dish-2': {
                'Uma torta salgada de massa quebrada recheada com ovos, creme de leite, queijo e bacon.': 'Una sabrosa masa quebrada rellena de huevos, crema agria, queso y tocino.',
            },
            'french-dish-3': {
                'Um prato vegetariano de legumes assados no forno, como berinjela, abobrinha, tomate, cebola e alho.': 'Plato vegetariano de verduras asadas al horno, como berenjena, calabacín, tomate, cebolla y ajo.',
            },
            'brazilian-dishe-1': {
                'Um cozido de feijão preto com carne de porco e linguiça, acompanhado de arroz, couve refogada, farofa e laranja.': 'Un guiso de frijoles negros con cerdo y salchicha, servido con arroz, couve refogada, farofa y rodajas de naranja.',
            },
            'brazilian-dishe-2': {
                'Um ensopado de peixe e camarão com leite de coco, azeite de dendê, tomate, cebola e coentro.': 'Un guiso de pescado y camarones con leche de coco, aceite de palma, tomates, cebollas y cilantro.',
            },
            'brazilian-dishe-3': {
                'Um pãozinho feito com polvilho e queijo, macio por dentro e crocante por fora.': 'Un rollo de pan de queso hecho con harina de yuca y queso, suave por dentro y crujiente por fuera.',
            },
            'pizza-1': {
                'Uma pizza de massa fina coberta com molho de tomate, queijo mussarela e fatias de linguiça calabresa.': 'Una pizza de masa fina cubierta con salsa de tomate, queso mozzarella y rodajas de salchicha calabresa.',
            },
            'pizza-2': {
                'Uma pizza de massa fina coberta com molho de tomate, queijo mussarela, frango desfiado e catupiry.': 'Una pizza de masa fina cubierta con salsa de tomate, queso mozzarella, pollo desmenuzado y queso catupiry.',
            },
            'pizza-3': {
                'Uma pizza de massa fina coberta com molho de tomate, queijo mussarela, queijo gorgonzola, queijo provolone e queijo parmesão.': 'Una pizza de masa fina cubierta con salsa de tomate, queso mozzarella, queso gorgonzola, queso provolone y queso parmesano.',
            },
            'drink-1': {
                'Uma garrafa de vinho tinto seco da região da Borgonha, na França.': 'Una botella de vino tinto seco de la región de Borgoña en Francia.',
            },
            'drink-2': {
                'Um copo de suco de laranja natural e gelado.': 'Un vaso de jugo de naranja natural y frío.',
            },
            'drink-3': {
                'Uma lata de refrigerante de cola, guaraná ou limão.': 'Una lata de cola, guaraná o refresco de limón.',
            }
        // Adicione outras traduções aqui...
    },
  
    }
// Defina o idioma padrão e traduza os elementos
const defaultLanguage = 'pt-BR'; 
translateElements(defaultLanguage);
