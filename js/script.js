// declaraction of document.ready() function.
(function () {
    var ie = !!(window.attachEvent && !window.opera);
    var wk = /webkit\/(\d+)/i.test(navigator.userAgent) && (RegExp.$1 < 525);
    var fn = [];
    var run = function () {
        for (var i = 0; i < fn.length; i++) fn[i]();
    };
    var d = document;
    d.ready = function (f) {
        if (!ie && !wk && d.addEventListener)
            return d.addEventListener('DOMContentLoaded', f, false);
        if (fn.push(f) > 1) return;
        if (ie)
            (function () {
                try {
                    d.documentElement.doScroll('left');
                    run();
                } catch (err) {
                    setTimeout(arguments.callee, 0);
                }
            })();
        else if (wk)
            var t = setInterval(function () {
                if (/^(loaded|complete)$/.test(d.readyState))
                    clearInterval(t), run();
            }, 0);
    };
})();


document.ready(
    // toggleTheme function.
    // this script shouldn't be changed.
    () => {
        const pagebody = document.getElementsByTagName('body')[0]

        const default_theme = 'light' // 'dark'

        function setTheme(status = 'light') {
            if (status === 'dark') {
                window.sessionStorage.theme = 'dark'
                pagebody.classList.add('dark-theme');
                document.getElementById("switch_default").checked = true
                document.getElementById("mobile-toggle-theme").innerText = "· Dark"
            } else {
                window.sessionStorage.theme = 'light'
                pagebody.classList.remove('dark-theme');
                document.getElementById("switch_default").checked = false
                document.getElementById("mobile-toggle-theme").innerText = "· Light"
            }
        };

        setTheme(window.sessionStorage.theme ?? default_theme)

        const toggleBtn = document.getElementsByClassName('toggleBtn')[0];
        const switchDefault = document.getElementById('switch_default');

        toggleBtn.addEventListener('click', (e) => {
            // The label click will toggle the checkbox automatically
            // We wait for the checkbox state to change or manually manage it
            setTimeout(() => {
                const isDark = switchDefault.checked;
                window.sessionStorage.theme = isDark ? 'dark' : 'light';
                setTheme(window.sessionStorage.theme);
            }, 0);
        })

        document.getElementById('mobile-toggle-theme').addEventListener('click', () => {
            const currentTheme = window.sessionStorage.theme ?? default_theme;
            window.sessionStorage.theme = currentTheme === 'dark' ? 'light' : 'dark'
            setTheme(window.sessionStorage.theme)
        })
    }
);
