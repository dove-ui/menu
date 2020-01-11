import Menu from './menu'
import './menu.less'

Menu.install = function (Vue, options = {}) {
  Vue.component(options.name || Menu.name, Menu)
}

export default Menu
