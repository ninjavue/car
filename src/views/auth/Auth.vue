<template>
  <CNav as="nav" class="auth-header">
    <CNavLink href="/" active>
      <div class="auth-nav">
        <img src="../../assets/brand/logo.png" alt="" />
      </div>
    </CNavLink>
  </CNav>
  <div class="auth">
    <div class="auth-card">
      <CForm @submit.prevent="submitAuth">
        <h3 class=" mt-3 text-center">Login</h3>

        <div class="mb-3">
          <CFormLabel for="exampleFormControlInput1">Login</CFormLabel>
          <CFormInput v-model="auth.login" type="text" id="exampleFormControlInput1" placeholder="worker_1" required />
        </div>
        <div class="mb-3">
          <CFormLabel for="exampleFormControlInput1">Password</CFormLabel>
          <CFormInput v-model="auth.password" type="password" id="exampleFormControlInput1" placeholder="Password" required />
        </div>
        <button class="w-100 mt-3 auth-btn" type="submit">Enter</button>
      </CForm>
    </div>
  </div>
  <CToast :autohide="false" :delay="2000"  color="danger" class="text-white align-items-center toast" v-if="showToast" visible>
  <div class="d-flex">
    <CToastBody>Login or Password error!</CToastBody>
    <CToastClose class="me-2 m-auto" white />
  </div>
</CToast>

</template>

<script>
export default {
    data() {
        return {
            auth:{},
            showToast: false
        }
    },
    methods:{
        submitAuth(){
            if(this.auth.login && this.auth.password){
                if(this.auth.login.trim() == 'superadmin' && this.auth.password.trim() == 'superadmin123'){
                    window.location.href = "/dashboard"
                }else if(this.auth.login.trim() == 'admin' && this.auth.password.trim() == 'admin123'){
                    window.location.href = "/admin"
                }else if(this.auth.login.trim() == 'reception' && this.auth.password.trim() == 'reception123'){
                    window.location.href = "/reception"
                }else if(this.auth.login.trim() == 'worker' && this.auth.password.trim() == 'worker123'){
                    window.location.href = "/worker"
                }else{
                  this.showToast = true
                    setTimeout(() => {
                      this.showToast = false
                    }, 2000)
                }
            }
        }
    }
}
</script>

<style lang="scss">
@import '../../styles/auth/auth.scss';
</style>