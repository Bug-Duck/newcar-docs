var newcar = (function (exports) {
    'use strict';

    /******************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    function __classPrivateFieldGet(receiver, state, kind, f) {
      if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    }
    function __classPrivateFieldSet(receiver, state, value, kind, f) {
      if (kind === "m") throw new TypeError("Private method is not writable");
      if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
    }

    // TODO: Specification all the AnimationBuilderItems.

    class AnimationBuilder {
      #items = [];
      #currentAnimateList = [];

      /**
       * Play the animation on a `? extends IRenderable & IRendererController` instance.
       * @param rdInstance The `? extends IRenderable & IRendererController` instance.
       */
      playOnCar(rdInstance) {
        for (const i of this.#items) {
          i.onRegister(rdInstance);
        }
        const itemsClone = [...this.#items];
        itemsClone.sort((a, b) => a.startFrame - b.startFrame);
        rdInstance.onUpdate(frame => {
          for (const i of itemsClone) {
            // Now hold on.
            // This is a very simple algorithm.
            // If you can't understand it, you are just fool.
            // If you can understand it, you are fool, too.
            //                                      ---- 27Onion
            if (i.length !== -1 && frame >= i.startFrame + i.length) {
              // Out-dated.
              continue;
            }
            if (frame < i.startFrame) {
              // You are not old enough to join this *activity*, bro
              break;
            }

            // M⚡️U⚡️L⚡️T⚡️I⚡️P⚡️L⚡️A⚡️Y⚡️E⚡️R⚡️-⚡️S⚡️P⚡️O⚡️R⚡️T⚡️S
            i.onDrawFrame(frame - i.startFrame, this);
          }
          for (const builderItem of this.#currentAnimateList) {
            builderItem.onDrawFrame(frame - builderItem.startFrame, this);
          }
          this.#currentAnimateList = [];
        });
      }

      /**
       * Add an animation builder iteme
       * @param builderItem The builder item.
       * @returns The reference to the builder itself.
       */
      addItem(builderItem) {
        this.#items.push(builderItem);
        return this;
      }
      animate(builderItem) {
        this.#currentAnimateList.push(builderItem);
        return this;
      }
    }

    class Core {
      #ele; // The html element of canvas.
      #objects = []; // The objects of animation.
      #every = []; // Do it for every frame.
      #start; // Do it before the animation started.
      #fps = 0; // The FPS.
      #frameImmediately = 0; // Current number of frames.
      #ctx = null; // The context of canvas.
      // eslint-disable-next-line @typescript-eslint/no-inferrable-types
      isSuspend = false; // The animation is or isnot suspend;

      /**
       * Create a animation of newcar.
       * @param ele The element of canvas.
       * @param fps The FPS of the animation.
       */
      constructor(ele, fps) {
        this.#ele = ele;
        this.#ele.style.backgroundColor = "black";
        if (this.#ele.getContext) {
          this.#fps = fps;
          this.#ctx = this.#ele.getContext("2d");
        }
        return this;
      }

      /**
       * Set this.#every
       * @param command the fuction.
       */
      onUpdate(command) {
        this.#every?.push(command);
        return this;
      }

      /**
       * Set this.#start
       * @param command The function.
       */
      forStart(command) {
        this.#start = command;
        return this;
      }
      pause(frame) {
        if (typeof frame !== "undefined") {
          this.#frameImmediately = frame;
        }
        this.isSuspend = true;
      }
      continue(frame) {
        if (typeof frame !== "undefined") {
          this.#frameImmediately = frame;
        }
        this.isSuspend = false;
      }

      /**
       * Start draw every frame.
       */
      CountFrame() {
        // this.#frameImmediately = 0;
        if (this.#ctx === null) {
          return;
        }
        this.#start && this.#start();
        setInterval(() => {
          this.#ctx?.clearRect(0, 0, this.#ele.width, this.#ele.height);
          // console.log(this.#frameImmediately, this.isSuspend);
          if (!this.isSuspend) {
            this.#frameImmediately += 1;
          }
          if (this.#every) {
            for (const each of this.#every) {
              each && each(this.#frameImmediately);
            }
          }
          for (const object of this.#objects) {
            object.onUpdate(this.#ctx);
          }
        }, 1000 / this.#fps);
      }

      /**
       * Link the Car Object on the animation.
       * @param obj the Carobj Object.
       * Attention: the function only can link Car Object,which can't use animation builder.
       */
      linkObject(obj) {
        this.#objects.push(obj);
      }
      get fps() {
        return this.#fps;
      }
      get framePerSecond() {
        return this.#fps;
      }
      get element() {
        return this.#ele;
      }
    }

    class SoundBuilder {
      /**
       * The first is the object AudioItem
       * The second is whether the audio is playing
       */
      #audioToPlay = [];
      #allowToPlay = false;
      playOnCar(rdInstance) {
        rdInstance.onUpdate(curFrame => {
          // Firstly, check the anthourity about Audio playing
          if (this.#allowToPlay) {
            for (const audio of this.#audioToPlay) {
              // If The current time has passed the start time as the audio isn't be played
              if (curFrame >= audio[0].startFrame && !audio[1]) {
                audio[0].audio.play();
                // compute the time that it should be and jump to that time.
                audio[0].audio.currentTime = (curFrame - audio[0].startFrame) / rdInstance.fps;
                audio[1] = true;
              }
            }
          }
        });
      }
      addAudio(audio) {
        this.#audioToPlay.push([audio, false]);
      }
      allow() {
        this.#allowToPlay = true;
      }
      ban() {
        this.#allowToPlay = false;
      }
    }

    const exportAnimationToVideo = (core, startAt, lastAt, onFinish) => {
      const recorder = createRecorder(core.element, {
        minmeType: "video/webm"
      });
      setRecorder(recorder, onFinish);
      record(recorder, core, startAt, lastAt);
    };
    const createRecorder = (element, datas) => {
      const stream = element.captureStream();
      const recorder = new MediaRecorder(stream, datas);
      return recorder;
    };
    const setRecorder = (recorder, onFinish) => {
      const datas = [];
      recorder.ondataavailable = event => {
        if (event.data && event.data.size) {
          datas.push(event.data);
        }
      };
      recorder.onstop = () => {
        const url = URL.createObjectURL(new Blob(datas, {
          type: "video/webm"
        }));
        onFinish(url);
      };
    };
    const record = (recorder, core, startAt, lastAt) => {
      const length = lastAt - startAt;
      recorder.start();
      core.continue(startAt);
      setTimeout(() => {
        recorder.stop();
      }, 1000 / core.fps * length);
    };

    const LinearInterpolator = x => x;

    const easeInSine = x => 1 - Math.cos(x * Math.PI / 2);
    const easeOutSine = x => Math.sin(x * Math.PI / 2);
    const easeInOutSine = x => -(Math.cos(Math.PI * x) - 1) / 2;
    const easeInQuad = x => x * x;
    const easeOutQuad = x => 1 - (1 - x) * (1 - x);
    const easeInOutQuad = x => x < 0.5 ? 16 * x * x * x * x * x : 1 - (-2 * x + 2) ** 5 / 2;
    const easeInCubic = x => x * x * x;
    const easeOutCubic = x => 1 - (1 - x) ** 3;
    const easeInOutCubic = x => x < 0.5 ? 4 * x * x * x : 1 - (-2 * x + 2) ** 3 / 2;
    const easeInQuart = x => x * x * x * x;
    const easeOutQuart = x => 1 - (1 - x) ** 4;
    const easeInOutQuart = x => x < 0.5 ? 8 * x * x * x * x : 1 - (-2 * x + 2) ** 4 / 2;
    const easeInQuint = x => x * x * x * x * x;
    const easeOutQuint = x => 1 - (1 - x) ** 5;
    const easeInOutQuint = x => x < 0.5 ? 16 * x * x * x * x * x : 1 - (-2 * x + 2) ** 5 / 2;
    const easeInExpo = x => x === 0 ? 0 : 2 ** (10 * x - 10);
    const easeOutExpo = x => x === 1 ? 1 : 1 - 2 ** (-10 * x);
    const easeInOutExpo = x => x === 0 ? 0 : x === 1 ? 1 : x < 0.5 ? 2 ** (20 * x - 10) / 2 : (2 - 2 ** (-20 * x + 10)) / 2;
    const easeInCirc = x => 1 - Math.sqrt(1 - x ** 2);
    const easeOutCirc = x => Math.sqrt(1 - (x - 1) ** 2);
    const easeInOutCirc = x => x < 0.5 ? (1 - Math.sqrt(1 - (2 * x) ** 2)) / 2 : (Math.sqrt(1 - (-2 * x + 2) ** 2) + 1) / 2;
    function easeInBack(x) {
      const c1 = 1.701_58;
      const c3 = c1 + 1;
      return c3 * x * x * x - c1 * x * x;
    }
    function easeOutBack(x) {
      const c1 = 1.701_58;
      const c3 = c1 + 1;
      return 1 + c3 * (x - 1) ** 3 + c1 * (x - 1) ** 2;
    }
    function easeInOutBack(x) {
      const c1 = 1.701_58;
      const c2 = c1 * 1.525;
      return x < 0.5 ? (2 * x) ** 2 * ((c2 + 1) * 2 * x - c2) / 2 : ((2 * x - 2) ** 2 * ((c2 + 1) * (x * 2 - 2) + c2) + 2) / 2;
    }
    function easeInElastic(x) {
      const c4 = 2 * Math.PI / 3;
      return x === 0 ? 0 : x === 1 ? 1 : -(2 ** (10 * x - 10)) * Math.sin((x * 10 - 10.75) * c4);
    }
    function easeOutElastic(x) {
      const c4 = 2 * Math.PI / 3;
      return x === 0 ? 0 : x === 1 ? 1 : 2 ** (-10 * x) * Math.sin((x * 10 - 0.75) * c4) + 1;
    }
    function easeInOutElastic(x) {
      const c5 = 2 * Math.PI / 4.5;
      return x === 0 ? 0 : x === 1 ? 1 : x < 0.5 ? -(2 ** (20 * x - 10) * Math.sin((20 * x - 11.125) * c5)) / 2 : 2 ** (-20 * x + 10) * Math.sin((20 * x - 11.125) * c5) / 2 + 1;
    }
    const easeInBounce = x => 1 - easeOutBounce(1 - x);
    function easeOutBounce(x) {
      const n1 = 7.5625;
      const d1 = 2.75;
      if (x < 1 / d1) {
        return n1 * x * x;
      } else if (x < 2 / d1) {
        return n1 * (x -= 1.5 / d1) * x + 0.75;
      } else if (x < 2.5 / d1) {
        return n1 * (x -= 2.25 / d1) * x + 0.9375;
      } else {
        return n1 * (x -= 2.625 / d1) * x + 0.984_375;
      }
    }
    const easeInOutBounce = x => x < 0.5 ? (1 - easeOutBounce(1 - 2 * x)) / 2 : (1 + easeOutBounce(2 * x - 1)) / 2;

    const interpolator = {
      easeInBack,
      easeInBounce,
      easeInCirc,
      easeInCubic,
      easeInElastic,
      easeInExpo,
      easeInOutBack,
      easeInOutBounce,
      easeInOutCirc,
      easeInOutElastic,
      easeInOutCubic,
      easeInOutExpo,
      easeInOutQuad,
      easeInOutQuart,
      easeInOutQuint,
      easeInOutSine,
      easeInQuad,
      easeInQuart,
      easeInQuint,
      easeInSine,
      easeOutBack,
      easeOutBounce,
      easeOutCirc,
      easeOutCubic,
      easeOutElastic,
      easeOutExpo,
      easeOutQuad,
      easeOutQuart,
      easeOutQuint,
      easeOutSine,
      Linear: LinearInterpolator
    };

    class AnimationBuilderItem {
      /**
       * Will be called on registration.
       * @param parent The parent object.
       */

      onRegister(_carInstance) {}

      /**
       * Will be called on drawing frame.
       * @param relativeFrameCount The frame count relative to `fstart`.
       */
    }

    /**
     * The interpolator class.
     */
    class Interpolator {
      #startValue;
      #endValue;
      #interpolator;

      /**
       * To construct an interpolator.
       * @param startValue The start value of it.
       * @param endValue The end value of it.
       * @param interpolationFunction The interpolation function, which receives a real number between 0 and 1 (representing the progress of time) and returns a number between 0 and 1 to represent the progress of the resulting value. The closer to 1 the return value is, the closer to `endValue` the interpolate value will be, otherwise the interpolated value will be closer to `startValue`.
       */
      constructor(startValue, endValue, interpolationFunction) {
        this.#startValue = startValue;
        this.#endValue = endValue;
        this.#interpolator = interpolationFunction;
      }

      /**
       * Calculate the interpolation with the given progress number.
       * @param n The progress, between 0 and 1
       * @returns The interpolation.
       */
      interpolate(n) {
        return this.#startValue + this.#interpolator(n) * (this.#endValue - this.#startValue);
      }
    }

    class AngleCircle extends AnimationBuilderItem {
      #datas;
      constructor(datas) {
        super();
        let flag = "";
        if ((flag = "startAt", datas.startAt === undefined) || (flag = "lastsFor", datas.lastsFor === undefined) || (flag = "to", datas.to === undefined) || (flag = "bindTo", datas.bindTo === undefined)) {
          throw new Error(`be unset data "${flag}"`);
        }
        datas.from = datas.from ?? [datas.bindTo.startAngle, datas.bindTo.endAngle];
        this.#datas = {
          length: datas.lastsFor,
          start: datas.startAt,
          obj: datas.bindTo,
          interpolatorstart: new Interpolator(datas.from[0], datas.to[0], datas.by ?? LinearInterpolator),
          interpolatorend: new Interpolator(datas.from[1], datas.to[1], datas.by ?? LinearInterpolator)
        };
      }
      onDrawFrame(relativeFrameCount, _parent) {
        this.#datas.obj.startAngle = this.#datas.interpolatorstart.interpolate((relativeFrameCount + 1) / this.#datas.length);
        this.#datas.obj.endAngle = this.#datas.interpolatorend.interpolate((relativeFrameCount + 1) / this.#datas.length);
      }
      get startFrame() {
        return this.#datas.start;
      }
      get length() {
        return this.#datas.length;
      }
    }

    class Limit extends AnimationBuilderItem {
      #datas;
      constructor(datas) {
        super();
        let flag = "";
        if ((flag = "startAt", datas.startAt === undefined) || (flag = "lastsFor", datas.lastsFor === undefined) || (flag = "to", datas.to === undefined) || (flag = "bindTo", datas.bindTo === undefined)) {
          throw new Error(`be unset data "${flag}"`);
        }
        datas.from = datas.from ?? [datas.bindTo.startVariable, datas.bindTo.startVariable];
        this.#datas = {
          length: datas.lastsFor - datas.startAt,
          start: datas.startAt,
          obj: datas.bindTo,
          interpolatorstart: new Interpolator(datas.from[0], datas.to[0], datas.by ?? LinearInterpolator),
          interpolatorend: new Interpolator(datas.from[1], datas.to[1], datas.by ?? LinearInterpolator)
        };
      }
      onDrawFrame(relativeFrameCount, _parent) {
        this.#datas.obj.startVariable = this.#datas.interpolatorstart.interpolate((relativeFrameCount + 1) / this.#datas.length);
        this.#datas.obj.endVariable = this.#datas.interpolatorend.interpolate((relativeFrameCount + 1) / this.#datas.length);
      }
      get startFrame() {
        return this.#datas.start;
      }
      get length() {
        return this.#datas.length;
      }
    }

    class Rotation extends AnimationBuilderItem {
      #datas;
      constructor(datas) {
        super();
        let flag = "";
        if ((flag = "startAt", datas.startAt === undefined) || (flag = "lastsFor", datas.lastsFor === undefined) || (flag = "to", datas.to === undefined) || (flag = "bindTo", datas.bindTo === undefined)) {
          throw new Error(`be unset data "${flag}"`);
        }
        datas.from = datas.from ?? datas.bindTo.rotation;
        this.#datas = {
          start: datas.startAt,
          obj: datas.bindTo,
          interpolator: new Interpolator(datas.from, datas.to, datas.by ?? LinearInterpolator),
          length: datas.lastsFor
        };
      }
      onDrawFrame(relativeFrameCount, _parent) {
        this.#datas.obj.rotation = this.#datas.interpolator.interpolate((relativeFrameCount + 1) / this.#datas.length);
      }
      get startFrame() {
        return this.#datas.start;
      }
      get length() {
        return this.#datas.length;
      }
    }

    class Scale extends AnimationBuilderItem {
      #datas;
      constructor(datas) {
        super();
        let flag = "";
        if ((flag = "startAt", datas.startAt === undefined) || (flag = "lastsFor", datas.lastsFor === undefined) || (flag = "to", datas.to === undefined) || (flag = "bindTo", datas.bindTo === undefined)) {
          throw new Error(`be unset data "${flag}"`);
        }
        datas.from = datas.from ?? [datas.bindTo.scaleX, datas.bindTo.scaleY];
        this.#datas = {
          obj: datas.bindTo,
          interpolatorx: new Interpolator(datas.from[0], datas.to[0], datas.by ?? LinearInterpolator),
          interpolatory: new Interpolator(datas.from[1], datas.to[1], datas.by ?? LinearInterpolator),
          length: datas.lastsFor,
          start: datas.startAt
        };
      }
      onDrawFrame(relativeFrameCount, _parent) {
        this.#datas.obj.scaleX = this.#datas.interpolatorx.interpolate((relativeFrameCount + 1) / this.#datas.length);
        this.#datas.obj.scaleY = this.#datas.interpolatory.interpolate((relativeFrameCount + 1) / this.#datas.length);
      }
      get startFrame() {
        return this.#datas.start;
      }
      get length() {
        return this.#datas.length;
      }
    }

    class Translation extends AnimationBuilderItem {
      #datas;
      constructor(datas) {
        super();
        let flag = "";
        if ((flag = "startAt", datas.startAt === undefined) || (flag = "lastsFor", datas.lastsFor === undefined) || (flag = "to", datas.to === undefined) || (flag = "bindTo", datas.bindTo === undefined)) {
          throw new Error(`be unset data "${flag}"`);
        }
        datas.from = datas.from ?? [datas.bindTo.x, datas.bindTo.y];
        this.#datas = {
          length: datas.lastsFor ?? null,
          start: datas.startAt ?? null,
          obj: datas.bindTo ?? null,
          interpolatorx: new Interpolator(datas.from[0], datas.to[0], datas.by ?? LinearInterpolator),
          interpolatory: new Interpolator(datas.from[1], datas.to[1], datas.by ?? LinearInterpolator)
        };
      }
      get length() {
        return this.#datas.length;
      }
      get startFrame() {
        return this.#datas.start;
      }
      onDrawFrame(relativeFrameCount, _parent) {
        this.#datas.obj.x = this.#datas.interpolatorx.interpolate((relativeFrameCount + 1) / this.#datas.length);
        this.#datas.obj.y = this.#datas.interpolatory.interpolate((relativeFrameCount + 1) / this.#datas.length);
      }
    }

    class AxisLength extends AnimationBuilderItem {
      #obj;
      #interpolatorstart;
      #interpolatorend;
      #length;
      #start;
      #from;
      #to;
      constructor(datas) {
        super();
        let flag = "";
        if ((flag = "startAt", datas.startAt === undefined) || (flag = "lastsFor", datas.lastsFor === undefined) || (flag = "to", datas.to === undefined) || (flag = "bindTo", datas.bindTo === undefined)) {
          throw new Error(`be unset data "${flag}"`);
        }
        this.#obj = datas.bindTo;
        this.#from = datas.from ?? [this.#obj.axisPositiveXLength, this.#obj.axisPositiveYLength, this.#obj.axisNegativeXLength, this.#obj.axisNegativeYLength];
        this.#to = datas.to;
        this.#length = datas.lastsFor;
        this.#start = datas.startAt;
        this.#interpolatorstart = new Interpolator(this.#from[0], this.#to[0], datas.by ?? LinearInterpolator);
        this.#interpolatorend = new Interpolator(datas.from[1], datas.to[1], datas.by ?? LinearInterpolator);
      }
      onDrawFrame(relativeFrameCount, _parent) {
        this.#obj.axisPositiveXLength = this.#interpolatorstart.interpolate((relativeFrameCount + 1) / this.#length);
        this.#obj.axisPositiveYLength = this.#interpolatorend.interpolate((relativeFrameCount + 1) / this.#length);
        this.#obj.axisNegativeXLength = this.#interpolatorstart.interpolate((relativeFrameCount + 1) / this.#length);
        this.#obj.axisNegativeYLength = this.#interpolatorend.interpolate((relativeFrameCount + 1) / this.#length);
      }
      get startFrame() {
        return this.#start;
      }
      get length() {
        return this.#length;
      }
    }

    class RectSize extends AnimationBuilderItem {
      #obj;
      #interpolatorwidth;
      #interpolatorlength;
      #length;
      #start;
      #from;
      #to;
      constructor(datas) {
        super();
        let flag = "";
        if ((flag = "startAt", datas.startAt === undefined) || (flag = "lastsFor", datas.lastsFor === undefined) || (flag = "to", datas.to === undefined) || (flag = "bindTo", datas.bindTo === undefined)) {
          throw new Error(`be unset data "${flag}"`);
        }
        this.#obj = datas.bindTo;
        this.#from = datas.from ?? [this.#obj.width, this.#obj.length];
        this.#to = datas.to;
        this.#length = datas.lastsFor;
        this.#start = datas.startAt;
        this.#interpolatorwidth = new Interpolator(this.#from[0], this.#to[0], datas.by ?? LinearInterpolator);
        this.#interpolatorlength = new Interpolator(datas.from[1], datas.to[1], datas.by ?? LinearInterpolator);
      }
      onDrawFrame(relativeFrameCount, _parent) {
        this.#obj.width = this.#interpolatorwidth.interpolate((relativeFrameCount + 1) / this.#length);
        this.#obj.length = this.#interpolatorlength.interpolate((relativeFrameCount + 1) / this.#length);
      }
      get startFrame() {
        return this.#start;
      }
      get length() {
        return this.#length;
      }
    }

    class Transparency extends AnimationBuilderItem {
      #obj;
      #interpolator;
      #length;
      #start;
      #from;
      #to;
      constructor(datas) {
        super();
        let flag = "";
        if ((flag = "startAt", datas.startAt === undefined) || (flag = "lastsFor", datas.lastsFor === undefined) || (flag = "to", datas.to === undefined) || (flag = "bindTo", datas.bindTo === undefined)) {
          throw new Error(`be unset data "${flag}"`);
        }
        this.#obj = datas.bindTo;
        this.#from = datas.from ?? this.#obj.transparency;
        this.#to = datas.to;
        this.#length = datas.lastsFor;
        this.#start = datas.startAt;
        this.#interpolator = new Interpolator(this.#from, this.#to, datas.by ?? LinearInterpolator);
      }
      onDrawFrame(relativeFrameCount, _parent) {
        this.#obj.transparency = this.#interpolator.interpolate((relativeFrameCount + 1) / this.#length);
      }
      get startFrame() {
        return this.#start;
      }
      get length() {
        return this.#length;
      }
    }

    const animation = {
      Translation,
      Rotation,
      Scale,
      Limit,
      AngleCircle,
      AnimationBuilderItem,
      AxisLength,
      RectSize,
      Transparency
    };

    class Carobj {
      display = true; // The Object is or isnot display.
      #x = 0;
      #y = 0;
      #rotation = 0;
      #scaleX = 1;
      #scaleY = 1;
      #contextX;
      #contextY;
      #children = [];
      #operation = "source-over";
      #transparency;
      constructor(datas) {
        this.x = datas.x;
        this.y = datas.y;
        typeof datas.contextX === "undefined" ? this.#contextX = this.#x : this.#contextX = datas.contextX;
        typeof datas.contextY === "undefined" ? this.#contextY = this.#y : this.#contextY = datas.contextY;
        typeof datas.scaleX !== "undefined" && (this.#scaleX = datas.scaleX);
        typeof datas.scaleY !== "undefined" && (this.#scaleY = datas.scaleY);
        typeof datas.display !== "undefined" && (this.display = datas.display);
        typeof datas.rotation !== "undefined" && (this.#rotation = datas.rotation);
        typeof datas.operation !== "undefined" && (this.#operation = datas.operation);
        typeof datas.children !== "undefined" && (this.#children = datas.children);
        this.#transparency = datas.transparency ?? 1;
      }
      get transparency() {
        return this.#transparency;
      }
      set transparency(value) {
        this.#transparency = value;
      }

      /**
       * Get called on each frame.
       * @param ctx The context instance of the canvas object.
       */
      onDraw(ctx, element) {
        return ctx;
      }

      /**
       * Actually get called on each frame. The difference to `onDraw()` is that `onDraw()` is used for inherited classes to implement their render while this will be actually called directly on each frame.
       * We will do some transformation on this frame.
       * @param ctx The context instance.
       */
      onUpdate(ctx) {
        if (this.display === true) {
          ctx.save();
          ctx.translate(this.x, this.y);
          // ctx.translate(this.#x, this.#y);
          ctx.rotate(this.#rotation);
          ctx.scale(this.#scaleX, this.#scaleY);
          ctx.globalAlpha = this.#transparency;
          ctx.globalCompositeOperation = this.#operation;
          this.onDraw(ctx);
          for (const child of this.#children) {
            child.onUpdate(ctx);
          }
          ctx.restore();
        }
      }

      /**
       * Set the display to false.
       */
      hide() {
        this.display = false;
      }

      /**
       * Set the display to true.
       */
      appear() {
        this.display = true;
      }
      setContextPosition(x, y) {
        this.#contextX = x;
        this.#contextY = y;
        return this;
      }
      get children() {
        return this.#children;
      }
      get x() {
        return this.#x;
      }
      set x(value) {
        this.#x = value;
      }
      get y() {
        return this.#y;
      }
      set y(value) {
        this.#y = value;
      }
      set scaleX(value) {
        this.#scaleX = value;
      }
      get scaleX() {
        return this.#scaleX;
      }
      set scaleY(value) {
        this.#scaleY = value;
      }
      get scaleY() {
        return this.#scaleY;
      }
      get contextX() {
        return this.#contextX;
      }
      get contextY() {
        return this.#contextY;
      }

      /**
       * Return the rotation of the component, in radians.
       */
      get rotation() {
        return this.#rotation;
      }

      /**
       * Set the rotation of the component. Remember, the value is in radians (which 2*pi == 360deg).
       */
      set rotation(value) {
        this.#rotation = value;
      }
      get operation() {
        return this.#operation;
      }
      set operation(value) {
        this.#operation = value;
      }
      addChildren(...children) {
        for (const child of children) {
          this.#children.push(child);
        }
        return this;
      }
    }

    /* eslint-disable @typescript-eslint/no-inferrable-types */
    class Circle extends Carobj {
      #startAngle;
      #endAngle;
      borderColor = "white";
      borderWidth = 1;
      fillColor = null;
      constructor(radius, datas) {
        super(datas);
        this.radius = radius;
        this.x = datas.x;
        this.y = datas.y;
        typeof datas.startAngle === "undefined" ? this.#startAngle = 0 : this.#startAngle = datas.startAngle;
        typeof datas.endAngle === "undefined" ? this.#endAngle = 2 * Math.PI : this.#endAngle = datas.startAngle;
        if (typeof datas.borderColor !== "undefined") {
          this.borderColor = datas.borderColor;
        }
        if (typeof datas.borderWidth !== "undefined") {
          this.borderWidth = datas.borderWidth;
        }
        if (typeof datas.fillColor !== "undefined") {
          this.fillColor = datas.fillColor;
        }
      }
      onDraw(ctx) {
        super.onDraw(ctx);
        ctx.lineWidth = this.borderWidth;
        ctx.moveTo(this.contextX, this.contextY);
        ctx.beginPath();
        ctx.arc(0, 0, this.radius, this.#startAngle, this.#endAngle);
        if (this.fillColor !== null) {
          ctx.fillStyle = this.fillColor;
          ctx.fill();
        }
        ctx.strokeStyle = this.borderColor;
        ctx.stroke();
        return ctx;
      }
      get startAngle() {
        return this.#startAngle;
      }
      set startAngle(value) {
        this.#startAngle = value;
      }
      get endAngle() {
        return this.#endAngle;
      }
      set endAngle(value) {
        this.#endAngle = value;
      }
    }

    class Line extends Carobj {
      #startPoint;
      #endPoint;
      // eslint-disable-next-line @typescript-eslint/no-inferrable-types
      color = "white";
      // eslint-disable-next-line @typescript-eslint/no-inferrable-types
      width = 1;
      constructor(datas) {
        super(datas);
        this.#startPoint = datas.startPoint;
        this.#endPoint = datas.endPoint;
        if (typeof datas.color !== "undefined") {
          this.color = datas.color;
        }
        if (typeof datas.width !== "undefined") {
          this.width = datas.width;
        }
      }
      onDraw(ctx) {
        super.onDraw(ctx);
        ctx.beginPath();
        ctx.strokeStyle = `${this.color}`;
        ctx.lineWidth = this.width;
        ctx.moveTo(this.primaryPoints[0].x, this.primaryPoints[0].y);
        ctx.lineTo(this.primaryPoints[1].x, this.primaryPoints[1].y);
        ctx.stroke();
        return ctx;
      }
      get primaryPoints() {
        return [this.#startPoint, this.#endPoint];
      }
      get startX() {
        return this.#startPoint.x;
      }
      set startX(value) {
        this.#startPoint.x = value;
      }
      get startY() {
        return this.#startPoint.y;
      }
      set startY(value) {
        this.#startPoint.y = value;
      }
      get endX() {
        return this.#endPoint.x;
      }
      set endX(value) {
        this.#endPoint.x = value;
      }
      get endY() {
        return this.#endPoint.y;
      }
      set endY(value) {
        this.#endPoint.y = value;
      }
    }

    // TODO: The thickness of MathImage
    class MathImage extends Carobj {
      #imageFunction;
      #startVariable;
      #endVariable;
      #color = "white";
      constructor(datas) {
        super(datas);
        this.#imageFunction = datas.f;
        this.#startVariable = datas.start;
        this.#endVariable = datas.end;
        if (datas.color !== undefined) {
          this.#color = datas.color;
        }
      }
      onDraw(ctx) {
        super.onDraw(ctx);
        ctx.fillStyle = this.#color;
        ctx.beginPath();
        ctx.moveTo(this.#startVariable, this.#imageFunction(this.#startVariable));
        let variable = this.#startVariable;
        for (variable; variable <= this.#endVariable; variable += 1) {
          ctx.lineTo(variable, this.#imageFunction(variable));
        }
        ctx.stroke();
        return ctx;
      }
      get startVariable() {
        return this.#startVariable;
      }
      set startVariable(value) {
        this.#startVariable = value;
      }
      get endVariable() {
        return this.#endVariable;
      }
      set endVariable(value) {
        this.#endVariable = value;
      }
      get color() {
        return this.#color;
      }
      set color(value) {
        this.#color = value;
      }
    }

    // TODO: Drawable point.
    class Point extends Carobj {
      constructor(datas) {
        super(datas);
        this.x = datas.x;
        this.y = datas.y;
      }
      onDraw(ctx) {
        super.onDraw(ctx);
        return ctx;
      }
    }

    // TODO: Fix the drawing bug.
    class Polygon extends Carobj {
      points = [];
      // eslint-disable-next-line @typescript-eslint/no-inferrable-types
      borderColor = "white";
      // eslint-disable-next-line @typescript-eslint/no-inferrable-types
      borderWidth = 1;
      fillColor = null;
      constructor(datas) {
        super(datas);
        this.points = datas.points;
        if (typeof datas.borderColor !== "undefined") {
          this.borderColor = datas.borderColor;
        }
        if (typeof datas.fillColor !== "undefined") {
          this.fillColor = datas.fillColor;
        }
        if (typeof datas.borderWidth !== "undefined") {
          this.borderWidth = datas.borderWidth;
        }
      }
      onDraw(ctx) {
        ctx.lineWidth = this.borderWidth;
        ctx.strokeStyle = `${this.borderColor}`;
        if (this.fillColor !== null) {
          ctx.fillStyle = `${this.fillColor}`;
          ctx.fill();
        }
        ctx.moveTo(this.points[0].x, this.points[0].y);
        ctx.beginPath();
        for (const point of this.points) {
          ctx.lineTo(point.x, point.y);
        }
        ctx.lineTo(this.points[0].x, this.points[0].y);
        ctx.stroke();
        return ctx;
      }
    }

    class Text extends Carobj {
      #text;
      #size;
      #color;
      #fontFamily = "sans-serif";
      #align = "start";
      #baseline = "middle";
      #hollow;
      constructor(text, datas) {
        super(datas);
        this.#text = text;
        typeof datas.size === "undefined" ? this.#size = 10 : this.#size = datas.size;
        typeof datas.color === "undefined" ? this.#color = "white" : this.#color = datas.color;
        if (typeof datas.fontFamily !== "undefined") {
          this.fontFamily = datas.fontFamily;
        }
        if (typeof datas.align !== "undefined") {
          this.#align = datas.align;
        }
        if (typeof datas.baseline !== "undefined") {
          this.#baseline = datas.baseline;
        }
        this.#hollow = datas.hollow ?? false;
      }
      onDraw(ctx) {
        super.onDraw(ctx);
        ctx.font = `${this.#size}px ${this.#fontFamily}`;
        // console.log(this.#size, this.#fontFamily);
        // console.log(`${this.#size}px ${this.#fontFamily}`);
        ctx.textAlign = this.#align;
        ctx.textBaseline = this.#baseline;
        if (!this.#hollow) {
          ctx.fillStyle = this.#color;
          ctx.fillText(this.#text, 0, 0);
        } else if (this.#hollow) {
          ctx.strokeStyle = this.#color;
          ctx.strokeText(this.#text, 0, 0);
        }
        return ctx;
      }
      get color() {
        return this.#color;
      }
      set color(value) {
        this.#color = value;
      }
      get fontFamily() {
        return this.#fontFamily;
      }
      set fontFamily(value) {
        this.#fontFamily = value;
      }
      get align() {
        return this.#align;
      }
      set align(value) {
        this.#align = value;
      }
      get baseline() {
        return this.#baseline;
      }
      set baseline(value) {
        this.#baseline = value;
      }
      get text() {
        return this.#text;
      }
      set text(value) {
        this.#text = value;
      }
      get size() {
        return this.#size;
      }
      set size(value) {
        this.#size = value;
      }
    }

    class CoordinateSystem extends Carobj {
      #axisPositiveXLength;
      #axisPositiveYLength;
      #axisXDirection;
      #axisYDirection;
      #color;
      #axisNegativeXLength;
      #axisNegativeYLength;
      constructor(axisPositiveXLength, axisPositiveYLength, axisNegativeXLength, axisNegativeYLength, datas) {
        super(datas);
        this.#axisPositiveXLength = axisPositiveXLength;
        this.#axisPositiveYLength = axisPositiveYLength;
        this.#axisNegativeXLength = axisNegativeXLength;
        this.#axisNegativeYLength = axisNegativeYLength;
        this.#axisXDirection = datas.axisXDirection ?? "right";
        this.#axisYDirection = datas.axisYDirection ?? "top";
        this.#color = datas.color ?? "white";
      }
      get axisNegativeXLength() {
        return this.#axisNegativeXLength;
      }
      set axisNegativeXLength(value) {
        this.#axisNegativeXLength = value;
      }
      get axisNegativeYLength() {
        return this.#axisNegativeYLength;
      }
      set axisNegativeYLength(value) {
        this.#axisNegativeYLength = value;
      }
      get axisXDirection() {
        return this.#axisXDirection;
      }
      set axisXDirection(value) {
        this.#axisXDirection = value;
      }
      get axisYDirection() {
        return this.#axisYDirection;
      }
      set axisYDirection(value) {
        this.#axisYDirection = value;
      }
      get axisPositiveYLength() {
        return this.#axisPositiveYLength;
      }
      set axisPositiveYLength(value) {
        this.#axisPositiveYLength = value;
      }
      get axisPositiveXLength() {
        return this.#axisPositiveXLength;
      }
      set axisPositiveXLength(value) {
        this.#axisPositiveXLength = value;
      }
      onDraw(ctx) {
        if (this.#axisXDirection === "left") {
          ctx.scale(-1, 1);
        }
        if (this.#axisYDirection === "top") {
          ctx.scale(1, -1);
        }
        ctx.strokeStyle = `${this.#color}`;
        // draw axis X
        ctx.moveTo(-this.#axisNegativeXLength, 0);
        ctx.lineTo(this.#axisPositiveXLength, 0);
        ctx.moveTo(this.#axisPositiveXLength, 0);
        ctx.lineTo(this.#axisPositiveXLength - 6, 6);
        ctx.moveTo(this.#axisPositiveXLength, 0);
        ctx.lineTo(this.#axisPositiveXLength - 6, -6);
        // draw axis Y
        ctx.moveTo(0, -this.#axisNegativeYLength);
        ctx.lineTo(0, this.#axisPositiveYLength);
        ctx.moveTo(0, this.#axisPositiveYLength);
        ctx.lineTo(6, this.#axisPositiveYLength - 6);
        ctx.moveTo(0, this.#axisPositiveYLength);
        ctx.lineTo(-6, this.#axisPositiveYLength - 6);
        ctx.stroke();
        return ctx;
      }
    }

    class Rectangle extends Carobj {
      constructor(datas) {
        super(datas);
        this.length = datas.length;
        this.width = datas.length;
        this.borderColor = datas.borderColor ?? "white";
        this.borderWidth = datas.borderWidth ?? 1;
        this.fillColor = datas.fillColor ?? null;
      }
      onDraw(ctx, element) {
        ctx.lineWidth = this.borderWidth;
        ctx.strokeStyle = `${this.borderColor}`;
        if (this.fillColor !== null) {
          ctx.fillStyle = `${this.fillColor}`;
          ctx.fill();
        }
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(this.length, 0);
        ctx.lineTo(this.length, this.width);
        ctx.lineTo(0, this.width);
        ctx.lineTo(0, 0 - 0.5 * this.borderWidth);
        ctx.stroke();
        return ctx;
      }
    }

    // TODO: Use the paths of iamges.
    class Image extends Carobj {
      #image;
      constructor(image, datas) {
        super(datas);
        this.#image = image;
      }
      onDraw(ctx, element) {
        ctx.drawImage(this.#image, this.x, this.y);
        return ctx;
      }
    }

    const object = {
      Carobj,
      CoordinateSystem,
      Text,
      Point,
      Line,
      MathImage,
      Circle,
      Polygon,
      Rectangle,
      Image
    };

    class AudioItem {
      #path = null;
      #startFrame = null;
      #audio;
      // eslint-disable-next-line @typescript-eslint/no-inferrable-types
      #volume = 1;
      constructor(path, startFrame, volume) {
        this.#path = path;
        this.#startFrame = startFrame;
        this.#audio = new Audio(this.#path);
        this.#volume = volume;
        this.#audio.volume = this.#volume;
      }
      get path() {
        return this.#path;
      }
      get startFrame() {
        return this.#startFrame;
      }
      get audio() {
        return this.#audio;
      }
    }

    var _Car_animationBuilder, _Car_soundBuilder, _Car_core;
    class Car {
      constructor(ele, fps) {
        _Car_animationBuilder.set(this, new AnimationBuilder());
        _Car_soundBuilder.set(this, new SoundBuilder());
        _Car_core.set(this, void 0);
        __classPrivateFieldSet(this, _Car_core, new Core(ele, fps), "f");
        return this;
      }
      addObject(obj) {
        __classPrivateFieldGet(this, _Car_core, "f").linkObject(obj);
        return this;
      }
      addAnimationItem(builderItem) {
        __classPrivateFieldGet(this, _Car_animationBuilder, "f").addItem(builderItem);
        return this;
      }
      animate(builderItem) {
        __classPrivateFieldGet(this, _Car_animationBuilder, "f").animate(builderItem);
        return this;
      }
      addAudioItem(sound) {
        __classPrivateFieldGet(this, _Car_soundBuilder, "f").addAudio(sound);
        return this;
      }
      allowAudio() {
        __classPrivateFieldGet(this, _Car_soundBuilder, "f").allow();
      }
      banAudio() {
        __classPrivateFieldGet(this, _Car_soundBuilder, "f").ban();
      }
      play() {
        __classPrivateFieldGet(this, _Car_animationBuilder, "f").playOnCar(__classPrivateFieldGet(this, _Car_core, "f"));
        __classPrivateFieldGet(this, _Car_soundBuilder, "f").playOnCar(__classPrivateFieldGet(this, _Car_core, "f"));
        __classPrivateFieldGet(this, _Car_core, "f").CountFrame();
      }
      exports(startAt, lastAt, onFinish) {
        exportAnimationToVideo(__classPrivateFieldGet(this, _Car_core, "f"), startAt, lastAt, onFinish);
      }
      onUpdate(command) {
        __classPrivateFieldGet(this, _Car_core, "f").onUpdate(command);
      }
      pause(frame) {
        __classPrivateFieldGet(this, _Car_core, "f").pause(frame);
      }
      continue(frame) {
        __classPrivateFieldGet(this, _Car_core, "f").continue(frame);
      }
    }
    _Car_animationBuilder = new WeakMap(), _Car_soundBuilder = new WeakMap(), _Car_core = new WeakMap();
    window.onload = () => {
      // eslint-disable-next-line no-console
      console.log(`   ____  ___ _      ___________ ______
  / __ \\/ _ \\ | /| / / ___/ __  / ___/
 / / / /  __/ |/ |/ / /__/ /_/ / /    
/_/ /_/\\___/|__/|__/\\___/\\__,_/_/

%cThe animation is powered by %c newcar %c v0.3.2  %c

link: https://github.com/Bug-Duck/newcar

Click here to jump to our Twitter: https://twitter.com/bugduckteam
 `, "font-size: 14px", "background-color: orange; padding: 7px; font-size: 14px", "background-color: grey; padding: 7px; font-size: 14px");
    };

    exports.AudioItem = AudioItem;
    exports.Car = Car;
    exports.animation = animation;
    exports.interpolator = interpolator;
    exports.object = object;

    return exports;

})({});
//# sourceMappingURL=newcar.js.map
