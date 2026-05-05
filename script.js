function bukaMateri(event, namaMateri) {
    // 1. Sembunyikan semua kotak materi
    const semuaKonten = document.getElementsByClassName("content");
    for (let i = 0; i < semuaKonten.length; i++) {
        semuaKonten[i].classList.remove("active");
    }

    // 2. Matikan warna aktif di semua tombol
    const semuaTombol = document.getElementsByClassName("tab-btn");
    for (let i = 0; i < semuaTombol.length; i++) {
        semuaTombol[i].classList.remove("active");
    }

    // 3. Tampilkan materi yang dituju
    const target = document.getElementById(namaMateri);
    if (target) {
        target.classList.add("active");
        // 4. Nyalakan warna aktif pada tombol yang diklik
        event.currentTarget.classList.add("active");
    } else {
        console.error("ID '" + namaMateri + "' tidak ditemukan!");
    }
}

// --- FITUR QURAN ONLINE ---
// Ambil daftar surah saat halaman dimuat
fetch('https://equran.id')
    .then(res => res.json())
    .then(data => {
        const select = document.getElementById('pilih-surah');
        data.data.forEach(surah => {
            let opt = document.createElement('option');
            opt.value = surah.nomor;
            opt.innerHTML = `${surah.nomor}. ${surah.namaLatin} (${surah.nama})`;
            select.appendChild(opt);
        });
    });

function fiturCari() {
    // 1. Ambil kata kunci pencarian
    let input = document.getElementById('inputCari').value.toLowerCase();
    
    // 2. Ambil semua elemen yang ingin dicari (Materi dan Kartu Buku)
    let cards = document.querySelectorAll('.card, .card-latihan');
    let contents = document.querySelectorAll('.content');

}
