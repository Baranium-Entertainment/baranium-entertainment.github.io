var websiteWidth = 1920;
var scale = screen.width / websiteWidth;

document.querySelector('meta[name="viewport"]').setAttribute('content', 'width=' + websiteWidth + ', initial-scale=' + scale + '');