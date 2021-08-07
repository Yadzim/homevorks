import React, { Component } from 'react';

class Question extends Component {
  state = {  }
  render() {
    return (
      <div class="question">
                <div class="title">
                    <p>FAQ</p>
                    <h4>Do you have any questions?</h4>
                </div>
                <div class="question-grid">
                    <div class="question-text">
                        <div>
                            <p>Where can I see list of brands? <span>></span></p>
                            <p>What are the commision rates? <span>></span></p>
                            <p>Is there any cost for using Shelfi? <span>></span></p>
                            <p>How and when do I get paid? <span>></span></p>
                        </div>
                    </div>
                    <div class="question-img">
                        <img src="https://shelfi.io/_next/static/images/right-img-ccb5c4d92a31e242c47553c746ff6c99.png" alt=""/>
                    </div>
                </div>
            </div>
     );
  }
}

export default Question;