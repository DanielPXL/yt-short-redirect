function run(){
    if(window.location.href.includes("shorts") && window.location.href.charAt(window.location.href.length) != "/")
        window.location.replace("https://www.youtube.com/watch?v=" + window.location.href.substring(window.location.href.lastIndexOf("/") + 1));
    console.log('change');
    }
    
    window.onload = run;
    window.addEventListener('yt-navigate-finish', run,   true);

