var flaghh = 0; //giả sử người dùng chưa nhấn nút nào cả
var arrhh = [];
$(document).ready(function() {
    $("#imghh").change(function(e) {
        console.log("ok");

        var files = e.target.files;
        console.log("ok" + files[0]);

        upload(files, function(res) {
            console.log("ok" + res);
            if (JSON.parse(res).status == true) {
                $(".preview").attr("src", JSON.parse(res).url);
                console.log("ok" + res);
            } else {
                $("#err").html("Error");
            }
        })
    });
    $(".btnthemhh").click(function() {
        $(".btnthemhh").prop("disabled", true);
        $(".btnsuahh").prop("disabled", true); //Mờ
        $(".btnluuhh").prop("disabled", false); //mờ
        $(".txtmahh").val("");
        $(".txttenhh").val("");
        $(".txtgiahh").val("");
        $(".txtgiamgiahh").val("");
        $(".txtmahh").focus();
        flaghh = 1;
        /* 
         */
    })
    $(".btnsuahh").click(function() {
        $(".btnthemhh").prop("disabled", true);
        $(".btnsuahh").prop("disabled", true); //Mờ
        $(".btnluuhh").prop("disabled", false); //mờ

        flaghh = 2;
        /* 
         */
    })
    $(".btnluuhh").click(function() {
        if (flaghh == 1) { //lưu (insert dữ liệu mới)
            var datasend = {
                    mahh: $(".txtmahh").val(),
                    tenhh: $(".txttenhh").val(),
                    gia: $(".txtgiahh").val(),
                    giamgia: $(".txtgiamgiahh").val(),
                    event: "inserthanghoa"
                }
                // event: "inserthanghoa"
            console.log(datasend);
            queryData("php/apihanghoa.php", datasend, function(res) {
                console.log(res)
                if (res.success == 1) {
                    bootbox.alert("Thêm Thành Công");
                    //showDataTableBoMon();
                    // showDataTableBoMonPage(pagecurrent_hh, record);
                } else {
                    bootbox.alert("Thêm không Thành Công");
                }
            });
        } else if (flaghh == 2) { //update
            console.log("update");
            var datasend = {
                mahh: $(".txtmahh").val(),
                tenhh: $(".txttenhh").val(),
                gia: $(".txthh").val(),
                giamgia: $(".txtgiamgiahh").val(),
                event: "updatehanghoa"
            }
            console.log(datasend);
            queryData("php/apihanghoa.php", datasend, function(res) {
                console.log(res)
                if (res.success == 1) {
                    bootbox.alert("Cập nhật Thành Công");
                    // showDataTableBoMon();
                    // showDataTableBoMonPage(pagecurrent_hh, record);
                } else {
                    bootbox.alert("Cập nhật không Thành Công");
                }
            });
        }
    })
    $(".btnlamlaihh").click(function() {
        $(".txtmahh").val("");
        $(".txttenhh").val("");
        $(".txtgiahh").val("");
        $(".txtgiamgiahh").val("");
        flaghh = 0;
        $(".btnthemhh").prop("disabled", false); //sáng
        $(".btnsuahh").prop("disabled", false); //Mờ
        $(".btnluuhh").prop("disabled", true); //mờ
    });
    $(".btnxoahh").click(function() {
        var ma = $(".txtmahh").val();
        bootbox.confirm("Bạn có đồng ý xóa bộ môn:" + ma + " này?", function(result) {
            console.log('This was logged in the callback: ' + result);
            if (result == true) {
                var datasend = {
                    mahh: ma,
                    event: "deletehanghoa"
                }
                queryData("php/apihanghoa.php", datasend, function(res) {
                    console.log(res)
                    if (res.success == 1) {
                        bootbox.alert("Xóa Thành Công");
                        //showDataTableBoMon();
                        showDataTablehhPage(pagecurrent_hh, record);
                    } else {
                        bootbox.alert("Xóa không Thành Công");
                    }
                });
            }
        });
    })
    var pagecurrent_hh = 1;
    $(".btntimhh").click(function() {
        // showDataTableBoMon();
        showDataTablehhPage(pagecurrent_hh, record);
    })
    $(".txttimhh").keyup(function(e) {
        if (e.which == 13) { //13: Enter
            //  showDataTableBoMon();
            showDataTablehhPage(pagecurrent_hh, record);
        }
    })
    $(".addListhh").on('click', '.clickxemhh', function() {
        /* c1
           console.log("da nhan");
           console.log($(this).html());
           console.log($(this).parent().attr("data-mahh"));
           var mahh=$(this).parent().attr("data-mahh");
           var tenhh=$(this).parent().attr("data-tenhh");
           $(".txtmahh").val(mahh);
           $(".txttenhh").val(tenhh);
           $(".btnsuahh").prop("disabled",false);
           */
        //c2
        var vt = $(this).parent().attr("data-vt");
        $(".txtmahh").val(arrhh[vt].mahh);
        $(".txttenhh").val(arrhh[vt].tenhh);
        $(".txtgiahh").val(arrhh[vt].giahh);
        $(".txtgiamgiahh").val(arrhh[vt].giamgiahh);
        $(".btnsuahh").prop("disabled", false);
    });
    $(".addListhh").on('click', '.clickxoahh', function() {
        var vt = $(this).parent().attr("data-vt");
        var ma = arrhh[vt].mahh;
        bootbox.confirm("Bạn có đồng ý xóa hang hoa:" + ma + " này?", function(result) {
            console.log('This was logged in the callback: ' + result);
            if (result == true) {
                var datasend = {
                    mahh: ma,
                    event: "deletehanghoa"
                }
                queryData("php/apihanghoa.php", datasend, function(res) {
                    console.log(res)
                    if (res.success == 1) {
                        bootbox.alert("Xóa Thành Công");
                        // showDataTableBoMon();
                        showDataTablehhPage(pagecurrent_hh, record);

                    } else {
                        bootbox.alert("Xóa không Thành Công");
                    }
                });
            }
        });
    });
    $(".numberpagehh").on('click', 'button', function() {

        pagecurrent_hh = $(this).val();
        showDataTablehhPage($(this).val(), record);
    })
})

