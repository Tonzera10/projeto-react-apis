import {
  AlertMain,
  AlertStyle,
  DescriptionStyle,
  TitleStyle,
} from "./AlertStyle";
import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";


function Alert({main, text}) {
    const context = useContext(GlobalContext)
    const {setAlertRemove, setGotcha} = context

  return (
    <AlertMain
      onClick={() => {
        setAlertRemove(false);
        setGotcha(false)
      }}
    >
      <AlertStyle>
        <TitleStyle>{main}</TitleStyle>
        <DescriptionStyle>{text}</DescriptionStyle>
      </AlertStyle>
    </AlertMain>
  );
}

export default Alert;
