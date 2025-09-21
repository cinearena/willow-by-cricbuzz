jwplayer("jwplayerDiv").setup({    
     file: "https://cricstream4u.github.io/jwmpd/?https://ottb.live.cf.ww.aiv-cdn.net/lhr-nitro/live/clients/dash/enc/vpe5dvsdjc/out/v1/a42808efde4a47df880f9e59b7df1d64/cenc.mpd", 
         position: 'bottom',  
        "autostart": true,
        "Volume": "100",
        "mute": false,         
        "stretching": "exactfit",
        "width": "100%", 
      type: "dash",    
      drm: { "clearkey": {    
               "keyId": "656b70bd6d5274b067af4f96198750e8",    
              "key": "d8625d20ac81cbc38b8453d77e2598d8" 
            }   
             }               
});   

