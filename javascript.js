//Here is where the html are created with js for the popup window
var fstElemDiv = document.createElement('div');
fstElemDiv.classList.add('container_pop');
document.getElementById('pop_window').appendChild(fstElemDiv);

var sndElemDiv = document.createElement('div');
sndElemDiv.classList.add('container_header');
document.getElementsByClassName('container_pop')[0].appendChild(sndElemDiv);

var fstElemPar = document.createElement('p');
fstElemPar.classList.add('title_card_one');
document.getElementsByClassName('container_header')[0].appendChild(fstElemPar);

var trdElemDiv = document.createElement('div');
trdElemDiv.classList.add('disable_x');
trdElemDiv.setAttribute("onclick","show_normal();");
document.getElementsByClassName('container_header')[0].appendChild(trdElemDiv);

var frthElemDiv = document.createElement('div');
frthElemDiv.classList.add('card_one');
document.getElementsByClassName('container_pop')[0].appendChild(frthElemDiv);

var sndElemPar = document.createElement('p');
sndElemPar.classList.add('para_card_one');
document.getElementsByClassName('container_pop')[0].appendChild(sndElemPar);

var fiveElemDiv = document.createElement('div');
fiveElemDiv.classList.add('tags_container');
document.getElementsByClassName('container_pop')[0].appendChild(fiveElemDiv);

var sixElemDiv = document.createElement('div');
sixElemDiv.classList.add('tags_one');
document.getElementsByClassName('tags_container')[0].appendChild(sixElemDiv);

var sevenElemDiv = document.createElement('div');
sevenElemDiv.classList.add('div_create');
document.getElementsByClassName('tags_one')[0].appendChild(sevenElemDiv);

var frstElemA = document.createElement('a');
frstElemA.classList.add('tage_card_one');
document.getElementsByClassName('div_create')[0].appendChild(frstElemA);

var eightElemDiv = document.createElement('div');
eightElemDiv.classList.add('div_create');
document.getElementsByClassName('tags_one')[0].appendChild(eightElemDiv);

var sndElemA = document.createElement('a');
sndElemA.classList.add('tage_card_one');
document.getElementsByClassName('div_create')[1].appendChild(sndElemA);

var nineElemDiv = document.createElement('div');
nineElemDiv.classList.add('div_create');
document.getElementsByClassName('tags_one')[0].appendChild(nineElemDiv);

var thrdElemA = document.createElement('a');
thrdElemA.classList.add('tage_card_one');
document.getElementsByClassName('div_create')[2].appendChild(thrdElemA);

var tenthElemDiv = document.createElement('div');
tenthElemDiv.classList.add('div_create');
document.getElementsByClassName('tags_one')[0].appendChild(tenthElemDiv);

var fourthElemA = document.createElement('a');
fourthElemA.classList.add('tage_card_one');
document.getElementsByClassName('div_create')[3].appendChild(fourthElemA);

var eleveElemDiv = document.createElement('div');
eleveElemDiv.classList.add('buttons_card_one');
document.getElementsByClassName('container_pop')[0].appendChild(eleveElemDiv);

var fstElemBtn = document.createElement('button');
fstElemBtn.classList.add('button_card_one');
fstElemBtn.setAttribute('id','see_live');
fstElemBtn.setAttribute('type', 'button');
document.getElementsByClassName('buttons_card_one')[0].appendChild(fstElemBtn);

var sndElemBtn = document.createElement('button');
sndElemBtn.classList.add('button_card_one');
sndElemBtn.setAttribute('id','see_source');
sndElemBtn.setAttribute('type', 'button');
document.getElementsByClassName('buttons_card_one')[0].appendChild(sndElemBtn);

//Here is where the html are created with js for the section works

var worksElemH2 = document.createElement('h2');
worksElemH2.classList.add('second_main');
worksElemH2.innerText = 'My recent work';
document.getElementById('portfolio_work').appendChild(worksElemH2);

var worksElemDiv = document.createElement('div');
worksElemDiv.classList.add('division_section_works');
document.getElementById('portfolio_work').appendChild(worksElemDiv);


