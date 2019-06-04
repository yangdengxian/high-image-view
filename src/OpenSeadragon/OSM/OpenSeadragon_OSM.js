import OpenSeadragonImageViewer from '../OpenSeadragonImageViewer';

/**
 * @classdesc OpenSeadragon_OSM（Open Street Map）图片浏览控件
 * @author ydx
 * @date 2019-05-29
 * @moudle OpenSeadragon/OSM/OpenSeadragon_OSM
 * @extends OpenSeadragonImageViewer
 */
class OpenSeadragon_OSM extends OpenSeadragonImageViewer {
    /**
     * @param {*} param 
     */
    constructor(param) {
        param = Object.assign(param || {}, {
            showNavigator: false,
            wrapHorizontal: true,
            zoomPerScroll: 1.2,
            minZoomImageRatio: 0.5,
            tileSources: [{
                type: 'openstreetmaps'
            }]
        })
        super(param);
    }
};

export default OpenSeadragon_OSM;