async function eliminar(client, rut) {
  await client.connect()

  const res = await client.query("DELETE FROM estudiantes WHERE rut =$1 ", [rut])

  console.log("Cantidad de registros afectados", res.rowCount)
  client.end()
}

module.exports = eliminar
