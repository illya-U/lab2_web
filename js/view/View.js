export default class PhotoView {
    constructor () {
        this.PhotoModel = null
        this.controllerOnNextItem = null
        this.controllerOnPrevItem = null
        document.querySelector('#next').addEventListener('click', (e) => this.onNextClick(e))
        document.querySelector('#prev').addEventListener('click', (e) => this.onPrevClick(e))
    }

    setControllerOnNextItem(ControllerOnNextItem) {
        this.ControllerOnNextItem = ControllerOnNextItem;
    }
    
    setControllerOnPrevItem(ControllerOnPrevItem) {
        this.ControllerOnPrevItem = ControllerOnPrevItem;
    }
    
    setPhotoModel(photoModel) {
        this.PhotoModel = photoModel
    }

    onNextClick() {
        this.ControllerOnNextItem()
    }

    onPrevClick() {
        this.ControllerOnPrevItem()
    }

    toHtml() {
        return `<img src="photo/${this.PhotoModel.photo}", class = "photo">`
    }

}