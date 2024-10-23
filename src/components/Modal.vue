<template>
  <div class="backdrop" @click.self="closeModal">
    <div class="modal" :class="{sale : theme === 'sale'}">
      <h1>{{  header }}</h1>
      <p>{{ text }}</p>
      <!-- Default vs Named Slots -->
      <slot></slot> 

      <div class="actions">
        <slot name="links"></slot>
      </div>

    </div>
  </div>
</template>

<script>

export default{
 
      props: ['header','text','theme'],
      methods:{
        closeModal(){
          this.$emit('close') 
        }
      }
    
}
</script>


<style scoped>
.modal{
  width: 400px;
  padding: 20px;
  background: white;

border-radius: 20px;
}
.backdrop{
  top:0;
  position: fixed;
  background: rgba(0,0,0,0.5);
  width: 100%;
  height: 100%;
  display: flex;
  align-items:center;
  justify-content: center;
}
.modal .actions{
  text-align: center;
    margin: 30px 0px 10px 0px;
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
}



</style>