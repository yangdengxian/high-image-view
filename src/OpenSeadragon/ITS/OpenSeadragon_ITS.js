import OpenSeadragonImageViewer from '../OpenSeadragonImageViewer';
import { extend } from '../../util/Util';
/**
 * @classdesc OpenSeadragon_ITS（Images Tiles Sources）图片浏览控件 If you have a simple image that you would like to display in OpenSeadragon, you can do so by using the Image Tile Source
 * @author ydx
 * @date 2019-05-29
 * @moudle OpenSeadragon/IMT/OpenSeadragon_ITS
 * @extends OpenSeadragonImageViewer
 */
class OpenSeadragon_ITS extends OpenSeadragonImageViewer {
    /**
     * @param {*} param 
     */
    constructor(param) {
        param = extend(param || {}, {
            tileSources: {
                type: 'image',
                crossOriginPolicy: 'Anonymous',
                ajaxWithCredentials: false
            }
        });
        super(param);
    }
};

export default OpenSeadragon_ITS;