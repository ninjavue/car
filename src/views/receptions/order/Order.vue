<template>
  <div class="order">
    <div class="add-admin-top">
      <CForm>
        <CFormInput type="text" class="search" placeholder="Search..." />
      </CForm>
      <CButton
        color="primary"
        @click="
          () => {
            xlDemo = true
          }
        "
        >Add Order</CButton
      >
    </div>

    <!-- Order item -->
    <OrderItem :orders="orders" :isShow="isShow"/>

    <!-- Order item -->

    <CModal
      size="lg"
      :visible="xlDemo"
      @close="
        () => {
          xlDemo = false
        }
      "
      aria-labelledby="OptionalSizesExample1"
    >
      <CModalHeader>
        <CModalTitle id="OptionalSizesExample1">Add Admin</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CForm class="admin-form">
          <div class="admin-input">
            <CFormLabel for="exampleFormControlInput1">Clint's name </CFormLabel>
            <CFormInput type="text" id="exampleFormControlInput1" placeholder="Anna Smith" />
          </div>
          <div class="admin-input">
            <CFormLabel for="exampleFormControlInput1">Client phone</CFormLabel>
            <CFormInput type="numnber" id="exampleFormControlInput1" placeholder="+1234567890" />
          </div>
          <div class="admin-input">
            <CFormLabel for="exampleFormControlInput1">Car Model</CFormLabel>
            <CFormSelect placeholder="Car Model">
              <option disabled>Car model</option>
              <option value="1">Sedan</option>
              <option value="2">Pikap</option>
              <option value="3">Truck</option>
            </CFormSelect>
          </div>
          <div class="admin-input">
            <CFormLabel for="exampleFormControlInput1">Car brend</CFormLabel>
            <CFormInput
              type="text"
              id="exampleFormControlInput1"
              placeholder="BMW M8 Competition"
            />
          </div>
          <div class="form-center">
            <div v-for="(input, index) in inputs" :key="index" class="input-loop">
              <img class="input-loop-img" src="@/assets/images/window.png" alt="" />
              <div class="admin-input mb-1">
                <CFormLabel :for="'window' + index">Which window</CFormLabel>
                <CFormInput
                  type="text"
                  :id="'window' + index"
                  placeholder="Front left window"
                  v-model="input.window"
                />
              </div>
              <div class="admin-input mb-1">
                <CFormLabel :for="'percent' + index">How many percent</CFormLabel>
                <CFormInput
                  type="text"
                  :id="'percent' + index"
                  placeholder="20"
                  v-model="input.percent"
                />
              </div>
              <CCloseButton v-if="index > 0" @click="closeInput(index)" class="mt-4" />
            </div>
            <CButton color="success" class="mt-b" @click="addInput">Add</CButton>
          </div>
          <div class="admin-input">
            <CFormLabel for="formFile">Upload photo</CFormLabel>
            <CFormInput type="file" id="formFile" />
          </div>
          <div class="admin-input">
            <CFormLabel for="formFile">Price</CFormLabel>
            <div class="input-group">
              <span class="input-group-text">$</span>
              <input
                type="number"
                class="form-control"
                aria-label="Amount (to the nearest dollar)"
              />
              <span class="input-group-text">.00</span>
            </div>
          </div>

          <div class="w-full">
            <CFormLabel for="exampleFormControlInput1">Comment </CFormLabel>
            <CFormInput
              type="text"
              id="exampleFormControlInput1"
              placeholder="1 damage (deformations,abrasions)"
            />
          </div>
          <div class="admin-btn">
            <CButton
              color="danger"
              variant="outline"
              @click="
                () => {
                  xlDemo = false
                }
              "
              >Close</CButton
            >
            <CButton color="primary" variant="outline">Add</CButton>
          </div>
        </CForm>
      </CModalBody>
    </CModal>
  </div>
</template>
    
    <script>
import OrderItem from '../../../components/order/OrderItem.vue';

export default {
  components:{
    OrderItem
  },
  data() {
    return {
      xlDemo: false,
      orders:[
        {
          id: 1,
          car_name: "Bmw M8 Competition",
          car_author: "Alexander",
          phone:"+1234567890323",
          price:"1325",
          model:"Sedan",
          comment: "1 damage (deformations,abrasions)",
          works:[
            {
              id:1,
              window:"Front left window",
              percent:"20",
            }
          ]
        },
        {
          id: 2,
          car_name: "Mercedes-AMG Range",
          car_author: "Anna De Armos",
          phone:"+12323748887632",
          price:"2345",
          model:"Pikap",
          comment: "Browse the latest offers on a new Mercedes-AMG",
          works:[
            {
              id:1,
              window:"Front left window",
              percent:"20",
            },
            {
              id:2,
              window:"Front right window",
              percent:"20",
            },
            {
              id:3,
              window:"Back right window",
              percent:"90",
            },
            {
              id:4,
              window:"Back left window",
              percent:"90",
            },
          ]
        }
      ],
      inputs: [{ window: '', percent: '' }],
      isShow: true

    }
  },
  methods: {
    addInput() {
      this.inputs.push({ window: '', percent: '' })
    },
    closeInput(i) {
      this.inputs.splice(i, 1)
    },
  },
}
</script>
    
<style lang="scss">
@import '@/styles/order/order.scss';
</style>