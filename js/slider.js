let muviBtn = document.querySelector('#single-review-1');
let mainImag = document.getElementById('main-img');
let mainName = document.getElementById('main-name');
let motherDiv = document.querySelector('.single-muvi-details');
let removerDetails = document.querySelector('.remover-dt');


////////////////////////////////////////////////////////////////////
let toronto = document.getElementById('toronto');
let nameToronto = document.getElementById('name-toro');



muviBtn.addEventListener('click', () => {
    motherDiv.classList.toggle('on-display');
    mainImag.src = toronto.src;
    nameToronto.innerHTML = "The Man From Toronto";
    mainName.innerHTML = nameToronto.innerHTML;
});

removerDetails.onclick = () => {
    motherDiv.classList.remove('on-display');
};




///////////////////////////////////////////////////////////////
let muviBtn2 = document.querySelector('#single-review-2');
let collision = document.getElementById('collision');
let nameCollision = document.getElementById('coll');

muviBtn2.addEventListener('click', () => {
    motherDiv.classList.toggle('on-display');
    mainImag.src = collision.src;
    nameCollision.innerHTML = "Collision";
    mainName.innerHTML = nameCollision.innerHTML;
});



///////////////////////////////////////////////////////////////
let muviBtn3 = document.querySelector('#single-review-3');
let jurrasic = document.getElementById('jurrasic');
let nameJurrasic = document.getElementById('jura');

muviBtn3.addEventListener('click', () => {
    motherDiv.classList.toggle('on-display');
    mainImag.src = jurrasic.src;
    nameJurrasic.innerHTML = "Jurrasic World Dominion";
    mainName.innerHTML = nameJurrasic.innerHTML;
});


///////////////////////////////////////////////////////////////
let muviBtn4 = document.querySelector('#single-review-4');
let thor = document.getElementById('thor');
let nameThor = document.getElementById('thunder');

muviBtn4.addEventListener('click', () => {
    motherDiv.classList.toggle('on-display');
    mainImag.src = thor.src;
    nameThor.innerHTML = "Thor Love and Thunder";
    mainName.innerHTML = nameThor.innerHTML;
});

///////////////////////////////////////////////////////////////
let muviBtn5 = document.querySelector('#single-review-5');
let strange = document.getElementById('Doctor-strange');
let nameStrange = document.getElementById('strange');

muviBtn5.addEventListener('click', () => {
    motherDiv.classList.toggle('on-display');
    mainImag.src = strange.src;
    nameStrange.innerHTML = "Doctor Strange Multiverse";
    mainName.innerHTML = nameStrange.innerHTML;
});


///////////////////////////////////////////////////////////////
let muviBtn6 = document.querySelector('#single-review-6');
let chickenhare = document.getElementById('chickenhare');
let nameChickenhare = document.getElementById('chicken');

muviBtn6.addEventListener('click', () => {
    motherDiv.classList.toggle('on-display');
    mainImag.src = chickenhare.src;
    nameChickenhare.innerHTML = "Chickenhare";
    mainName.innerHTML = nameChickenhare.innerHTML;
});


///////////////////////////////////////////////////////////////
let muviBtn7 = document.querySelector('#single-review-7');
let spiderhead = document.getElementById('spiderhead');
let nameSpiderhead = document.getElementById('spider');

muviBtn7.addEventListener('click', () => {
    motherDiv.classList.toggle('on-display');
    mainImag.src = spiderhead.src;
    nameSpiderhead.innerHTML = "Spiderhead";
    mainName.innerHTML = nameSpiderhead.innerHTML;
});


///////////////////////////////////////////////////////////////
let muviBtn8 = document.querySelector('#single-review-8');
let riseOfGru = document.getElementById('rise-of-gru');
let nameRiseOfGru = document.getElementById('minions');

muviBtn8.addEventListener('click', () => {
    motherDiv.classList.toggle('on-display');
    mainImag.src = riseOfGru.src;
    nameRiseOfGru.innerHTML = "Minions: Rise of gru";
    mainName.innerHTML = nameRiseOfGru.innerHTML;
});


///////////////////////////////////////////////////////////////
let muviBtn9 = document.querySelector('#single-review-9');
let seaBeast = document.getElementById('sea-beast');
let nameSeaBeast = document.getElementById('beast');

const seaBeasts = () => {

    mainImag.src = seaBeast.src;
    nameSeaBeast.innerHTML = "Sea Beast";
    mainName.innerHTML = nameSeaBeast.innerHTML;
    motherDiv.classList.toggle('on-display');
}

muviBtn9.addEventListener('click', seaBeasts)