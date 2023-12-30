<template>
    <div class="container">
        <h2 class="text-center">Products List</h2>
        <div class="row">
            <div class="col-md-12">
                <router-link :to="{ name: 'ProductCreate' }" class="btn btn-primary btn-sm float-right mb-2">Add
                    Product</router-link>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <table class="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Alamat</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(mahasiswa, key) of data" v-bind:key="key">
                            <td>{{ key + 1 }}</td>
                            <td>{{ mahasiswa.nama }}</td>
                            <td>
                                <router-link class="btn btn-success btn-sm"
                                    :to="{ name: 'ProductEdit', params: { mahasiswaId: mahasiswa.id } }">Edit</router-link>
                                <button class="btn btn-danger btn-sm" @click="deleteProduct(mahasiswa.id)">Delete</button>
                            </td>
                            <td>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            products: {}
        }
    },
    created() {
        this.getProducts();
    },
    methods: {
        getProducts() {
            this.axios.get('http://127.0.0.1:8000/api/mahasiswa')
                .then(response => {
                    this.products = response.data;
                });
        },
        deleteProduct(mahasiswaId) {
            this.axios
                .delete(`http://127.0.0.1:8000/api/mahasiswa/${mahasiswaId}`)
                .then(response => {
                    let i = this.products.map(data => data.id).indexOf(mahasiswaId);
                    this.products.splice(i, 1)
                });
        }
    }
}
</script>
