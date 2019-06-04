import OpenSeadragonImageViewer from '../OpenSeadragonImageViewer';
import { extend, ajaxGetReqeust } from '../../util/Util';
/**
 * @classdesc OpenSeadragon_DZI（Deep Zoom Image）图片浏览控件
 * @author ydx
 * @date 2019-05-29
 * @moudle OpenSeadragon/DZI/OpenSeadragon_DZI
 * @extends OpenSeadragonImageViewer
 */
class OpenSeadragon_DZI extends OpenSeadragonImageViewer {
    /**
     * @param {*} param 
     * @param {string} param.id image container id
     * @param {string} param.prefixUrl vierControl toolbar imagesUrl
     * @param {string} param.tileSources request outputpath
     */
    constructor(param) {
        param = extend(param || {}, {
            tileSources: "/imageDZI/flower.dzi"
        })
        super(param);

    }
};

function getTileSources(tileServerUrl, param) {
    return ajaxGetReqeust(tileServerUrl, {
        dataType: "json",
        data: param
    }).then((res) => {
        console.log(res);

    }, (error) => {
        console.error(error);

    });
}

export default OpenSeadragon_DZI;