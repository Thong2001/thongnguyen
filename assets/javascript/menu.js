$(document).ready(function() {
    swapForm("frmsp");
    $(".menukh").click(function() {
        // console.log("menu lop");
        swapForm("frmkh");
        activemenu("menukh");
        // var st = ' <li class="breadcrumb-item"><a href="#" >Danh mục</a></li>' +
        //     ' <li class="breadcrumb-item active">Lớp</li>';
        // console.log(st);
        // $(".breadcrumbcurrent").html(st);
    })
    $(".menudh").click(function() {
            swapForm("frmdh");
            activemenu("menudh");
            // var st = ' <li class="breadcrumb-item"><a href="#" >Danh mục</a></li>' +
            //     ' <li class="breadcrumb-item active">Ngành</li>';
            // $(".breadcrumbcurrent").html(st);
            // showNamBD();
            // showCBBoMon();
            // showDataTableNganhPage(0, record);
        })
        // $(".menusinhvien").click(function() {
        //     swapForm("frmsinhvien");
        //     var st = ' <li class="breadcrumb-item"><a href="#" >Danh mục</a></li>' +
        //         ' <li class="breadcrumb-item active">Sinh Viên</li>';
        //     console.log(st);
        //     $(".breadcrumbcurrent").html(st);
        //     showCBBoMon();
        //     showCBNganhByMaBM("");
        //     showCBKhoa();
        //     showCBChucVu();
        //     showCBLopByMaNganh("");
        //     showDataTableSVPage(0, record);
        //     $(".btnthemsv").prop("disabled", false); //sáng
        //     $(".btnsuasv").prop("disabled", true); //Mờ
        //     $(".btnluusv").prop("disabled", true); //mờ
        // })

    function swapForm(f) {
        $(".frmsp").addClass("is-hidden");
        $(".frmdh").addClass("is-hidden");
        $(".frmkh").addClass("is-hidden");
        $("." + f).removeClass("is-hidden");



    }

    function activemenu(d) {
        $(".menusp").removeClass("is-active");
        $(".menudh").removeClass("is-active");
        $(".menukh").removeClass("is-active");

        $("." + d).addClass("is-active");
    }
    // $(".btnhome").click(function() {
    //     swapForm("frmsinhvien");
    //     // var st = ' <li class="breadcrumb-item"><a href="#" >Danh mục</a></li>' +
    //     //     ' <li class="breadcrumb-item active">Sinh Viên</li>';
    //     // console.log(st);
    //     // $(".breadcrumbcurrent").html(st);
    // });
    $(".menusp").click(function() {
        swapForm("frmsp");
        activemenu("menusp");
        // var st=' <li class="breadcrumb-item"><a href="#" >Danh mục</a></li>'+
        // ' <li class="breadcrumb-item active">Bộ môn</li>';
        // console.log(st);
        //  $(".breadcrumbcurrent").html(st);
        //  $(".btnthembm").prop("disabled",false);//sáng
        //  $(".btnsuabm").prop("disabled",true);//Mờ
        //  $(".btnluubm").prop("disabled",true);//mờ
    });
});