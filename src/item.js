import React, {useRef, useEffect, Component} from 'react';
import {TweenMax, Power3} from 'gsap';
const  myItem = () => {
    const state = {
        items: [],
        isLoaded: false,
      }
      

        var {isLoaded, items } = this.state;
        if(!isLoaded){
          return<div>Loading...</div>
        }
        else{
          return (
                <div className="myItem">
                    data has been loaded
                </div>
               );
        }

}

export default myItem