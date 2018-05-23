import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

class ReactHotReloadExample extends Component{
  render(){
    return(
      <section className="hot-reload-example">
        <p> Holy crap balls Batman, this whole thing hot reloads!!!</p>
        <p>
          <sup>
            Batman is a registered tradmark of Warner Brothers, don't even think about using Batman 
            without their permission, or you'll have to face the wrath of Batman.
          </sup>
        </p> 

      </section>
    );
  }
}

export default hot(module)(ReactHotReloadExample);