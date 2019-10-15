'use strict'
var gModals = createModals();

function createModals() {
    return [
        {
            id: '1',
            name: 'Chess',
            title: 'Chess muliplayer game',
            describe: `Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis
            dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate,
            maiores repudiandae, nostrum, reiciendis facere nemo!`,
            Category: ["Matrixes"],
            img: "chess.jpg"
        },
        {
            id: '2',
            name: 'Minesweeper',
            title: 'Minesweeper a nice game',
            describe: `Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis
            dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate,
            maiores repudiandae, nostrum, reiciendis facere nemo!`,
            Category: ["Matrixes"],
            img: "minesweeper.jpg"
        },
        {
            id: '3',
            name: 'Todos App',
            title: 'Todos for easy calendar',
            describe: `Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis
            dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate,
            maiores repudiandae, nostrum, reiciendis facere nemo!`,
            Category: ["keyboard events"],
            img: "todos.jpg"
        },
        {
            id: '4',
            name: 'Books Shop',
            title: 'Books Shop for books',
            describe: `Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis
            dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate,
            maiores repudiandae, nostrum, reiciendis facere nemo!`,
            Category: ["e-commerce"],
            img: "booksshop.jpg"
        },
    ]
}

function getCards() {
    return gModals;
}