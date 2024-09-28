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
                    src="@/assets/images/bmw.png"
                    alt=""
                />
            </CTableDataCell>
            <CTableDataCell>Sedan</CTableDataCell>
            <CTableDataCell>Bmw M5</CTableDataCell>
            <CTableDataCell>2018</CTableDataCell>
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
                      name: "Style"
                  },
                  {
                      name: "Model"
                  },
                  {
                      name: "Year"
                  }
              ]
          }
      },
  }
  </script>
  
  <style>
  </style>