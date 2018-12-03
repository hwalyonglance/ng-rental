import { FormControl, FormGroup, Validators, AbstractControl, ValidatorFn } from '@angular/forms';

/**
 * nama_panggilan
 * j_saudara
 * tinggi_badan
 * berat_badan
 * hobby
 * no_seluler
 * email
 * status
 * eskul
 * kegiatan_di_luar_sekolah
 * prestasi
 * alamat {
 *  desa/kelurahan
 *  kota/kabupaten
 *  kecamatan
 *  blok
 *  no_rumah
 *  rt
 *  rw
 *  jarak_rumah_ke_sekolah
 * }
*/

export const SCHEMAS = {
	panggilan: { label: 'Nama Panggilan', minLength: 1, maxLength: 16, required: true, type: 'text' },
	jSaudara: { label: 'Jumlah Saudara', min: 0, max: 100, minLength: 1, maxLength: 2, required: true, step: 1, type: 'number' },
	tinggi: { label: 'Tinggi Badan', min: 0, max: 250, minLength: 1, maxLength: 3, required: true, step: .1, type: 'number' },
	berat: { label: 'Berat Badan', min: 0, max: 250, minLength: 1, maxLength: 3, required: true, step: .1, type: 'number' },
	hobby: { label: 'Hobby', minLength: 1, maxLength: 64, required: true, type: 'text' },
	noSeluler: { label: 'No. Seluler', minLength: 12, maxLength: 16, required: true, type: 'text' },
	email: { label: 'Email', minLength: 5, maxLength: 32, required: true, type: 'email' },
	kDiLuar: { label: 'Kegiatan di Luar Sekolah', minLength: 1, maxLength: 64, required: true, type: 'textarea' },
	prestasi: { label: 'Prestasi', minLength: 1, maxLength: 64, required: true, type: 'textarea' },
	status: {
		enum: ['Lengkap', 'Piatu', 'Yatim', 'Yatim Piatu'],
		label: 'Status', minLength: 1, maxLength: 1, required: true, type: 'MdSelect'
	},
	eskul: { comment: '[enum]: collect from db', label: 'Nama Panggilan', minLength: 1, maxLength: 16, multiple: true, required: true, type: 'MdSelect' },
	alamat: { label: 'Alamat', minLength: 1, maxLength: 64, required: true, type: 'textarea' },
	desa: { label: 'Desa/Kelurahan', minLength: 1, maxLength: 32, required: true, type: 'text' },
	kota: { label: 'Kota/Kabupaten', minLength: 1, maxLength: 32, required: true, type: 'text' },
	kecamatan: { label: 'Kecamatan', minLength: 1, maxLength: 32, required: true, type: 'text' },
	blok: { label: 'Blok', minLength: 1, maxLength: 4, required: true, type: 'text' },
	noRumah: { label: 'Nomor Rumah', minLength: 1, maxLength: 32, required: true, type: 'text' },
	rt: { label: 'RT', min: 1, max: 99, minLength: 1, maxLength: 2, required: true, step: 1, type: 'number' },
	rw: { label: 'RT', min: 1, max: 99, minLength: 1, maxLength: 2, required: true, step: 1, type: 'number' },
	jarak: { label: 'Jarak Ke Sekolah', min: 1, max: 1, minLength: 1, maxLength: 8, required: true, step: .1, type: 'number' }
};

export const BUILDER: any = {
	$id: [''],
	panggilan: ['', Validators.required],
	jSaudara: ['', Validators.required],
	tinggi: ['', Validators.required],
	berat: ['', Validators.required],
	hobby: ['', Validators.required],
	noSeluler: ['', Validators.required],
	email: ['', Validators.required],
	status: ['', Validators.required],
	eskul: ['', Validators.required],
	kDiLuar: ['', Validators.required],
	prestasi: ['', Validators.required],
	alamat: ['', Validators.required],
	desa: ['', Validators.required],
	kota: ['', Validators.required],
	kecamatan: ['', Validators.required],
	blok: ['', Validators.required],
	noRumah: ['', Validators.required],
	rt: ['', Validators.required],
	rw: ['', Validators.required],
	jarak: ['', Validators.required]
};
