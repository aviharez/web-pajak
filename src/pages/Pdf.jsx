import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image, Font } from '@react-pdf/renderer';


Font.registerHyphenationCallback(word => {
  // Return entire word as unique part
  return [word];
});


// function truncateText(text, length) {
//   let arr = []
//   let i = 0;

//   while (i < text.length) {
//     arr.push(text.slice(i, i + length))
//     i += length
//   }

//   return arr.join(" ")
// }

function slashEnter(text) {
  return text.replace(/\//g, " / ");
}

function currencyFormatter(price) {
  const priceValue = price.toString().replace(/\./g, "");
  return priceValue.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
};

function formatNpwp(value) {
  if (typeof value === 'string') {
    return value.replace(/(\d{2})(\d{3})(\d{3})(\d{1})(\d{3})(\d{3})/, '$1.$2.$3.$4-$5.$6');
  }
}

function convertDate(dateString){
  return dateString.split("-").reverse().join("-");  
}

const Pdf = (props) => {

  var today = new Date();
  var i;

  // 12/02/2020 | 08:00:00 WIB
  const tgl = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear() + ' | ' + today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();

  
  let totTahun1AL = 0, totTahun2AL = 0, totTahun3AL = 0, totSel1AL = 0, totSel2AL = 0;
  let totTahun1AT = 0, totTahun2AT = 0, totTahun3AT = 0, totSel1AT = 0, totSel2AT = 0;
  let totTahun1KL = 0, totTahun2KL = 0, totTahun3KL = 0, totSel1KL = 0, totSel2KL = 0;
  let totTahun1LP = 0, totTahun2LP = 0, totTahun3LP = 0, totSel1LP = 0, totSel2LP = 0;
  let totTahun1E = 0, totTahun2E = 0, totTahun3E = 0, totSel1E = 0, totSel2E = 0;

  let totTahun1P = 0, totTahun2P = 0, totTahun3P = 0, totSel1P = 0, totSel2P = 0;
  let totTahun1HP = 0, totTahun2HP = 0, totTahun3HP = 0, totSel1HP = 0, totSel2HP = 0;
  let totTahun1PA = 0, totTahun2PA = 0, totTahun3PA = 0, totSel1PA = 0, totSel2PA = 0;

  let totTahun1B = 0, totTahun2B = 0, totTahun3B = 0, totSel1B = 0, totSel2B = 0;
  let totTahun1BU = 0, totTahun2BU = 0, totTahun3BU = 0, totSel1BU = 0, totSel2BU = 0;
  let totTahun1PB = 0, totTahun2PB = 0, totTahun3PB = 0, totSel1PB = 0, totSel2PB = 0;

  for (i = 0; i < props.data.aktivaLancar.length; i++) {
    totTahun1AL += Number(props.data.aktivaLancar[i].nilaiTahun1);
    totTahun2AL += Number(props.data.aktivaLancar[i].nilaiTahun2);
    totTahun3AL += Number(props.data.aktivaLancar[i].nilaiTahun3);
    totSel1AL += (Number(props.data.aktivaLancar[i].nilaiTahun2) - Number(props.data.aktivaLancar[i].nilaiTahun1));
    totSel2AL += (Number(props.data.aktivaLancar[i].nilaiTahun3) - Number(props.data.aktivaLancar[i].nilaiTahun2));
  }

  for (i = 0; i < props.data.aktivaTetap.length; i++) {
    totTahun1AT += Number(props.data.aktivaTetap[i].nilaiTahun1);
    totTahun2AT += Number(props.data.aktivaTetap[i].nilaiTahun2);
    totTahun3AT += Number(props.data.aktivaTetap[i].nilaiTahun3);
    totSel1AT += (Number(props.data.aktivaTetap[i].nilaiTahun2) - Number(props.data.aktivaTetap[i].nilaiTahun1));
    totSel2AT += (Number(props.data.aktivaTetap[i].nilaiTahun3) - Number(props.data.aktivaTetap[i].nilaiTahun2));
  }

  for (i = 0; i < props.data.kewajibanLancar.length; i++) {
    totTahun1KL += Number(props.data.kewajibanLancar[i].nilaiTahun1);
    totTahun2KL += Number(props.data.kewajibanLancar[i].nilaiTahun2);
    totTahun3KL += Number(props.data.kewajibanLancar[i].nilaiTahun3);
    totSel1KL += (Number(props.data.kewajibanLancar[i].nilaiTahun2) - Number(props.data.kewajibanLancar[i].nilaiTahun1));
    totSel2KL += (Number(props.data.kewajibanLancar[i].nilaiTahun3) - Number(props.data.kewajibanLancar[i].nilaiTahun2));
  }

  for (i = 0; i < props.data.liabilitasPanjang.length; i++) {
    totTahun1LP += Number(props.data.liabilitasPanjang[i].nilaiTahun1);
    totTahun2LP += Number(props.data.liabilitasPanjang[i].nilaiTahun2);
    totTahun3LP += Number(props.data.liabilitasPanjang[i].nilaiTahun3);
    totSel1LP += (Number(props.data.liabilitasPanjang[i].nilaiTahun2) - Number(props.data.liabilitasPanjang[i].nilaiTahun1));
    totSel2LP += (Number(props.data.liabilitasPanjang[i].nilaiTahun3) - Number(props.data.liabilitasPanjang[i].nilaiTahun2));
  }

  for (i = 0; i < props.data.ekuitas.length; i++) {
    totTahun1E += Number(props.data.ekuitas[i].nilaiTahun1);
    totTahun2E += Number(props.data.ekuitas[i].nilaiTahun2);
    totTahun3E += Number(props.data.ekuitas[i].nilaiTahun3);
    totSel1E += (Number(props.data.ekuitas[i].nilaiTahun2) - Number(props.data.ekuitas[i].nilaiTahun1));
    totSel2E += (Number(props.data.ekuitas[i].nilaiTahun3) - Number(props.data.ekuitas[i].nilaiTahun2));
  }

  for (i = 0; i < props.data.pendapatan.length; i++) {
    totTahun1P += Number(props.data.pendapatan[i].nilaiTahun1);
    totTahun2P += Number(props.data.pendapatan[i].nilaiTahun2);
    totTahun3P += Number(props.data.pendapatan[i].nilaiTahun3);
    totSel1P += (Number(props.data.pendapatan[i].nilaiTahun2) - Number(props.data.pendapatan[i].nilaiTahun1));
    totSel2P += (Number(props.data.pendapatan[i].nilaiTahun3) - Number(props.data.pendapatan[i].nilaiTahun2));
  }

  for (i = 0; i < props.data.hargaPokok.length; i++) {
    totTahun1HP += Number(props.data.hargaPokok[i].nilaiTahun1);
    totTahun2HP += Number(props.data.hargaPokok[i].nilaiTahun2);
    totTahun3HP += Number(props.data.hargaPokok[i].nilaiTahun3);
    totSel1HP += (Number(props.data.hargaPokok[i].nilaiTahun2) - Number(props.data.hargaPokok[i].nilaiTahun1));
    totSel2HP += (Number(props.data.hargaPokok[i].nilaiTahun3) - Number(props.data.hargaPokok[i].nilaiTahun2));
  }

  for (i = 0; i < props.data.persediaanAkhir.length; i++) {
    totTahun1PA += Number(props.data.persediaanAkhir[i].nilaiTahun1);
    totTahun2PA += Number(props.data.persediaanAkhir[i].nilaiTahun2);
    totTahun3PA += Number(props.data.persediaanAkhir[i].nilaiTahun3);
    totSel1PA += (Number(props.data.persediaanAkhir[i].nilaiTahun2) - Number(props.data.persediaanAkhir[i].nilaiTahun1));
    totSel2PA += (Number(props.data.persediaanAkhir[i].nilaiTahun3) - Number(props.data.persediaanAkhir[i].nilaiTahun2));
  }

  for (i = 0; i < props.data.biayaLabaPenjualan.length; i++) {
    totTahun1B += Number(props.data.biayaLabaPenjualan[i].nilaiTahun1);
    totTahun2B += Number(props.data.biayaLabaPenjualan[i].nilaiTahun2);
    totTahun3B += Number(props.data.biayaLabaPenjualan[i].nilaiTahun3);
    totSel1B += (Number(props.data.biayaLabaPenjualan[i].nilaiTahun2) - Number(props.data.biayaLabaPenjualan[i].nilaiTahun1));
    totSel2B += (Number(props.data.biayaLabaPenjualan[i].nilaiTahun3) - Number(props.data.biayaLabaPenjualan[i].nilaiTahun2));
  }

  for (i = 0; i < props.data.biayaLabaUmum.length; i++) {
    totTahun1BU += Number(props.data.biayaLabaUmum[i].nilaiTahun1);
    totTahun2BU += Number(props.data.biayaLabaUmum[i].nilaiTahun2);
    totTahun3BU += Number(props.data.biayaLabaUmum[i].nilaiTahun3);
    totSel1BU += (Number(props.data.biayaLabaUmum[i].nilaiTahun2) - Number(props.data.biayaLabaUmum[i].nilaiTahun1));
    totSel2BU += (Number(props.data.biayaLabaUmum[i].nilaiTahun3) - Number(props.data.biayaLabaUmum[i].nilaiTahun2));
  }

  for (i = 0; i < props.data.pendapatanBeban.length; i++) {
    totTahun1PB += Number(props.data.pendapatanBeban[i].nilaiTahun1);
    totTahun2PB += Number(props.data.pendapatanBeban[i].nilaiTahun2);
    totTahun3PB += Number(props.data.pendapatanBeban[i].nilaiTahun3);
    totSel1PB += (Number(props.data.pendapatanBeban[i].nilaiTahun2) - Number(props.data.pendapatanBeban[i].nilaiTahun1));
    totSel2PB += (Number(props.data.pendapatanBeban[i].nilaiTahun3) - Number(props.data.pendapatanBeban[i].nilaiTahun2));
  }

  const TabelPohonKepemilikan = () => {
    return (
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <View style={styles.tableCol5}>
            <Text style={styles.tableCell}>No.</Text>
          </View>
          <View style={styles.tableCol15}>
            <Text style={styles.tableCell}>Nama</Text>
          </View>
          <View style={styles.tableCol20}>
            <Text style={styles.tableCell}>Alamat</Text>
          </View>
          <View style={styles.tableCol25}>
            <Text style={styles.tableCell}>NPWP</Text>
          </View>
          <View style={styles.tableCol15}>
            <Text style={styles.tableCell}>Jumlah Modal</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCell}>Persentase</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCell}>Dividen</Text>
          </View>
        </View>
        {props.data.pohonKepemilikan.map((a, index) => {
          return (
            <View style={styles.tableRow}>
              <View style={styles.tableCol5}>
                <Text style={styles.tableCellRight}>{index + 1}</Text>
              </View>
              <View style={styles.tableCol15}>
                <Text style={styles.tableCellLeft}>{a.nama}</Text>
              </View>
              <View style={styles.tableCol20}>
                <Text style={styles.tableCellLeft}>{a.alamat}</Text>
              </View>
              <View style={styles.tableCol25}>
                <Text style={styles.tableCell}>{formatNpwp(a.npwp)}</Text>
              </View>
              <View style={styles.tableCol15}>
                <Text style={styles.tableCellRight}>{currencyFormatter(a.jmlModal)}</Text>
              </View>
              <View style={styles.tableCol10}>
                <Text style={styles.tableCell}>{a.persentase}%</Text>
              </View>
              <View style={styles.tableCol10}>
                <Text style={styles.tableCellRight}>{currencyFormatter(a.dividen)}</Text>
              </View>
            </View>
          );
        })}
      </View>
    );
  }

  const TabelRiwayatLaporan = () => {
    return (
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <View style={styles.tableCol5}>
            <Text style={styles.tableCell}>No.</Text>
          </View>
          <View style={styles.tableCol30}>
            <Text style={styles.tableCell}>Nomor LHA</Text>
          </View>
          <View style={styles.tableCol30}>
            <Text style={styles.tableCell}>Nilai LHA</Text>
          </View>
          <View style={styles.tableCol35}>
            <Text style={styles.tableCell}>Sumber LHA</Text>
          </View>
        </View>
        {props.data.riwayatLaporan.map((a, index) => {
          return (
            <View style={styles.tableRow}>
              <View style={styles.tableCol5}>
                <Text style={styles.tableCellRight}>{index + 1}</Text>
              </View>
              <View style={styles.tableCol30}>
                <Text style={styles.tableCellLeft}>{a.nomorLHA}</Text>
              </View>
              <View style={styles.tableCol30}>
                <Text style={styles.tableCellRight}>{a.nilaiLHA}</Text>
              </View>
              <View style={styles.tableCol35}>
                <Text style={styles.tableCellLeft}>{a.sumberLHA}</Text>
              </View>
            </View>
          );
        })}
      </View>
    );
  }

  const TabelRiwayatPengawasan = () => {
    return (
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <View style={styles.tableCol5}>
            <Text style={styles.tableCell}>No.</Text>
          </View>
          <View style={styles.tableCol30}>
            <Text style={styles.tableCell}>Nomor SP2DK</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCell}>Jenis Pajak</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCell}>Tahun Pajak</Text>
          </View>
          <View style={styles.tableCol15}>
            <Text style={styles.tableCell}>Nilai Potensi Akhir</Text>
          </View>
          <View style={styles.tableCol15}>
            <Text style={styles.tableCell}>Status</Text>
          </View>
          <View style={styles.tableCol15}>
            <Text style={styles.tableCell}>Realisasi</Text>
          </View>
        </View>
        {props.data.riwayatPengawasan.map((a, index) => {
          return (
            <View style={styles.tableRow}>
              <View style={styles.tableCol5}>
                <Text style={styles.tableCellRight}>{index + 1}</Text>
              </View>
              <View style={styles.tableCol30}>
                <Text style={styles.tableCell}>{a.nomorSp}</Text>
              </View>
              <View style={styles.tableCol10}>
                <Text style={styles.tableCellLeft}>{a.jenisPajak}</Text>
              </View>
              <View style={styles.tableCol10}>
                <Text style={styles.tableCell}>{a.tahunPajak}</Text>
              </View>
              <View style={styles.tableCol15}>
                <Text style={styles.tableCellRight}>{currencyFormatter(a.nilaiPotensi)}</Text>
              </View>
              <View style={styles.tableCol15}>
                <Text style={styles.tableCell}>{a.status}</Text>
              </View>
              <View style={styles.tableCol15}>
                <Text style={styles.tableCellRight}>{currencyFormatter(a.realisasi)}</Text>
              </View>
            </View>
          );
        })}
      </View>
    );
  }

  const TabelHasilPeriksa = () => {
    return (
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <View style={styles.tableCol5}>
            <Text style={styles.tableCell}>No.</Text>
          </View>
          <View style={styles.tableCol20}>
            <Text style={styles.tableCell}>Jenis Pajak</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCell}>Tahun</Text>
          </View>
          <View style={styles.tableCol20}>
            <Text style={styles.tableCell}>Cfm SPT</Text>
          </View>
          <View style={styles.tableCol20}>
            <Text style={styles.tableCell}>Cfm Pemeriksaan</Text>
          </View>
          <View style={styles.tableCol25}>
            <Text style={styles.tableCell}>Koreksi (Rp)</Text>
          </View>
        </View>
        {props.data.hasilPeriksa.map((a, index) => {
          return (
            <View style={styles.tableRow}>
              <View style={styles.tableCol5}>
                <Text style={styles.tableCellRight}>{index + 1}</Text>
              </View>
              <View style={styles.tableCol20}>
                <Text style={styles.tableCellLeft}>{a.jenisPajak}</Text>
              </View>
              <View style={styles.tableCol10}>
                <Text style={styles.tableCell}>{a.tahun}</Text>
              </View>
              <View style={styles.tableCol20}>
                <Text style={styles.tableCellRight}>{currencyFormatter(a.cfmSpt)}</Text>
              </View>
              <View style={styles.tableCol20}>
                <Text style={styles.tableCellRight}>{currencyFormatter(a.cfmPeriksa)}</Text>
              </View>
              <View style={styles.tableCol25}>
                <Text style={styles.tableCellRight}>{currencyFormatter(a.koreksi)}</Text>
              </View>
            </View>
          );
        })}
      </View>
    );
  }

  const TabelKoreksiHasil = () => {
    return (
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <View style={styles.tableCol5}>
            <Text style={styles.tableCell}>No.</Text>
          </View>
          <View style={styles.tableCol15}>
            <Text style={styles.tableCell}>Tahun</Text>
          </View>
          <View style={styles.tableCol20}>
            <Text style={styles.tableCell}>Jenis Pajak</Text>
          </View>
          <View style={styles.tableCol25}>
            <Text style={styles.tableCell}>Sumber Koreksi</Text>
          </View>
          <View style={styles.tableCol35}>
            <Text style={styles.tableCell}>Alasan Koreksi</Text>
          </View>
        </View>
        {props.data.koreksiHasil.map((a, index) => {
          return (
            <View style={styles.tableRow}>
              <View style={styles.tableCol5}>
                <Text style={styles.tableCellRight}>{index + 1}</Text>
              </View>
              <View style={styles.tableCol15}>
                <Text style={styles.tableCell}>{a.tahun}</Text>
              </View>
              <View style={styles.tableCol20}>
                <Text style={styles.tableCellLeft}>{a.jenisPajak}</Text>
              </View>
              <View style={styles.tableCol25}>
                <Text style={styles.tableCellLeft}>{a.sumberKoreksi}</Text>
              </View>
              <View style={styles.tableCol35}>
                <Text style={styles.tableCellLeft}>{a.alasanKoreksi}</Text>
              </View>
            </View>
          );
        })}
      </View>
    );
  }

  const TabelHasilBanding = () => {
    return (
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <View style={styles.tableCol5}>
            <Text style={styles.tableCell}>No.</Text>
          </View>
          <View style={styles.tableCol15}>
            <Text style={styles.tableCell}>Masa Pajak / Tahun Pajak</Text>
          </View>
          <View style={styles.tableCol15}>
            <Text style={styles.tableCell}>Jenis Pajak</Text>
          </View>
          <View style={styles.tableCol20}>
            <Text style={styles.tableCell}>Cfm Pemeriksa</Text>
          </View>
          <View style={styles.tableCol20}>
            <Text style={styles.tableCell}>Cfm Keberatan/Banding</Text>
          </View>
          <View style={styles.tableCol25}>
            <Text style={styles.tableCell}>Koreksi (Rp)</Text>
          </View>
        </View>
        {props.data.hasilKeberatan.map((a, index) => {
          return (
            <View style={styles.tableRow}>
              <View style={styles.tableCol5}>
                <Text style={styles.tableCellRight}>{index + 1}</Text>
              </View>
              <View style={styles.tableCol15}>
                <Text style={styles.tableCellLeft}>{a.masaPajak}</Text>
              </View>
              <View style={styles.tableCol15}>
                <Text style={styles.tableCellLeft}>{a.jenisPajak}</Text>
              </View>
              <View style={styles.tableCol20}>
                <Text style={styles.tableCellRight}>{currencyFormatter(a.cfmPemeriksa)}</Text>
              </View>
              <View style={styles.tableCol20}>
                <Text style={styles.tableCellRight}>{currencyFormatter(a.cfmBanding)}</Text>
              </View>
              <View style={styles.tableCol25}>
                <Text style={styles.tableCellRight}>{currencyFormatter(a.koreksi)}</Text>
              </View>
            </View>
          );
        })}
      </View>
    );
  }

  const TabelKoreksiKeberatan = () => {
    return (
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <View style={styles.tableCol5}>
            <Text style={styles.tableCell}>No.</Text>
          </View>
          <View style={styles.tableCol25}>
            <Text style={styles.tableCell}>Masa Pajak</Text>
          </View>
          <View style={styles.tableCol25}>
            <Text style={styles.tableCell}>Jenis Pajak</Text>
          </View>
          <View style={styles.tableCol45}>
            <Text style={styles.tableCell}>Risalah Keputusan Keberatan/Banding</Text>
          </View>
        </View>
        {props.data.koreksiKeberatan.map((a, index) => {
          return (
            <View style={styles.tableRow}>
              <View style={styles.tableCol5}>
                <Text style={styles.tableCellRight}>{index + 1}</Text>
              </View>
              <View style={styles.tableCol25}>
                <Text style={styles.tableCellLeft}>{a.masaPajak}</Text>
              </View>
              <View style={styles.tableCol25}>
                <Text style={styles.tableCellLeft}>{a.jenisPajak}</Text>
              </View>
              <View style={styles.tableCol45}>
                <Text style={styles.tableCellLeft}>{a.risalahKeputusan}</Text>
              </View>
            </View>
          );
        })}
      </View>
    );
  }

  const TabelTransferPricing = () => {
    return (
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <View style={styles.tableCol5}>
            <Text style={styles.tableCell}>No.</Text>
          </View>
          <View style={styles.tableCol95}>
            <Text style={styles.tableCell}>Analisis</Text>
          </View>
        </View>
        {props.data.transferPricing.map((a, index) => {
          return (
            <View style={styles.tableRow}>
              <View style={styles.tableCol5}>
                <Text style={styles.tableCellRight}>{index + 1}</Text>
              </View>
              <View style={styles.tableCol95}>
                <Text style={styles.tableCellLeft}>{a.analisis}</Text>
              </View>
            </View>
          );
        })}
      </View>
    );
  }

  const TabelPajakLainnya = () => {
    return (
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <View style={styles.tableCol5}>
            <Text style={styles.tableCell}>No.</Text>
          </View>
          <View style={styles.tableCol30}>
            <Text style={styles.tableCell}>Uraian</Text>
          </View>
          <View style={styles.tableCol15}>
            <Text style={styles.tableCell}>Cfm SPT</Text>
          </View>
          <View style={styles.tableCol15}>
            <Text style={styles.tableCell}>Cfm Penelitian</Text>
          </View>
          <View style={styles.tableCol35}>
            <Text style={styles.tableCell}>Keterangan</Text>
          </View>
        </View>
        {props.data.pajakLain.map((a, index) => {
          return (
            <View style={styles.tableRow}>
              <View style={styles.tableCol5}>
                <Text style={styles.tableCellRight}>{index + 1}</Text>
              </View>
              <View style={styles.tableCol30}>
                <Text style={styles.tableCellLeft}>{a.uraian}</Text>
              </View>
              <View style={styles.tableCol15}>
                <Text style={styles.tableCellRight}>{currencyFormatter(a.cfmSpt)}</Text>
              </View>
              <View style={styles.tableCol15}>
                <Text style={styles.tableCellRight}>{currencyFormatter(a.cfmPenelitian)}</Text>
              </View>
              <View style={styles.tableCol35}>
                <Text style={styles.tableCellLeft}>{a.keterangan}</Text>
              </View>
            </View>
          );
        })}
      </View>
    );
  }

  const TabelHasilKunjungan = () => {
    return (
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <View style={styles.tableCol5}>
            <Text style={styles.tableCell}>No.</Text>
          </View>
          <View style={styles.tableCol25}>
            <Text style={styles.tableCell}>Nomor</Text>
          </View>
          <View style={styles.tableCol25}>
            <Text style={styles.tableCell}>Tanggal</Text>
          </View>
          <View style={styles.tableCol45}>
            <Text style={styles.tableCell}>Hasil Kunjungan</Text>
          </View>
        </View>
        {props.data.hasilKunjungan.map((a, index) => {
          return (
            <View style={styles.tableRow}>
              <View style={styles.tableCol5}>
                <Text style={styles.tableCellRight}>{index + 1}</Text>
              </View>
              <View style={styles.tableCol25}>
                <Text style={styles.tableCellLeft}>{a.nomor}</Text>
              </View>
              <View style={styles.tableCol25}>
                <Text style={styles.tableCell}>{convertDate(a.tanggal)}</Text>
              </View>
              <View style={styles.tableCol45}>
                <Text style={styles.tableCellLeft}>{a.hasil}</Text>
              </View>
            </View>
          );
        })}
      </View>
    );
  }

  const TabelFaktaLapangan = () => {
    return (
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <View style={styles.tableCol5}>
            <Text style={styles.tableCell}>No.</Text>
          </View>
          <View style={styles.tableCol95}>
            <Text style={styles.tableCell}>Fakta Lapangan</Text>
          </View>
        </View>
        {props.data.faktaLapangan.map((a, index) => {
          return (
            <View style={styles.tableRow}>
              <View style={styles.tableCol5}>
                <Text style={styles.tableCellRight}>{index + 1}</Text>
              </View>
              <View style={styles.tableCol95}>
                <Text style={styles.tableCellLeft}>{a.fakta}</Text>
              </View>
            </View>
          );
        })}
      </View>
    );
  }

  const TabelPengaduan = () => {
    return (
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <View style={styles.tableCol5}>
            <Text style={styles.tableCell}>No.</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCell}>Tahun Pajak</Text>
          </View>
          <View style={styles.tableCol20}>
            <Text style={styles.tableCell}>Jenis Pajak</Text>
          </View>
          <View style={styles.tableCol15}>
            <Text style={styles.tableCell}>Nilai Data</Text>
          </View>
          <View style={styles.tableCol20}>
            <Text style={styles.tableCell}>Modus Operandi</Text>
          </View>
          <View style={styles.tableCol30}>
            <Text style={styles.tableCell}>Tindak Lanjut Surat Pengaduan</Text>
          </View>
        </View>
        {props.data.pengaduanMasyarakat.map((a, index) => {
          return (
            <View style={styles.tableRow}>
              <View style={styles.tableCol5}>
                <Text style={styles.tableCellRight}>{index + 1}</Text>
              </View>
              <View style={styles.tableCol10}>
                <Text style={styles.tableCell}>{a.tahunPajak}</Text>
              </View>
              <View style={styles.tableCol20}>
                <Text style={styles.tableCellLeft}>{a.jenisData}</Text>
              </View>
              <View style={styles.tableCol15}>
                <Text style={styles.tableCellRight}>{a.nilaiData}</Text>
              </View>
              <View style={styles.tableCol20}>
                <Text style={styles.tableCellLeft}>{a.modusOper}</Text>
              </View>
              <View style={styles.tableCol30}>
                <Text style={styles.tableCellLeft}>{a.tindakLanjut}</Text>
              </View>
            </View>
          );
        })}
      </View>
    );
  }

  const TabelIndikasi = () => {
    return (
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <View style={styles.tableCol5}>
            <Text style={styles.tableCell}>No.</Text>
          </View>
          <View style={styles.tableCol95}>
            <Text style={styles.tableCell}>Indikasi</Text>
          </View>
        </View>
        {props.data.indikasiKetidakpatuhan.map((a, index) => {
          return (
            <View style={styles.tableRow}>
              <View style={styles.tableCol5}>
                <Text style={styles.tableCellRight}>{index + 1}</Text>
              </View>
              <View style={styles.tableCol95}>
                <Text style={styles.tableCellLeft}>{a.indikasi}</Text>
              </View>
            </View>
          );
        })}
      </View>
    );
  }

  const TabelModus = () => {
    return (
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <View style={styles.tableCol5}>
            <Text style={styles.tableCell}>No.</Text>
          </View>
          <View style={styles.tableCol95}>
            <Text style={styles.tableCell}>Modus</Text>
          </View>
        </View>
        {props.data.modusKetidakpatuhan.map((a, index) => {
          return (
            <View style={styles.tableRow}>
              <View style={styles.tableCol5}>
                <Text style={styles.tableCellRight}>{index + 1}</Text>
              </View>
              <View style={styles.tableCol95}>
                <Text style={styles.tableCellLeft}>{a.modus}</Text>
              </View>
            </View>
          );
        })}
      </View>
    );
  }

  const TabelPotensi = () => {
    return (
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <View style={styles.tableCol5}>
            <Text style={styles.tableCell}>No.</Text>
          </View>
          <View style={styles.tableCol30}>
            <Text style={styles.tableCell}>Jenis Pajak</Text>
          </View>
          <View style={styles.tableCol30}>
            <Text style={styles.tableCell}>Tahun Pajak</Text>
          </View>
          <View style={styles.tableCol35}>
            <Text style={styles.tableCell}>Nilai Potensi</Text>
          </View>
        </View>
        {props.data.potensi.map((a, index) => {
          return (
            <View style={styles.tableRow}>
              <View style={styles.tableCol5}>
                <Text style={styles.tableCellRight}>{index + 1}</Text>
              </View>
              <View style={styles.tableCol30}>
                <Text style={styles.tableCellLeft}>{a.jenisData}</Text>
              </View>
              <View style={styles.tableCol30}>
                <Text style={styles.tableCell}>{a.tahunPajak}</Text>
              </View>
              <View style={styles.tableCol35}>
                <Text style={styles.tableCellRight}>{currencyFormatter(a.nilaiPotensi)}</Text>
              </View>
            </View>
          );
        })}
      </View>
    );
  }

  const TabelAktivaLancar = () => {
    return (     
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <View style={styles.tableCol5}>
            <Text style={styles.tableCell}>No.</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCell}>Akun</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCell}>{props.data.aktivaLancar[0].tahun1}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCell}>{props.data.aktivaLancar[0].tahun2}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCell}>{props.data.aktivaLancar[0].tahun3}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCell}>Selisih {props.data.aktivaLancar[0].tahun2} - {props.data.aktivaLancar[0].tahun1}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCell}>%horizontal% {props.data.aktivaLancar[0].tahun2}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCell}>Selisih {props.data.aktivaLancar[0].tahun3} - {props.data.aktivaLancar[0].tahun2}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCell}>%horizontal% {props.data.aktivaLancar[0].tahun3}</Text>
          </View>
          <View style={styles.tableCol15}>
            <Text style={styles.tableCell}>Keterangan</Text>
          </View>
        </View>
        {props.data.aktivaLancar.map((a, index) => {
          return (
            <View style={styles.tableRow}>
              <View style={styles.tableCol5}>
                <Text style={styles.tableCellRight}>{index + 1}</Text>
              </View>
              <View style={styles.tableCol10}>
                <Text style={styles.tableCellLeft}>{slashEnter(a.akun)}</Text>
              </View>
              <View style={styles.tableCol10}>
                <Text style={styles.tableCellRight}>{currencyFormatter(a.nilaiTahun1)}</Text>
              </View>
              <View style={styles.tableCol10}>
                <Text style={styles.tableCellRight}>{currencyFormatter(a.nilaiTahun2)}</Text>
              </View>
              <View style={styles.tableCol10}>
                <Text style={styles.tableCellRight}>{currencyFormatter(a.nilaiTahun3)}</Text>
              </View>
              <View style={styles.tableCol10}>
                <Text style={styles.tableCellRight}>{currencyFormatter(a.nilaiTahun2 - a.nilaiTahun1)}</Text>
              </View>
              <View style={styles.tableCol10}>
                <Text style={styles.tableCell}>{Number((a.nilaiTahun2 / a.nilaiTahun1)*100).toFixed(2)}%</Text>
              </View>
              <View style={styles.tableCol10}>
                <Text style={styles.tableCellRight}>{currencyFormatter(a.nilaiTahun3 - a.nilaiTahun2)}</Text>
              </View>
              <View style={styles.tableCol10}>
                <Text style={styles.tableCell}>{Number((a.nilaiTahun3 / a.nilaiTahun2)*100).toFixed(2)}%</Text>
              </View>
              <View style={styles.tableCol15}>
                <Text style={styles.tableCell}>{a.keterangan}</Text>
              </View>
            </View>
          );
        })}
        <View style={styles.tableRow}>
          <View style={styles.tableCol15}>
            <Text style={styles.tableCell}>Total Aset Lancar</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCellRight}>{currencyFormatter(totTahun1AL)}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCellRight}>{currencyFormatter(totTahun2AL)}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCellRight}>{currencyFormatter(totTahun3AL)}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCellRight}>{currencyFormatter(totSel1AL)}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCell}>{Number((totTahun2AL / totTahun1AL)*100).toFixed(2)}%</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCellRight}>{currencyFormatter(totSel2AL)}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCell}>{Number((totTahun3AL / totTahun2AL)*100).toFixed(2)}%</Text>
          </View>
          <View style={styles.tableCol15}>
            <Text style={styles.tableCell}></Text>
          </View>
        </View> 
      </View>
    );
  }

  const TabelAktivaTetap = () => {
    return (
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <View style={styles.tableCol5}>
            <Text style={styles.tableCell}>No.</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCell}>Akun</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCell}>{props.data.aktivaTetap[0].tahun1}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCell}>{props.data.aktivaTetap[0].tahun2}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCell}>{props.data.aktivaTetap[0].tahun3}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCell}>Selisih {props.data.aktivaTetap[0].tahun2} - {props.data.aktivaTetap[0].tahun1}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCell}>%horizontal% {props.data.aktivaTetap[0].tahun2}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCell}>Selisih {props.data.aktivaTetap[0].tahun3} - {props.data.aktivaTetap[0].tahun2}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCell}>%horizontal% {props.data.aktivaTetap[0].tahun3}</Text>
          </View>
          <View style={styles.tableCol15}>
            <Text style={styles.tableCell}>Keterangan</Text>
          </View>
        </View>
        {props.data.aktivaTetap.map((a, index) => {
          return (
            <View style={styles.tableRow}>
              <View style={styles.tableCol5}>
                <Text style={styles.tableCellRight}>{index + 1}</Text>
              </View>
              <View style={styles.tableCol10}>
                <Text style={styles.tableCellLeft}>{slashEnter(a.akun)}</Text>
              </View>
              <View style={styles.tableCol10}>
                <Text style={styles.tableCellRight}>{currencyFormatter(a.nilaiTahun1)}</Text>
              </View>
              <View style={styles.tableCol10}>
                <Text style={styles.tableCellRight}>{currencyFormatter(a.nilaiTahun2)}</Text>
              </View>
              <View style={styles.tableCol10}>
                <Text style={styles.tableCellRight}>{currencyFormatter(a.nilaiTahun3)}</Text>
              </View>
              <View style={styles.tableCol10}>
                <Text style={styles.tableCellRight}>{currencyFormatter(a.nilaiTahun2 - a.nilaiTahun1)}</Text>
              </View>
              <View style={styles.tableCol10}>
                <Text style={styles.tableCell}>{Number((a.nilaiTahun2 / a.nilaiTahun1)*100).toFixed(2)}%</Text>
              </View>
              <View style={styles.tableCol10}>
                <Text style={styles.tableCellRight}>{currencyFormatter(a.nilaiTahun3 - a.nilaiTahun2)}</Text>
              </View>
              <View style={styles.tableCol10}>
                <Text style={styles.tableCell}>{Number((a.nilaiTahun3 / a.nilaiTahun2)*100).toFixed(2)}%</Text>
              </View>
              <View style={styles.tableCol15}>
                <Text style={styles.tableCell}>{a.keterangan}</Text>
              </View>
            </View>
          );
        })}
        <View style={styles.tableRow}>
          <View style={styles.tableCol15}>
            <Text style={styles.tableCell}>Total Aset Tidak Lancar</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCellRight}>{currencyFormatter(totTahun1AT)}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCellRight}>{currencyFormatter(totTahun2AT)}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCellRight}>{currencyFormatter(totTahun3AT)}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCellRight}>{currencyFormatter(totSel1AT)}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCell}>{Number((totTahun2AT / totTahun1AT)*100).toFixed(2)}%</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCellRight}>{currencyFormatter(totSel2AT)}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCell}>{Number((totTahun3AT / totTahun2AT)*100).toFixed(2)}%</Text>
          </View>
          <View style={styles.tableCol15}>
            <Text style={styles.tableCell}></Text>
          </View>
        </View>
      </View>
    );
  }

  const TabelKewajibanLancar = () => {
    return (
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <View style={styles.tableCol5}>
            <Text style={styles.tableCell}>No.</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCell}>Akun</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCell}>{props.data.kewajibanLancar[0].tahun1}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCell}>{props.data.kewajibanLancar[0].tahun2}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCell}>{props.data.kewajibanLancar[0].tahun3}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCell}>Selisih {props.data.kewajibanLancar[0].tahun2} - {props.data.kewajibanLancar[0].tahun1}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCell}>%horizontal% {props.data.kewajibanLancar[0].tahun2}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCell}>Selisih {props.data.kewajibanLancar[0].tahun3} - {props.data.kewajibanLancar[0].tahun2}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCell}>%horizontal% {props.data.kewajibanLancar[0].tahun3}</Text>
          </View>
          <View style={styles.tableCol15}>
            <Text style={styles.tableCell}>Keterangan</Text>
          </View>
        </View>
        {props.data.kewajibanLancar.map((a, index) => {
          return (
            <View style={styles.tableRow}>
              <View style={styles.tableCol5}>
                <Text style={styles.tableCellRight}>{index + 1}</Text>
              </View>
              <View style={styles.tableCol10}>
                <Text style={styles.tableCellLeft}>{slashEnter(a.akun)}</Text>
              </View>
              <View style={styles.tableCol10}>
                <Text style={styles.tableCellRight}>{currencyFormatter(a.nilaiTahun1)}</Text>
              </View>
              <View style={styles.tableCol10}>
                <Text style={styles.tableCellRight}>{currencyFormatter(a.nilaiTahun2)}</Text>
              </View>
              <View style={styles.tableCol10}>
                <Text style={styles.tableCellRight}>{currencyFormatter(a.nilaiTahun3)}</Text>
              </View>
              <View style={styles.tableCol10}>
                <Text style={styles.tableCellRight}>{currencyFormatter(a.nilaiTahun2 - a.nilaiTahun1)}</Text>
              </View>
              <View style={styles.tableCol10}>
                <Text style={styles.tableCell}>{Number((a.nilaiTahun2 / a.nilaiTahun1)*100).toFixed(2)}%</Text>
              </View>
              <View style={styles.tableCol10}>
                <Text style={styles.tableCellRight}>{currencyFormatter(a.nilaiTahun3 - a.nilaiTahun2)}</Text>
              </View>
              <View style={styles.tableCol10}>
                <Text style={styles.tableCell}>{Number((a.nilaiTahun3 / a.nilaiTahun2)*100).toFixed(2)}%</Text>
              </View>
              <View style={styles.tableCol15}>
                <Text style={styles.tableCell}>{a.keterangan}</Text>
              </View>
            </View>
          );
        })}
        <View style={styles.tableRow}>
          <View style={styles.tableCol15}>
            <Text style={styles.tableCell}>Total Liabilitas Jangka Pendek</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCellRight}>{currencyFormatter(totTahun1KL)}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCellRight}>{currencyFormatter(totTahun2KL)}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCellRight}>{currencyFormatter(totTahun3KL)}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCellRight}>{currencyFormatter(totSel1KL)}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCell}>{Number((totTahun2KL / totTahun1KL)*100).toFixed(2)}%</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCellRight}>{currencyFormatter(totSel2KL)}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCell}>{Number((totTahun3KL / totTahun2KL)*100).toFixed(2)}%</Text>
          </View>
          <View style={styles.tableCol15}>
            <Text style={styles.tableCell}></Text>
          </View>
        </View>
      </View>
    );
  }

  const TabelLiabilitasPanjang = () => {
    return (
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <View style={styles.tableCol5}>
            <Text style={styles.tableCell}>No.</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCell}>Akun</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCell}>{props.data.liabilitasPanjang[0].tahun1}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCell}>{props.data.liabilitasPanjang[0].tahun2}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCell}>{props.data.liabilitasPanjang[0].tahun3}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCell}>Selisih {props.data.liabilitasPanjang[0].tahun2} - {props.data.liabilitasPanjang[0].tahun1}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCell}>%horizontal% {props.data.liabilitasPanjang[0].tahun2}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCell}>Selisih {props.data.liabilitasPanjang[0].tahun3} - {props.data.liabilitasPanjang[0].tahun2}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCell}>%horizontal% {props.data.liabilitasPanjang[0].tahun3}</Text>
          </View>
          <View style={styles.tableCol15}>
            <Text style={styles.tableCell}>Keterangan</Text>
          </View>
        </View>
        {props.data.liabilitasPanjang.map((a, index) => {
          return (
            <View style={styles.tableRow}>
              <View style={styles.tableCol5}>
                <Text style={styles.tableCellRight}>{index + 1}</Text>
              </View>
              <View style={styles.tableCol10}>
                <Text style={styles.tableCellLeft}>{slashEnter(a.akun)}</Text>
              </View>
              <View style={styles.tableCol10}>
                <Text style={styles.tableCellRight}>{currencyFormatter(a.nilaiTahun1)}</Text>
              </View>
              <View style={styles.tableCol10}>
                <Text style={styles.tableCellRight}>{currencyFormatter(a.nilaiTahun2)}</Text>
              </View>
              <View style={styles.tableCol10}>
                <Text style={styles.tableCellRight}>{currencyFormatter(a.nilaiTahun3)}</Text>
              </View>
              <View style={styles.tableCol10}>
                <Text style={styles.tableCellRight}>{currencyFormatter(a.nilaiTahun2 - a.nilaiTahun1)}</Text>
              </View>
              <View style={styles.tableCol10}>
                <Text style={styles.tableCell}>{Number((a.nilaiTahun2 / a.nilaiTahun1)*100).toFixed(2)}%</Text>
              </View>
              <View style={styles.tableCol10}>
                <Text style={styles.tableCellRight}>{currencyFormatter(a.nilaiTahun3 - a.nilaiTahun2)}</Text>
              </View>
              <View style={styles.tableCol10}>
                <Text style={styles.tableCell}>{Number((a.nilaiTahun3 / a.nilaiTahun2)*100).toFixed(2)}%</Text>
              </View>
              <View style={styles.tableCol15}>
                <Text style={styles.tableCell}>{a.keterangan}</Text>
              </View>
            </View>
          );
        })}
        <View style={styles.tableRow}>
          <View style={styles.tableCol15}>
            <Text style={styles.tableCell}>Total Liabilitas Jangka Panjang</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCellRight}>{currencyFormatter(totTahun1LP)}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCellRight}>{currencyFormatter(totTahun2LP)}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCellRight}>{currencyFormatter(totTahun3LP)}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCellRight}>{currencyFormatter(totSel1LP)}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCell}>{Number((totTahun2LP / totTahun1LP)*100).toFixed(2)}%</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCellRight}>{currencyFormatter(totSel2LP)}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCell}>{Number((totTahun3LP / totTahun2LP)*100).toFixed(2)}%</Text>
          </View>
          <View style={styles.tableCol15}>
            <Text style={styles.tableCell}></Text>
          </View>
        </View>
      </View>
    );
  }

  const TabelEkuitas = () => {
    return (
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <View style={styles.tableCol5}>
            <Text style={styles.tableCell}>No.</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCell}>Akun</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCell}>{props.data.ekuitas[0].tahun1}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCell}>{props.data.ekuitas[0].tahun2}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCell}>{props.data.ekuitas[0].tahun3}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCell}>Selisih {props.data.ekuitas[0].tahun2} - {props.data.ekuitas[0].tahun1}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCell}>%horizontal% {props.data.ekuitas[0].tahun2}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCell}>Selisih {props.data.ekuitas[0].tahun3} - {props.data.ekuitas[0].tahun2}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCell}>%horizontal% {props.data.ekuitas[0].tahun3}</Text>
          </View>
          <View style={styles.tableCol15}>
            <Text style={styles.tableCell}>Keterangan</Text>
          </View>
        </View>
        {props.data.ekuitas.map((a, index) => {
          return (
            <View style={styles.tableRow}>
              <View style={styles.tableCol5}>
                <Text style={styles.tableCellRight}>{index + 1}</Text>
              </View>
              <View style={styles.tableCol10}>
                <Text style={styles.tableCellLeft}>{slashEnter(a.akun)}</Text>
              </View>
              <View style={styles.tableCol10}>
                <Text style={styles.tableCellRight}>{currencyFormatter(a.nilaiTahun1)}</Text>
              </View>
              <View style={styles.tableCol10}>
                <Text style={styles.tableCellRight}>{currencyFormatter(a.nilaiTahun2)}</Text>
              </View>
              <View style={styles.tableCol10}>
                <Text style={styles.tableCellRight}>{currencyFormatter(a.nilaiTahun3)}</Text>
              </View>
              <View style={styles.tableCol10}>
                <Text style={styles.tableCellRight}>{currencyFormatter(a.nilaiTahun2 - a.nilaiTahun1)}</Text>
              </View>
              <View style={styles.tableCol10}>
                <Text style={styles.tableCell}>{Number((a.nilaiTahun2 / a.nilaiTahun1)*100).toFixed(2)}%</Text>
              </View>
              <View style={styles.tableCol10}>
                <Text style={styles.tableCellRight}>{currencyFormatter(a.nilaiTahun3 - a.nilaiTahun2)}</Text>
              </View>
              <View style={styles.tableCol10}>
                <Text style={styles.tableCell}>{Number((a.nilaiTahun3 / a.nilaiTahun2)*100).toFixed(2)}%</Text>
              </View>
              <View style={styles.tableCol15}>
                <Text style={styles.tableCell}>{a.keterangan}</Text>
              </View>
            </View>
          );
        })}
        <View style={styles.tableRow}>
          <View style={styles.tableCol15}>
            <Text style={styles.tableCell}>Total Ekuitas</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCellRight}>{currencyFormatter(totTahun1E)}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCellRight}>{currencyFormatter(totTahun2E)}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCellRight}>{currencyFormatter(totTahun3E)}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCellRight}>{currencyFormatter(totSel1E)}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCell}>{Number((totTahun2E / totTahun1E)*100).toFixed(2)}%</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCellRight}>{currencyFormatter(totSel2E)}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCell}>{Number((totTahun3E / totTahun2E)*100).toFixed(2)}%</Text>
          </View>
          <View style={styles.tableCol15}>
            <Text style={styles.tableCell}></Text>
          </View>
        </View>
      </View>
    );
  }

  const TabelPendapatan = () => {
    return (
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <View style={styles.tableCol5}>
            <Text style={styles.tableCell}>No.</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCell}>Akun</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCell}>{props.data.pendapatan[0].tahun1}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCell}>{props.data.pendapatan[0].tahun2}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCell}>{props.data.pendapatan[0].tahun3}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCell}>Selisih {props.data.pendapatan[0].tahun2} - {props.data.pendapatan[0].tahun1}</Text>
          </View>
          <View style={styles.tableCol7}>
            <Text style={styles.tableCell}>%horizontal% {props.data.pendapatan[0].tahun2}</Text>
          </View>
          <View style={styles.tableCol7}>
            <Text style={styles.tableCell}>%vertical% {props.data.pendapatan[0].tahun2}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCell}>Selisih {props.data.pendapatan[0].tahun3} - {props.data.pendapatan[0].tahun2}</Text>
          </View>
          <View style={styles.tableCol7}>
            <Text style={styles.tableCell}>%horizontal% {props.data.pendapatan[0].tahun3}</Text>
          </View>
          <View style={styles.tableCol7}>
            <Text style={styles.tableCell}>%vertical% {props.data.pendapatan[0].tahun3}</Text>
          </View>
          <View style={styles.tableCol7}>
            <Text style={styles.tableCell}>Keterangan</Text>
          </View>
        </View>
        {props.data.pendapatan.map((a, index) => {
          return (
            <View style={styles.tableRow}>
              <View style={styles.tableCol5}>
                <Text style={styles.tableCellRight}>{index + 1}</Text>
              </View>
              <View style={styles.tableCol10}>
                <Text style={styles.tableCellLeft}>{slashEnter(a.akun)}</Text>
              </View>
              <View style={styles.tableCol10}>
                <Text style={styles.tableCellRight}>{currencyFormatter(a.nilaiTahun1)}</Text>
              </View>
              <View style={styles.tableCol10}>
                <Text style={styles.tableCellRight}>{currencyFormatter(a.nilaiTahun2)}</Text>
              </View>
              <View style={styles.tableCol10}>
                <Text style={styles.tableCellRight}>{currencyFormatter(a.nilaiTahun3)}</Text>
              </View>
              <View style={styles.tableCol10}>
                <Text style={styles.tableCellRight}>{currencyFormatter(a.nilaiTahun2 - a.nilaiTahun1)}</Text>
              </View>
              <View style={styles.tableCol7}>
                <Text style={styles.tableCell}>{Number((a.nilaiTahun2 / a.nilaiTahun1)*100).toFixed(2)}%</Text>
              </View>
              <View style={styles.tableCol7}>
                <Text style={styles.tableCell}>{Number((a.nilaiTahun2 / a.nilaiTahun2)*100).toFixed(2)}%</Text>
              </View>
              <View style={styles.tableCol10}>
                <Text style={styles.tableCellRight}>{currencyFormatter(a.nilaiTahun3 - a.nilaiTahun2)}</Text>
              </View>
              <View style={styles.tableCol7}>
                <Text style={styles.tableCell}>{Number((a.nilaiTahun3 / a.nilaiTahun2)*100).toFixed(2)}%</Text>
              </View>
              <View style={styles.tableCol7}>
                <Text style={styles.tableCell}>{Number((a.nilaiTahun3 / a.nilaiTahun3)*100).toFixed(2)}%</Text>
              </View>
              <View style={styles.tableCol7}>
                <Text style={styles.tableCell}>{a.keterangan}</Text>
              </View>
            </View>
          );
        })}
        <View style={styles.tableRow}>
          <View style={styles.tableCol15}>
            <Text style={styles.tableCell}>Total Pendapatan</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCellRight}>{currencyFormatter(totTahun1P)}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCellRight}>{currencyFormatter(totTahun2P)}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCellRight}>{currencyFormatter(totTahun3P)}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCellRight}>{currencyFormatter(totSel1P)}</Text>
          </View>
          <View style={styles.tableCol7}>
            <Text style={styles.tableCell}>{Number((totTahun2P / totTahun1P)*100).toFixed(2)}%</Text>
          </View>
          <View style={styles.tableCol7}>
            <Text style={styles.tableCell}>{Number((totTahun2P / totTahun2P)*100).toFixed(2)}%</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCellRight}>{currencyFormatter(totSel2P)}</Text>
          </View>
          <View style={styles.tableCol7}>
            <Text style={styles.tableCell}>{Number((totTahun3P / totTahun2P)*100).toFixed(2)}%</Text>
          </View>
          <View style={styles.tableCol7}>
            <Text style={styles.tableCell}>{Number((totTahun3P / totTahun3P)*100).toFixed(2)}%</Text>
          </View>
          <View style={styles.tableCol7}>
            <Text style={styles.tableCell}></Text>
          </View>
        </View>
      </View>
    );
  }

  const TabelHargaPokok = () => {
    return (
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <View style={styles.tableCol5}>
            <Text style={styles.tableCell}>No.</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCell}>Akun</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCell}>{props.data.hargaPokok[0].tahun1}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCell}>{props.data.hargaPokok[0].tahun2}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCell}>{props.data.hargaPokok[0].tahun3}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCell}>Selisih {props.data.hargaPokok[0].tahun2} - {props.data.hargaPokok[0].tahun1}</Text>
          </View>
          <View style={styles.tableCol7}>
            <Text style={styles.tableCell}>%horizontal% {props.data.hargaPokok[0].tahun2}</Text>
          </View>
          <View style={styles.tableCol7}>
            <Text style={styles.tableCell}>%vertical% {props.data.hargaPokok[0].tahun2}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCell}>Selisih {props.data.hargaPokok[0].tahun3} - {props.data.hargaPokok[0].tahun2}</Text>
          </View>
          <View style={styles.tableCol7}>
            <Text style={styles.tableCell}>%horizontal% {props.data.hargaPokok[0].tahun3}</Text>
          </View>
          <View style={styles.tableCol7}>
            <Text style={styles.tableCell}>%vertical% {props.data.hargaPokok[0].tahun3}</Text>
          </View>
          <View style={styles.tableCol7}>
            <Text style={styles.tableCell}>Keterangan</Text>
          </View>
        </View>
        {props.data.hargaPokok.map((a, index) => {
          return (
            <View style={styles.tableRow}>
              <View style={styles.tableCol5}>
                <Text style={styles.tableCellRight}>{index + 1}</Text>
              </View>
              <View style={styles.tableCol10}>
                <Text style={styles.tableCellLeft}>{slashEnter(a.akun)}</Text>
              </View>
              <View style={styles.tableCol10}>
                <Text style={styles.tableCellRight}>{currencyFormatter(a.nilaiTahun1)}</Text>
              </View>
              <View style={styles.tableCol10}>
                <Text style={styles.tableCellRight}>{currencyFormatter(a.nilaiTahun2)}</Text>
              </View>
              <View style={styles.tableCol10}>
                <Text style={styles.tableCellRight}>{currencyFormatter(a.nilaiTahun3)}</Text>
              </View>
              <View style={styles.tableCol10}>
                <Text style={styles.tableCellRight}>{currencyFormatter(a.nilaiTahun2 - a.nilaiTahun1)}</Text>
              </View>
              <View style={styles.tableCol7}>
                <Text style={styles.tableCell}>{Number((a.nilaiTahun2 / a.nilaiTahun1)*100).toFixed(2)}%</Text>
              </View>
              <View style={styles.tableCol7}>
                <Text style={styles.tableCell}>{Number((a.nilaiTahun2 / totTahun2P)*100).toFixed(2)}%</Text>
              </View>
              <View style={styles.tableCol10}>
                <Text style={styles.tableCellRight}>{currencyFormatter(a.nilaiTahun3 - a.nilaiTahun2)}</Text>
              </View>
              <View style={styles.tableCol7}>
                <Text style={styles.tableCell}>{Number((a.nilaiTahun3 / a.nilaiTahun2)*100).toFixed(2)}%</Text>
              </View>
              <View style={styles.tableCol7}>
                <Text style={styles.tableCell}>{Number((a.nilaiTahun3 / totTahun3P)*100).toFixed(2)}%</Text>
              </View>
              <View style={styles.tableCol7}>
                <Text style={styles.tableCell}>{a.keterangan}</Text>
              </View>
            </View>
          );
        })}
        <View style={styles.tableRow}>
          <View style={styles.tableCol15}>
            <Text style={styles.tableCell}>Persediaan Tersedia Dijual</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCellRight}>{currencyFormatter(totTahun1HP)}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCellRight}>{currencyFormatter(totTahun2HP)}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCellRight}>{currencyFormatter(totTahun3HP)}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCellRight}>{currencyFormatter(totSel1HP)}</Text>
          </View>
          <View style={styles.tableCol7}>
            <Text style={styles.tableCell}>{Number((totTahun2HP / totTahun1HP)*100).toFixed(2)}%</Text>
          </View>
          <View style={styles.tableCol7}>
            <Text style={styles.tableCell}>{Number((totTahun2HP / totTahun2P)*100).toFixed(2)}%</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCellRight}>{currencyFormatter(totSel2HP)}</Text>
          </View>
          <View style={styles.tableCol7}>
            <Text style={styles.tableCell}>{Number((totTahun3HP / totTahun2HP)*100).toFixed(2)}%</Text>
          </View>
          <View style={styles.tableCol7}>
            <Text style={styles.tableCell}>{Number((totTahun3HP / totTahun3P)*100).toFixed(2)}%</Text>
          </View>
          <View style={styles.tableCol7}>
            <Text style={styles.tableCell}></Text>
          </View>
        </View>
      </View>
    );
  }

  const TabelBiayaPenjualan = () => {
    return (
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <View style={styles.tableCol5}>
            <Text style={styles.tableCell}>No.</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCell}>Akun</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCell}>{props.data.biayaLabaPenjualan[0].tahun1}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCell}>{props.data.biayaLabaPenjualan[0].tahun2}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCell}>{props.data.biayaLabaPenjualan[0].tahun3}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCell}>Selisih {props.data.biayaLabaPenjualan[0].tahun2} - {props.data.biayaLabaPenjualan[0].tahun1}</Text>
          </View>
          <View style={styles.tableCol7}>
            <Text style={styles.tableCell}>%horizontal% {props.data.biayaLabaPenjualan[0].tahun2}</Text>
          </View>
          <View style={styles.tableCol7}>
            <Text style={styles.tableCell}>%vertical% {props.data.biayaLabaPenjualan[0].tahun2}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCell}>Selisih {props.data.biayaLabaPenjualan[0].tahun3} - {props.data.biayaLabaPenjualan[0].tahun2}</Text>
          </View>
          <View style={styles.tableCol7}>
            <Text style={styles.tableCell}>%horizontal% {props.data.biayaLabaPenjualan[0].tahun3}</Text>
          </View>
          <View style={styles.tableCol7}>
            <Text style={styles.tableCell}>%vertical% {props.data.biayaLabaPenjualan[0].tahun3}</Text>
          </View>
          <View style={styles.tableCol7}>
            <Text style={styles.tableCell}>Keterangan</Text>
          </View>
        </View>
        {props.data.biayaLabaPenjualan.map((a, index) => {
          return (
            <View style={styles.tableRow}>
              <View style={styles.tableCol5}>
                <Text style={styles.tableCellRight}>{index + 1}</Text>
              </View>
              <View style={styles.tableCol10}>
                <Text style={styles.tableCellLeft}>{slashEnter(a.akun)}</Text>
              </View>
              <View style={styles.tableCol10}>
                <Text style={styles.tableCellRight}>{currencyFormatter(a.nilaiTahun1)}</Text>
              </View>
              <View style={styles.tableCol10}>
                <Text style={styles.tableCellRight}>{currencyFormatter(a.nilaiTahun2)}</Text>
              </View>
              <View style={styles.tableCol10}>
                <Text style={styles.tableCellRight}>{currencyFormatter(a.nilaiTahun3)}</Text>
              </View>
              <View style={styles.tableCol10}>
                <Text style={styles.tableCellRight}>{currencyFormatter(a.nilaiTahun2 - a.nilaiTahun1)}</Text>
              </View>
              <View style={styles.tableCol7}>
                <Text style={styles.tableCell}>{Number((a.nilaiTahun2 / a.nilaiTahun1)*100).toFixed(2)}%</Text>
              </View>
              <View style={styles.tableCol7}>
                <Text style={styles.tableCell}>{Number((a.nilaiTahun2 / totTahun2P)*100).toFixed(2)}%</Text>
              </View>
              <View style={styles.tableCol10}>
                <Text style={styles.tableCellRight}>{currencyFormatter(a.nilaiTahun3 - a.nilaiTahun2)}</Text>
              </View>
              <View style={styles.tableCol7}>
                <Text style={styles.tableCell}>{Number((a.nilaiTahun3 / a.nilaiTahun2)*100).toFixed(2)}%</Text>
              </View>
              <View style={styles.tableCol7}>
                <Text style={styles.tableCell}>{Number((a.nilaiTahun3 / totTahun3P)*100).toFixed(2)}%</Text>
              </View>
              <View style={styles.tableCol7}>
                <Text style={styles.tableCell}>{a.keterangan}</Text>
              </View>
            </View>
          );
        })}
        <View style={styles.tableRow}>
          <View style={styles.tableCol15}>
            <Text style={styles.tableCell}>Total Biaya Operasional</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCellRight}>{currencyFormatter(totTahun1B)}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCellRight}>{currencyFormatter(totTahun2B)}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCellRight}>{currencyFormatter(totTahun3B)}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCellRight}>{currencyFormatter(totSel1B)}</Text>
          </View>
          <View style={styles.tableCol7}>
            <Text style={styles.tableCell}>{Number((totTahun2B / totTahun1B)*100).toFixed(2)}%</Text>
          </View>
          <View style={styles.tableCol7}>
            <Text style={styles.tableCell}>{Number((totTahun2B / totTahun2P)*100).toFixed(2)}%</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCellRight}>{currencyFormatter(totSel2B)}</Text>
          </View>
          <View style={styles.tableCol7}>
            <Text style={styles.tableCell}>{Number((totTahun3B / totTahun2B)*100).toFixed(2)}%</Text>
          </View>
          <View style={styles.tableCol7}>
            <Text style={styles.tableCell}>{Number((totTahun3B / totTahun3P)*100).toFixed(2)}%</Text>
          </View>
          <View style={styles.tableCol7}>
            <Text style={styles.tableCell}></Text>
          </View>
        </View>
      </View>
    );
  }

  const TabelBiayaUmum = () => {
    return (
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <View style={styles.tableCol5}>
            <Text style={styles.tableCell}>No.</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCell}>Akun</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCell}>{props.data.biayaLabaUmum[0].tahun1}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCell}>{props.data.biayaLabaUmum[0].tahun2}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCell}>{props.data.biayaLabaUmum[0].tahun3}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCell}>Selisih {props.data.biayaLabaUmum[0].tahun2} - {props.data.biayaLabaUmum[0].tahun1}</Text>
          </View>
          <View style={styles.tableCol7}>
            <Text style={styles.tableCell}>%horizontal% {props.data.biayaLabaUmum[0].tahun2}</Text>
          </View>
          <View style={styles.tableCol7}>
            <Text style={styles.tableCell}>%vertical% {props.data.biayaLabaUmum[0].tahun2}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCell}>Selisih {props.data.biayaLabaUmum[0].tahun3} - {props.data.biayaLabaUmum[0].tahun2}</Text>
          </View>
          <View style={styles.tableCol7}>
            <Text style={styles.tableCell}>%horizontal% {props.data.biayaLabaUmum[0].tahun3}</Text>
          </View>
          <View style={styles.tableCol7}>
            <Text style={styles.tableCell}>%vertical% {props.data.biayaLabaUmum[0].tahun3}</Text>
          </View>
          <View style={styles.tableCol7}>
            <Text style={styles.tableCell}>Keterangan</Text>
          </View>
        </View>
        {props.data.biayaLabaUmum.map((a, index) => {
          return (
            <View style={styles.tableRow}>
              <View style={styles.tableCol5}>
                <Text style={styles.tableCellRight}>{index + 1}</Text>
              </View>
              <View style={styles.tableCol10}>
                <Text style={styles.tableCellLeft}>{slashEnter(a.akun)}</Text>
              </View>
              <View style={styles.tableCol10}>
                <Text style={styles.tableCellRight}>{currencyFormatter(a.nilaiTahun1)}</Text>
              </View>
              <View style={styles.tableCol10}>
                <Text style={styles.tableCellRight}>{currencyFormatter(a.nilaiTahun2)}</Text>
              </View>
              <View style={styles.tableCol10}>
                <Text style={styles.tableCellRight}>{currencyFormatter(a.nilaiTahun3)}</Text>
              </View>
              <View style={styles.tableCol10}>
                <Text style={styles.tableCellRight}>{currencyFormatter(a.nilaiTahun2 - a.nilaiTahun1)}</Text>
              </View>
              <View style={styles.tableCol7}>
                <Text style={styles.tableCell}>{Number((a.nilaiTahun2 / a.nilaiTahun1)*100).toFixed(2)}%</Text>
              </View>
              <View style={styles.tableCol7}>
                <Text style={styles.tableCell}>{Number((a.nilaiTahun2 / totTahun2P)*100).toFixed(2)}%</Text>
              </View>
              <View style={styles.tableCol10}>
                <Text style={styles.tableCellRight}>{currencyFormatter(a.nilaiTahun3 - a.nilaiTahun2)}</Text>
              </View>
              <View style={styles.tableCol7}>
                <Text style={styles.tableCell}>{Number((a.nilaiTahun3 / a.nilaiTahun2)*100).toFixed(2)}%</Text>
              </View>
              <View style={styles.tableCol7}>
                <Text style={styles.tableCell}>{Number((a.nilaiTahun3 / totTahun3P)*100).toFixed(2)}%</Text>
              </View>
              <View style={styles.tableCol7}>
                <Text style={styles.tableCell}>{a.keterangan}</Text>
              </View>
            </View>
          );
        })}
        <View style={styles.tableRow}>
          <View style={styles.tableCol15}>
            <Text style={styles.tableCell}>Total Biaya Umum</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCellRight}>{currencyFormatter(totTahun1BU)}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCellRight}>{currencyFormatter(totTahun2BU)}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCellRight}>{currencyFormatter(totTahun3BU)}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCellRight}>{currencyFormatter(totSel1BU)}</Text>
          </View>
          <View style={styles.tableCol7}>
            <Text style={styles.tableCell}>{Number((totTahun2BU / totTahun1BU)*100).toFixed(2)}%</Text>
          </View>
          <View style={styles.tableCol7}>
            <Text style={styles.tableCell}>{Number((totTahun2BU / totTahun2P)*100).toFixed(2)}%</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCellRight}>{currencyFormatter(totSel2BU)}</Text>
          </View>
          <View style={styles.tableCol7}>
            <Text style={styles.tableCell}>{Number((totTahun3BU / totTahun2BU)*100).toFixed(2)}%</Text>
          </View>
          <View style={styles.tableCol7}>
            <Text style={styles.tableCell}>{Number((totTahun3BU / totTahun3P)*100).toFixed(2)}%</Text>
          </View>
          <View style={styles.tableCol7}>
            <Text style={styles.tableCell}></Text>
          </View>
        </View>
      </View>
    );
  }

  const TabelBeban = () => {
    return (
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <View style={styles.tableCol5}>
            <Text style={styles.tableCell}>No.</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCell}>Akun</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCell}>{props.data.pendapatanBeban[0].tahun1}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCell}>{props.data.pendapatanBeban[0].tahun2}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCell}>{props.data.pendapatanBeban[0].tahun3}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCell}>Selisih {props.data.pendapatanBeban[0].tahun2} - {props.data.pendapatanBeban[0].tahun1}</Text>
          </View>
          <View style={styles.tableCol7}>
            <Text style={styles.tableCell}>%horizontal% {props.data.pendapatanBeban[0].tahun2}</Text>
          </View>
          <View style={styles.tableCol7}>
            <Text style={styles.tableCell}>%vertical% {props.data.pendapatanBeban[0].tahun2}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCell}>Selisih {props.data.pendapatanBeban[0].tahun3} - {props.data.pendapatanBeban[0].tahun2}</Text>
          </View>
          <View style={styles.tableCol7}>
            <Text style={styles.tableCell}>%horizontal% {props.data.pendapatanBeban[0].tahun3}</Text>
          </View>
          <View style={styles.tableCol7}>
            <Text style={styles.tableCell}>%vertical% {props.data.pendapatanBeban[0].tahun2}</Text>
          </View>
          <View style={styles.tableCol7}>
            <Text style={styles.tableCell}>Keterangan</Text>
          </View>
        </View>
        {props.data.pendapatanBeban.map((a, index) => {
          return (
            <View style={styles.tableRow}>
              <View style={styles.tableCol5}>
                <Text style={styles.tableCellRight}>{index + 1}</Text>
              </View>
              <View style={styles.tableCol10}>
                <Text style={styles.tableCellLeft}>{slashEnter(a.akun)}</Text>
              </View>
              <View style={styles.tableCol10}>
                <Text style={styles.tableCellRight}>{currencyFormatter(a.nilaiTahun1)}</Text>
              </View>
              <View style={styles.tableCol10}>
                <Text style={styles.tableCellRight}>{currencyFormatter(a.nilaiTahun2)}</Text>
              </View>
              <View style={styles.tableCol10}>
                <Text style={styles.tableCellRight}>{currencyFormatter(a.nilaiTahun3)}</Text>
              </View>
              <View style={styles.tableCol10}>
                <Text style={styles.tableCellRight}>{currencyFormatter(a.nilaiTahun2 - a.nilaiTahun1)}</Text>
              </View>
              <View style={styles.tableCol7}>
                <Text style={styles.tableCell}>{Number((a.nilaiTahun2 / a.nilaiTahun1)*100).toFixed(2)}%</Text>
              </View>
              <View style={styles.tableCol7}>
                <Text style={styles.tableCell}>{Number((a.nilaiTahun2 / totTahun2P)*100).toFixed(2)}%</Text>
              </View>
              <View style={styles.tableCol10}>
                <Text style={styles.tableCellRight}>{currencyFormatter(a.nilaiTahun3 - a.nilaiTahun2)}</Text>
              </View>
              <View style={styles.tableCol7}>
                <Text style={styles.tableCell}>{Number((a.nilaiTahun3 / a.nilaiTahun2)*100).toFixed(2)}%</Text>
              </View>
              <View style={styles.tableCol7}>
                <Text style={styles.tableCell}>{Number((a.nilaiTahun3 / totTahun3P)*100).toFixed(2)}%</Text>
              </View>
              <View style={styles.tableCol7}>
                <Text style={styles.tableCell}>{a.keterangan}</Text>
              </View>
            </View>
          );
        })}
        <View style={styles.tableRow}>
          <View style={styles.tableCol15}>
            <Text style={styles.tableCell}>Total Pendapatan dan Beban Lain</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCellRight}>{currencyFormatter(totTahun1PB)}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCellRight}>{currencyFormatter(totTahun2PB)}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCellRight}>{currencyFormatter(totTahun3PB)}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCellRight}>{currencyFormatter(totSel1PB)}</Text>
          </View>
          <View style={styles.tableCol7}>
            <Text style={styles.tableCell}>{Number((totTahun2PB / totTahun1PB)*100).toFixed(2)}%</Text>
          </View>
          <View style={styles.tableCol7}>
            <Text style={styles.tableCell}>{Number((totTahun2PB / totTahun2P)*100).toFixed(2)}%</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCellRight}>{currencyFormatter(totSel2PB)}</Text>
          </View>
          <View style={styles.tableCol7}>
            <Text style={styles.tableCell}>{Number((totTahun3PB / totTahun2PB)*100).toFixed(2)}%</Text>
          </View>
          <View style={styles.tableCol7}>
            <Text style={styles.tableCell}>{Number((totTahun3PB / totTahun3P)*100).toFixed(2)}%</Text>
          </View>
          <View style={styles.tableCol7}>
            <Text style={styles.tableCell}></Text>
          </View>
        </View>
      </View>
    );
  }

  const TabelTotalAset = () => {
    return (
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <View style={styles.tableCol15}>
            <Text style={styles.tableCell}>TOTAL ASET</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCellRight}>{currencyFormatter(totTahun1AL + totTahun1AT)}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCellRight}>{currencyFormatter(totTahun2AL + totTahun2AT)}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCellRight}>{currencyFormatter(totTahun3AL + totTahun3AT)}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCellRight}>{currencyFormatter((totTahun2AL + totTahun2AT) - (totTahun1AL + totTahun1AT))}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCell}>{Number(((totTahun2AL + totTahun2AT) / (totTahun1AL + totTahun1AT))*100).toFixed(2)}%</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCellRight}>{currencyFormatter((totTahun3AL + totTahun3AT) - (totTahun2AL + totTahun2AT))}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCell}>{Number(((totTahun3AL + totTahun3AT) / (totTahun2AL + totTahun2AT))*100).toFixed(2)}%</Text>
          </View>
          <View style={styles.tableCol15}>
            <Text style={styles.tableCell}></Text>
          </View>
        </View>
      </View>
    );
  }

  const TabelTotalLiabilitas = () => {
    return (
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <View style={styles.tableCol15}>
            <Text style={styles.tableCell}>TOTAL LIABILITAS</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCellRight}>{currencyFormatter(totTahun1KL + totTahun1LP)}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCellRight}>{currencyFormatter(totTahun2KL + totTahun2LP)}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCellRight}>{currencyFormatter(totTahun3KL + totTahun3LP)}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCellRight}>{currencyFormatter((totTahun2KL + totTahun2LP) - (totTahun1KL + totTahun1LP))}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCell}>{Number(((totTahun2KL + totTahun2LP) / (totTahun1KL + totTahun1LP))*100).toFixed(2)}%</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCellRight}>{currencyFormatter((totTahun3KL + totTahun3LP) - (totTahun2KL + totTahun2LP))}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCell}>{Number(((totTahun3KL + totTahun3LP) / (totTahun2KL + totTahun2LP))*100).toFixed(2)}%</Text>
          </View>
          <View style={styles.tableCol15}>
            <Text style={styles.tableCell}></Text>
          </View>
        </View>
      </View>
    );
  }

  const TabelTotalEkuitas = () => {
    return (
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <View style={styles.tableCol15}>
            <Text style={styles.tableCell}>TOTAL LIABILITAS & EKUITAS</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCellRight}>{currencyFormatter((totTahun1KL + totTahun1LP) + totTahun1E)}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCellRight}>{currencyFormatter((totTahun2KL + totTahun2LP) + totTahun2E)}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCellRight}>{currencyFormatter((totTahun3KL + totTahun3LP) + totTahun3E)}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCellRight}>{currencyFormatter(((totTahun2KL + totTahun2LP) + totTahun2E) - ((totTahun1KL + totTahun1LP) + totTahun1E))}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCell}>{Number((((totTahun2KL + totTahun2LP) + totTahun2E) / ((totTahun1KL + totTahun1LP) + totTahun1E))*100).toFixed(2)}%</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCellRight}>{currencyFormatter(((totTahun3KL + totTahun3LP) + totTahun3E) - ((totTahun2KL + totTahun2LP) + totTahun2E))}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCell}>{Number((((totTahun3KL + totTahun3LP) + totTahun3E) / ((totTahun2KL + totTahun2LP) + totTahun2E))*100).toFixed(2)}%</Text>
          </View>
          <View style={styles.tableCol15}>
            <Text style={styles.tableCell}></Text>
          </View>
        </View>
      </View>
    );
  }

  const TabelPersediaanAkhir = () => {
    return (
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <View style={styles.tableCol15}>
            <Text style={styles.tableCell}>Persediaan Akhir</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCellRight}>{currencyFormatter(totTahun1PA)}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCellRight}>{currencyFormatter(totTahun2PA)}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCellRight}>{currencyFormatter(totTahun3PA)}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCellRight}>{currencyFormatter(totSel1PA)}</Text>
          </View>
          <View style={styles.tableCol7}>
            <Text style={styles.tableCell}>{Number((totTahun2PA / totTahun1PA)*100).toFixed(2)}%</Text>
          </View>
          <View style={styles.tableCol7}>
            <Text style={styles.tableCell}>{Number((totTahun2PA / totTahun2P)*100).toFixed(2)}%</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCellRight}>{currencyFormatter(totSel2PA)}</Text>
          </View>
          <View style={styles.tableCol7}>
            <Text style={styles.tableCell}>{Number((totTahun3PA / totTahun2PA)*100).toFixed(2)}%</Text>
          </View>
          <View style={styles.tableCol7}>
            <Text style={styles.tableCell}>{Number((totTahun3PA / totTahun3P)*100).toFixed(2)}%</Text>
          </View>
          <View style={styles.tableCol7}>
            <Text style={styles.tableCell}></Text>
          </View>
        </View>
      </View>
    );
  }

  const TabelTotalHargaPokok = () => {
    return (
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <View style={styles.tableCol15}>
            <Text style={styles.tableCell}>TOTAL HARGA POKOK PENJUALAN</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCellRight}>{currencyFormatter(totTahun1HP - totTahun1PA)}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCellRight}>{currencyFormatter(totTahun2HP - totTahun2PA)}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCellRight}>{currencyFormatter(totTahun3HP - totTahun3PA)}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCellRight}>{currencyFormatter((totTahun2HP - totTahun2PA) - (totTahun1HP - totTahun1PA))}</Text>
          </View>
          <View style={styles.tableCol7}>
            <Text style={styles.tableCell}>{Number(((totTahun2HP - totTahun2PA) / (totTahun1HP - totTahun1PA))*100).toFixed(2)}%</Text>
          </View>
          <View style={styles.tableCol7}>
            <Text style={styles.tableCell}>{Number(((totTahun2HP - totTahun2PA) / totTahun2P)*100).toFixed(2)}%</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCellRight}>{currencyFormatter((totTahun3HP - totTahun3PA) - (totTahun2HP - totTahun2PA))}</Text>
          </View>
          <View style={styles.tableCol7}>
            <Text style={styles.tableCell}>{Number(((totTahun3HP - totTahun3PA) / (totTahun2HP - totTahun2PA))*100).toFixed(2)}%</Text>
          </View>
          <View style={styles.tableCol7}>
            <Text style={styles.tableCell}>{Number(((totTahun3HP - totTahun3PA) / totTahun3P)*100).toFixed(2)}%</Text>
          </View>
          <View style={styles.tableCol7}>
            <Text style={styles.tableCell}></Text>
          </View>
        </View>
      </View>
    );
  }

  const TabelGrosirProfit = () => {
    return (
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <View style={styles.tableCol15}>
            <Text style={styles.tableCell}>GROSIR PROFIT</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCellRight}>{currencyFormatter(totTahun1P - (totTahun1HP - totTahun1PA))}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCellRight}>{currencyFormatter(totTahun2P - (totTahun2HP - totTahun2PA))}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCellRight}>{currencyFormatter(totTahun3P - (totTahun3HP - totTahun3PA))}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCellRight}>{currencyFormatter((totTahun2P - (totTahun2HP - totTahun2PA)) - (totTahun1P - (totTahun1HP - totTahun1PA)))}</Text>
          </View>
          <View style={styles.tableCol7}>
            <Text style={styles.tableCell}>{Number(((totTahun2P - (totTahun2HP - totTahun2PA)) / (totTahun1P - (totTahun1HP - totTahun1PA)))*100).toFixed(2)}%</Text>
          </View>
          <View style={styles.tableCol7}>
            <Text style={styles.tableCell}>{Number(((totTahun2P - (totTahun2HP - totTahun2PA)) / totTahun2P)*100).toFixed(2)}%</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCellRight}>{currencyFormatter((totTahun3P - (totTahun3HP - totTahun3PA)) - (totTahun2P - (totTahun2HP - totTahun2PA)))}</Text>
          </View>
          <View style={styles.tableCol7}>
            <Text style={styles.tableCell}>{Number(((totTahun3P - (totTahun3HP - totTahun3PA)) / (totTahun2P - (totTahun2HP - totTahun2PA)))*100).toFixed(2)}%</Text>
          </View>
          <View style={styles.tableCol7}>
            <Text style={styles.tableCell}>{Number(((totTahun3P - (totTahun3HP - totTahun3PA)) / totTahun3P)*100).toFixed(2)}%</Text>
          </View>
          <View style={styles.tableCol7}>
            <Text style={styles.tableCell}></Text>
          </View>
        </View>
      </View>
    );
  }

  const TabelLabaRugi = () => {
    return (
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <View style={styles.tableCol15}>
            <Text style={styles.tableCell}>LABA RUGI OPERASIONAL</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCellRight}>{currencyFormatter((totTahun1P - (totTahun1HP - totTahun1PA)) - totTahun1B - totTahun1BU)}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCellRight}>{currencyFormatter((totTahun2P - (totTahun2HP - totTahun2PA)) - totTahun2B - totTahun2BU)}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCellRight}>{currencyFormatter((totTahun3P - (totTahun3HP - totTahun3PA)) - totTahun3B - totTahun3BU)}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCellRight}>{currencyFormatter(((totTahun2P - (totTahun2HP - totTahun2PA)) - totTahun2B - totTahun2BU) - ((totTahun1P - (totTahun1HP - totTahun1PA)) - totTahun1B - totTahun1BU))}</Text>
          </View>
          <View style={styles.tableCol7}>
            <Text style={styles.tableCell}>{Number((((totTahun2P - (totTahun2HP - totTahun2PA)) - totTahun2B - totTahun2BU) / ((totTahun1P - (totTahun1HP - totTahun1PA)) - totTahun1B - totTahun1BU))*100).toFixed(2)}%</Text>
          </View>
          <View style={styles.tableCol7}>
            <Text style={styles.tableCell}>{Number((((totTahun2P - (totTahun2HP - totTahun2PA)) - totTahun2B - totTahun2BU) / totTahun2P)*100).toFixed(2)}%</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCellRight}>{currencyFormatter(((totTahun3P - (totTahun3HP - totTahun3PA)) - totTahun3B - totTahun3BU) - ((totTahun2P - (totTahun2HP - totTahun2PA)) - totTahun2B - totTahun2BU))}</Text>
          </View>
          <View style={styles.tableCol7}>
            <Text style={styles.tableCell}>{Number((((totTahun3P - (totTahun3HP - totTahun3PA)) - totTahun3B - totTahun3BU) / ((totTahun2P - (totTahun2HP - totTahun2PA)) - totTahun2B - totTahun3BU))*100).toFixed(2)}%</Text>
          </View>
          <View style={styles.tableCol7}>
            <Text style={styles.tableCell}>{Number((((totTahun3P - (totTahun3HP - totTahun3PA)) - totTahun3B - totTahun3BU) / totTahun3P)*100).toFixed(2)}%</Text>
          </View>
          <View style={styles.tableCol7}>
            <Text style={styles.tableCell}></Text>
          </View>
        </View>
      </View>
    );
  }

  const TabelLabaSebelum = () => {
    return (
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <View style={styles.tableCol15}>
            <Text style={styles.tableCell}>LABA (RUGI) SEBELUM PAJAK</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCellRight}>{currencyFormatter(((totTahun1P - (totTahun1HP - totTahun1PA)) - totTahun1B - totTahun1BU + totTahun1PB))}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCellRight}>{currencyFormatter(((totTahun2P - (totTahun2HP - totTahun2PA)) - totTahun2B - totTahun2BU + totTahun2PB))}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCellRight}>{currencyFormatter(((totTahun3P - (totTahun3HP - totTahun3PA)) - totTahun3B - totTahun3BU + totTahun3PB))}</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCellRight}>{currencyFormatter((((totTahun2P - (totTahun2HP - totTahun2PA)) - totTahun2B - totTahun2BU - totTahun2PB)) - (((totTahun1P - (totTahun1HP - totTahun1PA)) - totTahun1B - totTahun1BU - totTahun1PB)))}</Text>
          </View>
          <View style={styles.tableCol7}>
            <Text style={styles.tableCell}>{Number(((((totTahun2P - (totTahun2HP - totTahun2PA)) - totTahun2B - totTahun2BU - totTahun2PB)) / (((totTahun1P - (totTahun1HP - totTahun1PA)) - totTahun1B - totTahun1BU - totTahun1PB)))*100).toFixed(2)}%</Text>
          </View>
          <View style={styles.tableCol7}>
            <Text style={styles.tableCell}>{Number(((((totTahun2P - (totTahun2HP - totTahun2PA)) - totTahun2B - totTahun2BU - totTahun2PB)) / totTahun2P)*100).toFixed(2)}%</Text>
          </View>
          <View style={styles.tableCol10}>
            <Text style={styles.tableCellRight}>{currencyFormatter((((totTahun3P - (totTahun3HP - totTahun3PA)) - totTahun3B - totTahun3BU - totTahun3PB)) - (((totTahun2P - (totTahun2HP - totTahun2PA)) - totTahun2B - totTahun2BU - totTahun2PB)))}</Text>
          </View>
          <View style={styles.tableCol7}>
            <Text style={styles.tableCell}>{Number(((((totTahun3P - (totTahun3HP - totTahun3PA)) - totTahun3B - totTahun3BU - totTahun3PB)) / (((totTahun2P - (totTahun2HP - totTahun2PA)) - totTahun2B - totTahun2BU - totTahun2PB)))*100).toFixed(2)}%</Text>
          </View>
          <View style={styles.tableCol7}>
            <Text style={styles.tableCell}>{Number(((((totTahun3P - (totTahun3HP - totTahun3PA)) - totTahun3B - totTahun3BU - totTahun3PB)) / totTahun3P)*100).toFixed(2)}%</Text>
          </View>
          <View style={styles.tableCol7}>
            <Text style={styles.tableCell}></Text>
          </View>
        </View>
      </View>
    );
  }

  const TabelLampiran = () => {
    return (
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <View style={styles.tableCol5}>
            <Text style={styles.tableCell}>No.</Text>
          </View>
          <View style={styles.tableCol95}>
            <Text style={styles.tableCell}>Lampiran</Text>
          </View>
        </View>
        {props.data.dataLampiran.map((a, index) => {
          return (
            <View style={styles.tableRow}>
              <View style={styles.tableCol5}>
                <Text style={styles.tableCellRight}>{index + 1}</Text>
              </View>
              <View style={styles.tableCol95}>
                <Text style={styles.tableCellLeft}>{a.lampiran}</Text>
              </View>
            </View>
          );
        })}
      </View>
    );
  }

  return (
    <Document>
      <Page size="A4" style={styles.page} wrap>
        <Text style={{ fontSize: 7, textAlign: 'right' }}>dicetak pada tanggal {tgl}</Text>
        <View style={styles.header}>
          <Image
            style={styles.logo}
            src="kemenkeu-logo.png"
          />
          <View style={styles.headerTitle}>
            <Text style={{ fontSize: 14, fontStyle: 'bold' }}>KEMENTERIAN KEUANGAN REPUBLIK INDONESIA</Text>
            <Text style={{ fontSize: 12 }}>DIREKTORAT JENDERAL PAJAK</Text>
            <Text style={{ fontSize: 12 }}>KANTOR WILAYAH DJP BANTEN</Text>
            <Text style={{ fontSize: 12, marginBottom: 10 }}>KANTOR PELAYANAN PAJAK PRATAMA TANGERANG TIMUR</Text>
            <Text style={{ fontSize: 7 }}>JL. SATRIA SUDIRMAN, KOMPLEK PEMERINTAH KOTA TANGERANG, TANGERANG 15111</Text>
            <Text style={{ fontSize: 7 }}>TELEPON (021) 55737559, 55737560 ; FAKSIMILI (021) 55791479; SITUS www.pajak.go.id</Text>
            <Text style={{ fontSize: 7 }}>EMAIL pengaduan@pajak.go.id</Text>
          </View>
        </View>
        <View>
          <Text style={{ fontSize: 15, textAlign: 'center' }}>LAPORAN HASIL PENELITIAN</Text>
          <Text style={{ fontSize: 13, marginTop: 4, textAlign: 'center', weight: 400, marginBottom: 50 }}>Nomor: {props.data.dataUmum[0].nomor}</Text>
          <Text style={{ fontSize: 11 }}>I. PROFIL WAJIB PAJAK</Text>
          <View style={{ paddingVertical: 6, paddingHorizontal: 10 }}>
            <Text style={{ fontSize: 11 }}>A. Identitas Wajib Pajak</Text>
            <View style={{ paddingHorizontal: 12, paddingVertical: 10 }}>
              {
                [
                  { label: "Nama wajib pajak", value: props.data.dataUmum[0].namaWajib },
                  { label: "NPWP", value: formatNpwp(props.data.dataUmum[0].npwp) },
                  { label: "KPP", value: props.data.dataUmum[0].kpp },
                  { label: "Alamat", value: props.data.dataUmum[0].alamat },
                  { label: "KLU", value: props.data.dataUmum[0].klu },
                  { label: "Tahun Pajak", value: props.data.dataUmum[0].tahunPajak }
                ].map((v, i) =>
                  <View key={i} style={{ flexDirection: 'row', marginBottom: 5 }}>
                    <Text style={{ fontSize: 11, width: 110 }}>{v.label}</Text>
                    <Text style={{ fontSize: 11, width: 10 }}>:</Text>
                    <Text style={{ flex: 1, fontSize: 11 }}>{v.value}</Text>
                  </View>
                )}
            </View>

            <Text style={{ fontSize: 11 }}>B. Kegiatan Usaha</Text>
            <Text style={{ paddingHorizontal: 12, paddingVertical: 10, fontSize: 11 }}>{props.data.dataUmum[0].kegiatanUsaha}</Text>
            <Text style={{ fontSize: 11 }}>C. Pohon Kepemilikan/Daftar Anggota Keluarga</Text>
            <View style={{ paddingHorizontal: 12, paddingTop: 10 }}>
              <TabelPohonKepemilikan />
            </View>
            <Image
              style={{height: 170, width: 300}}
              src={props.data.chartUri}
            />
            <Text style={{ fontSize: 11 }}>D. Profil Resiko</Text>
            <Text style={{ paddingHorizontal: 12, paddingVertical: 10, fontSize: 11 }}>Level of Risk CRM Periode {props.data.dataUmum[0].tahunRisk} : {props.data.dataUmum[0].nilaiRisk}%</Text>
            <Text style={{ fontSize: 11 }}>E. Riwayat Laporan Analisis</Text>
            <View style={{ paddingHorizontal: 12, paddingVertical: 10 }}>
              <TabelRiwayatLaporan />
            </View>
            <Text style={{ fontSize: 11 }}>F. Riwayat Pengawasan</Text>
            <View style={{ paddingHorizontal: 12, paddingVertical: 10 }}>
              <TabelRiwayatPengawasan />
            </View>
            <Text style={{ fontSize: 11 }}>G. Riwayat Hasil Pemeriksaan</Text>
            <View style={{ paddingHorizontal: 12, paddingVertical: 10 }}>
              <TabelHasilPeriksa />
            </View>
            <Text style={{ fontSize: 11 }}>Deskripsi Penjelasan Koreksi Hasil Pemeriksaan</Text>
            <View style={{ paddingHorizontal: 12, paddingVertical: 10 }}>
              <TabelKoreksiHasil />
            </View>
            <Text style={{ fontSize: 11 }}>H. Hasil Riwayat Banding</Text>
            <View style={{ paddingHorizontal: 12, paddingVertical: 10 }}>
              <TabelHasilBanding />
            </View>
            <Text style={{ fontSize: 11 }}>Deskripsi Penjelasan Koreksi Hasil Pemeriksaan</Text>
            <View style={{ paddingHorizontal: 12, paddingVertical: 10 }}>
              <TabelKoreksiKeberatan />
            </View>
            <Text style={{ fontSize: 11 }}>I. Profil Resiko Ketertagihan Pajak</Text>
            <View style={{ paddingHorizontal: 12, paddingVertical: 10 }}>
              <Text style={{ fontSize: 11 }}>{props.data.dataUmum[0].tagihPajak}</Text>
            </View>
          </View>
          
        </View>
        <Text style={styles.footer} fixed>KPP Pratama Tangerang Timur</Text>
      </Page>
      <Page size="A4" style={styles.page} orientation="landscape">
        <Text style={{ fontSize: 11 }}>II. ANALISIS DATA INFORMASI</Text>
          <View style={{ paddingVertical: 6, paddingHorizontal: 10 }}>
            <Text style={{ fontSize: 11 }}>A. Analisis Laporan Keuangan</Text>
            <Text style={{ fontSize: 11, paddingHorizontal: 12, paddingTop: 10 }}>Neraca</Text>
            <View style={{ paddingHorizontal: 12, paddingTop: 12 }}>
              <Text style={{ fontSize: 11 }}>1. Aktiva</Text>
              <View style={{ paddingHorizontal: 12, paddingVertical: 12 }}>
                <Text style={{ fontSize: 11, marginBottom: 12 }}>i. Aktiva Lancar</Text>
                <TabelAktivaLancar />
                <Text style={{ fontSize: 11, paddingVertical: 12 }}>ii. Aktiva Tetap</Text>
                <TabelAktivaTetap />
                <View style={{ marginTop: 16 }}>
                  <TabelTotalAset />
                </View>
              </View>
              <Text style={{ fontSize: 11 }}>2. Kewajiban</Text>
              <View style={{ paddingHorizontal: 12, paddingVertical: 12 }}>
                <Text style={{ fontSize: 11, marginBottom: 12 }}>a. Kewajiban Lancar</Text>
                <TabelKewajibanLancar />
                <Text style={{ fontSize: 11, paddingVertical: 12 }}>b. Liabilitas Jangka Panjang</Text>
                <TabelLiabilitasPanjang />
                <View style={{ marginTop: 16 }}>
                  <TabelTotalLiabilitas />
                </View>
              </View>
              <Text style={{ fontSize: 11 }}>3. Ekuitas</Text>
              <View style={{ paddingHorizontal: 12, paddingVertical: 12 }}>
                <TabelEkuitas />
                <View style={{ marginTop: 16 }}>
                  <TabelTotalEkuitas />
                </View>
              </View>
            </View>
            <Text style={{ fontSize: 11, paddingHorizontal: 12 }}>Laba Rugi</Text>
            <View style={{ paddingHorizontal: 12, paddingTop: 12 }}>
              <Text style={{ fontSize: 11 }}>1. Pendapatan</Text>
              <View style={{ paddingHorizontal: 12, paddingVertical: 12 }}>
                <TabelPendapatan />
              </View>
              <Text style={{ fontSize: 11 }}>2. Harga Pokok Penjualan</Text>
              <View style={{ paddingHorizontal: 12, paddingVertical: 12 }}>
                <TabelHargaPokok />
                <View style={{ marginTop: 16 }}>
                  <TabelPersediaanAkhir />
                </View>
                <View style={{ marginTop: 16 }}>
                  <TabelTotalHargaPokok />
                </View>
                <View style={{ marginTop: 24 }}>
                  <TabelGrosirProfit />
                </View>
              </View>

              <Text style={{ fontSize: 11 }}>3. Biaya Biaya</Text>
              <View style={{ paddingHorizontal: 12, paddingVertical: 12 }}>
                <Text style={{ fontSize: 11, marginBottom: 12 }}>i. Biaya Penjualan</Text>
                <TabelBiayaPenjualan />
                <Text style={{ fontSize: 11, marginBottom: 12, marginTop: 12 }}>ii. Biaya Umum</Text>
                <TabelBiayaUmum />
                <View style={{ marginTop: 16 }}>
                  <TabelLabaRugi />
                </View>
              </View>

              <Text style={{ fontSize: 11 }}>4. Pendapatan dan Beban Lain-Lain</Text>
              <View style={{ paddingHorizontal: 12, paddingVertical: 12 }}>
                <TabelBeban />
                <View style={{ marginTop: 16 }}>
                  <TabelLabaSebelum />
                </View>
              </View>
            </View>
          </View>
          <Text style={styles.footer} fixed>KPP Pratama Tangerang Timur</Text>
      </Page>
      <Page size="A4" style={styles.page}>
        <View>
            <Text style={{ fontSize: 11 }}>B. Analisis Transfer Pricing dan Aspek Perpajakan Internasional</Text>
            <View style={{ paddingHorizontal: 12, paddingVertical: 10 }}>
              <TabelTransferPricing />
            </View>
            <Text style={{ fontSize: 11 }}>C. Analisis Pajak Penghasilan Badan atau Orang Pribadi</Text>
            <View style={{ paddingHorizontal: 12, paddingVertical: 10 }}>
              {/* disini uraian */}
            </View>
            <Text style={{ fontSize: 11 }}>D. Analisis Pajak Penghasilan Pemotongan atau Pemungutan</Text>
            <View style={{ paddingHorizontal: 12, paddingVertical: 10 }}>
              {/* disini uraian */}
            </View>
            <Text style={{ fontSize: 11 }}>E. Analisis Pajak Pertambahan Nilai dan/atau Pajak Penjualan atas Bawah Mewah</Text>
            <View style={{ paddingHorizontal: 12, paddingVertical: 10 }}>
              {/* disini uraian */}
            </View>
            <Text style={{ fontSize: 11 }}>F. Analisis Pajak Lainnya</Text>
            <View style={{ paddingHorizontal: 12, paddingVertical: 10 }}>
              <TabelPajakLainnya />
            </View>
            <Text style={{ fontSize: 11 }}>G. Fakta Lapangan</Text>
            <View style={{ paddingHorizontal: 12, paddingTop: 12 }}>
              <Text style={{ fontSize: 11 }}>1. Hasil Kunjungan</Text>
              <View style={{ paddingHorizontal: 12, paddingVertical: 12 }}>
                <TabelHasilKunjungan />
              </View>
              <Text style={{ fontSize: 11 }}>2. Fakta Lapangan Lainnya</Text>
              <View style={{ paddingHorizontal: 12, paddingVertical: 12 }}>
                <TabelFaktaLapangan />
              </View>
              <Text style={{ fontSize: 11 }}>3. Pengaduan Masyarakat</Text>
              <View style={{ paddingHorizontal: 12, paddingVertical: 12 }}>
                <TabelPengaduan />
              </View>
            </View>
          </View>
          <Text style={{ fontSize: 11 }}>III. KESIMPULAN DAN SARAN</Text>
          <View style={{ paddingVertical: 6, paddingHorizontal: 10 }}>
            <Text style={{ fontSize: 11 }}>A. Wajib pajak telah memenuhi kewajiban perpajakan</Text>
            <Text style={{ fontSize: 11, paddingHorizontal: 12, paddingVertical: 10 }}>{props.data.dataUmum[0].memenuhiKewajiban}</Text>
            <Text style={{ fontSize: 11 }}>B. Wajib pajak diusulkan permintaan penjelasan atas data dan/atau keterangan (terdapat tax gap)</Text>
            <View style={{ paddingHorizontal: 12, paddingTop: 12 }}>
              <Text style={{ fontSize: 11 }}>1. Indikasi Ketidakpatuhan</Text>
              <View style={{ paddingHorizontal: 12, paddingVertical: 12 }}>
                <TabelIndikasi />
              </View>
              <Text style={{ fontSize: 11 }}>2. Modus Ketidakpatuhan</Text>
              <View style={{ paddingHorizontal: 12, paddingVertical: 12 }}>
                <TabelModus />
              </View>
              <Text style={{ fontSize: 11 }}>3. Potensi</Text>
              <View style={{ paddingHorizontal: 12, paddingVertical: 12 }}>
                <TabelPotensi />
              </View>
            </View>
          </View>

          <Text style={styles.footer} fixed>KPP Pratama Tangerang Timur</Text>
        
      </Page>

      <Page size="A4" style={styles.page}>
          <Text style={{ fontSize: 11 }}>IV. LAMPIRAN</Text>
          <View style={{ paddingVertical: 6, paddingHorizontal: 10 }}>
            <TabelLampiran />
          </View>
          <Text style={{ fontSize: 11, paddingTop: 10, paddingBottom: 20 }}>V. PENANDATANGAN LPHt</Text>
          <View style={{ paddingVertical: 12, flexDirection: 'column' }}>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 1, paddingHorizontal: 15, flexDirection: 'column' }}>
                <Text style={{ fontSize: 10 }}>Supervisor</Text>
                <Text style={{ fontSize: 10 }}>Fungsional Pemeriksa</Text>
                <Text textBreakStrategy="simple" style={{ fontSize: 10, marginTop: 70 }}>{props.data.dataUmum[0].nama1}</Text>
              </View>
              <View style={{ flex: 1, paddingHorizontal: 15 }}>
                <Text style={{ fontSize: 10 }}>Kepala Seksi</Text>
                <Text textBreakStrategy="simple" style={{ fontSize: 10 }}>{props.data.dataUmum[0].unit2}</Text>
                <Text textBreakStrategy="simple" style={{ fontSize: 10, marginTop: 70 }}>{props.data.dataUmum[0].nama2}</Text>
              </View>
              <View style={{ flex: 1, paddingHorizontal: 15 }}>
                <Text style={{ fontSize: 10 }}>Account Representative</Text>
                <Text textBreakStrategy="simple" style={{ fontSize: 10 }}>{props.data.dataUmum[0].unit3}</Text>
                <Text textBreakStrategy="simple" style={{ fontSize: 10, marginTop: 60 }}>{props.data.dataUmum[0].nama3}</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 30 }}>
              <View style={{ flex: 1, paddingHorizontal: 15 }}>

              </View>
              <View style={{ flex: 1, paddingHorizontal: 15 }}>
                <Text style={{ fontSize: 10 }}>Menyetujui,</Text>
                <Text style={{ fontSize: 10 }}>Kepala Kantor</Text>
                <Text style={{ fontSize: 10, marginTop: 70 }}>FAISAL FATAHILLAH</Text>
              </View>
              <View style={{ flex: 1, paddingHorizontal: 15 }}>

              </View>
            </View>
          </View>

          <Text style={styles.footer} fixed>KPP Pratama Tangerang Timur</Text>
        
      </Page>

    </Document>
  );
}

