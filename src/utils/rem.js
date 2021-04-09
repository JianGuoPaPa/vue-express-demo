(function (w, d) {
    var root = d.documentElement

    function setRootFontSize() {
        var w = root.clientWidth
        var x = w / 18.75
        root.style.fontSize = x + 'px'
    }

    (function setBodyFontSize() {
        if (d.body) {
            d.body.style.fontSize = '16px'
        } else {
            d.addEventListener('DOMContentLoaded', setBodyFontSize)
        }
    })()

    setRootFontSize()
    w.addEventListener('resize', function () {
        setRootFontSize()
    })
    w.addEventListener('pageshow', function () {
        setRootFontSize()
    })
})(window, document)
