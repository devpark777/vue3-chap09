<template>
  <div>
     <table border="1">
        <thead>
            <tr>
                <th>제품명</th>
                <th>가격</th>
                <th>카테고리</th>
                <th>배송료</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(product,i) in productList" :key="i" >
                <td>{{product.product_name}}</td>
                <td>{{product.price}}</td>
                <td>{{product.category}}</td>
                <td>{{product.delivery_price}}</td>
            </tr>
        </tbody>
     </table>
  </div>
</template>

<script>
// import ApiMixin from '../api.js';
export default {
  // mixins: [ApiMixin], //사용할 믹스인 파일을 배열로 등록
  data() {
    return {
      productList: []
    };
  },
  async mounted() {
    this.productList = await this.$callAPI("https://a7bd86f7-e477-413d-91eb-6d9c44eb870d.mock.pstmn.io/list","get");
    console.log(this.productList);
  }
}
</script>