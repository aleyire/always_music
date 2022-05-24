
async function editar(client, rut, nivel) {

  await client.connect()
  const res = await client.query("UPDATE estudiantes SET nivel =$2 WHERE rut =$1 RETURNING *;", 
  [rut, nivel])
  console.log("Registro modificado", res.rows[0])
  console.log("Cantidad de registros afectados", res.rowCount)
  client.end() 
}

module.exports = editar
