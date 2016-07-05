/**
 * Created by Administrator on 2016/6/30.
 */
define(function(require,exports,module){

    var oBtn = document.getElementById("btn");
    var oDiv1 = document.getElementById("popup");
    var oDiv2 = document.getElementById("size");
    var oDiv3 = document.getElementById("drag");

    require('./drag.js').drag(oDiv3);

    oBtn.onclick = function(){

        oDiv1.style.display = 'block';

        require('./scale.js').scale(oDiv1,oDiv2);

    };

});