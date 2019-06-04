# heigh resolutions images viewer
##  build and start
This project demonstrates how the `openseadragon` package can be used with webpack.

Clone the project.

    git clone https://github.com/yangdengxian/high-image-view.git

Install the project dependencies.

    cd high-image-view
    npm install

Create a bundle for the browser.

    npm run build

Start the project

    npm run start

Open `index.html` in browser(Chrome,ie,firefox,360,etc) to see the result.

    open index.html

-----

## branchs description
**v1.0.0**

> * DZI (Deep Zoom Images)
> * OSM (Open Street Maps)
> * TMS (Tiled Map Service)


## dependencies
**dependencies**
[openseadragon][1]
[jQuery][2]

**devDependencies**
[babel][3]
[webpack][4]


  [1]: https://github.com/openseadragon/openseadragon
  [2]: https://github.com/jquery/jquery.git
  [3]: https://github.com/babel/babel.git
  [4]: https://github.com/webpack/webpack.git
  
## description
###### This project depends `openseadragon`, if you are interested to the native codes, read them on github, please.

###### This is only a web example implemented in pure JavaScript. If you want to load tiles (many images), build a pyramid, please. There is a another project for java([pyramidweb](https://github.com/yangdengxian/pyramidweb "pyramidweb")) to help you with building the tiles pyramid. Remember it, all of them will be start at the same time.
