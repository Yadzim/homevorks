import React, { Component } from 'react';

class Whatis extends Component {
  state = {  }
  render() {
    return (
      <div class="whatis">
                <div class="whatis-text">
                    <div class="title">
                        <p>What is Shelfi</p>
                        <h4>Share your looks and earn a commission from each sale 🤑</h4>
                    </div>
                    <div class="button">
                        <button>Book a demo</button>
                    </div>
                </div>
                <div class="whatis-img">
                    <img src="https://shelfi.io/_next/static/images/why-block-4fd0a31e628cbf93333526b70f79e8f9.png" alt=""/>
                </div>
                <div class="whatis-icons">
                    <div class="whatis-icon">
                        <article>
                            <span>👚</span>
                            <div class="block">
                                <h4>Share links to products you love</h4>
                            <p>Share your outfits</p>
                            </div>
                        </article>
                        <article>
                            <span>🛍</span>
                            <div class="block">
                                <h4>Followers shop this products</h4>
                            <p>Followers shop these products</p>
                            </div>
                        </article>
                        <article>
                            <span>💰</span>
                            <div class="block">
                                <h4>You earn money</h4>
                            <p>You earn money</p>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
     );
  }
}

export default Whatis;