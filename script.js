function kirimData() {
    // Retrieve input values
    var nama = document.getElementById("nama").value;
    var tanggal = document.getElementById("tanggal").value;
    var pilihan = document.getElementById("pilihan").value;
    var kelasKursi = document.querySelector('input[name="peminatan"]:checked').value;
    var alamat = document.getElementById("alamat").value;
    var pesanMakan = document.getElementById("pesan-makan").value;
  
    // Create the pop-up message
    var message =
      "Nama: " + nama +
      "\nTanggal: " + tanggal +
      "\nPilihan Jumlah Kursi: " + pilihan +
      "\nKelas Kursi: " + kelasKursi +
      "\nAlamat: " + alamat +
      "\nPesan Makan: " + pesanMakan;
  
    // Display the pop-up message
    alert(message);
  
    // Prevent the form from submitting
    return false;
  }
  