import React from 'react';
import { PDFViewer, StyleSheet } from '@react-pdf/renderer';
import Pdf from './Pdf'

const Preview = (props) => {
  return (
    <PDFViewer
      style={styles.page}>
      <Pdf data={{
        dataUmum: props.location.pdfProps.dataUmum,
        riwayatLaporan: props.location.pdfProps.riwayatLaporan,
        pohonKepemilikan: props.location.pdfProps.pohonKepemilikan,
        riwayatPengawasan: props.location.pdfProps.riwayatPengawasan,
        hasilPeriksa: props.location.pdfProps.hasilPeriksa,
        koreksiHasil: props.location.pdfProps.koreksiHasil,
        hasilKeberatan: props.location.pdfProps.hasilKeberatan,
        koreksiKeberatan: props.location.pdfProps.koreksiKeberatan,
        transferPricing: props.location.pdfProps.transferPricing,
        hasilKunjungan: props.location.pdfProps.hasilKunjungan,
        faktaLapangan: props.location.pdfProps.faktaLapangan,
        pengaduanMasyarakat: props.location.pdfProps.pengaduanMasyarakat,
        indikasiKetidakpatuhan: props.location.pdfProps.indikasiKetidakpatuhan,
        modusKetidakpatuhan: props.location.pdfProps.modusKetidakpatuhan,
        potensi: props.location.pdfProps.potensi,
        aktivaLancar: props.location.pdfProps.aktivaLancar,
        aktivaTetap: props.location.pdfProps.aktivaTetap,
        kewajibanLancar: props.location.pdfProps.kewajibanLancar,
        liabilitasPanjang: props.location.pdfProps.liabilitasPanjang,
        ekuitas: props.location.pdfProps.ekuitas,
        pendapatan: props.location.pdfProps.pendapatan,
        hargaPokok: props.location.pdfProps.hargaPokok,
        persediaanAkhir: props.location.pdfProps.persediaanAkhir,
        biayaLabaPenjualan: props.location.pdfProps.biayaLabaPenjualan,
        biayaLabaUmum: props.location.pdfProps.biayaLabaUmum,
        pendapatanBeban: props.location.pdfProps.pendapatanBeban,
        pajakLain: props.location.pdfProps.pajakLain,
        dataLampiran: props.location.pdfProps.dataLampiran
      }} />
    </PDFViewer>
  );
}

const styles = StyleSheet.create({
  page: {
    width: '100%',
    height: window.innerHeight,
    objectFit: 'fill'
  }
});

export default Preview;
