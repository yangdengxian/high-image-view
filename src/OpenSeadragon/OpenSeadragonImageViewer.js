import OpenSeadragon from 'openseadragon/build/openseadragon/openseadragon';
const images = importImagesAll(require.context('openseadragon/build/openseadragon/images', false, /\.(png|jpe?g|svg)$/));
/**
 * @classdesc OpenSeadragon图片浏览控件
 * @author ydx
 * @date 2019-05-29
 * @module OpenSeadragon/OpenSeadragonImageViewer
 * @extends OpenSeadragon
 */
class OpenSeadragonImageViewer extends OpenSeadragon {
    /**
     * 
     * @param {*} param 
     */
    constructor(param) {
        super(param);
    }
};

function importImagesAll(r) {
    return r.keys().map(r);
}

export default OpenSeadragonImageViewer;