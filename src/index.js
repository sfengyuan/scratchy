import '../node_modules/normalize.css/normalize.css'
import './styles/main.styl'
import Store from 'sr-store'
import {on} from './module/helpers'
import Controller from './controller'
import View from './view'
import Model from './model'
import Template from './template'
const store = new Store(localStorage)
const model = new Model(store)
const view = new View(new Template())
const controller = new Controller(view, model)

on(window, 'load', controller.render.bind(controller, model.data()))
