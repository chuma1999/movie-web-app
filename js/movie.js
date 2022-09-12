// movie list
const menu = [{

        id: 1,
        title: 'Wayward',
        genre: '2021 / Action, Thriller, Romance',
        rating: 5.9,
        img: './images/muvis/wayward.jpg-w180',
        resolution: 'HD',
        category: 'drama',

    },
    {
        id: 18,
        title: 'Instant Karma',
        genre: '2022 / Drama, Thriller, Romance',
        rating: 5.7,
        img: './images/muvis/instantkarma.jpg-w180',
        resolution: 'HD',
        category: 'drama',
    },
    {
        id: 30,
        title: 'Green Lantern',
        genre: '2022 / Animation, Sci-Fi',
        rating: 8.5,
        img: './images/muvis/greenlantern.jpg-w180',
        resolution: 'HD',
        category: 'animation',
    },
    {
        id: 19,
        title: 'Murder at yellowstone',
        genre: '2021 / Drama, Action',
        rating: 5.2,
        img: './images/muvis/murderatyellowstone.jpg-w180',
        resolution: 'HD',
        category: 'thriller',
    },
    {
        id: 20,
        title: 'Malicious Mind Games',
        genre: '2022 / Drama, Thriller',
        rating: 6.5,
        img: './images/muvis/maliciousmindgames.jpg-w180',
        resolution: 'HD',
        category: 'drama',
    },
    {
        id: 29,
        title: 'Kungfu Panda',
        genre: '2022 / Animation, Comedy, Sci-Fi',
        rating: 8.5,
        img: './images/muvis/kungfupanda.jpg-w180',
        resolution: 'HD',
        category: 'animation',
    },
    {
        id: 21,
        title: 'Persuasion',
        genre: '2022 / Drama, Romance',
        rating: 6.7,
        img: './images/muvis/persuasion.jpg-w180',
        resolution: 'HD',
        category: 'romance',
    },
    {
        id: 22,
        title: 'Rise',
        genre: '2022 / Drama, Sports, Comedy',
        rating: 9.2,
        img: './images/muvis/rise.jpg-w180',
        resolution: 'HD',
        category: 'action',
    },
    {
        id: 28,
        title: 'Baymax',
        genre: '2022 / Animation, Comedy, Sci-Fi',
        rating: 9.5,
        img: './images/muvis/baymax.jpg-w180',
        resolution: 'HD',
        category: 'animation',
    },
    {
        id: 23,
        title: 'Rubikon',
        genre: '2022 / Action, Thriller, Sci-Fi',
        rating: 8.5,
        img: './images/muvis/rubikon.jpg-w180',
        resolution: 'HD',
        category: 'thriller',
    },
    {
        id: 31,
        title: 'Harley Quinn',
        genre: '2022 / Animation, Comedy, Sci-Fi',
        rating: 7.5,
        img: './images/muvis/harleyquinn.jpg-w180',
        resolution: 'HD',
        category: 'animation',
    },
    {
        id: 24,
        title: 'The Princess',
        genre: '2018 / Action',
        rating: '5.0',
        img: './images/muvis/theprincess.jpg-w180',
        resolution: 'HD',
        category: 'action',
    },
    {
        id: 25,
        title: 'The Summoned',
        genre: '2021 / Drama, Thriller',
        rating: 6.3,
        img: './images/muvis/thesummoned.jpg-w180',
        resolution: 'HD',
        category: 'thriller',
    },
    {
        id: 32,
        title: 'Paws Of Furry',
        genre: '2022 / Animation, Comedy, Sci-Fi',
        rating: 9.2,
        img: './images/muvis/pawsoffury.jpg-w180',
        resolution: 'HD',
        category: 'animation',
    },
    {
        id: 26,
        title: 'Watcher',
        genre: '2022 / Drama, Thriller, Horror',
        rating: '6.0',
        img: './images/muvis/watcher.jpg-w180',
        resolution: 'HD',
        category: 'drama',
    },

    {
        id: 2,
        title: 'Civil',
        genre: '2022 / Drama, History',
        rating: 7.5,
        img: './images/muvis/civil.jpg-w180',
        resolution: 'HD',
        category: 'drama',
    },
    {
        id: 33,
        title: 'DC Super Pets',
        genre: '2022 / Animation, Comedy, Sci-Fi',
        rating: 9.5,
        img: './images/muvis/dcsuperpets.jpg-w180',
        resolution: 'HD',
        category: 'animation',
    },
    {
        id: 5,
        title: 'Crecked',
        genre: '2022 / Drama, Thriller, Horror',
        rating: 6.5,
        img: './images/muvis/crecked.jpg-w180',
        resolution: 'HD',
        category: 'thriller',
    },
    {
        id: 3,
        title: 'Black Phone',
        genre: '2020 / Drama, Thriller, Action',
        rating: 5.2,
        img: './images/muvis/blackphone.jpg-w180',
        resolution: 'HD',
        category: 'thriller',
    },
    {
        id: 34,
        title: 'Minions: Rise Of Gru',
        genre: '2022 / Animation, Comedy, Sci-Fi',
        rating: '9.0',
        img: './images/muvis/riseofgru.jpg-w180',
        resolution: 'HD',
        category: 'animation',
    },
    {
        id: 7,
        title: 'Dangerous Liars',
        genre: '2022 / Romance, Comedy',
        rating: 7.2,
        img: './images/muvis/dangerous.jpg-w180',
        resolution: 'HD',
        category: 'romance',
    },
    {
        id: 4,
        title: 'Bad Blood',
        genre: '2021 / Drama, Thriller',
        rating: '5.0',
        img: './images/muvis/badblood.jpg-w180',
        resolution: 'HD',
        category: 'thriller',
    },

    {
        id: 6,
        title: 'Crimes of the future',
        genre: '2021 / Action, Sci-Fi',
        rating: '6.0',
        img: './images/muvis/crimesofthefuture.jpg-w180',
        resolution: 'HD',
        category: 'action',
    },

    {
        id: 8,
        title: 'Dont make me go',
        genre: '2015 / Drama',
        rating: 5.8,
        img: './images/muvis/dontmakemego.jpg-w180',
        resolution: 'HD',
        category: 'drama',
    },
    {
        id: 9,
        title: 'First Love',
        genre: '2022 / Drama, Romance',
        rating: '9.0',
        img: './images/muvis/firstlove.jpg-w180',
        resolution: 'HD',
        category: 'romance',
    },
    {
        id: 10,
        title: 'Down with the king',
        genre: '2020 / Documentry, History',
        rating: 8.4,
        img: './images/muvis/downwiththeking.jpg-w180',
        resolution: 'HD',
        category: 'drama',
    },
    {
        id: 11,
        title: 'Father of the bride',
        genre: '2021 / Comedy, Romance',
        rating: '7.0',
        img: './images/muvis/fatherofthebride.jpg-w180',
        resolution: 'HD',
        category: 'comedy',
    },
    {
        id: 12,
        title: 'Glamour Girls',
        genre: '2020 / Romance',
        rating: 7.8,
        img: './images/muvis/glamourgirls.jpg-w180',
        resolution: 'HD',
        category: 'romance',
    },
    {
        id: 13,
        title: 'Everything in between',
        genre: '2022 / Romance, Comedy',
        rating: 6.8,
        img: './images/muvis/hellogoodbye.jpg-w180',
        resolution: 'HD',
        category: 'comedy',
    },
    {
        id: 14,
        title: 'Gods waiting room',
        genre: '2022 / Drama, Christianity',
        rating: 8.5,
        img: './images/muvis/godwaitingroom.jpg-w180',
        resolution: 'HD',
        category: 'drama',
    },
    {
        id: 15,
        title: 'Half Time',
        genre: '2021 / Drama, Romance, Comedy',
        rating: 7.7,
        img: './images/muvis/halftime.jpg-w180',
        resolution: 'HD',
        category: 'romance',
    },
    {
        id: 16,
        title: 'Gaslight',
        genre: '2018 / Drama, Thriller, Romance',
        rating: 5.5,
        img: './images/muvis/gaslight.jpg-w180',
        resolution: 'HD',
        category: 'drama',
    },
    {
        id: 17,
        title: 'Hot Seat',
        genre: '2022 / Action, Thriller',
        rating: 8.5,
        img: './images/muvis/hotseat.jpg-w180',
        resolution: 'HD',
        category: 'action',
    },

    {
        id: 27,
        title: 'After Blue',
        genre: '2022 / Drama, Thriller',
        rating: 6.6,
        img: './images/muvis/afterblue.jpg-w180',
        resolution: 'HD',
        category: 'drama',
    },

];


