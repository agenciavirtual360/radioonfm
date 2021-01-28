(function(){
    var script = {
 "definitions": [{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "yaw": -121.22,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_5B95F475_4C46_248B_4174_26CCDF7C3FD4",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_376B0DC9_3C22_B56E_41AE_4C8450E89C64"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_37C2C572_3C26_B522_41B2_52E5287F15EE"
  }
 ],
 "class": "Panorama",
 "hfov": 360,
 "label": "PANO_20210115_165415_2",
 "id": "panorama_3704C4DE_3C22_AB63_4196_7A0D03107F93",
 "hfovMin": "135%",
 "thumbnailUrl": "media/panorama_3704C4DE_3C22_AB63_4196_7A0D03107F93_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3704C4DE_3C22_AB63_4196_7A0D03107F93_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_3704C4DE_3C22_AB63_4196_7A0D03107F93_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3704C4DE_3C22_AB63_4196_7A0D03107F93_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3704C4DE_3C22_AB63_4196_7A0D03107F93_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3704C4DE_3C22_AB63_4196_7A0D03107F93_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_3704C4DE_3C22_AB63_4196_7A0D03107F93_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3704C4DE_3C22_AB63_4196_7A0D03107F93_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3704C4DE_3C22_AB63_4196_7A0D03107F93_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3704C4DE_3C22_AB63_4196_7A0D03107F93_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_3704C4DE_3C22_AB63_4196_7A0D03107F93_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3704C4DE_3C22_AB63_4196_7A0D03107F93_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3704C4DE_3C22_AB63_4196_7A0D03107F93_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3704C4DE_3C22_AB63_4196_7A0D03107F93_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_3704C4DE_3C22_AB63_4196_7A0D03107F93_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3704C4DE_3C22_AB63_4196_7A0D03107F93_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3704C4DE_3C22_AB63_4196_7A0D03107F93_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3704C4DE_3C22_AB63_4196_7A0D03107F93_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_3704C4DE_3C22_AB63_4196_7A0D03107F93_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3704C4DE_3C22_AB63_4196_7A0D03107F93_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3704C4DE_3C22_AB63_4196_7A0D03107F93_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3704C4DE_3C22_AB63_4196_7A0D03107F93_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_3704C4DE_3C22_AB63_4196_7A0D03107F93_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3704C4DE_3C22_AB63_4196_7A0D03107F93_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3704C4DE_3C22_AB63_4196_7A0D03107F93_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3704C4DE_3C22_AB63_4196_7A0D03107F93_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_3249F714_3C26_D6E6_41AD_85B451816800",
  "this.overlay_2F476AB5_3FE2_DF26_41B4_E60BC923CF95"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_37C2C572_3C26_B522_41B2_52E5287F15EE"
  }
 ],
 "class": "Panorama",
 "hfov": 360,
 "label": "PANO_20210115_171644_1",
 "id": "panorama_377B27BF_3C62_D522_41C9_2F9AF5B604F0",
 "hfovMin": "135%",
 "thumbnailUrl": "media/panorama_377B27BF_3C62_D522_41C9_2F9AF5B604F0_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_377B27BF_3C62_D522_41C9_2F9AF5B604F0_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_377B27BF_3C62_D522_41C9_2F9AF5B604F0_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_377B27BF_3C62_D522_41C9_2F9AF5B604F0_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_377B27BF_3C62_D522_41C9_2F9AF5B604F0_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_377B27BF_3C62_D522_41C9_2F9AF5B604F0_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_377B27BF_3C62_D522_41C9_2F9AF5B604F0_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_377B27BF_3C62_D522_41C9_2F9AF5B604F0_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_377B27BF_3C62_D522_41C9_2F9AF5B604F0_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_377B27BF_3C62_D522_41C9_2F9AF5B604F0_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_377B27BF_3C62_D522_41C9_2F9AF5B604F0_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_377B27BF_3C62_D522_41C9_2F9AF5B604F0_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_377B27BF_3C62_D522_41C9_2F9AF5B604F0_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_377B27BF_3C62_D522_41C9_2F9AF5B604F0_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_377B27BF_3C62_D522_41C9_2F9AF5B604F0_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_377B27BF_3C62_D522_41C9_2F9AF5B604F0_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_377B27BF_3C62_D522_41C9_2F9AF5B604F0_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_377B27BF_3C62_D522_41C9_2F9AF5B604F0_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_377B27BF_3C62_D522_41C9_2F9AF5B604F0_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_377B27BF_3C62_D522_41C9_2F9AF5B604F0_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_377B27BF_3C62_D522_41C9_2F9AF5B604F0_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_377B27BF_3C62_D522_41C9_2F9AF5B604F0_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_377B27BF_3C62_D522_41C9_2F9AF5B604F0_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_377B27BF_3C62_D522_41C9_2F9AF5B604F0_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_377B27BF_3C62_D522_41C9_2F9AF5B604F0_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_377B27BF_3C62_D522_41C9_2F9AF5B604F0_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_33033FAE_3C25_D522_41C2_1A1D9E8C439E"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_37C2C572_3C26_B522_41B2_52E5287F15EE"
  }
 ],
 "class": "Panorama",
 "hfov": 360,
 "label": "PANO_20210115_165312_1",
 "id": "panorama_370FE265_3C22_AF21_41CC_848DFE70132F",
 "hfovMin": "135%",
 "thumbnailUrl": "media/panorama_370FE265_3C22_AF21_41CC_848DFE70132F_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_370FE265_3C22_AF21_41CC_848DFE70132F_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_370FE265_3C22_AF21_41CC_848DFE70132F_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_370FE265_3C22_AF21_41CC_848DFE70132F_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_370FE265_3C22_AF21_41CC_848DFE70132F_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_370FE265_3C22_AF21_41CC_848DFE70132F_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_370FE265_3C22_AF21_41CC_848DFE70132F_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_370FE265_3C22_AF21_41CC_848DFE70132F_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_370FE265_3C22_AF21_41CC_848DFE70132F_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_370FE265_3C22_AF21_41CC_848DFE70132F_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_370FE265_3C22_AF21_41CC_848DFE70132F_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_370FE265_3C22_AF21_41CC_848DFE70132F_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_370FE265_3C22_AF21_41CC_848DFE70132F_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_370FE265_3C22_AF21_41CC_848DFE70132F_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_370FE265_3C22_AF21_41CC_848DFE70132F_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_370FE265_3C22_AF21_41CC_848DFE70132F_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_370FE265_3C22_AF21_41CC_848DFE70132F_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_370FE265_3C22_AF21_41CC_848DFE70132F_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_370FE265_3C22_AF21_41CC_848DFE70132F_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_370FE265_3C22_AF21_41CC_848DFE70132F_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_370FE265_3C22_AF21_41CC_848DFE70132F_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_370FE265_3C22_AF21_41CC_848DFE70132F_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_370FE265_3C22_AF21_41CC_848DFE70132F_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_370FE265_3C22_AF21_41CC_848DFE70132F_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_370FE265_3C22_AF21_41CC_848DFE70132F_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_370FE265_3C22_AF21_41CC_848DFE70132F_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_2CD7B006_3C22_6AE2_41C1_C3BB048C9EFD"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "yaw": -90,
  "class": "PanoramaCameraPosition",
  "pitch": -11.02
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_5B723518_4C46_24B9_4173_EA6A540FD300",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3704C4DE_3C22_AB63_4196_7A0D03107F93"
  }
 ],
 "class": "Panorama",
 "hfov": 360,
 "label": "PANO_20210115_165622_4",
 "id": "panorama_376B0DC9_3C22_B56E_41AE_4C8450E89C64",
 "hfovMin": "135%",
 "thumbnailUrl": "media/panorama_376B0DC9_3C22_B56E_41AE_4C8450E89C64_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_376B0DC9_3C22_B56E_41AE_4C8450E89C64_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_376B0DC9_3C22_B56E_41AE_4C8450E89C64_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_376B0DC9_3C22_B56E_41AE_4C8450E89C64_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_376B0DC9_3C22_B56E_41AE_4C8450E89C64_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_376B0DC9_3C22_B56E_41AE_4C8450E89C64_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_376B0DC9_3C22_B56E_41AE_4C8450E89C64_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_376B0DC9_3C22_B56E_41AE_4C8450E89C64_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_376B0DC9_3C22_B56E_41AE_4C8450E89C64_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_376B0DC9_3C22_B56E_41AE_4C8450E89C64_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_376B0DC9_3C22_B56E_41AE_4C8450E89C64_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_376B0DC9_3C22_B56E_41AE_4C8450E89C64_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_376B0DC9_3C22_B56E_41AE_4C8450E89C64_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_376B0DC9_3C22_B56E_41AE_4C8450E89C64_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_376B0DC9_3C22_B56E_41AE_4C8450E89C64_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_376B0DC9_3C22_B56E_41AE_4C8450E89C64_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_376B0DC9_3C22_B56E_41AE_4C8450E89C64_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_376B0DC9_3C22_B56E_41AE_4C8450E89C64_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_376B0DC9_3C22_B56E_41AE_4C8450E89C64_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_376B0DC9_3C22_B56E_41AE_4C8450E89C64_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_376B0DC9_3C22_B56E_41AE_4C8450E89C64_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_376B0DC9_3C22_B56E_41AE_4C8450E89C64_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_376B0DC9_3C22_B56E_41AE_4C8450E89C64_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_376B0DC9_3C22_B56E_41AE_4C8450E89C64_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_376B0DC9_3C22_B56E_41AE_4C8450E89C64_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_376B0DC9_3C22_B56E_41AE_4C8450E89C64_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_324BCFCF_3C26_B562_41C0_57972119ADA9"
 ]
},
{
 "class": "MediaAudio",
 "autoplay": true,
 "id": "audio_5E731FEE_4C42_6396_41D0_FF4ED62B124B",
 "audio": {
  "class": "AudioResource",
  "mp3Url": "media/audio_5E731FEE_4C42_6396_41D0_FF4ED62B124B.mp3",
  "oggUrl": "media/audio_5E731FEE_4C42_6396_41D0_FF4ED62B124B.ogg"
 },
 "data": {
  "label": "WhatsApp Audio 2021-01-25 at 14.10.31 (online-audio-converter.com)"
 }
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_3704C4DE_3C22_AB63_4196_7A0D03107F93_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_377B27BF_3C62_D522_41C9_2F9AF5B604F0_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "yaw": -91.84,
  "class": "PanoramaCameraPosition",
  "pitch": -13.78
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_5BA0A429_4C46_249B_41C1_130B55F3C1A7",
 "automaticZoomSpeed": 10
},
{
 "items": [
  {
   "media": "this.panorama_37C2C572_3C26_B522_41B2_52E5287F15EE",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "camera": "this.panorama_37C2C572_3C26_B522_41B2_52E5287F15EE_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_370FE265_3C22_AF21_41CC_848DFE70132F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "camera": "this.panorama_370FE265_3C22_AF21_41CC_848DFE70132F_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_3704C4DE_3C22_AB63_4196_7A0D03107F93",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "camera": "this.panorama_3704C4DE_3C22_AB63_4196_7A0D03107F93_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_376B0DC9_3C22_B56E_41AE_4C8450E89C64",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "camera": "this.panorama_376B0DC9_3C22_B56E_41AE_4C8450E89C64_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_377B27BF_3C62_D522_41C9_2F9AF5B604F0",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 0)",
   "camera": "this.panorama_377B27BF_3C62_D522_41C9_2F9AF5B604F0_camera",
   "end": "this.trigger('tourEnded')",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "yaw": 88.16,
  "class": "PanoramaCameraPosition",
  "pitch": 1.84
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_5B85B4CE_4C46_2599_41CA_73806351517C",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_376B0DC9_3C22_B56E_41AE_4C8450E89C64_camera",
 "automaticZoomSpeed": 10
},
{
 "items": [
  {
   "media": "this.panorama_37C2C572_3C26_B522_41B2_52E5287F15EE",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "camera": "this.panorama_37C2C572_3C26_B522_41B2_52E5287F15EE_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_370FE265_3C22_AF21_41CC_848DFE70132F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "camera": "this.panorama_370FE265_3C22_AF21_41CC_848DFE70132F_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_3704C4DE_3C22_AB63_4196_7A0D03107F93",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "camera": "this.panorama_3704C4DE_3C22_AB63_4196_7A0D03107F93_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_376B0DC9_3C22_B56E_41AE_4C8450E89C64",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "camera": "this.panorama_376B0DC9_3C22_B56E_41AE_4C8450E89C64_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_377B27BF_3C62_D522_41C9_2F9AF5B604F0",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 0)",
   "camera": "this.panorama_377B27BF_3C62_D522_41C9_2F9AF5B604F0_camera",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "class": "PlayList"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "yaw": -82.65,
  "class": "PanoramaCameraPosition",
  "pitch": -2.76
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_5B64F541_4C46_248B_41C1_2B01F5F4478B",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_37C2C572_3C26_B522_41B2_52E5287F15EE_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "yaw": 169.9,
  "class": "PanoramaCameraPosition",
  "pitch": -2.76
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_5B9C64A5_4C46_258B_417B_1847678D85B1",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_370FE265_3C22_AF21_41CC_848DFE70132F"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3704C4DE_3C22_AB63_4196_7A0D03107F93"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_377B27BF_3C62_D522_41C9_2F9AF5B604F0"
  }
 ],
 "class": "Panorama",
 "hfov": 360,
 "label": "PANO_20210115_165153_0",
 "id": "panorama_37C2C572_3C26_B522_41B2_52E5287F15EE",
 "hfovMin": "135%",
 "thumbnailUrl": "media/panorama_37C2C572_3C26_B522_41B2_52E5287F15EE_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_37C2C572_3C26_B522_41B2_52E5287F15EE_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_37C2C572_3C26_B522_41B2_52E5287F15EE_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_37C2C572_3C26_B522_41B2_52E5287F15EE_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_37C2C572_3C26_B522_41B2_52E5287F15EE_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_37C2C572_3C26_B522_41B2_52E5287F15EE_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_37C2C572_3C26_B522_41B2_52E5287F15EE_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_37C2C572_3C26_B522_41B2_52E5287F15EE_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_37C2C572_3C26_B522_41B2_52E5287F15EE_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_37C2C572_3C26_B522_41B2_52E5287F15EE_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_37C2C572_3C26_B522_41B2_52E5287F15EE_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_37C2C572_3C26_B522_41B2_52E5287F15EE_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_37C2C572_3C26_B522_41B2_52E5287F15EE_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_37C2C572_3C26_B522_41B2_52E5287F15EE_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_37C2C572_3C26_B522_41B2_52E5287F15EE_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_37C2C572_3C26_B522_41B2_52E5287F15EE_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_37C2C572_3C26_B522_41B2_52E5287F15EE_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_37C2C572_3C26_B522_41B2_52E5287F15EE_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_37C2C572_3C26_B522_41B2_52E5287F15EE_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_37C2C572_3C26_B522_41B2_52E5287F15EE_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_37C2C572_3C26_B522_41B2_52E5287F15EE_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_37C2C572_3C26_B522_41B2_52E5287F15EE_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_37C2C572_3C26_B522_41B2_52E5287F15EE_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_37C2C572_3C26_B522_41B2_52E5287F15EE_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_37C2C572_3C26_B522_41B2_52E5287F15EE_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_37C2C572_3C26_B522_41B2_52E5287F15EE_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_324409E2_3C22_BD22_41A1_2FADFFA4582C",
  "this.overlay_32415FF5_3C26_7526_41B2_9C824CD216C7",
  "this.overlay_336C746A_3C26_EB22_41AB_85D0CE2E7E88"
 ]
},
{
 "viewerArea": "this.MainViewer",
 "buttonCardboardView": [
  "this.IconButton_66589837_74AF_8B56_41D7_A6F4FAC02CC3",
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB"
 ],
 "buttonToggleHotspots": [
  "this.IconButton_6658F838_74AF_8B5A_41C1_8DA59962CFF4",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96"
 ],
 "class": "PanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "id": "MainViewerPanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "displayPlaybackBar": true,
 "buttonToggleGyroscope": [
  "this.IconButton_6658D838_74AF_8B5A_41D7_154D466041BB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A"
 ],
 "mouseControlMode": "drag_rotation"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "yaw": 81.73,
  "class": "PanoramaCameraPosition",
  "pitch": 1.84
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_5B88D4F5_4C46_258B_41BE_440509EE6CFC",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_370FE265_3C22_AF21_41CC_848DFE70132F_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 125,
  "yaw": -89.08,
  "class": "PanoramaCameraPosition",
  "pitch": -0.92
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_5BAE2454_4C46_2489_41C5_15981AA8C5C3",
 "automaticZoomSpeed": 10
},
{
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipBorderColor": "#767676",
 "id": "MainViewer",
 "toolTipOpacity": 0.5,
 "left": 0,
 "toolTipFontSize": 13,
 "minHeight": 50,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarBackgroundColorDirection": "vertical",
 "minWidth": 100,
 "width": "100%",
 "playbackBarRight": 0,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 7,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "paddingRight": 0,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "transitionMode": "blending",
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Georgia",
 "playbackBarHeadBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "paddingLeft": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressRight": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "progressHeight": 10,
 "borderSize": 0,
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "top": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "displayTooltipInTouchScreens": true,
 "class": "ViewerArea",
 "toolTipPaddingRight": 10,
 "toolTipPaddingLeft": 10,
 "progressBorderRadius": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipPaddingTop": 7,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "toolTipBorderRadius": 3,
 "paddingTop": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "borderRadius": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "paddingBottom": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 5,
 "data": {
  "name": "Main Viewer"
 },
 "progressBorderColor": "#FFFFFF",
 "playbackBarHeadOpacity": 1,
 "transitionDuration": 500,
 "toolTipShadowSpread": 0,
 "shadow": false
},
{
 "layout": "absolute",
 "children": [
  "this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D",
  "this.Container_6396DD92_74B8_852E_41C7_7F2F88EAB543"
 ],
 "id": "Container_7F59BED9_7065_6DCD_41D6_B4AD3EEA9174",
 "left": "0%",
 "width": 300,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "top": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "class": "Container",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": "100%",
 "paddingBottom": 0,
 "data": {
  "name": "--- LEFT PANEL 3"
 },
 "propagateClick": false,
 "shadow": false,
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0
},
{
 "layout": "absolute",
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "scrollBarColor": "#000000",
 "width": 115.05,
 "scrollBarOpacity": 0.5,
 "right": "0%",
 "borderSize": 0,
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "top": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "class": "Container",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 641,
 "paddingBottom": 0,
 "data": {
  "name": "-- SETTINGS"
 },
 "propagateClick": true,
 "shadow": false,
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0
},
{
 "scrollBarWidth": 10,
 "layout": "absolute",
 "paddingLeft": 0,
 "children": [
  "this.Container_B996F276_9408_0C36_41E2_08CB6C07DEDA",
  "this.Container_B9961277_9408_0C36_41DA_ACC35EB11535"
 ],
 "id": "Container_B9963277_9408_0C36_41CA_3B48C00545A9",
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "0%",
 "borderSize": 0,
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "top": "0%",
 "contentOpaque": false,
 "bottom": "0%",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.6,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_B9963277_9408_0C36_41CA_3B48C00545A9, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false); this.openLink('https://www.instagram.com/radioonfm/', '_blank')",
 "borderRadius": 0,
 "paddingBottom": 0,
 "data": {
  "name": "--INFO photo"
 },
 "visible": false,
 "propagateClick": true,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minHeight": 1,
 "shadow": false
},
{
 "scrollBarWidth": 10,
 "layout": "absolute",
 "paddingLeft": 0,
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "0%",
 "borderSize": 0,
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "top": "0%",
 "contentOpaque": false,
 "bottom": "0%",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.6,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "borderRadius": 0,
 "paddingBottom": 0,
 "data": {
  "name": "--PANORAMA LIST"
 },
 "visible": false,
 "propagateClick": true,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minHeight": 1,
 "shadow": false
},
{
 "scrollBarWidth": 10,
 "layout": "absolute",
 "paddingLeft": 0,
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "0%",
 "borderSize": 0,
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "top": "0%",
 "contentOpaque": false,
 "bottom": "0%",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.6,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "borderRadius": 0,
 "paddingBottom": 0,
 "data": {
  "name": "--LOCATION"
 },
 "visible": false,
 "propagateClick": true,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minHeight": 1,
 "shadow": false
},
{
 "scrollBarWidth": 10,
 "layout": "absolute",
 "paddingLeft": 0,
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3"
 ],
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "0%",
 "borderSize": 0,
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "top": "0%",
 "contentOpaque": false,
 "bottom": "0%",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.6,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "borderRadius": 0,
 "paddingBottom": 0,
 "data": {
  "name": "--FLOORPLAN"
 },
 "visible": false,
 "propagateClick": true,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minHeight": 1,
 "shadow": false
},
{
 "scrollBarWidth": 10,
 "layout": "absolute",
 "paddingLeft": 0,
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "0%",
 "borderSize": 0,
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "top": "0%",
 "contentOpaque": false,
 "bottom": "0%",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.6,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "borderRadius": 0,
 "paddingBottom": 0,
 "data": {
  "name": "--PHOTOALBUM"
 },
 "visible": false,
 "propagateClick": true,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minHeight": 1,
 "shadow": false
},
{
 "scrollBarWidth": 10,
 "layout": "absolute",
 "paddingLeft": 0,
 "children": [
  "this.Container_A5AA03AD_9408_0CD5_41E2_1543D1B93E75",
  "this.Container_A5A903AD_9408_0CD5_41D1_FB45B5BD272C"
 ],
 "id": "Container_A5A8F3AD_9408_0CD5_41D1_81A13D72D5FD",
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#04A3E1",
 "right": "0%",
 "borderSize": 0,
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "top": "0%",
 "contentOpaque": false,
 "bottom": "0%",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.6,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_A5A8F3AD_9408_0CD5_41D1_81A13D72D5FD, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "borderRadius": 0,
 "paddingBottom": 0,
 "data": {
  "name": "--REALTOR"
 },
 "visible": false,
 "propagateClick": true,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minHeight": 1,
 "shadow": false
},
{
 "transparencyActive": true,
 "id": "IconButton_6658E837_74AF_8B56_41B5_2A29A6498E57",
 "width": 30,
 "borderSize": 0,
 "horizontalAlign": "center",
 "minWidth": 1,
 "iconURL": "skin/IconButton_6658E837_74AF_8B56_41B5_2A29A6498E57.png",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "toggle",
 "class": "IconButton",
 "backgroundOpacity": 0,
 "maxWidth": 60,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_6658E837_74AF_8B56_41B5_2A29A6498E57_pressed.png",
 "borderRadius": 0,
 "height": 30,
 "maxHeight": 60,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton Fullscreen"
 },
 "propagateClick": false,
 "shadow": false,
 "cursor": "hand",
 "minHeight": 1,
 "paddingLeft": 0
},
{
 "transparencyActive": true,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "width": 58,
 "borderSize": 0,
 "horizontalAlign": "center",
 "minWidth": 1,
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "toggle",
 "class": "IconButton",
 "backgroundOpacity": 0,
 "maxWidth": 58,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "borderRadius": 0,
 "height": 58,
 "maxHeight": 58,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "propagateClick": true,
 "shadow": false,
 "cursor": "hand",
 "minHeight": 1,
 "paddingLeft": 0
},
{
 "transparencyActive": true,
 "id": "IconButton_6658C838_74AF_8B5A_418E_C797984D8CAE",
 "width": 30,
 "borderSize": 0,
 "horizontalAlign": "center",
 "minWidth": 1,
 "iconURL": "skin/IconButton_6658C838_74AF_8B5A_418E_C797984D8CAE.png",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "toggle",
 "class": "IconButton",
 "backgroundOpacity": 0,
 "maxWidth": 60,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_6658C838_74AF_8B5A_418E_C797984D8CAE_pressed.png",
 "borderRadius": 0,
 "height": 30,
 "maxHeight": 60,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton Sound"
 },
 "propagateClick": false,
 "shadow": false,
 "cursor": "hand",
 "minHeight": 1,
 "paddingLeft": 0
},
{
 "transparencyActive": true,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "width": 58,
 "borderSize": 0,
 "horizontalAlign": "center",
 "minWidth": 1,
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "toggle",
 "class": "IconButton",
 "backgroundOpacity": 0,
 "maxWidth": 58,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "borderRadius": 0,
 "height": 58,
 "maxHeight": 58,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton MUTE"
 },
 "propagateClick": true,
 "shadow": false,
 "cursor": "hand",
 "minHeight": 1,
 "paddingLeft": 0
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_376B0DC9_3C22_B56E_41AE_4C8450E89C64, this.camera_5B85B4CE_4C46_2599_41CA_73806351517C); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 27,
   "pitch": -45.2,
   "yaw": 63.75,
   "image": "this.AnimatedImageResource_2D0B27F2_3C2E_D522_41C1_629A1CCB3802",
   "distance": 100
  }
 ],
 "id": "overlay_3249F714_3C26_D6E6_41AD_85B451816800",
 "data": {
  "label": "Arrow 03a"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 27,
   "yaw": 63.75,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3704C4DE_3C22_AB63_4196_7A0D03107F93_1_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -45.2
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_37C2C572_3C26_B522_41B2_52E5287F15EE, this.camera_5B88D4F5_4C46_258B_41BE_440509EE6CFC); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 26.21,
   "pitch": -46.84,
   "yaw": 157.43,
   "image": "this.AnimatedImageResource_4A252712_41AC_0A7D_41A9_C131C74886CB",
   "distance": 100
  }
 ],
 "id": "overlay_2F476AB5_3FE2_DF26_41B4_E60BC923CF95",
 "data": {
  "label": "Arrow 03a"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 26.21,
   "yaw": 157.43,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3704C4DE_3C22_AB63_4196_7A0D03107F93_0_HS_1_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -46.84
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_37C2C572_3C26_B522_41B2_52E5287F15EE, this.camera_5B64F541_4C46_248B_41C1_2B01F5F4478B); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 27.54,
   "pitch": -12.68,
   "yaw": -37.43,
   "image": "this.AnimatedImageResource_2D0A97F2_3C2E_D522_418D_23D5C885B3A9",
   "distance": 50
  }
 ],
 "id": "overlay_33033FAE_3C25_D522_41C2_1A1D9E8C439E",
 "data": {
  "label": "Arrow 02c Right-Up"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 27.54,
   "yaw": -37.43,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_377B27BF_3C62_D522_41C9_2F9AF5B604F0_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.68
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_37C2C572_3C26_B522_41B2_52E5287F15EE, this.camera_5B9C64A5_4C46_258B_417B_1847678D85B1); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 27.19,
   "pitch": -44.8,
   "yaw": 84.61,
   "image": "this.AnimatedImageResource_2D0B07F1_3C2E_D53E_41C3_CE537FF750C1",
   "distance": 100
  }
 ],
 "id": "overlay_2CD7B006_3C22_6AE2_41C1_C3BB048C9EFD",
 "data": {
  "label": "Arrow 03a"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 27.19,
   "yaw": 84.61,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_370FE265_3C22_AF21_41CC_848DFE70132F_1_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -44.8
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3704C4DE_3C22_AB63_4196_7A0D03107F93, this.camera_5B723518_4C46_24B9_4173_EA6A540FD300); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 34.08,
   "pitch": -27.2,
   "yaw": -74.52,
   "image": "this.AnimatedImageResource_2D0B77F2_3C2E_D522_4181_B20E382FB330",
   "distance": 100
  }
 ],
 "id": "overlay_324BCFCF_3C26_B562_41C0_57972119ADA9",
 "data": {
  "label": "Arrow 03a"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 34.08,
   "yaw": -74.52,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_376B0DC9_3C22_B56E_41AE_4C8450E89C64_1_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -27.2
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3704C4DE_3C22_AB63_4196_7A0D03107F93, this.camera_5BAE2454_4C46_2489_41C5_15981AA8C5C3); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 34.68,
   "pitch": -25.16,
   "yaw": -99.48,
   "image": "this.AnimatedImageResource_2D0B07ED_3C2E_D526_41CD_CE7B6A04DCC3",
   "distance": 100
  }
 ],
 "id": "overlay_324409E2_3C22_BD22_41A1_2FADFFA4582C",
 "data": {
  "label": "Arrow 03a"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 34.68,
   "yaw": -99.48,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_37C2C572_3C26_B522_41B2_52E5287F15EE_1_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -25.16
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_370FE265_3C22_AF21_41CC_848DFE70132F, this.camera_5BA0A429_4C46_249B_41C1_130B55F3C1A7); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 30.09,
   "pitch": -38.25,
   "yaw": -2.52,
   "image": "this.AnimatedImageResource_2D0BC7F0_3C2E_D53E_4163_FF35F384A8B0",
   "distance": 100
  }
 ],
 "id": "overlay_32415FF5_3C26_7526_41B2_9C824CD216C7",
 "data": {
  "label": "Arrow 03a"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 30.09,
   "yaw": -2.52,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_37C2C572_3C26_B522_41B2_52E5287F15EE_1_HS_1_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -38.25
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_377B27BF_3C62_D522_41C9_2F9AF5B604F0, this.camera_5B95F475_4C46_248B_4174_26CCDF7C3FD4); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 32.88,
   "pitch": -30.89,
   "yaw": 96.07,
   "image": "this.AnimatedImageResource_2D0BE7F1_3C2E_D53E_41CB_252670EAF949",
   "distance": 100
  }
 ],
 "id": "overlay_336C746A_3C26_EB22_41AB_85D0CE2E7E88",
 "data": {
  "label": "Arrow 03a"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 32.88,
   "yaw": 96.07,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_37C2C572_3C26_B522_41B2_52E5287F15EE_1_HS_2_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -30.89
  }
 ]
},
{
 "transparencyActive": true,
 "id": "IconButton_66589837_74AF_8B56_41D7_A6F4FAC02CC3",
 "width": 30,
 "borderSize": 0,
 "horizontalAlign": "center",
 "minWidth": 1,
 "iconURL": "skin/IconButton_66589837_74AF_8B56_41D7_A6F4FAC02CC3.png",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "class": "IconButton",
 "backgroundOpacity": 0,
 "maxWidth": 60,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 30,
 "maxHeight": 60,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton VR"
 },
 "propagateClick": false,
 "shadow": false,
 "cursor": "hand",
 "minHeight": 1,
 "paddingLeft": 0
},
{
 "transparencyActive": true,
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "width": 58,
 "borderSize": 0,
 "horizontalAlign": "center",
 "minWidth": 1,
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "class": "IconButton",
 "backgroundOpacity": 0,
 "maxWidth": 58,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 58,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "maxHeight": 58,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton VR"
 },
 "visible": false,
 "propagateClick": true,
 "shadow": false,
 "cursor": "hand",
 "minHeight": 1,
 "paddingLeft": 0
},
{
 "transparencyActive": true,
 "id": "IconButton_6658F838_74AF_8B5A_41C1_8DA59962CFF4",
 "width": 30,
 "borderSize": 0,
 "horizontalAlign": "center",
 "minWidth": 1,
 "iconURL": "skin/IconButton_6658F838_74AF_8B5A_41C1_8DA59962CFF4.png",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "toggle",
 "class": "IconButton",
 "backgroundOpacity": 0,
 "maxWidth": 60,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_6658F838_74AF_8B5A_41C1_8DA59962CFF4_pressed.png",
 "borderRadius": 0,
 "height": 30,
 "maxHeight": 60,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton Hs visibility"
 },
 "propagateClick": false,
 "shadow": false,
 "cursor": "hand",
 "minHeight": 1,
 "paddingLeft": 0
},
{
 "transparencyActive": true,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "width": 58,
 "borderSize": 0,
 "horizontalAlign": "center",
 "minWidth": 1,
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "toggle",
 "class": "IconButton",
 "backgroundOpacity": 0,
 "maxWidth": 58,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "borderRadius": 0,
 "height": 58,
 "maxHeight": 58,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton HS "
 },
 "propagateClick": true,
 "shadow": false,
 "cursor": "hand",
 "minHeight": 1,
 "paddingLeft": 0
},
{
 "transparencyActive": true,
 "id": "IconButton_6658D838_74AF_8B5A_41D7_154D466041BB",
 "width": 34,
 "borderSize": 0,
 "horizontalAlign": "center",
 "minWidth": 1,
 "iconURL": "skin/IconButton_6658D838_74AF_8B5A_41D7_154D466041BB.png",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "toggle",
 "class": "IconButton",
 "backgroundOpacity": 0,
 "maxWidth": 60,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_6658D838_74AF_8B5A_41D7_154D466041BB_pressed.png",
 "borderRadius": 0,
 "height": 34,
 "maxHeight": 60,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton Gyroscopic"
 },
 "propagateClick": false,
 "shadow": false,
 "cursor": "hand",
 "minHeight": 1,
 "paddingLeft": 0
},
{
 "transparencyActive": true,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "width": 58,
 "borderSize": 0,
 "horizontalAlign": "center",
 "minWidth": 1,
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "toggle",
 "class": "IconButton",
 "backgroundOpacity": 0,
 "maxWidth": 58,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "borderRadius": 0,
 "height": 58,
 "maxHeight": 58,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton GYRO"
 },
 "propagateClick": true,
 "shadow": false,
 "cursor": "hand",
 "minHeight": 1,
 "paddingLeft": 0
},
{
 "layout": "absolute",
 "children": [
  "this.Container_7FF195EF_706F_7FC6_41D7_A104CA87824D",
  "this.IconButton_7FF185EF_706F_7FC6_41A5_21B418265412"
 ],
 "id": "Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D",
 "left": "0%",
 "width": 66,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "top": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "class": "Container",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": "100%",
 "paddingBottom": 0,
 "data": {
  "name": "- COLLAPSE"
 },
 "visible": false,
 "propagateClick": true,
 "shadow": false,
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0
},
{
 "layout": "absolute",
 "children": [
  "this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36"
 ],
 "id": "Container_6396DD92_74B8_852E_41C7_7F2F88EAB543",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "left": "0%",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "top": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "width": "100%",
 "class": "Container",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": "100%",
 "paddingBottom": 0,
 "data": {
  "name": "- EXPANDED"
 },
 "propagateClick": false,
 "shadow": false,
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0
},
{
 "layout": "horizontal",
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "scrollBarColor": "#000000",
 "width": 110,
 "scrollBarOpacity": 0.5,
 "right": "0%",
 "borderSize": 0,
 "horizontalAlign": "center",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "verticalAlign": "middle",
 "top": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "class": "Container",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 110,
 "paddingBottom": 0,
 "data": {
  "name": "button menu sup"
 },
 "propagateClick": true,
 "shadow": false,
 "overflow": "visible",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0
},
{
 "layout": "vertical",
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
  "this.IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "0%",
 "borderSize": 0,
 "horizontalAlign": "center",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "bottom": "0%",
 "paddingRight": 0,
 "width": "91.304%",
 "class": "Container",
 "backgroundOpacity": 0,
 "gap": 3,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": "85.959%",
 "paddingBottom": 0,
 "data": {
  "name": "-button set"
 },
 "visible": false,
 "propagateClick": true,
 "shadow": false,
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0
},
{
 "layout": "horizontal",
 "children": [
  "this.Container_B996E276_9408_0C36_41BD_AC0FB14B3FE5",
  "this.Container_B9968277_9408_0C36_41DF_7DD400E5DB38"
 ],
 "id": "Container_B996F276_9408_0C36_41E2_08CB6C07DEDA",
 "left": "15%",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "right": "15%",
 "borderSize": 0,
 "horizontalAlign": "left",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "scrollBarOpacity": 0.5,
 "verticalAlign": "top",
 "top": "10%",
 "scrollBarVisible": "rollOver",
 "bottom": "10%",
 "shadowBlurRadius": 25,
 "paddingRight": 0,
 "shadowVerticalLength": 0,
 "class": "Container",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "gap": 10,
 "shadowSpread": 1,
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowHorizontalLength": 0,
 "paddingBottom": 0,
 "propagateClick": false,
 "data": {
  "name": "Global"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadow": true,
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0
},
{
 "layout": "vertical",
 "children": [
  "this.IconButton_B9960277_9408_0C36_41B1_6ED361CB8F52"
 ],
 "id": "Container_B9961277_9408_0C36_41DA_ACC35EB11535",
 "left": "15%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "15%",
 "borderSize": 0,
 "horizontalAlign": "right",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "top": "10%",
 "scrollBarVisible": "rollOver",
 "bottom": "80%",
 "paddingRight": 20,
 "class": "Container",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 20,
 "borderRadius": 0,
 "paddingBottom": 0,
 "data": {
  "name": "Container X global"
 },
 "propagateClick": false,
 "shadow": false,
 "overflow": "visible",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0
},
{
 "layout": "absolute",
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "15%",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "right": "15%",
 "borderSize": 0,
 "horizontalAlign": "center",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "scrollBarOpacity": 0.5,
 "verticalAlign": "top",
 "top": "10%",
 "scrollBarVisible": "rollOver",
 "bottom": "10%",
 "shadowBlurRadius": 25,
 "paddingRight": 0,
 "shadowVerticalLength": 0,
 "class": "Container",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "gap": 10,
 "shadowSpread": 1,
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowHorizontalLength": 0,
 "paddingBottom": 0,
 "propagateClick": false,
 "data": {
  "name": "Global"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadow": true,
 "overflow": "visible",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0
},
{
 "layout": "horizontal",
 "children": [
  "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA"
 ],
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "left": "15%",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "right": "15%",
 "borderSize": 0,
 "horizontalAlign": "left",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "scrollBarOpacity": 0.5,
 "verticalAlign": "top",
 "top": "10%",
 "scrollBarVisible": "rollOver",
 "bottom": "10%",
 "shadowBlurRadius": 25,
 "paddingRight": 0,
 "shadowVerticalLength": 0,
 "class": "Container",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "gap": 10,
 "shadowSpread": 1,
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowHorizontalLength": 0,
 "paddingBottom": 0,
 "propagateClick": false,
 "data": {
  "name": "Global"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadow": true,
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0
},
{
 "layout": "vertical",
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "left": "15%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "15%",
 "borderSize": 0,
 "horizontalAlign": "right",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "top": "10%",
 "scrollBarVisible": "rollOver",
 "bottom": "80%",
 "paddingRight": 20,
 "class": "Container",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 20,
 "borderRadius": 0,
 "paddingBottom": 0,
 "data": {
  "name": "Container X global"
 },
 "propagateClick": false,
 "shadow": false,
 "overflow": "visible",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0
},
{
 "layout": "absolute",
 "children": [
  "this.MapViewer",
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C"
 ],
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "left": "15%",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "right": "15%",
 "borderSize": 0,
 "horizontalAlign": "center",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "scrollBarOpacity": 0.5,
 "verticalAlign": "top",
 "top": "10%",
 "scrollBarVisible": "rollOver",
 "bottom": "10%",
 "shadowBlurRadius": 25,
 "paddingRight": 0,
 "shadowVerticalLength": 0,
 "class": "Container",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "gap": 10,
 "shadowSpread": 1,
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowHorizontalLength": 0,
 "paddingBottom": 0,
 "propagateClick": false,
 "data": {
  "name": "Global"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadow": true,
 "overflow": "visible",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0
},
{
 "layout": "vertical",
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "left": "15%",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "right": "15%",
 "borderSize": 0,
 "horizontalAlign": "center",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "top": "10%",
 "contentOpaque": false,
 "bottom": "10%",
 "shadowBlurRadius": 25,
 "paddingRight": 0,
 "shadowVerticalLength": 0,
 "class": "Container",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "gap": 10,
 "shadowSpread": 1,
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowHorizontalLength": 0,
 "paddingBottom": 0,
 "propagateClick": false,
 "data": {
  "name": "Global"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadow": true,
 "overflow": "visible",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0
},
{
 "layout": "horizontal",
 "children": [
  "this.Container_A5AA13AD_9408_0CD5_41CF_FB4C29E2A478",
  "this.Container_A5A9F3AD_9408_0CD5_41A0_74FB092FB5C4"
 ],
 "id": "Container_A5AA03AD_9408_0CD5_41E2_1543D1B93E75",
 "left": "15%",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "right": "15%",
 "borderSize": 0,
 "horizontalAlign": "left",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "scrollBarOpacity": 0.5,
 "verticalAlign": "top",
 "top": "10%",
 "scrollBarVisible": "rollOver",
 "bottom": "10%",
 "shadowBlurRadius": 25,
 "paddingRight": 0,
 "shadowVerticalLength": 0,
 "class": "Container",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "gap": 10,
 "shadowSpread": 1,
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowHorizontalLength": 0,
 "paddingBottom": 0,
 "propagateClick": false,
 "data": {
  "name": "Global"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadow": true,
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0
},
{
 "layout": "vertical",
 "children": [
  "this.IconButton_A5A913AD_9408_0CD5_41C1_92AE50E89242"
 ],
 "id": "Container_A5A903AD_9408_0CD5_41D1_FB45B5BD272C",
 "left": "15%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "15%",
 "borderSize": 0,
 "horizontalAlign": "right",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "top": "10%",
 "scrollBarVisible": "rollOver",
 "bottom": "80%",
 "paddingRight": 20,
 "class": "Container",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 20,
 "borderRadius": 0,
 "paddingBottom": 0,
 "data": {
  "name": "Container X global"
 },
 "propagateClick": false,
 "shadow": false,
 "overflow": "visible",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0
},
{
 "rowCount": 6,
 "frameCount": 30,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_3704C4DE_3C22_AB63_4196_7A0D03107F93_1_HS_0_0.png",
   "width": 925,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "colCount": 5,
 "id": "AnimatedImageResource_2D0B27F2_3C2E_D522_41C1_629A1CCB3802",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 30,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_3704C4DE_3C22_AB63_4196_7A0D03107F93_0_HS_1_0.png",
   "width": 925,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "colCount": 5,
 "id": "AnimatedImageResource_4A252712_41AC_0A7D_41A9_C131C74886CB",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_377B27BF_3C62_D522_41C9_2F9AF5B604F0_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_2D0A97F2_3C2E_D522_418D_23D5C885B3A9",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 30,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_370FE265_3C22_AF21_41CC_848DFE70132F_1_HS_0_0.png",
   "width": 925,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "colCount": 5,
 "id": "AnimatedImageResource_2D0B07F1_3C2E_D53E_41C3_CE537FF750C1",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 30,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_376B0DC9_3C22_B56E_41AE_4C8450E89C64_1_HS_0_0.png",
   "width": 925,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "colCount": 5,
 "id": "AnimatedImageResource_2D0B77F2_3C2E_D522_4181_B20E382FB330",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 30,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_37C2C572_3C26_B522_41B2_52E5287F15EE_1_HS_0_0.png",
   "width": 925,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "colCount": 5,
 "id": "AnimatedImageResource_2D0B07ED_3C2E_D526_41CD_CE7B6A04DCC3",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 30,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_37C2C572_3C26_B522_41B2_52E5287F15EE_1_HS_1_0.png",
   "width": 925,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "colCount": 5,
 "id": "AnimatedImageResource_2D0BC7F0_3C2E_D53E_4163_FF35F384A8B0",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 30,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_37C2C572_3C26_B522_41B2_52E5287F15EE_1_HS_2_0.png",
   "width": 925,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "colCount": 5,
 "id": "AnimatedImageResource_2D0BE7F1_3C2E_D53E_41CB_252670EAF949",
 "frameDuration": 41
},
{
 "scrollBarWidth": 10,
 "layout": "absolute",
 "paddingLeft": 0,
 "id": "Container_7FF195EF_706F_7FC6_41D7_A104CA87824D",
 "left": "0%",
 "width": 36,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "top": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "class": "Container",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.4,
 "backgroundColor": [
  "#000000"
 ],
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": "100%",
 "paddingBottom": 0,
 "data": {
  "name": "Container black"
 },
 "propagateClick": true,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "shadow": false
},
{
 "transparencyActive": true,
 "id": "IconButton_7FF185EF_706F_7FC6_41A5_21B418265412",
 "left": 10,
 "width": 44,
 "borderSize": 0,
 "horizontalAlign": "center",
 "minWidth": 1,
 "iconURL": "skin/IconButton_7FF185EF_706F_7FC6_41A5_21B418265412.png",
 "top": "40%",
 "bottom": "40%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "class": "IconButton",
 "backgroundOpacity": 0,
 "maxWidth": 50,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, false, 0, null, null, false); this.setComponentVisibility(this.Container_6396DD92_74B8_852E_41C7_7F2F88EAB543, true, 0, null, null, false)",
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_7FF185EF_706F_7FC6_41A5_21B418265412_rollover.png",
 "maxHeight": 50,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton arrow"
 },
 "propagateClick": true,
 "shadow": false,
 "cursor": "hand",
 "minHeight": 1,
 "paddingLeft": 0
},
{
 "scrollBarWidth": 10,
 "layout": "absolute",
 "paddingLeft": 40,
 "children": [
  "this.Container_7DB3F373_7065_34CE_41B4_E77DDA40A4F3",
  "this.Container_7DBCC382_7065_343F_41D5_9D3C36B5F479",
  "this.IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4",
  "this.Image_45F3A8FD_4CDE_2D7A_4199_B3AF75424ACC"
 ],
 "id": "Container_7DB20382_7065_343F_4186_6E0B0B3AFF36",
 "left": "0%",
 "width": 300,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "top": "0%",
 "contentOpaque": false,
 "paddingRight": 40,
 "class": "Container",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.7,
 "backgroundColor": [
  "#000000"
 ],
 "gap": 10,
 "paddingTop": 40,
 "borderRadius": 0,
 "height": "100%",
 "paddingBottom": 40,
 "data": {
  "name": "Container"
 },
 "propagateClick": true,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "shadow": false
},
{
 "transparencyActive": true,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "width": 60,
 "borderSize": 0,
 "horizontalAlign": "center",
 "minWidth": 1,
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "toggle",
 "class": "IconButton",
 "backgroundOpacity": 0,
 "maxWidth": 60,
 "paddingTop": 0,
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "borderRadius": 0,
 "height": 60,
 "maxHeight": 60,
 "paddingBottom": 0,
 "data": {
  "name": "image button menu"
 },
 "propagateClick": true,
 "shadow": false,
 "cursor": "hand",
 "minHeight": 1,
 "paddingLeft": 0
},
{
 "transparencyActive": true,
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "width": 58,
 "borderSize": 0,
 "horizontalAlign": "center",
 "minWidth": 1,
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "class": "IconButton",
 "backgroundOpacity": 0,
 "maxWidth": 58,
 "paddingTop": 0,
 "click": "this.shareTwitter(window.location.href)",
 "borderRadius": 0,
 "height": 58,
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "maxHeight": 58,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton TWITTER"
 },
 "propagateClick": true,
 "shadow": false,
 "cursor": "hand",
 "minHeight": 1,
 "paddingLeft": 0
},
{
 "transparencyActive": true,
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
 "width": 58,
 "borderSize": 0,
 "horizontalAlign": "center",
 "minWidth": 1,
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "class": "IconButton",
 "backgroundOpacity": 0,
 "maxWidth": 58,
 "paddingTop": 0,
 "click": "this.shareFacebook(window.location.href)",
 "borderRadius": 0,
 "height": 58,
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "maxHeight": 58,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton FB"
 },
 "propagateClick": true,
 "shadow": false,
 "cursor": "hand",
 "minHeight": 1,
 "paddingLeft": 0
},
{
 "scrollBarWidth": 10,
 "layout": "absolute",
 "paddingLeft": 0,
 "children": [
  "this.Image_B9969276_9408_0C37_41C5_602B653AB535"
 ],
 "id": "Container_B996E276_9408_0C36_41BD_AC0FB14B3FE5",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "horizontalAlign": "center",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "verticalAlign": "middle",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "width": "85%",
 "class": "Container",
 "backgroundOpacity": 1,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#000000"
 ],
 "paddingBottom": 0,
 "data": {
  "name": "-left"
 },
 "height": "100%",
 "propagateClick": false,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "shadow": false
},
{
 "scrollBarWidth": 10,
 "layout": "vertical",
 "paddingLeft": 50,
 "children": [
  "this.Container_B996B277_9408_0C36_41DE_565BF2C78252",
  "this.Container_B996A277_9408_0C36_41D0_24FA1ED91987",
  "this.Container_B9966277_9408_0C36_41DC_B82E2315D81F"
 ],
 "id": "Container_B9968277_9408_0C36_41DF_7DD400E5DB38",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.51,
 "scrollBarColor": "#0069A3",
 "borderSize": 0,
 "horizontalAlign": "left",
 "minWidth": 460,
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 50,
 "width": "50%",
 "class": "Container",
 "backgroundOpacity": 1,
 "gap": 0,
 "paddingTop": 20,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 20,
 "data": {
  "name": "-right"
 },
 "height": "100%",
 "propagateClick": false,
 "overflow": "visible",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minHeight": 1,
 "shadow": false
},
{
 "transparencyActive": false,
 "id": "IconButton_B9960277_9408_0C36_41B1_6ED361CB8F52",
 "pressedRollOverIconURL": "skin/IconButton_B9960277_9408_0C36_41B1_6ED361CB8F52_pressed_rollover.jpg",
 "borderSize": 0,
 "horizontalAlign": "center",
 "minWidth": 50,
 "width": "25%",
 "iconURL": "skin/IconButton_B9960277_9408_0C36_41B1_6ED361CB8F52.jpg",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "class": "IconButton",
 "backgroundOpacity": 0,
 "maxWidth": 60,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_B9963277_9408_0C36_41CA_3B48C00545A9, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_B9960277_9408_0C36_41B1_6ED361CB8F52_pressed.jpg",
 "borderRadius": 0,
 "height": "75%",
 "rollOverIconURL": "skin/IconButton_B9960277_9408_0C36_41B1_6ED361CB8F52_rollover.jpg",
 "maxHeight": 60,
 "paddingBottom": 0,
 "data": {
  "name": "X"
 },
 "propagateClick": false,
 "shadow": false,
 "cursor": "hand",
 "minHeight": 50,
 "paddingLeft": 0
},
{
 "scrollBarWidth": 10,
 "layout": "absolute",
 "paddingLeft": 0,
 "children": [
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "width": "100%",
 "class": "Container",
 "paddingRight": 0,
 "backgroundOpacity": 0.3,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 140,
 "paddingBottom": 0,
 "data": {
  "name": "header"
 },
 "propagateClick": false,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minHeight": 1,
 "shadow": false
},
{
 "itemMaxWidth": 1000,
 "shadow": false,
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "scrollBarColor": "#04A3E1",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "itemLabelHorizontalAlign": "center",
 "itemMode": "normal",
 "left": 0,
 "itemPaddingRight": 3,
 "minWidth": 1,
 "itemLabelFontFamily": "Oswald",
 "horizontalAlign": "center",
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "itemThumbnailOpacity": 1,
 "itemMaxHeight": 1000,
 "itemOpacity": 1,
 "width": "100%",
 "itemBorderRadius": 0,
 "paddingRight": 70,
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "selectedItemThumbnailShadowBlurRadius": 16,
 "verticalAlign": "middle",
 "selectedItemLabelFontColor": "#04A3E1",
 "itemLabelPosition": "bottom",
 "itemLabelFontStyle": "italic",
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "backgroundOpacity": 0,
 "height": "92%",
 "itemHorizontalAlign": "center",
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "itemBackgroundOpacity": 0,
 "itemPaddingLeft": 3,
 "itemThumbnailBorderRadius": 0,
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "itemPaddingTop": 3,
 "itemBackgroundColor": [],
 "itemWidth": 220,
 "itemBackgroundColorRatios": [],
 "propagateClick": false,
 "paddingLeft": 70,
 "itemMinHeight": 50,
 "borderSize": 0,
 "selectedItemThumbnailShadow": true,
 "itemLabelTextDecoration": "none",
 "rollOverItemLabelFontColor": "#04A3E1",
 "itemLabelFontWeight": "normal",
 "selectedItemLabelFontWeight": "bold",
 "rollOverItemThumbnailShadow": true,
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "scrollBarMargin": 2,
 "bottom": -0.2,
 "itemLabelFontSize": 16,
 "selectedItemThumbnailShadowVerticalLength": 0,
 "itemVerticalAlign": "top",
 "itemMinWidth": 50,
 "class": "ThumbnailGrid",
 "itemThumbnailScaleMode": "fit_outside",
 "itemHeight": 160,
 "gap": 26,
 "itemThumbnailHeight": 125,
 "paddingTop": 10,
 "itemLabelFontColor": "#666666",
 "itemBackgroundColorDirection": "vertical",
 "borderRadius": 5,
 "paddingBottom": 70,
 "data": {
  "name": "ThumbnailList"
 },
 "scrollBarWidth": 10,
 "itemThumbnailShadow": false,
 "itemLabelGap": 7,
 "itemPaddingBottom": 3,
 "minHeight": 1,
 "itemThumbnailWidth": 220
},
{
 "paddingLeft": 0,
 "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "minWidth": 1,
 "width": "100%",
 "scrollEnabled": true,
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14377.55330038866!2d-73.99492968084243!3d40.75084469078082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9f775f259%3A0x999668d0d7c3fd7d!2s400+5th+Ave%2C+New+York%2C+NY+10018!5e0!3m2!1ses!2sus!4v1467271743182",
 "paddingRight": 0,
 "class": "WebFrame",
 "insetBorder": false,
 "backgroundOpacity": 1,
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "data": {
  "name": "WebFrame48191"
 },
 "height": "100%",
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "shadow": false
},
{
 "transparencyActive": false,
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "borderSize": 0,
 "horizontalAlign": "center",
 "minWidth": 50,
 "width": "25%",
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "class": "IconButton",
 "backgroundOpacity": 0,
 "maxWidth": 60,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "borderRadius": 0,
 "height": "75%",
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "maxHeight": 60,
 "paddingBottom": 0,
 "data": {
  "name": "X"
 },
 "propagateClick": false,
 "shadow": false,
 "cursor": "hand",
 "minHeight": 50,
 "paddingLeft": 0
},
{
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipBorderColor": "#767676",
 "id": "MapViewer",
 "toolTipOpacity": 1,
 "left": 0,
 "toolTipFontSize": 12,
 "minHeight": 1,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarBackgroundColorDirection": "vertical",
 "minWidth": 1,
 "width": "100%",
 "playbackBarRight": 0,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "paddingRight": 0,
 "playbackBarBorderRadius": 0,
 "height": "99.975%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "transitionMode": "blending",
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "playbackBarHeadBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "paddingLeft": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "progressRight": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "borderSize": 0,
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "top": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "displayTooltipInTouchScreens": true,
 "class": "ViewerArea",
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipPaddingTop": 4,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "toolTipBorderRadius": 3,
 "paddingTop": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "borderRadius": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "paddingBottom": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 0,
 "data": {
  "name": "Floor Plan"
 },
 "progressBorderColor": "#FFFFFF",
 "playbackBarHeadOpacity": 1,
 "transitionDuration": 500,
 "toolTipShadowSpread": 0,
 "shadow": false
},
{
 "minHeight": 1,
 "layout": "absolute",
 "children": [
  "this.IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E"
 ],
 "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "width": "100%",
 "class": "Container",
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 140,
 "paddingBottom": 0,
 "data": {
  "name": "header"
 },
 "scrollBarWidth": 10,
 "shadow": false,
 "overflow": "scroll",
 "propagateClick": false,
 "paddingLeft": 0
},
{
 "scrollBarWidth": 10,
 "layout": "absolute",
 "paddingLeft": 0,
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "width": "100%",
 "class": "Container",
 "backgroundOpacity": 0.3,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "data": {
  "name": "Container photo"
 },
 "height": "100%",
 "propagateClick": false,
 "overflow": "visible",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minHeight": 1,
 "shadow": false
},
{
 "scrollBarWidth": 10,
 "layout": "absolute",
 "paddingLeft": 0,
 "children": [
  "this.Image_A5A9E3AD_9408_0CD5_41BF_1F19E227F697"
 ],
 "id": "Container_A5AA13AD_9408_0CD5_41CF_FB4C29E2A478",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "horizontalAlign": "center",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "verticalAlign": "middle",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "width": "55%",
 "class": "Container",
 "backgroundOpacity": 1,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#000000"
 ],
 "paddingBottom": 0,
 "data": {
  "name": "-left"
 },
 "height": "100%",
 "propagateClick": false,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "shadow": false
},
{
 "scrollBarWidth": 10,
 "layout": "vertical",
 "paddingLeft": 60,
 "children": [
  "this.Container_A5A9C3AD_9408_0CD5_41E1_5A6AE955D023",
  "this.Container_A5A983AD_9408_0CD5_41D3_D89DBFF204CA",
  "this.Container_A5A923AD_9408_0CD5_41CF_063715D940B6"
 ],
 "id": "Container_A5A9F3AD_9408_0CD5_41A0_74FB092FB5C4",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.51,
 "scrollBarColor": "#0069A3",
 "borderSize": 0,
 "horizontalAlign": "left",
 "minWidth": 460,
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 60,
 "width": "45%",
 "class": "Container",
 "backgroundOpacity": 1,
 "gap": 0,
 "paddingTop": 20,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 20,
 "data": {
  "name": "-right"
 },
 "height": "100%",
 "propagateClick": false,
 "overflow": "visible",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minHeight": 1,
 "shadow": false
},
{
 "transparencyActive": false,
 "id": "IconButton_A5A913AD_9408_0CD5_41C1_92AE50E89242",
 "pressedRollOverIconURL": "skin/IconButton_A5A913AD_9408_0CD5_41C1_92AE50E89242_pressed_rollover.jpg",
 "borderSize": 0,
 "horizontalAlign": "center",
 "minWidth": 50,
 "width": "25%",
 "iconURL": "skin/IconButton_A5A913AD_9408_0CD5_41C1_92AE50E89242.jpg",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "class": "IconButton",
 "backgroundOpacity": 0,
 "maxWidth": 60,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_A5A8F3AD_9408_0CD5_41D1_81A13D72D5FD, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_A5A913AD_9408_0CD5_41C1_92AE50E89242_pressed.jpg",
 "borderRadius": 0,
 "height": "75%",
 "rollOverIconURL": "skin/IconButton_A5A913AD_9408_0CD5_41C1_92AE50E89242_rollover.jpg",
 "maxHeight": 60,
 "paddingBottom": 0,
 "data": {
  "name": "X"
 },
 "propagateClick": false,
 "shadow": false,
 "cursor": "hand",
 "minHeight": 50,
 "paddingLeft": 0
},
{
 "layout": "vertical",
 "children": [
  "this.Container_7DB3E382_7065_343F_41C2_E1E6BB5BA055",
  "this.Button_7DB31382_7065_343F_41D6_641BBE1B2562",
  "this.Container_7DB30382_7065_343F_416C_8610BCBA9F50",
  "this.Button_7DB33382_7065_343F_41B1_0B0F019C1828",
  "this.Container_7DB32382_7065_343F_419E_6594814C420F",
  "this.Button_7DB35382_7065_343F_41C5_CF0EAF3E4CFF",
  "this.Container_7DB34382_7065_343F_41CB_A5B96E9749EE",
  "this.Button_7DB37382_7065_343F_41CC_EC41ABCCDE1B",
  "this.Container_7DBC9382_7065_343F_41CC_ED357655BB95",
  "this.Button_7DBC8382_7065_343F_4183_17B44518DB40",
  "this.Container_7DBCB382_7065_343F_41D8_AB382D384291",
  "this.Button_7DBCA382_7065_343F_41DB_48D975E3D9EC",
  "this.Container_7DBCD382_7065_343F_41D8_FC14DFF91DA9"
 ],
 "id": "Container_7DB3F373_7065_34CE_41B4_E77DDA40A4F3",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "0%",
 "borderSize": 0,
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "verticalAlign": "middle",
 "top": "10%",
 "contentOpaque": false,
 "bottom": "40%",
 "paddingRight": 0,
 "width": "100%",
 "class": "Container",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "gap": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "data": {
  "name": "-Container buttons"
 },
 "propagateClick": true,
 "shadow": false,
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0
},
{
 "layout": "vertical",
 "children": [
  "this.Container_7DB2F382_7065_343F_41C8_85C6AE9C717F",
  "this.Container_66588837_74AF_8B56_41CA_E204728E8E6C",
  "this.HTMLText_7DB2E382_7065_343F_41C2_951F708170F1"
 ],
 "id": "Container_7DBCC382_7065_343F_41D5_9D3C36B5F479",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "0%",
 "borderSize": 0,
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "top": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "width": "100%",
 "class": "Container",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 134,
 "paddingBottom": 0,
 "data": {
  "name": "-Container footer"
 },
 "propagateClick": true,
 "shadow": false,
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingLeft": 0
},
{
 "transparencyActive": true,
 "id": "IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4",
 "left": 0,
 "width": 42,
 "borderSize": 0,
 "horizontalAlign": "center",
 "minWidth": 1,
 "iconURL": "skin/IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4.png",
 "bottom": "0%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "class": "IconButton",
 "backgroundOpacity": 0,
 "maxWidth": 80,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_6396DD92_74B8_852E_41C7_7F2F88EAB543, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "borderRadius": 0,
 "height": 42,
 "rollOverIconURL": "skin/IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4_rollover.png",
 "maxHeight": 80,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton collapse"
 },
 "propagateClick": true,
 "shadow": false,
 "cursor": "hand",
 "minHeight": 1,
 "paddingLeft": 0
},
{
 "id": "Image_45F3A8FD_4CDE_2D7A_4199_B3AF75424ACC",
 "left": "0%",
 "borderSize": 0,
 "horizontalAlign": "center",
 "minWidth": 1,
 "width": "99.091%",
 "url": "skin/Image_45F3A8FD_4CDE_2D7A_4199_B3AF75424ACC.png",
 "verticalAlign": "middle",
 "bottom": "4.4%",
 "paddingRight": 0,
 "class": "Image",
 "backgroundOpacity": 0,
 "maxWidth": 500,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": "36.138%",
 "maxHeight": 500,
 "paddingBottom": 0,
 "data": {
  "name": "Image2279"
 },
 "propagateClick": false,
 "scaleMode": "fit_inside",
 "shadow": false,
 "minHeight": 1,
 "paddingLeft": 0
},
{
 "id": "Image_B9969276_9408_0C37_41C5_602B653AB535",
 "left": "0%",
 "borderSize": 0,
 "horizontalAlign": "center",
 "minWidth": 1,
 "width": "100%",
 "url": "skin/Image_B9969276_9408_0C37_41C5_602B653AB535.jpg",
 "verticalAlign": "middle",
 "top": "0%",
 "paddingRight": 0,
 "class": "Image",
 "backgroundOpacity": 0,
 "maxWidth": 2000,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": "100%",
 "maxHeight": 1000,
 "paddingBottom": 0,
 "data": {
  "name": "Image"
 },
 "propagateClick": false,
 "scaleMode": "fit_outside",
 "shadow": false,
 "minHeight": 1,
 "paddingLeft": 0
},
{
 "scrollBarWidth": 10,
 "layout": "horizontal",
 "paddingLeft": 0,
 "id": "Container_B996B277_9408_0C36_41DE_565BF2C78252",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "horizontalAlign": "right",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "width": "100%",
 "class": "Container",
 "paddingRight": 0,
 "backgroundOpacity": 0.3,
 "gap": 0,
 "paddingTop": 20,
 "borderRadius": 0,
 "height": 50,
 "paddingBottom": 0,
 "data": {
  "name": "Container space"
 },
 "propagateClick": false,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minHeight": 0,
 "shadow": false
},
{
 "scrollBarWidth": 10,
 "layout": "vertical",
 "paddingLeft": 0,
 "children": [
  "this.HTMLText_B9965277_9408_0C36_41B1_EBD814D91886",
  "this.Button_B9967277_9408_0C36_41E1_F924D3C0FF3B"
 ],
 "id": "Container_B996A277_9408_0C36_41D0_24FA1ED91987",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.79,
 "scrollBarColor": "#E73B2C",
 "borderSize": 0,
 "horizontalAlign": "left",
 "minWidth": 100,
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "width": "100%",
 "class": "Container",
 "backgroundOpacity": 0.3,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 10,
 "data": {
  "name": "Container text"
 },
 "height": "100%",
 "propagateClick": false,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minHeight": 300,
 "shadow": false
},
{
 "scrollBarWidth": 10,
 "layout": "horizontal",
 "paddingLeft": 0,
 "id": "Container_B9966277_9408_0C36_41DC_B82E2315D81F",
 "scrollBarColor": "#000000",
 "width": 370,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "paddingRight": 0,
 "backgroundOpacity": 0.3,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 30,
 "paddingBottom": 0,
 "data": {
  "name": "Container space"
 },
 "propagateClick": false,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minHeight": 1,
 "shadow": false
},
{
 "transparencyActive": false,
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "right": 20,
 "borderSize": 0,
 "horizontalAlign": "right",
 "minWidth": 50,
 "width": "100%",
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "verticalAlign": "top",
 "top": 20,
 "paddingRight": 0,
 "mode": "push",
 "class": "IconButton",
 "backgroundOpacity": 0,
 "maxWidth": 60,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "borderRadius": 0,
 "height": "36.14%",
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "maxHeight": 60,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton X"
 },
 "propagateClick": false,
 "shadow": false,
 "cursor": "hand",
 "minHeight": 50,
 "paddingLeft": 0
},
{
 "transparencyActive": false,
 "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
 "right": 20,
 "borderSize": 0,
 "horizontalAlign": "right",
 "minWidth": 50,
 "width": "100%",
 "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.jpg",
 "verticalAlign": "top",
 "top": 20,
 "paddingRight": 0,
 "mode": "push",
 "class": "IconButton",
 "backgroundOpacity": 0,
 "maxWidth": 60,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
 "borderRadius": 0,
 "height": "36.14%",
 "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.jpg",
 "maxHeight": 60,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton X"
 },
 "propagateClick": false,
 "shadow": false,
 "cursor": "hand",
 "minHeight": 50,
 "paddingLeft": 0
},
{
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipBorderColor": "#767676",
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "toolTipOpacity": 1,
 "left": "0%",
 "toolTipFontSize": 12,
 "minHeight": 1,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarBackgroundColorDirection": "vertical",
 "minWidth": 1,
 "width": "100%",
 "playbackBarRight": 0,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "paddingRight": 0,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "transitionMode": "blending",
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "playbackBarHeadBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "paddingLeft": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "progressRight": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "borderSize": 0,
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "top": "0%",
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "displayTooltipInTouchScreens": true,
 "class": "ViewerArea",
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipPaddingTop": 4,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "toolTipBorderRadius": 3,
 "paddingTop": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "borderRadius": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "paddingBottom": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 0,
 "data": {
  "name": "Viewer photoalbum 1"
 },
 "progressBorderColor": "#FFFFFF",
 "playbackBarHeadOpacity": 1,
 "transitionDuration": 500,
 "toolTipShadowSpread": 0,
 "shadow": false
},
{
 "transparencyActive": false,
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "left": 10,
 "borderSize": 0,
 "horizontalAlign": "center",
 "minWidth": 50,
 "width": "14.22%",
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "verticalAlign": "middle",
 "top": "20%",
 "bottom": "20%",
 "paddingRight": 0,
 "mode": "push",
 "class": "IconButton",
 "backgroundOpacity": 0,
 "maxWidth": 60,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "maxHeight": 60,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton <"
 },
 "propagateClick": true,
 "shadow": false,
 "cursor": "hand",
 "minHeight": 50,
 "paddingLeft": 0
},
{
 "transparencyActive": false,
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "right": 10,
 "borderSize": 0,
 "horizontalAlign": "center",
 "minWidth": 50,
 "width": "14.22%",
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "verticalAlign": "middle",
 "top": "20%",
 "bottom": "20%",
 "paddingRight": 0,
 "mode": "push",
 "class": "IconButton",
 "backgroundOpacity": 0,
 "maxWidth": 60,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "maxHeight": 60,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton >"
 },
 "propagateClick": true,
 "shadow": false,
 "cursor": "hand",
 "minHeight": 50,
 "paddingLeft": 0
},
{
 "transparencyActive": false,
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "right": 20,
 "borderSize": 0,
 "horizontalAlign": "right",
 "minWidth": 50,
 "width": "10%",
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
 "verticalAlign": "top",
 "top": 20,
 "paddingRight": 0,
 "mode": "push",
 "class": "IconButton",
 "backgroundOpacity": 0,
 "maxWidth": 60,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "borderRadius": 0,
 "height": "10%",
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "maxHeight": 60,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton X"
 },
 "propagateClick": true,
 "shadow": false,
 "cursor": "hand",
 "minHeight": 50,
 "paddingLeft": 0
},
{
 "id": "Image_A5A9E3AD_9408_0CD5_41BF_1F19E227F697",
 "left": "0%",
 "borderSize": 0,
 "horizontalAlign": "center",
 "minWidth": 1,
 "width": "100%",
 "url": "skin/Image_A5A9E3AD_9408_0CD5_41BF_1F19E227F697.jpg",
 "verticalAlign": "bottom",
 "top": "0%",
 "paddingRight": 0,
 "class": "Image",
 "backgroundOpacity": 0,
 "maxWidth": 2000,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": "100%",
 "maxHeight": 1000,
 "paddingBottom": 0,
 "data": {
  "name": "Image40635"
 },
 "propagateClick": false,
 "scaleMode": "fit_outside",
 "shadow": false,
 "minHeight": 1,
 "paddingLeft": 0
},
{
 "scrollBarWidth": 10,
 "layout": "horizontal",
 "paddingLeft": 0,
 "id": "Container_A5A9C3AD_9408_0CD5_41E1_5A6AE955D023",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "horizontalAlign": "right",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "width": "100%",
 "class": "Container",
 "backgroundOpacity": 0.3,
 "gap": 0,
 "paddingTop": 20,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "data": {
  "name": "Container space"
 },
 "height": "5%",
 "propagateClick": false,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minHeight": 0,
 "shadow": false
},
{
 "scrollBarWidth": 10,
 "layout": "vertical",
 "paddingLeft": 0,
 "children": [
  "this.HTMLText_A5A993AD_9408_0CD5_41E1_993F2394EAE8",
  "this.Container_A5A963AD_9408_0CD5_41BA_9AB3D9F15CDB"
 ],
 "id": "Container_A5A983AD_9408_0CD5_41D3_D89DBFF204CA",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.79,
 "scrollBarColor": "#E73B2C",
 "borderSize": 0,
 "horizontalAlign": "left",
 "minWidth": 100,
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "width": "100%",
 "class": "Container",
 "backgroundOpacity": 0.3,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 30,
 "data": {
  "name": "Container text"
 },
 "height": "100%",
 "propagateClick": false,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minHeight": 520,
 "shadow": false
},
{
 "scrollBarWidth": 10,
 "layout": "horizontal",
 "paddingLeft": 0,
 "id": "Container_A5A923AD_9408_0CD5_41CF_063715D940B6",
 "scrollBarColor": "#000000",
 "width": 370,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "paddingRight": 0,
 "backgroundOpacity": 0.3,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 40,
 "paddingBottom": 0,
 "data": {
  "name": "Container space"
 },
 "propagateClick": false,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minHeight": 1,
 "shadow": false
},
{
 "scrollBarWidth": 10,
 "layout": "absolute",
 "paddingLeft": 0,
 "id": "Container_7DB3E382_7065_343F_41C2_E1E6BB5BA055",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "width": "100%",
 "class": "Container",
 "paddingRight": 0,
 "backgroundOpacity": 0.3,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 1,
 "paddingBottom": 0,
 "data": {
  "name": "line"
 },
 "propagateClick": true,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minHeight": 1,
 "shadow": false
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "data": {
  "name": "Button Tour Info"
 },
 "shadowSpread": 1,
 "id": "Button_7DB31382_7065_343F_41D6_641BBE1B2562",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "minWidth": 1,
 "width": "100%",
 "iconHeight": 32,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "class": "Button",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "gap": 5,
 "paddingTop": 0,
 "label": "Facebook",
 "borderRadius": 0,
 "height": 50,
 "click": "this.openLink('https://www.facebook.com/radioonfm', '_blank')",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "minHeight": 1,
 "pressedBackgroundOpacity": 1,
 "paddingLeft": 10
},
{
 "scrollBarWidth": 10,
 "layout": "absolute",
 "paddingLeft": 0,
 "id": "Container_7DB30382_7065_343F_416C_8610BCBA9F50",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "width": "100%",
 "class": "Container",
 "paddingRight": 0,
 "backgroundOpacity": 0.3,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 1,
 "paddingBottom": 0,
 "data": {
  "name": "line"
 },
 "propagateClick": true,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minHeight": 1,
 "shadow": false
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "data": {
  "name": "Button Panorama List"
 },
 "shadowSpread": 1,
 "id": "Button_7DB33382_7065_343F_41B1_0B0F019C1828",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "minWidth": 1,
 "width": "100%",
 "iconHeight": 32,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "class": "Button",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "gap": 23,
 "paddingTop": 0,
 "label": "Instagram",
 "borderRadius": 0,
 "height": 50,
 "click": "this.openLink('https://www.instagram.com/radioonfm/', '_blank')",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "minHeight": 1,
 "pressedBackgroundOpacity": 1,
 "paddingLeft": 10
},
{
 "scrollBarWidth": 10,
 "layout": "absolute",
 "paddingLeft": 0,
 "id": "Container_7DB32382_7065_343F_419E_6594814C420F",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "width": "100%",
 "class": "Container",
 "paddingRight": 0,
 "backgroundOpacity": 0.3,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 1,
 "paddingBottom": 0,
 "data": {
  "name": "line"
 },
 "propagateClick": true,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minHeight": 1,
 "shadow": false
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "pressedLabel": "Location",
 "shadowSpread": 1,
 "id": "Button_7DB35382_7065_343F_41C5_CF0EAF3E4CFF",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "minWidth": 1,
 "width": "100%",
 "iconHeight": 32,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "class": "Button",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "gap": 5,
 "paddingTop": 0,
 "label": "WhatsApp",
 "borderRadius": 0,
 "height": 50,
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "minHeight": 1,
 "data": {
  "name": "Button Location"
 },
 "paddingLeft": 10
},
{
 "scrollBarWidth": 10,
 "layout": "absolute",
 "paddingLeft": 0,
 "id": "Container_7DB34382_7065_343F_41CB_A5B96E9749EE",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "width": "100%",
 "class": "Container",
 "paddingRight": 0,
 "backgroundOpacity": 0.3,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 1,
 "paddingBottom": 0,
 "data": {
  "name": "line"
 },
 "propagateClick": true,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minHeight": 1,
 "shadow": false
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "data": {
  "name": "Button Floorplan"
 },
 "shadowSpread": 1,
 "id": "Button_7DB37382_7065_343F_41CC_EC41ABCCDE1B",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "minWidth": 1,
 "width": "100%",
 "iconHeight": 32,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "class": "Button",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "gap": 5,
 "paddingTop": 0,
 "label": "Localiza\u00e7\u00e3o",
 "borderRadius": 0,
 "height": 50,
 "click": "this.openLink('https://goo.gl/maps/W7u6jotvZa5FU2Jx5', '_blank')",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "minHeight": 1,
 "pressedBackgroundOpacity": 1,
 "paddingLeft": 10
},
{
 "scrollBarWidth": 10,
 "layout": "absolute",
 "paddingLeft": 0,
 "id": "Container_7DBC9382_7065_343F_41CC_ED357655BB95",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "width": "100%",
 "class": "Container",
 "paddingRight": 0,
 "backgroundOpacity": 0.3,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 1,
 "paddingBottom": 0,
 "data": {
  "name": "line"
 },
 "propagateClick": true,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minHeight": 1,
 "shadow": false
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "data": {
  "name": "Button Photoalbum"
 },
 "shadowSpread": 1,
 "id": "Button_7DBC8382_7065_343F_4183_17B44518DB40",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "minWidth": 1,
 "width": "100%",
 "iconHeight": 32,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "class": "Button",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "gap": 5,
 "paddingTop": 0,
 "label": "Aplicativo Android",
 "borderRadius": 0,
 "height": 50,
 "click": "this.openLink('https://play.google.com/store/apps/details?id=appradio.pro.virtues.ag.phyladelfia.app', '_blank')",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "minHeight": 1,
 "pressedBackgroundOpacity": 1,
 "paddingLeft": 10
},
{
 "scrollBarWidth": 10,
 "layout": "absolute",
 "paddingLeft": 0,
 "id": "Container_7DBCB382_7065_343F_41D8_AB382D384291",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "width": "100%",
 "class": "Container",
 "paddingRight": 0,
 "backgroundOpacity": 0.3,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 1,
 "paddingBottom": 0,
 "data": {
  "name": "line"
 },
 "propagateClick": true,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minHeight": 1,
 "shadow": false
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "data": {
  "name": "Button Contact"
 },
 "shadowSpread": 1,
 "id": "Button_7DBCA382_7065_343F_41DB_48D975E3D9EC",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "minWidth": 1,
 "width": "100%",
 "iconHeight": 32,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "class": "Button",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "gap": 5,
 "paddingTop": 0,
 "label": "Aplicativo iOS",
 "borderRadius": 0,
 "height": 50,
 "click": "this.openLink('https://apps.apple.com/us/app/r%C3%A1dio-on-fm-brasil/id1543049346', '_blank')",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "minHeight": 1,
 "pressedBackgroundOpacity": 1,
 "paddingLeft": 10
},
{
 "scrollBarWidth": 10,
 "layout": "absolute",
 "paddingLeft": 0,
 "id": "Container_7DBCD382_7065_343F_41D8_FC14DFF91DA9",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "width": "100%",
 "class": "Container",
 "paddingRight": 0,
 "backgroundOpacity": 0.3,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 1,
 "paddingBottom": 0,
 "data": {
  "name": "line"
 },
 "propagateClick": true,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minHeight": 1,
 "shadow": false
},
{
 "scrollBarWidth": 10,
 "layout": "horizontal",
 "paddingLeft": 0,
 "id": "Container_7DB2F382_7065_343F_41C8_85C6AE9C717F",
 "scrollBarColor": "#000000",
 "width": 40,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#5CA1DE"
 ],
 "class": "Container",
 "paddingRight": 0,
 "backgroundOpacity": 1,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 2,
 "paddingBottom": 0,
 "data": {
  "name": "blue line"
 },
 "visible": false,
 "propagateClick": true,
 "overflow": "visible",
 "backgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "shadow": false
},
{
 "minHeight": 1,
 "layout": "horizontal",
 "children": [
  "this.IconButton_66589837_74AF_8B56_41D7_A6F4FAC02CC3",
  "this.IconButton_6658E837_74AF_8B56_41B5_2A29A6498E57",
  "this.IconButton_6658F838_74AF_8B5A_41C1_8DA59962CFF4",
  "this.IconButton_6658C838_74AF_8B5A_418E_C797984D8CAE",
  "this.IconButton_6658D838_74AF_8B5A_41D7_154D466041BB"
 ],
 "id": "Container_66588837_74AF_8B56_41CA_E204728E8E6C",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "verticalAlign": "middle",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "width": "100%",
 "class": "Container",
 "backgroundOpacity": 0,
 "gap": 16,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 40,
 "paddingBottom": 0,
 "data": {
  "name": "-Container settings"
 },
 "scrollBarWidth": 10,
 "shadow": false,
 "overflow": "scroll",
 "propagateClick": false,
 "paddingLeft": 0
},
{
 "minHeight": 1,
 "id": "HTMLText_7DB2E382_7065_343F_41C2_951F708170F1",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "width": "100%",
 "paddingRight": 0,
 "class": "HTMLText",
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 78,
 "paddingBottom": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Company Name</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>www.loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>info@loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Tlf.: +11 111 111 111</I></SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText47602"
 },
 "visible": false,
 "scrollBarWidth": 10,
 "shadow": false,
 "propagateClick": true,
 "paddingLeft": 0
},
{
 "minHeight": 1,
 "id": "HTMLText_B9965277_9408_0C36_41B1_EBD814D91886",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#04A3E1",
 "borderSize": 0,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "width": "100%",
 "paddingRight": 10,
 "class": "HTMLText",
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": "100%",
 "paddingBottom": 20,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:8.46vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.98vh;font-family:'Oswald';\"><B><I>LOREM IPSUM</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.98vh;font-family:'Oswald';\"><B><I>DOLOR SIT AME</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.49vh;font-family:'Oswald';\"><B>CONSECTETUR ADIPISCING ELIT. MORBI BIBENDUM PHARETRA LOREM, ACCUMSAN SAN NULLA.</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV><p STYLE=\"margin:0; line-height:1vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></DIV><p STYLE=\"margin:0; line-height:2.49vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.49vh;font-family:'Oswald';\"><B><I>DONEC FEUGIAT:</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.66vh;\"> </SPAN>\u2022 Nisl nec mi sollicitudin facilisis </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Nam sed faucibus est.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Ut eget lorem sed leo.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></DIV><p STYLE=\"margin:0; line-height:2.49vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.49vh;font-family:'Oswald';\"><B><I>LOREM IPSUM:</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.82vh;font-family:'Oswald';\"><B>$150,000</B></SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText"
 },
 "scrollBarWidth": 10,
 "shadow": false,
 "propagateClick": false,
 "paddingLeft": 10
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0
 ],
 "layout": "horizontal",
 "paddingLeft": 0,
 "id": "Button_B9967277_9408_0C36_41E1_F924D3C0FF3B",
 "width": 180,
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "center",
 "minWidth": 1,
 "iconHeight": 32,
 "pressedBackgroundColorRatios": [
  0
 ],
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "backgroundColor": [
  "#04A3E1"
 ],
 "mode": "push",
 "class": "Button",
 "paddingRight": 0,
 "fontSize": "2.39vh",
 "rollOverBackgroundOpacity": 1,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "backgroundOpacity": 0.7,
 "iconBeforeLabel": true,
 "gap": 5,
 "paddingTop": 0,
 "label": "LOREM IPSUM",
 "borderRadius": 50,
 "height": 50,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "shadowSpread": 1,
 "propagateClick": false,
 "pressedBackgroundOpacity": 1,
 "data": {
  "name": "Button31015"
 },
 "fontWeight": "bold",
 "cursor": "hand",
 "minHeight": 1,
 "shadow": false
},
{
 "minHeight": 1,
 "id": "HTMLText_A5A993AD_9408_0CD5_41E1_993F2394EAE8",
 "scrollBarOpacity": 0,
 "scrollBarColor": "#04A3E1",
 "borderSize": 0,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "width": "100%",
 "paddingRight": 0,
 "class": "HTMLText",
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": "46%",
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:8.46vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.98vh;font-family:'Oswald';\"><B><I>LOREM IPSUM</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.98vh;font-family:'Oswald';\"><B><I>DOLOR SIT AMET</I></B></SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText18899"
 },
 "scrollBarWidth": 10,
 "shadow": false,
 "propagateClick": false,
 "paddingLeft": 0
},
{
 "scrollBarWidth": 10,
 "layout": "horizontal",
 "paddingLeft": 0,
 "children": [
  "this.Image_A5A973AD_9408_0CD5_41C4_50A6AD2BD681",
  "this.HTMLText_A5A943AD_9408_0CD5_41DD_7A51684E2843"
 ],
 "id": "Container_A5A963AD_9408_0CD5_41BA_9AB3D9F15CDB",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "width": "100%",
 "class": "Container",
 "backgroundOpacity": 0.3,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "data": {
  "name": "- content"
 },
 "height": "75%",
 "propagateClick": false,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minHeight": 1,
 "shadow": false
},
{
 "id": "Image_A5A973AD_9408_0CD5_41C4_50A6AD2BD681",
 "horizontalAlign": "left",
 "borderSize": 0,
 "minWidth": 1,
 "width": "25%",
 "url": "skin/Image_A5A973AD_9408_0CD5_41C4_50A6AD2BD681.jpg",
 "verticalAlign": "top",
 "paddingRight": 0,
 "class": "Image",
 "backgroundOpacity": 0,
 "maxWidth": 200,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": "100%",
 "maxHeight": 200,
 "paddingBottom": 0,
 "data": {
  "name": "agent photo"
 },
 "propagateClick": false,
 "scaleMode": "fit_inside",
 "shadow": false,
 "minHeight": 1,
 "paddingLeft": 0
},
{
 "minHeight": 1,
 "id": "HTMLText_A5A943AD_9408_0CD5_41DD_7A51684E2843",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#04A3E1",
 "borderSize": 0,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "width": "75%",
 "paddingRight": 10,
 "class": "HTMLText",
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": "100%",
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.49vh;font-family:'Oswald';\"><B><I>JOHN DOE</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.49vh;font-family:'Oswald';\"><I>Licensed Real Estate Salesperson</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.66vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.66vh;font-family:'Oswald';\"><I>Tlf.: +11 111 111 111</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.66vh;font-family:'Oswald';\"><I>jhondoe@realestate.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.66vh;font-family:'Oswald';\"><I>www.loremipsum.com</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV></div>",
 "data": {
  "name": "HTMLText19460"
 },
 "scrollBarWidth": 10,
 "shadow": false,
 "propagateClick": false,
 "paddingLeft": 10
}],
 "scrollBarWidth": 10,
 "layout": "absolute",
 "paddingLeft": 0,
 "children": [
  "this.MainViewer",
  "this.Container_7F59BED9_7065_6DCD_41D6_B4AD3EEA9174",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_B9963277_9408_0C36_41CA_3B48C00545A9",
  "this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
  "this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
  "this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
  "this.Container_A5A8F3AD_9408_0CD5_41D1_81A13D72D5FD"
 ],
 "id": "rootPlayer",
 "vrPolyfillScale": 0.67,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "horizontalAlign": "left",
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_6658D838_74AF_8B5A_41D7_154D466041BB,this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_6658E837_74AF_8B56_41B5_2A29A6498E57,this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }; this.playAudioList([this.audio_5E731FEE_4C42_6396_41D0_FF4ED62B124B])",
 "minWidth": 20,
 "scrollBarVisible": "rollOver",
 "mobileMipmappingEnabled": false,
 "creationPolicy": "inAdvance",
 "buttonToggleFullscreen": [
  "this.IconButton_6658E837_74AF_8B56_41B5_2A29A6498E57",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0"
 ],
 "scripts": {
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "unregisterKey": function(key){  delete window[key]; },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "existsKey": function(key){  return key in window; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "registerKey": function(key, value){  window[key] = value; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getKey": function(key){  return window[key]; }
 },
 "defaultVRPointer": "laser",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "backgroundPreloadEnabled": true,
 "class": "Player",
 "downloadEnabled": false,
 "width": "100%",
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "mouseWheelEnabled": true,
 "paddingBottom": 0,
 "data": {
  "name": "Player468"
 },
 "desktopMipmappingEnabled": false,
 "height": "100%",
 "propagateClick": true,
 "buttonToggleMute": [
  "this.IconButton_6658C838_74AF_8B5A_418E_C797984D8CAE",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D"
 ],
 "overflow": "visible",
 "minHeight": 20,
 "shadow": false
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
