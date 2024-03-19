document.getElementById('formPegawaiForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let nama = document.getElementById('nama').value;
    let jabatan = document.getElementById('jabatan').value;
    let status = document.getElementById('status').value;
  
    // Hitung gaji pokok berdasarkan jabatan
    let gajiPokok;
    switch (jabatan) {
      case 'Manager':
        gajiPokok = 15000000;
        break;
      case 'Asisten Manager':
        gajiPokok = 10000000;
        break;
      case 'Staff':
        gajiPokok = 5000000;
        break;
      default:
        gajiPokok = 0;
    }
  
    // Hitung tunjangan jabatan
    let tunjanganJabatan = gajiPokok * 0.15;
    let bpjs = gajiPokok * 0.10;
    let tunjanganKeluarga = status === 'menikah' ? gajiPokok * 0.20 : 0;
    let totalGaji = gajiPokok + tunjanganJabatan - bpjs + tunjanganKeluarga;
  
    let message = `
      Nama Pegawai: ${nama}
      Jabatan: ${jabatan}
      Status: ${status}
      Gaji Pokok: ${gajiPokok}
      Tunjangan Jabatan: ${tunjanganJabatan}
      BPJS: ${bpjs}
      Tunjangan Keluarga: ${tunjanganKeluarga}
      Total Gaji: ${totalGaji}
    `;
    alert(message);
  
    document.getElementById('dataPegawai').style.display = 'table';
  });
  