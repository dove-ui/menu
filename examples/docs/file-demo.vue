<template>
  <div>
    <!-- <div class="demo-white">
      <h4>Default</h4>
      <vc-menu :menus="menus" :current-active="['item4']"></vc-menu>
    </div> -->
    <div class="demo-black">
      <h4>Dark</h4>
      <vc-menu :menus="menus" :current-active="['item4']" theme="dark">
        <!-- before vue 2.6.0
        <template slot-scope="menu" slot="item">
          <img :src="logo" alt="" style="vertical-align:middle;width:12px;margin-right:5px;">
          <span>{{menu.label}}</span>
        </template> -->

        <template v-slot:item="menu">
          <img :src="logo" alt="" style="vertical-align:middle;width:12px;margin-right:5px;">
          <span>{{menu.label}}</span>
          <span style="font-size: 12px;margin-left:10px;opacity:0.5;">{{menu.description}}</span>
        </template>
      </vc-menu>
    </div>

    <div class="demo-black" style="background: #19202e;color:#fff">
      <h4>Light</h4>
      <vc-menu :menus="menus" :current-active="['item4']" theme="light">
        <template v-slot:item="menu">
          <img :src="logo" alt="" style="vertical-align:middle;width:12px;margin-right:5px;">
          <span>{{menu.label}}</span>
          <span style="font-size: 12px;margin-left:10px;opacity:0.5;">{{menu.description}}</span>
        </template>
      </vc-menu>
    </div>
  </div>
</template>
<script>
import logo from '../assets/logo.png'

const menus = [
  { label: 'Route 1', router: '/test', description: 'Test route' },
  { label: 'Route 2', router: { path: '/page', query: { a: 1 }}, description: 'Test route' },
  { label: 'Outside Link', link: 'https://baidu.com', target: '_blank', title: '百度', description: 'baidu.com' },
  {
    label: () => 'Handle Item',
    name: 'item4',
    handle: function (e) {
      console.log(e, this)
      alert('Hi!')
    }
  },
  {
    label: 'Submenu',
    name: 'item5',
    // open: true,
    // hide: true,
    children: [
      { label: 'Sub 1' },
      { label: 'Sub 1' },
      { label: 'Sub 1', name: 'item6' },
      { type: 'line' },
      {
        label: 'Sub1',
        children: [
          { label: 'Sub2' },
          { label: 'Sub2', name: 'test' },
          { label: 'Sub2' },
          {
            label: 'children',
            children: [
              { label: 'children' },
              { label: 'children' },
              { type: 'line' },
              { label: 'children' }
            ]
          }
        ]
      }
    ]
  },
  {
    label: 'Group 1',
    group: true,
    children: [
      { label: 'Menu item' },
      { label: 'Menu item' },
      { label: 'Menu item' }
    ]
  },
  {
    label: 'Group 1',
    group: true,
    children: [
      { label: 'Menu item' },
      { label: 'Menu item' },
      { label: 'Menu item' }
    ]
  },
  { type: 'line' },
  { label: 'Home Page' },
  { label: 'About' }
]

export default {
  data () {
    return {
      menus: menus,
      logo
    }
  },
  methods: {
  }
}
</script>

<style lang="less">
  .demo-white,
  .demo-black {
    width: 45%;
    float: left;
    padding: 15px;
    box-sizing: border-box;
    margin: 5px;
    border: solid 2px #19202E;

    ul {
      padding-left: 0 !important;
    }

    img {
      background-color: transparent !important;
    }
  }
</style>
