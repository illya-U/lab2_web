export default class Controller {
    constructor(PhotoModel, PhotoView) {
        this.PhotoModel = PhotoModel
        this.PhotoView = PhotoView
        this.PhotoModel.setOnChangeCallback((e) => this.onChangeCallback(e))
        this.PhotoModel = this.PhotoModel.initOnModelChange()
        this.PhotoView.setPhotoModel(this.PhotoModel)
        this.PhotoView.setControllerOnNextItem(this.next)
        this.PhotoView.setControllerOnPrevItem(this.prev)
    }

    onChangeCallback() {
        document.querySelector('#divphoto').innerHTML = this.PhotoView.toHtml();
    }

    next() {
        this.PhotoModel.next()
    }

    prev() {
        this.PhotoModel.prev()
    }

    setPhotoArray(photoArray) {
        this.PhotoModel.setPhotoArray(photoArray)
    }

}