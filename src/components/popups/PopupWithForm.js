import React from 'react';
import DotsLoader from '../DotsLoader';

function PopupWithForm(props) {


  return (
    <div className={`popup popup_type_${props.name} ${props.isOpen ? "popup_opened" : ""}`}>
      <div className={`popup__container popup__container_type_${props.name}`}>
        <button type="button" aria-label="Закрыть" title="Закрыть" className="button popup__close-button"></button>
        <form className="form" name={props.name} noValidate>
          <fieldset className="form__profile-info">
            <legend className="form__title">{props.title}</legend>
            {props.children}
            <button type="submit" name="submit" className={`button button_action_submit form__button form__button_position_${props.name}`}>{props.buttonText}
              <DotsLoader />
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  )
}

export default PopupWithForm ;
