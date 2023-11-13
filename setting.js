  // Define controls for the Plyr video player
  var controls =
    [
      'play-large', // The large play button in the center
      // 'restart', // Restart playback
      'play', // Play/pause playback
      'rewind', // Rewind by the seek time (default 10 seconds)
      'progress', // The progress bar and scrubber for playback and buffering
      'current-time', // The current time of playback
      // 'previewThumbnails',
      // 'duration', // The full duration of the media
      'fast-forward', // Fast forward by the seek time (default 10 seconds)
      'mute', //Toggle mute
      'volume', // Volume control
      'captions', // Toggle captions
      'settings', // Settings menu
      'pip', // Picture-in-picture (currently Safari only)
      'airplay', // Airplay (currently Safari only)
      // 'download', // Show a download button with a link to either the current source or a custom URL you specify in your options
      'fullscreen' // Toggle fullscreen
    ];

  document.addEventListener('DOMContentLoaded', function () {
    const player = new Plyr('.vid1', {
      controls,
      ratio: '16:9' // Set the aspect ratio to 16:9
    });

    player.on('error', function (event) {
      const videoElem = player.media;

      // If the source video is not found, fallback to a default video
      if (videoElem.networkState === videoElem.NETWORK_NO_SOURCE) {
        videoElem.src = "https://drive.google.com/u/0/uc?export=download&confirm=SEXC&id=18AwqW-_x2FfWeppgC2CJNA_XdriCIZrM";
        videoElem.load();
        player.play();
      }
    });
  });

  $(document).ready(function () {
    // $('.lowvid').removeAttr('id');

    $(".mirror").change(function () {
      const player2 = new Plyr(".vid1", {
        controls: controls,
        ratio: "16:9", // Setting the aspect ratio to 16:9
        tooltips: {
          controls: true, // Tampilkan tooltips saat mouse hover di atas kontrol
          seek: true, // Tampilkan tooltips saat drag seek bar
        },
      });
    });
  });
