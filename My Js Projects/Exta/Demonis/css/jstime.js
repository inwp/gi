// download srart in 10 sec
<div id="countdown"> </div>
<div id="download">how to msk</div>
<script>
window.onload = function() {
    var countdownElement = document.getElementById('countdown'),
        downloadButton = document.getElementById('download'),
        seconds = 10,
        second = 0,
        interval;

    downloadButton.style.display = 'none';

    interval = setInterval(function() {
        countdownElement.firstChild.data = 'You can start your download in ' + (seconds - second) + ' seconds';
        if (second >= seconds) {
            downloadButton.style.display = 'block';
            clearInterval(interval);
        }

        second++;
    }, 1000);
}
</script>