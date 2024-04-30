<template>
<div class="text-home">
    <div>
        <h3>Để hành trình khám phá Cà Mau thêm trọn vẹn, hãy lựa chọn thật kỹ nơi mà bạn sẽ dừng chân nhé!</h3>
    </div>
    <div class="form-item">
        <form @submit.prevent="submitForm">
        <div>
            <label for="name">Họ và Tên:</label>
            <br>
            <input type="text" id="name" name="name" v-model="name">
        </div>
        <br>
        <div>
            <label for="phone">Số Điện Thoại: </label>
            <br>
            <input type="text" id="phone" name="phone" v-model="phone">
        </div>
        <br>
        <div>
            <label for="email">Email:</label>
            <br>
            <input type="email" id="email" name="email" v-model="email">
        </div>
        <br>
        <div>
            <label for="date">Nhận phòng:</label>
            <br>
            <input type="date" id="checkin" name="checkin" v-model="checkin">
        </div>
        <br>
        <div>
            <label for="date">Trả Phòng:</label>
            <br>
            <input type="date" id="checkout" name="checkout" v-model="checkout">
        </div>
        <br>
        <div>
            <label for="number">Số người: </label>
            <br>
            <input type="number" id="number" name="number" v-model="number">
        </div>
        <br>
        <div>
            <label for="name">Homestay</label>
            <br>
            <select v-model="selectedOption">
                <option value="1">Tư Tị Homestay</option>
                <option value="2">Homestay Ba Sú</option>
                <option value="3">Homestay Rừng Đước</option>
                <option value="4">Con Tôm Eco Homestay</option>
                <option value="5">Đầm Thị Tường Homestay</option>
                <option value="6">Hải Nam Homestay</option>
            </select>
        </div>
        <br>
        <div>
            <!-- <button type="button" @submit="showBooKingMessage">Đặt chỗ</button>
            <div class="notify" v-if="showBookingMessage">
                <p>Cảm ơn bạn đã đặt chỗ! Chúng tôi sẽ sớm liên hệ với bạn để xác nhận.</p>
            </div>             -->
            <div>
              <button type="submit">Đặt chỗ</button>
            </div>
            <div class="notify" v-if="showBookingMessage">
                <p>Cảm ơn bạn đã đặt chỗ! Chúng tôi sẽ sớm liên hệ với bạn để xác nhận.</p>
            </div>
        </div>
        </form>
    </div>
</div> 

</template>

<script>
    export default {
        name: "BookingComponents",
        data() {
            return {
                name: '',
                phone: '',
                email: '',
                checkin: '',
                checkout: '',
                number: '',
                selectedOption: '',
                showBookingMessage: false
            };
        },
        methods: {
            submitForm() {
                if (!this.name || !this.phone || !this.email || !this.checkin || !this.checkout || !this.number || !this.selectedOption) {
                    alert('Vui lòng điền đầy đủ thông tin.');
                }else{
                    this.showBookingMessage = true;
                }
                this.name = '';
                this.phone = '';
                this.email = '';
                this.checkin = '';
                this.checkout = '';
                this.number = '';
                this.selectedOption = '';
            }
        }
    };
</script>

<style>
    @import "../style/style.css";
    
    .form-item {
        width: 600px;
        margin: 0 auto;
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 10px;
        background-color: #fff;
        box-shadow: 0 0 10px rgb(25, 135, 84);
    }

    input {
        width: 100%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        margin-bottom: 10px;
    }
    
    button {
        padding: 10px;
        border-radius: 10px;
        margin-bottom: 10px;
        border: 2px solid #198754;
        color: #198754;
        background-color: white;
        border-radius: 5px !important;
    }

    button:hover {
        background-color: #198754;
        color: #fff;
    }

    .notify {
        text-align: center;
        margin-top: 20px;  
    }

    select {
        width: 560px;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
    }
</style>