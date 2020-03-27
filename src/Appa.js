import React, { useState, Fragment } from 'react';
import logo from './assets/logo.jpg'
import "./app.scss"

const App = () => {

  const [riwayatLaporan, setRiwayatLaporan] = useState([
    { nomorLHA: '', sumberLHA: '', nilaiLHA: '' }
  ]);

  const handleSubmit = e => {
    e.preventDefault();
    console.log("inputFields", riwayatLaporan);
  }

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

  const handleAddRiwayatLaporan = () => {
    const values = [...riwayatLaporan];
    values.push({ nomorLHA: '', sumberLHA: '', nilaiLHA: '' });
    setRiwayatLaporan(values);
  }

  const handleRemoveRiwayatLaporan = index => {
    const values = [...riwayatLaporan];
    values.splice(index, 1);
    setRiwayatLaporan(values);
  }

  return (
    <form onSubmit={ handleSubmit }>
      <div className="header">
        <img className="logo" src={logo} alt="logo" />

        <div className="right">
          <h1 className="title">LAPORAN HASIL PENELITIAN</h1>


          <div className="input-form">
            <label className="label-large">NOMOR.</label>
            <input className="input is-dark input-wide" type="text" placeholder="" />
          </div>
        </div>
      </div>

      <div className="section-form">
        <p className="title-form">I. PROFIL WAJIB PAJAK</p>
        <div className="section-form-header">
          <p className="sub-title-form">A. Identitas Wajib Pajak</p>
          <div className="section-form-body section-form-flex">

            <div className="form-flex-left">
              <div className="input-form-standar">
                <label className="label-normal">Nama wajib pajak</label>
                <input className="input is-dark input-standar" type="text" placeholder="" />
              </div>

              <div className="input-form-standar">
                <label className="label-normal">NPWP</label>
                <input className="input is-dark input-standar" type="text" placeholder="" />
              </div>

              <div className="input-form-standar">
                <label className="label-normal">KPP</label>
                <input className="input is-dark input-standar" type="text" placeholder="" />
              </div>
            </div>

            <div className="form-flex-right">
              <div className="input-form-standar">
                <label className="label-normal">Alamat</label>
                <input className="input is-dark input-standar" type="text" placeholder="" />
              </div>

              <div className="input-form-standar">
                <label className="label-normal">KLU</label>
                <input className="input is-dark input-standar" type="text" placeholder="" />
              </div>

              <div className="input-form-standar">
                <label className="label-normal">Tahun Pajak</label>
                <input className="input is-dark input-standar" type="text" placeholder="" />
              </div>
            </div>
          </div>
        </div>

        <div className="section-form-header">
          <p className="sub-title-form">B. Kegiatan Usaha</p>
          <div className="section-form-body section-form-flex">
            <textarea className="textarea is-black has-fixed-size" placeholder="Kegiatan usaha"></textarea>
          </div>
        </div>

        <div className="section-form-header">
          <p className="sub-title-form">C. Pohon Kepemilikan/Daftar Anggota Keluarga</p>
          <div className="section-form-body section-form-flex">
            <div className="form-flex-left">
              <div className="input-form-standar">
                <label className="label-normal">Nama</label>
                <input className="input is-dark input-standar" type="text" placeholder="" />
              </div>

              <div className="input-form-standar">
                <label className="label-normal">Jumlah modal disetor</label>
                <input className="input is-dark input-standar" type="text" placeholder="" />
              </div>

              <div className="input-form-standar">
                <label className="label-normal">Dividen</label>
                <input className="input is-dark input-standar" type="text" placeholder="" />
              </div>
            </div>

            <div className="form-flex-right">
              <div className="input-form-standar">
                <label className="label-normal">Alamat</label>
                <input className="input is-dark input-standar" type="text" placeholder="" />
              </div>

              <div className="input-form-standar">
                <label className="label-normal">Persentase</label>
                <input className="input is-dark input-standar" type="text" placeholder="" />
              </div>
            </div>
          </div>
        </div>

        <div className="section-form-header">
          <p className="sub-title-form">D. Profil Resiko</p>
          <div className="section-form-body section-form-flex input-form-standar">
            <label className="label-normal label-wide">Level of Risk CRM Periode</label>
            <div class="select margin-right-20">
              <select>
                <option>Select dropdown</option>
                <option>With options</option>
              </select>
            </div>
            <div class="select">
              <select>
                <option>Select dropdown</option>
                <option>With options</option>
              </select>
            </div>
          </div>
        </div>

        <div className="section-form-header">
          <p className="sub-title-form">E. Riwayat Laporan Analisis</p>
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
                      onChange={ event => handleInputRiwayatLaporan(index, event) } />
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
                      onChange={ event => handleInputRiwayatLaporan(index, event) } />
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
                      value={riwayatLaporan.nilaiLHA}
                      onChange={event => handleInputRiwayatLaporan(index, event)} />
                  </div>
                </div>
              </div>
              <div className="btn-wrapper" style={{ marginBottom: 16 }}>
                  <button 
                    className="button is-warning"
                    type="button"
                    onClick={ () => handleAddRiwayatLaporan() }>Tambah</button>
                  <button 
                    className="button is-danger"
                    type="button"
                    style={{ marginLeft: 16 }}
                    onClick={ () => handleRemoveRiwayatLaporan(index) }>Hapus</button>
              </div>
            </Fragment>
          ))}
        </div>

        <div className="section-form-header">
          <p className="sub-title-form">F. Riwayat Pengawasan</p>
          <div className="section-form-body section-form-flex">
            <div className="form-flex-left">
              <div className="input-form-standar">
                <label className="label-normal">Nomor SP2DK</label>
                <input className="input is-dark input-standar" type="text" placeholder="" />
              </div>

              <div className="input-form-standar">
                <label className="label-normal">Jenis Pajak</label>
                <input className="input is-dark input-standar" type="text" placeholder="" />
              </div>

              <div className="input-form-standar">
                <label className="label-normal">Nilai Potensi Akhir</label>
                <input className="input is-dark input-standar" type="text" placeholder="" />
              </div>
            </div>

            <div className="form-flex-right">
              <div className="input-form-standar">
                <label className="label-normal">Status</label>
                <input className="input is-dark input-standar" type="text" placeholder="" />
              </div>

              <div className="input-form-standar">
                <label className="label-normal">Relasi</label>
                <input className="input is-dark input-standar" type="text" placeholder="" />
              </div>

              {/* <button className="button is-danger">Hapus</button> */}

            </div>
          </div>
          <div className="btn-wrapper form-flex-center">
              <button className="button is-warning">Tambah</button>
          </div>
        </div>

        <div className="section-form-header">
          <p className="sub-title-form">G. Riwayat Hasil Pemeriksaan</p>
          <div className="section-form-body section-form-flex">
            <div className="form-flex-left">
              <div className="input-form-standar">
                <label className="label-normal">Jenis Pajak</label>
                <input className="input is-dark input-standar" type="text" placeholder="" />
              </div>

              <div className="input-form-standar">
                <label className="label-normal">Tahun</label>
                <input className="input is-dark input-standar" type="text" placeholder="" />
              </div>

              <div className="input-form-standar">
                <label className="label-normal">CFM SPT</label>
                <input className="input is-dark input-standar" type="text" placeholder="" />
              </div>
            </div>

            <div className="form-flex-right">
              <div className="input-form-standar">
                <label className="label-normal">CFM Pemeriksaan</label>
                <input className="input is-dark input-standar" type="text" placeholder="" />
              </div>

              <div className="input-form-standar">
                <label className="label-normal">Koreksi</label>
                <input className="input is-dark input-standar" type="text" placeholder="" />
              </div>

              {/* <button className="button is-danger">Hapus</button> */}

            </div>
          </div>

          <div className="section-form-header">
            <div className="sub-title-form-wrapper">
              <p className="sub-title-form margin-right-20">Deskripsi Penjelasan Koreksi Hasil Pemeriksaan</p>
              {/* <button className="button is-danger">Hapus</button> */}
            </div>
            <div className="section-form-body section-form-flex">
              <div className="form-flex-left">
                <div className="input-form-standar">
                  <label className="label-normal">Tahun</label>
                  <input className="input is-dark input-standar" type="text" placeholder="" />
                </div>

                <div className="input-form-standar">
                  <label className="label-normal">Jenis Pajak</label>
                  <input className="input is-dark input-standar" type="text" placeholder="" />
                </div>
              </div>

              <div className="form-flex-right">
                <div className="input-form-standar">
                  <label className="label-normal">Sumber Koreksi</label>
                  <input className="input is-dark input-standar" type="text" placeholder="" />
                </div>

                <div className="input-form-standar">
                  <label className="label-normal">Alasan Koreksi</label>
                  <input className="input is-dark input-standar" type="text" placeholder="" />
                </div>
              </div>
            </div>

            <div className="btn-wrapper">
              <button className="button is-warning">Tambah</button>
            </div>
          </div>

          <button className="button is-warning">Tambah</button>
        </div>
      </div>

      <div className="section-form-header">
        <p className="sub-title-form">I. Profil Resiko Ketertagihan Pajak</p>
        <div className="section-form-body section-form-flex input-form-standar">
          <label className="label-normal label-wide">Keterangan Pajak</label>
          <div class="select">
            <select>
              <option>Select dropdown</option>
              <option>With options</option>
            </select>
          </div>
        </div>
      </div>

      <div className="section-form margin-section">
        <p className="title-form">II. ANALISIS DATA INFORMASI</p>
        <div className="section-form-header">
          <p className="sub-title-form">A. Analisis Laporan Keuangan</p>

          <div className="section-form-header">
            <p className="sub-title-form">Neraca</p>

            {/**KEWAJIBAN */}
            <div className="section-form-header">
              <p className="sub-title-form">1. Aktiva</p>
              <div className="section-form-header">
                <p className="sub-title-form">i. Aktiva Lancar</p>

                <div className="section-form-body section-form-flex">
                  <div className="form-flex-left">

                    <div className="input-form-standar">
                      <label className="label-normal label-normal-less-width">Akun</label>
                      <input className="input is-dark input-standar input-wide" type="text" placeholder="" />
                    </div>

                    <div className="input-form-standar">
                      <label className="label-normal label-normal-less-width">Tahun 1</label>
                      <div className="select input-narrow margin-right-20">
                        <select>
                          <option>Select dropdown</option>
                          <option>With options</option>
                        </select>
                      </div>
                      <input className="input is-dark input-narrow" type="text" placeholder="" />
                    </div>

                    <div className="input-form-standar">
                      <label className="label-normal label-normal-less-width">Tahun 2</label>
                      <div className="select input-narrow margin-right-20">
                        <select>
                          <option>Select dropdown</option>
                          <option>With options</option>
                        </select>
                      </div>
                      <input className="input is-dark input-narrow" type="text" placeholder="" />
                    </div>

                    <div className="input-form-standar">
                      <label className="label-normal label-normal-less-width">Tahun 3</label>
                      <div className="select input-narrow margin-right-20">
                        <select>
                          <option>Select dropdown</option>
                          <option>With options</option>
                        </select>
                      </div>
                      <input className="input is-dark input-narrow" type="text" placeholder="" />
                    </div>

                  </div>

                  <div className="form-flex-right">
                    <div className="input-form-standar input-form-align-top">
                      <label className="label-normal label-top">Keterangan</label>
                      <textarea className="textarea textarea-standar is-black has-fixed-size" placeholder=""></textarea>
                    </div>

                    {/* <button className="button is-danger">Hapus</button> */}

                  </div>

                </div>
                <button className="button is-warning">Tambah</button>

              </div>

              <div className="section-form-header">
                <p className="sub-title-form">ii. Aktiva Tetap</p>

                <div className="section-form-body section-form-flex">
                  <div className="form-flex-left">

                    <div className="input-form-standar">
                      <label className="label-normal label-normal-less-width">Akun</label>
                      <input className="input is-dark input-standar input-wide" type="text" placeholder="" />
                    </div>

                    <div className="input-form-standar">
                      <label className="label-normal label-normal-less-width">Tahun 1</label>
                      <div className="select input-narrow margin-right-20">
                        <select>
                          <option>Select dropdown</option>
                          <option>With options</option>
                        </select>
                      </div>
                      <input className="input is-dark input-narrow" type="text" placeholder="" />
                    </div>

                    <div className="input-form-standar">
                      <label className="label-normal label-normal-less-width">Tahun 2</label>
                      <div className="select input-narrow margin-right-20">
                        <select>
                          <option>Select dropdown</option>
                          <option>With options</option>
                        </select>
                      </div>
                      <input className="input is-dark input-narrow" type="text" placeholder="" />
                    </div>

                    <div className="input-form-standar">
                      <label className="label-normal label-normal-less-width">Tahun 3</label>
                      <div className="select input-narrow margin-right-20">
                        <select>
                          <option>Select dropdown</option>
                          <option>With options</option>
                        </select>
                      </div>
                      <input className="input is-dark input-narrow" type="text" placeholder="" />
                    </div>

                  </div>

                  <div className="form-flex-right">
                    <div className="input-form-standar input-form-align-top">
                      <label className="label-normal label-top">Keterangan</label>
                      <textarea className="textarea textarea-standar is-black has-fixed-size" placeholder=""></textarea>
                    </div>

                    {/* <button className="button is-danger">Hapus</button> */}

                  </div>
                </div>

                <button className="button is-warning">Tambah</button>
              </div>

            </div>

            {/**KEWAJIBAN */}
            <div className="section-form-header">
              <p className="sub-title-form">2. Kewajiban</p>
              <div className="section-form-header">
                <p className="sub-title-form">i. Kewajiban Lancar</p>

                <div className="section-form-body section-form-flex">
                  <div className="form-flex-left">

                    <div className="input-form-standar">
                      <label className="label-normal label-normal-less-width">Akun</label>
                      <input className="input is-dark input-standar input-wide" type="text" placeholder="" />
                    </div>

                    <div className="input-form-standar">
                      <label className="label-normal label-normal-less-width">Tahun 1</label>
                      <div className="select input-narrow margin-right-20">
                        <select>
                          <option>Select dropdown</option>
                          <option>With options</option>
                        </select>
                      </div>
                      <input className="input is-dark input-narrow" type="text" placeholder="" />
                    </div>

                    <div className="input-form-standar">
                      <label className="label-normal label-normal-less-width">Tahun 2</label>
                      <div className="select input-narrow margin-right-20">
                        <select>
                          <option>Select dropdown</option>
                          <option>With options</option>
                        </select>
                      </div>
                      <input className="input is-dark input-narrow" type="text" placeholder="" />
                    </div>

                    <div className="input-form-standar">
                      <label className="label-normal label-normal-less-width">Tahun 3</label>
                      <div className="select input-narrow margin-right-20">
                        <select>
                          <option>Select dropdown</option>
                          <option>With options</option>
                        </select>
                      </div>
                      <input className="input is-dark input-narrow" type="text" placeholder="" />
                    </div>

                  </div>

                  <div className="form-flex-right">
                    <div className="input-form-standar input-form-align-top">
                      <label className="label-normal label-top">Keterangan</label>
                      <textarea className="textarea textarea-standar is-black has-fixed-size" placeholder=""></textarea>
                    </div>

                    {/* <button className="button is-danger">Hapus</button> */}

                  </div>

                </div>
                <button className="button is-warning">Tambah</button>

              </div>

              <div className="section-form-header">
                <p className="sub-title-form">ii. Liabilitas Jangka Panjang</p>

                <div className="section-form-body section-form-flex">
                  <div className="form-flex-left">

                    <div className="input-form-standar">
                      <label className="label-normal label-normal-less-width">Akun</label>
                      <input className="input is-dark input-standar input-wide" type="text" placeholder="" />
                    </div>

                    <div className="input-form-standar">
                      <label className="label-normal label-normal-less-width">Tahun 1</label>
                      <div className="select input-narrow margin-right-20">
                        <select>
                          <option>Select dropdown</option>
                          <option>With options</option>
                        </select>
                      </div>
                      <input className="input is-dark input-narrow" type="text" placeholder="" />
                    </div>

                    <div className="input-form-standar">
                      <label className="label-normal label-normal-less-width">Tahun 2</label>
                      <div className="select input-narrow margin-right-20">
                        <select>
                          <option>Select dropdown</option>
                          <option>With options</option>
                        </select>
                      </div>
                      <input className="input is-dark input-narrow" type="text" placeholder="" />
                    </div>

                    <div className="input-form-standar">
                      <label className="label-normal label-normal-less-width">Tahun 3</label>
                      <div className="select input-narrow margin-right-20">
                        <select>
                          <option>Select dropdown</option>
                          <option>With options</option>
                        </select>
                      </div>
                      <input className="input is-dark input-narrow" type="text" placeholder="" />
                    </div>

                  </div>

                  <div className="form-flex-right">
                    <div className="input-form-standar input-form-align-top">
                      <label className="label-normal label-top">Keterangan</label>
                      <textarea className="textarea textarea-standar is-black has-fixed-size" placeholder=""></textarea>
                    </div>

                    {/* <button className="button is-danger">Hapus</button> */}

                  </div>
                </div>

                <button className="button is-warning">Tambah</button>
              </div>

            </div>
          </div>

          {/**EKUITAS */}
          <div className="section-form-header">
            <p className="sub-title-form">3. Ekuitas</p>

            <div className="section-form-body section-form-flex">
              <div className="form-flex-left">

                <div className="input-form-standar">
                  <label className="label-normal label-normal-less-width">Akun</label>
                  <input className="input is-dark input-standar input-wide" type="text" placeholder="" />
                </div>

                <div className="input-form-standar">
                  <label className="label-normal label-normal-less-width">Tahun 1</label>
                  <div className="select input-narrow margin-right-20">
                    <select>
                      <option>Select dropdown</option>
                      <option>With options</option>
                    </select>
                  </div>
                  <input className="input is-dark input-narrow" type="text" placeholder="" />
                </div>

                <div className="input-form-standar">
                  <label className="label-normal label-normal-less-width">Tahun 2</label>
                  <div className="select input-narrow margin-right-20">
                    <select>
                      <option>Select dropdown</option>
                      <option>With options</option>
                    </select>
                  </div>
                  <input className="input is-dark input-narrow" type="text" placeholder="" />
                </div>

                <div className="input-form-standar">
                  <label className="label-normal label-normal-less-width">Tahun 3</label>
                  <div className="select input-narrow margin-right-20">
                    <select>
                      <option>Select dropdown</option>
                      <option>With options</option>
                    </select>
                  </div>
                  <input className="input is-dark input-narrow" type="text" placeholder="" />
                </div>

              </div>

              <div className="form-flex-right">
                <div className="input-form-standar input-form-align-top">
                  <label className="label-normal label-top">Keterangan</label>
                  <textarea className="textarea textarea-standar is-black has-fixed-size" placeholder=""></textarea>
                </div>

                {/* <button className="button is-danger">Hapus</button> */}

              </div>

            </div>
            <button className="button is-warning">Tambah</button>

          </div>

          {/**LABA RUGI */}
          <div className="section-form-header">
            <p className="sub-title-form">Laba Rugi</p>
            <div className="section-form-header">
              <p className="sub-title-form">1. Pendapatan</p>

              <div className="section-form-body section-form-flex">
                <div className="form-flex-left">

                  <div className="input-form-standar">
                    <label className="label-normal label-normal-less-width">Akun</label>
                    <input className="input is-dark input-standar input-wide" type="text" placeholder="" />
                  </div>

                  <div className="input-form-standar">
                    <label className="label-normal label-normal-less-width">Tahun 1</label>
                    <div className="select input-narrow margin-right-20">
                      <select>
                        <option>Select dropdown</option>
                        <option>With options</option>
                      </select>
                    </div>
                    <input className="input is-dark input-narrow" type="text" placeholder="" />
                  </div>

                  <div className="input-form-standar">
                    <label className="label-normal label-normal-less-width">Tahun 2</label>
                    <div className="select input-narrow margin-right-20">
                      <select>
                        <option>Select dropdown</option>
                        <option>With options</option>
                      </select>
                    </div>
                    <input className="input is-dark input-narrow" type="text" placeholder="" />
                  </div>

                  <div className="input-form-standar">
                    <label className="label-normal label-normal-less-width">Tahun 3</label>
                    <div className="select input-narrow margin-right-20">
                      <select>
                        <option>Select dropdown</option>
                        <option>With options</option>
                      </select>
                    </div>
                    <input className="input is-dark input-narrow" type="text" placeholder="" />
                  </div>

                </div>

                <div className="form-flex-right">
                  <div className="input-form-standar input-form-align-top">
                    <label className="label-normal label-top">Keterangan</label>
                    <textarea className="textarea textarea-standar is-black has-fixed-size" placeholder=""></textarea>
                  </div>

                  {/* <button className="button is-danger">Hapus</button> */}

                </div>

              </div>
              <button className="button is-warning">Tambah</button>

            </div>

            <div className="section-form-header">
              <p className="sub-title-form">2. Harga Pokok Penjualan</p>

              <div className="section-form-body section-form-flex">
                <div className="form-flex-left">

                  <div className="input-form-standar">
                    <label className="label-normal label-normal-less-width">Akun</label>
                    <input className="input is-dark input-standar input-wide" type="text" placeholder="" />
                  </div>

                  <div className="input-form-standar">
                    <label className="label-normal label-normal-less-width">Tahun 1</label>
                    <div className="select input-narrow margin-right-20">
                      <select>
                        <option>Select dropdown</option>
                        <option>With options</option>
                      </select>
                    </div>
                    <input className="input is-dark input-narrow" type="text" placeholder="" />
                  </div>

                  <div className="input-form-standar">
                    <label className="label-normal label-normal-less-width">Tahun 2</label>
                    <div className="select input-narrow margin-right-20">
                      <select>
                        <option>Select dropdown</option>
                        <option>With options</option>
                      </select>
                    </div>
                    <input className="input is-dark input-narrow" type="text" placeholder="" />
                  </div>

                  <div className="input-form-standar">
                    <label className="label-normal label-normal-less-width">Tahun 3</label>
                    <div className="select input-narrow margin-right-20">
                      <select>
                        <option>Select dropdown</option>
                        <option>With options</option>
                      </select>
                    </div>
                    <input className="input is-dark input-narrow" type="text" placeholder="" />
                  </div>

                </div>

                <div className="form-flex-right">
                  <div className="input-form-standar input-form-align-top">
                    <label className="label-normal label-top">Keterangan</label>
                    <textarea className="textarea textarea-standar is-black has-fixed-size" placeholder=""></textarea>
                  </div>

                  {/* <button className="button is-danger">Hapus</button> */}

                </div>
              </div>

              <button className="button is-warning">Tambah</button>
            </div>

            <div className="section-form-header">
              <p className="sub-title-form">3. Persediaan Tersedia Dijual</p>

              <div className="section-form-body section-form-flex">
                <div className="form-flex-left">

                  <div className="input-form-standar">
                    <label className="label-normal label-normal-less-width">Akun</label>
                    <input className="input is-dark input-standar input-wide" type="text" placeholder="" />
                  </div>

                  <div className="input-form-standar">
                    <label className="label-normal label-normal-less-width">Tahun 1</label>
                    <div className="select input-narrow margin-right-20">
                      <select>
                        <option>Select dropdown</option>
                        <option>With options</option>
                      </select>
                    </div>
                    <input className="input is-dark input-narrow" type="text" placeholder="" />
                  </div>

                  <div className="input-form-standar">
                    <label className="label-normal label-normal-less-width">Tahun 2</label>
                    <div className="select input-narrow margin-right-20">
                      <select>
                        <option>Select dropdown</option>
                        <option>With options</option>
                      </select>
                    </div>
                    <input className="input is-dark input-narrow" type="text" placeholder="" />
                  </div>

                  <div className="input-form-standar">
                    <label className="label-normal label-normal-less-width">Tahun 3</label>
                    <div className="select input-narrow margin-right-20">
                      <select>
                        <option>Select dropdown</option>
                        <option>With options</option>
                      </select>
                    </div>
                    <input className="input is-dark input-narrow" type="text" placeholder="" />
                  </div>

                </div>

                <div className="form-flex-right">
                  <div className="input-form-standar input-form-align-top">
                    <label className="label-normal label-top">Keterangan</label>
                    <textarea className="textarea textarea-standar is-black has-fixed-size" placeholder=""></textarea>
                  </div>

                  {/* <button className="button is-danger">Hapus</button> */}

                </div>
              </div>

              <button className="button is-warning">Tambah</button>
            </div>

            <div className="section-form-header">
              <p className="sub-title-form">4. Biaya-biaya</p>

              <div className="section-form-body section-form-flex">
                <div className="form-flex-left">

                  <div className="input-form-standar">
                    <label className="label-normal label-normal-less-width">Akun</label>
                    <input className="input is-dark input-standar input-wide" type="text" placeholder="" />
                  </div>

                  <div className="input-form-standar">
                    <label className="label-normal label-normal-less-width">Tahun 1</label>
                    <div className="select input-narrow margin-right-20">
                      <select>
                        <option>Select dropdown</option>
                        <option>With options</option>
                      </select>
                    </div>
                    <input className="input is-dark input-narrow" type="text" placeholder="" />
                  </div>

                  <div className="input-form-standar">
                    <label className="label-normal label-normal-less-width">Tahun 2</label>
                    <div className="select input-narrow margin-right-20">
                      <select>
                        <option>Select dropdown</option>
                        <option>With options</option>
                      </select>
                    </div>
                    <input className="input is-dark input-narrow" type="text" placeholder="" />
                  </div>

                  <div className="input-form-standar">
                    <label className="label-normal label-normal-less-width">Tahun 3</label>
                    <div className="select input-narrow margin-right-20">
                      <select>
                        <option>Select dropdown</option>
                        <option>With options</option>
                      </select>
                    </div>
                    <input className="input is-dark input-narrow" type="text" placeholder="" />
                  </div>

                </div>

                <div className="form-flex-right">
                  <div className="input-form-standar input-form-align-top">
                    <label className="label-normal label-top">Keterangan</label>
                    <textarea className="textarea textarea-standar is-black has-fixed-size" placeholder=""></textarea>
                  </div>

                  {/* <button className="button is-danger">Hapus</button> */}

                </div>
              </div>

              <button className="button is-warning">Tambah</button>
            </div>

            <div className="section-form-header">
              <p className="sub-title-form">5. Pendapatan dan Beban lain-lain</p>

              <div className="section-form-body section-form-flex">
                <div className="form-flex-left">

                  <div className="input-form-standar">
                    <label className="label-normal label-normal-less-width">Akun</label>
                    <input className="input is-dark input-standar input-wide" type="text" placeholder="" />
                  </div>

                  <div className="input-form-standar">
                    <label className="label-normal label-normal-less-width">Tahun 1</label>
                    <div className="select input-narrow margin-right-20">
                      <select>
                        <option>Select dropdown</option>
                        <option>With options</option>
                      </select>
                    </div>
                    <input className="input is-dark input-narrow" type="text" placeholder="" />
                  </div>

                  <div className="input-form-standar">
                    <label className="label-normal label-normal-less-width">Tahun 2</label>
                    <div className="select input-narrow margin-right-20">
                      <select>
                        <option>Select dropdown</option>
                        <option>With options</option>
                      </select>
                    </div>
                    <input className="input is-dark input-narrow" type="text" placeholder="" />
                  </div>

                  <div className="input-form-standar">
                    <label className="label-normal label-normal-less-width">Tahun 3</label>
                    <div className="select input-narrow margin-right-20">
                      <select>
                        <option>Select dropdown</option>
                        <option>With options</option>
                      </select>
                    </div>
                    <input className="input is-dark input-narrow" type="text" placeholder="" />
                  </div>

                </div>

                <div className="form-flex-right">
                  <div className="input-form-standar input-form-align-top">
                    <label className="label-normal label-top">Keterangan</label>
                    <textarea className="textarea textarea-standar is-black has-fixed-size" placeholder=""></textarea>
                  </div>

                  {/* <button className="button is-danger">Hapus</button> */}

                </div>
              </div>

              <button className="button is-warning">Tambah</button>
            </div>


          </div>
        </div>

        {/**Analisis Transfer Pricing dan Aspek Perpajakan Internasional*/}
        <div className="section-form-header">
          <p className="sub-title-form">B. Analisis Transfer Pricing dan Aspek Perpajakan Internasional</p>

          <div className="section-form-body section-form-flex">
            <textarea className="textarea is-black has-fixed-size" placeholder=""></textarea>
          </div>
        </div>

        {/**Fakta Lapangan*/}
        <div className="section-form-header">
          <p className="sub-title-form">C. Fakta Lapangan</p>

          <div className="section-form-header">
            <p className="sub-title-form">1. Hasil Kunjungan</p>

            <div className="section-form-body section-form-flex">
              <div className="form-flex-left">

                <div className="input-form-standar">
                  <label className="label-normal">Nomor</label>
                  <input className="input is-dark input-standar input-wide" type="text" placeholder="" />
                </div>

                <div className="input-form-standar">
                  <label className="label-normal">Tanggal</label>
                  <input className="input is-dark input-standar input-wide" type="text" placeholder="" />
                </div>

                <div className="input-form-standar">
                  <label className="label-normal">Hasil Kunugan</label>
                  <input className="input is-dark input-standar input-wide" type="text" placeholder="" />
                </div>
              </div>
            </div>

            <button className="button is-warning">Tambah</button>

          </div>

          <div className="section-form-header">
            <p className="sub-title-form">2. Fakta Lapangan Lainnya</p>
            <div className="section-form-body section-form-flex">
              <textarea className="textarea is-black has-fixed-size" placeholder=""></textarea>
            </div>
          </div>

          <div className="section-form-header">
            <p className="sub-title-form">3. Pengaduan Masyarakat</p>


            <div className="section-form-body section-form-flex">

              <div className="form-flex-left">
                <div className="input-form-standar">
                  <label className="label-normal">Tahun Pajak</label>
                  <input className="input is-dark input-standar" type="text" placeholder="" />
                </div>

                <div className="input-form-standar">
                  <label className="label-normal">Jenis Data</label>
                  <input className="input is-dark input-standar" type="text" placeholder="" />
                </div>

                <div className="input-form-standar">
                  <label className="label-normal">Tindak Lanjut Surat Pengaduan</label>
                  <input className="input is-dark input-standar" type="text" placeholder="" />
                </div>
              </div>

              <div className="form-flex-right">
                <div className="input-form-standar">
                  <label className="label-normal">Nilai Data</label>
                  <input className="input is-dark input-standar" type="text" placeholder="" />
                </div>

                <div className="input-form-standar">
                  <label className="label-normal">Modus Operandi</label>
                  <input className="input is-dark input-standar" type="text" placeholder="" />
                </div>

                {/* <button className="button is-danger">Hapus</button> */}
              </div>

            </div>
            <button className="button is-warning">Tambah</button>
          </div>
        </div>

      </div>

      <div className="section-form margin-section">
        <p className="title-form">III. KESIMPULAN DAN SARAN</p>
        <div className="section-form-header">
          <p className="sub-title-form">A. Wajib Pajak telah memenuhi kewajiban perpajakan</p>
          <div className="section-form-body section-form-flex">
            <textarea className="textarea is-black has-fixed-size" placeholder=""></textarea>
          </div>
        </div>

        <div className="section-form-header">
          <p className="sub-title-form">B. Wajib Pajak diusulkan permintaan penjelasan atas data dan/atau keterangan (terdapat tax gap)</p>
          <div className="section-form-header">
            <p className="sub-title-form">1. Indikasi ketidak patuhan</p>
            <div className="input-form-standar">
              <input className="input is-dark input-standar input-wide" type="text" placeholder="" />
            </div>
          </div>

          <div className="section-form-header">
            <p className="sub-title-form">2. Modus ketidakpatuhan</p>
            <div className="input-form-standar">
              <input className="input is-dark input-standar input-wide" type="text" placeholder="" />
            </div>
          </div>

          <div className="section-form-header">
            <p className="sub-title-form">3. Potensi</p>


            <div className="section-form-body section-form-flex">

              <div className="form-flex-left">
                <div className="input-form-standar">
                  <label className="label-normal">Tahun Pajak</label>
                  <input className="input is-dark input-standar" type="text" placeholder="" />
                </div>

                <div className="input-form-standar">
                  <label className="label-normal">Jenis Data</label>
                  <input className="input is-dark input-standar" type="text" placeholder="" />
                </div>
              </div>

              <div className="form-flex-right">
                <div className="input-form-standar">
                  <label className="label-normal">Nilai Potensi</label>
                  <input className="input is-dark input-standar" type="text" placeholder="" />
                </div>

                {/* <button className="button is-danger">Hapus</button> */}
              </div>

            </div>
            <button className="button is-warning">Tambah</button>
          </div>
        </div>
      </div>

      <div className="section-form margin-section">
        <p className="title-form">IV. LAMPIRAN</p>
        <div className="section-form-body section-form-flex">
          <textarea className="textarea is-black has-fixed-size" placeholder=""></textarea>
        </div>
      </div>


      <div className="btn-wrapper margin-section">
        <button className="button is-info">Review</button>
      </div>

      <div className="footer">
        <p className="text">Direktorat Jendral Pajak</p>
        <p className="text">Kantor Pelayanan Pajak Pratama Wilayah Tangerang</p>
        <p className="text">2020</p>
      </div>

    </form>
  );
}

export default App;
