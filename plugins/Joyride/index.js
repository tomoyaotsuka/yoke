import './style.scss'
import * as util from '../util'

export default class Casper {
  constructor(selector = '.joyride') {
    this.selector = selector;
    this.$targets = document.querySelectorAll(selector);
  }

  init(target) {
    const $targets = document.querySelectorAll(`${target} ${this.selector}`);
    [...$targets].forEach(element => {
      if (element.firstChild.nodeType === 3) {
        element.innerHTML = `<div><span>${element.innerHTML}</span></div>`;
      }
      else {
        element.innerHTML = `<div>${element.innerHTML}</span>`;
      }
    });
  }

  stagger(target, delay, interval) {
    const $targets = document.querySelectorAll(`${target}`);

    setTimeout(() => {
      let n = 0;
      const id = setInterval(() => {
        if (n < $targets.length) {
          $targets[n].classList.add('active');
          n++;
        }
        else {
          clearInterval(id);
        }
      }, interval);
    }, delay);
  }

  shuffleStagger(target, delay, interval) {
    const $targets = document.querySelectorAll(`${target}`);

    let targets = [];
    [...$targets].forEach(element => {
      targets.push(element);
    });

  }

  clear(target) {
    const $targets = document.querySelectorAll(`${target} ${this.selector}`);
    [...$targets].forEach(element => {
      element.classList.remove('active');
    });
  }
}