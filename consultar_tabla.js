async function consultarTabla(client) {
  await client.connect()

  const res = await client.query("SELECT * FROM estudiantes ", [])
  console.log("Registros: ", res.rows)
  client.end()
  }

module.exports = consultarTabla
