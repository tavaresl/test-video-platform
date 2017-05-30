class Video {

    constructor(width, height, file, autoplay) {
        this._canvas = document.createElement('canvas');
        this._videoEl = document.createElement('video');
        this._ctx = this._canvas.getContext('2d');
        this._file = file;
        this._width = width;
        this._height = height;
        this._autoplay = autoplay;
        this._playing = false;
        this._anFrame = 0;
    }

    get canvas() { return this._canvas; }
    get width() { return this._width; }
    get height() { return this._height; }
    get file() { return this._height; }
    get isPlaying() { return this._playing; }

    init() {
        this._videoEl.autoplay = false;
        this._videoEl.src = this._file;

        this._canvas.width = this._width;
        this._canvas.height = this._height;
        this._canvas.id = 'vid_el_' + Math.floor((Math.random() * 1000));

        this._videoEl.addEventListener('loadeddata', this.update)

        if (this._autoplay) {
            this._playing = true;
            this._anFrame = window.requestAnimationFrame(this.render);
        }
    }


    update() {
        if (this._playing) {
            this._anFrame = window.requestAnimationFrame(this.render);
        } else {
            window.cancelAnimationFrame(this._anFrame);
        }
    }

    render() {
        this._ctx.drawImage(this._videoEl);
    }
}

export default Video;