"use strict";
use(function () {
  var resourcePath = '/content/we-retail/language-masters/en/my-new-page/jcr:content/root/myloginform_1492731830';
var resourceResolver = resource.getResourceResolver().getResource("/content/we-retail/language-masters/en/my-new-page/jcr:content/root/myloginform_1492731830");
var Node= resourceResolver.adaptTo(Packages.javax.jcr.Node);


return {

    HType: {
        propName: 'htype',
        propValue:  Node.getProperty('htype').getString()
    },

    ResourcePath: {
        propName: 'resourcePath',
        propValue:  resourcePath
    },
    Color: {
        propName: 'color',
        propValue:  Node.getProperty('color').getString()
    },
}

});