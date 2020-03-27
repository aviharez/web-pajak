import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image, Font } from '@react-pdf/renderer';


const Pdf = (props) => {
  // console.log("isi dari sebelah: ", props.location.dataForm);
  
  const mataUang = props.data.dataUmum[0].mataUang;

  const TabelPohonKepemilikan = () => {
    return (
    <View style={styles.table}> 
        <View style={styles.tableRow}> 
          <View style={styles.tableCol5}> 
            <Text style={styles.tableCell}>No.</Text> 
          </View> 
          <View style={styles.tableCol20}> 
            <Text style={styles.tableCell}>Nama</Text> 
          </View> 
          <View style={styles.tableCol30}> 
            <Text style={styles.tableCell}>Alamat</Text> 
          </View> 
          <View style={styles.tableCol15}> 
            <Text style={styles.tableCell}>Jumlah Modal</Text> 
          </View>
          <View style={styles.tableCol15}> 
            <Text style={styles.tableCell}>Persentase</Text> 
          </View> 
          <View style={styles.tableCol15}> 
            <Text style={styles.tableCell}>Dividen</Text> 
          </View>
        </View>
        {props.data.pohonKepemilikan.map((a, index) => {
          return (
            <View style={styles.tableRow}> 
              <View style={styles.tableCol5}> 
                <Text style={styles.tableCell}>{index + 1}</Text> 
              </View> 
              <View style={styles.tableCol20}> 
                <Text style={styles.tableCell}>{a.nama}</Text> 
              </View> 
              <View style={styles.tableCol30}>
                <Text style={styles.tableCell}>{a.alamat}</Text> 
              </View>
              <View style={styles.tableCol15}> 
                <Text style={styles.tableCell}>{a.jmlModal}</Text> 
              </View> 
              <View style={styles.tableCol15}> 
                <Text style={styles.tableCell}>{a.persentase}%</Text> 
              </View> 
              <View style={styles.tableCol15}> 
                <Text style={styles.tableCell}>{a.dividen}</Text> 
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
                <Text style={styles.tableCell}>{index + 1}</Text> 
              </View> 
              <View style={styles.tableCol30}> 
                <Text style={styles.tableCell}>{a.nomorLHA}</Text> 
              </View> 
              <View style={styles.tableCol30}>
                <Text style={styles.tableCell}>{a.nilaiLHA}</Text> 
              </View>
              <View style={styles.tableCol35}> 
                <Text style={styles.tableCell}>{a.sumberLHA}</Text> 
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
          <View style={styles.tableCol15}> 
            <Text style={styles.tableCell}>Nomor SP2DK</Text> 
          </View> 
          <View style={styles.tableCol20}> 
            <Text style={styles.tableCell}>Jenis Pajak</Text> 
          </View> 
          <View style={styles.tableCol15}> 
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
                <Text style={styles.tableCell}>{index + 1}</Text> 
              </View> 
              <View style={styles.tableCol15}> 
                <Text style={styles.tableCell}>{a.nomorSp}</Text> 
              </View> 
              <View style={styles.tableCol20}>
                <Text style={styles.tableCell}>{a.jenisPajak}</Text> 
              </View>
              <View style={styles.tableCol15}> 
                <Text style={styles.tableCell}>{a.tahunPajak}</Text> 
              </View> 
              <View style={styles.tableCol15}> 
                <Text style={styles.tableCell}>{a.nilaiPotensi}</Text> 
              </View> 
              <View style={styles.tableCol15}> 
                <Text style={styles.tableCell}>{a.status}</Text> 
              </View> 
              <View style={styles.tableCol15}> 
                <Text style={styles.tableCell}>{a.realisasi}</Text> 
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
            <Text style={styles.tableCell}>CFM SPT</Text> 
          </View>
          <View style={styles.tableCol20}> 
            <Text style={styles.tableCell}>CFM Pemeriksaan</Text> 
          </View> 
          <View style={styles.tableCol25}> 
            <Text style={styles.tableCell}>Koreksi (Rp)</Text> 
          </View>
        </View>
        {props.data.hasilPeriksa.map((a, index) => {
          return (
            <View style={styles.tableRow}> 
              <View style={styles.tableCol5}> 
                <Text style={styles.tableCell}>{index + 1}</Text> 
              </View> 
              <View style={styles.tableCol20}> 
                <Text style={styles.tableCell}>{a.jenisPajak}</Text> 
              </View> 
              <View style={styles.tableCol10}>
                <Text style={styles.tableCell}>{a.tahun}</Text> 
              </View>
              <View style={styles.tableCol20}> 
                <Text style={styles.tableCell}>{a.cfmSpt}</Text> 
              </View> 
              <View style={styles.tableCol20}> 
                <Text style={styles.tableCell}>{a.cfmPeriksa}</Text> 
              </View> 
              <View style={styles.tableCol25}> 
                <Text style={styles.tableCell}>{a.koreksi}</Text> 
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
                <Text style={styles.tableCell}>{index + 1}</Text> 
              </View> 
              <View style={styles.tableCol15}> 
                <Text style={styles.tableCell}>{a.tahun}</Text> 
              </View> 
              <View style={styles.tableCol20}>
                <Text style={styles.tableCell}>{a.jenisPajak}</Text> 
              </View>
              <View style={styles.tableCol25}> 
                <Text style={styles.tableCell}>{a.sumberKoreksi}</Text> 
              </View> 
              <View style={styles.tableCol35}> 
                <Text style={styles.tableCell}>{a.alasanKkoreksi}</Text> 
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
            <Text style={styles.tableCell}>CFM Pemeriksa</Text> 
          </View>
          <View style={styles.tableCol20}> 
            <Text style={styles.tableCell}>CFM Keberatan/Banding</Text> 
          </View> 
          <View style={styles.tableCol25}> 
            <Text style={styles.tableCell}>Koreksi (Rp)</Text> 
          </View>
        </View>
        {props.data.hasilKeberatan.map((a, index) => {
          return (
            <View style={styles.tableRow}> 
              <View style={styles.tableCol5}> 
                <Text style={styles.tableCell}>{index + 1}</Text> 
              </View> 
              <View style={styles.tableCol15}> 
                <Text style={styles.tableCell}>{a.masaPajak}</Text> 
              </View> 
              <View style={styles.tableCol15}>
                <Text style={styles.tableCell}>{a.jenisPajak}</Text> 
              </View>
              <View style={styles.tableCol20}> 
                <Text style={styles.tableCell}>{a.cfmPemeriksa}</Text> 
              </View> 
              <View style={styles.tableCol20}> 
                <Text style={styles.tableCell}>{a.cfmBanding}</Text> 
              </View> 
              <View style={styles.tableCol25}> 
                <Text style={styles.tableCell}>{a.koreksi}</Text> 
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
                <Text style={styles.tableCell}>{index + 1}</Text> 
              </View> 
              <View style={styles.tableCol25}> 
                <Text style={styles.tableCell}>{a.masaPajak}</Text> 
              </View> 
              <View style={styles.tableCol25}>
                <Text style={styles.tableCell}>{a.jenisPajak}</Text> 
              </View>
              <View style={styles.tableCol45}> 
                <Text style={styles.tableCell}>{a.risalahKeputusan}</Text> 
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
                <Text style={styles.tableCell}>{index + 1}</Text> 
              </View> 
              <View style={styles.tableCol95}> 
                <Text style={styles.tableCell}>{a.analisis}</Text> 
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
            <Text style={styles.tableCell}>CFM SPT</Text> 
          </View> 
          <View style={styles.tableCol15}> 
            <Text style={styles.tableCell}>CFM Penelitian</Text> 
          </View>          
          <View style={styles.tableCol35}> 
            <Text style={styles.tableCell}>Keterangan</Text> 
          </View>          
        </View>
        {props.data.pajakLain.map((a, index) => {
          return (
            <View style={styles.tableRow}> 
              <View style={styles.tableCol5}> 
                <Text style={styles.tableCell}>{index + 1}</Text> 
              </View> 
              <View style={styles.tableCol30}> 
                <Text style={styles.tableCell}>{a.uraian}</Text> 
              </View> 
              <View style={styles.tableCol15}>
                <Text style={styles.tableCell}>{a.cfmSpt}</Text> 
              </View>
              <View style={styles.tableCol15}> 
                <Text style={styles.tableCell}>{a.cfmPenelitian}</Text> 
              </View> 
              <View style={styles.tableCol35}> 
                <Text style={styles.tableCell}>{a.keterangan}</Text> 
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
                <Text style={styles.tableCell}>{index + 1}</Text> 
              </View> 
              <View style={styles.tableCol25}> 
                <Text style={styles.tableCell}>{a.nomor}</Text> 
              </View> 
              <View style={styles.tableCol25}>
                <Text style={styles.tableCell}>{a.tanggal}</Text> 
              </View>
              <View style={styles.tableCol45}> 
                <Text style={styles.tableCell}>{a.hasil}</Text> 
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
                <Text style={styles.tableCell}>{index + 1}</Text> 
              </View> 
              <View style={styles.tableCol95}> 
                <Text style={styles.tableCell}>{a.fakta}</Text> 
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
            <Text style={styles.tableCell}>Jenis Data</Text> 
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
                <Text style={styles.tableCell}>{index + 1}</Text> 
              </View> 
              <View style={styles.tableCol10}> 
                <Text style={styles.tableCell}>{a.tahunPajak}</Text> 
              </View> 
              <View style={styles.tableCol20}>
                <Text style={styles.tableCell}>{a.jenisData}</Text> 
              </View>
              <View style={styles.tableCol15}> 
                <Text style={styles.tableCell}>{a.nilaiData}</Text> 
              </View> 
              <View style={styles.tableCol20}> 
                <Text style={styles.tableCell}>{a.modusOper}</Text> 
              </View> 
              <View style={styles.tableCol30}> 
                <Text style={styles.tableCell}>{a.tindakLanjut}</Text> 
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
                <Text style={styles.tableCell}>{index + 1}</Text> 
              </View> 
              <View style={styles.tableCol95}> 
                <Text style={styles.tableCell}>{a.indikasi}</Text> 
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
                <Text style={styles.tableCell}>{index + 1}</Text> 
              </View> 
              <View style={styles.tableCol95}> 
                <Text style={styles.tableCell}>{a.modus}</Text> 
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
                <Text style={styles.tableCell}>{index + 1}</Text> 
              </View> 
              <View style={styles.tableCol30}> 
                <Text style={styles.tableCell}>{a.jenisData}</Text> 
              </View> 
              <View style={styles.tableCol30}>
                <Text style={styles.tableCell}>{a.tahunPajak}</Text> 
              </View>
              <View style={styles.tableCol35}> 
                <Text style={styles.tableCell}>{a.nilaiPotensi}</Text> 
              </View> 
            </View> 
          );
        })}
      </View>
    );
  }

  const TabelAktivaLancar = () => {
    var i, total1=0, total2=0, total3=0, selisih1=0, selisih2=0, hor1=0, hor2=0;
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
            <Text style={styles.tableCell}>2017</Text> 
          </View> 
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>2018</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>2019</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>Selisih 2018 - 2017</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>%horizontal% 2018</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>Selisih 2019 - 2018</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>%horizontal% 2019</Text> 
          </View>
          <View style={styles.tableCol15}> 
            <Text style={styles.tableCell}>Keterangan</Text> 
          </View>
        </View>
        {props.data.aktivaLancar.map((a, index) => {
          return (
            <View style={styles.tableRow}> 
              <View style={styles.tableCol5}> 
                <Text style={styles.tableCell}>{index + 1}</Text> 
              </View> 
              <View style={styles.tableCol10}> 
                <Text style={styles.tableCell}>{a.akun}</Text> 
              </View> 
              <View style={styles.tableCol10}>
                <Text style={styles.tableCell}>{a.nilaiTahun1}</Text> 
              </View>
              <View style={styles.tableCol10}> 
                <Text style={styles.tableCell}>{a.nilaiTahun2}</Text> 
              </View> 
              <View style={styles.tableCol10}> 
                <Text style={styles.tableCell}>{a.nilaiTahun3}</Text> 
              </View> 
              <View style={styles.tableCol10}> 
                <Text style={styles.tableCell}>{a.nilaiTahun2 - a.nilaiTahun1}</Text> 
              </View> 
              <View style={styles.tableCol10}> 
                <Text style={styles.tableCell}>{a.nilaiTahun2 / a.nilaiTahun1}</Text> 
              </View> 
              <View style={styles.tableCol10}> 
                <Text style={styles.tableCell}>{a.nilaiTahun3 - a.nilaiTahun2}</Text> 
              </View> 
              <View style={styles.tableCol10}> 
                <Text style={styles.tableCell}>{a.nilaiTahun3 / a.nilaiTahun2}</Text> 
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
            <Text style={styles.tableCell}>{total1}</Text> 
          </View> 
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>{total2}</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>{total3}</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>{selisih1}</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>{hor1}</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>{selisih2}</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>{hor2}</Text> 
          </View>
          <View style={styles.tableCol15}> 
            <Text style={styles.tableCell}>Keterangan</Text> 
          </View>
        </View>
      </View>
    );
  }

  const TabelAktivaTetap = () => {
    var i, total1=0, total2=0, total3=0, selisih1=0, selisih2=0, hor1=0, hor2=0;
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
            <Text style={styles.tableCell}>2017</Text> 
          </View> 
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>2018</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>2019</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>Selisih 2018 - 2017</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>%horizontal% 2018</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>Selisih 2019 - 2018</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>%horizontal% 2019</Text> 
          </View>
          <View style={styles.tableCol15}> 
            <Text style={styles.tableCell}>Keterangan</Text> 
          </View>
        </View>
        {props.data.aktivaTetap.map((a, index) => {
          return (
            <View style={styles.tableRow}> 
              <View style={styles.tableCol5}> 
                <Text style={styles.tableCell}>{index + 1}</Text> 
              </View> 
              <View style={styles.tableCol10}> 
                <Text style={styles.tableCell}>{a.akun}</Text> 
              </View> 
              <View style={styles.tableCol10}>
                <Text style={styles.tableCell}>{a.nilaiTahun1}</Text> 
              </View>
              <View style={styles.tableCol10}> 
                <Text style={styles.tableCell}>{a.nilaiTahun2}</Text> 
              </View> 
              <View style={styles.tableCol10}> 
                <Text style={styles.tableCell}>{a.nilaiTahun3}</Text> 
              </View> 
              <View style={styles.tableCol10}> 
                <Text style={styles.tableCell}>{a.nilaiTahun2 - a.nilaiTahun1}</Text> 
              </View> 
              <View style={styles.tableCol10}> 
                <Text style={styles.tableCell}>{a.nilaiTahun2 / a.nilaiTahun1}</Text> 
              </View> 
              <View style={styles.tableCol10}> 
                <Text style={styles.tableCell}>{a.nilaiTahun3 - a.nilaiTahun2}</Text> 
              </View> 
              <View style={styles.tableCol10}> 
                <Text style={styles.tableCell}>{a.nilaiTahun3 / a.nilaiTahun2}</Text> 
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
            <Text style={styles.tableCell}>{total1}</Text> 
          </View> 
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>{total2}</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>{total3}</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>{selisih1}</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>{hor1}</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>{selisih2}</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>{hor2}</Text> 
          </View>
          <View style={styles.tableCol15}> 
            <Text style={styles.tableCell}>Keterangan</Text> 
          </View>
        </View>
      </View>
    );
  }

  const TabelKewajibanLancar = () => {
    var i, total1=0, total2=0, total3=0, selisih1=0, selisih2=0, hor1=0, hor2=0;
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
            <Text style={styles.tableCell}>2017</Text> 
          </View> 
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>2018</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>2019</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>Selisih 2018 - 2017</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>%horizontal% 2018</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>Selisih 2019 - 2018</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>%horizontal% 2019</Text> 
          </View>
          <View style={styles.tableCol15}> 
            <Text style={styles.tableCell}>Keterangan</Text> 
          </View>
        </View>
        {props.data.kewajibanLancar.map((a, index) => {
          return (
            <View style={styles.tableRow}> 
              <View style={styles.tableCol5}> 
                <Text style={styles.tableCell}>{index + 1}</Text> 
              </View> 
              <View style={styles.tableCol10}> 
                <Text style={styles.tableCell}>{a.akun}</Text> 
              </View> 
              <View style={styles.tableCol10}>
                <Text style={styles.tableCell}>{a.nilaiTahun1}</Text> 
              </View>
              <View style={styles.tableCol10}> 
                <Text style={styles.tableCell}>{a.nilaiTahun2}</Text> 
              </View> 
              <View style={styles.tableCol10}> 
                <Text style={styles.tableCell}>{a.nilaiTahun3}</Text> 
              </View> 
              <View style={styles.tableCol10}> 
                <Text style={styles.tableCell}>{a.nilaiTahun2 - a.nilaiTahun1}</Text> 
              </View> 
              <View style={styles.tableCol10}> 
                <Text style={styles.tableCell}>{a.nilaiTahun2 / a.nilaiTahun1}</Text> 
              </View> 
              <View style={styles.tableCol10}> 
                <Text style={styles.tableCell}>{a.nilaiTahun3 - a.nilaiTahun2}</Text> 
              </View> 
              <View style={styles.tableCol10}> 
                <Text style={styles.tableCell}>{a.nilaiTahun3 / a.nilaiTahun2}</Text> 
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
            <Text style={styles.tableCell}>{total1}</Text> 
          </View> 
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>{total2}</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>{total3}</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>{selisih1}</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>{hor1}</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>{selisih2}</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>{hor2}</Text> 
          </View>
          <View style={styles.tableCol15}> 
            <Text style={styles.tableCell}>Keterangan</Text> 
          </View>
        </View>
      </View>
    );
  }

  const TabelLiabilitasPanjang = () => {
    var i, total1=0, total2=0, total3=0, selisih1=0, selisih2=0, hor1=0, hor2=0;
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
            <Text style={styles.tableCell}>2017</Text> 
          </View> 
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>2018</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>2019</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>Selisih 2018 - 2017</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>%horizontal% 2018</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>Selisih 2019 - 2018</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>%horizontal% 2019</Text> 
          </View>
          <View style={styles.tableCol15}> 
            <Text style={styles.tableCell}>Keterangan</Text> 
          </View>
        </View>
        {props.data.liabilitasPanjang.map((a, index) => {
          return (
            <View style={styles.tableRow}> 
              <View style={styles.tableCol5}> 
                <Text style={styles.tableCell}>{index + 1}</Text> 
              </View> 
              <View style={styles.tableCol10}> 
                <Text style={styles.tableCell}>{a.akun}</Text> 
              </View> 
              <View style={styles.tableCol10}>
                <Text style={styles.tableCell}>{a.nilaiTahun1}</Text> 
              </View>
              <View style={styles.tableCol10}> 
                <Text style={styles.tableCell}>{a.nilaiTahun2}</Text> 
              </View> 
              <View style={styles.tableCol10}> 
                <Text style={styles.tableCell}>{a.nilaiTahun3}</Text> 
              </View> 
              <View style={styles.tableCol10}> 
                <Text style={styles.tableCell}>{a.nilaiTahun2 - a.nilaiTahun1}</Text> 
              </View> 
              <View style={styles.tableCol10}> 
                <Text style={styles.tableCell}>{a.nilaiTahun2 / a.nilaiTahun1}</Text> 
              </View> 
              <View style={styles.tableCol10}> 
                <Text style={styles.tableCell}>{a.nilaiTahun3 - a.nilaiTahun2}</Text> 
              </View> 
              <View style={styles.tableCol10}> 
                <Text style={styles.tableCell}>{a.nilaiTahun3 / a.nilaiTahun2}</Text> 
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
            <Text style={styles.tableCell}>{total1}</Text> 
          </View> 
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>{total2}</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>{total3}</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>{selisih1}</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>{hor1}</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>{selisih2}</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>{hor2}</Text> 
          </View>
          <View style={styles.tableCol15}> 
            <Text style={styles.tableCell}>Keterangan</Text> 
          </View>
        </View>
      </View>
    );
  }

  const TabelEkuitas = () => {
    var i, total1=0, total2=0, total3=0, selisih1=0, selisih2=0, hor1=0, hor2=0;
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
            <Text style={styles.tableCell}>2017</Text> 
          </View> 
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>2018</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>2019</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>Selisih 2018 - 2017</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>%horizontal% 2018</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>Selisih 2019 - 2018</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>%horizontal% 2019</Text> 
          </View>
          <View style={styles.tableCol15}> 
            <Text style={styles.tableCell}>Keterangan</Text> 
          </View>
        </View>
        {props.data.ekuitas.map((a, index) => {
          return (
            <View style={styles.tableRow}> 
              <View style={styles.tableCol5}> 
                <Text style={styles.tableCell}>{index + 1}</Text> 
              </View> 
              <View style={styles.tableCol10}> 
                <Text style={styles.tableCell}>{a.akun}</Text> 
              </View> 
              <View style={styles.tableCol10}>
                <Text style={styles.tableCell}>{a.nilaiTahun1}</Text> 
              </View>
              <View style={styles.tableCol10}> 
                <Text style={styles.tableCell}>{a.nilaiTahun2}</Text> 
              </View> 
              <View style={styles.tableCol10}> 
                <Text style={styles.tableCell}>{a.nilaiTahun3}</Text> 
              </View> 
              <View style={styles.tableCol10}> 
                <Text style={styles.tableCell}>{a.nilaiTahun2 - a.nilaiTahun1}</Text> 
              </View> 
              <View style={styles.tableCol10}> 
                <Text style={styles.tableCell}>{a.nilaiTahun2 / a.nilaiTahun1}</Text> 
              </View> 
              <View style={styles.tableCol10}> 
                <Text style={styles.tableCell}>{a.nilaiTahun3 - a.nilaiTahun2}</Text> 
              </View> 
              <View style={styles.tableCol10}> 
                <Text style={styles.tableCell}>{a.nilaiTahun3 / a.nilaiTahun2}</Text> 
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
            <Text style={styles.tableCell}>{total1}</Text> 
          </View> 
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>{total2}</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>{total3}</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>{selisih1}</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>{hor1}</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>{selisih2}</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>{hor2}</Text> 
          </View>
          <View style={styles.tableCol15}> 
            <Text style={styles.tableCell}>Keterangan</Text> 
          </View>
        </View>
      </View>
    );
  }

  const TabelPendapatan = () => {
    var i, total1=0, total2=0, total3=0, selisih1=0, selisih2=0, hor1=0, hor2=0;
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
            <Text style={styles.tableCell}>2017</Text> 
          </View> 
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>2018</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>2019</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>Selisih 2018 - 2017</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>%horizontal% 2018</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>Selisih 2019 - 2018</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>%horizontal% 2019</Text> 
          </View>
          <View style={styles.tableCol15}> 
            <Text style={styles.tableCell}>Keterangan</Text> 
          </View>
        </View>
        {props.data.pendapatan.map((a, index) => {
          return (
            <View style={styles.tableRow}> 
              <View style={styles.tableCol5}> 
                <Text style={styles.tableCell}>{index + 1}</Text> 
              </View> 
              <View style={styles.tableCol10}> 
                <Text style={styles.tableCell}>{a.akun}</Text> 
              </View> 
              <View style={styles.tableCol10}>
                <Text style={styles.tableCell}>{a.nilaiTahun1}</Text> 
              </View>
              <View style={styles.tableCol10}> 
                <Text style={styles.tableCell}>{a.nilaiTahun2}</Text> 
              </View> 
              <View style={styles.tableCol10}> 
                <Text style={styles.tableCell}>{a.nilaiTahun3}</Text> 
              </View> 
              <View style={styles.tableCol10}> 
                <Text style={styles.tableCell}>{a.nilaiTahun2 - a.nilaiTahun1}</Text> 
              </View> 
              <View style={styles.tableCol10}> 
                <Text style={styles.tableCell}>{a.nilaiTahun2 / a.nilaiTahun1}</Text> 
              </View> 
              <View style={styles.tableCol10}> 
                <Text style={styles.tableCell}>{a.nilaiTahun3 - a.nilaiTahun2}</Text> 
              </View> 
              <View style={styles.tableCol10}> 
                <Text style={styles.tableCell}>{a.nilaiTahun3 / a.nilaiTahun2}</Text> 
              </View>
              <View style={styles.tableCol15}> 
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
            <Text style={styles.tableCell}>{total1}</Text> 
          </View> 
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>{total2}</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>{total3}</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>{selisih1}</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>{hor1}</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>{selisih2}</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>{hor2}</Text> 
          </View>
          <View style={styles.tableCol15}> 
            <Text style={styles.tableCell}>Keterangan</Text> 
          </View>
        </View>
      </View>
    );
  }

  const TabelHargaPokok = () => {
    var i, total1=0, total2=0, total3=0, selisih1=0, selisih2=0, hor1=0, hor2=0;
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
            <Text style={styles.tableCell}>2017</Text> 
          </View> 
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>2018</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>2019</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>Selisih 2018 - 2017</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>%horizontal% 2018</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>Selisih 2019 - 2018</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>%horizontal% 2019</Text> 
          </View>
          <View style={styles.tableCol15}> 
            <Text style={styles.tableCell}>Keterangan</Text> 
          </View>
        </View>
        {props.data.hargaPokok.map((a, index) => {
          return (
            <View style={styles.tableRow}> 
              <View style={styles.tableCol5}> 
                <Text style={styles.tableCell}>{index + 1}</Text> 
              </View> 
              <View style={styles.tableCol10}> 
                <Text style={styles.tableCell}>{a.akun}</Text> 
              </View> 
              <View style={styles.tableCol10}>
                <Text style={styles.tableCell}>{a.nilaiTahun1}</Text> 
              </View>
              <View style={styles.tableCol10}> 
                <Text style={styles.tableCell}>{a.nilaiTahun2}</Text> 
              </View> 
              <View style={styles.tableCol10}> 
                <Text style={styles.tableCell}>{a.nilaiTahun3}</Text> 
              </View> 
              <View style={styles.tableCol10}> 
                <Text style={styles.tableCell}>{a.nilaiTahun2 - a.nilaiTahun1}</Text> 
              </View> 
              <View style={styles.tableCol10}> 
                <Text style={styles.tableCell}>{a.nilaiTahun2 / a.nilaiTahun1}</Text> 
              </View> 
              <View style={styles.tableCol10}> 
                <Text style={styles.tableCell}>{a.nilaiTahun3 - a.nilaiTahun2}</Text> 
              </View> 
              <View style={styles.tableCol10}> 
                <Text style={styles.tableCell}>{a.nilaiTahun3 / a.nilaiTahun2}</Text> 
              </View>
              <View style={styles.tableCol15}> 
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
            <Text style={styles.tableCell}>{total1}</Text> 
          </View> 
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>{total2}</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>{total3}</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>{selisih1}</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>{hor1}</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>{selisih2}</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>{hor2}</Text> 
          </View>
          <View style={styles.tableCol15}> 
            <Text style={styles.tableCell}>Keterangan</Text> 
          </View>
        </View>
      </View>
    );
  }

  const TabelBiaya = () => {
    var i, total1=0, total2=0, total3=0, selisih1=0, selisih2=0, hor1=0, hor2=0;
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
            <Text style={styles.tableCell}>2017</Text> 
          </View> 
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>2018</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>2019</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>Selisih 2018 - 2017</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>%horizontal% 2018</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>Selisih 2019 - 2018</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>%horizontal% 2019</Text> 
          </View>
          <View style={styles.tableCol15}> 
            <Text style={styles.tableCell}>Keterangan</Text> 
          </View>
        </View>
        {props.data.biayaLaba.map((a, index) => {
          return (
            <View style={styles.tableRow}> 
              <View style={styles.tableCol5}> 
                <Text style={styles.tableCell}>{index + 1}</Text> 
              </View> 
              <View style={styles.tableCol10}> 
                <Text style={styles.tableCell}>{a.akun}</Text> 
              </View> 
              <View style={styles.tableCol10}>
                <Text style={styles.tableCell}>{a.nilaiTahun1}</Text> 
              </View>
              <View style={styles.tableCol10}> 
                <Text style={styles.tableCell}>{a.nilaiTahun2}</Text> 
              </View> 
              <View style={styles.tableCol10}> 
                <Text style={styles.tableCell}>{a.nilaiTahun3}</Text> 
              </View> 
              <View style={styles.tableCol10}> 
                <Text style={styles.tableCell}>{a.nilaiTahun2 - a.nilaiTahun1}</Text> 
              </View> 
              <View style={styles.tableCol10}> 
                <Text style={styles.tableCell}>{a.nilaiTahun2 / a.nilaiTahun1}</Text> 
              </View> 
              <View style={styles.tableCol10}> 
                <Text style={styles.tableCell}>{a.nilaiTahun3 - a.nilaiTahun2}</Text> 
              </View> 
              <View style={styles.tableCol10}> 
                <Text style={styles.tableCell}>{a.nilaiTahun3 / a.nilaiTahun2}</Text> 
              </View>
              <View style={styles.tableCol15}> 
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
            <Text style={styles.tableCell}>{total1}</Text> 
          </View> 
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>{total2}</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>{total3}</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>{selisih1}</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>{hor1}</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>{selisih2}</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>{hor2}</Text> 
          </View>
          <View style={styles.tableCol15}> 
            <Text style={styles.tableCell}>Keterangan</Text> 
          </View>
        </View>
      </View>
    );
  }

  const TabelBeban = () => {
    var i, total1=0, total2=0, total3=0, selisih1=0, selisih2=0, hor1=0, hor2=0;
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
            <Text style={styles.tableCell}>2017</Text> 
          </View> 
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>2018</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>2019</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>Selisih 2018 - 2017</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>%horizontal% 2018</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>Selisih 2019 - 2018</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>%horizontal% 2019</Text> 
          </View>
          <View style={styles.tableCol15}> 
            <Text style={styles.tableCell}>Keterangan</Text> 
          </View>
        </View>
        {props.data.pendapatanBeban.map((a, index) => {
          return (
            <View style={styles.tableRow}> 
              <View style={styles.tableCol5}> 
                <Text style={styles.tableCell}>{index + 1}</Text> 
              </View> 
              <View style={styles.tableCol10}> 
                <Text style={styles.tableCell}>{a.akun}</Text> 
              </View> 
              <View style={styles.tableCol10}>
                <Text style={styles.tableCell}>{a.nilaiTahun1}</Text> 
              </View>
              <View style={styles.tableCol10}> 
                <Text style={styles.tableCell}>{a.nilaiTahun2}</Text> 
              </View> 
              <View style={styles.tableCol10}> 
                <Text style={styles.tableCell}>{a.nilaiTahun3}</Text> 
              </View> 
              <View style={styles.tableCol10}> 
                <Text style={styles.tableCell}>{a.nilaiTahun2 - a.nilaiTahun1}</Text> 
              </View> 
              <View style={styles.tableCol10}> 
                <Text style={styles.tableCell}>{a.nilaiTahun2 / a.nilaiTahun1}</Text> 
              </View> 
              <View style={styles.tableCol10}> 
                <Text style={styles.tableCell}>{a.nilaiTahun3 - a.nilaiTahun2}</Text> 
              </View> 
              <View style={styles.tableCol10}> 
                <Text style={styles.tableCell}>{a.nilaiTahun3 / a.nilaiTahun2}</Text> 
              </View>
              <View style={styles.tableCol15}> 
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
            <Text style={styles.tableCell}>{total1}</Text> 
          </View> 
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>{total2}</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>{total3}</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>{selisih1}</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>{hor1}</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>{selisih2}</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>{hor2}</Text> 
          </View>
          <View style={styles.tableCol15}> 
            <Text style={styles.tableCell}>Keterangan</Text> 
          </View>
        </View>
      </View>
    );
  }

  const TabelTotalAset = () => {
    var i, total1=0, total2=0, total3=0, selisih1=0, selisih2=0, hor1=0, hor2=0;
    return (
    <View style={styles.table}> 
        <View style={styles.tableRow}> 
          <View style={styles.tableCol15}> 
            <Text style={styles.tableCell}>TOTAL ASET</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>{total1}</Text> 
          </View> 
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>{total2}</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>{total3}</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>{selisih1}</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>{hor1}</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>{selisih2}</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>{hor2}</Text> 
          </View>
          <View style={styles.tableCol15}> 
            <Text style={styles.tableCell}></Text> 
          </View>
        </View>
      </View>
    );
  }

  const TabelTotalLiabilitas = () => {
    var i, total1=0, total2=0, total3=0, selisih1=0, selisih2=0, hor1=0, hor2=0;
    return (
    <View style={styles.table}> 
        <View style={styles.tableRow}> 
          <View style={styles.tableCol15}> 
            <Text style={styles.tableCell}>TOTAL LIABILITAS</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>{total1}</Text> 
          </View> 
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>{total2}</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>{total3}</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>{selisih1}</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>{hor1}</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>{selisih2}</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>{hor2}</Text> 
          </View>
          <View style={styles.tableCol15}> 
            <Text style={styles.tableCell}></Text> 
          </View>
        </View>
      </View>
    );
  }

  const TabelTotalEkuitas = () => {
    var i, total1=0, total2=0, total3=0, selisih1=0, selisih2=0, hor1=0, hor2=0;
    return (
    <View style={styles.table}> 
        <View style={styles.tableRow}> 
          <View style={styles.tableCol15}> 
            <Text style={styles.tableCell}>TOTAL LIABILITAS & EKUITAS</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>{total1}</Text> 
          </View> 
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>{total2}</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>{total3}</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>{selisih1}</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>{hor1}</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>{selisih2}</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>{hor2}</Text> 
          </View>
          <View style={styles.tableCol15}> 
            <Text style={styles.tableCell}></Text> 
          </View>
        </View>
      </View>
    );
  }

  const TabelPersediaanAkhir = () => {
    var i, total1=0, total2=0, total3=0, selisih1=0, selisih2=0, hor1=0, hor2=0;
    return (
    <View style={styles.table}> 
        <View style={styles.tableRow}> 
          <View style={styles.tableCol15}> 
            <Text style={styles.tableCell}>Persediaan Akhir</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>{total1}</Text> 
          </View> 
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>{total2}</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>{total3}</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>{selisih1}</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>{hor1}</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>{selisih2}</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>{hor2}</Text> 
          </View>
          <View style={styles.tableCol15}> 
            <Text style={styles.tableCell}></Text> 
          </View>
        </View>
      </View>
    );
  }

  const TabelTotalHargaPokok = () => {
    var i, total1=0, total2=0, total3=0, selisih1=0, selisih2=0, hor1=0, hor2=0;
    return (
    <View style={styles.table}> 
        <View style={styles.tableRow}> 
          <View style={styles.tableCol15}> 
            <Text style={styles.tableCell}>TOTAL HARGA POKOK PENJUALAN</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>{total1}</Text> 
          </View> 
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>{total2}</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>{total3}</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>{selisih1}</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>{hor1}</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>{selisih2}</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>{hor2}</Text> 
          </View>
          <View style={styles.tableCol15}> 
            <Text style={styles.tableCell}></Text> 
          </View>
        </View>
      </View>
    );
  }

  const TabelGrosirProfit = () => {
    var i, total1=0, total2=0, total3=0, selisih1=0, selisih2=0, hor1=0, hor2=0;
    return (
    <View style={styles.table}> 
        <View style={styles.tableRow}> 
          <View style={styles.tableCol15}> 
            <Text style={styles.tableCell}>GROSIR PROFIT</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>{total1}</Text> 
          </View> 
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>{total2}</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>{total3}</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>{selisih1}</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>{hor1}</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>{selisih2}</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>{hor2}</Text> 
          </View>
          <View style={styles.tableCol15}> 
            <Text style={styles.tableCell}></Text> 
          </View>
        </View>
      </View>
    );
  }

  const TabelLabaRugi = () => {
    var i, total1=0, total2=0, total3=0, selisih1=0, selisih2=0, hor1=0, hor2=0;
    return (
    <View style={styles.table}> 
        <View style={styles.tableRow}> 
          <View style={styles.tableCol15}> 
            <Text style={styles.tableCell}>LABA RUGI OPERASIONAL</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>{total1}</Text> 
          </View> 
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>{total2}</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>{total3}</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>{selisih1}</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>{hor1}</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>{selisih2}</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>{hor2}</Text> 
          </View>
          <View style={styles.tableCol15}> 
            <Text style={styles.tableCell}></Text> 
          </View>
        </View>
      </View>
    );
  }

  const TabelLabaSebelum = () => {
    var i, total1=0, total2=0, total3=0, selisih1=0, selisih2=0, hor1=0, hor2=0;
    return (
    <View style={styles.table}> 
        <View style={styles.tableRow}> 
          <View style={styles.tableCol15}> 
            <Text style={styles.tableCell}>LABA (RUGI) SEBELUM PAJAK</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>{total1}</Text> 
          </View> 
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>{total2}</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>{total3}</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>{selisih1}</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>{hor1}</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>{selisih2}</Text> 
          </View>
          <View style={styles.tableCol10}> 
            <Text style={styles.tableCell}>{hor2}</Text> 
          </View>
          <View style={styles.tableCol15}> 
            <Text style={styles.tableCell}></Text> 
          </View>
        </View>
      </View>
    );
  }
  
  return (
  <Document>
    <Page size="A4" style={styles.page}>
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
          <Text style={{ fontSize: 7 }}>JL. SATRIA SUDIRMA, KOMPLEK PEMERINTAH KOTA TANGERANG, TANGERANG 15111</Text>
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
          <View style={{ paddingHorizontal: 12, paddingVertical: 10, flexDirection: 'row' }}>
            <View style={{ marginRight: 10 }}>
              <Text style={{ fontSize: 11 }}>Nama wajib pajak</Text>
              <Text style={{ fontSize: 11 }}>NPWP</Text>
              <Text style={{ fontSize: 11 }}>KPP</Text>
              <Text style={{ fontSize: 11 }}>Alamat</Text>
              <Text style={{ fontSize: 11 }}>KLU</Text>
              <Text style={{ fontSize: 11 }}>Tahun Pajak</Text>
            </View>
            <View>
              <Text style={{ fontSize: 11 }}>: {props.data.dataUmum[0].namaWajib}</Text>
              <Text style={{ fontSize: 11 }}>: {props.data.dataUmum[0].npwp}</Text>
              <Text style={{ fontSize: 11 }}>: {props.data.dataUmum[0].kpp}</Text>
              <Text style={{ fontSize: 11 }}>: {props.data.dataUmum[0].alamat}</Text>
              <Text style={{ fontSize: 11 }}>: {props.data.dataUmum[0].klu}</Text>
              <Text style={{ fontSize: 11 }}>: {props.data.dataUmum[0].tahunPajak}</Text>
            </View>
          </View>
          <Text style={{ fontSize: 11 }}>B. Kegiatan Usaha</Text>
          <Text style={{ paddingHorizontal: 12, paddingVertical: 10, fontSize: 11 }}>{props.data.dataUmum[0].kegiatanUsaha}</Text>
          <Text style={{ fontSize: 11 }}>C. Pohon Kepemilikan/Daftar Anggota Keluarga</Text>
          <View style={{ paddingHorizontal: 12, paddingVertical: 10 }}>
            <TabelPohonKepemilikan />
          </View>
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
              <View style={{marginTop: 16}}>
                <TabelTotalAset />
              </View>
            </View>
            <Text style={{ fontSize: 11 }}>2. Kewajiban</Text>
            <View style={{ paddingHorizontal: 12, paddingVertical: 12 }}>
              <Text style={{ fontSize: 11, marginBottom: 12 }}>a. Kewajiban Lancar</Text>
              <TabelKewajibanLancar />
              <Text style={{ fontSize: 11, paddingVertical: 12 }}>b. Liabilitas Jangka Panjang</Text>
              <TabelLiabilitasPanjang />
              <View style={{marginTop: 16}}>
                <TabelTotalLiabilitas />
              </View>
            </View>
            <Text style={{ fontSize: 11 }}>3. Ekuitas</Text>
            <View style={{ paddingHorizontal: 12, paddingVertical: 12 }}>
              <TabelEkuitas />
              <View style={{marginTop: 16}}>
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
              <View style={{marginTop: 16}}>
                <TabelPersediaanAkhir />
              </View>
              <View style={{marginTop: 16}}>
                <TabelTotalHargaPokok />
              </View>
              <View style={{marginTop: 24}}>
                <TabelGrosirProfit />
              </View>
            </View>
            <Text style={{ fontSize: 11 }}>3. Biaya-Biaya</Text>
            <View style={{ paddingHorizontal: 12, paddingVertical: 12 }}>
              <TabelBiaya />
              <View style={{marginTop: 16}}>
                <TabelLabaRugi />
              </View>
            </View>
            <Text style={{ fontSize: 11 }}>4. Pendapatan dan Beban Lain-Lain</Text>
            <View style={{ paddingHorizontal: 12, paddingVertical: 12 }}>
              <TabelBeban />
              <View style={{marginTop: 16}}>
                <TabelLabaSebelum />
              </View>
            </View>
          </View>
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
        <Text style={{ fontSize: 11 }}>IV. LAMPIRAN</Text>
        <View style={{ paddingVertical: 6, paddingHorizontal: 10 }}>
        <Text style={{ fontSize: 11 }}>{props.data.dataUmum[0].lampiran}</Text>
        </View>
        <Text style={{ fontSize: 11 }}>V. PENANDATANGANAN LPHt</Text>
        <View style={{ paddingVertical: 12, flexDirection: 'column' }}>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 1, paddingHorizontal: 15 }}>
              <Text style={{fontSize: 11}}>{props.data.dataUmum[0].jabatan1 } {props.data.dataUmum[0].unit1}</Text>
            </View>
            <View style={{ flex: 1, paddingHorizontal: 15 }}>
              <Text style={{fontSize: 11}}>{props.data.dataUmum[0].jabatan2 } {props.data.dataUmum[0].unit2}</Text>
            </View>
            <View style={{ flex: 1, paddingHorizontal: 15 }}>
              <Text style={{fontSize: 11}}>{props.data.dataUmum[0].jabatan3 } {props.data.dataUmum[0].unit3}</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 50 }}>
            <View style={{ flex: 1, paddingHorizontal: 15 }}>
              <Text style={{fontSize: 11}}>{props.data.dataUmum[0].nama1 }</Text>
            </View>
            <View style={{ flex: 1, paddingHorizontal: 15 }}>
              <Text style={{fontSize: 11}}>{props.data.dataUmum[0].nama2 }</Text>
            </View>
            <View style={{ flex: 1, paddingHorizontal: 15 }}>
              <Text style={{fontSize: 11}}>{props.data.dataUmum[0].nama3 }</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 30 }}>
            <View style={{ flex: 1, paddingHorizontal: 15 }}>
              
            </View>
            <View style={{ flex: 1, paddingHorizontal: 15 }}>
              <Text style={{fontSize: 11}}>Menyetujui</Text>
              <Text style={{fontSize: 11}}>{props.data.dataUmum[0].jabatan4 } {props.data.dataUmum[0].unit4}</Text>
            </View>
            <View style={{ flex: 1, paddingHorizontal: 15 }}>
              
            </View>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 50 }}>
            <View style={{ flex: 1, paddingHorizontal: 20 }}>
              
            </View>
            <View style={{ flex: 1, paddingHorizontal: 20 }}>
              <Text style={{fontSize: 11}}>{props.data.dataUmum[0].nama4 }</Text>
            </View>
            <View style={{ flex: 1, paddingHorizontal: 20 }}>
              
            </View>
          </View>
        </View>
      </View>
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
    borderTopWidth: 0 
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
    marginTop: 5, 
    fontSize: 9 
  }
});


export default Pdf;
