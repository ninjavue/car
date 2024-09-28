<template>
  <div class="row mb-5">
    <div class="col-8">
      <div class="d-center relative">
        <img class="worker-dash_img car-image" src="@/assets/images/bmw.png" alt="" />
        <div class="full-circle">
          <div class="half-circle bottom-half"></div>
        </div>
      </div>
      <div style="width: 100%">
        <h4>Parts overview</h4>
        <OrderItem :orders="orders" :isShow="isShow" />
      </div>
    </div>
    <div class="col-4">
      <div class="order-view">
        <h4>General Information</h4>
        <div class="order-view-img">
          <img src="@/assets/images/car.png" alt="" />
        </div>
        <div class="d-flex justify-between">
          <h6>BMW M8 Competition 2023</h6>
          <h5>$1285</h5>
        </div>

        <div class="d-flex justify-between">
          <p class="text-secondary fw-medium">Sedan</p>
          <p class="text-secondary fw-medium">Alex</p>
          <p class="text-secondary fw-medium">+123457484758</p>
        </div>
        <div class="order-view-btns">
          <button>Front Left window 20%</button>
          <button>Front Right window 20%</button>
          <button>Back Left window 90%</button>
          <button>Back Right window 90%</button>
          <button>Back window 100%</button>
        </div>
        <p class="text-secondary">
          Performance is at the heart of the M8 Coupe. Go from smooth to sporty with standard
          Adaptive M Suspension and Active M Differential driving dynamics – providing the tools you
          need for every driving scenario.
        </p>
        <button type="button" class="btn btn-outline-info">Done</button>
      </div>
    </div>
  </div>
</template>

<script>
import OrderItem from '../../../components/order/OrderItem.vue'
export default {
  components: {
    OrderItem,
  },
  data() {
    return {
      orders: [
        {
          id: 1,
          car_name: 'Bmw M8 Competition',
          car_author: 'Alexander',
          phone: '+1234567890323',
          price: '1325',
          model: 'Sedan',
          comment: '1 damage (deformations,abrasions)',
          works: [
            {
              id: 1,
              window: 'Front left window',
              percent: '20',
            },
          ],
        },
        {
          id: 2,
          car_name: 'Mercedes-AMG Range',
          car_author: 'Anna De Armos',
          phone: '+12323748887632',
          price: '2345',
          model: 'Pikap',
          comment: 'Browse the latest offers on a new Mercedes-AMG',
          works: [
            {
              id: 1,
              window: 'Front left window',
              percent: '20',
            },
            {
              id: 2,
              window: 'Front right window',
              percent: '20',
            },
            {
              id: 3,
              window: 'Back right window',
              percent: '90',
            },
            {
              id: 4,
              window: 'Back left window',
              percent: '90',
            },
          ],
        },
        {
          id: 2,
          car_name: 'Range Rover',
          car_author: 'John',
          phone: '+12332287482325',
          price: '3437',
          model: 'Pikap',
          comment: 'Black or red calipers complete the sport look of the M8 Coupe',
          works: [
            {
              id: 1,
              window: 'Front left window',
              percent: '20',
            },
            {
              id: 2,
              window: 'Front right window',
              percent: '20',
            },
            {
              id: 3,
              window: 'Back right window',
              percent: '90',
            },
            {
              id: 4,
              window: 'Back left window',
              percent: '90',
            },
          ],
        },
      ],
      isShow: false,
    }
  },
}
</script>

<style lang="scss">
@import '@/styles/worker/worker.scss';
</style>