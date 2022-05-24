
async function consultar(client, rut) {
  await client.connect()

    const res = await client.query("SELECT * FROM estudiantes WHERE rut =$1 ", [rut]) 
    console.log("Registros: ", res.rows)
    client.end()
  }
  
  module.exports = consultar 
