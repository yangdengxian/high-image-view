import OpenSeadragonImageViewer from '../OpenSeadragonImageViewer';

/**
 * @classdesc OpenSeadragon_CTS（Custom Tiles Source）图片浏览控件
 * @author ydx
 * @date 2019-05-29
 * @moudle OpenSeadragon/CTS/OpenSeadragon_CTS
 * @extends OpenSeadragonImageViewer
 */
class OpenSeadragon_CTS extends OpenSeadragonImageViewer {
    /**
     * @param {*} param 
     */
    constructor(param) {
        param = Object.assign(param || {}, {
            prefixUrl: "images/",
            navigatorSizeRatio: 0.25,
            wrapHorizontal: true,
            tileSources: {
                height: 512 * 256,
                width: 512 * 256,
                tileSize: 256,
                minLevel: 8,
                getTileUrl: function(level, x, y) {
                    return "http://s3.amazonaws.com/com.modestmaps.bluemarble/" +
                        (level - 8) + "-r" + y + "-c" + x + ".jpg";
                }
            }
        })
        super(param);
    }
};

export default OpenSeadragon_CTS;