<template>
  <div class="add-admin">
    <div class="add-admin-top">
      <CForm>
        <CFormInput
          type="text"
          class="search"
          placeholder="Search..."
        />
      </CForm>
      <CButton
        color="primary"
        @click="
          () => {
            xlDemo = true
          }
        "
        >Add Admin</CButton
      >
    </div>

    <CTable>
      <CTableHead>
        <CTableRow>
          <CTableHeaderCell scope="col" v-for="(item, i) of tableHead" :key="i">{{
            item.name
          }}</CTableHeaderCell>
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
              src="@/assets/images/avatars/5.jpg"
              alt=""
            />
          </CTableDataCell>
          <CTableDataCell>Anna</CTableDataCell>
          <CTableDataCell>anna2000</CTableDataCell>
          <CTableDataCell>anna12092024</CTableDataCell>
          <CTableDataCell>+1234567890</CTableDataCell>
          <CTableDataCell> </CTableDataCell>
        </CTableRow>
      </CTableBody>
    </CTable>
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
          <div class="mb-3 admin-input">
            <CFormLabel for="exampleFormControlInput1">Full Name</CFormLabel>
            <CFormInput type="text" id="exampleFormControlInput1" placeholder="Anna Smith" />
          </div>
          <div class="mb-3 admin-input">
            <CFormLabel for="exampleFormControlInput1">Phone Number</CFormLabel>
            <CFormInput type="numnber" id="exampleFormControlInput1" placeholder="+1234567890" />
          </div>
          <div class="mb-3 admin-input">
            <CFormLabel for="exampleFormControlInput1">Username</CFormLabel>
            <CFormInput type="text" id="exampleFormControlInput1" placeholder="Username" />
          </div>
          <div class="mb-3 admin-input">
            <CFormLabel for="exampleFormControlInput1">Password</CFormLabel>
            <CFormInput type="text" id="exampleFormControlInput1" placeholder="Password" />
          </div>
          <div class="mb-3 w-full">
            <CFormLabel for="formFile">Upload photo</CFormLabel>
            <CFormInput type="file" id="formFile" />
          </div>
          <div class="mb-3 admin-btn">
            <CButton color="danger" variant="outline">Close</CButton>
            <CButton color="primary" variant="outline">Add</CButton>
          </div>
        </CForm>
      </CModalBody>
    </CModal>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      tableHead: [
        {
          name: '№',
        },
        {
          name: 'Photo',
        },
        {
          name: 'Full name',
        },
        {
          name: 'login',
        },
        {
          name: 'password',
        },
        {
          name: 'Phone',
        },
        {
          name: 'Action',
        },
      ],
      xlDemo: false,
    }
  },
}
</script>
  
<style lang="scss">
.admin-form {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  & .w-full {
    width: 100%;
  }
  & .admin-btn {
    width: 100%;
    display: flex;
    gap: 20px;
    justify-content: flex-end;
    align-items: flex-end;
  }
  & .admin-input {
    width: 48%;
  }
}
</style>