'use strict';

export class Card {
  constructor(cardInfo, cardTemplate, handleImageClick) {
    this._name = cardInfo.name;
    this._link = cardInfo.link;
    this._id = cardInfo._id;
    this._cardTemplate = cardTemplate;
    this._handleImageClick = handleImageClick;
  }

  _getTemplate() {
    const cardItem = document
      .querySelector(this._cardTemplate)
      .content
      .querySelector('.card')
      .cloneNode(true);
    return cardItem;
  }

  generateCard() {
    this._card = this._getTemplate();
    this._cardImage = this._card.querySelector('.card__image');
    this._likeButton = this._card.querySelector('.card__like-button');
    this._trash = this._card.querySelector('.card__trash-button');
    this._setEventListeners();
    this._card.querySelector('.card__title').textContent = this._name;
    this._cardImage.alt = this._name;
    this._cardImage.src = this._link;
    return this._card;
  }

  _removeImage = () => {
    this._card.remove();
    this._element = null;
  }
  
  _likeImage(evt) {
    evt.target.classList.toggle('card__like-button_active');
  }

  _setEventListeners() {
    this._trash.addEventListener('click', this._removeImage);
    this._likeButton.addEventListener('click', this._likeImage);
    this._cardImage.addEventListener('click', () => this._handleImageClick());
  }
}