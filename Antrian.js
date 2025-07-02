let antrian = []

function ambilAntrian() {
    const nama = document.getElementById("input-name").value.trim()

    if(!nama) {
        alert("isi nama lu bro")
    }

    antrian.push(nama)
    alert(`${nama} masuk keantrian`)
} 

function melayaniAntrian() {
    if(antrian.length===0) {
        alert("kosong masbro")

    return
    }
    const namaYangDilayani = antrian.shift()
}

function totalAntrian() {
    const totalJumlahAntrian = document.getElementById("jumlah-antrian")
    const daftarAntrian = document.getElementById("daftar-antrian")
    const listAntrian = ""

    for (let i = 0; i < antrian.length; i++) {
        listAntrian += `<li>${i+1}. ${antrian[i]}</li>`
    }

    daftarAntrian.innerHTML = listAntrian
}



