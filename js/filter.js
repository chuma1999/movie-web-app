let list = document.querySelectorAll('.button-value');
let itemBox = document.querySelectorAll('.resize');


for (let i = 0; i < list.length; i++) {
    list[i].addEventListener('click', function() {
        for (let j = 0; j < list.length; j++) {
            list[j].classList.remove('on_tag');
        }
        this.classList.add('on_tag');

        let dataFilter = this.getAttribute('data-filter');

        for (let k = 0; k < itemBox.length; k++) {
            itemBox[k].classList.remove('on_tag');
            itemBox[k].classList.add('hide');

            if (itemBox[k].getAttribute('data-item') == dataFilter || dataFilter == "random") {
                itemBox[k].classList.remove('hide');
                itemBox[k].classList.add('on_tag');
            }
        }
    })
}