import Vue from 'vue'
import * as VueRouter from 'vue-router'

export interface MenuItem {
  label: string
  label: (menu: MenuItem) => string | Vue.VNode
  children?: MenuItem[],
  group: boolean
  open: boolean
  name?: string | number
  router?: string | VueRouter.Route
  hanlde?: (menu: MenuItem) => void
  link?: string
  target?: string
  title?: string
  type?: 'line'
}

export declare class Menu {
  static install (vue: typeof Vue, options?: Object): void
  theme?: 'dark' | 'light'
  currentActive: any[]
  multiple: Boolean
  renderItem: (menu: MenuItem) => Vue.VNode
  openActive: Boolean
}

export default Menu
