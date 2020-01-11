import ArrowIcon from './arrow-icon'
import { isArr, isFun } from './utils'

function renderItemLabel (ctx, menu) {
  if (isFun(menu.label)) {
    return menu.label(menu)
  } else if (ctx.root.$scopedSlots.item) {
    return ctx.root.$scopedSlots.item(menu)
  } else if (isFun(ctx.root.renderItem)) {
    return ctx.root.renderItem(menu)
  }

  return menu.label
}

export default {
  name: 'VcMenuItem',
  props: {
    menu: Object
  },

  data () {
    return {
      isHovered: false,
      isOpen: false // 是否展开
    }
  },

  computed: {
    root () {
      let parent = this.$parent

      while (parent) {
        if (parent.$options.componentName === 'VcMenu' && parent.isRoot) {
          return parent
        } else {
          parent = parent.$parent
        }
      }
    },
    isClicked () {
      if (!this.menu.name) return false
      if (!this.root) return false
      return this.root.selected.indexOf(this.menu.name) > -1
    },
    isFolder () {
      return isArr(this.menu.children)
    }
  },

  watch: {
    'menu.open' () {
      this.isOpen = !!this.menu.open
    }
  },

  methods: {
    handleClick () {
      this.root.$emit('click-item', this.menu)

      if (isFun(this.menu.handle)) {
        this.menu.handle(this.menu)
      }

      if (this.menu.name) {
        // if (this.isClicked) {
        //   this.root.removeSelected(this.menu.name)
        // } else {
        //   this.root.addSelected(this.menu.name)
        // }
        if (!this.isClicked) {
          this.root.addSelected(this.menu.name)
          this.root.$emit('selected', this.menu)
        }
      }

      if (this.isFolder) {
        this.isOpen = !this.isOpen

        if (this.isOpen) {
          this.root.$emit('open', this.menu)
        } else {
          this.root.$emit('close', this.menu)
        }
      }
    }
  },

  created () {
    this.isOpen = !!this.menu.open
  },

  // eslint-disable-next-line no-unused-vars
  render (h) {
    const menu = this.menu
    const isClicked = this.isClicked
    const isHovered = this.isHovered

    if (menu.type === 'line') {
      return (
        <li class="vc-menu-line">
          <div class="vc-menu-line--row"></div>
        </li>
      )
    }

    const menuRow = (
      <div class={['vc-menu-item--row', isClicked && 'is-clicked', isHovered && 'is-hovered']}
        on-mouseover={() => this.isHovered = true}
        on-mouseout={() => this.isHovered = false}
        on-click={this.handleClick}
      ></div>
    )

    const menuLabel = (
      <div class={['vc-menu-item--label']}
        on-mouseover={() => this.isHovered = true}
        on-mouseout={() => this.isHovered = false}
        on-click={this.handleClick}
        >
        {renderItemLabel(this, menu)}
        {this.isFolder ? <ArrowIcon class="vc-menu--dropdown" direction={this.isOpen ? 'bottom' : 'left'} /> : null}
      </div>
    )

    let menuItem = null

    if (menu.link) {
      menuItem = (
        <a href={menu.link} target={menu.target} title={menu.title}>
          {[menuRow, menuLabel]}
        </a>
      )
    } else if (menu.router) {
      menuItem = (
        <router-link to={menu.router} title={menu.title}>
          {[menuRow, menuLabel]}
        </router-link>
      )
    } else {
      menuItem = ([menuRow, menuLabel])
    }

    const groupLabel = !menu.group ? null : (
      <div class={['vc-menu-group--label']}>{menu.label}</div>
    )

    return (
      <li class={[this.menu.group ? 'vc-menu-group' : 'vc-menu-item']}>
        {menu.group ? groupLabel : menuItem}

        {((this.isFolder && this.isOpen) || menu.group) ? (<vc-menu menus={menu.children} is-root={false} />) : null}
      </li>
    )
  }
}
