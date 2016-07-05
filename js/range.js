/**
 * Created by Administrator on 2016/7/4.
 */
define(function( require , exports , module){
    function range( val , max , min ){
        if( val > max ){
            return max;
        }
        if( val < min ){
            return min;
        }
        return val;
    };
    exports.range = range;
});