import './style.scss'
import events from 'events'
import * as util from '../util'

export default class Modal extends events {
  constructor () {
    super();
    this.$ = document.querySelector('.modal');
    this.$content = this.$.querySelector('.modal-content');
    this.resize();
    this.bind();
  }

  bind() {
    window.addEventListener('resize', this.resize.bind(this))
    window.addEventListener("keyup", this.handleKeyup.bind(this));
  }

  resize() {
    setTimeout(() => {
      if (this.$content.clientHeight > window.innerHeight) {
        this.$.style.padding = '160px 0';
      }
      else {
        const value = (window.innerHeight - this.$content.clientHeight) / 2;
        this.$.style.paddingTop = `${value}px`;
      }
    }, Math.floor(1000 / 60 * 10));
  }

  handleKeyup (e) {
    const keyCode = e.keyCode;
    // console.log("押されたキーのコード : " + keyCode);
    if (keyCode === 27) {
      // this.closeModal()
      this.emit('close');
    }
  }

  open() {
    this.$.classList.add('active');
  }

  close() {
    this.$.classList.remove('active');
  }
}