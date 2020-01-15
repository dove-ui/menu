<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <div class="doc-container">
      <doc-component :docs="docs" value="live" />
      <!-- <FileDemo /> -->
    </div>
  </div>
</template>

<script>
import ReadmeDoc from '../README.md'
import DocIndex from './docs/index'
import DocComponent from './components/doc-component'
import FileDemo from './docs/file-demo'

export default {
  name: 'app',
  components: {
    DocComponent,
    // FileDemo
  },
  data () {
    return {
      tab: 'live',
      docs: [
        { name: 'live', label: 'Live Demo', component: FileDemo },
        { name: 'readme', label: 'README', component: ReadmeDoc },
        { name: 'doc', label: 'Document', component: DocIndex }
      ]
    }
  }
}
</script>
