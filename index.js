import './css/common.css';
import Config from './src/config/Config';
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

const viewer = new OpenSeadragon_DZI({
    id: 'openSeadragon',
    loadingId: 'load',
    prefixUrl: 'images/',
    imagePath: Config.sourceImagesUrl + '/high-resolution-desktop-wallpaper3.jpg',
    tileServerUrl: Config.tileServerUrl,
    tileSources: Config.fileServerUrl, //必填
});