//This part is a loop to create 4 times the 4 projects instead writinig manually 4 times and more lines of code
for(var m = 0; m < 4; m++) {
  if(m === 1 || m === 3) {
    var workElemOne = document.createElement('div');
    workElemOne.classList.add('container_works', 'special_flex');
    document.getElementById('portfolio_work').appendChild(workElemOne);
  } else {
    var workElemOneReverse = document.createElement('div');
    workElemOneReverse.classList.add('container_works', 'first_style_column');
    document.getElementById('portfolio_work').appendChild(workElemOneReverse);
  }
  var workElemTwo = document.createElement('div');
  workElemTwo.classList.add('first_logo');
  document.getElementsByClassName('container_works')[m].appendChild(workElemTwo);

  var workElemTree = document.createElement('div');
  workElemTree.classList.add('container_column');
  document.getElementsByClassName('container_works')[m].appendChild(workElemTree);

  var workElemFour = document.createElement('article');
  workElemFour.classList.add('firts_p');
  document.getElementsByClassName('container_column')[m].appendChild(workElemFour);

  var workElemFive = document.createElement('h2');
  workElemFive.classList.add('fill_title');
  document.getElementsByClassName('firts_p')[m].appendChild(workElemFive);

  var workElemSix = document.createElement('p');
  workElemSix.classList.add('fill_article');
  document.getElementsByClassName('firts_p')[m].appendChild(workElemSix);

  var workElemSeve = document.createElement('div');
  workElemSeve.classList.add('list');
  document.getElementsByClassName('container_column')[m].appendChild(workElemSeve);

  var workElemEight = document.createElement('ul');
  workElemEight.classList.add('grid_first');
  document.getElementsByClassName('list')[m].appendChild(workElemEight);

  var workElemNine = document.createElement('li');
  workElemNine.classList.add('fill_list');
  document.getElementsByClassName('grid_first')[m].appendChild(workElemNine);

  var workElemTen = document.createElement('li');
  workElemTen.classList.add('fill_list');
  document.getElementsByClassName('grid_first')[m].appendChild(workElemTen);

  var workElemEleven = document.createElement('li');
  workElemEleven.classList.add('fill_list');
  document.getElementsByClassName('grid_first')[m].appendChild(workElemEleven);

  var workElemTwelve = document.createElement('li');
  workElemTwelve.classList.add('fill_list');
  document.getElementsByClassName('grid_first')[m].appendChild(workElemTwelve);

  var workElemThirte = document.createElement('button');
  workElemThirte.classList.add('button_pro');
  workElemThirte.setAttribute('type', 'button');
  workElemThirte.setAttribute("onclick","show_pop("+ (m + 1) + ");");
  document.getElementsByClassName('container_column')[m].appendChild(workElemThirte);

  var workElemForteen = document.createElement('span');
  workElemForteen.classList.add('fill_button');
  document.getElementsByClassName('button_pro')[m].appendChild(workElemForteen);
}

  var objArrProj = [
    {
      title: 'Multi-Post Stories',
      img: './img/Placeholder.png',
      description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
      technologies: ['CSS', 'html', 'bootstrap', 'Ruby'],
      buttonOne: 'See Project'
   },
   {
      title: '',
      img: '',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble.",
      technologies: ['html', 'Ruby on rails', 'css', 'Github'],
      buttonOne: 'See Live',
      ButtonTwo: 'See Source'
    }
  ]

var count = 0;

for(var j = 0; j < 4; j++) {
  document.getElementsByClassName('fill_title')[j].innerHTML = objArrProj[0].title;
  document.getElementsByClassName('fill_article')[j].innerHTML = objArrProj[0].description;
  document.getElementsByClassName('fill_button')[j].innerHTML = objArrProj[0].buttonOne;
  document.getElementsByClassName('first_logo')[j].style.backgroundImage = 'url(' + objArrProj[0].img +')';
  if(j <= 0) {
    count = count + 0;
  } else {
    count = count + 1;
  }
  document.getElementsByClassName('fill_list')[count].innerHTML = objArrProj[0].technologies[0];
  document.getElementsByClassName('fill_list')[count = count + 1].innerHTML = objArrProj[0].technologies[1];
  document.getElementsByClassName('fill_list')[count = count + 1].innerHTML = objArrProj[0].technologies[2];
  document.getElementsByClassName('fill_list')[count = count + 1].innerHTML = objArrProj[0].technologies[3];
}

function spanHidden() {
  document.getElementsByClassName('menu_ham_mob')[0].style.display = 'none';
}

spanHidden();

