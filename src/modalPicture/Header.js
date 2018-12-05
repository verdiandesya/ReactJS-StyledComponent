import React from "react";

import { CloseIcon } from "./icons";

const Header = ({
  image,
  onClose,
}) => (
  <div className="__react_modal_image__header">
    <span className="__react_modal_image__icon_menu">
      <a onClick={onClose}>
        <CloseIcon />
      </a>
    </span>
  </div>
);

export default Header;
