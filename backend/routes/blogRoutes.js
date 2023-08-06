import express from 'express'
import connection from '../utils/DBConnection.js'
import markdownParser from '../utils/markdownParser.js'
import dateParser from '../utils/parseDates.js'

const router = express.Router()

router.get('/', async (req, res) => {
    const response = await (await connection()).query('SELECT * FROM md.blogs')
    res.send(response.rows)
})

router.get('/:id', async (req, res) => {
    const response = await (await connection()).query(
        `SELECT * FROM md.blogs WHERE id = ${req.params.id}`
        )

    res.send({...response.rows[0], content: markdownParser(response.rows[0])})
})

router.post('/', async(req, res) => {
    const { title, content } = req.body

    try {
        console.log(dateParser(new Date()))
        const response = await (await connection()).query(
            `INSERT INTO md.blogs VALUES (DEFAULT, '${title}', 'description', '${content}', to_timestamp('${dateParser(new Date())}', 'YYYY-MM-DD HH24:MI:SS'))`
        )
        if (!response.rowCount) {
            return res.send(400).send("couldnt insert blog")
        }

        res.status(201).send('added blog successfully')
    } catch(err) {
        console.log(err)
        res.status(500).send("couldnt insert blog")
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const response = await (await connection()).query(`DELETE FROM md.blogs WHERE id = ${req.params.id} `)

        if (!response.rowCount) {
            return res.status(404).send('Blog doesnt exist')
        }

        res.status(200).send("blog deleted successfully")
    } catch (err) {
        console.log(err)
        res.status(500)
    }
})

export default router