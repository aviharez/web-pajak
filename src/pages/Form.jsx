import React, { useState, Fragment } from 'react';
import logo from './../assets/kemenkeu-logo.png'
import "./../app.scss"
import { Link } from 'react-router-dom'

function currencyFormatter(price) {
  const priceValue = price.replace(/\./g, "");
  return priceValue.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
};

function replacePriceDot(text) {
  return text.replace(/\./g, "")
}

const Form = () => {

  const [dataUmum, setDataUmum] = useState([
    {
      nomor: '',
      namaWajib: '', npwp: '', kpp: '', alamat: '', klu: '', tahunPajak: '',
      kegiatanUsaha: '',
      tahunRisk: '', nilaiRisk: '',
      tagihPajak: '',
      mataUang: '',
      memenuhiKewajiban: '', lampiran: '',
      unit1: '', jabatan1: '', nama1: '',
      unit2: '', jabatan2: '', nama2: '',
      unit3: '', jabatan3: '', nama3: '',
      unit4: '', jabatan4: '', nama4: '',
    }
  ]);

  // array 
  const [riwayatLaporan, setRiwayatLaporan] = useState([
    { nomorLHA: '', sumberLHA: '', nilaiLHA: '' }
  ]);

  const [pohonKepemilikan, setPohonKepemilikan] = useState([
    { nama: '', jmlModal: '', dividen: '', alamat: '', persentase: '' }
  ]);

  const [riwayatPengawasan, setRiwayatPengawasan] = useState([
    { nomorSp: '', jenisPajak: '', tahunPajak: '', nilaiPotensi: '', status: '', realisasi: '' }
  ]);

  const [hasilPeriksa, setHasilPeriksa] = useState([
    { jenisPajak: '', tahun: '', cfmSpt: '', cfmPeriksa: '', koreksi: '' }
  ]);

  const [koreksiHasil, setKoreksiHasil] = useState([
    { tahun: '', jenisPajak: '', sumberKoreksi: '', alasanKoreksi: '' }
  ]);

  const [transferPricing, setTransferPricing] = useState([
    { analisis: '' }
  ]);

  const [hasilKunjungan, setHasilKunjungan] = useState([
    { nomor: '', tanggal: '', hasil: '' }
  ]);

  const [faktaLapangan, setFaktaLapangan] = useState([
    { fakta: '' }
  ]);

  const [pengaduanMasyarakat, setPengaduanMasyarakat] = useState([
    { tahunPajak: '', jenisData: '', tindakLanjut: '', nilaiData: '', modusOper: '' }
  ]);

  const [indikasiKetidakpatuhan, setIndikasiKetidakpatuhan] = useState([
    { indikasi: '' }
  ]);

  const [modusKetidakpatuhan, setModusKetidakpatuhan] = useState([
    { modus: '' }
  ]);

  const [dataLampiran, setDataLampiran] = useState([
    { lampiran: '' }
  ]);

  const [potensi, setPotensi] = useState([
    { tahunPajak: '', jenisData: '', nilaiPotensi: '' }
  ]);

  const [aktivaLancar, setAktivaLancar] = useState([
    { akun: '', tahun1: '', nilaiTahun1: '', tahun2: '', nilaiTahun2: '', tahun3: '', nilaiTahun3: '', keterangan: '' }
  ]);

  const [aktivaTetap, setAktivaTetap] = useState([
    { akun: '', tahun1: '', nilaiTahun1: '', tahun2: '', nilaiTahun2: '', tahun3: '', nilaiTahun3: '', keterangan: '' }
  ]);

  const [kewajibanLancar, setKewajibanLancar] = useState([
    { akun: '', tahun1: '', nilaiTahun1: '', tahun2: '', nilaiTahun2: '', tahun3: '', nilaiTahun3: '', keterangan: '' }
  ]);

  const [liabilitasPanjang, setLiabilitasPanjang] = useState([
    { akun: '', tahun1: '', nilaiTahun1: '', tahun2: '', nilaiTahun2: '', tahun3: '', nilaiTahun3: '', keterangan: '' }
  ]);

  const [ekuitas, setEkuitas] = useState([
    { akun: '', tahun1: '', nilaiTahun1: '', tahun2: '', nilaiTahun2: '', tahun3: '', nilaiTahun3: '', keterangan: '' }
  ]);

  const [pendapatan, setPendapatan] = useState([
    { akun: '', tahun1: '', nilaiTahun1: '', tahun2: '', nilaiTahun2: '', tahun3: '', nilaiTahun3: '', keterangan: '' }
  ]);

  const [hargaPokok, setHargaPokok] = useState([
    { akun: '', tahun1: '', nilaiTahun1: '', tahun2: '', nilaiTahun2: '', tahun3: '', nilaiTahun3: '', keterangan: '' }
  ]);

  const [persediaanAkhir, setPersediaanAkhir] = useState([
    { akun: '', tahun1: '', nilaiTahun1: '', tahun2: '', nilaiTahun2: '', tahun3: '', nilaiTahun3: '', keterangan: '' }
  ]);

  const [biayaLabaPenjualan, setBiayaLabaPenjualan] = useState([
    { akun: '', tahun1: '', nilaiTahun1: '', tahun2: '', nilaiTahun2: '', tahun3: '', nilaiTahun3: '', keterangan: '' }
  ]);

  const [biayaLabaUmum, setBiayaLabaUmum] = useState([
    { akun: '', tahun1: '', nilaiTahun1: '', tahun2: '', nilaiTahun2: '', tahun3: '', nilaiTahun3: '', keterangan: '' }
  ]);

  const [pendapatanBeban, setPendapatanBeban] = useState([
    { akun: '', tahun1: '', nilaiTahun1: '', tahun2: '', nilaiTahun2: '', tahun3: '', nilaiTahun3: '', keterangan: '' }
  ]);

  const [pajakLain, setPajakLain] = useState([
    { uraian: '', cfmSpt: '', cfmPenelitian: '', keterangan: '' }
  ]);

  const [hasilKeberatan, setHasilKeberatan] = useState([
    { masaPajak: '', jenisPajak: '', cfmPemeriksa: '', cfmBanding: '', koreksi: '' }
  ]);

  const [koreksiKeberatan, setKoreksiKeberatan] = useState([
    { masaPajak: '', jenisPajak: '', risalahKeputusan: '' }
  ]);


  const handleSubmit = e => {
    e.preventDefault();
    console.log("inputFields", dataUmum);

  }

  // Handle input
  const handleInputRiwayatLaporan = (index, event) => {
    const values = [...riwayatLaporan];
    if (event.target.name === "nomorLHA") {
      values[index].nomorLHA = event.target.value;
    } else if (event.target.name === "sumberLHA") {
      values[index].sumberLHA = event.target.value;
    } else {
      values[index].nilaiLHA = event.target.value;
    }

    setRiwayatLaporan(values);
  }

  const handleInputPohonKepemilikan = (index, event) => {
    const values = [...pohonKepemilikan];
    if (event.target.name === "nama") {
      values[index].nama = event.target.value;
    } else if (event.target.name === "jmlModal") {
      values[index].jmlModal = replacePriceDot(event.target.value);
    } else if (event.target.name === "npwp") {
      values[index].npwp = event.target.value;
    } else if (event.target.name === "dividen") {
      values[index].dividen = event.target.value;
    } else if (event.target.name === "alamat") {
      values[index].alamat = event.target.value;
    } else {
      values[index].persentase = event.target.value;
    }

    setPohonKepemilikan(values);
  }

  const handleInputRiwayatPengawasan = (index, event) => {
    const values = [...riwayatPengawasan];
    if (event.target.name === "nomorSp") {
      values[index].nomorSp = event.target.value;
    } else if (event.target.name === "jenisPajak") {
      values[index].jenisPajak = event.target.value;
    } else if (event.target.name === "tahunPajak") {
      values[index].tahunPajak = event.target.value;
    } else if (event.target.name === "nilaiPotensi") {
      values[index].nilaiPotensi = event.target.value;
    } else if (event.target.name === "status") {
      values[index].status = event.target.value;
    } else {
      values[index].realisasi = event.target.value;
    }

    setRiwayatPengawasan(values);
  }

  const handleInputHasilPeriksa = (index, event) => {
    const values = [...hasilPeriksa];
    if (event.target.name === "jenisPajak") {
      values[index].jenisPajak = event.target.value;
    } else if (event.target.name === "tahun") {
      values[index].tahun = event.target.value;
    } else if (event.target.name === "cfmSpt") {
      values[index].cfmSpt = event.target.value;
    } else if (event.target.name === "cfmPeriksa") {
      values[index].cfmPeriksa = event.target.value;
    } else {
      values[index].koreksi = event.target.value;
    }

    setHasilPeriksa(values);
  }

  const handleInputKoreksiHasil = (index, event) => {
    const values = [...koreksiHasil];
    if (event.target.name === "tahun") {
      values[index].tahun = event.target.value;
    } else if (event.target.name === "jenisPajak") {
      values[index].jenisPajak = event.target.value;
    } else if (event.target.name === "sumberKoreksi") {
      values[index].sumberKoreksi = event.target.value;
    } else {
      values[index].alasanKoreksi = event.target.value;
    }

    setKoreksiHasil(values);
  }

  const handleInputTransferPricing = (index, event) => {
    const values = [...transferPricing];
    values[index].analisis = event.target.value;
    setTransferPricing(values);
  }

  const handleInputHasilKunjungan = (index, event) => {
    const values = [...hasilKunjungan];
    if (event.target.name === "nomor") {
      values[index].nomor = event.target.value;
    } else if (event.target.name === "tanggal") {
      values[index].tanggal = event.target.value;
    } else {
      values[index].hasil = event.target.value;
    }

    setHasilKunjungan(values);
  }

  const handleInputFaktaLapangan = (index, event) => {
    const values = [...faktaLapangan];
    values[index].fakta = event.target.value;
    setFaktaLapangan(values);
  }

  const handleInputPengaduanMasyarakat = (index, event) => {
    const values = [...pengaduanMasyarakat];
    if (event.target.name === "tahunPajak") {
      values[index].tahunPajak = event.target.value;
    } else if (event.target.name === "jenisData") {
      values[index].jenisData = event.target.value;
    } else if (event.target.name === "tindakLanjut") {
      values[index].tindakLanjut = event.target.value;
    } else if (event.target.name === "nilaiData") {
      values[index].nilaiData = event.target.value;
    } else {
      values[index].modusOper = event.target.value;
    }

    setPengaduanMasyarakat(values);
  }

  const handleInputIndikasiKetidakpatuhan = (index, event) => {
    const values = [...indikasiKetidakpatuhan];
    values[index].indikasi = event.target.value;
    setIndikasiKetidakpatuhan(values);
  }

  const handleInputModusKetidakpatuhan = (index, event) => {
    const values = [...modusKetidakpatuhan];
    values[index].modus = event.target.value;
    setModusKetidakpatuhan(values);
  }

  const handleInputLampiran = (index, event) => {
    const values = [...dataLampiran];
    values[index].lampiran = event.target.value;
    setDataLampiran(values);
  }

  const handleInputPotensi = (index, event) => {
    const values = [...potensi];
    if (event.target.name === "tahunPajak") {
      values[index].tahunPajak = event.target.value;
    } else if (event.target.name === "jenisData") {
      values[index].jenisData = event.target.value;
    } else {
      values[index].nilaiPotensi = event.target.value;
    }
    setPotensi(values);
  }

  const handleInputAktivaLancar = (index, event) => {
    const values = [...aktivaLancar];
    if (event.target.name === "akun") {
      values[index].akun = event.target.value;
    } else if (event.target.name === "tahun1") {
      values[index].tahun1 = event.target.value;
    } else if (event.target.name === "nilaiTahun1") {
      values[index].nilaiTahun1 = replacePriceDot(event.target.value);
    } else if (event.target.name === "tahun2") {
      values[index].tahun2 = event.target.value;
    } else if (event.target.name === "nilaiTahun2") {
      values[index].nilaiTahun2 = replacePriceDot(event.target.value)
    } else if (event.target.name === "tahun3") {
      values[index].tahun3 = event.target.value;
    } else if (event.target.name === "nilaiTahun3") {
      values[index].nilaiTahun3 = replacePriceDot(event.target.value)
    } else {
      values[index].keterangan = event.target.value;
    }
    setAktivaLancar(values);
  }

  const handleInputAktivaTetap = (index, event) => {
    const values = [...aktivaTetap];
    if (event.target.name === "akun") {
      values[index].akun = event.target.value;
    } else if (event.target.name === "tahun1") {
      values[index].tahun1 = event.target.value;
    } else if (event.target.name === "nilaiTahun1") {
      values[index].nilaiTahun1 = replacePriceDot(event.target.value)
    } else if (event.target.name === "tahun2") {
      values[index].tahun2 = event.target.value;
    } else if (event.target.name === "nilaiTahun2") {
      values[index].nilaiTahun2 = replacePriceDot(event.target.value)
    } else if (event.target.name === "tahun3") {
      values[index].tahun3 = event.target.value;
    } else if (event.target.name === "nilaiTahun3") {
      values[index].nilaiTahun3 = replacePriceDot(event.target.value)
    } else {
      values[index].keterangan = event.target.value;
    }
    setAktivaTetap(values);
  }

  const handleInputKewajibanLancar = (index, event) => {
    const values = [...kewajibanLancar];
    if (event.target.name === "akun") {
      values[index].akun = event.target.value;
    } else if (event.target.name === "tahun1") {
      values[index].tahun1 = event.target.value;
    } else if (event.target.name === "nilaiTahun1") {
      values[index].nilaiTahun1 = replacePriceDot(event.target.value)
    } else if (event.target.name === "tahun2") {
      values[index].tahun2 = event.target.value;
    } else if (event.target.name === "nilaiTahun2") {
      values[index].nilaiTahun2 = replacePriceDot(event.target.value)
    } else if (event.target.name === "tahun3") {
      values[index].tahun3 = event.target.value;
    } else if (event.target.name === "nilaiTahun3") {
      values[index].nilaiTahun3 = replacePriceDot(event.target.value)
    } else {
      values[index].keterangan = event.target.value;
    }
    setKewajibanLancar(values);
  }

  const handleInputLiabilitasPanjang = (index, event) => {
    const values = [...liabilitasPanjang];
    if (event.target.name === "akun") {
      values[index].akun = event.target.value;
    } else if (event.target.name === "tahun1") {
      values[index].tahun1 = event.target.value;
    } else if (event.target.name === "nilaiTahun1") {
      values[index].nilaiTahun1 = replacePriceDot(event.target.value)
    } else if (event.target.name === "tahun2") {
      values[index].tahun2 = event.target.value;
    } else if (event.target.name === "nilaiTahun2") {
      values[index].nilaiTahun2 = replacePriceDot(event.target.value)
    } else if (event.target.name === "tahun3") {
      values[index].tahun3 = event.target.value;
    } else if (event.target.name === "nilaiTahun3") {
      values[index].nilaiTahun3 = replacePriceDot(event.target.value)
    } else {
      values[index].keterangan = event.target.value;
    }
    setLiabilitasPanjang(values);
  }

  const handleInputEkuitas = (index, event) => {
    const values = [...ekuitas];
    if (event.target.name === "akun") {
      values[index].akun = event.target.value;
    } else if (event.target.name === "tahun1") {
      values[index].tahun1 = event.target.value;
    } else if (event.target.name === "nilaiTahun1") {
      values[index].nilaiTahun1 = replacePriceDot(event.target.value)
    } else if (event.target.name === "tahun2") {
      values[index].tahun2 = event.target.value;
    } else if (event.target.name === "nilaiTahun2") {
      values[index].nilaiTahun2 = replacePriceDot(event.target.value)
    } else if (event.target.name === "tahun3") {
      values[index].tahun3 = event.target.value;
    } else if (event.target.name === "nilaiTahun3") {
      values[index].nilaiTahun3 = replacePriceDot(event.target.value)
    } else {
      values[index].keterangan = event.target.value;
    }
    setEkuitas(values);
  }

  const handleInputPendapatan = (index, event) => {
    const values = [...pendapatan];
    if (event.target.name === "akun") {
      values[index].akun = event.target.value;
    } else if (event.target.name === "tahun1") {
      values[index].tahun1 = event.target.value;
    } else if (event.target.name === "nilaiTahun1") {
      values[index].nilaiTahun1 = replacePriceDot(event.target.value)
    } else if (event.target.name === "tahun2") {
      values[index].tahun2 = event.target.value;
    } else if (event.target.name === "nilaiTahun2") {
      values[index].nilaiTahun2 = replacePriceDot(event.target.value)
    } else if (event.target.name === "tahun3") {
      values[index].tahun3 = event.target.value;
    } else if (event.target.name === "nilaiTahun3") {
      values[index].nilaiTahun3 = replacePriceDot(event.target.value)
    } else {
      values[index].keterangan = event.target.value;
    }
    setPendapatan(values);
  }

  const handleInputHargaPokok = (index, event) => {
    const values = [...hargaPokok];
    if (event.target.name === "akun") {
      values[index].akun = event.target.value;
    } else if (event.target.name === "tahun1") {
      values[index].tahun1 = event.target.value;
    } else if (event.target.name === "nilaiTahun1") {
      values[index].nilaiTahun1 = replacePriceDot(event.target.value)
    } else if (event.target.name === "tahun2") {
      values[index].tahun2 = event.target.value;
    } else if (event.target.name === "nilaiTahun2") {
      values[index].nilaiTahun2 = replacePriceDot(event.target.value)
    } else if (event.target.name === "tahun3") {
      values[index].tahun3 = event.target.value;
    } else if (event.target.name === "nilaiTahun3") {
      values[index].nilaiTahun3 = replacePriceDot(event.target.value)
    } else {
      values[index].keterangan = event.target.value;
    }
    setHargaPokok(values);
  }

  const handleInputPersediaanAkhir = (index, event) => {
    const values = [...persediaanAkhir];
    if (event.target.name === "akun") {
      values[index].akun = event.target.value;
    } else if (event.target.name === "tahun1") {
      values[index].tahun1 = event.target.value;
    } else if (event.target.name === "nilaiTahun1") {
      values[index].nilaiTahun1 = replacePriceDot(event.target.value)
    } else if (event.target.name === "tahun2") {
      values[index].tahun2 = event.target.value;
    } else if (event.target.name === "nilaiTahun2") {
      values[index].nilaiTahun2 = replacePriceDot(event.target.value)
    } else if (event.target.name === "tahun3") {
      values[index].tahun3 = event.target.value;
    } else if (event.target.name === "nilaiTahun3") {
      values[index].nilaiTahun3 = replacePriceDot(event.target.value)
    } else {
      values[index].keterangan = event.target.value;
    }
    setPersediaanAkhir(values);
  }

  const handleInputBiayaLabaPenjualan = (index, event) => {
    const values = [...biayaLabaPenjualan];
    if (event.target.name === "akun") {
      values[index].akun = event.target.value;
    } else if (event.target.name === "tahun1") {
      values[index].tahun1 = event.target.value;
    } else if (event.target.name === "nilaiTahun1") {
      values[index].nilaiTahun1 = replacePriceDot(event.target.value)
    } else if (event.target.name === "tahun2") {
      values[index].tahun2 = event.target.value;
    } else if (event.target.name === "nilaiTahun2") {
      values[index].nilaiTahun2 = replacePriceDot(event.target.value)
    } else if (event.target.name === "tahun3") {
      values[index].tahun3 = event.target.value;
    } else if (event.target.name === "nilaiTahun3") {
      values[index].nilaiTahun3 = replacePriceDot(event.target.value)
    } else {
      values[index].keterangan = event.target.value;
    }
    setBiayaLabaPenjualan(values);
  }

  const handleInputBiayaLabaUmum = (index, event) => {
    const values = [...biayaLabaUmum];
    if (event.target.name === "akun") {
      values[index].akun = event.target.value;
    } else if (event.target.name === "tahun1") {
      values[index].tahun1 = event.target.value;
    } else if (event.target.name === "nilaiTahun1") {
      values[index].nilaiTahun1 = replacePriceDot(event.target.value)
    } else if (event.target.name === "tahun2") {
      values[index].tahun2 = event.target.value;
    } else if (event.target.name === "nilaiTahun2") {
      values[index].nilaiTahun2 = replacePriceDot(event.target.value)
    } else if (event.target.name === "tahun3") {
      values[index].tahun3 = event.target.value;
    } else if (event.target.name === "nilaiTahun3") {
      values[index].nilaiTahun3 = replacePriceDot(event.target.value)
    } else {
      values[index].keterangan = event.target.value;
    }
    setBiayaLabaUmum(values);
  }

  const handleInputPendapatanBeban = (index, event) => {
    const values = [...pendapatanBeban];
    if (event.target.name === "akun") {
      values[index].akun = event.target.value;
    } else if (event.target.name === "tahun1") {
      values[index].tahun1 = event.target.value;
    } else if (event.target.name === "nilaiTahun1") {
      values[index].nilaiTahun1 = replacePriceDot(event.target.value)
    } else if (event.target.name === "tahun2") {
      values[index].tahun2 = event.target.value;
    } else if (event.target.name === "nilaiTahun2") {
      values[index].nilaiTahun2 = replacePriceDot(event.target.value)
    } else if (event.target.name === "tahun3") {
      values[index].tahun3 = event.target.value;
    } else if (event.target.name === "nilaiTahun3") {
      values[index].nilaiTahun3 = replacePriceDot(event.target.value)
    } else {
      values[index].keterangan = event.target.value;
    }
    setPendapatanBeban(values);
  }

  const handleInputDataUmum = (index, event) => {
    const values = [...dataUmum];
    switch (event.target.name) {
      case "nomor":
        values[index].nomor = event.target.value;
        break;
      case "namaWajib":
        values[index].namaWajib = event.target.value;
        break;
      case "npwp":
        values[index].npwp = event.target.value;
        break;
      case "kpp":
        values[index].kpp = event.target.value;
        break;
      case "alamat":
        values[index].alamat = event.target.value;
        break;
      case "klu":
        values[index].klu = event.target.value;
        break;
      case "tahunPajak":
        values[index].tahunPajak = event.target.value;
        break;
      case "kegiatanUsaha":
        values[index].kegiatanUsaha = event.target.value;
        break;
      case "tahunRisk":
        values[index].tahunRisk = event.target.value;
        break;
      case "nilaiRisk":
        values[index].nilaiRisk = event.target.value;
        break;
      case "tagihPajak":
        values[index].tagihPajak = event.target.value;
        break;
      case "mataUang":
        values[index].mataUang = event.target.value;
        break;
      case "memenuhiKewajiban":
        values[index].memenuhiKewajiban = event.target.value;
        break;
      case "lampiran":
        values[index].lampiran = event.target.value;
        break;
      case "unit1":
        values[index].unit1 = event.target.value;
        break;
      case "jabatan1":
        values[index].jabatan1 = event.target.value;
        break;
      case "nama1":
        values[index].nama1 = event.target.value;
        break;
      case "unit2":
        values[index].unit2 = event.target.value;
        break;
      case "jabatan2":
        values[index].jabatan2 = event.target.value;
        break;
      case "nama2":
        values[index].nama2 = event.target.value;
        break;
      case "unit3":
        values[index].unit3 = event.target.value;
        break;
      case "jabatan3":
        values[index].jabatan3 = event.target.value;
        break;
      case "nama3":
        values[index].nama3 = event.target.value;
        break;
      case "unit4":
        values[index].unit4 = event.target.value;
        break;
      case "jabatan4":
        values[index].jabatan4 = event.target.value;
        break;
      case "nama4":
        values[index].nama4 = event.target.value;
        break;
      default:
        alert("Something went wrong");

    }
    setDataUmum(values);
  }

  const handleInputPajakLain = (index, event) => {
    const values = [...pajakLain];
    if (event.target.name === "uraian") {
      values[index].uraian = event.target.value;
    } else if (event.target.name === "cfmSpt") {
      values[index].cfmSpt = event.target.value;
    } else if (event.target.name === "cfmPenelitian") {
      values[index].cfmPenelitian = event.target.value;
    } else {
      values[index].keterangan = event.target.value;
    }
    setPajakLain(values);
  }

  const handleInputHasilKeberatan = (index, event) => {
    const values = [...hasilKeberatan];
    if (event.target.name === "masaPajak") {
      values[index].masaPajak = event.target.value;
    } else if (event.target.name === "jenisPajak") {
      values[index].jenisPajak = event.target.value;
    } else if (event.target.name === "cfmPemeriksa") {
      values[index].cfmPemeriksa = event.target.value;
    } else if (event.target.name === "cfmBanding") {
      values[index].cfmBanding = event.target.value;
    } else {
      values[index].koreksi = event.target.value;
    }
    setHasilKeberatan(values);
  }

  const handleInputKoreksiKeberatan = (index, event) => {
    const values = [...koreksiKeberatan];
    if (event.target.name === "masaPajak") {
      values[index].masaPajak = event.target.value;
    } else if (event.target.name === "jenisPajak") {
      values[index].jenisPajak = event.target.value;
    } else {
      values[index].risalahKeputusan = event.target.value;
    }
    setKoreksiKeberatan(values);
  }



  // Handle Add
  const handleAddRiwayatLaporan = () => {
    const values = [...riwayatLaporan];
    values.push({ nomorLHA: '', sumberLHA: '', nilaiLHA: '' });
    setRiwayatLaporan(values);
  }

  const handleAddPohonKepemilikan = () => {
    const values = [...pohonKepemilikan];
    values.push({ nama: '', jmlModal: '', npwp: '', dividen: '', alamat: '', persentase: '' });
    setPohonKepemilikan(values);
  }

  const handleAddRiwayatPengawasan = () => {
    const values = [...riwayatPengawasan];
    values.push({ nomorSp: '', jenisPajak: '', nilaiPotensi: '', status: '', realisasi: '' });
    setRiwayatPengawasan(values);
  }

  const handleAddHasilPeriksa = () => {
    const values = [...hasilPeriksa];
    values.push({ jenisPajak: '', tahun: '', cfmSpt: '', cfmPeriksa: '', koreksi: '' });
    setHasilPeriksa(values);
  }

  const handleAddKoreksiHasil = () => {
    const values = [...koreksiHasil];
    values.push({ tahun: '', jenisPajak: '', sumberKoreksi: '', alasanKoreksi: '' });
    setKoreksiHasil(values);
  }

  const handleAddTransferPricing = () => {
    const values = [...transferPricing];
    values.push({ analisis: '' });
    setTransferPricing(values);
  }

  const handleAddHasilKunjungan = () => {
    const values = [...hasilKunjungan];
    values.push({ nomor: '', tanggal: '', hasil: '' });
    setHasilKunjungan(values);
  }

  const handleAddFaktaLapangan = () => {
    const values = [...faktaLapangan];
    values.push({ fakta: '' });
    setFaktaLapangan(values);
  }

  const handleAddPengaduanMasyarakat = () => {
    const values = [...pengaduanMasyarakat];
    values.push({ tahunPajak: '', jenisData: '', tindakLanjut: '', nilaiData: '', modusOper: '' });
    setPengaduanMasyarakat(values);
  }

  const handleAddIndikasiKetidakpatuhan = () => {
    const values = [...indikasiKetidakpatuhan];
    values.push({ indikasi: '' });
    setIndikasiKetidakpatuhan(values);
  }

  const handleAddModusKetidakpatuhan = () => {
    const values = [...modusKetidakpatuhan];
    values.push({ modus: '' });
    setModusKetidakpatuhan(values);
  }

  const handleAddLampiran = () => {
    const values = [...dataLampiran];
    values.push({ lampiran: '' });
    setDataLampiran(values);
  }

  const handleAddPotensi = () => {
    const values = [...potensi];
    values.push({ tahunPajak: '', jenisData: '', nilaiPotensi: '' });
    setPotensi(values);
  }

  const handleAddAktivaLancar = () => {
    const values = [...aktivaLancar];
    values.push({ akun: '', tahun1: '', nilaiTahun1: '', tahun2: '', nilaiTahun2: '', tahun3: '', nilaiTahun3: '', keterangan: '' });
    setAktivaLancar(values);
  }

  const handleAddAktivaTetap = () => {
    const values = [...aktivaTetap];
    values.push({ akun: '', tahun1: '', nilaiTahun1: '', tahun2: '', nilaiTahun2: '', tahun3: '', nilaiTahun3: '', keterangan: '' });
    setAktivaTetap(values);
  }

  const handleAddKewajibanLancar = () => {
    const values = [...kewajibanLancar];
    values.push({ akun: '', tahun1: '', nilaiTahun1: '', tahun2: '', nilaiTahun2: '', tahun3: '', nilaiTahun3: '', keterangan: '' });
    setKewajibanLancar(values);
  }

  const handleAddLiabilitasPanjang = () => {
    const values = [...liabilitasPanjang];
    values.push({ akun: '', tahun1: '', nilaiTahun1: '', tahun2: '', nilaiTahun2: '', tahun3: '', nilaiTahun3: '', keterangan: '' });
    setLiabilitasPanjang(values);
  }

  const handleAddEkuitas = () => {
    const values = [...ekuitas];
    values.push({ akun: '', tahun1: '', nilaiTahun1: '', tahun2: '', nilaiTahun2: '', tahun3: '', nilaiTahun3: '', keterangan: '' });
    setEkuitas(values);
  }

  const handleAddPendapatan = () => {
    const values = [...pendapatan];
    values.push({ akun: '', tahun1: '', nilaiTahun1: '', tahun2: '', nilaiTahun2: '', tahun3: '', nilaiTahun3: '', keterangan: '' });
    setPendapatan(values);
  }

  const handleAddHargaPokok = () => {
    const values = [...hargaPokok];
    values.push({ akun: '', tahun1: '', nilaiTahun1: '', tahun2: '', nilaiTahun2: '', tahun3: '', nilaiTahun3: '', keterangan: '' });
    setHargaPokok(values);
  }

  const handleAddPersediaanAkhir = () => {
    const values = [...persediaanAkhir];
    values.push({ akun: '', tahun1: '', nilaiTahun1: '', tahun2: '', nilaiTahun2: '', tahun3: '', nilaiTahun3: '', keterangan: '' });
    setPersediaanAkhir(values);
  }

  // const handleAddBiayaLaba = () => {
  //   const values = [...biayaLaba];
  //   values.push({ akun: '', tahun1: '', nilaiTahun1: '', tahun2: '', nilaiTahun2: '', tahun3: '', nilaiTahun3: '', keterangan: '' });
  //   setBiayaLaba(values);
  // }

  const handleAddBiayaLabaPenjualan = () => {
    const values = [...biayaLabaPenjualan];
    values.push({ akun: '', tahun1: '', nilaiTahun1: '', tahun2: '', nilaiTahun2: '', tahun3: '', nilaiTahun3: '', keterangan: '' });
    setBiayaLabaPenjualan(values);
  }

  const handleAddBiayaLabaUmum = () => {
    const values = [...biayaLabaUmum];
    values.push({ akun: '', tahun1: '', nilaiTahun1: '', tahun2: '', nilaiTahun2: '', tahun3: '', nilaiTahun3: '', keterangan: '' });
    setBiayaLabaUmum(values);
  }

  const handleAddPendapatanBeban = () => {
    const values = [...pendapatanBeban];
    values.push({ akun: '', tahun1: '', nilaiTahun1: '', tahun2: '', nilaiTahun2: '', tahun3: '', nilaiTahun3: '', keterangan: '' });
    setPendapatanBeban(values);
  }

  const handleAddPajakLain = () => {
    const values = [...pajakLain];
    values.push({ uraian: '', cfmSpt: '', cfmPenelitian: '', keterangan: '' });
    setPajakLain(values);
  }

  const handleAddHasilKeberatan = () => {
    const values = [...hasilKeberatan];
    values.push({ masaPajak: '', jenisPajak: '', cfmPemeriksa: '', cfmBanding: '', koreksi: '' });
    setHasilKeberatan(values);
  }

  const handleAddKoreksiKeberatan = () => {
    const values = [...koreksiKeberatan];
    values.push({ masaPajak: '', jenisPajak: '', risalahKeberatan: '' });
    setKoreksiKeberatan(values);
  }

  // Handle Remove
  const handleRemoveRiwayatLaporan = index => {
    const values = [...riwayatLaporan];
    values.splice(index, 1);
    setRiwayatLaporan(values);
  }

  const handleRemovePohonKepemilikan = index => {
      const values = [...pohonKepemilikan];
      if(values.length > 1) {
        values.splice(index, 1);
        setPohonKepemilikan(values);
      }
  }

  const handleRemoveRiwayatPengawasan = index => {
    const values = [...riwayatPengawasan];
    if(values.length > 1) {
      values.splice(index, 1);
      setRiwayatPengawasan(values);
    }
  }

  const handleRemoveHasilPeriksa = index => {
    const values = [...hasilPeriksa];
    if(values.length > 1) {
      values.splice(index, 1);
      setHasilPeriksa(values);
    }
  }

  const handleRemoveKoreksiHasil = index => {
    const values = [...koreksiHasil];
    if(values.length > 1) {
      values.splice(index, 1);
      setKoreksiHasil(values);
    }
  }

  const handleRemoveTransferPricing = index => {
    const values = [...transferPricing];
    if(values.length > 1) {
      values.splice(index, 1);
      setTransferPricing(values);
    }
  }

  const handleRemoveHasilKunjungan = index => {
    const values = [...hasilKunjungan];
    if(values.length > 1) {
      values.splice(index, 1);
      setHasilKunjungan(values);
    }
  }

  const handleRemoveFaktaLapangan = index => {
    const values = [...faktaLapangan];
    if(values.length > 1) {
      values.splice(index, 1);
      setFaktaLapangan(values);
    }
  }

  const handleRemovePengaduanMasyarakat = index => {
    const values = [...pengaduanMasyarakat];
    if(values.length > 1) {
      values.splice(index, 1);
      setPengaduanMasyarakat(values);
    }
  }

  const handleRemoveIndikasiKetidakpatuhan = index => {
    const values = [...indikasiKetidakpatuhan];
    if(values.length > 1) {
      values.splice(index, 1);
      setIndikasiKetidakpatuhan(values);
    }
  }

  const handleRemoveModusKetidakpatuhan = index => {
    const values = [...modusKetidakpatuhan];
    if(values.length > 1) {
      values.splice(index, 1);
      setModusKetidakpatuhan(values);
    }
  }

  const handleRemoveLampiran = index => {
    const values = [...dataLampiran];
    if(values.length > 1) {
      values.splice(index, 1);
      setDataLampiran(values);
    }
  }

  const handleRemovePotensi = index => {
    const values = [...potensi];
    if(values.length > 1) {
      values.splice(index, 1);
      setPotensi(values);
    }
  }

  const handleRemoveAktivaLancar = index => {
    const values = [...aktivaLancar];
    if(values.length > 1) {
      values.splice(index, 1);
      setAktivaLancar(values);
    }
  }

  const handleRemoveAktivaTetap = index => {
    const values = [...aktivaTetap];
    if(values.length > 1) {
      values.splice(index, 1);
      setAktivaTetap(values);
    }
  }

  const handleRemoveKewajibanLancar = index => {
    const values = [...kewajibanLancar];
    if(values.length > 1) {
      values.splice(index, 1);
      setKewajibanLancar(values);
    }
  }

  const handleRemoveLiabilitasPanjang = index => {
    const values = [...liabilitasPanjang];
    if(values.length > 1) {
      values.splice(index, 1);
      setLiabilitasPanjang(values);
    }
  }

  const handleRemoveEkuitas = index => {
    const values = [...ekuitas];
    if(values.length > 1) {
      values.splice(index, 1);
      setEkuitas(values);
    }
  }

  const handleRemovePendapatan = index => {
    const values = [...pendapatan];
    if(values.length > 1) {
      values.splice(index, 1);
      setPendapatan(values);
    }
  }

  const handleRemoveHargaPokok = index => {
    const values = [...hargaPokok];
    if(values.length > 1) {
      values.splice(index, 1);
      setHargaPokok(values);
    }
  }

  const handleRemovePersediaanAkhir = index => {
    const values = [...persediaanAkhir];
    if(values.length > 1) {
      values.splice(index, 1);
      setPersediaanAkhir(values);
    }
  }

  const handleRemoveBiayaLabaPenjualan = index => {
    const values = [...biayaLabaPenjualan];
    if(values.length > 1) {
      values.splice(index, 1);
      setBiayaLabaPenjualan(values);
    }
  }

  const handleRemoveBiayaLabaUmum = index => {
    const values = [...biayaLabaUmum];
    if(values.length > 1) {
      values.splice(index, 1);
      setBiayaLabaUmum(values);
    }
  }

  const handleRemovePendapatanBeban = index => {
    const values = [...pendapatanBeban];
    if(values.length > 1) {  
      values.splice(index, 1);
      setPendapatanBeban(values);
    }
  }

  const handleRemovePajakLain = index => {
    const values = [...pajakLain];
    if(values.length > 1) {
      values.splice(index, 1);
      setPajakLain(values);
    }
  }

  const handleRemoveHasilKeberatan = index => {
    const values = [...hasilKeberatan];
    if(values.length > 1) {
      values.splice(index, 1);
      setHasilKeberatan(values);
    }
  }

  const handleRemoveKoreksiKeberatan = index => {
    const values = [...koreksiKeberatan];
    if(values.length > 1) {
      values.splice(index, 1);
      setKoreksiKeberatan(values);
    }
  }

  return (
    <form style={{ margin: 100 }} onSubmit={handleSubmit}>
      <div className="header">
        <img className="logo" src={logo} alt="logo" />

        <div className="right">
          <h1 className="title"><b>LAPORAN HASIL PENELITIAN</b></h1>

          <div className="input-form" style={{ paddingLeft: 20 }}>
            <label className="label-large"><b>NOMOR.</b></label>
            <input
              id="nomor"
              name="nomor"
              className="input is-dark input-wide"
              type="text"
              placeholder=""
              value={dataUmum.nomor}
              onChange={event => handleInputDataUmum(0, event)} />
          </div>
        </div>
      </div>
      <hr></hr>

      <div className="section-form">
        <p className="title-form"><b>I. PROFIL WAJIB PAJAK</b></p>
        <div className="section-form-header">
          <p className="sub-title-form"><b>A. Identitas Wajib Pajak</b></p>
          <div className="section-form-body section-form-flex">

            <div className="form-flex-left">
              <div className="input-form-standar">
                <label className="label-normal">Nama wajib pajak</label>
                <input
                  id="namaWajib"
                  name="namaWajib"
                  className="input is-dark input-standar"
                  type="text"
                  placeholder=""
                  value={dataUmum.namaWajib}
                  onChange={event => handleInputDataUmum(0, event)} />
              </div>

              <div className="input-form-standar">
                <label className="label-normal">NPWP</label>
                <input
                  id="npwp"
                  name="npwp"
                  className="input is-dark input-standar"
                  type="text"
                  placeholder=""
                  value={dataUmum.npwp}
                  onChange={event => handleInputDataUmum(0, event)} />
              </div>

              <div className="input-form-standar">
                <label className="label-normal">KPP</label>
                <input
                  id="kpp"
                  name="kpp"
                  className="input is-dark input-standar"
                  type="text"
                  placeholder=""
                  value={dataUmum.kpp}
                  onChange={event => handleInputDataUmum(0, event)} />
              </div>
            </div>

            <div className="form-flex-right">
              <div className="input-form-standar">
                <label className="label-normal">Alamat</label>
                <input
                  id="alamat"
                  name="alamat"
                  className="input is-dark input-standar"
                  type="text"
                  placeholder=""
                  value={dataUmum.alamat}
                  onChange={event => handleInputDataUmum(0, event)} />
              </div>

              <div className="input-form-standar">
                <label className="label-normal">KLU</label>
                <input
                  id="klu"
                  name="klu"
                  className="input is-dark input-standar"
                  type="text"
                  placeholder=""
                  value={dataUmum.klu}
                  onChange={event => handleInputDataUmum(0, event)} />
              </div>

              <div className="input-form-standar">
                <label className="label-normal">Tahun Pajak</label>
                <input
                  id="tahunPajak"
                  name="tahunPajak"
                  className="input is-dark input-standar"
                  type="text"
                  placeholder=""
                  value={dataUmum.tahunPajak}
                  onChange={event => handleInputDataUmum(0, event)} />
              </div>
            </div>
          </div>
        </div>
        <hr></hr>

        <div className="section-form-header">
          <p className="sub-title-form"><b>B. Kegiatan Usaha</b></p>
          <div className="section-form-body section-form-flex">
            <textarea
              id="kegiatanUsaha"
              name="kegiatanUsaha"
              className="textarea is-black has-fixed-size"
              placeholder="Kegiatan usaha"
              value={dataUmum.kegiatanUsaha}
              onChange={event => handleInputDataUmum(0, event)}></textarea>
          </div>
        </div>
        <hr></hr>

        <div className="section-form-header">
          <p className="sub-title-form"><b>C. Pohon Kepemilikan/Daftar Anggota Keluarga</b></p>
          {pohonKepemilikan.map((pohonKepemilikan, index) => (
            <Fragment key={`${pohonKepemilikan}~${index}`}>
              <div className="section-form-body section-form-flex">
                <div className="form-flex-left">
                  <div className="input-form-standar">
                    <label className="label-normal">Nama</label>
                    <input
                      id="nama"
                      name="nama"
                      className="input is-dark input-standar"
                      type="text"
                      placeholder=""
                      value={pohonKepemilikan.nama}
                      onChange={event => handleInputPohonKepemilikan(index, event)} />
                  </div>
                  <div className="input-form-standar">
                    <label className="label-normal">Jumlah modal disetor</label>
                    <input
                      id="jmlModal"
                      name="jmlModal"
                      className="input is-dark input-standar"
                      type="text"
                      placeholder=""
                      value={currencyFormatter(pohonKepemilikan.jmlModal)}
                      onChange={event => handleInputPohonKepemilikan(index, event)} />
                  </div>

                  <div className="input-form-standar">
                    <label className="label-normal">NPWP</label>
                    <input
                      id="npwp-saham-tree"
                      name="npwp"
                      className="input is-dark input-standar"
                      type="text"
                      placeholder=""
                      value={pohonKepemilikan.npwp}
                      onChange={event => handleInputPohonKepemilikan(index, event)} />
                  </div>
                </div>

                <div className="form-flex-right">
                  <div className="input-form-standar">
                    <label className="label-normal">Alamat</label>
                    <input
                      id="alamat"
                      name="alamat"
                      className="input is-dark input-standar"
                      type="text"
                      placeholder=""
                      value={pohonKepemilikan.alamat}
                      onChange={event => handleInputPohonKepemilikan(index, event)} />
                  </div>

                  <div className="input-form-standar">
                    <label className="label-normal">Persentase</label>
                    <input
                      id="persentase"
                      name="persentase"
                      className="input is-dark input-standar"
                      type="text"
                      placeholder=""
                      value={pohonKepemilikan.persentase}
                      onChange={event => handleInputPohonKepemilikan(index, event)} />
                  </div>

                  <div className="input-form-standar">
                    <label className="label-normal">Rupiah Pemisahnya</label>
                    <input
                      id="dividen"
                      name="dividen"
                      className="input is-dark input-standar"
                      type="text"
                      placeholder=""
                      value={pohonKepemilikan.dividen}
                      onChange={event => handleInputPohonKepemilikan(index, event)} />
                  </div>
                </div>
              </div>
              <div className="btn-wrapper">
                <button
                  className="button is-warning"
                  type="button"
                  onClick={() => handleAddPohonKepemilikan()}>Tambah</button>
                <button
                  className="button is-danger"
                  type="button"
                  style={{ marginLeft: 16 }}
                  onClick={() => handleRemovePohonKepemilikan(index)}>Hapus</button>
              </div>
            </Fragment>
          ))}
        </div>

        <hr></hr>
        <div className="section-form-header">
          <p className="sub-title-form"><b>D. Profil Resiko</b></p>
          <div className="section-form-body section-form-flex input-form-standar">
            <label className="label-normal label-wide">Level of Risk CRM Periode</label>
            <div class="select margin-right-20">
              <select
                id="tahunRisk"
                name="tahunRisk"
                value={dataUmum.tahunRisk}
                onChange={event => handleInputDataUmum(0, event)}>
                <option value="">-Select Tahun-</option>
                <option value="2015">2015</option>
                <option value="2016">2016</option>
                <option value="2017">2017</option>
                <option value="2018">2018</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                {/* tahun terakhir adalah tahun yang berlangsung sekarang */}
              </select>
            </div>
            <div>
              <input
                id="nilaiRisk"
                name="nilaiRisk"
                className="input is-dark input-standar"
                type="text"
                placeholder="... %"
                value={dataUmum.nilaiRisk}
                onChange={event => handleInputDataUmum(0, event)} />
            </div>
          </div>
        </div>

        <hr></hr>

        <div className="section-form-header">
          <p className="sub-title-form"><b>E. Riwayat Laporan Analisis</b></p>
          {riwayatLaporan.map((riwayatLaporan, index) => (
            <Fragment key={`${riwayatLaporan}~${index}`}>
              <div className="section-form-body section-form-flex">
                <div className="form-flex-left">
                  <div className="input-form-standar">
                    <label className="label-normal">Nomor LHA</label>
                    <input
                      id="nomorLHA"
                      name="nomorLHA"
                      className="input is-dark input-standar"
                      type="text"
                      placeholder=""
                      value={riwayatLaporan.nomorLHA}
                      onChange={event => handleInputRiwayatLaporan(index, event)} />
                  </div>
                  <div className="input-form-standar">
                    <label className="label-normal">Sumber LHA</label>
                    <input
                      id="sumberLHA"
                      name="sumberLHA"
                      className="input is-dark input-standar"
                      type="text"
                      placeholder=""
                      value={riwayatLaporan.sumberLHA}
                      onChange={event => handleInputRiwayatLaporan(index, event)} />
                  </div>
                </div>
                <div className="form-flex-right">
                  <div className="input-form-standar">
                    <label className="label-normal">Nilai LHA</label>
                    <input
                      id="nilaiLHA"
                      name="nilaiLHA"
                      className="input is-dark input-standar"
                      type="text"
                      placeholder=""
                      value={currencyFormatter(riwayatLaporan.nilaiLHA)}
                      onChange={event => handleInputRiwayatLaporan(index, event)} />
                  </div>
                </div>
              </div>
              <div className="btn-wrapper" style={{ marginBottom: 16 }}>
                <button
                  className="button is-warning"
                  type="button"
                  onClick={() => handleAddRiwayatLaporan()}>Tambah</button>
                <button
                  className="button is-danger"
                  type="button"
                  style={{ marginLeft: 16 }}
                  onClick={() => handleRemoveRiwayatLaporan(index)}>Hapus</button>
              </div>
            </Fragment>
          ))}
        </div>

        <hr></hr>

        <div className="section-form-header">
          <p className="sub-title-form"><b>F. Riwayat Pengawasan</b></p>
          {riwayatPengawasan.map((riwayatPengawasan, index) => (
            <Fragment key={`${riwayatPengawasan}~${index}`}>
              <div className="section-form-body section-form-flex">
                <div className="form-flex-left">
                  <div className="input-form-standar">
                    <label className="label-normal">Nomor SP2DK</label>
                    <input
                      id="nomorSp"
                      name="nomorSp"
                      className="input is-dark input-standar"
                      type="text"
                      placeholder=""
                      value={riwayatPengawasan.nomorSp}
                      onChange={event => handleInputRiwayatPengawasan(index, event)} />
                  </div>
                  <div className="input-form-standar">
                    <label className="label-normal">Jenis Pajak</label>
                    <input
                      id="jenisPajak"
                      name="jenisPajak"
                      className="input is-dark input-standar"
                      type="text"
                      placeholder=""
                      value={riwayatPengawasan.jenisPajak}
                      onChange={event => handleInputRiwayatPengawasan(index, event)} />
                  </div>
                  <div className="input-form-standar">
                    <label className="label-normal">Tahun Pajak</label>
                    <input
                      id="tahunPajak"
                      name="tahunPajak"
                      className="input is-dark input-standar"
                      type="text"
                      placeholder=""
                      value={riwayatPengawasan.tahunPajak}
                      onChange={event => handleInputRiwayatPengawasan(index, event)} />
                  </div>
                </div>
                <div className="form-flex-right">
                  <div className="input-form-standar">
                    <label className="label-normal">Nilai Potensi Akhir</label>
                    <input
                      id="nilaiPotensi"
                      name="nilaiPotensi"
                      className="input is-dark input-standar"
                      type="text"
                      placeholder=""
                      value={currencyFormatter(riwayatPengawasan.nilaiPotensi)}
                      onChange={event => handleInputRiwayatPengawasan(index, event)} />
                  </div>
                  <div className="input-form-standar">
                    <label className="label-normal">Status</label>
                    <input
                      id="status"
                      name="status"
                      className="input is-dark input-standar"
                      type="text"
                      placeholder=""
                      value={riwayatPengawasan.status}
                      onChange={event => handleInputRiwayatPengawasan(index, event)} />
                  </div>
                  <div className="input-form-standar">
                    <label className="label-normal">Realisasi</label>
                    <input
                      id="realisasi"
                      name="realisasi"
                      className="input is-dark input-standar"
                      type="text"
                      placeholder=""
                      value={currencyFormatter(riwayatPengawasan.realisasi)}
                      onChange={event => handleInputRiwayatPengawasan(index, event)} />
                  </div>
                </div>
              </div>
              <div className="btn-wrapper">
                <button
                  className="button is-warning"
                  type="button"
                  onClick={() => handleAddRiwayatPengawasan()}>Tambah</button>
                <button
                  className="button is-danger"
                  type="button"
                  style={{ marginLeft: 16 }}
                  onClick={() => handleRemoveRiwayatPengawasan(index)}>Hapus</button>
              </div>
            </Fragment>
          ))}
        </div>
        <hr></hr>

        <div className="section-form-header">
          <p className="sub-title-form"><b>G. Riwayat Hasil Pemeriksaan</b></p>
          {hasilPeriksa.map((hasilPeriksa, index) => (
            <Fragment key={`${hasilPeriksa}~${index}`}>
              <div className="section-form-body section-form-flex">
                <div className="form-flex-left">
                  <div className="input-form-standar">
                    <label className="label-normal">Jenis Pajak</label>
                    <input
                      id="jenisPajak"
                      name="jenisPajak"
                      className="input is-dark input-standar"
                      type="text"
                      placeholder=""
                      value={hasilPeriksa.jenisPajak}
                      onChange={event => handleInputHasilPeriksa(index, event)} />
                  </div>
                  <div className="input-form-standar">
                    <label className="label-normal">Tahun</label>
                    <input
                      id="tahun"
                      name="tahun"
                      className="input is-dark input-standar"
                      type="text"
                      placeholder=""
                      value={hasilPeriksa.tahun}
                      onChange={event => handleInputHasilPeriksa(index, event)} />
                  </div>
                  <div className="input-form-standar">
                    <label className="label-normal">Cfm SPT</label>
                    <input
                      id="cfmSpt"
                      name="cfmSpt"
                      className="input is-dark input-standar"
                      type="text"
                      placeholder=""
                      value={currencyFormatter(hasilPeriksa.cfmSpt)}
                      onChange={event => handleInputHasilPeriksa(index, event)} />
                  </div>
                </div>
                <div className="form-flex-right">
                  <div className="input-form-standar">
                    <label className="label-normal">Cfm Pemeriksaan</label>
                    <input
                      id="cfmPeriksa"
                      name="cfmPeriksa"
                      className="input is-dark input-standar"
                      type="text"
                      placeholder=""
                      value={currencyFormatter(hasilPeriksa.cfmPeriksa)}
                      onChange={event => handleInputHasilPeriksa(index, event)} />
                  </div>
                  <div className="input-form-standar">
                    <label className="label-normal">Koreksi</label>
                    <input
                      id="koreksi"
                      name="koreksi"
                      className="input is-dark input-standar"
                      type="text"
                      placeholder=""
                      value={hasilPeriksa.koreksi}
                      onChange={event => handleInputHasilPeriksa(index, event)} />
                  </div>
                </div>
              </div>
              <div className="btn-wrapper">
                <button
                  className="button is-warning"
                  type="button"
                  onClick={() => handleAddHasilPeriksa()}>Tambah</button>
                <button
                  className="button is-danger"
                  type="button"
                  style={{ marginLeft: 16 }}
                  onClick={() => handleRemoveHasilPeriksa(index)}>Hapus</button>
              </div>
            </Fragment>
          ))}
        </div>

        <hr></hr>

        <div className="section-form-header">
          <div className="sub-title-form-wrapper">
            <p className="sub-title-form margin-right-20"><b>Deskripsi Penjelasan Koreksi Hasil Pemeriksaan</b></p>
          </div>
          {koreksiHasil.map((koreksiHasil, index) => (
            <Fragment key={`${koreksiHasil}~${index}`}>
              <div className="section-form-body section-form-flex">
                <div className="form-flex-left">
                  <div className="input-form-standar">
                    <label className="label-normal">Tahun</label>
                    <input
                      id="tahun"
                      name="tahun"
                      className="input is-dark input-standar"
                      type="text"
                      placeholder=""
                      value={koreksiHasil.tahun}
                      onChange={event => handleInputKoreksiHasil(index, event)} />
                  </div>
                  <div className="input-form-standar">
                    <label className="label-normal">Jenis Pajak</label>
                    <input
                      id="jenisPajak"
                      name="jenisPajak"
                      className="input is-dark input-standar"
                      type="text"
                      placeholder=""
                      value={koreksiHasil.jenisPajak}
                      onChange={event => handleInputKoreksiHasil(index, event)} />
                  </div>
                </div>
                <div className="form-flex-right">
                  <div className="input-form-standar">
                    <label className="label-normal">Sumber Koreksi</label>
                    <input
                      id="sumberKoreksi"
                      name="sumberKoreksi"
                      className="input is-dark input-standar"
                      type="text"
                      placeholder=""
                      value={koreksiHasil.sumberKoreksi}
                      onChange={event => handleInputKoreksiHasil(index, event)} />
                  </div>
                  <div className="input-form-standar">
                    <label className="label-normal">Alasan Koreksi</label>
                    <input
                      id="alasanKoreksi"
                      name="alasanKoreksi"
                      className="input is-dark input-standar"
                      type="text"
                      placeholder=""
                      value={koreksiHasil.alasanKoreksi}
                      onChange={event => handleInputKoreksiHasil(index, event)} />
                  </div>
                </div>
              </div>
              <div className="btn-wrapper">
                <button
                  className="button is-warning"
                  type="button"
                  onClick={() => handleAddKoreksiHasil()}>Tambah</button>
                <button
                  className="button is-danger"
                  type="button"
                  style={{ marginLeft: 16 }}
                  onClick={() => handleRemoveKoreksiHasil(index)}>Hapus</button>
              </div>
            </Fragment>
          ))}
        </div>
        <hr></hr>

        <div className="section-form-header">
          <p className="sub-title-form"><b>H. Riwayat Hasil Keberatan dan Banding</b></p>
          {hasilKeberatan.map((hasilKeberatan, index) => (
            <Fragment key={`${hasilKeberatan}~${index}`}>
              <div className="section-form-body section-form-flex">
                <div className="form-flex-left">
                  <div className="input-form-standar">
                    <label className="label-normal">Masa Pajak</label>
                    <input
                      id="masaPajak"
                      name="masaPajak"
                      className="input is-dark input-standar"
                      type="text"
                      placeholder=""
                      value={hasilKeberatan.masaPajak}
                      onChange={event => handleInputHasilKeberatan(index, event)} />
                  </div>
                  <div className="input-form-standar">
                    <label className="label-normal">Jenis Pajak</label>
                    <input
                      id="jenisPajak"
                      name="jenisPajak"
                      className="input is-dark input-standar"
                      type="text"
                      placeholder=""
                      value={hasilKeberatan.jenisPajak}
                      onChange={event => handleInputHasilKeberatan(index, event)} />
                  </div>
                  <div className="input-form-standar">
                    <label className="label-normal">Cfm Pemeriksa</label>
                    <input
                      id="cfmPemeriksa"
                      name="cfmPemeriksa"
                      className="input is-dark input-standar"
                      type="text"
                      placeholder=""
                      value={currencyFormatter(hasilKeberatan.cfmPemeriksa)}
                      onChange={event => handleInputHasilKeberatan(index, event)} />
                  </div>
                </div>
                <div className="form-flex-right">
                  <div className="input-form-standar">
                    <label className="label-normal">Cfm Keberatan</label>
                    <input
                      id="cfmBanding"
                      name="cfmBanding"
                      className="input is-dark input-standar"
                      type="text"
                      placeholder=""
                      value={currencyFormatter(hasilKeberatan.cfmBanding)}
                      onChange={event => handleInputHasilKeberatan(index, event)} />
                  </div>
                  <div className="input-form-standar">
                    <label className="label-normal">Koreksi</label>
                    <input
                      id="koreksi"
                      name="koreksi"
                      className="input is-dark input-standar"
                      type="text"
                      placeholder=""
                      value={hasilKeberatan.koreksi}
                      onChange={event => handleInputHasilKeberatan(index, event)} />
                  </div>
                </div>
              </div>
              <div className="btn-wrapper">
                <button
                  className="button is-warning"
                  type="button"
                  onClick={() => handleAddHasilKeberatan()}>Tambah</button>
                <button
                  className="button is-danger"
                  type="button"
                  style={{ marginLeft: 16 }}
                  onClick={() => handleRemoveHasilKeberatan(index)}>Hapus</button>
              </div>
            </Fragment>
          ))}
        </div>

        <hr></hr>

        <div className="section-form-header">
          <div className="sub-title-form-wrapper">
            <p className="sub-title-form margin-right-20"><b>Deskripsi Penjelasan Koreksi Hasil Keberatan/Banding</b></p>
          </div>
          {koreksiKeberatan.map((koreksiKeberatan, index) => (
            <Fragment key={`${koreksiKeberatan}~${index}`}>
              <div className="section-form-body section-form-flex">
                <div className="form-flex-left">
                  <div className="input-form-standar">
                    <label className="label-normal">Masa Pajak</label>
                    <input
                      id="masaPajak"
                      name="masaPajak"
                      className="input is-dark input-standar"
                      type="text"
                      placeholder=""
                      value={koreksiKeberatan.masaPajak}
                      onChange={event => handleInputKoreksiKeberatan(index, event)} />
                  </div>
                  <div className="input-form-standar">
                    <label className="label-normal">Jenis Pajak</label>
                    <input
                      id="jenisPajak"
                      name="jenisPajak"
                      className="input is-dark input-standar"
                      type="text"
                      placeholder=""
                      value={koreksiKeberatan.jenisPajak}
                      onChange={event => handleInputKoreksiKeberatan(index, event)} />
                  </div>
                </div>
                <div className="form-flex-right">
                  <div className="input-form-standar">
                    <label className="label-normal">Risalah Keputusan</label>
                    <input
                      id="risalahKeputusan"
                      name="risalahKeputusan"
                      className="input is-dark input-standar"
                      type="text"
                      placeholder=""
                      value={koreksiKeberatan.risalahKeputusan}
                      onChange={event => handleInputKoreksiKeberatan(index, event)} />
                  </div>
                </div>
              </div>
              <div className="btn-wrapper">
                <button
                  className="button is-warning"
                  type="button"
                  onClick={() => handleAddKoreksiKeberatan()}>Tambah</button>
                <button
                  className="button is-danger"
                  type="button"
                  style={{ marginLeft: 16 }}
                  onClick={() => handleRemoveKoreksiKeberatan(index)}>Hapus</button>
              </div>
            </Fragment>
          ))}
        </div>
        <hr></hr>

      </div>

      <div className="section-form-header">
        <p className="sub-title-form"><b>I. Profil Resiko Ketertagihan Pajak</b></p>
        <div className="section-form-body section-form-flex input-form-standar">
          <label className="label-normal label-wide">Ketertagihan Pajak</label>
          <div class="select">
            <select
              id="tagihPajak"
              name="tagihPajak"
              value={dataUmum.tagihPajak}
              onChange={event => handleInputDataUmum(0, event)}>
              <option value="">--Pilih Ketertagihan--</option>
              <option value="Tinggi">Tinggi</option>
              <option value="Sedang">Sedang</option>
              <option value="Rendah">Rendah</option>
            </select>
          </div>
        </div>
      </div>
      <hr></hr>

      <div className="section-form margin-section">
        <p className="title-form"><b>II. ANALISIS DATA INFORMASI</b></p>
        <div className="section-form-header">
          <p className="sub-title-form"><b>A. Analisis Laporan Keuangan</b></p>
          <div className="section-form-body section-form-flex input-form-standar">
            <label className="label-normal label-wide">Pilih Mata Uang</label>
            <div class="select">
              <select
                id="mataUang"
                name="mataUang"
                value={dataUmum.mataUang}
                onChange={event => handleInputDataUmum(0, event)}>
                <option value="">--Pilih Mata Uang--</option>
                <option value="$">$</option>
                <option value="Rp">Rp.</option>
              </select>
            </div>
          </div>
          <div className="section-form-header">
            <p className="sub-title-form"><b>Neraca</b></p>

            {/**KEWAJIBAN */}
            <div className="section-form-header">
              <p className="sub-title-form"><b>1. Aktiva</b></p>
              <div className="section-form-header">
                <p className="sub-title-form"><b>i. Aktiva Lancar</b></p>
                {aktivaLancar.map((aktivaLancar, index) => (
                  <Fragment key={`${aktivaLancar}~${index}`}>
                    <div className="section-form-body section-form-flex">
                      <div className="form-flex-left">
                        <div className="input-form-standar">
                          <label className="label-normal label-normal-less-width">Akun</label>
                          <input
                            id="akun"
                            name="akun"
                            className="input is-dark input-standar input-wide"
                            type="text"
                            placeholder=""
                            value={aktivaLancar.akun}
                            onChange={event => handleInputAktivaLancar(index, event)} />
                        </div>

                        <div className="input-form-standar">
                          <label className="label-normal label-normal-less-width">Tahun 1</label>
                          <div className="select input-narrow margin-right-20">
                            <select
                              id="tahun1"
                              name="tahun1"
                              value={aktivaLancar.tahun1}
                              onChange={event => handleInputAktivaLancar(index, event)}>
                              <option value="">-Select Tahun-</option>
                              <option value="2015">2015</option>
                              <option value="2016">2016</option>
                              <option value="2017">2017</option>
                              <option value="2018">2018</option>
                              <option value="2019">2019</option>
                              <option value="2020">2020</option>
                              {/* tahun terakhir adalah tahun yang berlangsung sekarang */}
                            </select>
                          </div>
                          <input
                            id="nilaiTahun1"
                            name="nilaiTahun1"
                            className="input is-dark input-narrow"
                            type="string"
                            placeholder=""
                            value={currencyFormatter(aktivaLancar.nilaiTahun1)}
                            onChange={event => handleInputAktivaLancar(index, event)} />
                        </div>

                        <div className="input-form-standar">
                          <label className="label-normal label-normal-less-width">Tahun 2</label>
                          <div className="select input-narrow margin-right-20">
                            <select
                              id="tahun2"
                              name="tahun2"
                              value={aktivaLancar.tahun2}
                              onChange={event => handleInputAktivaLancar(index, event)}>
                              <option value="">-Select Tahun-</option>
                              <option value="2015">2015</option>
                              <option value="2016">2016</option>
                              <option value="2017">2017</option>
                              <option value="2018">2018</option>
                              <option value="2019">2019</option>
                              <option value="2020">2020</option>
                              {/* tahun terakhir adalah tahun yang berlangsung sekarang */}
                            </select>
                          </div>
                          <input
                            id="nilaiTahun2"
                            name="nilaiTahun2"
                            className="input is-dark input-narrow"
                            type="text"
                            placeholder=""
                            value={currencyFormatter(aktivaLancar.nilaiTahun2)}
                            onChange={event => handleInputAktivaLancar(index, event)} />
                        </div>
                        <div className="input-form-standar">
                          <label className="label-normal label-normal-less-width">Tahun 3</label>
                          <div className="select input-narrow margin-right-20">
                            <select
                              id="tahun3"
                              name="tahun3"
                              value={aktivaLancar.tahun3}
                              onChange={event => handleInputAktivaLancar(index, event)}>
                              <option value="">-Select Tahun-</option>
                              <option value="2015">2015</option>
                              <option value="2016">2016</option>
                              <option value="2017">2017</option>
                              <option value="2018">2018</option>
                              <option value="2019">2019</option>
                              <option value="2020">2020</option>
                              {/* tahun terakhir adalah tahun yang berlangsung sekarang */}
                            </select>
                          </div>
                          <input
                            id="nilaiTahun3"
                            name="nilaiTahun3"
                            className="input is-dark input-narrow"
                            type="text"
                            placeholder=""
                            value={currencyFormatter(aktivaLancar.nilaiTahun3)}
                            onChange={event => handleInputAktivaLancar(index, event)} />
                        </div>
                      </div>
                      <div className="form-flex-right">
                        <div className="input-form-standar input-form-align-top">
                          <label className="label-normal label-top">Keterangan</label>
                          <textarea
                            id="keterangan"
                            name="keterangan"
                            className="textarea textarea-standar is-black has-fixed-size"
                            placeholder=""
                            value={aktivaLancar.keterangan}
                            onChange={event => handleInputAktivaLancar(index, event)}></textarea>
                        </div>

                      </div>

                    </div>
                    <div className="btn-wrapper">
                      <button
                        className="button is-warning"
                        type="button"
                        onClick={() => handleAddAktivaLancar()}>Tambah</button>
                      <button
                        className="button is-danger"
                        type="button"
                        style={{ marginLeft: 16 }}
                        onClick={() => handleRemoveAktivaLancar(index)}>Hapus</button>
                    </div>
                  </Fragment>
                ))}
              </div>
              <hr></hr>

              <div className="section-form-header">
                <p className="sub-title-form"><b>ii. Aktiva Tetap</b></p>
                {aktivaTetap.map((aktivaTetap, index) => (
                  <Fragment key={`${aktivaTetap}~${index}`}>
                    <div className="section-form-body section-form-flex">
                      <div className="form-flex-left">
                        <div className="input-form-standar">
                          <label className="label-normal label-normal-less-width">Akun</label>
                          <input
                            id="akun"
                            name="akun"
                            className="input is-dark input-standar input-wide"
                            type="text"
                            placeholder=""
                            value={aktivaTetap.akun}
                            onChange={event => handleInputAktivaTetap(index, event)} />
                        </div>

                        <div className="input-form-standar">
                          <label className="label-normal label-normal-less-width">Tahun 1</label>
                          <div className="select input-narrow margin-right-20">
                            <select
                              id="tahun1"
                              name="tahun1"
                              value={aktivaTetap.tahun1}
                              onChange={event => handleInputAktivaTetap(index, event)}>
                              <option value="">-Select Tahun-</option>
                              <option value="2015">2015</option>
                              <option value="2016">2016</option>
                              <option value="2017">2017</option>
                              <option value="2018">2018</option>
                              <option value="2019">2019</option>
                              <option value="2020">2020</option>
                              {/* tahun terakhir adalah tahun yang berlangsung sekarang */}
                            </select>
                          </div>
                          <input
                            id="nilaiTahun1"
                            name="nilaiTahun1"
                            className="input is-dark input-narrow"
                            type="text"
                            placeholder=""
                            value={currencyFormatter(aktivaTetap.nilaiTahun1)}
                            onChange={event => handleInputAktivaTetap(index, event)} />
                        </div>

                        <div className="input-form-standar">
                          <label className="label-normal label-normal-less-width">Tahun 2</label>
                          <div className="select input-narrow margin-right-20">
                            <select
                              id="tahun2"
                              name="tahun2"
                              value={aktivaTetap.tahun2}
                              onChange={event => handleInputAktivaTetap(index, event)}>
                              <option value="">-Select Tahun-</option>
                              <option value="2015">2015</option>
                              <option value="2016">2016</option>
                              <option value="2017">2017</option>
                              <option value="2018">2018</option>
                              <option value="2019">2019</option>
                              <option value="2020">2020</option>
                              {/* tahun terakhir adalah tahun yang berlangsung sekarang */}
                            </select>
                          </div>
                          <input
                            id="nilaiTahun2"
                            name="nilaiTahun2"
                            className="input is-dark input-narrow"
                            type="text"
                            placeholder=""
                            value={currencyFormatter(aktivaTetap.nilaiTahun2)}
                            onChange={event => handleInputAktivaTetap(index, event)} />
                        </div>
                        <div className="input-form-standar">
                          <label className="label-normal label-normal-less-width">Tahun 3</label>
                          <div className="select input-narrow margin-right-20">
                            <select
                              id="tahun3"
                              name="tahun3"
                              value={aktivaTetap.tahun3}
                              onChange={event => handleInputAktivaTetap(index, event)}>
                              <option value="">-Select Tahun-</option>
                              <option value="2015">2015</option>
                              <option value="2016">2016</option>
                              <option value="2017">2017</option>
                              <option value="2018">2018</option>
                              <option value="2019">2019</option>
                              <option value="2020">2020</option>
                              {/* tahun terakhir adalah tahun yang berlangsung sekarang */}
                            </select>
                          </div>
                          <input
                            id="nilaiTahun3"
                            name="nilaiTahun3"
                            className="input is-dark input-narrow"
                            type="text"
                            placeholder=""
                            value={currencyFormatter(aktivaTetap.nilaiTahun3)}
                            onChange={event => handleInputAktivaTetap(index, event)} />
                        </div>
                      </div>
                      <div className="form-flex-right">
                        <div className="input-form-standar input-form-align-top">
                          <label className="label-normal label-top">Keterangan</label>
                          <textarea
                            id="keterangan"
                            name="keterangan"
                            className="textarea textarea-standar is-black has-fixed-size"
                            placeholder=""
                            value={aktivaTetap.keterangan}
                            onChange={event => handleInputAktivaTetap(index, event)}></textarea>
                        </div>

                      </div>

                    </div>
                    <div className="btn-wrapper">
                      <button
                        className="button is-warning"
                        type="button"
                        onClick={() => handleAddAktivaTetap()}>Tambah</button>
                      <button
                        className="button is-danger"
                        type="button"
                        style={{ marginLeft: 16 }}
                        onClick={() => handleRemoveAktivaTetap(index)}>Hapus</button>
                    </div>
                  </Fragment>
                ))}
              </div>

            </div>
            <hr></hr>

            {/**KEWAJIBAN */}
            <div className="section-form-header">
              <p className="sub-title-form"><b>2. Kewajiban</b></p>
              <div className="section-form-header">
                <p className="sub-title-form"><b>i. Kewajiban Lancar</b></p>
                {kewajibanLancar.map((kewajibanLancar, index) => (
                  <Fragment key={`${kewajibanLancar}~${index}`}>
                    <div className="section-form-body section-form-flex">
                      <div className="form-flex-left">
                        <div className="input-form-standar">
                          <label className="label-normal label-normal-less-width">Akun</label>
                          <input
                            id="akun"
                            name="akun"
                            className="input is-dark input-standar input-wide"
                            type="text"
                            placeholder=""
                            value={kewajibanLancar.akun}
                            onChange={event => handleInputKewajibanLancar(index, event)} />
                        </div>

                        <div className="input-form-standar">
                          <label className="label-normal label-normal-less-width">Tahun 1</label>
                          <div className="select input-narrow margin-right-20">
                            <select
                              id="tahun1"
                              name="tahun1"
                              value={kewajibanLancar.tahun1}
                              onChange={event => handleInputKewajibanLancar(index, event)}>
                              <option value="">-Select Tahun-</option>
                              <option value="2015">2015</option>
                              <option value="2016">2016</option>
                              <option value="2017">2017</option>
                              <option value="2018">2018</option>
                              <option value="2019">2019</option>
                              <option value="2020">2020</option>
                              {/* tahun terakhir adalah tahun yang berlangsung sekarang */}
                            </select>
                          </div>
                          <input
                            id="nilaiTahun1"
                            name="nilaiTahun1"
                            className="input is-dark input-narrow"
                            type="text"
                            placeholder=""
                            value={currencyFormatter(kewajibanLancar.nilaiTahun1)}
                            onChange={event => handleInputKewajibanLancar(index, event)} />
                        </div>

                        <div className="input-form-standar">
                          <label className="label-normal label-normal-less-width">Tahun 2</label>
                          <div className="select input-narrow margin-right-20">
                            <select
                              id="tahun2"
                              name="tahun2"
                              value={aktivaLancar.tahun2}
                              onChange={event => handleInputKewajibanLancar(index, event)}>
                              <option value="">-Select Tahun-</option>
                              <option value="2015">2015</option>
                              <option value="2016">2016</option>
                              <option value="2017">2017</option>
                              <option value="2018">2018</option>
                              <option value="2019">2019</option>
                              <option value="2020">2020</option>
                              {/* tahun terakhir adalah tahun yang berlangsung sekarang */}
                            </select>
                          </div>
                          <input
                            id="nilaiTahun2"
                            name="nilaiTahun2"
                            className="input is-dark input-narrow"
                            type="text"
                            placeholder=""
                            value={currencyFormatter(kewajibanLancar.nilaiTahun2)}
                            onChange={event => handleInputKewajibanLancar(index, event)} />
                        </div>
                        <div className="input-form-standar">
                          <label className="label-normal label-normal-less-width">Tahun 3</label>
                          <div className="select input-narrow margin-right-20">
                            <select
                              id="tahun3"
                              name="tahun3"
                              value={kewajibanLancar.tahun3}
                              onChange={event => handleInputKewajibanLancar(index, event)}>
                              <option value="">-Select Tahun-</option>
                              <option value="2015">2015</option>
                              <option value="2016">2016</option>
                              <option value="2017">2017</option>
                              <option value="2018">2018</option>
                              <option value="2019">2019</option>
                              <option value="2020">2020</option>
                              {/* tahun terakhir adalah tahun yang berlangsung sekarang */}
                            </select>
                          </div>
                          <input
                            id="nilaiTahun3"
                            name="nilaiTahun3"
                            className="input is-dark input-narrow"
                            type="text"
                            placeholder=""
                            value={currencyFormatter(kewajibanLancar.nilaiTahun3)}
                            onChange={event => handleInputKewajibanLancar(index, event)} />
                        </div>
                      </div>
                      <div className="form-flex-right">
                        <div className="input-form-standar input-form-align-top">
                          <label className="label-normal label-top">Keterangan</label>
                          <textarea
                            id="keterangan"
                            name="keterangan"
                            className="textarea textarea-standar is-black has-fixed-size"
                            placeholder=""
                            value={kewajibanLancar.keterangan}
                            onChange={event => handleInputKewajibanLancar(index, event)}></textarea>
                        </div>

                      </div>

                    </div>
                    <div className="btn-wrapper">
                      <button
                        className="button is-warning"
                        type="button"
                        onClick={() => handleAddKewajibanLancar()}>Tambah</button>
                      <button
                        className="button is-danger"
                        type="button"
                        style={{ marginLeft: 16 }}
                        onClick={() => handleRemoveKewajibanLancar(index)}>Hapus</button>
                    </div>
                  </Fragment>
                ))}
                <hr></hr>
              </div>

              <div className="section-form-header">
                <p className="sub-title-form"><b>ii. Liabilitas Jangka Panjang</b></p>
                {liabilitasPanjang.map((liabilitasPanjang, index) => (
                  <Fragment key={`${liabilitasPanjang}~${index}`}>
                    <div className="section-form-body section-form-flex">
                      <div className="form-flex-left">
                        <div className="input-form-standar">
                          <label className="label-normal label-normal-less-width">Akun</label>
                          <input
                            id="akun"
                            name="akun"
                            className="input is-dark input-standar input-wide"
                            type="text"
                            placeholder=""
                            value={liabilitasPanjang.akun}
                            onChange={event => handleInputLiabilitasPanjang(index, event)} />
                        </div>

                        <div className="input-form-standar">
                          <label className="label-normal label-normal-less-width">Tahun 1</label>
                          <div className="select input-narrow margin-right-20">
                            <select
                              id="tahun1"
                              name="tahun1"
                              value={liabilitasPanjang.tahun1}
                              onChange={event => handleInputLiabilitasPanjang(index, event)}>
                              <option value="">-Select Tahun-</option>
                              <option value="2015">2015</option>
                              <option value="2016">2016</option>
                              <option value="2017">2017</option>
                              <option value="2018">2018</option>
                              <option value="2019">2019</option>
                              <option value="2020">2020</option>
                              {/* tahun terakhir adalah tahun yang berlangsung sekarang */}
                            </select>
                          </div>
                          <input
                            id="nilaiTahun1"
                            name="nilaiTahun1"
                            className="input is-dark input-narrow"
                            type="text"
                            placeholder=""
                            value={currencyFormatter(liabilitasPanjang.nilaiTahun1)}
                            onChange={event => handleInputLiabilitasPanjang(index, event)} />
                        </div>

                        <div className="input-form-standar">
                          <label className="label-normal label-normal-less-width">Tahun 2</label>
                          <div className="select input-narrow margin-right-20">
                            <select
                              id="tahun2"
                              name="tahun2"
                              value={liabilitasPanjang.tahun2}
                              onChange={event => handleInputLiabilitasPanjang(index, event)}>
                              <option value="">-Select Tahun-</option>
                              <option value="2015">2015</option>
                              <option value="2016">2016</option>
                              <option value="2017">2017</option>
                              <option value="2018">2018</option>
                              <option value="2019">2019</option>
                              <option value="2020">2020</option>
                              {/* tahun terakhir adalah tahun yang berlangsung sekarang */}
                            </select>
                          </div>
                          <input
                            id="nilaiTahun2"
                            name="nilaiTahun2"
                            className="input is-dark input-narrow"
                            type="text"
                            placeholder=""
                            value={currencyFormatter(liabilitasPanjang.nilaiTahun2)}
                            onChange={event => handleInputLiabilitasPanjang(index, event)} />
                        </div>
                        <div className="input-form-standar">
                          <label className="label-normal label-normal-less-width">Tahun 3</label>
                          <div className="select input-narrow margin-right-20">
                            <select
                              id="tahun3"
                              name="tahun3"
                              value={liabilitasPanjang.tahun3}
                              onChange={event => handleInputLiabilitasPanjang(index, event)}>
                              <option value="">-Select Tahun-</option>
                              <option value="2015">2015</option>
                              <option value="2016">2016</option>
                              <option value="2017">2017</option>
                              <option value="2018">2018</option>
                              <option value="2019">2019</option>
                              <option value="2020">2020</option>
                              {/* tahun terakhir adalah tahun yang berlangsung sekarang */}
                            </select>
                          </div>
                          <input
                            id="nilaiTahun3"
                            name="nilaiTahun3"
                            className="input is-dark input-narrow"
                            type="text"
                            placeholder=""
                            value={currencyFormatter(liabilitasPanjang.nilaiTahun3)}
                            onChange={event => handleInputLiabilitasPanjang(index, event)} />
                        </div>
                      </div>
                      <div className="form-flex-right">
                        <div className="input-form-standar input-form-align-top">
                          <label className="label-normal label-top">Keterangan</label>
                          <textarea
                            id="keterangan"
                            name="keterangan"
                            className="textarea textarea-standar is-black has-fixed-size"
                            placeholder=""
                            value={liabilitasPanjang.keterangan}
                            onChange={event => handleInputLiabilitasPanjang(index, event)}></textarea>
                        </div>

                      </div>

                    </div>
                    <div className="btn-wrapper">
                      <button
                        className="button is-warning"
                        type="button"
                        onClick={() => handleAddLiabilitasPanjang()}>Tambah</button>
                      <button
                        className="button is-danger"
                        type="button"
                        style={{ marginLeft: 16 }}
                        onClick={() => handleRemoveLiabilitasPanjang(index)}>Hapus</button>
                    </div>
                  </Fragment>
                ))}
              </div>

            </div>
          </div>
          <hr></hr>

          {/**EKUITAS */}
          <div className="section-form-header">
            <p className="sub-title-form"><b>3. Ekuitas</b></p>
            {ekuitas.map((ekuitas, index) => (
              <Fragment key={`${ekuitas}~${index}`}>
                <div className="section-form-body section-form-flex">
                  <div className="form-flex-left">
                    <div className="input-form-standar">
                      <label className="label-normal label-normal-less-width">Akun</label>
                      <input
                        id="akun"
                        name="akun"
                        className="input is-dark input-standar input-wide"
                        type="text"
                        placeholder=""
                        value={ekuitas.akun}
                        onChange={event => handleInputEkuitas(index, event)} />
                    </div>

                    <div className="input-form-standar">
                      <label className="label-normal label-normal-less-width">Tahun 1</label>
                      <div className="select input-narrow margin-right-20">
                        <select
                          id="tahun1"
                          name="tahun1"
                          value={ekuitas.tahun1}
                          onChange={event => handleInputEkuitas(index, event)}>
                          <option value="">-Select Tahun-</option>
                          <option value="2015">2015</option>
                          <option value="2016">2016</option>
                          <option value="2017">2017</option>
                          <option value="2018">2018</option>
                          <option value="2019">2019</option>
                          <option value="2020">2020</option>
                          {/* tahun terakhir adalah tahun yang berlangsung sekarang */}
                        </select>
                      </div>
                      <input
                        id="nilaiTahun1"
                        name="nilaiTahun1"
                        className="input is-dark input-narrow"
                        type="text"
                        placeholder=""
                        value={currencyFormatter(ekuitas.nilaiTahun1)}
                        onChange={event => handleInputEkuitas(index, event)} />
                    </div>

                    <div className="input-form-standar">
                      <label className="label-normal label-normal-less-width">Tahun 2</label>
                      <div className="select input-narrow margin-right-20">
                        <select
                          id="tahun2"
                          name="tahun2"
                          value={ekuitas.tahun2}
                          onChange={event => handleInputEkuitas(index, event)}>
                          <option value="">-Select Tahun-</option>
                          <option value="2015">2015</option>
                          <option value="2016">2016</option>
                          <option value="2017">2017</option>
                          <option value="2018">2018</option>
                          <option value="2019">2019</option>
                          <option value="2020">2020</option>
                          {/* tahun terakhir adalah tahun yang berlangsung sekarang */}
                        </select>
                      </div>
                      <input
                        id="nilaiTahun2"
                        name="nilaiTahun2"
                        className="input is-dark input-narrow"
                        type="text"
                        placeholder=""
                        value={currencyFormatter(ekuitas.nilaiTahun2)}
                        onChange={event => handleInputEkuitas(index, event)} />
                    </div>
                    <div className="input-form-standar">
                      <label className="label-normal label-normal-less-width">Tahun 3</label>
                      <div className="select input-narrow margin-right-20">
                        <select
                          id="tahun3"
                          name="tahun3"
                          value={ekuitas.tahun3}
                          onChange={event => handleInputEkuitas(index, event)}>
                          <option value="">-Select Tahun-</option>
                          <option value="2015">2015</option>
                          <option value="2016">2016</option>
                          <option value="2017">2017</option>
                          <option value="2018">2018</option>
                          <option value="2019">2019</option>
                          <option value="2020">2020</option>
                          {/* tahun terakhir adalah tahun yang berlangsung sekarang */}
                        </select>
                      </div>
                      <input
                        id="nilaiTahun3"
                        name="nilaiTahun3"
                        className="input is-dark input-narrow"
                        type="text"
                        placeholder=""
                        value={currencyFormatter(ekuitas.nilaiTahun3)}
                        onChange={event => handleInputEkuitas(index, event)} />
                    </div>
                  </div>
                  <div className="form-flex-right">
                    <div className="input-form-standar input-form-align-top">
                      <label className="label-normal label-top">Keterangan</label>
                      <textarea
                        id="keterangan"
                        name="keterangan"
                        className="textarea textarea-standar is-black has-fixed-size"
                        placeholder=""
                        value={ekuitas.keterangan}
                        onChange={event => handleInputEkuitas(index, event)}></textarea>
                    </div>

                  </div>

                </div>
                <div className="btn-wrapper">
                  <button
                    className="button is-warning"
                    type="button"
                    onClick={() => handleAddEkuitas()}>Tambah</button>
                  <button
                    className="button is-danger"
                    type="button"
                    style={{ marginLeft: 16 }}
                    onClick={() => handleRemoveEkuitas(index)}>Hapus</button>
                </div>
              </Fragment>
            ))}

          </div>

          {/**LABA RUGI */}
          <div className="section-form-header">
            <p className="sub-title-form"><b>Laba Rugi</b></p>
            <div className="section-form-header">
              <p className="sub-title-form">1. Pendapatan</p>
              {pendapatan.map((pendapatan, index) => (
                <Fragment key={`${pendapatan}~${index}`}>
                  <div className="section-form-body section-form-flex">
                    <div className="form-flex-left">
                      <div className="input-form-standar">
                        <label className="label-normal label-normal-less-width">Akun</label>
                        <input
                          id="akun"
                          name="akun"
                          className="input is-dark input-standar input-wide"
                          type="text"
                          placeholder=""
                          value={pendapatan.akun}
                          onChange={event => handleInputPendapatan(index, event)} />
                      </div>

                      <div className="input-form-standar">
                        <label className="label-normal label-normal-less-width">Tahun 1</label>
                        <div className="select input-narrow margin-right-20">
                          <select
                            id="tahun1"
                            name="tahun1"
                            value={pendapatan.tahun1}
                            onChange={event => handleInputPendapatan(index, event)}>
                            <option value="">-Select Tahun-</option>
                            <option value="2015">2015</option>
                            <option value="2016">2016</option>
                            <option value="2017">2017</option>
                            <option value="2018">2018</option>
                            <option value="2019">2019</option>
                            <option value="2020">2020</option>
                            {/* tahun terakhir adalah tahun yang berlangsung sekarang */}
                          </select>
                        </div>
                        <input
                          id="nilaiTahun1"
                          name="nilaiTahun1"
                          className="input is-dark input-narrow"
                          type="text"
                          placeholder=""
                          value={currencyFormatter(pendapatan.nilaiTahun1)}
                          onChange={event => handleInputPendapatan(index, event)} />
                      </div>

                      <div className="input-form-standar">
                        <label className="label-normal label-normal-less-width">Tahun 2</label>
                        <div className="select input-narrow margin-right-20">
                          <select
                            id="tahun2"
                            name="tahun2"
                            value={pendapatan.tahun2}
                            onChange={event => handleInputPendapatan(index, event)}>
                            <option value="">-Select Tahun-</option>
                            <option value="2015">2015</option>
                            <option value="2016">2016</option>
                            <option value="2017">2017</option>
                            <option value="2018">2018</option>
                            <option value="2019">2019</option>
                            <option value="2020">2020</option>
                            {/* tahun terakhir adalah tahun yang berlangsung sekarang */}
                          </select>
                        </div>
                        <input
                          id="nilaiTahun2"
                          name="nilaiTahun2"
                          className="input is-dark input-narrow"
                          type="text"
                          placeholder=""
                          value={currencyFormatter(pendapatan.nilaiTahun2)}
                          onChange={event => handleInputPendapatan(index, event)} />
                      </div>
                      <div className="input-form-standar">
                        <label className="label-normal label-normal-less-width">Tahun 3</label>
                        <div className="select input-narrow margin-right-20">
                          <select
                            id="tahun3"
                            name="tahun3"
                            value={pendapatan.tahun3}
                            onChange={event => handleInputPendapatan(index, event)}>
                            <option value="">-Select Tahun-</option>
                            <option value="2015">2015</option>
                            <option value="2016">2016</option>
                            <option value="2017">2017</option>
                            <option value="2018">2018</option>
                            <option value="2019">2019</option>
                            <option value="2020">2020</option>
                            {/* tahun terakhir adalah tahun yang berlangsung sekarang */}
                          </select>
                        </div>
                        <input
                          id="nilaiTahun3"
                          name="nilaiTahun3"
                          className="input is-dark input-narrow"
                          type="text"
                          placeholder=""
                          value={currencyFormatter(pendapatan.nilaiTahun3)}
                          onChange={event => handleInputPendapatan(index, event)} />
                      </div>
                    </div>
                    <div className="form-flex-right">
                      <div className="input-form-standar input-form-align-top">
                        <label className="label-normal label-top">Keterangan</label>
                        <textarea
                          id="keterangan"
                          name="keterangan"
                          className="textarea textarea-standar is-black has-fixed-size"
                          placeholder=""
                          value={pendapatan.keterangan}
                          onChange={event => handleInputPendapatan(index, event)}></textarea>
                      </div>

                    </div>

                  </div>
                  <div className="btn-wrapper">
                    <button
                      className="button is-warning"
                      type="button"
                      onClick={() => handleAddPendapatan()}>Tambah</button>
                    <button
                      className="button is-danger"
                      type="button"
                      style={{ marginLeft: 16 }}
                      onClick={() => handleRemovePendapatan(index)}>Hapus</button>
                  </div>
                </Fragment>
              ))}
            </div>

            <div className="section-form-header">
              <p className="sub-title-form">2. Harga Pokok Penjualan <i style={{ fontSize: 10, color: 'red' }}>*jika memasukan beban lainnya silahkan masukan dengan angka minus (-). contoh = -90.000.0000 </i></p>
              {hargaPokok.map((hargaPokok, index) => (
                <Fragment key={`${hargaPokok}~${index}`}>
                  <div className="section-form-body section-form-flex">
                    <div className="form-flex-left">
                      <div className="input-form-standar">
                        <label className="label-normal label-normal-less-width">Akun</label>
                        <input
                          id="akun"
                          name="akun"
                          className="input is-dark input-standar input-wide"
                          type="text"
                          placeholder=""
                          value={hargaPokok.akun}
                          onChange={event => handleInputHargaPokok(index, event)} />
                      </div>

                      <div className="input-form-standar">
                        <label className="label-normal label-normal-less-width">Tahun 1</label>
                        <div className="select input-narrow margin-right-20">
                          <select
                            id="tahun1"
                            name="tahun1"
                            value={hargaPokok.tahun1}
                            onChange={event => handleInputHargaPokok(index, event)}>
                            <option value="">-Select Tahun-</option>
                            <option value="2015">2015</option>
                            <option value="2016">2016</option>
                            <option value="2017">2017</option>
                            <option value="2018">2018</option>
                            <option value="2019">2019</option>
                            <option value="2020">2020</option>
                            {/* tahun terakhir adalah tahun yang berlangsung sekarang */}
                          </select>
                        </div>
                        <input
                          id="nilaiTahun1"
                          name="nilaiTahun1"
                          className="input is-dark input-narrow"
                          type="text"
                          placeholder=""
                          value={currencyFormatter(hargaPokok.nilaiTahun1)}
                          onChange={event => handleInputHargaPokok(index, event)} />
                      </div>

                      <div className="input-form-standar">
                        <label className="label-normal label-normal-less-width">Tahun 2</label>
                        <div className="select input-narrow margin-right-20">
                          <select
                            id="tahun2"
                            name="tahun2"
                            value={hargaPokok.tahun2}
                            onChange={event => handleInputHargaPokok(index, event)}>
                            <option value="">-Select Tahun-</option>
                            <option value="2015">2015</option>
                            <option value="2016">2016</option>
                            <option value="2017">2017</option>
                            <option value="2018">2018</option>
                            <option value="2019">2019</option>
                            <option value="2020">2020</option>
                            {/* tahun terakhir adalah tahun yang berlangsung sekarang */}
                          </select>
                        </div>
                        <input
                          id="nilaiTahun2"
                          name="nilaiTahun2"
                          className="input is-dark input-narrow"
                          type="text"
                          placeholder=""
                          value={currencyFormatter(hargaPokok.nilaiTahun2)}
                          onChange={event => handleInputHargaPokok(index, event)} />
                      </div>
                      <div className="input-form-standar">
                        <label className="label-normal label-normal-less-width">Tahun 3</label>
                        <div className="select input-narrow margin-right-20">
                          <select
                            id="tahun3"
                            name="tahun3"
                            value={hargaPokok.tahun3}
                            onChange={event => handleInputHargaPokok(index, event)}>
                            <option value="">-Select Tahun-</option>
                            <option value="2015">2015</option>
                            <option value="2016">2016</option>
                            <option value="2017">2017</option>
                            <option value="2018">2018</option>
                            <option value="2019">2019</option>
                            <option value="2020">2020</option>
                            {/* tahun terakhir adalah tahun yang berlangsung sekarang */}
                          </select>
                        </div>
                        <input
                          id="nilaiTahun3"
                          name="nilaiTahun3"
                          className="input is-dark input-narrow"
                          type="text"
                          placeholder=""
                          value={currencyFormatter(hargaPokok.nilaiTahun3)}
                          onChange={event => handleInputHargaPokok(index, event)} />
                      </div>
                    </div>
                    <div className="form-flex-right">
                      <div className="input-form-standar input-form-align-top">
                        <label className="label-normal label-top">Keterangan</label>
                        <textarea
                          id="keterangan"
                          name="keterangan"
                          className="textarea textarea-standar is-black has-fixed-size"
                          placeholder=""
                          value={hargaPokok.keterangan}
                          onChange={event => handleInputHargaPokok(index, event)}></textarea>
                      </div>

                    </div>

                  </div>
                  <div className="btn-wrapper">
                    <button
                      className="button is-warning"
                      type="button"
                      onClick={() => handleAddHargaPokok()}>Tambah</button>
                    <button
                      className="button is-danger"
                      type="button"
                      style={{ marginLeft: 16 }}
                      onClick={() => handleRemoveHargaPokok(index)}>Hapus</button>
                  </div>
                </Fragment>
              ))}
            </div>

            <div className="section-form-header">
              <p className="sub-title-form">3. Persediaan Akhir</p>
              {persediaanAkhir.map((persediaanAkhir, index) => (
                <Fragment key={`${persediaanAkhir}~${index}`}>
                  <div className="section-form-body section-form-flex">
                    <div className="form-flex-left">
                      <div className="input-form-standar">
                        <label className="label-normal label-normal-less-width">Akun</label>
                        <input
                          id="akun"
                          name="akun"
                          className="input is-dark input-standar input-wide"
                          type="text"
                          placeholder=""
                          value={persediaanAkhir.akun}
                          onChange={event => handleInputPersediaanAkhir(index, event)} />
                      </div>

                      <div className="input-form-standar">
                        <label className="label-normal label-normal-less-width">Tahun 1</label>
                        <div className="select input-narrow margin-right-20">
                          <select
                            id="tahun1"
                            name="tahun1"
                            value={persediaanAkhir.tahun1}
                            onChange={event => handleInputPersediaanAkhir(index, event)}>
                            <option value="">-Select Tahun-</option>
                            <option value="2015">2015</option>
                            <option value="2016">2016</option>
                            <option value="2017">2017</option>
                            <option value="2018">2018</option>
                            <option value="2019">2019</option>
                            <option value="2020">2020</option>
                            {/* tahun terakhir adalah tahun yang berlangsung sekarang */}
                          </select>
                        </div>
                        <input
                          id="nilaiTahun1"
                          name="nilaiTahun1"
                          className="input is-dark input-narrow"
                          type="text"
                          placeholder=""
                          value={currencyFormatter(persediaanAkhir.nilaiTahun1)}
                          onChange={event => handleInputPersediaanAkhir(index, event)} />
                      </div>

                      <div className="input-form-standar">
                        <label className="label-normal label-normal-less-width">Tahun 2</label>
                        <div className="select input-narrow margin-right-20">
                          <select
                            id="tahun2"
                            name="tahun2"
                            value={persediaanAkhir.tahun2}
                            onChange={event => handleInputPersediaanAkhir(index, event)}>
                            <option value="">-Select Tahun-</option>
                            <option value="2015">2015</option>
                            <option value="2016">2016</option>
                            <option value="2017">2017</option>
                            <option value="2018">2018</option>
                            <option value="2019">2019</option>
                            <option value="2020">2020</option>
                            {/* tahun terakhir adalah tahun yang berlangsung sekarang */}
                          </select>
                        </div>
                        <input
                          id="nilaiTahun2"
                          name="nilaiTahun2"
                          className="input is-dark input-narrow"
                          type="text"
                          placeholder=""
                          value={currencyFormatter(persediaanAkhir.nilaiTahun2)}
                          onChange={event => handleInputPersediaanAkhir(index, event)} />
                      </div>
                      <div className="input-form-standar">
                        <label className="label-normal label-normal-less-width">Tahun 3</label>
                        <div className="select input-narrow margin-right-20">
                          <select
                            id="tahun3"
                            name="tahun3"
                            value={persediaanAkhir.tahun3}
                            onChange={event => handleInputPersediaanAkhir(index, event)}>
                            <option value="">-Select Tahun-</option>
                            <option value="2015">2015</option>
                            <option value="2016">2016</option>
                            <option value="2017">2017</option>
                            <option value="2018">2018</option>
                            <option value="2019">2019</option>
                            <option value="2020">2020</option>
                            {/* tahun terakhir adalah tahun yang berlangsung sekarang */}
                          </select>
                        </div>
                        <input
                          id="nilaiTahun3"
                          name="nilaiTahun3"
                          className="input is-dark input-narrow"
                          type="text"
                          placeholder=""
                          value={currencyFormatter(persediaanAkhir.nilaiTahun3)}
                          onChange={event => handleInputPersediaanAkhir(index, event)} />
                      </div>
                    </div>
                    <div className="form-flex-right">
                      <div className="input-form-standar input-form-align-top">
                        <label className="label-normal label-top">Keterangan</label>
                        <textarea
                          id="keterangan"
                          name="keterangan"
                          className="textarea textarea-standar is-black has-fixed-size"
                          placeholder=""
                          value={persediaanAkhir.keterangan}
                          onChange={event => handleInputPersediaanAkhir(index, event)}></textarea>
                      </div>

                    </div>

                  </div>
                  <div className="btn-wrapper">
                    <button
                      className="button is-warning"
                      type="button"
                      onClick={() => handleAddPersediaanAkhir()}>Tambah</button>
                    <button
                      className="button is-danger"
                      type="button"
                      style={{ marginLeft: 16 }}
                      onClick={() => handleRemovePersediaanAkhir(index)}>Hapus</button>
                  </div>
                </Fragment>
              ))}
            </div>

            <div className="section-form-header">
              <p className="sub-title-form">4. Biaya-biaya</p>
              <div className="section-form-header">
                <p className="sub-title-form">i. Biaya Penjualan</p>
                {biayaLabaPenjualan.map((biayaLaba, index) => (
                  <Fragment key={`${biayaLaba}~${index}`}>
                    <div className="section-form-body section-form-flex">
                      <div className="form-flex-left">
                        <div className="input-form-standar">
                          <label className="label-normal label-normal-less-width">Akun</label>
                          <input
                            id="akun-pejualan"
                            name="akun"
                            className="input is-dark input-standar input-wide"
                            type="text"
                            placeholder=""
                            value={biayaLaba.akun}
                            onChange={event => handleInputBiayaLabaPenjualan(index, event)} />
                        </div>

                        <div className="input-form-standar">
                          <label className="label-normal label-normal-less-width">Tahun 1</label>
                          <div className="select input-narrow margin-right-20">
                            <select
                              id="tahun1-pejualan"
                              name="tahun1"
                              value={biayaLaba.tahun1}
                              onChange={event => handleInputBiayaLabaPenjualan(index, event)}>
                              <option value="">-Select Tahun-</option>
                              <option value="2015">2015</option>
                              <option value="2016">2016</option>
                              <option value="2017">2017</option>
                              <option value="2018">2018</option>
                              <option value="2019">2019</option>
                              <option value="2020">2020</option>
                              {/* tahun terakhir adalah tahun yang berlangsung sekarang */}
                            </select>
                          </div>
                          <input
                            id="nilaiTahun1-pejualan"
                            name="nilaiTahun1"
                            className="input is-dark input-narrow"
                            type="text"
                            placeholder=""
                            value={currencyFormatter(biayaLaba.nilaiTahun1)}
                            onChange={event => handleInputBiayaLabaPenjualan(index, event)} />
                        </div>

                        <div className="input-form-standar">
                          <label className="label-normal label-normal-less-width">Tahun 2</label>
                          <div className="select input-narrow margin-right-20">
                            <select
                              id="tahun2-pejualan"
                              name="tahun2"
                              value={biayaLaba.tahun2}
                              onChange={event => handleInputBiayaLabaPenjualan(index, event)}>
                              <option value="">-Select Tahun-</option>
                              <option value="2015">2015</option>
                              <option value="2016">2016</option>
                              <option value="2017">2017</option>
                              <option value="2018">2018</option>
                              <option value="2019">2019</option>
                              <option value="2020">2020</option>
                              {/* tahun terakhir adalah tahun yang berlangsung sekarang */}
                            </select>
                          </div>
                          <input
                            id="nilaiTahun2-pejualan"
                            name="nilaiTahun2"
                            className="input is-dark input-narrow"
                            type="text"
                            placeholder=""
                            value={currencyFormatter(biayaLaba.nilaiTahun2)}
                            onChange={event => handleInputBiayaLabaPenjualan(index, event)} />
                        </div>
                        <div className="input-form-standar">
                          <label className="label-normal label-normal-less-width">Tahun 3</label>
                          <div className="select input-narrow margin-right-20">
                            <select
                              id="tahun3-pejualan"
                              name="tahun3"
                              value={biayaLaba.tahun3}
                              onChange={event => handleInputBiayaLabaPenjualan(index, event)}>
                              <option value="">-Select Tahun-</option>
                              <option value="2015">2015</option>
                              <option value="2016">2016</option>
                              <option value="2017">2017</option>
                              <option value="2018">2018</option>
                              <option value="2019">2019</option>
                              <option value="2020">2020</option>
                              {/* tahun terakhir adalah tahun yang berlangsung sekarang */}
                            </select>
                          </div>
                          <input
                            id="nilaiTahun3-pejualan"
                            name="nilaiTahun3"
                            className="input is-dark input-narrow"
                            type="text"
                            placeholder=""
                            value={currencyFormatter(biayaLaba.nilaiTahun3)}
                            onChange={event => handleInputBiayaLabaPenjualan(index, event)} />
                        </div>
                      </div>
                      <div className="form-flex-right">
                        <div className="input-form-standar input-form-align-top">
                          <label className="label-normal label-top">Keterangan</label>
                          <textarea
                            id="keterangan-pejualan"
                            name="keterangan"
                            className="textarea textarea-standar is-black has-fixed-size"
                            placeholder=""
                            value={biayaLaba.keterangan}
                            onChange={event => handleInputBiayaLabaPenjualan(index, event)}></textarea>
                        </div>

                      </div>

                    </div>
                    <div className="btn-wrapper">
                      <button
                        className="button is-warning"
                        type="button"
                        onClick={() => handleAddBiayaLabaPenjualan()}>Tambah</button>
                      <button
                        className="button is-danger"
                        type="button"
                        style={{ marginLeft: 16 }}
                        onClick={() => handleRemoveBiayaLabaPenjualan(index)}>Hapus</button>
                    </div>
                  </Fragment>
                ))}
              </div>

              <div className="section-form-header">
                <p className="sub-title-form">ii. Biaya Umum</p>
                {biayaLabaUmum.map((biayaLaba, index) => (
                  <Fragment key={`${biayaLaba}~${index}`}>
                    <div className="section-form-body section-form-flex">
                      <div className="form-flex-left">
                        <div className="input-form-standar">
                          <label className="label-normal label-normal-less-width">Akun</label>
                          <input
                            id="akun-umum"
                            name="akun"
                            className="input is-dark input-standar input-wide"
                            type="text"
                            placeholder=""
                            value={biayaLaba.akun}
                            onChange={event => handleInputBiayaLabaUmum(index, event)} />
                        </div>

                        <div className="input-form-standar">
                          <label className="label-normal label-normal-less-width">Tahun 1</label>
                          <div className="select input-narrow margin-right-20">
                            <select
                              id="tahun1-umum"
                              name="tahun1"
                              value={biayaLaba.tahun1}
                              onChange={event => handleInputBiayaLabaUmum(index, event)}>
                              <option value="">-Select Tahun-</option>
                              <option value="2015">2015</option>
                              <option value="2016">2016</option>
                              <option value="2017">2017</option>
                              <option value="2018">2018</option>
                              <option value="2019">2019</option>
                              <option value="2020">2020</option>
                              {/* tahun terakhir adalah tahun yang berlangsung sekarang */}
                            </select>
                          </div>
                          <input
                            id="nilaiTahun1-umum"
                            name="nilaiTahun1"
                            className="input is-dark input-narrow"
                            type="text"
                            placeholder=""
                            value={currencyFormatter(biayaLaba.nilaiTahun1)}
                            onChange={event => handleInputBiayaLabaUmum(index, event)} />
                        </div>

                        <div className="input-form-standar">
                          <label className="label-normal label-normal-less-width">Tahun 2</label>
                          <div className="select input-narrow margin-right-20">
                            <select
                              id="tahun2-umum"
                              name="tahun2"
                              value={biayaLaba.tahun2}
                              onChange={event => handleInputBiayaLabaUmum(index, event)}>
                              <option value="">-Select Tahun-</option>
                              <option value="2015">2015</option>
                              <option value="2016">2016</option>
                              <option value="2017">2017</option>
                              <option value="2018">2018</option>
                              <option value="2019">2019</option>
                              <option value="2020">2020</option>
                              {/* tahun terakhir adalah tahun yang berlangsung sekarang */}
                            </select>
                          </div>
                          <input
                            id="nilaiTahun2-umum"
                            name="nilaiTahun2"
                            className="input is-dark input-narrow"
                            type="text"
                            placeholder=""
                            value={currencyFormatter(biayaLaba.nilaiTahun2)}
                            onChange={event => handleInputBiayaLabaUmum(index, event)} />
                        </div>
                        <div className="input-form-standar">
                          <label className="label-normal label-normal-less-width">Tahun 3</label>
                          <div className="select input-narrow margin-right-20">
                            <select
                              id="tahun3-umum"
                              name="tahun3"
                              value={biayaLaba.tahun3}
                              onChange={event => handleInputBiayaLabaUmum(index, event)}>
                              <option value="">-Select Tahun-</option>
                              <option value="2015">2015</option>
                              <option value="2016">2016</option>
                              <option value="2017">2017</option>
                              <option value="2018">2018</option>
                              <option value="2019">2019</option>
                              <option value="2020">2020</option>
                              {/* tahun terakhir adalah tahun yang berlangsung sekarang */}
                            </select>
                          </div>
                          <input
                            id="nilaiTahun3-umum"
                            name="nilaiTahun3"
                            className="input is-dark input-narrow"
                            type="text"
                            placeholder=""
                            value={currencyFormatter(biayaLaba.nilaiTahun3)}
                            onChange={event => handleInputBiayaLabaUmum(index, event)} />
                        </div>
                      </div>
                      <div className="form-flex-right">
                        <div className="input-form-standar input-form-align-top">
                          <label className="label-normal label-top">Keterangan</label>
                          <textarea
                            id="keterangan-umum"
                            name="keterangan"
                            className="textarea textarea-standar is-black has-fixed-size"
                            placeholder=""
                            value={biayaLaba.keterangan}
                            onChange={event => handleInputBiayaLabaUmum(index, event)}></textarea>
                        </div>

                      </div>

                    </div>
                    <div className="btn-wrapper">
                      <button
                        className="button is-warning"
                        type="button"
                        onClick={() => handleAddBiayaLabaUmum()}>Tambah</button>
                      <button
                        className="button is-danger"
                        type="button"
                        style={{ marginLeft: 16 }}
                        onClick={() => handleRemoveBiayaLabaUmum(index)}>Hapus</button>
                    </div>
                  </Fragment>
                ))}
              </div>
            </div>

            <div className="section-form-header">
              <p className="sub-title-form">5. Pendapatan dan Beban lain-lain <i style={{ fontSize: 10, color: 'red' }}>*jika memasukan beban lainnya silahkan masukan dengan angka minus (-). contoh = -90.000.0000 </i></p>
              {pendapatanBeban.map((pendapatanBeban, index) => (
                <Fragment key={`${pendapatanBeban}~${index}`}>
                  <div className="section-form-body section-form-flex">
                    <div className="form-flex-left">
                      <div className="input-form-standar">
                        <label className="label-normal label-normal-less-width">Akun</label>
                        <input
                          id="akun"
                          name="akun"
                          className="input is-dark input-standar input-wide"
                          type="text"
                          placeholder=""
                          value={pendapatanBeban.akun}
                          onChange={event => handleInputPendapatanBeban(index, event)} />
                      </div>

                      <div className="input-form-standar">
                        <label className="label-normal label-normal-less-width">Tahun 1</label>
                        <div className="select input-narrow margin-right-20">
                          <select
                            id="tahun1"
                            name="tahun1"
                            value={pendapatanBeban.tahun1}
                            onChange={event => handleInputPendapatanBeban(index, event)}>
                            <option value="">-Select Tahun-</option>
                            <option value="2015">2015</option>
                            <option value="2016">2016</option>
                            <option value="2017">2017</option>
                            <option value="2018">2018</option>
                            <option value="2019">2019</option>
                            <option value="2020">2020</option>
                            {/* tahun terakhir adalah tahun yang berlangsung sekarang */}
                          </select>
                        </div>
                        <input
                          id="nilaiTahun1"
                          name="nilaiTahun1"
                          className="input is-dark input-narrow"
                          type="text"
                          placeholder=""
                          value={currencyFormatter(pendapatanBeban.nilaiTahun1)}
                          onChange={event => handleInputPendapatanBeban(index, event)} />
                      </div>

                      <div className="input-form-standar">
                        <label className="label-normal label-normal-less-width">Tahun 2</label>
                        <div className="select input-narrow margin-right-20">
                          <select
                            id="tahun2"
                            name="tahun2"
                            value={pendapatanBeban.tahun2}
                            onChange={event => handleInputPendapatanBeban(index, event)}>
                            <option value="">-Select Tahun-</option>
                            <option value="2015">2015</option>
                            <option value="2016">2016</option>
                            <option value="2017">2017</option>
                            <option value="2018">2018</option>
                            <option value="2019">2019</option>
                            <option value="2020">2020</option>
                            {/* tahun terakhir adalah tahun yang berlangsung sekarang */}
                          </select>
                        </div>
                        <input
                          id="nilaiTahun2"
                          name="nilaiTahun2"
                          className="input is-dark input-narrow"
                          type="text"
                          placeholder=""
                          value={currencyFormatter(pendapatanBeban.nilaiTahun2)}
                          onChange={event => handleInputPendapatanBeban(index, event)} />
                      </div>
                      <div className="input-form-standar">
                        <label className="label-normal label-normal-less-width">Tahun 3</label>
                        <div className="select input-narrow margin-right-20">
                          <select
                            id="tahun3"
                            name="tahun3"
                            value={pendapatanBeban.tahun3}
                            onChange={event => handleInputPendapatanBeban(index, event)}>
                            <option value="">-Select Tahun-</option>
                            <option value="2015">2015</option>
                            <option value="2016">2016</option>
                            <option value="2017">2017</option>
                            <option value="2018">2018</option>
                            <option value="2019">2019</option>
                            <option value="2020">2020</option>
                            {/* tahun terakhir adalah tahun yang berlangsung sekarang */}
                          </select>
                        </div>
                        <input
                          id="nilaiTahun3"
                          name="nilaiTahun3"
                          className="input is-dark input-narrow"
                          type="text"
                          placeholder=""
                          value={currencyFormatter(pendapatanBeban.nilaiTahun3)}
                          onChange={event => handleInputPendapatanBeban(index, event)} />
                      </div>
                    </div>
                    <div className="form-flex-right">
                      <div className="input-form-standar input-form-align-top">
                        <label className="label-normal label-top">Keterangan</label>
                        <textarea
                          id="keterangan"
                          name="keterangan"
                          className="textarea textarea-standar is-black has-fixed-size"
                          placeholder=""
                          value={pendapatanBeban.keterangan}
                          onChange={event => handleInputPendapatanBeban(index, event)}></textarea>
                      </div>

                    </div>

                  </div>
                  <div className="btn-wrapper">
                    <button
                      className="button is-warning"
                      type="button"
                      onClick={() => handleAddPendapatanBeban()}>Tambah</button>
                    <button
                      className="button is-danger"
                      type="button"
                      style={{ marginLeft: 16 }}
                      onClick={() => handleRemovePendapatanBeban(index)}>Hapus</button>
                  </div>
                </Fragment>
              ))}
            </div>


          </div>
        </div>

        {/**Analisis Transfer Pricing dan Aspek Perpajakan Internasional*/}
        <div className="section-form-header">
          <p className="sub-title-form">B. Analisis Transfer Pricing dan Aspek Perpajakan Internasional</p>
          {transferPricing.map((transferPricing, index) => (
            <Fragment key={`${transferPricing}~${index}`}>
              <div className="section-form-body section-form-flex">
                <textarea
                  id="analisis"
                  name="analisis"
                  className="textarea is-black has-fixed-size"
                  placeholder=""
                  value={transferPricing.analisis}
                  onChange={event => handleInputTransferPricing(index, event)}></textarea>
              </div>
              <div className="btn-wrapper" style={{ marginTop: 20 }}>
                <button
                  className="button is-warning"
                  type="button"
                  onClick={() => handleAddTransferPricing()}>Tambah</button>
                <button
                  className="button is-danger"
                  type="button"
                  style={{ marginLeft: 16 }}
                  onClick={() => handleRemoveTransferPricing(index)}>Hapus</button>
              </div>
            </Fragment>
          ))}
        </div>

        <div className="section-form-header">
          <p className="sub-title-form">C. Analisis Pajak Lainnya</p>
          {pajakLain.map((pajakLain, index) => (
            <Fragment key={`${pajakLain}~${index}`}>
              <div className="section-form-body section-form-flex">
                <div className="form-flex-left">
                  <div className="input-form-standar">
                    <label className="label-normal">Uraian</label>
                    <input
                      id="uraian"
                      name="uraian"
                      className="input is-dark input-standar"
                      type="text"
                      placeholder=""
                      value={pajakLain.uraian}
                      onChange={event => handleInputPajakLain(index, event)} />
                  </div>
                  <div className="input-form-standar">
                    <label className="label-normal">Cfm SPT</label>
                    <input
                      id="cfmSpt"
                      name="cfmSpt"
                      className="input is-dark input-standar"
                      type="text"
                      placeholder=""
                      value={currencyFormatter(pajakLain.cfmSpt)}
                      onChange={event => handleInputPajakLain(index, event)} />
                  </div>
                  <div className="input-form-standar">
                    <label className="label-normal">Cfm Penelitian</label>
                    <input
                      id="cfmPenelitian"
                      name="cfmPenelitian"
                      className="input is-dark input-standar"
                      type="text"
                      placeholder=""
                      value={currencyFormatter(pajakLain.cfmPenelitian)}
                      onChange={event => handleInputPajakLain(index, event)} />
                  </div>
                </div>
                <div className="form-flex-right">
                  <div className="input-form-standar input-form-align-top">
                    <label className="label-normal label-top">Keterangan</label>
                    <textarea
                      id="keterangan"
                      name="keterangan"
                      className="textarea textarea-standar is-black has-fixed-size"
                      placeholder=""
                      value={pajakLain.keterangan}
                      onChange={event => handleInputPajakLain(index, event)}></textarea>
                  </div>
                </div>
              </div>
              <div className="btn-wrapper">
                <button
                  className="button is-warning"
                  type="button"
                  onClick={() => handleAddPajakLain()}>Tambah</button>
                <button
                  className="button is-danger"
                  type="button"
                  style={{ marginLeft: 16 }}
                  onClick={() => handleRemovePajakLain(index)}>Hapus</button>
              </div>
            </Fragment>
          ))}
        </div>

        {/**Fakta Lapangan*/}
        <div className="section-form-header">
          <p className="sub-title-form">D. Fakta Lapangan</p>

          <div className="section-form-header">
            <p className="sub-title-form">1. Hasil Kunjungan</p>
            {hasilKunjungan.map((hasilKunjungan, index) => (
              <Fragment key={`${hasilKunjungan}~${index}`}>
                <div className="section-form-body section-form-flex">
                  <div className="form-flex-left">
                    <div className="input-form-standar">
                      <label className="label-normal">Nomor</label>
                      <input
                        id="nomor"
                        name="nomor"
                        className="input is-dark input-standar input-wide"
                        type="text"
                        placeholder=""
                        value={hasilKunjungan.nomor}
                        onChange={event => handleInputHasilKunjungan(index, event)} />
                    </div>
                    <div className="input-form-standar">
                      <label className="label-normal">Tanggal</label>
                      <input
                        id="tanggal"
                        name="tanggal"
                        className="input is-dark input-standar input-wide"
                        type="date"
                        placeholder=""
                        value={hasilKunjungan.tanggal}
                        onChange={event => handleInputHasilKunjungan(index, event)} />
                    </div>
                    <div className="input-form-standar">
                      <label className="label-normal">Hasil Kunjugan</label>
                      <input
                        id="hasil"
                        name="hasil"
                        className="input is-dark input-standar input-wide"
                        type="text"
                        placeholder=""
                        value={hasilKunjungan.hasil}
                        onChange={event => handleInputHasilKunjungan(index, event)} />
                    </div>
                  </div>
                </div>

                <div className="btn-wrapper">
                  <button
                    className="button is-warning"
                    type="button"
                    onClick={() => handleAddHasilKunjungan()}>Tambah</button>
                  <button
                    className="button is-danger"
                    type="button"
                    style={{ marginLeft: 16 }}
                    onClick={() => handleRemoveHasilKunjungan(index)}>Hapus</button>
                </div>
              </Fragment>
            ))}
          </div>

          <div className="section-form-header">
            <p className="sub-title-form">2. Fakta Lapangan Lainnya</p>
            {faktaLapangan.map((faktaLapangan, index) => (
              <Fragment key={`${faktaLapangan}~${index}`}>
                <div className="section-form-body section-form-flex">
                  <textarea
                    id="fakta"
                    name="fakta"
                    className="textarea is-black has-fixed-size"
                    placeholder=""
                    value={faktaLapangan.fakta}
                    onChange={event => handleInputFaktaLapangan(index, event)}></textarea>
                </div>
                <div className="btn-wrapper" style={{ marginTop: 20 }}>
                  <button
                    className="button is-warning"
                    type="button"
                    onClick={() => handleAddFaktaLapangan()}>Tambah</button>
                  <button
                    className="button is-danger"
                    type="button"
                    style={{ marginLeft: 16 }}
                    onClick={() => handleRemoveFaktaLapangan(index)}>Hapus</button>
                </div>
              </Fragment>
            ))}
          </div>

          <div className="section-form-header">
            <p className="sub-title-form">3. Pengaduan Masyarakat</p>
            {pengaduanMasyarakat.map((pengaduanMasyarakat, index) => (
              <Fragment key={`${pengaduanMasyarakat}~${index}`}>
                <div className="section-form-body section-form-flex">
                  <div className="form-flex-left">
                    <div className="input-form-standar">
                      <label className="label-normal">Tahun Pajak</label>
                      <input
                        id="tahunPajak"
                        name="tahunPajak"
                        className="input is-dark input-standar"
                        type="text"
                        placeholder=""
                        value={pengaduanMasyarakat.tahunPajak}
                        onChange={event => handleInputPengaduanMasyarakat(index, event)} />
                    </div>
                    <div className="input-form-standar">
                      <label className="label-normal">Jenis Pajak</label>
                      <input
                        id="jenisData"
                        name="jenisData"
                        className="input is-dark input-standar"
                        type="text"
                        placeholder=""
                        value={pengaduanMasyarakat.jenisData}
                        onChange={event => handleInputPengaduanMasyarakat(index, event)} />
                    </div>
                    <div className="input-form-standar">
                      <label className="label-normal">Tindak Lanjut Surat Pengaduan</label>
                      <input
                        id="tindakLanjut"
                        name="tindakLanjut"
                        className="input is-dark input-standar"
                        type="text"
                        placeholder=""
                        value={pengaduanMasyarakat.tindakLanjut}
                        onChange={event => handleInputPengaduanMasyarakat(index, event)} />
                    </div>
                  </div>
                  <div className="form-flex-right">
                    <div className="input-form-standar">
                      <label className="label-normal">Nilai Data</label>
                      <input
                        id="nilaiData"
                        name="nilaiData"
                        className="input is-dark input-standar"
                        type="text"
                        placeholder=""
                        value={currencyFormatter(pengaduanMasyarakat.nilaiData)}
                        onChange={event => handleInputPengaduanMasyarakat(index, event)} />
                    </div>
                    <div className="input-form-standar">
                      <label className="label-normal">Modus Operandi</label>
                      <input
                        id="modusOper"
                        name="modusOper"
                        className="input is-dark input-standar"
                        type="text"
                        placeholder=""
                        value={pengaduanMasyarakat.modusOper}
                        onChange={event => handleInputPengaduanMasyarakat(index, event)} />
                    </div>
                  </div>
                </div>
                <div className="btn-wrapper">
                  <button
                    className="button is-warning"
                    type="button"
                    onClick={() => handleAddPengaduanMasyarakat()}>Tambah</button>
                  <button
                    className="button is-danger"
                    type="button"
                    style={{ marginLeft: 16 }}
                    onClick={() => handleRemovePengaduanMasyarakat(index)}>Hapus</button>
                </div>
              </Fragment>
            ))}
          </div>
        </div>

      </div>

      <div className="section-form margin-section">
        <p className="title-form">III. KESIMPULAN DAN SARAN</p>
        <div className="section-form-header">
          <p className="sub-title-form">A. Wajib Pajak telah memenuhi kewajiban perpajakan</p>
          <div className="section-form-body section-form-flex">
            <textarea
              id="memenuhiKewajiban"
              name="memenuhiKewajiban"
              className="textarea is-black has-fixed-size"
              placeholder=""
              value={dataUmum.memenuhiKewajiban}
              onChange={event => handleInputDataUmum(0, event)}></textarea>
          </div>
        </div>

        <div className="section-form-header">
          <p className="sub-title-form">B. Wajib Pajak diusulkan permintaan penjelasan atas data dan/atau keterangan (terdapat tax gap)</p>
          <div className="section-form-header">
            <p className="sub-title-form">1. Indikasi ketidak patuhan</p>
            {indikasiKetidakpatuhan.map((indikasiKetidakpatuhan, index) => (
              <Fragment key={`${indikasiKetidakpatuhan}~${index}`}>
                <div className="input-form-standar">
                  <input
                    id="indikasi"
                    name="indikasi"
                    className="input is-dark input-standar input-wide"
                    type="text"
                    placeholder=""
                    value={indikasiKetidakpatuhan.indikasi}
                    onChange={event => handleInputIndikasiKetidakpatuhan(index, event)} />
                  <button
                    style={{ marginLeft: 16 }}
                    className="button is-warning"
                    type="button"
                    onClick={() => handleAddIndikasiKetidakpatuhan()}>Tambah</button>
                  <button
                    className="button is-danger"
                    type="button"
                    style={{ marginLeft: 16 }}
                    onClick={() => handleRemoveIndikasiKetidakpatuhan(index)}>Hapus</button>
                </div>
              </Fragment>
            ))}
          </div>

          <div className="section-form-header">
            <p className="sub-title-form">2. Modus ketidakpatuhan</p>
            {modusKetidakpatuhan.map((modusKetidakpatuhan, index) => (
              <Fragment key={`${modusKetidakpatuhan}~${index}`}>
                <div className="input-form-standar">
                  <input
                    id="indikasi"
                    name="indikasi"
                    className="input is-dark input-standar input-wide"
                    type="text"
                    placeholder=""
                    value={modusKetidakpatuhan.modus}
                    onChange={event => handleInputModusKetidakpatuhan(index, event)} />
                  <button
                    style={{ marginLeft: 16 }}
                    className="button is-warning"
                    type="button"
                    onClick={() => handleAddModusKetidakpatuhan()}>Tambah</button>
                  <button
                    className="button is-danger"
                    type="button"
                    style={{ marginLeft: 16 }}
                    onClick={() => handleRemoveModusKetidakpatuhan(index)}>Hapus</button>
                </div>
              </Fragment>
            ))}
          </div>

          <div className="section-form-header">
            <p className="sub-title-form">3. Potensi</p>
            {potensi.map((potensi, index) => (
              <Fragment key={`${potensi}~${index}`}>
                <div className="section-form-body section-form-flex">
                  <div className="form-flex-left">
                    <div className="input-form-standar">
                      <label className="label-normal">Tahun Pajak</label>
                      <input
                        id="tahunPajak"
                        name="tahunPajak"
                        className="input is-dark input-standar"
                        type="text"
                        placeholder=""
                        value={potensi.tahunPajak}
                        onChange={event => handleInputPotensi(index, event)} />
                    </div>
                    <div className="input-form-standar">
                      <label className="label-normal">Jenis Pajak</label>
                      <input
                        id="jenisData"
                        name="jenisData"
                        className="input is-dark input-standar"
                        type="text"
                        placeholder=""
                        value={potensi.jenisData}
                        onChange={event => handleInputPotensi(index, event)} />
                    </div>
                  </div>
                  <div className="form-flex-right">
                    <div className="input-form-standar">
                      <label className="label-normal">Nilai Potensi</label>
                      <input
                        id="nilaiPotensi"
                        name="nilaiPotensi"
                        className="input is-dark input-standar"
                        type="text"
                        placeholder=""
                        value={currencyFormatter(potensi.nilaiPotensi)}
                        onChange={event => handleInputPotensi(index, event)} />
                    </div>
                  </div>
                </div>
                <div className="btn-wrapper">
                  <button
                    className="button is-warning"
                    type="button"
                    onClick={() => handleAddPotensi()}>Tambah</button>
                  <button
                    className="button is-danger"
                    type="button"
                    style={{ marginLeft: 16 }}
                    onClick={() => handleRemovePotensi(index)}>Hapus</button>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </div>


      {/* LAMPIRAN */}

      <div className="section-form margin-section">
        <p className="title-form">IV. LAMPIRAN</p>
        <div className="section-form-body section-form-flex">
          {dataLampiran.map((dataLampiran, index) => (
              <Fragment key={`${dataLampiran}~${index}`}>
                <div className="section-form-body section-form-flex">
                  <textarea
                    id="lampiran"
                    name="lampiran"
                    className="textarea is-black has-fixed-size"
                    placeholder=""
                    value={dataLampiran.lampiran}
                    onChange={event => handleInputLampiran(0, event)}></textarea>
                </div>
                <div className="btn-wrapper" style={{ marginTop: 20 }}>
                 <button
                    style={{ marginLeft: 16 }}
                    className="button is-warning"
                    type="button"
                    onClick={() => handleAddLampiran()}>Tambah</button>
                  <button
                    className="button is-danger"
                    type="button"
                    style={{ marginLeft: 16 }}
                    onClick={() => handleRemoveLampiran(index)}>Hapus</button>
                </div>
              </Fragment>
            ))}
          
        </div>
      </div>

      <div className="section-form margin-section">
        <p className="title-form">V. PENANDANTANGAN LHPt</p>
        <div className="section-form-body section-form-flex input-form-standar">
          <label className="label-normal label-wide">Penempatan posisi 1</label>
          <div class="select select-width margin-right-20">
            <select
              id="unit1"
              name="unit1"
              value={dataUmum.unit1}
              onChange={event => handleInputDataUmum(0, event)}>
              <option value="">-Pilih Unit Organisasi-</option>
              <option value="KPP Pratama">KPP Pratama</option>
              <option value="Pengawasan dan Konsultasi II">Pengawasan dan Konsultasi II</option>
              <option value="Pengawasan dan Konsultasi III">Pengawasan dan Konsultasi III</option>
              <option value="Pengawasan dan Konsultasi IV">Pengawasan dan Konsultasi IV</option>
              <option value="Ekstensifikasi dan Penyuluhan">Ekstensifikasi dan Penyuluhan</option>
            </select>
          </div>
          <div class="select select-width margin-right-20">
            <select
              id="jabatan1"
              name="jabatan1"
              value={dataUmum.jabatan1}
              onChange={event => handleInputDataUmum(0, event)}>
              <option value="">-Pilih Jabatan-</option>
              <option value="Kepala Kantor">Kepala Kantor</option>
              <option value="Kepala Seksi">Kepala Seksi</option>
              <option value="Account Representative">Account Representative</option>
              <option value="Supervisor Fungsional Pemeriksa ">Supervisor Fungsional Pemeriksa </option>
            </select>
          </div>
          <div class="select select-width margin-right-20">
            <select
              id="nama1"
              name="nama1"
              value={dataUmum.nama1}
              onChange={event => handleInputDataUmum(0, event)}>
              <option value="">-Pilih Nama-</option>
              <option value="FAISAL FATAHILLAH">FAISAL FATAHILLAH</option>
              <option value="RICKY WELLYANDO">RICKY WELLYANDO</option>
              <option value="TUNGGUL HAMONANGAN MANURUNG">TUNGGUL HAMONANGAN MANURUNG</option>
              <option value="SUBECHAN">SUBECHAN</option>
              <option value="BENY SANTOSO">BENY SANTOSO</option>
              <option value="AIDA HELMY FITRIANA">AIDA HELMY FITRIANA</option>
              <option value="NDRA SANTOSO">INDRA SANTOSO</option>
              <option value="HASNIATI">HASNIATI</option>
              <option value="DANIA SWANDITA">DANIA SWANDITA</option>
              <option value="NORMA GITA LIANI">NORMA GITA LIANI</option>
              <option value="WIDYA CIPTA RANY">WIDYA CIPTA RANY</option>
              <option value="MUHAMMAD IQBAL RIZQILLAH">MUHAMMAD IQBAL RIZQILLAH</option>
              <option value="EVY RIANA">EVY RIANA</option>
              <option value="DIAN MOHAMAD YAKOP">DIAN MOHAMAD YAKOP</option>
              <option value="KURNIA WAHDI">KURNIA WAHDI</option>
              <option value="ERNIE ARTHA">ERNIE ARTHA</option>
              <option value="RIAN YULI HARTANTO">RIAN YULI HARTANTO</option>
              <option value="SOPHIAN HADI PRANOTO">SOPHIAN HADI PRANOTO</option>
              <option value="REMON">REMON</option>
              <option value="SULAEMAN">SULAEMAN</option>
              <option value="FAHMI SYAMSIDI">FAHMI SYAMSIDI</option>
              <option value="EKO PRASETYO WAHYU DEWANTO">EKO PRASETYO WAHYU DEWANTO</option>
              <option value="MARIA ARZALIA">MARIA ARZALIA</option>
              <option value="IKA KUSUMAWATI">IKA KUSUMAWATI</option>
              <option value="MARIANA NOVIANTI">MARIANA NOVIANTI</option>
              <option value="YUDHA PRATAMA SUMADI">YUDHA PRATAMA SUMADI</option>
              <option value="VINI ASTRIANI">VINI ASTRIANI</option>
              <option value="EKA MUSIKAWATI">EKA MUSIKAWATI</option>
              <option value="RIZKY KURNIANI">RIZKY KURNIANI</option>
              <option value="EYO SURYADI">EYO SURYADI</option>
              <option value="CHEVI NOVIZAYANTI">CHEVI NOVIZAYANTI</option>
              <option value="KADEK BUDAYA">KADEK BUDAYA</option>
              <option value="SAGITA AYU DIWANTI">SAGITA AYU DIWANTI</option>
              <option value="GETA THERESIA PANGGABEAN">GETA THERESIA PANGGABEAN</option>
              <option value="ACEP KUSNADI NURKAMIL">ACEP KUSNADI NURKAMIL</option>
              <option value="ROY JOHANNES BUDIMAN MARBUN">ROY JOHANNES BUDIMAN MARBUN</option>
              <option value="ACH. MURTAKI">ACH. MURTAKI</option>
              <option value="ADHARIANI SARAH">ADHARIANI SARAH</option>
              <option value="SANDY PURBANDARU">SANDY PURBANDARU</option>
              <option value="MERY NATALIA">MERY NATALIA</option>
              <option value="ENDRO HERMAWAN">ENDRO HERMAWAN</option>
              <option value="INTEN RATNA SARI">INTEN RATNA SARI</option>
              <option value="RENE SARI UTAMI">RENE SARI UTAMI</option>
              <option value="PEBRIZAL">PEBRIZAL</option>
              <option value="ILHAM WAHYUDIN">ILHAM WAHYUDIN</option>
            </select>
          </div>
        </div>

        {/* posisi 2 */}
        <div className="section-form-body section-form-flex input-form-standar">
          <label className="label-normal label-wide">Penempatan posisi 2</label>
          <div class="select select-width margin-right-20">
            <select
              id="unit2"
              name="unit2"
              value={dataUmum.unit2}
              onChange={event => handleInputDataUmum(0, event)}>
              <option value="">-Pilih Unit Organisasi-</option>
              <option value="KPP Pratama">KPP Pratama</option>
              <option value="Pengawasan dan Konsultasi II">Pengawasan dan Konsultasi II</option>
              <option value="Pengawasan dan Konsultasi III">Pengawasan dan Konsultasi III</option>
              <option value="Pengawasan dan Konsultasi IV">Pengawasan dan Konsultasi IV</option>
              <option value="Ekstensifikasi dan Penyuluhan">Ekstensifikasi dan Penyuluhan</option>
            </select>
          </div>
          <div class="select select-width margin-right-20">
            <select
              id="jabatan2"
              name="jabatan2"
              value={dataUmum.jabatan2}
              onChange={event => handleInputDataUmum(0, event)}>
              <option value="">-Pilih Jabatan-</option>
              <option value="Kepala Kantor">Kepala Kantor</option>
              <option value="Kepala Seksi">Kepala Seksi</option>
              <option value="Account Representative">Account Representative</option>
              <option value="Supervisor Fungsional Pemeriksa ">Supervisor Fungsional Pemeriksa </option>
            </select>
          </div>
          <div class="select select-width margin-right-20">
            <select
              id="nama2"
              name="nama2"
              value={dataUmum.nama2}
              onChange={event => handleInputDataUmum(0, event)}>
              <option value="">-Pilih Nama-</option>
              <option value="FAISAL FATAHILLAH">FAISAL FATAHILLAH</option>
              <option value="RICKY WELLYANDO">RICKY WELLYANDO</option>
              <option value="TUNGGUL HAMONANGAN MANURUNG">TUNGGUL HAMONANGAN MANURUNG</option>
              <option value="SUBECHAN">SUBECHAN</option>
              <option value="BENY SANTOSO">BENY SANTOSO</option>
              <option value="AIDA HELMY FITRIANA">AIDA HELMY FITRIANA</option>
              <option value="NDRA SANTOSO">INDRA SANTOSO</option>
              <option value="HASNIATI">HASNIATI</option>
              <option value="DANIA SWANDITA">DANIA SWANDITA</option>
              <option value="NORMA GITA LIANI">NORMA GITA LIANI</option>
              <option value="WIDYA CIPTA RANY">WIDYA CIPTA RANY</option>
              <option value="MUHAMMAD IQBAL RIZQILLAH">MUHAMMAD IQBAL RIZQILLAH</option>
              <option value="EVY RIANA">EVY RIANA</option>
              <option value="DIAN MOHAMAD YAKOP">DIAN MOHAMAD YAKOP</option>
              <option value="KURNIA WAHDI">KURNIA WAHDI</option>
              <option value="ERNIE ARTHA">ERNIE ARTHA</option>
              <option value="RIAN YULI HARTANTO">RIAN YULI HARTANTO</option>
              <option value="SOPHIAN HADI PRANOTO">SOPHIAN HADI PRANOTO</option>
              <option value="REMON">REMON</option>
              <option value="SULAEMAN">SULAEMAN</option>
              <option value="FAHMI SYAMSIDI">FAHMI SYAMSIDI</option>
              <option value="EKO PRASETYO WAHYU DEWANTO">EKO PRASETYO WAHYU DEWANTO</option>
              <option value="MARIA ARZALIA">MARIA ARZALIA</option>
              <option value="IKA KUSUMAWATI">IKA KUSUMAWATI</option>
              <option value="MARIANA NOVIANTI">MARIANA NOVIANTI</option>
              <option value="YUDHA PRATAMA SUMADI">YUDHA PRATAMA SUMADI</option>
              <option value="VINI ASTRIANI">VINI ASTRIANI</option>
              <option value="EKA MUSIKAWATI">EKA MUSIKAWATI</option>
              <option value="RIZKY KURNIANI">RIZKY KURNIANI</option>
              <option value="EYO SURYADI">EYO SURYADI</option>
              <option value="CHEVI NOVIZAYANTI">CHEVI NOVIZAYANTI</option>
              <option value="KADEK BUDAYA">KADEK BUDAYA</option>
              <option value="SAGITA AYU DIWANTI">SAGITA AYU DIWANTI</option>
              <option value="GETA THERESIA PANGGABEAN">GETA THERESIA PANGGABEAN</option>
              <option value="ACEP KUSNADI NURKAMIL">ACEP KUSNADI NURKAMIL</option>
              <option value="ROY JOHANNES BUDIMAN MARBUN">ROY JOHANNES BUDIMAN MARBUN</option>
              <option value="ACH. MURTAKI">ACH. MURTAKI</option>
              <option value="ADHARIANI SARAH">ADHARIANI SARAH</option>
              <option value="SANDY PURBANDARU">SANDY PURBANDARU</option>
              <option value="MERY NATALIA">MERY NATALIA</option>
              <option value="ENDRO HERMAWAN">ENDRO HERMAWAN</option>
              <option value="INTEN RATNA SARI">INTEN RATNA SARI</option>
              <option value="RENE SARI UTAMI">RENE SARI UTAMI</option>
              <option value="PEBRIZAL">PEBRIZAL</option>
              <option value="ILHAM WAHYUDIN">ILHAM WAHYUDIN</option>
            </select>
          </div>
        </div>

        {/* posisi 3 */}
        <div className="section-form-body section-form-flex input-form-standar">
          <label className="label-normal label-wide">Penempatan posisi 3</label>
          <div class="select select-width margin-right-20">
            <select
              id="unit3"
              name="unit3"
              value={dataUmum.unit3}
              onChange={event => handleInputDataUmum(0, event)}>
              <option value="">-Pilih Unit Organisasi-</option>
              <option value="KPP Pratama">KPP Pratama</option>
              <option value="Pengawasan dan Konsultasi II">Pengawasan dan Konsultasi II</option>
              <option value="Pengawasan dan Konsultasi III">Pengawasan dan Konsultasi III</option>
              <option value="Pengawasan dan Konsultasi IV">Pengawasan dan Konsultasi IV</option>
              <option value="Ekstensifikasi dan Penyuluhan">Ekstensifikasi dan Penyuluhan</option>
            </select>
          </div>
          <div class="select select-width margin-right-20">
            <select
              id="jabatan3"
              name="jabatan3"
              value={dataUmum.jabatan3}
              onChange={event => handleInputDataUmum(0, event)}>
              <option value="">-Pilih Jabatan-</option>
              <option value="Kepala Kantor">Kepala Kantor</option>
              <option value="Kepala Seksi">Kepala Seksi</option>
              <option value="Account Representative">Account Representative</option>
              <option value="Supervisor Fungsional Pemeriksa ">Supervisor Fungsional Pemeriksa </option>
            </select>
          </div>
          <div class="select select-width margin-right-20">
            <select
              id="nama3"
              name="nama3"
              value={dataUmum.nama3}
              onChange={event => handleInputDataUmum(0, event)}>
              <option value="">-Pilih Nama-</option>
              <option value="FAISAL FATAHILLAH">FAISAL FATAHILLAH</option>
              <option value="RICKY WELLYANDO">RICKY WELLYANDO</option>
              <option value="TUNGGUL HAMONANGAN MANURUNG">TUNGGUL HAMONANGAN MANURUNG</option>
              <option value="SUBECHAN">SUBECHAN</option>
              <option value="BENY SANTOSO">BENY SANTOSO</option>
              <option value="AIDA HELMY FITRIANA">AIDA HELMY FITRIANA</option>
              <option value="NDRA SANTOSO">INDRA SANTOSO</option>
              <option value="HASNIATI">HASNIATI</option>
              <option value="DANIA SWANDITA">DANIA SWANDITA</option>
              <option value="NORMA GITA LIANI">NORMA GITA LIANI</option>
              <option value="WIDYA CIPTA RANY">WIDYA CIPTA RANY</option>
              <option value="MUHAMMAD IQBAL RIZQILLAH">MUHAMMAD IQBAL RIZQILLAH</option>
              <option value="EVY RIANA">EVY RIANA</option>
              <option value="DIAN MOHAMAD YAKOP">DIAN MOHAMAD YAKOP</option>
              <option value="KURNIA WAHDI">KURNIA WAHDI</option>
              <option value="ERNIE ARTHA">ERNIE ARTHA</option>
              <option value="RIAN YULI HARTANTO">RIAN YULI HARTANTO</option>
              <option value="SOPHIAN HADI PRANOTO">SOPHIAN HADI PRANOTO</option>
              <option value="REMON">REMON</option>
              <option value="SULAEMAN">SULAEMAN</option>
              <option value="FAHMI SYAMSIDI">FAHMI SYAMSIDI</option>
              <option value="EKO PRASETYO WAHYU DEWANTO">EKO PRASETYO WAHYU DEWANTO</option>
              <option value="MARIA ARZALIA">MARIA ARZALIA</option>
              <option value="IKA KUSUMAWATI">IKA KUSUMAWATI</option>
              <option value="MARIANA NOVIANTI">MARIANA NOVIANTI</option>
              <option value="YUDHA PRATAMA SUMADI">YUDHA PRATAMA SUMADI</option>
              <option value="VINI ASTRIANI">VINI ASTRIANI</option>
              <option value="EKA MUSIKAWATI">EKA MUSIKAWATI</option>
              <option value="RIZKY KURNIANI">RIZKY KURNIANI</option>
              <option value="EYO SURYADI">EYO SURYADI</option>
              <option value="CHEVI NOVIZAYANTI">CHEVI NOVIZAYANTI</option>
              <option value="KADEK BUDAYA">KADEK BUDAYA</option>
              <option value="SAGITA AYU DIWANTI">SAGITA AYU DIWANTI</option>
              <option value="GETA THERESIA PANGGABEAN">GETA THERESIA PANGGABEAN</option>
              <option value="ACEP KUSNADI NURKAMIL">ACEP KUSNADI NURKAMIL</option>
              <option value="ROY JOHANNES BUDIMAN MARBUN">ROY JOHANNES BUDIMAN MARBUN</option>
              <option value="ACH. MURTAKI">ACH. MURTAKI</option>
              <option value="ADHARIANI SARAH">ADHARIANI SARAH</option>
              <option value="SANDY PURBANDARU">SANDY PURBANDARU</option>
              <option value="MERY NATALIA">MERY NATALIA</option>
              <option value="ENDRO HERMAWAN">ENDRO HERMAWAN</option>
              <option value="INTEN RATNA SARI">INTEN RATNA SARI</option>
              <option value="RENE SARI UTAMI">RENE SARI UTAMI</option>
              <option value="PEBRIZAL">PEBRIZAL</option>
              <option value="ILHAM WAHYUDIN">ILHAM WAHYUDIN</option>
            </select>
          </div>
        </div>

        {/* posisi 4 */}
        <div className="section-form-body section-form-flex input-form-standar">
          <label className="label-normal label-wide">Penempatan posisi 4</label>
          <div class="select select-width margin-right-20">
            <select
              id="unit4"
              name="unit4"
              value={dataUmum.unit4}
              onChange={event => handleInputDataUmum(0, event)}>
              <option value="">-Pilih Unit Organisasi-</option>
              <option value="KPP Pratama">KPP Pratama</option>
              <option value="Pengawasan dan Konsultasi II">Pengawasan dan Konsultasi II</option>
              <option value="Pengawasan dan Konsultasi III">Pengawasan dan Konsultasi III</option>
              <option value="Pengawasan dan Konsultasi IV">Pengawasan dan Konsultasi IV</option>
              <option value="Ekstensifikasi dan Penyuluhan">Ekstensifikasi dan Penyuluhan</option>
            </select>
          </div>
          <div class="select select-width margin-right-20">
            <select
              id="jabatan4"
              name="jabatan4"
              value={dataUmum.jabatan4}
              onChange={event => handleInputDataUmum(0, event)}>
              <option value="">-Pilih Jabatan-</option>
              <option value="Kepala Kantor">Kepala Kantor</option>
              <option value="Kepala Seksi">Kepala Seksi</option>
              <option value="Account Representative">Account Representative</option>
              <option value="Supervisor Fungsional Pemeriksa ">Supervisor Fungsional Pemeriksa </option>
            </select>
          </div>
          <div class="select select-width margin-right-20">
            <select
              id="nama4"
              name="nama4"
              value={dataUmum.nama4}
              onChange={event => handleInputDataUmum(0, event)}>
              <option value="">-Pilih Nama-</option>
              <option value="FAISAL FATAHILLAH">FAISAL FATAHILLAH</option>
              <option value="RICKY WELLYANDO">RICKY WELLYANDO</option>
              <option value="TUNGGUL HAMONANGAN MANURUNG">TUNGGUL HAMONANGAN MANURUNG</option>
              <option value="SUBECHAN">SUBECHAN</option>
              <option value="BENY SANTOSO">BENY SANTOSO</option>
              <option value="AIDA HELMY FITRIANA">AIDA HELMY FITRIANA</option>
              <option value="NDRA SANTOSO">INDRA SANTOSO</option>
              <option value="HASNIATI">HASNIATI</option>
              <option value="DANIA SWANDITA">DANIA SWANDITA</option>
              <option value="NORMA GITA LIANI">NORMA GITA LIANI</option>
              <option value="WIDYA CIPTA RANY">WIDYA CIPTA RANY</option>
              <option value="MUHAMMAD IQBAL RIZQILLAH">MUHAMMAD IQBAL RIZQILLAH</option>
              <option value="EVY RIANA">EVY RIANA</option>
              <option value="DIAN MOHAMAD YAKOP">DIAN MOHAMAD YAKOP</option>
              <option value="KURNIA WAHDI">KURNIA WAHDI</option>
              <option value="ERNIE ARTHA">ERNIE ARTHA</option>
              <option value="RIAN YULI HARTANTO">RIAN YULI HARTANTO</option>
              <option value="SOPHIAN HADI PRANOTO">SOPHIAN HADI PRANOTO</option>
              <option value="REMON">REMON</option>
              <option value="SULAEMAN">SULAEMAN</option>
              <option value="FAHMI SYAMSIDI">FAHMI SYAMSIDI</option>
              <option value="EKO PRASETYO WAHYU DEWANTO">EKO PRASETYO WAHYU DEWANTO</option>
              <option value="MARIA ARZALIA">MARIA ARZALIA</option>
              <option value="IKA KUSUMAWATI">IKA KUSUMAWATI</option>
              <option value="MARIANA NOVIANTI">MARIANA NOVIANTI</option>
              <option value="YUDHA PRATAMA SUMADI">YUDHA PRATAMA SUMADI</option>
              <option value="VINI ASTRIANI">VINI ASTRIANI</option>
              <option value="EKA MUSIKAWATI">EKA MUSIKAWATI</option>
              <option value="RIZKY KURNIANI">RIZKY KURNIANI</option>
              <option value="EYO SURYADI">EYO SURYADI</option>
              <option value="CHEVI NOVIZAYANTI">CHEVI NOVIZAYANTI</option>
              <option value="KADEK BUDAYA">KADEK BUDAYA</option>
              <option value="SAGITA AYU DIWANTI">SAGITA AYU DIWANTI</option>
              <option value="GETA THERESIA PANGGABEAN">GETA THERESIA PANGGABEAN</option>
              <option value="ACEP KUSNADI NURKAMIL">ACEP KUSNADI NURKAMIL</option>
              <option value="ROY JOHANNES BUDIMAN MARBUN">ROY JOHANNES BUDIMAN MARBUN</option>
              <option value="ACH. MURTAKI">ACH. MURTAKI</option>
              <option value="ADHARIANI SARAH">ADHARIANI SARAH</option>
              <option value="SANDY PURBANDARU">SANDY PURBANDARU</option>
              <option value="MERY NATALIA">MERY NATALIA</option>
              <option value="ENDRO HERMAWAN">ENDRO HERMAWAN</option>
              <option value="INTEN RATNA SARI">INTEN RATNA SARI</option>
              <option value="RENE SARI UTAMI">RENE SARI UTAMI</option>
              <option value="PEBRIZAL">PEBRIZAL</option>
              <option value="ILHAM WAHYUDIN">ILHAM WAHYUDIN</option>
            </select>
          </div>
        </div>
      </div>

      <div className="btn-wrapper margin-section">
        <Link to={{
          pathname: '/preview',
          pdfProps: {
            dataUmum: dataUmum,
            riwayatLaporan: riwayatLaporan,
            pohonKepemilikan: pohonKepemilikan,
            riwayatPengawasan: riwayatPengawasan,
            hasilPeriksa: hasilPeriksa,
            koreksiHasil: koreksiHasil,
            hasilKeberatan: hasilKeberatan,
            koreksiKeberatan: koreksiKeberatan,
            transferPricing: transferPricing,
            hasilKunjungan: hasilKunjungan,
            faktaLapangan: faktaLapangan,
            pengaduanMasyarakat: pengaduanMasyarakat,
            indikasiKetidakpatuhan: indikasiKetidakpatuhan,
            modusKetidakpatuhan: modusKetidakpatuhan,
            potensi: potensi,
            aktivaLancar: aktivaLancar,
            aktivaTetap: aktivaTetap,
            kewajibanLancar: kewajibanLancar,
            liabilitasPanjang: liabilitasPanjang,
            ekuitas: ekuitas,
            pendapatan: pendapatan,
            hargaPokok: hargaPokok,
            persediaanAkhir: persediaanAkhir,
            biayaLabaPenjualan: biayaLabaPenjualan,
            biayaLabaUmum: biayaLabaUmum,
            pendapatanBeban: pendapatanBeban,
            pajakLain: pajakLain,
            dataLampiran: dataLampiran
          }
        }}>
          <button className="button is-info">SAVE / CETAK</button>
        </Link>
      </div>

      <div className="footer">
        <p className="text">Direktorat Jenderal Pajak</p>
        <p className="text">Kantor Pelayanan Pajak Pratama Tangerang Timur</p>
        <p className="text">2020</p>
      </div>

    </form>
  );
}

export default Form;
