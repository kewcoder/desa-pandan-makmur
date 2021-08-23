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
    // console.log(response);
    let dataDesa = response.data
    console.log(dataDesa)

    let listDusun = ``;
    dataDesa.datadusun.forEach(dusun => {

    let dataDusun = `
      <div class="dusun">
                  <div class="data-dusun">
                    <h4> Dusun <br> ${dusun.nama_dusun}</h4>
                    <br>
                    <div>
                    <b>${dusun.jumlah_penduduk} </b> Penduduk <br>
                    <b>${dusun.jumlah_laki_laki} </b> Laki-laki <br>
                    <b>${dusun.jumlah_perempuan} </b> Perempuan  <br>
                    <b>${dusun.jumlah_keluarga} </b> Keluarga
                      </div>
                  </div>
              </div>
  `
      listDusun += dataDusun
    });

    document.querySelector(".list-dusun").innerHTML = listDusun

    let listTotalPenduduk = `
      <div class="list-item">
          <strong>${dataDesa.dataseluruh.jumlah_laki_laki}</strong>  Laki-laki
      </div>
      <div class="list-item">
          <strong>${dataDesa.dataseluruh.jumlah_perempuan}</strong> Perempuan
      </div>
      <div class="list-item">
          <strong>${dataDesa.dataseluruh.jumlah_penduduk}</strong> Total Penduduk
      </div>
      <div class="list-item">
          <strong>${dataDesa.dataseluruh.jumlah_keluarga}</strong>  Keluarga
      </div>`
      document.querySelector(".list-total-penduduk").innerHTML = listTotalPenduduk
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