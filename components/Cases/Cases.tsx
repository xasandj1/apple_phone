import React from "react";
import Title from "../UI/Title";
import { CasesContent, CasesWrapper } from "./casesStyled";

const Cases = () => {
  return (
    <>
      <CasesWrapper>
        <div className="container">
          <Title title={"Чехлы"} />
          <CasesContent>
            <div className="row">
              
            </div>
          </CasesContent>
        </div>
      </CasesWrapper>
    </>
  );
};

export default Cases;
