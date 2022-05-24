
async function ingresar(client, rut, nombre, curso, nivel) {
  await client.connect()
  const res = await client.query("insert into estudiantes (rut, nombre, curso, nivel) values ($1, $2, $3, $4) RETURNING *;", [rut, nombre, curso, nivel]
  )
  console.log("Registro agregado", res.rows[0])
  console.log("Último rut", res.rows[0].rut)
  console.log("Cantidad de registros afectados", res.rowCount)
  console.log(
    "Campos del registro: ",
    res.fields.map((r) => r.name).join(" - ") 
  )
  client.end()
}

module.exports = ingresar 
