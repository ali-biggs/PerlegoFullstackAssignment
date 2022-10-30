const getConnection = require("./db")

const getBook = async id => {
    const connection = await getConnection()
    return connection.execute(
        "select b.Title_DistinctivetitlebookCovertitle_TitleText, b.Publisher_PublisherName"
        [id]
    )
}

module.exports = {
    getBook
}