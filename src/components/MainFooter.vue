<template>
<footer class="page-footer orange item_footer">
    <div class="container">
      <ul class="item-text">
        <li>Website: Du Lịch Cà Mau</li>
        <li>Địa chỉ: Cà Mau, Việt Nam</li>
        <li>Liên Hệ: 0961614910</li>
        <li>Email: ahnthhu@gmail.com</li>
      </ul>
    </div>
  </footer>
</template>

<script>
  export default {
      name: "MainFooter",
  };
</script>

<style scoped>
  .item_footer{
    background: #198754;
    /* margin-top: 20px; */
  }

  .container{
    margin-bottom: 20px;
    margin-top: 20px;
    color: white;
  }

  .item-text{
    margin-bottom: 5px;
    margin-top: 5px;
  }
</style>