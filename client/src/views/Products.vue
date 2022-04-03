<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Product ID
          </th>
          <th class="text-left">
            Name
          </th>
          <th class="text-left">
            Description
          </th>
          <th class="text-left">
            Price
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="product in products"
          :key="product.productId">

          <td>{{ product.productId }}</td>
          <td>{{ product.name }}</td>
          <td>{{product.description }}</td>
          <td>{{product.price }}</td>
        
        </tr>
      </tbody>
    </template> 
  </v-simple-table>
</template>

<script>
import ProductService from '../services/ProductService'
  export default {
    data () {
      return {
        products: [
          
        ]
      }
    },
    async mounted () {
        this.products = (await ProductService.getAllProducts()).data
        console.log(this.products)
    }
  }
</script>