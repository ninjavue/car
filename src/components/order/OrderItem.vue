<template>
   <div class="order-box" v-for="item,i of orders" :key="i">
      <div class="flex f-1" >
        <img src="@/assets/images/bmw.jpg" alt="" />
        <div class="justify-between flex align-center f-1">
          <div class="order-box-content">
            <div class="order-box-title">{{item.car_name}} ( {{item.model}} )</div>
            <p class="text-secondary">{{item.comment}}</p>
            <div class="order-box-price">${{item.price}}</div>
          </div>
          <div class="order-box-content" v-if="isShow">
            <div class="order-box-author">
              <div class="mb-2 mt-5">{{item.car_author}}</div>
              <a class=" mt-4 text-light" :href="`tel:${item.phone}`"> {{item.phone}} </a>
            </div>
            
            <div class="order-box-price mt-2"></div>
          </div>
          <CButton v-if="isShow" @click="hadleId(item.id)" color="primary" variant="outline">View</CButton>
          <CButton v-else color="primary" variant="outline">View</CButton>
        </div>
      </div>
      <div class="order-content" v-if="orderId == item.id">
        <div class="order-content-box" v-for="list,index of item.works" :key="index">
          <div>{{list.window}}</div>
          <div>{{list.percent}}%</div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    props:{
        orders: Array,
        isShow: Boolean
    },
    data() {
        return {
            orderId: "",
            xlDemo: false,
        }
    },
    methods: {
    hadleId(id){
      if(this.orderId == id){
        this.orderId = ""
      }else{
        this.orderId = id
      }
    }
  },
}
</script>

<style lang="scss">
@import '@/styles/order/order.scss';
</style>