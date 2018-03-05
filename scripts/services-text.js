(function() {

    var serviceBlock = document.querySelectorAll('.services');
    var serviceItems = document.querySelectorAll('.services__items');

    for (var i = 0; i < serviceItems.length; i++) {
        var serviceChildLeng = serviceItems[i].children.length;
        switch (serviceChildLeng) {
            case 3:
                serviceBlock[i].style.width = '80%';
                for (var j = 0; j < serviceChildLeng; j++) {
                    serviceItems[i].children[j].style.width = '27%';
                }
                break;
            case 2:
                serviceBlock[i].style.width = '68%';
                for (var k = 0; k < serviceChildLeng; k++) {
                    serviceItems[i].children[k].style.width = '47%';
                }
                break;
            case 1:
                serviceBlock[i].style.width = '55%';
                for (var z = 0; z < serviceChildLeng; z++) {
                    serviceItems[i].children[z].style.width = '70%';
                    serviceItems[i].children[z].style.margin = '0 auto';
                    var li = serviceItems[i].children[0].children;
                    for (var m = 0; m < li.length; m++) {
                        // console.log(li[m].innerHTML);
                        // console.log(li[m].innerHTML.length);
                        if (li[m].innerHTML.length > 34) {
                            serviceItems[i].children[z].style.width = '100%';
                            serviceBlock[i].style.width = '60%';
                        }
                    }
                }
                break;
            default:
        }
    }
}());
