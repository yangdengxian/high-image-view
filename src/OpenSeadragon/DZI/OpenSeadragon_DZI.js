import OpenSeadragonImageViewer from '../OpenSeadragonImageViewer';
import { extend, ajaxGetReqeust } from '../../util/Util';
/**
 * @classdesc OpenSeadragon_DZI（Deep Zoom Image）图片浏览控件
 * @author ydx
 * @date 2019-05-29
 * @moudle OpenSeadragon/DZI/OpenSeadragon_DZI
 */
class OpenSeadragon_DZI {
    /**
     * @param {*} param 
     * @param {string} param.id image view container id,  required
     * @param {string} param.loadingId image loading container id eg: <div id="load"></div>, required
     * @param {string} param.prefixUrl vierControl toolbar imagesUrl
     * @param {string} param.imagePath targetImageUrl, required
     * @param {string} param.tileServerUrl request tileServerUrl, required
     * @param {string} param.tileSources request tileSources, required
     */
    constructor(param) {
        param = extend(param || {}, {
            tileSources: "/imageDZI/flower.dzi",
            prefixUrl: 'images/',
        });
        this.openSeadragonView = this.createTileSources(param);
    }

    /**
     * @description create tiles images
     * @param {*} param 
     */
    createTileSources(param) {
        return ajaxGetReqeust(param.tileServerUrl, {
            dataType: 'json',
            data: {
                imagePath: param.imagePath,
            },
            beforeSend: (e) => {
                if (e.readyState !== 4) {
                    //openSeadragon container
                    if (document.getElementById(param.id)) {
                        document.getElementById(param.id).style.visibility = "hidden";
                    }
                }
            },
            complete: (XMLHttpRequest, status) => {
                if (status == 'error' || status == 'timeout') { //超时,status还有success,error等值的情况
                    console.error(url, param, status);
                    XMLHttpRequest.abort();
                }
                setTimeout(function() {
                    if (document.getElementById(param.id) && document.getElementById(param.loadingId)) {
                        document.getElementById(param.loadingId).style.visibility = "hidden";
                        document.getElementById(param.id).style.visibility = "visible";
                    }
                }, 1000);
            }
        }).then(
            result => {
                if (result && result.tilesPath) {
                    /* new OpenSeadragonImageViewer({
                        id: param.id,
                        prefixUrl: param.prefixUrl,
                        tileSources: param.tileSources + result.tilesPath, //必填
                    }); */
                    param.tileSources += result.tilesPath;
                    return new OpenSeadragonImageViewer(param);
                }
            },
            error => {
                console.error(error);
            }
        );
    }
};

export default OpenSeadragon_DZI;