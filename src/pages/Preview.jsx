import React from 'react';
import { PDFViewer, StyleSheet } from '@react-pdf/renderer';
import {Chart} from 'react-google-charts'
import Pdf from './Pdf'


export default class Preview extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ready: true,
      foo: 'Unchanged Value',
      chartUrl: '',
      reference: '',
      chart_events: null,
      show: true,
    };
    this.data = [
      ['Nama', 'Modal']
    ]
  }

  componentDidMount() {

    // this.setState({
    //   'chartUrl': this.state.reference.chartWrapper.getChart().getImageURI()
    // })
    // this.setState({ ready: false });
    // setTimeout(()=>{
    //   this.setState({ ready: true });
    // }, 1);

    this.getChartData();

    let chart_events = [
       {
           eventName : 'ready',
           callback: (ChartRef) => {
             // Returns Chart so you can access props and  the ChartWrapper object from chart.wrapper
             this.setState({
               chartImageURI: ChartRef.chartWrapper.getChart().getImageURI(),
               show: false
             });
           },
       }
     ];
    this.setState({
      'chart_events' : chart_events,
    });
  }

  getChartData() {
    console.log(this.props.location.pdfProps.pohonKepemilikan)
    console.log(this.props.location.pdfProps.pohonKepemilikan.length)
    console.log(this.data)
    let i = 0;
    for (i; i < this.props.location.pdfProps.pohonKepemilikan.length; i++) {
      this.data.push([this.props.location.pdfProps.pohonKepemilikan[i].nama, Number(this.props.location.pdfProps.pohonKepemilikan[i].jmlModal)])
    }
    console.log(this.data)
  }

  render() {
    if (this.state.show) {
      return (
        <Chart chartType = "PieChart"
          // data = {[
          //   ['Task', 'Hours per Day'],
          //   ['Work', 11],
          //   ['Eat', 2],
          //   ['Commute', 3],
          //   ['Watch TV', 4],
          //   ['Sleep', 7],
          // ]}
          data={this.data}
          graph_id = "PieChart"
          width={"500px"}
          height={"300px"}
          chartPackage= {['controls']}
          chartEvents={this.state.chart_events}
          ref={(reference) => 
            this.GoogleChart = reference
        }/>
      )
    } else {
      return (
    
        <PDFViewer
          style={styles.page}>
          <Pdf data={{
            chartUri: this.state.chartImageURI,
            dataUmum: this.props.location.pdfProps.dataUmum,
            riwayatLaporan: this.props.location.pdfProps.riwayatLaporan,
            pohonKepemilikan: this.props.location.pdfProps.pohonKepemilikan,
            riwayatPengawasan: this.props.location.pdfProps.riwayatPengawasan,
            hasilPeriksa: this.props.location.pdfProps.hasilPeriksa,
            koreksiHasil: this.props.location.pdfProps.koreksiHasil,
            hasilKeberatan: this.props.location.pdfProps.hasilKeberatan,
            koreksiKeberatan: this.props.location.pdfProps.koreksiKeberatan,
            transferPricing: this.props.location.pdfProps.transferPricing,
            hasilKunjungan: this.props.location.pdfProps.hasilKunjungan,
            faktaLapangan: this.props.location.pdfProps.faktaLapangan,
            pengaduanMasyarakat: this.props.location.pdfProps.pengaduanMasyarakat,
            indikasiKetidakpatuhan: this.props.location.pdfProps.indikasiKetidakpatuhan,
            modusKetidakpatuhan: this.props.location.pdfProps.modusKetidakpatuhan,
            potensi: this.props.location.pdfProps.potensi,
            aktivaLancar: this.props.location.pdfProps.aktivaLancar,
            aktivaTetap: this.props.location.pdfProps.aktivaTetap,
            kewajibanLancar: this.props.location.pdfProps.kewajibanLancar,
            liabilitasPanjang: this.props.location.pdfProps.liabilitasPanjang,
            ekuitas: this.props.location.pdfProps.ekuitas,
            pendapatan: this.props.location.pdfProps.pendapatan,
            hargaPokok: this.props.location.pdfProps.hargaPokok,
            persediaanAkhir: this.props.location.pdfProps.persediaanAkhir,
            biayaLabaPenjualan: this.props.location.pdfProps.biayaLabaPenjualan,
            biayaLabaUmum: this.props.location.pdfProps.biayaLabaUmum,
            pendapatanBeban: this.props.location.pdfProps.pendapatanBeban,
            pajakLain: this.props.location.pdfProps.pajakLain,
            dataLampiran: this.props.location.pdfProps.dataLampiran
          }} />
        </PDFViewer>
      );
    }
    
  } 
}




// const Preview = (props) => {

//   const [chartUri, setChartUri] = useState();

//   const getChartUri = (text) => {
//     setChartUri(text)
//   }

//   console.log(chartUri);

//   useEffect(() => {
//     console.log(chartUri);
//   }, []);

//   return (
//     <div>
//     <PDFViewer
//       style={styles.page}>
//       <Pdf data={{
//         dataUmum: props.location.pdfProps.dataUmum,
//         riwayatLaporan: props.location.pdfProps.riwayatLaporan,
//         pohonKepemilikan: props.location.pdfProps.pohonKepemilikan,
//         riwayatPengawasan: props.location.pdfProps.riwayatPengawasan,
//         hasilPeriksa: props.location.pdfProps.hasilPeriksa,
//         koreksiHasil: props.location.pdfProps.koreksiHasil,
//         hasilKeberatan: props.location.pdfProps.hasilKeberatan,
//         koreksiKeberatan: props.location.pdfProps.koreksiKeberatan,
//         transferPricing: props.location.pdfProps.transferPricing,
//         hasilKunjungan: props.location.pdfProps.hasilKunjungan,
//         faktaLapangan: props.location.pdfProps.faktaLapangan,
//         pengaduanMasyarakat: props.location.pdfProps.pengaduanMasyarakat,
//         indikasiKetidakpatuhan: props.location.pdfProps.indikasiKetidakpatuhan,
//         modusKetidakpatuhan: props.location.pdfProps.modusKetidakpatuhan,
//         potensi: props.location.pdfProps.potensi,
//         aktivaLancar: props.location.pdfProps.aktivaLancar,
//         aktivaTetap: props.location.pdfProps.aktivaTetap,
//         kewajibanLancar: props.location.pdfProps.kewajibanLancar,
//         liabilitasPanjang: props.location.pdfProps.liabilitasPanjang,
//         ekuitas: props.location.pdfProps.ekuitas,
//         pendapatan: props.location.pdfProps.pendapatan,
//         hargaPokok: props.location.pdfProps.hargaPokok,
//         persediaanAkhir: props.location.pdfProps.persediaanAkhir,
//         biayaLabaPenjualan: props.location.pdfProps.biayaLabaPenjualan,
//         biayaLabaUmum: props.location.pdfProps.biayaLabaUmum,
//         pendapatanBeban: props.location.pdfProps.pendapatanBeban,
//         pajakLain: props.location.pdfProps.pajakLain,
//         dataLampiran: props.location.pdfProps.dataLampiran
//       }} />
//     </PDFViewer>
//     <Coba getChartUri={getChartUri} />
//     </div>
//   );

// }

const styles = StyleSheet.create({
  page: {
    width: '100%',
    height: window.innerHeight,
    objectFit: 'fill'
  }
});

// export default Preview;
