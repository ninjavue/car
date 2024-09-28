<template>
  <div class="orders">
    <CTable>
      <CTableHead>
        <CTableRow>
          <CTableHeaderCell scope="col" v-for="item,i of tableHead" :key="i">{{item.name}}</CTableHeaderCell>
        </CTableRow>
      </CTableHead>
      <CTableBody>
        <CTableRow>
          <CTableDataCell>1</CTableDataCell>
          <CTableDataCell>
              <img
                  width="50"
                  height="50"
                  style="border-radius: 50%"
                  src="@/assets/images/avatars/3.jpg"
                  alt=""
              />
          </CTableDataCell>
          <CTableDataCell>John Doe</CTableDataCell>
          <CTableDataCell>+1234567890</CTableDataCell>
          <CTableDataCell>1980</CTableDataCell>
          <CTableDataCell>$3000</CTableDataCell>
          <CTableDataCell>Aug, 2023</CTableDataCell>
          <CTableDataCell>Worker</CTableDataCell>
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
                    name: "Photo"
                },
                {
                    name: "Full Name"
                },
                {
                    name: "Phone"
                },
                {
                    name: "Age"
                },
                {
                    name: "Salary"
                },
                {
                    name: "Join"
                },
                {
                    name: "Role"
                },
            ]
        }
    },
}
</script>

<style>
</style>