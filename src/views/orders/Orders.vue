<template>
  <div class="orders">
    <CButtonGroup class="float-end me-3 mb-3" role="group">
      <CButton color="secondary" variant="outline" @click="handleSort('all')" active>All</CButton>
      <CButton color="secondary" variant="outline" @click="handleSort('waiting')">Waiting</CButton>
      <CButton color="secondary" variant="outline" @click="handleSort('ongoing')">Ongoing</CButton>
      <CButton color="secondary" variant="outline" @click="handleSort('done')">Done</CButton>
    </CButtonGroup>
    <CTable>
      <CTableHead>
        <CTableRow>
          <CTableHeaderCell scope="col" v-for="(item, i) of tableHead" :key="i">{{
            item.name
          }}</CTableHeaderCell>
        </CTableRow>
      </CTableHead>
      <CTableBody>
        <CTableRow v-for="(item, i) of orders" :key="i">
          <CTableDataCell>{{ i + 1 }}</CTableDataCell>
          <CTableDataCell>{{ item.car_model }}</CTableDataCell>
          <CTableDataCell>{{ item.car_name }}</CTableDataCell>
          <CTableDataCell>{{ item.car_year }}</CTableDataCell>
          <CTableDataCell>{{ item.car_owner }}</CTableDataCell>
          <CTableDataCell>{{ item.owner_phone }}</CTableDataCell>
          <CTableDataCell>${{ item.salary }}</CTableDataCell>
          <CTableDataCell><CButton color="info" variant="outline" style="text-transform: capitalize;">{{ item.action }}</CButton></CTableDataCell>
        </CTableRow>
      </CTableBody>
    </CTable>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableHead: [
        { name: '№' },
        { name: 'Car type' },
        { name: 'Model' },
        { name: 'Year' },
        { name: 'Full Name' },
        { name: 'Phone' },
        { name: 'Amount' },
        { name: 'Status' },
      ],
      originalOrders: [
        {
          id: 1,
          car_name: 'Bmw',
          car_model: 'Picap',
          car_year: '2020',
          car_owner: 'Alex',
          owner_phone: '+1234548754878',
          salary: '3230',
          action: 'done',
        },
        {
          id: 2,
          car_name: 'Mers',
          car_model: 'Picap',
          car_year: '2023',
          car_owner: 'John',
          owner_phone: '+124543534534',
          salary: '2350',
          action: 'ongoing',
        },
        {
          id: 3,
          car_name: 'Range Rover',
          car_model: 'Picap',
          car_year: '2020',
          car_owner: 'Alex',
          owner_phone: '+1234548754878',
          salary: '3230',
          action: 'waiting',
        },
        {
          id: 4,
          car_name: 'Volvo',
          car_model: 'Track',
          car_year: '2018',
          car_owner: 'Andre',
          owner_phone: '+12323435356',
          salary: '4500',
          action: 'done',
        },
      ],
      orders: []
    };
  },
  methods: {
    handleSort(text) {
      if (text === 'all') {
        this.orders = [...this.originalOrders];
      } else {
        this.orders = this.originalOrders.filter((order) => text === order.action);
      }
    },
  },
  mounted() {
    this.orders = [...this.originalOrders];
  }
};
</script>

<style>
</style>