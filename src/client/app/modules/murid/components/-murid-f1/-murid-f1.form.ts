import { FormControl, FormGroup, Validators, AbstractControl, ValidatorFn } from '@angular/forms';

/**
 * nama
 * tempat_lahir
 * tanggal_lahir
 * dari_smp
 * nik
 * nomor_ijazah
 * nomor_nisn
 * nomor_skhu
 * lulus_pada_tahun
 * agama
 * golongan_darah
 * Jenis_kelamin
 * alamat {
 *  desa/kelurahan
 *  kota/kabupaten
 *  kecamatan
 *  blok
 *  nomor_rumah
 *  rt
 *  rw
 *  jarak_rumah_ke_sekolah
 * }
 */

export const SCHEMAS = {
	$id: { label: '$id', required: false, type: 'text' },
	nama: { label: 'Nama Lengkap', minLength: 1, maxLength: 64, required: true, type: 'text' },
	tempatL: { label: 'Tempat Lahir', minLength: 1, maxLength: 64, required: true, type: 'text' },
	tanggalL: { label: 'Tanggal Lahir', minLength: 10, maxLength: 10, required: true, type: 'MdDatepicker' },
	dari: { label: 'Dari SMP', minLength: 4, maxLength: 32, required: true, type: 'text' },
	nik: { label: 'Nomor Induk Keluarga', min: 1, max: 99999999999999999999, minLength: 20, maxLength: 20, required: true, step: 1, type: 'number' },
	ijazah: { label: 'Nomor Ijazah SMP', min: 1, max: 99999999999999999999, minLength: 20, maxLength: 20, required: true, step: 1, type: 'number' },
	nisn: { label: 'Nomor NISN', min: 1, max: 99999999999999999999, minLength: 20, maxLength: 20, required: true, step: 1, type: 'text' },
	skhun: { label: 'Nomor SKHUN SMP', min: 1, max: 99999999999999999999, minLength: 20, maxLength: 20, required: true, step: 1, type: 'text' },
	lulus: { label: 'Lulus Tahun', minLength: 10, maxLength: 10, required: true, type: 'MdDatepicker' },
	agama: { label: 'Agama', minLength: 1, maxLength: 32, required: true, type: 'text' },
	golDar: {
		enum: ['A', 'B', 'AB', 'O'],
		label: 'Golongan Darah', minLength: 1, maxLength: 2, required: true, type: 'MdSelect'
	},
	jk: {
		enum: ['Laki-Laki', 'Perempuan'],
		label: 'Jenis Kelamin', required: true, type: 'MdSelect'
	}
};
export const MESSAGES = {
	$id: { required: '$id is required.' },
	nama: {
		required: SCHEMAS.nama.label + ' is required.',
		minLength: SCHEMAS.nama.label + ' must be at least ' + SCHEMAS.nama.minLength + ' characters long.',
		maxLength: SCHEMAS.nama.label + ' cannot be more than ' + SCHEMAS.nama.maxLength + ' characters long.'
	}
};
export const VALIDATORS = {
	nama: [Validators.required, Validators.minLength(SCHEMAS.nama.minLength), Validators.maxLength(SCHEMAS.nama.maxLength)],
};
export const BUILDER: any = {
	$id: [''],
	nama: ['', VALIDATORS.nama],
	tempatL: ['', Validators.required],
	tanggalL: ['', Validators.required],
	dari: ['', Validators.required],
	nik: ['', Validators.required],
	ijazah: ['', Validators.required],
	nisn: ['', Validators.required],
	skhun: ['', Validators.required],
	lulus: ['', Validators.required],
	agama: ['', Validators.required],
	golDar: ['', Validators.required],
	jk: ['', Validators.required],
};
