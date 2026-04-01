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

        function updateMermaidTheme(theme) {
            if (typeof mermaid !== 'undefined') {
                var mermaidTheme = theme === 'dark' ? 'dark' : 'default';
                // Remove existing rendered mermaid diagrams and restore original code
                document.querySelectorAll('.mermaid').forEach(function(el) {
                    var originalCode = el.getAttribute('data-mermaid-code');
                    if (!originalCode) {
                        originalCode = el.textContent;
                        el.setAttribute('data-mermaid-code', originalCode);
                    }
                    el.removeAttribute('data-processed');
                    el.textContent = originalCode;
                });
                // Re-initialize with new theme and re-render all
                mermaid.initialize({ startOnLoad: false, theme: mermaidTheme });
                if (mermaid.run) {
                    mermaid.run({ querySelector: '.mermaid' }).catch(function(e) { console.error(e); });
                } else {
                    mermaid.init(undefined, document.querySelectorAll('.mermaid'));
                }
            }
        }

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
            updateMermaidTheme(status);
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

// Copy code button for code blocks
document.ready(function() {
    document.querySelectorAll('figure.highlight').forEach(function(block) {
        // Create copy button
        const copyBtn = document.createElement('div');
        copyBtn.className = 'copy-btn';
        copyBtn.textContent = 'Copy';
        block.appendChild(copyBtn);

        // Make block relative for absolute positioning
        block.style.position = 'relative';

        copyBtn.addEventListener('click', function() {
            const code = block.querySelector('td.code pre') || block.querySelector('pre');
            const text = code ? code.innerText : '';

            navigator.clipboard.writeText(text).then(function() {
                copyBtn.textContent = 'Copied!';
                copyBtn.classList.add('copied');
                setTimeout(function() {
                    copyBtn.textContent = 'Copy';
                    copyBtn.classList.remove('copied');
                }, 2000);
            }).catch(function(err) {
                console.error('Failed to copy:', err);
            });
        });
    });
});
