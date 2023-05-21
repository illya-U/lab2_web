import PhotoModel from "./model/Model.js"
import PhotoView from "./view/View.js"
import Controller from "./controller/Controller.js"

let photoModel = new PhotoModel()
let photoView = new PhotoView()

let controller = new Controller(photoModel, photoView)

controller.setPhotoArray(["first.png", "second.png", "third.png", "four.png"])

