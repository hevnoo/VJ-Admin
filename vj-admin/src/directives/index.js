import { App } from 'vue'
import focus from './modules/focus.js'
import copy from './modules/copy'
import debounce from './modules/debounce'
import throttle from './modules/throttle'
import permission from './modules/permission.js'
import draggable from './modules/draggable'

const directivesList = {
  // Custom directives
  focus,
  copy,
  permission,
  debounce,
  throttle,
  draggable
}

const directives = {
  install: function (app) {
    Object.keys(directivesList).forEach((key) => {
      // 注册所有自定义指令
      app.directive(key, directivesList[key])
    })
  }
}

export default directives