const movieCenter = document.querySelector('.section-center');

const filterBtns = document.querySelectorAll('.filter-btn');

// load items
window.addEventListener('DOMContentLoaded', function() {
    displayMenuItems(menu);
});

// filter items
filterBtns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        const category = e.currentTarget.dataset.movie;
        const menuCategory = menu.filter(function(menuItem) {
            if (menuItem.category === category) {
                return menuItem;
            }
        });
        if (category === 'all') {
            displayMenuItems(menu);
        } else {
            displayMenuItems(menuCategory);
        };

        if (category) {
            filterBtns.forEach(function(dtn) {
                dtn.classList.remove('btn-on');
                e.target.classList.add('btn-on');
            });
        };

        //e.currentTarget.classList.toggle('btn-on');

    });
});




function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function(item) {
        //console.log(item);

        return `<div class="one-box">
    <img src=${item.img} alt=${item.title}>
    <p class="genrer-year">
        ${item.genre}
    </p>
    <p class="name-muv">
        ${item.title}
    </p>
    <p class="hdd">${item.resolution}</p>
    <a href="./singlemovie.html" class="playerr"><i class="fa-solid fa-circle-play fa-4x"></i></a>
    <p class="rett">${item.rating}</p>

</div>`;
    });
    displayMenu = displayMenu.join('');
    movieCenter.innerHTML = displayMenu;
}