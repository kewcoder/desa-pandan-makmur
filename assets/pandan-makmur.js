// console.log("Desa Pandan Makmur")
new FinisherHeader({
  "count": 10,
  "size": {
    "min": 2,
    "max": 40,
    "pulse": 0
  },
  "speed": {
    "x": {
      "min": 0,
      "max": 0.8
    },
    "y": {
      "min": 0,
      "max": 0.2
    }
  },
  "colors": {
    "background": "#15182e",
    "particles": [
      "#ff926b",
      "#87ddfe",
      "#acaaff",
      "#1bffc2",
      "#f9a5fe"
    ]
  },
  "blending": "screen",
  "opacity": {
    "center": 1,
    "edge": 1
  },
  "skew": -1,
  "shapes": [
    "s",
    "t",
    "c"
  ]
});
// Make a request for a user with a given ID
axios.get('/data-desa.json')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });

  setTimeout(function(){
    let loading = document.getElementById("loading")
    console.log(loading)
    loading.classList.add("hidden");

  }, 2000)