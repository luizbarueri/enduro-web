import cors from 'cors'
import express from 'express'
import { download } from './downloads.js'
import { transcribe } from './transcribe.js'

const app = express()
app.use(cors())

app.get('/summary/:id', async (request, response) => {
  // watch?v=vhiWcWzgJsw&ab_channel=LuizAmaro
  await download(request.params.id)
  const result = await transcribe()
  response.json({ result: result }) //ou  response.json({ result })
})

app.listen(3333, () => console.log("Servidor escutando na porta 3333.  http://localhost:3333/summary"))