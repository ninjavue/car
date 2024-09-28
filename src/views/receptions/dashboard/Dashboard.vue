<template>
  <div>
    <WidgetsStatsA class="mb-4" />
    <OrderItem :orders="orders" :isShow="isShow" />
  </div>
</template>

<script>
import WidgetsStatsA from '../../widgets/WidgetsStatsTypeA.vue'
import OrderItem from '../../../components/order/OrderItem.vue'
export default {
  components: {
    WidgetsStatsA,
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
      ],
      isShow: true
    }
  },
}
</script>