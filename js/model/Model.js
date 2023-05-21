export default class PhotoModel {
    constructor() {
        this.photoArray = null
        this.index = 0
        this.photo = null
        this.onChangeCallback = null
    }

    next() {
        if(this.index < (this.photoArray.length - 1)) {
            this.index = this.index + 1
        }
    }

    prev() {
        if(this.index) {
            this.index = this.index - 1
        }
    }

    setPhotoArray(photoArray) {
        this.photoArray = photoArray 
    }
    
    setOnChangeCallback(onChangeCallback) {
        this.onChangeCallback = onChangeCallback;
    }

    initOnModelChange() {
        let handler = {
            set: (obj, prop, val) => {
                obj[prop] = val
                this.photo = this.photoArray[this.index]
                if (this.onChangeCallback) this.onChangeCallback(this);
                return true
            }
        }
       return new Proxy(this, handler)
    }

}