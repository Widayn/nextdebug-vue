<template>
  <div id="app">
    <div>
      <NavBar />
    </div>
    <b-row>
      <b-container class="col-lg-2">
        <LeftSideBar />
      </b-container>
      <b-container class="col-lg-8">
        <router-view />
      </b-container>
      <b-container class="col-lg-1">
        <RightSideBar />
      </b-container>
    </b-row>
    <footer>
      <Footer />
    </footer>
  </div>
</template>

<script>
import NavBar from './views/layout/NavBarView.vue';
import LeftSideBar from './views/layout/LeftSideBarView.vue';
import RightSideBar from './views/layout/RightSideBarView.vue';
import Footer from './views/layout/FooterView.vue';

export default {
  components: {
    NavBar, LeftSideBar, RightSideBar, Footer,
  },
  metaInfo: {
    title: 'This is the test',
    meta: [
      { charset: 'utf-8' },
      { name: 'baidu', content: 'q2321wqe' },
    ],
  },
  data() {
    return {};
  },
};
</script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/tonsky/FiraCode@1.207/distr/fira_code.css">
<link data-n-head="ssr" rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter&amp;Space+Mono:wght@400&amp;family=Epilogue:wght@200;400;700&amp;display=swap">
<style lang="scss">
</style>