function showDataTablehh() {
    var search = $(".txttimhh").val();
    console.log("search=" + search);
    var datasend = {
            search: search,
            event: "getALLDatahanghoa"

        }
        // $(".addListhh").html('<tr><td colspan="4"><img src="images/loading.gif" width="20px" height="20px">Đang tải dữ liệu</td></tr>');

    queryData("php/apihanghoa.php", datasend, function(res) {
        console.log(res)
        var data = res.items;
        if (data.length == 0) {
            $(".addListhh").html('<tr><td colspan="4"><span class="badge bg-danger">Không tìm thấy</span></td></tr>');
        } else {
            arrhh = data;
            var s = '';
            var stt = 1;
            for (var i in data) {
                var d = data[i];
                s = s + ' <tr>' +
                    '<td>' + stt + '</td>' +
                    '<td>' + d.mahh + '</td>' +
                    ' <td>' + d.tenhh + '</td>' +
                    ' <td>' + d.giahh + '</td>' +
                    ' <td>' + d.giamgia + '</td>' +
                    ' <td>' + +'</td>' +
                    '<td data-vt=' + i + ' data-mahh=' + d.mahh + ' data-tenhh="' + d.tenhh + '"><span class="badge bg-danger clickxemhh">' +
                    '<i class="fa fa-eye"></i>Xem</span>&nbsp;<span class="badge bg-danger clickxoahh"><i class="fa fa-trash" aria-hidden="true"></i>&nbsp;Xóa</span></td>' +
                    '</tr>';
                stt++;
            }
            //    console.log(s);
            $(".addListhh").html(s);
        }
    });
}

function showDataTablehhPage(page, record) {
    var search = $(".txttimhh").val();
    console.log("serach=" + search);
    var datasend = {
            page: page,
            record: record,
            search: search,
            event: "gethhPhanTrang"

        }
        // $(".addListhh").html('<tr><td colspan="4"><img src="images/loading.gif" width="20px" height="20px">Đang tải dữ liệu</td></tr>');

    queryData("php/apihanghoa.php", datasend, function(res) {
        console.log(res)
        var data = res.items;
        if (data.length == 0) {
            $(".addListhh").html('<tr><td colspan="4"><span class="badge bg-danger">Không tìm thấy</span></td></tr>');
            $(".numberpagehh").html("");
        } else {
            var stt = 1;
            stt = printSTT(record, res.page);
            arrhh = data;
            var s = '';

            for (var i in data) {
                var d = data[i];
                s = s + ' <tr>' +
                    '<td>' + stt + '</td>' +
                    '<td>' + d.mahh + '</td>' +
                    ' <td>' + d.tenhh + '</td>' +
                    ' <td>' + d.gia + '</td>' +
                    ' <td>' + d.giamgia + '</td>' +
                    ' <td>' + +'</td>' +
                    '<td data-vt=' + i + ' data-mahh=' + d.mahh + ' data-tenhh="' + d.tenhh + '"><span class="badge bg-danger clickxemhh">' +
                    '<i class="fa fa-eye"></i>Xem</span>&nbsp;<span class="badge bg-danger clickxoahh"><i class="fa fa-trash" aria-hidden="true"></i>&nbsp;Xóa</span></td>' +
                    '</tr>';
                stt++;
            }
            //    console.log(s);
            $(".addListhh").html(s);
            buildSlidePage($(".numberpagehh"), 5, res.page, res.totalpage);
        }
    });
}