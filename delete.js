const {books} = require('./models');

Article.destroy({
    where: {
    is_publish: false
    }
})
.then(() => console.log("Artikel yang belum di approve sudah dihapus"))