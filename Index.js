document.addEventListener('DOMContentLoaded', () => {
    const products = [
        {
            image: 'c:\Users\vivin\Downloads\kumiko-shimizu-lNxMcE8mvIM-unsplash.jpg            <div class="card">
',1
            title: 'Deus se mostra de várias formas ',
            description: 'Cada um possui suas proprias limitações, por isso, essas .'
        },
        {
            <div class="card">
            <div class="card">
            image: 'https://pin.it/7Kb5n1gsK',
            title: 'Produto Relaxante 2',
            description: 'Descrição breve do produto relaxante 2.'
        },
        {
            image: 'https://pin.it/2xWOZPaLN',
            title: 'Produto Relaxante 3',
            description: 'Certamente que a bondade e a misericordia me seguirão todos os dias.'
        }
    ];

    const productSection = document.getElementById('product-section');

    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'card';

        const img = document.createElement('img');
        img.src = product.image;
        img.alt = product.title;

        const title = document.createElement('h3');
        title.textContent = product.title;

        const description = document.createElement('p');
        description.textContent = product.description;

        const button = document.createElement('button');
        button.textContent = 'Comprar';

        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(button);

        productSection.appendChild(card);
    });
});
