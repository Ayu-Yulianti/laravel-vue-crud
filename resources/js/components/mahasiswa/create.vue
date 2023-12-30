<template>
    <div class="container">
        <h2 class="text-center">Tambah Mahasiswa</h2>
        <div class="row">
            <div class="col-md-12">
                <router-link :to="{ name: 'MahasiswaIndex' }"
                    class="btn btn-primary btn-sm float-right mb-2">Kembali</router-link>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <form>
                    <div class="form-group">
                        <label>Nama</label>
                        <input type="text" class="form-control" v-model="mahasiswa.nama">
                    </div>
                    <div class="form-group">
                        <label>Alamat</label>
                        <textarea type="text" rows="5" class="form-control" v-model="mahasiswa.alamat"></textarea>
                    </div>
                    <button type="button" class="btn btn-primary" @click="createMahasiswa()">Create</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            product: {}
        }
    },
    methods: {
        createMahasiswa() {
            this.axios.post('http://127.0.0.1:8000/api/mahasiswa', this.mahasiswa)
                .then(response => (
                    this.$router.push({ name: 'MahasiswaIndex' })
                ))
                .catch(err => console.log(err))
                .finally(() => this.loading = false)
        }
    }
}
</script>
