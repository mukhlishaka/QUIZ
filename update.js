const {books} = require('./models');

books.update({
    price: 200000,
    is_publish: false
}, query)
    .then(() => {
    console.log("books berhasil diupdate")
    process.exit()
    })
    .catch(err => {
    console.error("Gagal mengupdate books!")
    })