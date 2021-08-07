import React, { Component } from 'react';

class Start extends Component {
  state = {  }
  render() {
    return (
      <div class="start">
                <div class="title">
                    <p>How to start</p>
                    <h4>Start in 3 simple steps</h4>
                </div>
                <div class="iphones">
                    <div class="iphone-box iphone-box1">
                        <h4>1. Choose your IG post</h4>
                        <p>Download our app, link your IG and choose a post you want to annotate</p>
                        <img src="https://shelfi.io/_next/static/images/step-1-3a85ef1c6cd0d63eab204ac2f3078577.png" alt=""/>
                    </div>
                    <div class="iphone-box iphone-box2">
                        <h4>2. Find a product</h4>
                        <p>Find your brand and choose a relevant product</p>
                        <img src="https://shelfi.io/_next/static/images/step-2-e4d807f7f0097570d5ffc46306ef98aa.png" alt=""/>
                    </div>
                    <div class="iphone-box iphone-box3">
                        <h4>3. Add a link in bio</h4>
                        <p>Once you are done, share your shop with followers using a link in IG bio</p>
                        <img src="https://shelfi.io/_next/static/images/step-3-b1c293a385da0855b8f0b0d8c8f9dca3.png" alt=""/>
                    </div>
                </div>
                <div class="sdeep">
                    <div class="sdeep-text">
                        <h4>Try a hassle-free content monetization. <br/>  Today.</h4>
                        <button>Book a demo</button>
                    </div>
                    <div class="sdeep-img">
                        <img src="https://shelfi.io/_next/static/images/monetization-76ff3901dab40e8ae68e759faa7b9f71.png" alt=""/>
                    </div>
                </div>
            </div>
     );
  }
}

export default Start;