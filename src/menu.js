import MenuItem from './menu-item'

export default {
  name: 'VcMenu',
  componentName: 'VcMenu',
  components: {
    MenuItem
  },
  props: {
    /**
     * @param {string|function} menus[].label - 菜单项标题，函数类型优先级比renderItem和作用域插槽item高
     * @param {string} menus[].name - 菜单项唯一标识
     * @param {menu[]} menus[].children - 菜单项唯一标识
     * @param {boolean} menus[].open - 子菜单是否打开
     * @param {boolean} menus[].group - 分组
     * @param {string} menus[].type - line 分隔线
     * @param {string} menus[].link - 链接
     * @param {string} menus[].target - 链接target
     * @param {string} menus[].title - title提示
     * @param {string|Router} menus[].router - 路由
     * @param {function} menus[].handle - 路由
     * @param {function} menus[].hide - 隐藏
     * **/
    menus: {
      type: Array,
      default () {
        return []
      }
    },
    theme: String, // dark, light
    currentActive: {
      type: Array,
      default () {
        return []
      }
    },
    multiple: Boolean, // 是否可以选中多个
    renderItem: Function,
    isRoot: {
      type: Boolean,
      default: true
    },
    // 是否自动展开当前选中项
    openActive: Boolean
  },

  data () {
    return {
      selected: []
    }
  },

  watch: {
    currentActive (val) {
      this.selected = [...val]
    }
  },

  methods: {
    addSelected (name) {
      if (this.selected.indexOf(name) === -1) {
        if (this.multiple) {
          this.selected.push(name)
        } else {
          this.selected = [name]
        }
        return true
      }
      return false
    },

    removeSelected (name) {
      const index = this.selected.indexOf(name)

      if (index > -1) {
        this.selected.splice(index, 1)
      }
    }
  },

  created () {
    this.selected = [...this.currentActive]
  },

  // eslint-disable-next-line no-unused-vars
  render (h) {

    return (
      <ul class={['vc-menu', this.theme && 'vc-menu--' + this.theme, this.isRoot && 'is-root']}>
        {this.menus.map(item => {
          return (
            <menu-item menu={item} />
          )
        })}
      </ul>
    )
  }
}
