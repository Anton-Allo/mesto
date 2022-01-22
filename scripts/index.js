const profileEditButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close');
const profileInfoName = document.querySelector('.profile__name');
const profileInfoOccupation = document.querySelector('.profile__occupation');
const popupForm = document.querySelector('.popup__form');
const popupFormInputName = popupForm.name_profile;
const popupFormInputOccupation = popupForm.occupation_profile;

function openPopup() {
  popup.classList.add('popup_opened');
  popupFormInputName.value = profileInfoName.textContent;
  popupFormInputOccupation.value = profileInfoOccupation.textContent;
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

profileEditButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);

const cardLikeButton = document.querySelector('.card__like-button');

function likeButtonClicked() {
  cardLikeButton.classList.toggle('card__like-button_active');
}

cardLikeButton.addEventListener('click', likeButtonClicked);