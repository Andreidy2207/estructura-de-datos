<template>
  <div>
    <input v-model="nombre" class="form-control mb-2" placeholder="Nombre" />
    <input v-model="precio" type="number" class="form-control mb-2" placeholder="Precio" />

    <button class="btn btn-success mb-3" @click="agregar">Agregar</button>

    <ul class="list-group">
      <li v-for="(p, i) in productos" :key="i" class="list-group-item d-flex justify-content-between">
        {{ p.nombre }} - ${{ p.precio }}
        <button class="btn btn-danger btn-sm" @click="eliminar(i)">X</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nombre: '',
      precio: '',
      productos: []
    }
  },
  mounted() {
    const data = localStorage.getItem('productos')
    if (data) this.productos = JSON.parse(data)
  },
  methods: {
    agregar() {
      if (!this.nombre || !this.precio) return

      this.productos.push({
        nombre: this.nombre,
        precio: this.precio
      })

      localStorage.setItem('productos', JSON.stringify(this.productos))

      this.nombre = ''
      this.precio = ''
    },
    eliminar(i) {
      this.productos.splice(i, 1)
      localStorage.setItem('productos', JSON.stringify(this.productos))
    }
  }
}
</script>