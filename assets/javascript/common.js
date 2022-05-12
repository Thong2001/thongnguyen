var record = 2;

function queryData(url, dataSend, callback) {

    $.ajax({
        type: 'GET',
        url: url,
        data: dataSend,
        async: true,
        dataType: 'json',
        success: callback
    });
}

function printSTT(record, pageCurr) {
    if ((pageCurr + 1) == 1) {
        return 1;
    } else {
        return record * (pageCurr + 1) - (record - 1);
    }
}

function buildSlidePage(obj, codan, pageActive, totalPage) {
    var html = "";
    pageActive = parseInt(pageActive);
    for (i = 1; i <= codan; i++) {
        if (pageActive - i < 0) break;
        html = '<button type="button" class="btn btn-outline btn-default" value="' + (pageActive - i) + '">' + (pageActive - i + 1) + '</button>' + html;
    }
    if (pageActive > codan) {
        html = '<button type="button" class="btn btn-outline btn-default" value="' + (pageActive - i) + '">...</button>' + html;
    }
    html += '<button type="button" class="btn btn-outline btn-default" style="background-color: #5cb85c" value="' + pageActive + '">' + (pageActive + 1) + '</button>';
    for (i = 1; i <= codan; i++) {
        if (pageActive + i >= totalPage) break;
        html = html + '<button  type="button" class="btn btn-outline btn-default" value="' + (pageActive + i) + '">' + (pageActive + i + 1) + '</button>';
    }
    if (totalPage - pageActive > codan + 1) {
        html = html + '<button type="button" value="' + (pageActive + i) + '" class="btn btn-outline btn-default">...</button>';
    }
    obj.html(html);
}
var upload = function(photo, callback) {

    var formData = new FormData();
    formData.append('photo', photo[0]);

    $.ajax({
        url: 'php/uploadimg.php',
        type: 'POST',
        data: formData,
        async: true,
        xhrFields: {
            withCredentials: true
        },
        processData: false, // tell jQuery not to process the data
        contentType: false, // tell jQuery not to set contentType
        success: callback
    });
};