<script setup>
import avatar from '@/assets/images/avatars/2.jpg'

const itemsCount = 42
function isLogout() {
  window.location.href = "/"
}
</script>

<template>
  <CDropdown placement="bottom-end" variant="nav-item">
    <CDropdownToggle class="py-0 pe-0" :caret="false">
      <CAvatar :src="avatar" size="md" />
    </CDropdownToggle>
    <CDropdownMenu class="pt-0" style="z-index: 1022;">
      <CDropdownHeader
        component="h6"
        class="bg-body-secondary text-body-secondary fw-semibold mb-2 rounded-top"
      >
        Account
      </CDropdownHeader>
      <CDropdownItem style="cursor: pointer;"> <CIcon icon="cil-user" /> Profile </CDropdownItem>
      <CDropdownItem style="cursor: pointer;" @click="isLogout"> <CIcon icon="cil-lock-locked" /> Logout </CDropdownItem>
    </CDropdownMenu>
  </CDropdown>
</template>

