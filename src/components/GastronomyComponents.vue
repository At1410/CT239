<template>
<div class="text-home">
    <h1 class="h1">Ẩm thực nổi tiếng ở Cà Mau</h1>
    <p>Cà Mau là một tỉnh ven biển thuộc đồng bằng sông Cửu Long, nổi tiếng với vẻ đẹp hoang sơ, mộc mạc và hệ sinh thái đa dạng. 
        Ẩm thực Cà Mau cũng phong phú và đa dạng không kém với nhiều món ăn ngon và độc đáo.</p>
    <p>Dưới đây là một số món ăn nổi tiếng ở Cà Mau mà bạn nên thử:</p>
    <div>
        <h3>1. Cua Cà Mau</h3>
        <p>Cua Cà Mau có nhiều loại khác nhau, nhưng phổ biến nhất là cua xanh và cua gạch. Cua xanh có vỏ màu xanh sẫm, yếm cua màu vàng, thịt chắc và ngọt.</p>
        <p>Cua Cà Mau được đánh giá là một trong những loại cua ngon nhất Việt Nam. </p>
        <p>Cua Cà Mau nổi tiếng với thịt chắc, gạch béo ngậy và vị ngọt đậm đà. Bạn có thể thưởng thức cua Cà Mau theo nhiều cách chế biến khác nhau như: cua rang muối, cua rang me, cua nấu lẩu, cua hấp,...</p>
        <!-- <div class="row">
            <div class="col-sm-4" >
                <img class="img" src="https://buffetposeidon.com/storage/app/media/Kham-pha-am-thuc/10.2022/251022-cua-ca-mau-buffet-poseidon-5.jpg" alt="">
            </div>
            <div class="col-sm-4" >
                <img class="img" src="https://haisanhoanglong.com/wp-content/uploads/2019/05/L%E1%BA%A9u-Cua-C%C3%A0-Mau-Th%C6%A1m-ngon.jpg" alt="">
            </div>
            <div class="col-sm-4" >
                <img class="img" src="https://www.nagacityguide.com/wordpress/wp-content/uploads/2016/01/12679233_1033388536743354_1335967974_n.jpg" alt="">
            </div>
        </div> -->
        <!-- <button class="item_button" type="button">Xem Thêm Hình Ảnh Có Liên Quan</button> -->
        <div>
            <button @click="showAllImages" v-show="!showImages" class="item_button">Xem Thêm Hình Ảnh Có Liên Quan</button>
            <div class="image-container">
                <div v-for="images in images" v-show="showImages" v-bind:key="images.id" class="image-item col-sm-4">
                    <img :src="images.src" alt="images">
                </div>
            </div>
        </div>
        <div>
            <p>Bạn có thể dễ dàng tìm được các mon ăn được chế biến từ Cua Cà Mau ở các quán ăn ở các khu du lịch hay trung tâm thành phố Cà Mau.</p>
            <p>Nếu ở trung tâm thành phố bạn có thể tham khảo các quán sau:</p>
            <ul>
                <li>
                    <a href="https://www.facebook.com/amthuchoangho/?locale=vi_VN" target="_blank">Hải sản Hoàng Hổ:</a> 255 Trần Hưng Đạo, phường 05, Cà Mau
                </li>
                <li>
                    <a href="https://www.facebook.com/nhahanghaisanquatmo/" target="_blank">Hải sản Quạt Mo:</a> 14 - 16 Bùi Thị Trường, Khu 6, Phường 05, Cà Mau
                </li>
                <li>
                    <a href="https://www.facebook.com/p/%E1%BA%A8m-Th%E1%BB%B1c-L%C3%A0ng-X%C6%B0a-100069426756372/?paipv=0&eav=AfYPukThZPEkMg86ButXm5cuxxEfMA-q36Ewns4I13SJgTCcGhv5nTFbcPv-9IsLV5k&_rdr" target="_blank">Hải sản Làng Xưa:</a> 238 Nguyễn Trãi, Cà Mau
                </li>
            </ul>            
        </div>
    </div>
    <div>
        <h3 class="text_level1" >2. Ba Khía</h3>
        <p>Ba khía là một loại cua nhỏ sống ở vùng nước mặn,được người dân Cà Mau chế biến thành nhiều món ăn ngon như:ba khía muối,ba khía rang,ba khía nấu canh chua,...</p>
        <p>Nhắc đến đặc sản Cà Mau, bạn nhất định không nên bỏ qua món mắm ba khía Rạch Gốc.</p>
        <p>Mùa ba khía ngon nhất là vào mùa mưa, từ tháng 5 đến tháng 10 âm lịch. Vào mùa này, ba khía thịt béo, gạch son và có vị mặn đậm đà.</p>
        <!-- <div class="row">
            <div class="col-sm-4" >
                <img class="img" src="https://dacsanmuicamau.com/static/team/upload/images/san-pham/mam-ba-khia/ba-khia-muoi-rach-goc.jpg" alt="">
            </div>
            <div class="col-sm-4" >
                <img class="img" src="https://th.bing.com/th/id/R.a2a16a593352df6d76cf8a1b54dfa996?rik=W1AModh8ZSjbbg&riu=http%3a%2f%2fchodokho.com%2fupload%2fimages%2fmam-ba-khia-rach-goc.jpg&ehk=vrYtbn61zQ%2bxsvjI%2bbjsso2NgdtdfJA1o1bRRLp0ljA%3d&risl=&pid=ImgRaw&r=0" alt="">
            </div>
            <div class="col-sm-4" >
                <img class="img" src="https://cafebiz.cafebizcdn.vn/162123310254002176/2021/6/16/photo-6-16238255419431477147722.jpg" alt="">
            </div>
        </div> -->
        <!-- <button class="item_button" type="button">Xem Thêm Hình Ảnh Có Liên Quan</button> -->
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
        <h3 class="text_level1" >3. Lẫu Mắm</h3>
        <p>Lẩu mắm Cà Mau - Món ngon đậm đà hương vị miền Tây. Lẩu mắm là món ăn đặc sản nổi tiếng của vùng đất Cà Mau, mang đậm hương vị đặc trưng của miền Tây sông nước.</p>
        <p>Món ăn này được chế biến từ mắm cá sặc, một loại mắm đặc trưng của Cà Mau, cùng với các loại hải sản tươi ngon như cá, tôm, mực, cua,... và các loại rau dân dã.</p>
        <!-- <div class="row">
            <div class="col-sm-4" >
                <img class="img" src="https://photo-cms-kienthuc.zadn.vn/zoom/800/Uploaded/hoangthao/2019_06_28/lau_mam_1_KPJB.jpg" alt="">
            </div>
            <div class="col-sm-4" >
                <img class="img" src="https://mtntrip.com/wp-content/uploads/2021/11/vietfun-travel-16056931310821100186612-136-0-1501-2048-crop-1605693421391915769772.jpg" alt="">
            </div>
            <div class="col-sm-4" >
                <img class="img" src="https://cdn.tgdd.vn/Files/2021/08/30/1379043/cach-nau-lau-mam-ca-linh-ngon-dung-chuan-vi-don-gian-tai-nha-202201060142070358.jpeg" alt="">
            </div>
        </div> -->
        <!-- <button class="item_button" type="button">Xem Thêm Hình Ảnh Có Liên Quan</button> -->
        <div>
            <button @click="showAllImages" v-show="!showImages" class="item_button">Xem Thêm Hình Ảnh Có Liên Quan</button>
            <div class="image-container">
                <div v-for="images2 in images2" v-show="showImages" v-bind:key="images2.id" class="image-item col-sm-4">
                    <img :src="images2.src" alt="images">
                </div>
            </div>
        </div>
        <div> 
            <p>Lẫu mắn là một nón ăn rất phổ biến ở Cà Mau, bạn có thể dễ dàng tìm thấy nó ở các nhà hàng miền quê.</p>
            <p>Bạn có thể xem xét các quán ăn hay nhà hàng sau đây để có thể thưởng thức món lẫu mắn tuyệt vời nhất có thể nhé: </p>
            <ul>
                <li>
                    <a href="https://www.facebook.com/amthucnhaque.camau/" target="_blank">Nhà hàng Đồng Quê:</a> 91A Tôn Đức Thắng, Phường 5, Thành phố Cà Mau
                </li>
                <li>
                    <a href="https://www.facebook.com/p/%E1%BA%A8m-Th%E1%BB%B1c-Ph%C6%B0%E1%BB%A3ng-V%C4%A9-100069071506658/" target="_blank">Nhà hàng Phượng Vĩ:</a>  Số 346, đường Phan Ngọc Hiển, phường 9, thành phố Cà Mau
                </li>
                <li>
                    <a href="https://www.facebook.com/cuathuthietcamau/" target="_blank">Nhà hàng Cua thứ thiệt và đặt sản Cà Mau:</a> Số 57, đường Ngô Gia Tự, phường 5, thành phố Cà Mau
                </li>
            </ul>
        </div>
    </div>
    <div>
        <h3 class="text_level1" >4. Bánh Phồng Tôm</h3>
        <p>Bánh phồng tôm Cà Mau là một món ăn đặc sản nổi tiếng của vùng đất Mũi, được du khách yêu thích bởi hương vị thơm ngon, giòn tan và đậm đà hương vị của biển.</p>
        <p>Bánh phồng tôm Cà Mau được làm từ những nguyên liệu đơn giản như thịt tôm tươi, bột năng, bột mì, hành lá, lòng trắng trứng gà, gia vị và ớt tươi xay để tạo màu đỏ cam.</p>
        <p>Bánh phồng tôm Cà Mau là món quà của thiên nhiên ban tặng cho vùng đất Cà Mau. Món ăn này không chỉ là một thức quà vặt ngon miệng mà còn là một nét đẹp văn hóa của người dân Cà Mau.</p>
        <!-- <div class="row">
            <div class="col-sm-4" >
                <img class="img" src="https://thamhiemmekong.com/wp-content/uploads/2022/03/banhphongtomcamau4.jpg" alt="">
            </div>
            <div class="col-sm-4" >
                <img class="img" src="https://file.hstatic.net/1000344757/file/banh_phong_tom_nagi_24ec8694376343e2b82acfe768a94fac_grande.jpg" alt="">
            </div>
            <div class="col-sm-4" >
                <img class="img" src="https://chodokho.com/kcfinder/upload/images/banh%20phong%20tom%20chien.jpg" alt="">
            </div>
        </div> -->
        <!-- <button class="item_button" type="button">Xem Thêm Hình Ảnh Có Liên Quan</button> -->
        <div>
            <button @click="showAllImages" v-show="!showImages" class="item_button">Xem Thêm Hình Ảnh Có Liên Quan</button>
            <div class="image-container">
                <div v-for="images3 in images3" v-show="showImages" v-bind:key="images3.id" class="image-item col-sm-4">
                    <img :src="images3.src" alt="images">
                </div>
            </div>
        </div>
        <div>
            <p>Đến Cà Mau bạn có thể dễ dàng tìm thấy rất nhiều địa điểm bán Bánh Phồng Tôm.</p>
            <p>Bạn có thể tham khảo các trang này nếu muốn thử nhưng chưa có dịp đến Cà Mau: </p>
            <ul>
                <li>
                    <a href="https://dacsanmuicamau.com/banh-phong-tom" target="_blank">Đặt sản Đất Mũi Cà Mau</a>                    
                </li>
                <li>
                    <a href="https://banhphongtomcamau.vn/" target="_blank">Đặt sản Bánh Phồng Tôm Cà Mau SINIFOOD</a>
                </li>
            </ul>
        </div>
    </div>
    <div>
        <h3 class="text_level1" >5. Cá Lóc</h3>
        <p>Cá lóc là một loại cá nước ngọt phổ biến ở Việt Nam. Chúng có thân dài, thon và đầu dẹt. Cá lóc có thể được chế biến thành nhiều món ăn ngon, chẳng hạn như cá lóc nướng trui, cá lóc kho tộ, cá lóc kho chuối, canh chua cá lóc,...</p>
        <p>Cá lóc nướng trui: là món ăn dân dã nhưng rất ngon miệng của người dân Cà Mau.Cá lóc được nướng trên than hồng cho đến khi chín vàng,thịt mềm và thơm lừng.</p>
        <p>Cá lóc kho chuối: Cá kho cùng với chuối xanh, tạo nên hương vị hài hòa, thơm ngon.</p>
        <p>Canh chua cá lóc: Món canh có vị chua thanh, cá lóc dai ngon, ăn cùng với cơm trắng rất đưa cơm.</p>
        <!-- <div class="row">
            <div class="col-sm-4" >
                <img class="img" src="https://baomoinhanh.com/wp-content/uploads/2017/04/ca-loc-nuong-trui-GSV-Travel.jpg" alt="">
            </div>
            <div class="col-sm-4" >
                <img class="img" src="https://cdn-www.vinid.net/60786271-ca-loc-nuong-1.jpg" alt="">
            </div>
            <div class="col-sm-4" >
                <img class="img" src="https://th.bing.com/th/id/OIP.-VwnoPStm7OLGrwR9IDq9QHaEx?w=600&h=387&rs=1&pid=ImgDetMain" alt="">
            </div>
        </div> -->
        <!-- <button class="item_button" type="button">Xem Thêm Hình Ảnh Có Liên Quan</button> -->
        <div>
            <button @click="showAllImages" v-show="!showImages" class="item_button">Xem Thêm Hình Ảnh Có Liên Quan</button>
            <div class="image-container">
                <div v-for="images4 in images4" v-show="showImages" v-bind:key="images4.id" class="image-item col-sm-4">
                    <img :src="images4.src" alt="images">
                </div>
            </div>
        </div>
        <div>
            <p>Cá Lóc là món ăn dân dã, bạn có thể dễ dàng tìm thấy nó ở các khu du lịch hay các quán ăn dân gian.</p>
            <p>Bạn có thể tham khảo các quán ăn này nếu muốn: </p>
            <ul>
                <li>
                    <a href="https://www.facebook.com/amthuchoangho/?locale=vi_VN" target="_blank">Hải sản Hoàng Hổ:</a> 255 Trần Hưng Đạo, phường 05, Cà Mau
                </li>
                <li>
                    <a href="https://www.facebook.com/nhahanghaisanquatmo/" target="_blank">Hải sản Quạt Mo:</a> 14 - 16 Bùi Thị Trường, Khu 6, Phường 05, Cà Mau
                </li>
                <li>
                    <a href="https://www.facebook.com/p/%E1%BA%A8m-Th%E1%BB%B1c-L%C3%A0ng-X%C6%B0a-100069426756372/?paipv=0&eav=AfYPukThZPEkMg86ButXm5cuxxEfMA-q36Ewns4I13SJgTCcGhv5nTFbcPv-9IsLV5k&_rdr" target="_blank">Hải sản Làng Xưa:</a> 238 Nguyễn Trãi, Cà Mau
                </li>
            </ul>
        </div>
    </div>
    <div>
        <h3 class="text_level1" >6. Nhộng Ong</h3>
        <p>Nhộng ong là ấu trùng của ong mật. Chúng có màu trắng ngà, thân mềm và béo ngậy. Nhộng ong được xem là một món ăn đặc sản của vùng đất Cà Mau.</p>
        <p>Nhộng ong có thể chế biến thành nhiều món ngon như gỏi nhộng ong, cháo nhộng ong, nhộng ong xào me, nhộng ong chiên giòn. Trong đó, món gỏi nhộng ong được xem là món ngon nhất và được nhiều người yêu thích.</p>
        <p>Món gỏi nhộng ong rất hiếm vì không phải lúc nào người ta cũng tìm được nguyên liệu để làm món ăn này. Vì vậy nếu có dịp bạn đừng bỏ qua cơ hội thưởng thức món đặc sản này của Cà Mau nhé!</p>
        <!-- <div class="row">
            <div class="col-sm-4" >
                <img class="img" src="https://3vi.vn/wp-content/uploads/2023/01/goi-nhong-ong-rung-u-minh-dac-san-quy-hiem-o-miet-rung-tram-07-1663339282.jpg" alt="">
            </div>
            <div class="col-sm-4" >
                <img class="img" src="https://3vi.vn/wp-content/uploads/2023/01/goi-nhong-ong-rung-u-minh-dac-san-quy-hiem-o-miet-rung-tram-06-1663339282.jpg" alt="">
            </div>
            <div class="col-sm-4" >
                <img class="img" src="https://media.mia.vn/uploads/blog-du-lich/goi-nhong-ong-rung-u-minh-dac-san-quy-hiem-o-miet-rung-tram-04-1663339282.jpg" alt="">
            </div>
        </div> -->
        <!-- <button class="item_button" type="button">Xem Thêm Hình Ảnh Có Liên Quan</button> -->
        <div>
            <button @click="showAllImages" v-show="!showImages" class="item_button">Xem Thêm Hình Ảnh Có Liên Quan</button>
            <div class="image-container">
                <div v-for="images5 in images5" v-show="showImages" v-bind:key="images5.id" class="image-item col-sm-4">
                    <img :src="images5.src" alt="images">
                </div>
            </div>
        </div>
        <div>
            <p>Bởi vì sự quý hiếm của nhọng ong, nên không phải nhà hàng hay quán ăn nào cũng có phụ vụ món ăn này. </p>
            <p>Đay là một trong những nhà hàng có phụ vụ món ăn chế biến từ ong:</p>
            <ul>
                <li>
                    <a href="https://www.facebook.com/amthuchoangho/?locale=vi_VN" target="_blank">Nhà hàng Tân Tân:</a> 153A Nguyễn Đình Chiểu, Thành phố Cà Mau, Cà Mau
                </li>
            </ul>
        </div>
    </div>
    <div>
        <h3 class="text_level1" >7. Óc Len</h3>
        <p>Ốc len là loại nhuyễn thể, sống phổ biến ở rừng ngập mặn và là một món ăn đặc sản, nổi tiếng của tỉnh Cà Mau. Thịt ốc len có hương vị rất đặc biệt, vừa thơm, vừa ngọt, vừa béo.</p>
        <p>Ốc len là một loại ốc nước ngọt, sinh sống phổ biến ở các vùng đầm lầy, ven sông, ven biển thuộc khu vực đồng bằng sông Cửu Long, đặc biệt là ở Cà Mau. Loại ốc này có kích thước nhỏ, chỉ bằng ngón tay cái người lớn, vỏ màu nâu sẫm, có nhiều khía.</p>
        <p>Ốc len là món ăn dân dã nhưng mang đậm hương vị của vùng đất Cà Mau. Ốc len có thể chế biến thành nhiều món ngon như ốc len xào dừa, ốc len xào me, ốc len nướng tiêu, ốc len nấu canh chua…</p>
        <!-- <div class="row">
            <div class="col-sm-4" >
                <img class="img" src="https://bepmina.vn/wp-content/uploads/2022/01/cach-lam-oc-len-xao-dua.jpeg" alt="">
            </div>
            <div class="col-sm-4" >
                <img class="img" src="https://i.ytimg.com/vi/yk3eM_exu6U/maxresdefault.jpg" alt="">
            </div>
            <div class="col-sm-4" >
                <img class="img" src="https://i.pinimg.com/originals/c5/50/af/c550afe9c7fb7190659cc90727e855d5.jpg" alt="">
            </div>
        </div> -->
        <!-- <button class="item_button" type="button">Xem Thêm Hình Ảnh Có Liên Quan</button> -->
        <div>
            <button @click="showAllImages" v-show="!showImages" class="item_button">Xem Thêm Hình Ảnh Có Liên Quan</button>
            <div class="image-container">
                <div v-for="images6 in images6" v-show="showImages" v-bind:key="images6.id" class="image-item col-sm-4">
                    <img :src="images6.src" alt="images">
                </div>
            </div>
        </div>
        <div>
            <p>Ốc lén là một món ăn phổ biến ở Cà Mau ở các quán ăn ở các khu du lịch hay trung tâm thành phố Cà Mau.</p>
            <p>Nếu ở trung tâm thành phố bạn có thể tham khảo các quán sau:</p>
            <ul>
                <li>
                    <a href="https://www.facebook.com/amthuchoangho/?locale=vi_VN" target="_blank">Hải sản Hoàng Hổ:</a> 255 Trần Hưng Đạo, phường 05, Cà Mau
                </li>
                <li>
                    <a href="https://www.facebook.com/nhahanghaisanquatmo/" target="_blank">Hải sản Quạt Mo:</a> 14 - 16 Bùi Thị Trường, Khu 6, Phường 05, Cà Mau
                </li>
                <li>
                    <a href="https://www.facebook.com/p/%E1%BA%A8m-Th%E1%BB%B1c-L%C3%A0ng-X%C6%B0a-100069426756372/?paipv=0&eav=AfYPukThZPEkMg86ButXm5cuxxEfMA-q36Ewns4I13SJgTCcGhv5nTFbcPv-9IsLV5k&_rdr" target="_blank">Hải sản Làng Xưa:</a> 238 Nguyễn Trãi, Cà Mau
                </li>
            </ul>
        </div>
    </div>
    <div>
        <h3 class="text_level1" >8. Tôm Sú</h3>
        <p>Tôm Cà Mau là một trong những đặc sản nổi tiếng nhất của vùng đất Mũi, được du khách yêu thích bởi hương vị thơm ngon, ngọt tự nhiên và giá trị dinh dưỡng cao.</p>
        <p>Cà Mau có điều kiện tự nhiên thuận lợi cho nuôi trồng tôm, với hệ thống sông ngòi, kênh rạch chằng chịt, nguồn nước mặn ngọt đan xen. Nhờ vậy, tôm Cà Mau luôn có chất lượng cao, thịt chắc, dai ngọt và vị mặn đậm đà đặc trưng của biển cả.</p>
        <p>Tôm Cà Mau có thể chế biến thành nhiều món ngon như tôm nướng, tôm hấp, tôm rang muối, tôm nấu canh chua…</p>
        <!-- <div class="row">
            <div class="col-sm-4" >
                <img class="img" src="https://thucthan.com/media/2018/06/tom-nuong-muoi-ot/tom-nuong-muoi-ot.jpg" alt="">
            </div>
            <div class="col-sm-4" >
                <img class="img" src="https://www.cet.edu.vn/wp-content/uploads/2018/03/lam-tom-nuong-muoi-ot.jpg" alt="">
            </div>
            <div class="col-sm-4" >
                <img class="img" src="https://giadinh.tv/wp-content/uploads/2017/04/tom-nuong-bang-lo.jpg" alt="">
            </div>
        </div> -->
        <!-- <button class="item_button" type="button">Xem Thêm Hình Ảnh Có Liên Quan</button> -->
        <div>
            <button @click="showAllImages" v-show="!showImages" class="item_button">Xem Thêm Hình Ảnh Có Liên Quan</button>
            <div class="image-container">
                <div v-for="images7 in images7" v-show="showImages" v-bind:key="images7.id" class="image-item col-sm-4">
                    <img :src="images7.src" alt="images">
                </div>
            </div>
        </div>
        <div>
            <p>Bạn có thể dễ dàng tìm được các mon ăn được chế biến từ Tôm Cà Mau ở các quán ăn ở các khu du lịch hay trung tâm thành phố Cà Mau.</p>
            <p>Nếu ở trung tâm thành phố bạn có thể tham khảo các quán sau:</p>
            <ul>
                <li>
                    <a href="https://www.facebook.com/amthuchoangho/?locale=vi_VN" target="_blank">Hải sản Hoàng Hổ:</a> 255 Trần Hưng Đạo, phường 05, Cà Mau
                </li>
                <li>
                    <a href="https://www.facebook.com/nhahanghaisanquatmo/" target="_blank">Hải sản Quạt Mo:</a> 14 - 16 Bùi Thị Trường, Khu 6, Phường 05, Cà Mau
                </li>
                <li>
                    <a href="https://www.facebook.com/p/%E1%BA%A8m-Th%E1%BB%B1c-L%C3%A0ng-X%C6%B0a-100069426756372/?paipv=0&eav=AfYPukThZPEkMg86ButXm5cuxxEfMA-q36Ewns4I13SJgTCcGhv5nTFbcPv-9IsLV5k&_rdr" target="_blank">Hải sản Làng Xưa:</a> 238 Nguyễn Trãi, Cà Mau
                </li>
            </ul>
        </div>
    </div>
    <div>
        <h3 class="text_level1" >9. Bánh Tầm</h3>
        <p>Bánh tầm bì là món ăn đặc sản nổi tiếng của vùng đất Cà Mau, được du khách yêu thích bởi hương vị thơm ngon, độc đáo và giá cả bình dân.</p>
        <p>Bánh tầm bì là món ăn sáng phổ biến ở Cà Mau,được làm từ bánh tầm,bì heo,thịt nướng,trứng cút và các loại rau thơm.Bánh tầm bì có vị chua ngọt,cay cay và rất kích thích vị giác.</p>
        <!-- <div class="row">
            <div class="col-sm-4" >
                <img class="img" src="https://d13jio720g7qcs.cloudfront.net/images/guides/origin/5ff53ae39c5e4.jpg" alt="">
            </div>
            <div class="col-sm-4" >
                <img class="img" src="https://thamhiemmekong.com/wp-content/uploads/2019/10/banh-tam-bi-can-tho-2.jpg" alt="">
            </div>
            <div class="col-sm-4" >
                <img class="img" src="https://statics.vinpearl.com/banh-tam-bi-can-tho-9_1634807952.png" alt="">
            </div>
        </div> -->
        <!-- <button class="item_button" type="button">Xem Thêm Hình Ảnh Có Liên Quan</button> -->
        <div>
            <button @click="showAllImages" v-show="!showImages" class="item_button">Xem Thêm Hình Ảnh Có Liên Quan</button>
            <div class="image-container">
                <div v-for="images8 in images8" v-show="showImages" v-bind:key="images8.id" class="image-item col-sm-4">
                    <img :src="images8.src" alt="images">
                </div>
            </div>
        </div>
        <div>
            <p>Bánh Tầm là một món đặt sản bình dân ở Cà Mau.</p>
            <p>Để thưởng thức hương vị tuyệt vời của món ăn này bạn có thể thử ở những nơi này:</p>
            <ul>
                <li>
                    <a href="https://media.mia.vn/uploads/blog-du-lich/top-4-quan-ban-banh-tam-cay-ca-mau-da-ngon-lai-con-sieu-re-01-1663660944.jpeg" target="_blank">Cô Lan:</a> Số 15/47, đường Lý Bôn, thành phố Cà Mau, tỉnh Cà Mau
                </li>
                <li>
                    <a href="https://www.facebook.com/p/B%C3%A1nh-t%E1%BA%A7m-cari-cay-Ch%C3%BA-%C4%90%E1%BA%A0O-f4-f9-C%C3%A0-Mau-100057182270632/" target="_blank">Bánh tầm cay Chú Đạo:</a> Số 2A, đường Bùi Thị Xuân, phường 4, thành phố Cà Mau
                </li>
                <li>
                    <a href="http://duli.vn/dia-diem/quan-62-banh-tam-xiu-mai.13364/" target="_blank">Bánh tầm xíu mại 62:</a> Số 62, đường Nguyễn Hữu Lễ, phường 2, thành phố Cà Mau
                </li>
            </ul>
        </div>
    </div>
    <div>
        <h3 class="text_level1" >10. Cá Thòi Lòi</h3>
        <p>Cá thòi Lòi là đặc sản của vùng rừng ngập mặn Cà Mau vừa biết lặn, chạy trên mặt nước, trên cạn và còn biết leo cây. Cá thòi lòi có thân hình nhỏ dài khoảng 10–25 cm, da dày, màu nâu xám, có nhiều đốm đen.</p>
        <p>Cá thòi loì có giá trị dinh dưỡng cao, thịt cá không có xương dăm lại thơm ngon, giàu chất dinh dưỡng, 
            đặc biệt thịt cá không tanh… nên được chế biến ra nhiều món ăn ngon như: nướng muối ớt, kho tiêu, nấu lẩu chua, chiên xù, làm khô.</p>
        <p>Cá thòi lòi là một trong những đặc sản nổi tiếng của vùng đất Cà Mau, được du khách yêu thích bởi hương vị thơm ngon, độc đáo và giá trị dinh dưỡng cao.</p>
        <!-- <div class="row">
            <div class="col-sm-4" >
                <img class="img" src="https://checkintravel.vn/blog/uploads/2021/05/ca_thoi_loi.jpg" alt="">
            </div>
            <div class="col-sm-4" >
                <img class="img" src="https://th.bing.com/th/id/R.c36e96425352f8419e03a2997dfc6534?rik=OLmAnTXPwR5xBg&riu=http%3a%2f%2fchodokho.com%2fupload%2fimages%2fve-ca-mau-thuong-thuc-canh-chua-ca-thoi-loi.jpg&ehk=K06Ly91e1Ngm%2bsz%2bgeVIytPV3Nzz1yldXn9tiixlEvQ%3d&risl=&pid=ImgRaw&r=0" alt="">
            </div>
            <div class="col-sm-4" >
                <img class="img" src="https://th.bing.com/th/id/R.346a138630fca4fbd4d9f4d636c685b9?rik=gIfKq91OfrUIsg&pid=ImgRaw&r=0&sres=1&sresct=1" alt="">
            </div>
        </div> -->
        <!-- <button class="item_button" type="button">Xem Thêm Hình Ảnh Có Liên Quan</button> -->
        <div>
            <button @click="showAllImages" v-show="!showImages" class="item_button">Xem Thêm Hình Ảnh Có Liên Quan</button>
            <div class="image-container">
                <div v-for="images9 in images9" v-show="showImages" v-bind:key="images9.id" class="image-item col-sm-4">
                    <img :src="images9.src" alt="images">
                </div>
            </div>
        </div>
        <div>
            <p>Bạn có thể dễ dàng tìm được các mon ăn được chế biến từ cá Thòi Lòi ở các quán ăn ở các khu du lịch hay trung tâm thành phố Cà Mau.</p>
            <p>Nếu ở trung tâm thành phố bạn có thể tham khảo các quán sau:</p>
            <ul>
                <li>
                    <a href="https://www.facebook.com/amthuchoangho/?locale=vi_VN" target="_blank">Hải sản Hoàng Hổ:</a> 255 Trần Hưng Đạo, phường 05, Cà Mau
                </li>
                <li>
                    <a href="https://www.facebook.com/nhahanghaisanquatmo/" target="_blank">Hải sản Quạt Mo:</a> 14 - 16 Bùi Thị Trường, Khu 6, Phường 05, Cà Mau
                </li>
                <li>
                    <a href="https://www.facebook.com/p/%E1%BA%A8m-Th%E1%BB%B1c-L%C3%A0ng-X%C6%B0a-100069426756372/?paipv=0&eav=AfYPukThZPEkMg86ButXm5cuxxEfMA-q36Ewns4I13SJgTCcGhv5nTFbcPv-9IsLV5k&_rdr" target="_blank">Hải sản Làng Xưa:</a> 238 Nguyễn Trãi, Cà Mau
                </li>
            </ul>            
        </div>
    </div>
    <div>
        <h3 class="text_level1" >11. Sò Huyết</h3>
        <p></p>
        <p>Sò huyết là một loại hải sản, là một đặc sản ở vùng Đất Mũi Cà Mau. Sò huyết sinh sống chủ yếu ở vùng bãi bồi, sông rạch, ao đầm nuôi tôm thuộc các vùng đất ngập mặn ven biển.</p>
        <p>Theo y học cổ truyền, sò huyết có vị ngọt, tính mặn, có tác dụng bổ huyết, kiện vị, chữa chứng huyết hư, thiếu máu. 
            Trong con sò huyết có nguồn chất đạm phong phú, chứa nhiều khoáng chất có giá trị dinh dưỡng cao như can xi, magiê và kẽm giúp bồi bổ và tăng cường sức chịu đựng dẻo dai cho cơ thể con người.</p>
        <p>Sò huyết có thể chế biến thành nhiều món ngon như sò huyết nướng, sò huyết rang muối ớt, sò huyết xào me, sò huyết nấu cháo…</p>
        <!-- <div class="row">
            <div class="col-sm-4" >
                <img class="img" src="https://th.bing.com/th/id/OIP.ScSWnul7r90VgAzq4j295wHaET?rs=1&pid=ImgDetMain" alt="">
            </div>
            <div class="col-sm-4" >
                <img class="img" src="https://yummyday.vn/uploads/images/nuong-so-huyet.jpg" alt="">
            </div>
            <div class="col-sm-4" >
                <img class="img" src="https://29foods.com/media/news/1908_so-huyet-nuong1.jpg" alt="">
            </div>
        </div> -->
        <!-- <button class="item_button" type="button">Xem Thêm Hình Ảnh Có Liên Quan</button> -->
        <div>
            <button @click="showAllImages" v-show="!showImages" class="item_button">Xem Thêm Hình Ảnh Có Liên Quan</button>
            <div class="image-container">
                <div v-for="images10 in images10" v-show="showImages" v-bind:key="images10.id" class="image-item col-sm-4">
                    <img :src="images10.src" alt="images">
                </div>
            </div>
        </div>
        <div>
            <p>Bạn có thể dễ dàng tìm được các mon ăn được chế biến từ Cua Cà Mau ở các quán ăn ở các khu du lịch hay trung tâm thành phố Cà Mau.</p>
            <p>Nếu ở trung tâm thành phố bạn có thể tham khảo các quán sau:</p>
            <ul>
                <li>
                    <a href="https://www.facebook.com/amthuchoangho/?locale=vi_VN" target="_blank">Hải sản Hoàng Hổ:</a> 255 Trần Hưng Đạo, phường 05, Cà Mau
                </li>
                <li>
                    <a href="https://www.facebook.com/nhahanghaisanquatmo/" target="_blank">Hải sản Quạt Mo:</a> 14 - 16 Bùi Thị Trường, Khu 6, Phường 05, Cà Mau
                </li>
                <li>
                    <a href="https://www.facebook.com/p/%E1%BA%A8m-Th%E1%BB%B1c-L%C3%A0ng-X%C6%B0a-100069426756372/?paipv=0&eav=AfYPukThZPEkMg86ButXm5cuxxEfMA-q36Ewns4I13SJgTCcGhv5nTFbcPv-9IsLV5k&_rdr" target="_blank">Hải sản Làng Xưa:</a> 238 Nguyễn Trãi, Cà Mau
                </li>
            </ul>            
        </div>
    </div>
    <div>
        <h3 class="text_level1" >12. Vọp</h3>
        <p>Vọp là một trong những đặc sản nổi tiếng của vùng đất Cà Mau, được du khách yêu thích bởi hương vị thơm ngon, độc đáo và giá trị dinh dưỡng cao.</p>
        <p>Vọp có hình dạng giống con sò, con nghêu nhưng kích thước lớn gấp đôi hoặc gấp ba. Vọp có vỏ dày, màu nâu đen, bên trong có thịt màu trắng ngà, dày và ngọt.</p>
        <p>Thịt vọp ngọt, dai dai, ăn rất ngon, có thể chế biến thành nhiều món ăn hấp dẫn như: vọp hấp gừng, vọp nướng mỡ hành, vọp xào bồn bồn, vọp nấu cháo, vọp kho sả ớt, vọp nấu canh chua,…</p>
        <!-- <div class="row">
            <div class="col-sm-4" >
                <img class="img" src="https://poliva.vn/wp-content/uploads/2019/07/vop-nuong-4.jpg" alt="">
            </div>
            <div class="col-sm-4" >
                <img class="img" src="https://dacsanmuicamau.com/static/team/upload/images/am-thuc/vop-nuong-mo-hanh/vop-nuong-mo-hanh.jpg" alt="">
            </div>
            <div class="col-sm-4" >
                <img class="img" src="https://sanphamdacsan.com/datafiles/3/2019-09-26/62725079-cach-lam-mon-vop-nuong-mo-hanh-dac-san-ca-mau.jpg" alt="">
            </div>
        </div> -->
        <!-- <button class="item_button" type="button">Xem Thêm Hình Ảnh Có Liên Quan</button> -->
        <div>
            <button @click="showAllImages" v-show="!showImages" class="item_button">Xem Thêm Hình Ảnh Có Liên Quan</button>
            <div class="image-container">
                <div v-for="images11 in images11" v-show="showImages" v-bind:key="images11.id" class="image-item col-sm-4">
                    <img :src="images11.src" alt="images">
                </div>
            </div>
        </div>
        <div>
            <p>Bạn có thể dễ dàng tìm được các mon ăn được chế biến từ Cua Cà Mau ở các quán ăn ở các khu du lịch hay trung tâm thành phố Cà Mau.</p>
            <p>Nếu ở trung tâm thành phố bạn có thể tham khảo các quán sau:</p>
            <ul>
                <li>
                    <a href="https://www.facebook.com/amthuchoangho/?locale=vi_VN" target="_blank">Hải sản Hoàng Hổ:</a> 255 Trần Hưng Đạo, phường 05, Cà Mau
                </li>
                <li>
                    <a href="https://www.facebook.com/nhahanghaisanquatmo/" target="_blank">Hải sản Quạt Mo:</a> 14 - 16 Bùi Thị Trường, Khu 6, Phường 05, Cà Mau
                </li>
                <li>
                    <a href="https://www.facebook.com/p/%E1%BA%A8m-Th%E1%BB%B1c-L%C3%A0ng-X%C6%B0a-100069426756372/?paipv=0&eav=AfYPukThZPEkMg86ButXm5cuxxEfMA-q36Ewns4I13SJgTCcGhv5nTFbcPv-9IsLV5k&_rdr" target="_blank">Hải sản Làng Xưa:</a> 238 Nguyễn Trãi, Cà Mau
                </li>
            </ul>            
        </div>
    </div>
    <div>
        <h3 class="text_level1" >13. Tôm Tích</h3>
        <p>Tôm tích, hay còn gọi là bề bề, là một trong những đặc sản nổi tiếng của Cà Mau, được du khách yêu thích bởi hương vị thơm ngon, độc đáo và giá trị dinh dưỡng cao.</p>
        <p>Cà Mau vốn được mệnh danh là miền quê “cá bạc, tôm vàng” nên hầu như loại hải sản nào cũng là đặc sản trứ danh nổi tiếng.</p>
        <p>Riêng tôm tích có thể chế biến thành nhiều món ăn ngon và bổ dưỡng như món tôm tích luộc nước dừa chấm muối tiêu chanh, tôm tích nướng, tôm tích chiên tỏi…</p>
        <!-- <div class="row">
            <div class="col-sm-4" >
                <img class="img" src="https://cdn.tgdd.vn/2021/08/content/1-800x450-92.jpg" alt="">
            </div>
            <div class="col-sm-4" >
                <img class="img" src="https://haisanxanh.com/uploads/images/tom-tich.jpg" alt="">
            </div>
            <div class="col-sm-4" >
                <img class="img" src="https://www.nhahangquangon.com/wp-content/uploads/2018/03/T%C3%B4m-t%C3%ADch-rang-t%E1%BB%8Fi-ngon-tuy%E1%BB%87t44-750x750.jpg" alt="">
            </div>
        </div> -->
        <!-- <button class="item_button" type="button">Xem Thêm Hình Ảnh Có Liên Quan</button> -->
        <div>
            <button @click="showAllImages" v-show="!showImages" class="item_button">Xem Thêm Hình Ảnh Có Liên Quan</button>
            <div class="image-container">
                <div v-for="images12 in images12" v-show="showImages" v-bind:key="images12.id" class="image-item col-sm-4">
                    <img :src="images12.src" alt="images">
                </div>
            </div>
        </div>
        <div>
            <p>Bạn có thể dễ dàng tìm được các mon ăn được chế biến từ Cua Cà Mau ở các quán ăn ở các khu du lịch hay trung tâm thành phố Cà Mau.</p>
            <p>Nếu ở trung tâm thành phố bạn có thể tham khảo các quán sau:</p>
            <ul>
                <li>
                    <a href="https://www.facebook.com/amthuchoangho/?locale=vi_VN" target="_blank">Hải sản Hoàng Hổ:</a> 255 Trần Hưng Đạo, phường 05, Cà Mau
                </li>
                <li>
                    <a href="https://www.facebook.com/nhahanghaisanquatmo/" target="_blank">Hải sản Quạt Mo:</a> 14 - 16 Bùi Thị Trường, Khu 6, Phường 05, Cà Mau
                </li>
                <li>
                    <a href="https://www.facebook.com/p/%E1%BA%A8m-Th%E1%BB%B1c-L%C3%A0ng-X%C6%B0a-100069426756372/?paipv=0&eav=AfYPukThZPEkMg86ButXm5cuxxEfMA-q36Ewns4I13SJgTCcGhv5nTFbcPv-9IsLV5k&_rdr" target="_blank">Hải sản Làng Xưa:</a> 238 Nguyễn Trãi, Cà Mau
                </li>
            </ul>            
        </div>
    </div>
    <div>
        <h3 class="text_level1" >14. Nghêu Khai Long</h3>
        <p>Ngêu Khai Long là một loại ngêu đặc sản nổi tiếng của vùng đất Cà Mau, được du khách yêu thích bởi hương vị thơm ngon, độc đáo và giá trị dinh dưỡng cao.</p>
        <p>Là một trong những đặc sản của vùng biển Khai Long, huyện Ngọc Hiển, nghêu là thực phẩm giàu chất dinh dưỡng nên được dùng làm nguyên liệu để chế biến ra nhiều món ăn ngon. </p>
        <p>Điều khác biệt của nghêu Khai Long là ít ngậm cát, con to, mập ú, nhiều thịt, thịt thơm ngọt. Nghêu hấp sả là món đơn giản, dễ chế biến nhưng vẫn giữ được vị ngọt đặc trưng của nghêu tươi, kết hợp với vị cay của ớt, thơm của sả tạo thành món ăn làm lưu luyến lòng người.</p>
        <!-- <div class="row">
            <div class="col-sm-4" >
                <img class="img" src="https://muicamau.gov.vn/wp-content/uploads/2020/04/ngheu-khai-long-1403-1.jpg" alt="">
            </div>
            <div class="col-sm-4" >
                <img class="img" src="https://toplist.vn/images/800px/oc-bong-saigon-947436.jpg" alt="">
            </div>
            <div class="col-sm-4" >
                <img class="img" src="https://daynauan.info.vn/wp-content/uploads/2019/05/bay-ngheu-hap-thai-len-dia.jpg" alt="">
            </div>
        </div> -->
        <!-- <button class="item_button" type="button">Xem Thêm Hình Ảnh Có Liên Quan</button> -->
        <div>
            <button @click="showAllImages" v-show="!showImages" class="item_button">Xem Thêm Hình Ảnh Có Liên Quan</button>
            <div class="image-container">
                <div v-for="images13 in images13" v-show="showImages" v-bind:key="images13.id" class="image-item col-sm-4">
                    <img :src="images13.src" alt="images">
                </div>
            </div>
        </div>
        <div>
            <p>Bạn có thể dễ dàng tìm được các mon ăn được chế biến từ Cua Cà Mau ở các quán ăn ở các khu du lịch hay trung tâm thành phố Cà Mau.</p>
            <p>Nếu ở trung tâm thành phố bạn có thể tham khảo các quán sau:</p>
            <ul>
                <li>
                    <a href="https://www.facebook.com/amthuchoangho/?locale=vi_VN" target="_blank">Hải sản Hoàng Hổ:</a> 255 Trần Hưng Đạo, phường 05, Cà Mau
                </li>
                <li>
                    <a href="https://www.facebook.com/nhahanghaisanquatmo/" target="_blank">Hải sản Quạt Mo:</a> 14 - 16 Bùi Thị Trường, Khu 6, Phường 05, Cà Mau
                </li>
                <li>
                    <a href="https://www.facebook.com/p/%E1%BA%A8m-Th%E1%BB%B1c-L%C3%A0ng-X%C6%B0a-100069426756372/?paipv=0&eav=AfYPukThZPEkMg86ButXm5cuxxEfMA-q36Ewns4I13SJgTCcGhv5nTFbcPv-9IsLV5k&_rdr" target="_blank">Hải sản Làng Xưa:</a> 238 Nguyễn Trãi, Cà Mau
                </li>
            </ul>            
        </div>
    </div>
