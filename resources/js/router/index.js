import MahasiswaIndex from './components/mahasiswa/index.vue';
import MahasiswaCreate from './components/mahasiswa/create.vue';
import MahasiswaEdit from './components/mahasiswa/edit.vue';

export const routes = [
    {
        path: '/mahasiswa',
        component: MahasiswaIndex,
        name: "MahasiswaIndex"
    },
    {
        path: '/mahasiswa/create',
        component: MahasiswaCreate,
        name: "MahasiswaCreate"
    },
    {
        path: '/mahasiswa/edit/:id',
        component: MahasiswaEdit,
        name: "MahasiswaEdit"
    }
];
