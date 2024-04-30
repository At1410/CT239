<template>
<div>
  <img class="d-block w-100" src="../Img/Header/1.png" alt="">
</div>
<div>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="item_at">
            <router-link class="btn btn-outline-success item_navAT" to="/" :class="{ 'active': currentRoute === '/' }">Trang chủ</router-link>
          </li>
          <li class="item_at">
            <router-link class="btn btn-outline-success item_navAT" to="/TouristAttractions" :class="{ 'active': currentRoute === '/TouristAttractions' }">Du lịch</router-link>
          </li>
          <li class="item_at">
            <router-link class="btn btn-outline-success item_navAT" to="/Gastronomy" :class="{ 'active': currentRoute === '/Gastronomy' }">Ẩm thực</router-link>
          </li>
          <!-- <li class="item_at">
            <router-link class="btn btn-outline-success item_navAT" to="/Festival" :class="{ 'active': currentRoute === '/Festival'}">Lễ hội</router-link>
          </li> -->
          <li class="item_at">
            <router-link class="btn btn-outline-success item_navAT" to="/Service" :class="{ 'active': currentRoute === '/Service'}">Dịch vụ</router-link>
          </li>
          <li class="item_at">
            <router-link class="btn btn-outline-success item_navAT" to="/Booking" :class="{ 'active': currentRoute === '/Booking'}">Đặt phòng</router-link>
          </li>
        </ul>
        <!-- <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Tìm kiếm" aria-label="Search">
          <button class="find-item btn btn-outline-success" type="submit">Tìm</button>
        </form> -->
      </div>
    </div>
  </nav>
</div>
</template>

<script>
export default {
  name: "MainHeader",
  data() {
    return {
      currentRoute: this.$route.path
    };
  },
  watch: {
    '$route'(to) {
      this.currentRoute = to.path;
    }
  }
};
</script>

<style scoped>

  .item_at{
    margin-left: 10px;
    margin-right: 10px;
  }

  .find-item{
    margin-left: 10px;
    margin-right: 20px;
  }

</style>