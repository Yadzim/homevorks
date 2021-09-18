import React, { Component } from "react";
import { img1, img2, back, back1, back2, back3, back4 } from "../utils/imgExport";
import { AboutAsS } from "../styles/style";

export default class AbouteUs extends Component {
  render() {
    return (
      <AboutAsS>
        <img className="absolute" src={back1} alt="" />
        <img className="absolute" src={back2} alt="" />
        <img className="absolute" src={back3} alt="" />
        <img className="absolute" src={back4} alt="" />
        <img className="absolute" src={back} alt="" />
        <h1>About Us</h1>
        <div className='grid'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elitaa. Augue
            vivamus sit aliquam in velit volutpat scelerisque at id. Orci cursus
            egestas adipiscing quis id tempus donecc amet. Facilisi malesuada
            curabitur vulputate nulla tortor. vulputate adipiscing diam
            malesuada proin morbi mattiscc vel. Lorem ipsum dolor sit amet,
            consectetur adipiscing elitaa. Augue vivamus sit aliquam in velit
            volutpat scelerisque at id. Orci cursus egestas adipiscing quis id
            tempus donecc amet. vivamus sit aliquam in velit volutpat
            scelerisque at id. Orci cursus egestas adipiscing quis id tempus
            donecc amet.
          </p>
          <div className="imgs">
            <img src={img1} alt="photo" />
            <img src={img2} alt="photo" />
          </div>
        </div>
      </AboutAsS>
    );
  }
}


