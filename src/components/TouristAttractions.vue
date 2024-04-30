<template>
<div class="text-home">
    <h1>Những địa điểm du lịch nổi tiếng ở Cà Mau</h1>
    <P>Cà Mau là một tỉnh ven biển thuộc đồng bằng sông Cửu Long, nổi tiếng với vẻ đẹp hoang sơ, mộc mạc và hệ sinh thái đa dạng. Dưới đây là một số điểm du lịch hấp dẫn ở Cà Mau mà bạn nên khám phá:</P>
    <div>
        <h3 class="text_level1">1. Mũi Cà Mau</h3>
        <p>Đây là điểm cực Nam của Tổ quốc, nơi bạn có thể đặt chân lên mảnh đất cuối cùng của Việt Nam, ngắm nhìn biển trời bao la và cảm nhận sự hùng vĩ của thiên nhiên.</p>
        <p>Nằm cách thành phố Cà Mau khoảng 120km, với 2 giờ đồng hồ đi xe máy, bạn sẽ đến được mũi Cà Mau, mảnh đất nằm nhô ra ở điểm tận cùng phía nam của Tổ quốc, thuộc địa phận xóm Mũi, xã Đất Mũi, huyện Ngọc Hiển.</p>
        <p>Khung cảnh nên thơ của rừng cây và sông nước sẽ mang lại cho bạn cảm giác bình yên. Hệ sinh thái rừng ngập mặn ở đây rất đa dạng và phong phú. Đặc biệt, bạn đừng quên check-in tại cột mốc đánh dấu điểm cực Nam của Tổ Quốc nhé.</p>
        <!-- <div class="row">
            <div class="col-sm-4" >
                <img class="img" src="https://media.loveitopcdn.com/3426/141329-1.jpg" alt="">
            </div>
            <div class="col-sm-4" >
                <img class="img" src="https://www.baolongan.vn/image/news/2019/20191001/images/%C4%91%E1%BA%A5t-m%C5%A9i.jpg" alt="">
            </div>
            <div class="col-sm-4" >
                <img class="img" src="https://datviettour.com.vn/uploads/images/mien-tay/ca-mau/hinh-dai-dien-tour/cot-co-ca-mau-488px.jpg" alt="">
            </div>
        </div> -->
        <div>
            <button @click="showAllImages" v-show="!showImages" class="item_button">Xem Thêm Hình Ảnh Có Liên Quan</button>
            <div class="image-container">
                <div v-for="images in images" v-show="showImages" v-bind:key="images.id" class="image-item col-sm-4">
                    <img :src="images.src" alt="images">
                </div>
            </div>
        </div>
    </div>
    <div>
        <h3 class="text_level1">2. Đầm Thị Trường</h3>
        <p>Đây là đầm nước mặn lớn nhất Cà Mau, nơi bạn có thể tham quan rừng tràm nguyên sinh, đi vỏ lãi len lỏi qua những con rạch nhỏ, và ngắm nhìn hàng ngàn con cò trắng bay lượn trên bầu trời.</p>
        <p>Nằm cách thành phố Cà Mau khoảng 40km, Đầm Thị Tường là một trong những đầm nuôi tôm cá lớn nhất Cà Mau. Đầm Thị Tường là đầm nước tự nhiên có diện tích lớn nhất vùng Đồng bằng sông Cửu Long và được mệnh danh là “biển Hồ giữa đồng bằng”.</p>
        <p>Đầm Thị Tường là nơi sinh sống của các loại thủy sản nước lợ như tôm sú, cua và nhiều loại sinh vật đa dạng khác. Cư dân sinh sống quanh đầm chủ yếu bằng nguồn lợi thủy hải sản khai thác được từ đầm này. Du khách đến đây sẽ được hòa mình vào một cuộc sống bình dị của thiên nhiên và con người nơi đây.</p>
        <!-- <div class="row">
            <div class="col-sm-4" >
                <img class="img" src="https://s3-ap-southeast-1.amazonaws.com/mytourcdn.com/resources/pictures/locations/hms1438784281.jpg" alt="">
            </div>
            <div class="col-sm-4" >
                <img class="img" src="https://awsimages.detik.net.id/customthumb/2016/05/19/1519/104411_wadukcover.jpg?w=780&q=90" alt="">
            </div>
            <div class="col-sm-4" >
                <img class="img" src="https://thamhiemmekong.com/wp-content/uploads/2020/05/damthituong.jpg" alt="">
            </div>
        </div> -->
        <div>
            <button @click="showAllImages" v-show="!showImages" class="item_button">Xem Thêm Hình Ảnh Có Liên Quan</button>
            <div class="image-container">
                <div v-for="images1 in images1" v-show="showImages" v-bind:key="images1.id" class="image-item col-sm-4">
                    <img :src="images1.src" alt="images">
                </div>
            </div>
        </div>
    </div>
    <div>
        <h3 class="text_level1">3. Vườn Quốc Gia Mũi Cà Mau</h3>
        <p>Nơi đây có hệ sinh thái rừng ngập mặn đa dạng với nhiều loài động thực vật quý hiếm. Bạn có thể đi bộ xuyên rừng, tham quan khu bảo tồn chim, và trải nghiệm cuộc sống của người dân địa phương.</p>
        <p>Vườn Quốc gia Mũi Cà Mau, là điểm đến nổi tiếng mang tính địa lý, văn hóa, danh thắng và du lịch sinh thái tiêu biểu của cả nước. Mũi Cà Mau còn là địa danh thiêng liêng trong lòng mỗi người dân Việt Nam, 
        nơi ai cũng muốn một lần đặt chân đến đất mũi thân thương này. Ở vùng đất linh thiêng đó, bạn sẽ được một lần chạm tay vào cột mốc chủ quyền đầy kiêu hãnh, hay đứng trên con tàu biểu tượng hướng thẳng ra biển Đông.</p>
        <!-- <div class="row">
            <div class="col-sm-4" >
                <img class="img" src="https://ik.imagekit.io/tvlk/blog/2023/05/vuon-quoc-gia-mui-ca-mau-4.jpg?tr=dpr-2,w-675" alt="">
            </div>
            <div class="col-sm-4" >
                <img class="img" src="https://th.bing.com/th/id/R.5b914f80285f078da2570a6ea72cc21e?rik=cDXArgCgQdz8iA&riu=http%3a%2f%2fmedia1.nguoiduatin.vn%2fm24%2fupload%2f4-2022%2fimages%2f2022-10-07%2fBat-nguyen-giam-doc-Vuon-Quoc-gia-Mui-Ca-Mau-camau-1665124082-538-width1280height720.jpg&ehk=VJ7CKyMb1YuoLVQavrVlSw1LLpyZdP16UdWUZM9c9WU%3d&risl=&pid=ImgRaw&r=0" alt="">
            </div>
            <div class="col-sm-4" >
                <img class="img" src="https://ipec.com.vn/wp-content/uploads/2020/04/vuon-quoc-gia-mui-ca-mau-1.jpg" alt="">
            </div>
        </div> -->
        <div>
            <button @click="showAllImages" v-show="!showImages" class="item_button">Xem Thêm Hình Ảnh Có Liên Quan</button>
            <div class="image-container">
                <div v-for="images2 in images2" v-show="showImages" v-bind:key="images2.id" class="image-item col-sm-4">
                    <img :src="images2.src" alt="images">
                </div>
            </div>
        </div>
    </div>
    <div>
        <h3 class="text_level1">4. Hòn Đá Bạc</h3>
        <p>Đây là một hòn đảo nhỏ nằm cách bờ biển Cà Mau khoảng 70 km, nổi tiếng với những tảng đá xếp chồng lên nhau tạo nên khung cảnh kỳ thú. Bạn có thể tắm biển, lặn ngắm san hô, và thưởng thức hải sản tươi ngon tại đây. </p>
        <p>Hòn Đá Bạc là một hòn đảo cách thành phố Cà Mau 50 km theo đường thủy. hiện nay Hòn Đá Bạc thu hút nhiều khách du lịch lui tới bởi vẻ đẹp hoang sơ và kỳ thú. Cây cầu nối các hòn đảo để việc di chuyển được dễ dàng, bước trên cây cầu, 
            bạn đã như lạc vào chốn bồng lai tiên cảnh.</p>
        <p>Đây còn là nơi lưu giữ những giá trị lịch sử của dân tộc và được xếp hạng là Di tích Lịch sử Quốc gia.</p>
        <!-- <div class="row">
            <div class="col-sm-4" >
                <img class="img" src="https://thamhiemmekong.com/wp-content/uploads/2020/05/hondabac06.jpg" alt="">
            </div>
            <div class="col-sm-4" >
                <img class="img" src="https://1.bp.blogspot.com/-6H4JMfT34No/U64PelKGTFI/AAAAAAABNRs/nSMTXX33ykg/s1600/Du-lich-hon-da-bac-ca-mau-2014-08.JPG" alt="">
            </div>
            <div class="col-sm-4" >
                <img class="img" src="https://th.bing.com/th/id/R.33ce2ecb36a2b4800e28dc02d59753b8?rik=Eoh%2bjwE9JXTywA&riu=http%3a%2f%2fen.skydoor.net%2fDownload%3fmode%3dphoto%26id%3d3828&ehk=JEpFo0MF7oyIZ8AxYhyfDGxG99ENbucy5NlMBN0Pp20%3d&risl=&pid=ImgRaw&r=0" alt="">
            </div>
        </div> -->
        <div>
            <button @click="showAllImages" v-show="!showImages" class="item_button">Xem Thêm Hình Ảnh Có Liên Quan</button>
            <div class="image-container">
                <div v-for="images3 in images3" v-show="showImages" v-bind:key="images3.id" class="image-item col-sm-4">
                    <img :src="images3.src" alt="images">
                </div>
            </div>
        </div>
    </div>
    <div>
        <h3 class="text_level1">5. Khu Du Lịch Sông Trẹm</h3>
        <p>Đây là khu du lịch sinh thái nổi tiếng ở Cà Mau với nhiều hoạt động thú vị như câu cá sấu, đi xuồng ba lá, và tham quan vườn trái cây.</p>
        <p>Khu Du lịch sinh thái Sông Trẹm là vườn thú bán hoang dã đầu tiên và duy nhất tại đất mũi, nơi đây không chỉ phát triển về du lịch sinh thái mà còn phục vụ cho việc nghiên cứu khoa học về động thực vật. Hiện khu du lịch đang nuôi dưỡng hơn 300 loài động thực vật và nơi đây rất phù hợp với những ai đam mê khám phá thiên nhiên.</p>
        <p>Khu Du lịch sinh thái Sông Trẹm, thuộc Ấp 17, xã Khánh Thuận, huyện U Minh, tỉnh Cà Mau. Cách trung tâm huyện U Minh khoảng 20 km, từ thành phố Cà Mau</p>
        <!-- <div class="row">
            <div class="col-sm-4" >
                <img class="img" src="https://th.bing.com/th/id/R.6934c45b9b686f36755636de6471f04e?rik=QdGtysF58fnhvQ&riu=http%3a%2f%2fchianui.vn%2fwp-content%2fuploads%2f2019%2f06%2fKinh-nghiem-di-du-lich-rung-quoc-gia-U-Minh-Ha-Ca-Mau-compressed.jpg&ehk=oqbgMmn5y%2fK%2bZ636%2fmudmlAN9N6n%2bNN%2ffOwZBckfP7o%3d&risl=&pid=ImgRaw&r=0" alt="">
            </div>
            <div class="col-sm-4" >
                <img class="img" src="https://happyhomecamaus.vn/UploadImages/news/khu-du-lich-song-trem-u-minh-ca-mau/khu-du-lich-song-trem-u-minh-ca-mau-4.jpg" alt="">
            </div>
            <div class="col-sm-4" >
                <img class="img" src="https://1.bp.blogspot.com/-MaAHmjfaYF8/XxLZvb9sXnI/AAAAAAAEeEw/NpBK0a4HHm0h_N9bOJKfLHQshLJwOluNwCLcBGAsYHQ/s1600/khudulichsinhthaisongtrem.jpg" alt="">
            </div>
        </div> -->
        <div>
            <button @click="showAllImages" v-show="!showImages" class="item_button">Xem Thêm Hình Ảnh Có Liên Quan</button>
            <div class="image-container">
                <div v-for="images4 in images4" v-show="showImages" v-bind:key="images4.id" class="image-item col-sm-4">
                    <img :src="images4.src" alt="images">
                </div>
            </div>
        </div>
    </div>
    <div>
        <h3 class="text_level1">6. Rừng Quốc Gia U Minh Hạ</h3>
        <p>Đây là khu rừng tràm nguyên sinh rộng lớn nhất Việt Nam,nơi bạn có thể tham quan rừng tràm trên sông nước,đi bộ xuyên rừng,và khám phá hệ sinh thái đa dạng.</p>
        <p>Rừng quốc gia U Minh được chia thành 2 vùng là thượng và hạ. U Minh thượng thuộc tỉnh Kiên Giang còn rừng U Minh hạ thuộc tỉnh Cà Mau. 
        Rừng quốc gia U Minh hạ có hệ động thực vật rất đặc và phong phú, đa dạng. Ngồi thuyền đi giữa cánh rừng nguyên sơ là một trải nghiệm du khách nên thử.</p>
        <!-- <div class="row">
            <div class="col-sm-4" >
                <img class="img" src="https://tripzone.vn/uploads/202105/20/23/085909---i-quan-s-t-cao-38m-fb.v---n-qu--c-gia-u-minh-ha-.jpg" alt="">
            </div>
            <div class="col-sm-4" >
                <img class="img" src="https://tripzone.vn/uploads/202105/20/23/090001-du-kh-ch-c--th--ch-n-thu--d-ch-v--th-m-quan-b-ng-thuy-n----tham-quan-r-ng-ng-p-m-n.-fb.v---n-qu--c-gia-u-minh-ha-.jpg" alt="">
            </div>
            <div class="col-sm-4" >
                <img class="img" src="https://thamhiemmekong.com/wp-content/uploads/2020/04/runguminhha.jpg" alt="">
            </div>
        </div> -->
        <div>
            <button @click="showAllImages" v-show="!showImages" class="item_button">Xem Thêm Hình Ảnh Có Liên Quan</button>
            <div class="image-container">
                <div v-for="images5 in images5" v-show="showImages" v-bind:key="images5.id" class="image-item col-sm-4">
                    <img :src="images5.src" alt="images">
                </div>
            </div>
        </div>
    </div>
    <div>
        <h3 class="text_level1">7. Đảo Hòn Khoai</h3>
        <p>Đảo Hòn Khoai (hay còn được gọi là hòn Giáng Tiên, hòn Độc Lập) thuộc huyện Ngọc Hiển, tỉnh Cà Mau, nằm cách đất liền 14,6km. Đây được coi là một trong những hòn đảo đẹp nhất cực Nam Tổ quốc.</p>
        <p>Đây là hòn đảo hoang sơ với những bãi biển đẹp,bờ cát trắng mịn và nước biển xanh biếc.Bạn có thể tắm biển,lặn ngắm san hô,tham quan rừng nguyên sinh và khám phá hệ sinh thái đa dạng trên đảo.</p>
        <p>Là một bức tranh thiên nhiên kì vĩ với cánh rừng xanh quanh năm, bãi biển xanh trong và bờ cát trắng mịn. Đây là địa điểm không thể bỏ qua khi du lịch Cà Mau.</p>
        <!-- <div class="row">
            <div class="col-sm-4" >
                <img class="img" src="https://dulichdongque.com/wp-content/uploads/2015/10/du-lich-cum-dao-hon-khoai-ca-mau-7.jpg" alt="">
            </div>
            <div class="col-sm-4" >
                <img class="img" src="https://thamhiemmekong.com/wp-content/uploads/2020/04/honkhoai2.jpg" alt="">
            </div>
            <div class="col-sm-4" >
                <img class="img" src="https://dulichthuduc.com.vn/vnt_upload/news/MIEN-TAY/ca-mau/dao_hon_khoai_du_lich_thu_duc_5.jpg" alt="">
            </div>
        </div> -->
        <div>
            <button @click="showAllImages" v-show="!showImages" class="item_button">Xem Thêm Hình Ảnh Có Liên Quan</button>
            <div class="image-container">
                <div v-for="images6 in images6" v-show="showImages" v-bind:key="images6.id" class="image-item col-sm-4">
                    <img :src="images6.src" alt="images">
                </div>
            </div>
        </div>
    </div>
    <div>
        <h3 class="text_level1">8. Vườn Chim Ngọc Hiển</h3>
        <p>Đây là nơi sinh sống của hàng ngàn con cò trắng và các loài chim quý hiếm khác.Bạn có thể tham quan vườn chim bằng xuồng ba lá,ngắm nhìn những đàn chim bay lượn trên bầu trời và chụp ảnh lưu niệm.</p>
        <p>Cà Mau là nơi duy nhất có sân chim trong thành phố, với nhiều loài chim cò như cò trắng, vạc, le le, vịt nước. “Đất lành chim đậu”, chả vậy mà đây là nơi sinh sống của nhiều loài chim cò khác nhau. 
        Nơi đây thích hợp cho những ai yêu thiên nhiên, động vật.</p>
        <!-- <div class="row">
            <div class="col-sm-4" >
                <img class="img" src="https://www.baocamau.com.vn/image/news/2021/20210611/fckimage/chim-4.jpg" alt="">
            </div>
            <div class="col-sm-4" >
                <img class="img" src="https://th.bing.com/th/id/R.777547a9cb6b3158dd9cdc8c09619b7a?rik=I7zc23nm03d2Dw&riu=http%3a%2f%2fmedia.dulich24.com.vn%2fdiemden%2fsan-chim-ngoc-hien-4971%2fsan-chim-ngoc-hien-3.jpg&ehk=1k9nZmymZYF9Go3bDYLorN2czeK4sL%2bgQYyDoWIi1d8%3d&risl=&pid=ImgRaw&r=0" alt="">
            </div>
            <div class="col-sm-4" >
                <img class="img" src="https://bietthungoctrai.vn/wp-content/uploads/san-chim-ngoc-hien2-700x466-1.jpg" alt="">
            </div>
        </div> -->
        <div>
            <button @click="showAllImages" v-show="!showImages" class="item_button">Xem Thêm Hình Ảnh Có Liên Quan</button>
            <div class="image-container">
                <div v-for="images7 in images7" v-show="showImages" v-bind:key="images7.id" class="image-item col-sm-4">
                    <img :src="images7.src" alt="images">
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "TouristAttractions",
    data() {
        return {
            images: [
                // Hình ảnh Mũi Cà Mau
                {
                    src: "https://media.loveitopcdn.com/3426/141329-1.jpg",
                },
                {
                    src: "https://www.baolongan.vn/image/news/2019/20191001/images/%C4%91%E1%BA%A5t-m%C5%A9i.jpg"
                },
                {
                    src: "https://datviettour.com.vn/uploads/images/mien-tay/ca-mau/hinh-dai-dien-tour/cot-co-ca-mau-488px.jpg"
                },
                {
                    src: "https://thamhiemmekong.com/wp-content/uploads/2020/04/vuonquocgiamuicamau-3.jpg",
                },
                {
                    src: "https://luhanhvietnam.com.vn/du-lich/vnt_upload/news/11_2020/ghe-tham-cong-vien-van-hoa-du-lich-ca-mau.jpg",
                },
                {
                    src: "https://photo.znews.vn/w1920/Uploaded/lcvolbb3/2022_07_13/8_bieu_tuong_cua_khong_lo_o_Dat_Mui.jpg",
                },
                // Có thể thêm các ảnh khác vào đây
            ],
            images1: [ 
                // Hình ảnh Đầm Thị Tường 
                {
                    src: "https://s3-ap-southeast-1.amazonaws.com/mytourcdn.com/resources/pictures/locations/hms1438784281.jpg"
                },
                {
                    src: "https://awsimages.detik.net.id/customthumb/2016/05/19/1519/104411_wadukcover.jpg?w=780&q=90"
                },
                {
                    src: "https://thamhiemmekong.com/wp-content/uploads/2020/05/damthituong.jpg"
                },
                {
                    src: "https://media.gody.vn/images/ca-mau/dam-thi-tuong/12-2016/20161227065624-dam-thi-tuong-ca-mau-gody%20(5).jpg",
                },
                {
                    src: "https://th.bing.com/th/id/OIP.nq9PPzrw2T6V0mi930TBEwHaE8?rs=1&pid=ImgDetMain",
                },
                {
                    src: "https://media.gody.vn/images/ca-mau/dam-thi-tuong/12-2016/20161227065624-dam-thi-tuong-ca-mau-gody%20(4).jpg",
                },
                {
                    src: "https://thamhiemmekong.com/wp-content/uploads/2020/05/dam-thi-tuong.jpg",
                },
                {
                    src: "https://media.gody.vn/images/ca-mau/dam-thi-tuong/12-2016/20161227065625-dam-thi-tuong-ca-mau-gody%20(8).jpg",
                },
                {
                    src: "https://images2.thanhnien.vn/528068263637045248/2023/5/12/dam-thi-tuong-16838592748791296952893.jpg",
                },
                // Có thể thêm các ảnh khác vào đây
            ],
            images2: [ 
                // Hình ảnh Vườn quốc gia mũi Cà Mau 
                {
                    src: "https://ipec.com.vn/wp-content/uploads/2020/04/vuon-quoc-gia-mui-ca-mau-1.jpg"
                },
                {
                    src: "https://th.bing.com/th/id/R.5b914f80285f078da2570a6ea72cc21e?rik=cDXArgCgQdz8iA&riu=http%3a%2f%2fmedia1.nguoiduatin.vn%2fm24%2fupload%2f4-2022%2fimages%2f2022-10-07%2fBat-nguyen-giam-doc-Vuon-Quoc-gia-Mui-Ca-Mau-camau-1665124082-538-width1280height720.jpg&ehk=VJ7CKyMb1YuoLVQavrVlSw1LLpyZdP16UdWUZM9c9WU%3d&risl=&pid=ImgRaw&r=0"
                },
                {
                    src: "https://ik.imagekit.io/tvlk/blog/2023/05/vuon-quoc-gia-mui-ca-mau-4.jpg?tr=dpr-2,w-675"
                },
                {
                    src: "https://cesti.gov.vn/images/cesti/STINET/NAM%202013/Thang%2004-2013/SKKHCN-TN-150413-03-01.jpg",
                },
                {
                    src: "https://cdn.media.dulich24.com.vn/diemden/vuon-quoc-gia-mui-ca-mau-4926/vuon-quoc-gia-mui-ca-mau-3.jpg",
                },
                {
                    src: "https://dulichabc.vn/images/du-lich-xanh-ca-mau.jpg",
                },
                {
                    src: "https://media.vov.vn/sites/default/files/styles/large_watermark/public/2022-10/ca_mau_1.jpg",
                },
                {
                    src: "https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2018/05/uminhha.jpg",
                },
                {
                    src: "https://www.vietourist.com.vn/public/frontend/uploads/kceditor/images/rjifgfn%20jg.jpg",
                },
                // Có thể thêm các ảnh khác vào đây
            ],
            images3: [ 
                // Hình ảnh Hòn đá bạc 
                {
                    src: "https://1.bp.blogspot.com/-6H4JMfT34No/U64PelKGTFI/AAAAAAABNRs/nSMTXX33ykg/s1600/Du-lich-hon-da-bac-ca-mau-2014-08.JPG"
                },
                {
                    src: "https://th.bing.com/th/id/R.33ce2ecb36a2b4800e28dc02d59753b8?rik=Eoh%2bjwE9JXTywA&riu=http%3a%2f%2fen.skydoor.net%2fDownload%3fmode%3dphoto%26id%3d3828&ehk=JEpFo0MF7oyIZ8AxYhyfDGxG99ENbucy5NlMBN0Pp20%3d&risl=&pid=ImgRaw&r=0"
                },
                {
                    src: "https://thamhiemmekong.com/wp-content/uploads/2020/05/hondabac06.jpg"
                },
                {
                    src: "https://bazantravel.com/cdn/medias/uploads/60/60689-hon-da-bac-o-dau-ca-mau-700x700.jpg",
                },
                {
                    src: "https://cdn3.ivivu.com/2023/03/h%C3%B2n-%C4%91%C3%A1-b%E1%BA%A1c-ivivu.jpg",
                },
                {
                    src: "https://top7vietnam.sgtiepthi.vn/wp-content/uploads/2023/09/hon-da-bac-ca-mau-4.jpg",
                },
                {
                    src: "https://vudumuc.com/wp-content/uploads/2022/12/hon-da-bac-o-ca-mau.jpg",
                },
                {
                    src: "https://images.vietnamtourism.gov.vn/vn//images/2023/thang_4/0404.hondabac1.jpg",
                },
                {
                    src: "https://tripzone.vn/uploads/202105/20/18/030559-t--ng---i-b-o-v--an-ninh-t--qu-c.-ngu-n-internet.jpg",
                },
                // Có thể thêm các ảnh khác vào đây
            ],
            images4: [ 
                // Hình ảnh Khu du lịch Sông Trẹm
                {
                    src: "https://th.bing.com/th/id/R.6934c45b9b686f36755636de6471f04e?rik=QdGtysF58fnhvQ&riu=http%3a%2f%2fchianui.vn%2fwp-content%2fuploads%2f2019%2f06%2fKinh-nghiem-di-du-lich-rung-quoc-gia-U-Minh-Ha-Ca-Mau-compressed.jpg&ehk=oqbgMmn5y%2fK%2bZ636%2fmudmlAN9N6n%2bNN%2ffOwZBckfP7o%3d&risl=&pid=ImgRaw&r=0"
                },
                {
                    src: "https://happyhomecamaus.vn/UploadImages/news/khu-du-lich-song-trem-u-minh-ca-mau/khu-du-lich-song-trem-u-minh-ca-mau-4.jpg"
                },
                {
                    src: "https://1.bp.blogspot.com/-MaAHmjfaYF8/XxLZvb9sXnI/AAAAAAAEeEw/NpBK0a4HHm0h_N9bOJKfLHQshLJwOluNwCLcBGAsYHQ/s1600/khudulichsinhthaisongtrem.jpg"
                },
                {
                    src: "https://fileapi.surego.vn/Upload/VietNam/CaMau/Place/Picture/R638346080566835415.png",
                },
                {
                    src: "https://filedulich.surego.vn/Upload/VietNam/CaMau/Place/Picture/R637106325059705482.png",
                },
                {
                    src: "https://luhanhvietnam.com.vn/du-lich/vnt_upload/news/12_2021/khu-du-lich-sinh-thai-song-trem-ba.jpg",
                },
                {
                    src: "https://adminweb.vnpage.vn/DataCustomer/dulichcamau.vn/khachhang/40093/40093-202203040721530.JPG",
                },
                {
                    src: "https://mia.vn/media/uploads/blog-du-lich/khu-du-lich-sinh-thai-song-trem-va-khong-gian-dam-chat-mien-song-nuoc-5-1664639143.jpg",
                },
                {
                    src: "https://luhanhvietnam.com.vn/du-lich/vnt_upload/news/12_2021/khu-du-lich-sinh-thai-song-trem-dam.jpg",
                },
                // Có thể thêm các ảnh khác vào đây
            ],
            images5: [ 
                // Hình ảnh Rừng Quốc Gia U Minh Hạ
                {
                    src: "https://thamhiemmekong.com/wp-content/uploads/2020/04/runguminhha.jpg"
                },
                {
                    src: "https://tripzone.vn/uploads/202105/20/23/090001-du-kh-ch-c--th--ch-n-thu--d-ch-v--th-m-quan-b-ng-thuy-n----tham-quan-r-ng-ng-p-m-n.-fb.v---n-qu--c-gia-u-minh-ha-.jpg"
                },
                {
                    src: "https://tripzone.vn/uploads/202105/20/23/085909---i-quan-s-t-cao-38m-fb.v---n-qu--c-gia-u-minh-ha-.jpg"
                },
                {
                    src: "https://ik.imagekit.io/tvlk/blog/2022/09/kinh-nghiem-du-lich-u-minh-ha-2.jpg?tr=dpr-2,w-675 ",
                },
                {
                    src: "https://dntt.mediacdn.vn/197608888129458176/2022/5/6/anh-03-1651803544891341353972.jpg",
                },
                {
                    src: "https://thamhiemmekong.com/wp-content/uploads/2020/04/vuonquocgiauminhthuong1.jpg",
                },
                // Có thể thêm các ảnh khác vào đây
            ],
            images6: [ 
                // Hình ảnh Đảo Hòn Khoai
                {
                    src: "https://dulichdongque.com/wp-content/uploads/2015/10/du-lich-cum-dao-hon-khoai-ca-mau-7.jpg"
                },
                {
                    src: "https://thamhiemmekong.com/wp-content/uploads/2020/04/honkhoai2.jpg"
                },
                {
                    src: "https://dulichthuduc.com.vn/vnt_upload/news/MIEN-TAY/ca-mau/dao_hon_khoai_du_lich_thu_duc_5.jpg"
                },
                {
                    src: "https://btnmt.1cdn.vn/2020/04/20/photocat1(2).jpg",
                },
                {
                    src: "https://dacsanmuicamau.com/static/team/upload/images/du-lich-ca-mau/dao-hon-khoai/dao-hon-khoai-3.jpg",
                },
                {
                    src: "https://fileapi.surego.vn//Upload/NewsImage/R637115682812300290.png",
                },
                // Có thể thêm các ảnh khác vào đây
            ],
            images7: [ 
                // Hình ảnh Vườn Chim Ngọc Hiển
                {
                    src: "https://bietthungoctrai.vn/wp-content/uploads/san-chim-ngoc-hien2-700x466-1.jpg"
                },
                {
                    src: "https://th.bing.com/th/id/R.777547a9cb6b3158dd9cdc8c09619b7a?rik=I7zc23nm03d2Dw&riu=http%3a%2f%2fmedia.dulich24.com.vn%2fdiemden%2fsan-chim-ngoc-hien-4971%2fsan-chim-ngoc-hien-3.jpg&ehk=1k9nZmymZYF9Go3bDYLorN2czeK4sL%2bgQYyDoWIi1d8%3d&risl=&pid=ImgRaw&r=0"
                },
                {
                    src: "https://www.baocamau.com.vn/image/news/2021/20210611/fckimage/chim-4.jpg"
                },
                {
                    src: "https://www.vietfuntravel.com.vn/image/data/Blog/chia-se/mot-ngay-ghe-tham-vuon-chim-ngoc-hien-ca-mau/mot-ngay-ghe-tham-vuon-chim-ngoc-hien-ca-mau-h7.jpg",
                },
                {
                    src: "https://mia.vn/media/uploads/blog-du-lich/kham-pha-vuon-chim-ca-mau-yen-binh-giua-long-thanh-pho-1664634803.jpg",
                },
                {
                    src: "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2023/2/18/1149274/Vuon-Chim-4.jpg",
                },
                // Có thể thêm các ảnh khác vào đây
            ],
            showImages: true,
        };
    },
    // methods: {
    //     showAllImages() {
    //         this.showImages = true;
    //     }
    // },
}
</script>

<style scoped>
    @import "../style/style.css";

    .image-container {
        display: flex; /* Sử dụng flexbox để căn chỉnh các ảnh */
        flex-wrap: wrap; /* Cho phép các ảnh xuống dòng khi không đủ không gian */
    }
</style>