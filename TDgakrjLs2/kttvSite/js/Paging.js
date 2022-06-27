function startTime() {
    var today = new Date();
    var day = today.getDay();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    var days = new Array("C.Nhật", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7");
    m = checkTime(m);
    s = checkTime(s);
    if (mm < 10) { mm = "0" + mm }
    if (dd < 10) { dd = "0" + dd }
    $("#tdate_info").html(days[day] + ", " + dd + "/" + mm + "/" + yyyy + " | " + h + ":" + m + ":" + s);
    var t = setTimeout(startTime, 1000);
}


function Trim(text) { return (text || "").replace(/^\s+|\s+$/g, ""); }
function CheckValue(o) { if (Trim(o) == 'Tìm kiếm' || Trim(o) == '') { return false; } else { return true; } }
function Search(s) { if (CheckValue(s) == true) { var r = '' + urlsite + '/vi-VN/1/Search.html?s='.concat(s) + '&pageindex=1'; window.location.href = r; } }
function clickButton(e, buttonid) { var evt = e ? e : window.event; var bt = document.getElementById(buttonid); if (bt) { if (evt.keyCode == 13) { bt.onclick(); return false; } } }

function PagingHPCLTD(_pageindex, _totalrecord, link, page)
{
    var _Calc = parseFloat(_totalrecord) / parseFloat(page);   
    var _CalcRound = eval(Math.round(_Calc));   
    var _totalPages = 0;
    if (_Calc > _CalcRound)
    {
        _totalPages = parseInt(_CalcRound) + 1;
    }
    else if (_CalcRound > _Calc)
    {
        _totalPages = parseInt(_Calc) + 1;
    }
    else if (parseInt(_Calc) > 1) _totalPages = parseInt(_Calc);

    var list = $("#pagenav").append('<ul class="uk-pagination uk-flex-center" uk-margin></ul>').find('ul');
    if (_totalPages >= 1)
        //list.append("<li><span>Trang: " + _pageindex + "/" + _totalPages + "</span></li>");        
    if (_totalPages <= 5)
    {        
        if (_totalPages > 1)
        {
            for (var i = 1; i <= parseInt(_totalPages) ; i++) {
                if (i == parseInt(_pageindex))
                    list.append("<li class=\"act-paging\"><span>" + i + "</span></li>");
                else
                    list.append("<li><a href=\"" + link + "" + i + "\">" + i + "</a></li>");
            }            
            if (parseFloat(_pageindex) < parseFloat(_totalPages))
            {
                list.append("<li><a href=\"" + link + "" + (parseFloat(_pageindex) + 1) + "\"> &gt; </a></li> ");
            }
            else return;
        }        
    }
    else
    {
        
        var lowerBound = (parseInt(_pageindex) - 2);
        var upperBound = (parseInt(_pageindex) + 3);
        if (parseInt(lowerBound) <= 0)
            lowerBound = 1;
        

        if (parseInt(_pageindex) == 0) {
            for (var i = 1; i <= 5; i++) {
                if (i == parseInt(_pageindex))
                    list.append("<li class=\"act-paging\"><span>" + i + "</span></li>");
                else
                    list.append("<li><a href=\"" + link + "" + i + "\">" + i + "</a></li>");
            }            
            list.append("<li><a  href=\"" + link + "" + (parseFloat(_pageindex) + 1) + "\"> &gt; </a></li> ");            
            list.append("<li class=\"uk-disabled\">...</li>");
            list.append("<li><a href=\"" + link + "" + parseFloat(_totalPages) + "\"> &gt;&gt; </a></li> ");
        }        
        else if (parseInt(_pageindex) == 1)
        {            
            for (var i = 1; i <= (parseInt(_pageindex) + 4) ; i++)
            {                
                if (i == parseInt(_pageindex))
                    list.append("<li class=\"act-paging\"><span>" + i + "</span></li>");
                else
                    list.append("<li><a href=\"" + link + "" + i + "\">" + i + "</a></li>");
            }           
            list.append("<li><a  href=\"" + link + "" + (parseFloat(_pageindex) + 1) + "\"> &gt; </a></li> ");            
            list.append("<li class=\"uk-disabled\">...</li>");
            list.append("<li><a href=\"" + link + "" + parseFloat(_totalPages) + "\"> &gt;&gt; </a></li> ");
        }           
        else if (parseInt(_pageindex) < parseInt(_totalPages) - 2)
        {            
            list.append("<li><a  href=\"" + link + "1\"> &lt;&lt; </a></li> ");
            list.append("<li class=\"uk-disabled\">...</li>");
            list.append("<li><a  href=\"" + link + "" + (parseFloat(_pageindex) - 1) + "\"> &lt; </a></li> ");
            for (lowerBound; lowerBound < (parseInt(_pageindex) + 3) ; lowerBound++)
            {
                if (lowerBound == parseInt(_pageindex))
                    list.append("<li class=\"act-paging\"><span>" + lowerBound + "</span></li>");
                else
                    list.append("<li><a href=\"" + link + "" + lowerBound + "\">" + lowerBound + "</a></li>");
            }           
            list.append("<li><a  href=\"" + link + "" + (parseFloat(_pageindex) + 1) + "\"> &gt; </a></li> ");            
            list.append("<li>...</li>");
            list.append("<li><a  href=\"" + link + "" + parseFloat(_totalPages) + "\"> &gt;&gt; </a></li> ");
        }            
        else if (parseInt(_pageindex) == (parseInt(_totalPages) - 2))
        {
            var n = parseInt(_totalPages) - 5;           
            list.append("<li><a  href=\"" + link + "1\"> &lt;&lt; </a></li> ");
            list.append("<li class=\"uk-disabled\">...</li>");
            list.append("<li><a  href=\"" + link + "" + (parseFloat(_pageindex) - 1) + "\"> &lt; </a></li> ");
            for (n; n < (parseInt(_pageindex) + 2) ; n++)
            {
                if (n == parseInt(_pageindex))
                    list.append("<li class=\"act-paging\"><span>" + n + "</span></li>");
                else
                    list.append("<li><a href=\"" + link + "" + n + "\">" + n + "</a></li>");
            }            
            list.append("<li><a  href=\"" + link + "" + (parseFloat(_pageindex) + 1) + "\"> &gt; </a></li> ");
            list.append("<li class=\"uk-disabled\">...</li>");
            list.append("<li><a  href=\"" + link + "" + parseFloat(_totalPages) + "\"> &gt;&gt; </a></li> ");
        }
        else if (parseInt(_pageindex) == (parseInt(_totalPages) - 1))
        {
            var x = parseInt(_totalPages) - 5;            
            list.append("<li><a  href=\"" + link + "1\"> &lt;&lt; </a></li> ");
            list.append("<li class=\"uk-disabled\">...</li>");
            list.append("<li><a  href=\"" + link + "" + (parseFloat(_pageindex) - 1) + "\"> &lt; </a></li> ");            
            for (x; x < (parseInt(_pageindex) + 1) ; x++)
            {
                if (x == parseInt(_pageindex))
                    list.append("<li class=\"act-paging\"><a href=\"#\">" + x + "</a></li>");
                else
                    list.append("<li><a href=\"" + link + "" + x + "\">" + x + "</a></li>");
            }            
            list.append("<li><a href=\"" + link + "" + (parseFloat(_pageindex) + 1) + "\"> &gt; </a></li> ");            
            list.append("<li class=\"uk-disabled\">...</li>");
            list.append("<li><a href=\"" + link + "" + parseFloat(_totalPages) + "\"> &gt;&gt; </a></li> ");
        }
        else if (parseInt(_pageindex) == (parseInt(_totalPages)))
        {
            var x = (parseInt(_totalPages) + 1) - 5;            
            list.append("<li><a href=\"" + link + "1\"> &lt;&lt; </a></li>");
            list.append("<li class=\"uk-disabled\">...</li>");
            list.append("<li><a href=\"" + link + "" + (parseFloat(_pageindex) - 1) + "\"> &lt; </a></li> ");            
            for (x; x < (parseInt(_pageindex) + 1) ; x++) {
                if (x == parseInt(_pageindex))
                    list.append("<li class=\"act-paging\"><a>" + x + "</a></li>");
                else
                    list.append("<li><a href=\"" + link + "" + x + "\">" + x + "</a></li>");
            }
        }        
    }
    
}


// SEND GOP Y
function SendComment(_Email, _Name, _comment, _langid) {
    var _url = urlsite + '/Ajax/WebServiceLoadData.asmx/KTTVInsertComment';    
    $.ajax({
        type: "POST",
        url: _url,
        data: "{fullName:'" + _Name + "',email:'" + _Email + "',content:'" + _comment + "',langid:'" + _langid + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (msg) {
            var data = msg.d;            
            if (data == 'yes') {
                
                    alert('Gửi thành công !');
                
            }
        }, error: function (msg) {
                 alert('Gửi thất bại!');
        }
    });
}


function SendComment1(_Email, _Name, _comment, _langid) {
    var _url = urlsite + '/Ajax/WebServiceLoadData.asmx/KTTVInsertDKNews';
    $.ajax({
        type: "POST",
        url: _url,
        data: "{fullName:'" + _Name + "',email:'" + _Email + "',content:'" + _comment + "',langid:'" + _langid + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (msg) {
            var data = msg.d;
            if (data == 'yes') {
                alert('Cảm ơn bạn đã đăng ký nhận tin!');
            }
        }, error: function (msg) {
            alert('Đăng ký thất bại!');
        }
    });
}



// Luu truy cap
function SaveLog() {
    var _url = urlsite + '/Ajax/WebServiceLoadData.asmx/InsertLog';
    $.ajax({
        type: "POST",
        url: _url,
        data: "",
        contentType: "application/json; charset=utf-8",
        dataType: "json"
        //success: function (msg) {
            //var data = msg.d;
            //if (data == 'yes') {
               // alert('Cảm ơn bạn đã góp ý!');
            //}
       // }, error: function (msg) {
            //alert('Gửi bình luận thất bại!');
        //}
    });
}
// Get truy cap
function GetLog() {
    var _url = urlsite + '/Ajax/WebServiceLoadData.asmx/GetLog';
    
    $.ajax({
        type: "POST",
        url: _url,
        data: "",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (msg) {
            var data = msg.d;
            $("#SLTC").text(data);  
        }
    });

}
// Get truy cap
function GetLogOnline() {
    var _url = urlsite + '/Ajax/WebServiceLoadData.asmx/OnlineLog';

    $.ajax({
        type: "POST",
        url: _url,
        data: "",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (msg) {
            var data = msg.d;
            $("#OnlineSLTC").text(data);
        }
    });

}

// Get truy cap theo ngay
function GetLogOnlineByDate() {
    var _url = urlsite + '/Ajax/WebServiceLoadData.asmx/OnlineLogByDate';

    $.ajax({
        type: "POST",
        url: _url,
        data: "",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (msg) {
            var data = msg.d;
            $("#SLTN").text(data);
        }
    });

}