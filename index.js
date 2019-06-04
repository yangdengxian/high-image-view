import './css/common.css';
import Config from './src/config/Config';
import { ajaxGetReqeust } from './src/util/Util';
// import OpenSeadragon_OSM from './src/OpenSeadragon/OSM/OpenSeadragon_OSM';
// import OpenSeadragon_ITS from './src/OpenSeadragon/ITS/OpenSeadragon_ITS';
import OpenSeadragon_DZI from './src/OpenSeadragon/DZI/OpenSeadragon_DZI';

/* const viewer = new OpenSeadragon_ITS({
    id: "openSeadragon",
    prefixUrl: "images/",
    tileSources: {
        url: './example/images/grand-canyon-landscape-overlooking.jpg'
    }
}); */
ajaxGetReqeust(Config.tileServerUrl, {
    dataType: "json",
    data: {
        imagePath: Config.sourceImagesUrl + "/sourceImages/cactus-and-mountains-high-resolution_.jpg",
        // imagePath: "http://highresolution.photography/images/forth-bridge-blues-main.jpg",
    }
}).then(result => {
    if (result && result.tilesPath) {
        new OpenSeadragon_DZI({
            id: "openSeadragon",
            prefixUrl: "images/",
            tileSources: Config.fileServerUrl + result.tilesPath, //必填
        });
    }

}, error => {
    console.error(error);

});