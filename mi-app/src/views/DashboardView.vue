<template>
  <div class="container mt-5">
    <h2>Dashboard</h2>

    <NavbarMenu />

    <button class="btn btn-danger mt-3" @click="logout">
      Cerrar sesión
    </button>
  </div>
</template>

<script>
import NavbarMenu from '../components/NavbarMenu.vue'

export default {
  components: { NavbarMenu },
  methods: {
    logout() {
      localStorage.removeItem('logueado')
      this.$router.push('/login')
    }
  }
}
</script>