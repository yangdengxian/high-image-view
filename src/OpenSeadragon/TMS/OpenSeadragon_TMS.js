import OpenSeadragonImageViewer from '../OpenSeadragonImageViewer';
/**
 * @classdesc OpenSeadragon_TMS（Tiles Map Source）图片浏览控件
 * @author ydx
 * @date 2019-05-29
 * @moudle OpenSeadragon/TMS/OpenSeadragon_TMS
 * @extends OpenSeadragonImageViewer
 */
class OpenSeadragon_TMS extends OpenSeadragonImageViewer {
    /**
     * @param {*} param 
     */
    constructor(param) {
        param = Object.assign(param || {}, {
            prefixUrl: '/openseadragon/images/',
            showNavigator: false,
            wrapHorizontal: true,
            zoomPerScroll: 1.2,
            minZoomImageRatio: 0.5,
            tileSources: [{
                type: 'tiledmapservice',
                width: 256 * 65534,
                height: 256 * 32767
            }]
        })
        super(param);
    }
};

export default OpenSeadragon_TMS;