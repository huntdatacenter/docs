<script setup>
defineOptions({
  name: "SOButton",
})

// Props definition
const props = defineProps({
  title: { type: String, default: null },
  order: { type: String, default: "" },
})
// order=internal_kista

// <div class="home" style="padding: 0px">
//     <div class="hero">
//         <p class="action">
//             <a href="/-/service-order/?open=internal_kista">
//                 <input
//                     value="Prepare internal kista order"
//                     class="nav-link external action-button"
//                     color="deeppink"
//                     type="button"
//                     style="padding: 18px; cursor:pointer; background-color: rgb(0, 150, 136); border-color: rgb(0, 150, 136); border-bottom: 1px solid rgb(0, 50, 45);"
//                 />
//             </a>
//         </p>
//     </div>
// </div>
</script>

<template>
  <div class="vuewidget vuewrapper sobutton">
    <div class="home" style="padding: 0px">
      <div class="hero">
        <p class="action">
          <a :href="`/-/service-order/?open=${order}`">
            <input
              :value="title"
              class="nav-link external action-button"
              color="deeppink"
              type="button"
              style="
                padding: 18px;
                cursor: pointer;
                background-color: rgb(0, 150, 136);
                border-color: rgb(0, 150, 136);
                border-bottom: 1px solid rgb(0, 50, 45);
              "
            />
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<style>
.vuewidget.vuewrapper.sobutton .home {
  padding: 3.6rem 2rem 0;
  max-width: 960px;
  margin: 0 auto;
  display: block;
}

.vuewidget.vuewrapper.sobutton .home .hero {
  text-align: center;
}

.vuewidget.vuewrapper.sobutton .home .hero .action-button {
  display: inline-block;
  font-size: 1.2rem;
  color: #fff;
  /* padding: 0.8rem 1.6rem; */
  border-radius: 4px;
  transition: background-color 0.1s ease;
  box-sizing: border-box;

  padding: 18px;
  cursor: pointer;
  background-color: rgb(0, 150, 136);
  border-color: rgb(0, 150, 136) rgb(0, 150, 136) rgb(0, 50, 45);
  border-bottom-width: 1px;
  border-bottom-style: solid;
}
</style>
