<template>
  <div class="orders">
    <CButtonGroup class="float-end me-3 mb-3" role="group">
            <CButton color="secondary" variant="outline">Waiting</CButton>
            <CButton color="secondary" variant="outline" active>Ongoing</CButton>
            <CButton color="secondary" variant="outline">Done</CButton>
    </CButtonGroup>
    <CTable>
      <CTableHead>
        <CTableRow>
          <CTableHeaderCell scope="col" v-for="item,i of tableHead" :key="i">{{item.name}}</CTableHeaderCell>
        </CTableRow>
      </CTableHead>
      <CTableBody>
        <CTableRow>
          <CTableDataCell>1</CTableDataCell>
          <CTableDataCell>Sedan</CTableDataCell>
          <CTableDataCell>Bmw M5</CTableDataCell>
          <CTableDataCell>2020</CTableDataCell>
          <CTableDataCell>John Doe</CTableDataCell>
          <CTableDataCell>+1234567890</CTableDataCell>
          <CTableDataCell>$1500</CTableDataCell>
        </CTableRow>
      </CTableBody>
    </CTable>
  </div>
</template>

<script>
export default {
    data() {
        return {
            tableHead:[
                {
                    name: "№"
                },
                {
                    name: "Car type"
                },
                {
                    name: "Model"
                },
                {
                    name: "Year"
                },
                {
                    name: "Full Name"
                },
                {
                    name: "Phone"
                },
                {
                    name: "Amount"
                },
            ]
        }
    },
}
</script>

<style>
</style>