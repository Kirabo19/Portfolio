const hamburger = document.querySelector('.menu-icon');
const closeMenu = document.querySelector('.menu-cross');
const navItems = document.querySelectorAll('.mobile-menu a');
const portfolioData = [
  {
    id: 0,
    title: 'Tonic',
    subheading: 'CANOPY ',
    subheading2: '• Back End Dev • 2015',
    image: './images/card1.svg',
    imageAlt: 'Tonic-screenshot',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.',
    technologies: ['html', 'css', 'Javascript'],
    seelive: 'https://kirabo19.github.io/Portfolio/',
    seesource: 'https://github.com/Kirabo19/Portfolio',
  },

  {
    id: 1,
    title: 'Multi-Post Stories',
    subheading: 'CANOPY ',
    subheading2: '• Back End Dev • 2015',
    image: './images/card2.svg',
    imageAlt: 'Multi-Post-stories-screenshot',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.',
    technologies: ['html', 'Ruby on rails', 'css', 'Javascript'],
    seelive: 'https://kirabo19.github.io/Portfolio/',
    seesource: 'https://github.com/Kirabo19/Portfolio',
  },

  {
    id: 2,
    title: 'Tonic',
    subheading: 'CANOPY ',
    subheading2: '• Back End Dev • 2015',
    image: './images/card3.svg',
    imageAlt: 'Tonic-screenshot',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.',
    technologies: ['html', 'Ruby on rails', 'css', 'Javascript'],
    seelive: 'https://kirabo19.github.io/Portfolio/',
    seesource: 'https://github.com/Kirabo19/Portfolio',
  },

  {
    id: 3,
    title: 'Multi-Post Stories',
    subheading: 'CANOPY ',
    subheading2: '• Back End Dev • 2015',
    image: './images/card4.svg',
    imageAlt: 'Multi-Post-stories-screenshot',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.',
    technologies: ['html', 'Ruby on rails', 'css', 'Javascript'],
    seelive: 'https://kirabo19.github.io/Portfolio/',
    seesource: 'https://github.com/Kirabo19/Portfolio',
  },
];

function toggleMenu() {
  document.querySelector('.mobile-menu').classList.toggle('d-block');
}

hamburger.addEventListener('click', toggleMenu);
closeMenu.addEventListener('click', toggleMenu);

navItems.forEach((navItem) => {
  navItem.addEventListener('click', toggleMenu);
});

const btn0 = document.getElementById('0');
const btn1 = document.getElementById('1');
const btn2 = document.getElementById('2');
const btn3 = document.getElementById('3');

function displayPopup(e) {
  const exData = portfolioData.filter((d) => +(e.target.id) === d.id);
  const data = exData[0];
  const popupWrapper = document.createElement('div');
  popupWrapper.className = 'modal';
  const popOverlay = document.createElement('div');
  popOverlay.className = 'overlay';
  popupWrapper.appendChild(popOverlay);
  const popContent = document.createElement('div');
  popContent.className = 'modal-content';
  const popHeader = document.createElement('div');
  popHeader.className = 'modal-header';
  const popHeadline = document.createElement('h2');
  popHeadline.className = 'modal-heading';
  popHeadline.textContent = data.title;
  popHeader.appendChild(popHeadline);
  const popImage = document.createElement('img');
  popImage.setAttribute('src', './images/cross-icon-popup.svg');
  popImage.addEventListener('click', (e) => {
    e.target.parentElement.parentElement.parentElement.remove();
  });
  popHeader.appendChild(popImage);
  popContent.appendChild(popHeader);
  const popSubheading = document.createElement('div');
  popSubheading.className = 'modal-subheading';
  const canopy = document.createElement('span');
  canopy.className = 'modal-canopy';
  canopy.textContent = data.subheading;
  popSubheading.appendChild(canopy);
  const grayMatter = document.createElement('span');
  grayMatter.className = 'modal-gray-matter';
  grayMatter.textContent = data.subheading2;
  popSubheading.appendChild(grayMatter);
  popContent.appendChild(popSubheading);
  const featuredImage = document.createElement('img');
  featuredImage.className = 'modal-image';
  featuredImage.setAttribute('src', data.image);
  featuredImage.setAttribute('alt', '');
  popContent.appendChild(featuredImage);
  const desktopContent = document.createElement('div');
  desktopContent.className = 'modal-desktop-content';
  const popParagraph = document.createElement('p');
  popParagraph.className = 'modal-paragraph';
  popParagraph.textContent = data.description;
  desktopContent.appendChild(popParagraph);
  const ulBtnWrapper = document.createElement('div');
  ulBtnWrapper.className = 'modalListWrapper';
  const technologiesList = document.createElement('ul');
  technologiesList.className = 'card-list modal-card-list';
  data.technologies.forEach((tech) => {
    const technologiesItem = document.createElement('li');
    technologiesItem.className = 'card-list-items';
    technologiesItem.textContent = tech;
    technologiesList.appendChild(technologiesItem);
  });
  ulBtnWrapper.appendChild(technologiesList);
  const separaterLine = document.createElement('hr');
  separaterLine.className = 'modal-separator';
  ulBtnWrapper.appendChild(separaterLine);
  const btnWrapper = document.createElement('div');
  btnWrapper.className = 'modalBtn';
  const liveBtn = document.createElement('a');
  liveBtn.className = 'modal-card-button';
  liveBtn.setAttribute('href', data.seelive);
  liveBtn.setAttribute('target', '_blank');
  liveBtn.textContent = 'See Live ';
  const liveBtnIcon = document.createElement('img');
  liveBtnIcon.setAttribute('src', './images/github-icon.svg');
  liveBtn.appendChild(liveBtnIcon);
  btnWrapper.appendChild(liveBtn);
  const sourceBtn = document.createElement('a');
  sourceBtn.className = 'modal-card-button';
  sourceBtn.setAttribute('href', data.seesource);
  sourceBtn.setAttribute('target', '_blank');
  sourceBtn.textContent = 'See Source ';
  const sourceBtnIcon = document.createElement('img');
  sourceBtnIcon.setAttribute('src', './images/source-icon.svg');
  sourceBtn.appendChild(sourceBtnIcon);
  btnWrapper.appendChild(sourceBtn);
  ulBtnWrapper.appendChild(btnWrapper);
  desktopContent.appendChild(ulBtnWrapper);
  popContent.appendChild(desktopContent);
  popupWrapper.appendChild(popContent);
  document.body.appendChild(popupWrapper);
}

btn0.addEventListener('click', (e) => {
  displayPopup(e);
});
btn1.addEventListener('click', (e) => {
  displayPopup(e);
});
btn2.addEventListener('click', (e) => {
  displayPopup(e);
});
btn3.addEventListener('click', (e) => {
  displayPopup(e);
});