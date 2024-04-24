const MENU = [
  {
    title: "Lanche do dia",
    data: [
      {
        id: "1",
        title: "Hamburguer Fitness",
        price: 24.9,
        description:
          "Um delicioso hambúrguer saudável e nutritivo que vai te dar energia para o seu dia. Preparado com ingredientes cuidadosamente selecionados...",
        cover: require("../../assets/products/cover/1.png"),
        thumbnail: require("../../assets/products/thumbnail/1.png"),
        ingredients: [
          "Pão integral;",
          "2x carnes magras de frango (blend da casa) de 80g;",
          "Queijo cottage;",
          "Folhas de espinafre;",
          "Tomate;",
          "Pepino;",
          "Cebola roxa;",
          "Molho de iogurte caseiro;",
        ],
      },
    ],
    },
    {
      title: "Promoções",
      data: [
        {
          id: "2",
          title: "Hamburguer Integral",
          price: 34.9,
          description:
            "Os ingredientes desse hambúrguer mudam toda semana, sempre com opções saudáveis e equilibradas para cuidar da sua saúde...",
          cover: require("../../assets/products/cover/2.png"),
          thumbnail: require("../../assets/products/thumbnail/2.png"),
          ingredients: [
            "Pão integral;",
            "2x carnes magras de peru (blend da casa) de 80g;",
            "Queijo cottage;",
            "Folhas de rúcula;",
            "Tomate;",
            "Cebola caramelizada;",
            "Molho de mostarda e mel;",
          ],
        },
        {
          id: "3",
          title: "Hamburguer Vegano",
          price: 32.7,
          description:
            "Uma opção deliciosa para os amantes de plantas. Este hambúrguer vegano é cheio de sabor e nutrientes essenciais...",
          cover: require("../../assets/products/cover/3.png"),
          thumbnail: require("../../assets/products/thumbnail/3.png"),
          ingredients: [
            "Pão integral;",
            "Hambúrguer vegano de grão-de-bico (blend da casa) de 80g;",
            "Guacamole;",
            "Alface;",
            "Tomate;",
            "Picles de pepino;",
            "Cebola roxa;",
            "Maionese vegana;",
          ],
        },
        {
          id: "4",
          title: "Salada de Quinoa",
          price: 29.9,
          description:
            "Uma salada leve e rica em nutrientes para quem busca uma refeição saudável. Experimente essa explosão de sabores...",
          cover: require("../../assets/products/cover/4.png"),
          thumbnail: require("../../assets/products/thumbnail/4.png"),
          ingredients: [
            "Quinoa cozida;",
            "Vegetais frescos (tomate, pepino, cenoura, etc.);",
            "Abacate;",
            "Castanhas;",
            "Molho de limão e azeite;",
          ],
        },
      ],
    },
    {
      title: "Sobremesa",
      data: [
        {
          id: "5",
          title: "Smoothie Bowl",
          price: 18.9,
          description:
            "Uma sobremesa refrescante e saudável para saborear. Escolha os ingredientes que mais gosta e crie o seu bowl personalizado...",
          cover: require("../../assets/products/cover/5.png"),
          thumbnail: require("../../assets/products/thumbnail/5.png"),
          ingredients: [
            "Frutas variadas (morango, banana, kiwi, etc.);",
            "Iogurte natural;",
            "Granola caseira;",
            "Mel ou xarope de bordo;",
          ],
        },
        {
          id: "6",
          title: "Frutas Grelhadas",
          price: 22.9,
          description:
            "Um delicioso mix de frutas grelhadas para adoçar sua refeição sem comprometer sua saúde. Experimente essa opção leve e saborosa...",
          cover: require("../../assets/products/cover/6.png"),
          thumbnail: require("../../assets/products/thumbnail/6.png"),
          ingredients: ["Abacaxi;", "Pêssego;", "Mel ou xarope de agave;", "Canela;"],
        },
      ],
    },
    {
      title: "Bebidas",
      data: [
        {
          id: "7",
          title: "Suco Detox",
          price: 6.9,
          thumbnail: require("../../assets/products/thumbnail/7.png"),
          cover: require("../../assets/products/cover/7.png"),
          description:
            "Um suco detox repleto de nutrientes para acompanhar a sua refeição. Desfrute de uma opção saudável e deliciosa...",
          ingredients: ["Couve;", "Maçã;", "Gengibre;", "Limão;", "Água de coco;"],
        },
      ],
    },    
]

const PRODUCTS = MENU.map((item) => item.data).flat()

const CATEGORIES = MENU.map((item) => item.title)

type ProductProps = (typeof PRODUCTS)[0]

export { MENU, PRODUCTS, CATEGORIES, ProductProps }
