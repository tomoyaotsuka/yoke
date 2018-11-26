import events from 'events';
import { isTouchDevice } from './userAgent';

const EVENT_TOUCH_START = isTouchDevice() ? 'touchstart' : 'mousedown';
const EVENT_TOUCH_MOVE = isTouchDevice() ? 'touchmove' : 'mousemove';
const EVENT_TOUCH_END = isTouchDevice() ? 'touchend' : 'mouseup';

export default class Touch extends events {
  constructor(selector) {
    super();

    this.eventTarget = document.querySelector(selector);

    this.start  = { x: 0, y: 0 };
    this.diff   = { x: 0, y: 0 };
    this.end    = { x: 0, y: 0 };
    this.isDrag = false;

    this.bind();
  }

  bind() {
    this.eventTarget.addEventListener(EVENT_TOUCH_START, this.handleStart.bind(this));
    this.eventTarget.addEventListener(EVENT_TOUCH_MOVE, this.handleMove.bind(this));
    this.eventTarget.addEventListener(EVENT_TOUCH_END, this.handleEnd.bind(this));
  }

  handleStart(e) {
    if (e.targetTouches) {
      const touches = e.targetTouches;
      if (touches.length === 1) {
        this.start.x = touches[0].clientX;
        this.start.y = touches[0].clientY;
      }
    } else {
      this.start.x = e.clientX;
      this.start.y = e.clientY;
    }
    this.isDrag = true;
  }

  handleMove(e) {
    if (this.isDrag) {
      // e.preventDefault();
      if (e.targetTouches) {
        const touches = e.targetTouches;
        if (touches.length === 1) {
          // diff.x = ( touches[0].clientX - start.x ) + end.x;
          // diff.y = ( touches[0].clientY - start.y ) + end.y;
          // this.update(touches[0].clientY - start.y - diff.y);
          this.diff.x = touches[0].clientX - this.start.x;
          this.diff.y = touches[0].clientY - this.start.y;
        }
      } else {
        // this.update(e.clientY - this.start.y - this.diff.y);
        this.diff.x = e.clientX - this.start.x;
        this.diff.y = e.clientY - this.start.y;
      }
    }
    // return this.diff;
    this.emit('move', this.diff);
  }

  handleEnd(e) {
    if (e.changedTouches) {
      const touches = e.changedTouches;
      this.end.x = touches[0].clientX;
      this.end.y = touches[0].clientY;
    } else {
      this.end.x = e.clientX;
      this.end.y = e.clientY;
    }
    this.emit('end', this.diff, this.end);
    this.diff.x = 0;
    this.diff.y = 0;
    this.isDrag = false;
  }
}