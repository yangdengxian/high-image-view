/**
 * 工具类
 * @author ydx
 * @date 2019-05-31
 */
import $ from 'jquery/dist/jquery';

/**
 * @description 对象继承
 * @param {*} targetObj 继承子对象
 * @param {*} sourceObj 继承父对象
 */
function extend(targetObj, sourceObj) {
    for (const key in sourceObj) {
        if (sourceObj.hasOwnProperty(key)) {
            if (!targetObj[key]) {
                targetObj[key] = sourceObj[key];
            } else {
                if (targetObj[key]) {
                    switch (typeof targetObj[key]) {
                        case "object":
                            //只针对对象
                            if (!Array.isArray(sourceObj[key])) {
                                targetObj[key] = extend(targetObj[key], sourceObj[key]);
                            }
                            break;
                            //后续扩展

                        default:
                            break;
                    }
                }
            }
        }
    }

    return targetObj;
}

/**
 * @description 获取地址栏参数值
 * @param {string} name key
 * @param {string} url 地址栏
 */
function getQueryString(name, url) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    //var a = window.location.search.substr(1);
    var r = url ? url.match(reg) : window.location.search.substr(1).match(reg);
    //var kk = decodeURIComponent(r[2]);
    ////var b = unescape(r[2]);
    if (r != null) return decodeURIComponent(r[2]);
    return null;
}

/**
 * @description 获取地址栏参数对象
 * @param {string} oldUrl 
 */
function getRequestParams(oldUrl) {
    var url = oldUrl || location.search; //获取url中"?"符后的字串
    var theRequest = {};
    if (url.indexOf("?") != -1) {
        var str = url.substr(url.indexOf("?") + 1);
        var strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
        }
    }
    return theRequest;
}

/**
 * @description ajax请求
 * @param {string} url 
 * @param {object} param 
 */
function ajaxGetReqeust(url, param) {
    var $defferd = $.Deferred();
    $.ajax({
        url: url,
        data: param.data,
        // timeout: param.timeout || 5000, //超过5秒，放弃请求
        dataType: param.dataType || 'json',
        type: 'GET',
        cache: param.cache || true, //默认值: true，dataType 为 script 和 jsonp 时默认为 false。设置为 false 将不缓存此页面be
        beforeSend: function(e) {
            if (e.readyState !== 4) {
                document.getElementById('openSeadragon').style.visibility = "hidden";
            }
        },
        success: function(result) {
            $defferd.resolve(result);
        },
        error: function(error) {
            $defferd.reject(error);
        },
        complete(XMLHttpRequest, status) {
            if (status == 'error' || status == 'timeout') { //超时,status还有success,error等值的情况
                console.error(url, param, status);
                XMLHttpRequest.abort();
            }
            setTimeout(function() {
                document.getElementById('load').style.visibility = "hidden";
                document.getElementById('openSeadragon').style.visibility = "visible";
            }, 1000);
        }
    })
    return $defferd;
}

export { extend, getQueryString, getRequestParams, ajaxGetReqeust };