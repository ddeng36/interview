// 代理模式
// 为其他对象创建一个代理，以控制这个对象的访问

class ImageLoader {
    displayImage() {
    }
}

class RealImageLoader extends ImageLoader {
    constructor(fileName) {
        super();
        this.fileName = fileName;
        this.loadFromDisk();
    }
    loadFromDisk() {
        console.log('loading ' + this.fileName);
    }
    displayImage() {
        console.log('displaying ' + this.fileName);
    }
}

class ProxyImageLoader extends ImageLoader {
    constructor(fileName) {
        super();
        this.fileName = fileName;
        this.realImageLoader = null;
    }
    displayImage() {
        if (this.realImageLoader == null) {
            this.realImageLoader = new RealImageLoader(this.fileName);
        }
        this.realImageLoader.displayImage();
    }
}

const image1 = new ProxyImageLoader('image1');

image1.displayImage(); // loading image1
