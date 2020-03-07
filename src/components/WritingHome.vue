<template>
 <div>
   <writing-nav-menu></writing-nav-menu>
   <router-view/>
 </div>
</template>

<script>
    import WritingNavMenu from "./common/WritingNavMenu";
    export default {
        name: "WritingHome",
      components: {WritingNavMenu}
    }
</script>

<style scoped>

</style>