function mobileMenu(parameter) {
  if (parameter != "No") {
    document.getElementById('hambur_menu').style.dipslay = 'flex';
    document.getElementsByClassName('material-symbols-outlined')[0].style.display = 'none';
    document.getElementsByClassName('menucontainer')[0].style.paddingBottom = '500px';
    document.getElementsByClassName('container')[0].style.backgroundImage  = "url('./img/shapes_1.svg')";
    document.getElementsByClassName('container')[0].style.backgroundRepeat  = 'no-repeat, repeat';
    document.getElementsByClassName('container')[0].style.backgroundPositionX  = 'center';
    document.getElementsByClassName('container')[0].style.backgroundSize  = '100% 100vh';
    document.getElementsByClassName('name_head')[0].style.display = 'none';
    document.getElementsByClassName('menu_ham_mob')[0].style.display = 'flex';
    document.getElementsByClassName('ham_menu')[0].style.display = 'flex';
    document.getElementsByClassName('ham_menu')[1].style.display = 'flex';
    document.getElementsByClassName('ham_menu')[2].style.display = 'flex';
  }
}

mobileMenu("No");

function desktopMob(parameter) {
  if(parameter != "No") {
    document.getElementsByClassName('name_head')[0].style.display = 'flex';
    document.getElementsByClassName('menucontainer')[0].style.paddingBottom = '0';
    document.getElementsByClassName('material-symbols-outlined')[0].style.display = 'flex';
    document.getElementsByClassName('container')[0].style.backgroundImage  = 'none';
    document.getElementsByClassName('menucontainer')[0].style.marginBottom = '0';
    document.getElementsByClassName('menu_ham_mob')[0].style.display = 'none';
    document.getElementsByClassName('ham_menu')[0].style.display = 'none';
    document.getElementsByClassName('ham_menu')[1].style.display = 'none';
    document.getElementsByClassName('ham_menu')[2].style.display = 'none';
  }
}

desktopMob("No");

function show_pop(parameter) {
  if(parameter != "No") {
    document.getElementsByClassName('container')[0].style.display = 'none';
    document.getElementsByTagName('body')[0].style.margin = '0';
    document.getElementsByTagName('body')[0].style.padding = '0';
    document.getElementsByClassName('first_pop')[0].style.display = 'flex';
    document.getElementsByClassName('para_card_one')[0].innerHTML = objArrProj[1].description;
    document.getElementsByClassName('tage_card_one')[0].innerHTML = objArrProj[1].technologies[0];
    document.getElementsByClassName('tage_card_one')[1].innerHTML = objArrProj[1].technologies[1];
    document.getElementsByClassName('tage_card_one')[2].innerHTML = objArrProj[1].technologies[2];
    document.getElementsByClassName('tage_card_one')[3].innerHTML = objArrProj[1].technologies[3];
    document.getElementsByClassName('button_card_one')[0].innerHTML = objArrProj[1].buttonOne;
    document.getElementsByClassName('button_card_one')[1].innerHTML = objArrProj[1].ButtonTwo;
  }
}

show_pop("No");

function show_normal(parameter) {
  if(parameter != "No") {
    document.getElementsByClassName('first_pop')[0].style.display = 'none';
    document.getElementsByClassName('container')[0].style.display = '';
  }
}

show_normal("No");

function makeLowercase(parameter) {
  if(parameter != "No") {
    let getEmail = document.getElementById('email_address').value;

    if(getEmail != "@") {
      let asignText = getEmail.toLowerCase();
      document.getElementById('email_address').value = asignText;
    }
  }
}

makeLowercase("No");

function checkForm(parameter){
  if(parameter != "No") {
  const email = document.querySelector('#email_address').value;
  const lowEmail= email.toLowerCase();
    if(email === lowEmail) {
      return true;
    } else {
      alert("Email has incorrect pattern");
      return false;
    }
  }
}

checkForm("No");

function localStorageFct(parameter) {
  if(parameter != "No") {
    if(typeof(Storage) !== "undefined") {
      let getFullNameTxt = document.getElementById('full_name').value;
      let getEmailTxt = document.getElementById('email_address').value;
      let getTextArea = document.getElementById('text_area').value;
      let objectInputs = {Name: getFullNameTxt, Email: getEmailTxt, TextArea: getTextArea};
      let strinfObject = JSON.stringify(objectInputs);
      localStorage.setItem('form', strinfObject);
    }
  }
}

localStorageFct("No");

window.onload = function() {
  if (localStorage.getItem('form')) {
    let parseObjt = JSON.parse(localStorage.getItem('form'));
    document.getElementById('full_name').value = parseObjt.Name;
    document.getElementById('email_address').value = parseObjt.Email;
    document.getElementById('text_area').value = parseObjt.TextArea;
  } else {
    localStorage.clear();
  }
};