</div>
    
</template>

<script>
export default {
    name: "GastronomyComponents",
    data() {
        return {
            images: [
                // Cua Cà Mau
                {
                    src: "https://buffetposeidon.com/storage/app/media/Kham-pha-am-thuc/10.2022/251022-cua-ca-mau-buffet-poseidon-5.jpg"
                },
                {
                    src: "https://haisanhoanglong.com/wp-content/uploads/2019/05/L%E1%BA%A9u-Cua-C%C3%A0-Mau-Th%C6%A1m-ngon.jpg"
                },
                {
                    src: "https://www.nagacityguide.com/wordpress/wp-content/uploads/2016/01/12679233_1033388536743354_1335967974_n.jpg"
                },
                {
                    src: "https://haisan.online/wp-content/uploads/2021/12/cua-bien-lam-mon-gi-ngon-30.jpg"
                },
                {
                    src: "https://monngonmoingay.net.vn/wp-content/uploads/2021/01/nhung-mon-ngon-tu-cua-bien-12.jpg"
                },
                {
                    src: "https://canghaisan.com/wp-content/uploads/2020/10/45-1.jpg"
                },
            ],
            images1: [
                // Ba Khía
                {
                    src: "https://food.com.vn/upload/cach-lam-ba-khia-rang-muoi.jpg"
                },
                {
                    src: "https://th.bing.com/th/id/R.a2a16a593352df6d76cf8a1b54dfa996?rik=W1AModh8ZSjbbg&riu=http%3a%2f%2fchodokho.com%2fupload%2fimages%2fmam-ba-khia-rach-goc.jpg&ehk=vrYtbn61zQ%2bxsvjI%2bbjsso2NgdtdfJA1o1bRRLp0ljA%3d&risl=&pid=ImgRaw&r=0"
                },
                {
                    src: "https://cafebiz.cafebizcdn.vn/162123310254002176/2021/6/16/photo-6-16238255419431477147722.jpg"
                },
                {
                    src: "https://bepnha.kingfoodmart.com/wp-content/uploads/2021/11/cach-lam-goi-dju-dju-ba-khia-mon-nhau-139919183996.jpg"
                },
                {
                    src: "https://cotucamau.com/wp-content/uploads/2023/05/ba-khia-muoi-ca-mau.png"
                },
                {
                    src: "https://phichatphac.com/wp-content/uploads/2023/03/ba_khia_la_con_gi_5-600x400.jpg"
                },
            ],
            images2: [
                // Lẫu Mắm
                {
                    src: "https://cdn.tgdd.vn/Files/2021/08/30/1379043/cach-nau-lau-mam-ca-linh-ngon-dung-chuan-vi-don-gian-tai-nha-202201060142070358.jpeg"
                },
                {
                    src: "https://mtntrip.com/wp-content/uploads/2021/11/vietfun-travel-16056931310821100186612-136-0-1501-2048-crop-1605693421391915769772.jpg"
                },
                {
                    src: "https://photo-cms-kienthuc.zadn.vn/zoom/800/Uploaded/hoangthao/2019_06_28/lau_mam_1_KPJB.jpg"
                },
                {
                    src: "https://mia.vn/media/uploads/blog-du-lich/lau-mam-u-minh-vang-danh-dac-san-mien-dat-bun-xu-mui-01-1663704486.jpeg"
                },
                {
                    src: "https://daubepgiadinh.vn/wp-content/uploads/2018/01/lau-mam-ca-linh.jpg"
                },
                {
                    src: "https://cdn.alongwalk.info/vn/wp-content/uploads/2022/04/13194127/image-cach-nau-lau-mam-mien-tay-que-ngoai-164982848733254.jpg"
                },
            ],
            images3: [
                // Bánh Phồng Tôm
                {
                    src: "https://chodokho.com/kcfinder/upload/images/banh%20phong%20tom%20chien.jpg"
                },
                {
                    src: "https://file.hstatic.net/1000344757/file/banh_phong_tom_nagi_24ec8694376343e2b82acfe768a94fac_grande.jpg"
                },
                {
                    src: "https://thamhiemmekong.com/wp-content/uploads/2022/03/banhphongtomcamau4.jpg"
                },
                {
                    src: "https://danviet.mediacdn.vn/296231569849192448/2021/12/15/banh-phong-tom-1639530703275-16395307039031969110725.jpg"
                },
                {
                    src: "https://lh6.googleusercontent.com/proxy/g4b8PGJL9qla9WaG-3sj0oNPneIGF5s9EccMRXPtErhmgpymYEoCWy-THb4wC6vrWEMQN0zNfqqKSY1PdCwdwZK_Q1Z2cNy2I2gUWRI4IQ"
                },
                {
                    src: "https://salt.tikicdn.com/cache/w1200/ts/product/f5/09/17/a4b3a3f660e19b5c4e924dcd53e76e54.jpg"
                },
            ],
            images4: [
                // Cá Lóc
                {
                    src: "https://baomoinhanh.com/wp-content/uploads/2017/04/ca-loc-nuong-trui-GSV-Travel.jpg"
                },
                {
                    src: "https://saithanhfoods.com/wp-content/uploads/2022/01/ca-loc-lam-mon-gi-ngon-1.jpg"
                },
                {
                    src: "https://2sao.vietnamnetjsc.vn/images/2018/01/03/14/08/canh-chua-ca-loc.jpg"
                },
                {
                    src: "https://cdn.tgdd.vn/2020/09/CookRecipe/Avatar/1200cn1.jpg"
                },
                {
                    src: "https://images.fpt.shop/unsafe/filters:quality(90)/fptshop.com.vn/uploads/images/tin-tuc/173409/Originals/ca-loc-lam-gi-ngon-6.jpg"
                },
                {
                    src: "https://cdn.tgdd.vn/Files/2021/10/05/1387987/tong-hop-cac-mon-ca-loc-kho-dam-chat-mien-que-khong-nen-bo-lo-202110051607189411.jpg"
                },
            ],
            images5: [
                // Nhọng ông
                {
                    src: "https://3vi.vn/wp-content/uploads/2023/01/goi-nhong-ong-rung-u-minh-dac-san-quy-hiem-o-miet-rung-tram-07-1663339282.jpg"
                },
                {
                    src: "https://cdn.sforum.vn/sforum/wp-content/uploads/2023/08/nhong-ong-lam-mon-gi-ngon-1.jpg"
                },
                {
                    src: "https://cdn.sforum.vn/sforum/wp-content/uploads/2023/08/nhong-ong-lam-mon-gi-ngon-3.jpg"
                },
                {
                    src: "https://www.yenbai.gov.vn/lehoimuonglomcc/noidung/tintuc/PublishingImages/Chuyenmuc2lehoi/amthuc/nh%C3%B4ngng.png"
                },
                {
                    src: "https://cdn.sforum.vn/sforum/wp-content/uploads/2023/08/nhong-ong-lam-mon-gi-ngon-6.jpg"
                },
                {
                    src: "https://cdn.tgdd.vn/Files/2021/07/19/1369185/cach-lam-mon-nhong-xao-bong-he-thom-ngon-bo-duong-202201070955279143.jpg"
                },
            ],
            images6:[
                // Ốc Len
                {
                    src: "https://i.pinimg.com/originals/c5/50/af/c550afe9c7fb7190659cc90727e855d5.jpg"
                },
                {
                    src: "https://cdn.tgdd.vn/2020/07/CookRecipe/Avatar/oc-len-xao-sa-ot-thumbnail.jpg"
                },
                {
                    src: "https://haisantrungnam.vn/wp-content/uploads/2020/10/8-mon-ngon-sat-thu-tu-oc-len-3.jpg"
                },
                {
                    src: "https://cdn.tgdd.vn/Files/2021/07/31/1372103/cach-lam-oc-len-xao-sa-ot-thom-cay-beo-ngay-202107311800301958.jpg"
                },
                {
                    src: "https://cdn-img-v2.webbnc.net/uploadv2/web/16/16905/media/2021/09/07/08/16/1631016409_oc-len-xao-dua.jpg"
                },
                {
                    src: "https://cdn-img-v2.webbnc.net/uploadv2/web/16/16905/media/2021/09/07/08/20/1631016628_oc-len-xao-sa-ot.jpg"
                },
            ],
            images7: [
                // Tôm
                {
                    src: "https://giadinh.tv/wp-content/uploads/2017/04/tom-nuong-bang-lo.jpg"
                },
                {
                    src: "https://thucthan.com/media/2018/06/tom-nuong-muoi-ot/tom-nuong-muoi-ot.jpg"
                },
                {
                    src: "https://icdn.24h.com.vn/upload/1-2023/images/2023-02-20/10-mon-ngon-tu-tom-de-gay-nghien-uoc-gi-biet-som-hon-1-1676857273-337-width740height500.jpeg"
                },
                {
                    src: "https://cdn.tgdd.vn/Files/2018/12/31/1141695/cung-lam-tom-su-hap-bia-thom-lung-cho-bua-tiec-ngay-xuan-202109221602312506.jpg"
                },
                {
                    src: "https://cdn.pastaxi-manager.onepas.vn/content/uploads/articles/anhntn/New%20folder%20(11)/6-mon-ngon-che-bien-tu-tom-6.jpg"
                },
                {
                    src: "https://haisanxanh.com/uploads/images/mon-tom-su-sot-ca-chua.jpg"
                },
            ],
            images8: [
                // Bánh tầm
                {
                    src: "https://images2.thanhnien.vn/528068263637045248/2023/7/11/c7efb8f2e41934476d08-16890549312711841282932.jpg"
                },
                {
                    src: "https://statics.vinpearl.com/banh-tam-bi-can-tho-9_1634807952.png"
                },
                {
                    src: "https://thamhiemmekong.com/wp-content/uploads/2019/10/banh-tam-bi-can-tho-2.jpg" 
                },
                {
                    src: "https://vnn-imgs-a1.vgcloud.vn/icdn.dantri.com.vn/2021/06/13/1009888396796966325878161108822969495937664n-1623556540796.jpg"
                },
                {
                    src: "https://media-cdn-v2.laodong.vn/storage/newsportal/2023/7/15/1216925/275139146_2477317185.jpg"
                },
                {
                    src: "https://afamilycdn.com/zoom/700_438/150157425591193600/2022/9/7/avatar1662526493390-16625264947501004784710-0-0-272-520-crop-16625276045471661522980.png"
                },
            ],
            images9: [
                // Cá Thòi Lòi
                {
                    src: "https://th.bing.com/th/id/R.c36e96425352f8419e03a2997dfc6534?rik=OLmAnTXPwR5xBg&riu=http%3a%2f%2fchodokho.com%2fupload%2fimages%2fve-ca-mau-thuong-thuc-canh-chua-ca-thoi-loi.jpg&ehk=K06Ly91e1Ngm%2bsz%2bgeVIytPV3Nzz1yldXn9tiixlEvQ%3d&risl=&pid=ImgRaw&r=0"
                },
                {
                    src: "https://checkintravel.vn/blog/uploads/2021/05/ca_thoi_loi.jpg"
                },
                {
                    src: "https://nld.mediacdn.vn/zoom/594_371/2020/12/3/11-anh-phu-1607006898111672161396.jpg"
                },
                {
                    src: "https://dacsanmuicamau.com/static/team/upload/images/am-thuc/mon-ngon-ca-thoi-loi/ca-thoi-loi-kho-tieu.jpg"
                },
                {
                    src: "https://thegioiamthuc.com/wp-content/uploads/2018/05/ca-thoi-loi-kho-tieu.jpg"
                },
                {
                    src: "https://cdn.tgdd.vn/2021/07/CookProductThumb/tv-620x620-15.jpg"
                },
            ],
            images10: [
                // Sò huyết
                {
                    src: "https://yummyday.vn/uploads/images/nuong-so-huyet.jpg"
                },
                {
                    src: "https://th.bing.com/th/id/OIP.ScSWnul7r90VgAzq4j295wHaET?rs=1&pid=ImgDetMain"
                },
                {
                    src: "https://dulichdaocatba.com/view-660/at_mon-ngon-tu-so-huyet-cat-ba_ee822831587ce597aa24af589ba3f183.jpg"
                },
                {
                    src: "https://hungtruongsa.vn/wp-content/uploads/2023/11/so-huyet-hap-sa.jpg"
                },
                {
                    src: "https://images.fpt.shop/unsafe/filters:quality(90)/fptshop.com.vn/uploads/images/tin-tuc/163258/Originals/so-huyet-chay-toi.jpg"
                },
                {
                    src: "https://cdn.tgdd.vn/2020/06/CookProduct/Untitled-2-1200x676-1.jpg"
                },
            ],
            images11: [
                // Vọp
                {
                    src: "https://poliva.vn/wp-content/uploads/2019/07/vop-nuong-4.jpg"
                },
                {
                    src: "https://sanphamdacsan.com/datafiles/3/2019-09-26/62725079-cach-lam-mon-vop-nuong-mo-hanh-dac-san-ca-mau.jpg"
                },
                {
                    src: "https://www.camau.gov.vn/wps/wcm/connect/5aea8ebf-7363-405e-8ecc-7df763c6d9cd/1/sdgdg1.jpg?MOD=AJPERES&CVID="
                },
                {
                    src: "https://img.tinbaihay.net/ThumbImages/01/7mon/7-mon-ngon-tu-vop-ban-thu-chua-327_450.jpg"
                },
                {
                    src: "https://nld.mediacdn.vn/2019/3/13/photo-1-15524691028511258639408.jpg"
                },
                {
                    src: "https://cdn.eva.vn/upload/3-2021/images/2021-09-22/vop-nuong-ca-mau-ngon-re-o-quan-257cm-98cfc3-1632307756-188-width500height380.jpg"
                },
            ],
            images12: [
                // Tôm tích
                {
                    src: "https://www.nhahangquangon.com/wp-content/uploads/2018/03/T%C3%B4m-t%C3%ADch-rang-t%E1%BB%8Fi-ngon-tuy%E1%BB%87t44-750x750.jpg"
                },
                {
                    src: "https://haisanxanh.com/uploads/images/tom-tich.jpg"
                },
                {
                    src: "https://cdn.tgdd.vn/2021/08/content/1-800x450-92.jpg"
                },
                {
                    src: "https://bepma5.vn/wp-content/uploads/2023/02/z4123700172162_4acdf1c1b78fc0cd65b73f6b1f735fc9.jpg"
                },
                {
                    src: "https://giangghe.com/upload/news/tom-tich-chay-toi-3316.jpg"
                },
                {
                    src: "https://afamilycdn.com/zoom/640_400/2018/11/3/be-be-xao-ngong-toi-6-15412177299861441024030-45-0-720-1080-crop-1541218004515139500086.jpg"
                },
            ],
            images13: [
                // Nghêu
                {
                    src: "https://toplist.vn/images/800px/oc-bong-saigon-947436.jpg"
                },
                {
                    src: "https://cdn.tgdd.vn/2021/02/CookRecipe/Avatar/ngheu-xao-sa-te-thumbnail.jpg"
                },
                {
                    src: "https://cdn.tgdd.vn/Files/2020/12/10/1312847/10-mon-an-ngon-tu-ngheu-thom-ngon-hap-dan-de-lam-de-ban-tro-tai-202012101743327867.jpg"
                },
                {
                    src: "https://daynauan.info.vn/wp-content/uploads/2019/05/bay-ngheu-hap-thai-len-dia.jpg"
                },
                {
                    src:"https://y5kbp0ifnvobj.vcdn.cloud/uploads/filecloud/2020/June/23/5885-513511592907711-1592907711.jpg"
                },
                {
                    src: "https://file.hstatic.net/1000030244/article/ngheu-hap-kieu-thai-1_dc89550635404156bbdcec0639cf74bd.jpg"
                },
            ],

            showImages: true,
        }
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

    .h1{
        margin-top: 10px;
        margin-bottom: 10px;
    }

    .image-container {
        display: flex; /* Sử dụng flexbox để căn chỉnh các ảnh */
        flex-wrap: wrap; /* Cho phép các ảnh xuống dòng khi không đủ không gian */
    }

</style>