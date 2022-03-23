<template>
  <div class="wrapper">
      <Sidebar/>
      <Header/>
    <!-- <div class=""> -->
        <main class="">
          <transition name="fade" mode="out-in">
            <router-view :key="$route.path"></router-view>
          </transition>
        </main>
      <Footer/>
    <!-- </div> -->
  </div>
</template>

<script>

import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

export default {
  name: "Container",
  components: {
    Header,
    Sidebar,
    Footer,
  },
};

</script>