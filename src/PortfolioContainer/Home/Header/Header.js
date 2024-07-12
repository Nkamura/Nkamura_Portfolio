import React, { useState, useEffect } from "react";
import {
  TOTAL_SCREENS,
  GET_SCREEN_INDEX,
} from "../../../utilities/commomUtils";
import ScrollService from "../../../utilities/ScrollService";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"; // IMPORTAÇÃO DO ÍCONE FA-TIMES
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";

export default function Header() {
  const [selectedScreen, setSelectedScreen] = useState(0);
  const [showHeaderOptions, setHeaderOptions] = useState(false);

  useEffect(() => {
    const updateCurrentScreen = (currentScreen) => {
      if (!currentScreen || !currentScreen.screenInView) return;
      let screenIndex = GET_SCREEN_INDEX(currentScreen.screenInView);
      if (screenIndex < 0) return;
      setSelectedScreen(screenIndex);
    };

    const currentScreenSubscription =
      ScrollService.currentScreenBroadCaster.subscribe(updateCurrentScreen);

    return () => {
      currentScreenSubscription.unsubscribe();
    };
  }, []);

  const getHeaderOptions = () => {
    return TOTAL_SCREENS.map((screen, i) => (
      <div
        key={screen.screen_name}
        className={getHeaderOptionsClass(i)}
        onClick={() => switchScreen(i, screen)}
      >
        <span>{screen.screen_name}</span>
      </div>
    ));
  };

  const getHeaderOptionsClass = (index) => {
    let classes = "header-option";
    if (index < TOTAL_SCREENS.length - 1) classes += " header-option-separator";

    if (selectedScreen === index) classes += " selected-header-option";
    return classes;
  };

  const switchScreen = (index, screen) => {
    let screenComponent = document.getElementById(screen.screen_name);
    if (!screenComponent) return;

    screenComponent.scrollIntoView({ behavior: "smooth" });
    setSelectedScreen(index);
    setHeaderOptions(false);
  };

  return (
    <div className="header-container">
      <div className="header-parent">
        <div
          className="header-hamburger"
          onClick={() => setHeaderOptions(!showHeaderOptions)}
        >
          <FontAwesomeIcon className="header-hamburger-bars" icon={faBars} />
        </div>
        <div className="header-logo">
          <span>Nkamura</span>
        </div>
        <div
          className={
            showHeaderOptions
              ? "header-options show-hamburger-options"
              : "header-options"
          }
        >
          {showHeaderOptions && ( // ADICIONADO ÍCONE DE SAÍDA PARA FECHAR O MENU
            <div className="header-close" onClick={() => setHeaderOptions(false)}>
              <FontAwesomeIcon icon={faTimes} className="header-close-icon" />
            </div>
          )}
          {getHeaderOptions()}
        </div>
      </div>
    </div>
  );
}
