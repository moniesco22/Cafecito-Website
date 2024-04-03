
fetch('https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=UUwB9Bi36-KOMrx_hlLa5gkg&key=AIzaSyC8JIlwYFBXxn_2YD8aJ5ujMW3dk5xwIdY').then(res => res.json())
.then(data =>{
    console.log(data);
})



// api key: AIzaSyC8JIlwYFBXxn_2YD8aJ5ujMW3dk5xwIdY

// channel key: UCwB9Bi36-KOMrx_hlLa5gkg

// upload key: "UUwB9Bi36-KOMrx_hlLa5gkg"

// url: https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=UUwB9Bi36-KOMrx_hlLa5gkg&key=[YOUR_API_KEY] HTTP/1.1
