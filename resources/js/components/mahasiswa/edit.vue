<template>
    <div class="container">
        <h2 class="text-center">Edit Mahasiswa</h2>
        <div class="row">
            <div class="col-md-12">
                <router-link :to="{ name: 'MahasiswaIndex' }"
                    class="btn btn-primary btn-sm float-right mb-2">Back</router-link>
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
                    <button type="button" class="btn btn-primary" @click="updateMahasiswa()"> Update </button>
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
    mounted() {
        this.editMahasiswa(this.$route.params.mahasiswaId);
    },
    methods: {
        editProduct(mahasiswaId) {
            this.axios.get(`http://127.0.0.1:8000/api/mahasiswa/${mahasiswaId}`)
                .then((res) => {
                    this.product = res.data;
                });
        },
        updateProduct() {
            this.axios
                .patch(`http://127.0.0.1:8000/api/products/${this.$route.params.mahasiswaId}`, this.product)
                .then((res) => {
                    this.$router.push({ name: 'MahasiswaIndex' });
                });
        }
    }
}
</script>