// Font.register({ family: 'Arial', src:  })

const styles = StyleSheet.create({
  page: {
    paddingTop: 30,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 50,
    flexDirection: 'column',
    backgroundColor: '#fff'
  },
  header: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 20,
    paddingBottom: 20,
    borderBottomWidth: 1
  },
  logo: {
    height: "auto",
    width: "auto",
    flex: 1,
    marginLeft: 16
  },
  headerTitle: {
    flex: 4,
    marginRight: 40,
    marginLeft: 20,
    flexDirection: 'column',
    textAlign: 'center'
  },
  table: {
    display: "table",
    width: "auto",
    borderStyle: "solid",
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0
  },
  tableRow: {
    margin: "auto",
    flexDirection: "row"
  },
  tableCol: {
    width: '20%',
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0
  },
  tableCol5: {
    width: '5%',
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0
  },
  tableCol7: {
    width: '7%',
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0
  },
  tableCol10: {
    width: '10%',
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0
  },
  tableCol15: {
    width: '15%',
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    paddingHorizontal: 2
  },
  tableCol20: {
    width: '20%',
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0
  },
  tableCol25: {
    width: '25%',
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0
  },
  tableCol30: {
    width: '30%',
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0
  },
  tableCol35: {
    width: '35%',
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0
  },
  tableCol40: {
    width: '40%',
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0
  },
  tableCol45: {
    width: '45%',
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0
  },
  tableCol95: {
    width: '95%',
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0
  },
  tableCell: {
    margin: "auto",
    marginVertical: 5,
    fontSize: 8,
  },
  tableCellLeft: {
    marginVertical: 5,
    marginHorizontal: 5,
    fontSize: 8,
  },
  tableCellRight: {
    marginVertical: 5,
    marginHorizontal: 5,
    fontSize: 8,
    textAlign: 'right'
  },
  footer: {
    position: 'absolute',
    fontSize: 7,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'grey',
  },
});


export default Pdf;
