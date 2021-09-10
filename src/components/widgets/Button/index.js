import React from 'react';
import './button-styles/style.widgets.button-styles.css';

export default function Button(__ButtonProperties) {
  let buttonClassList = "button ";

  // checks for button type
  switch (__ButtonProperties.type) {
    case 'outline':
      buttonClassList += "button-outline ";
      break;
    default:
      buttonClassList += "button-primary ";
    break;
  }

  // check for icons (start-icon, end-icon)
  if (!__ButtonProperties.startIcon) {
    return (
      <button className={buttonClassList} onClick={__ButtonProperties.onClick}>
        {__ButtonProperties.value}</button>
    )
  } else {
    return (
      <button className={buttonClassList} onClick={__ButtonProperties.onClick}>
        <i className={__ButtonProperties.startIcon}></i>
        {__ButtonProperties.value}</button>
    )
  }
}