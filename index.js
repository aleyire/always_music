const ingresar = require("./ingresar")
const consultar = require("./consultar")
const editar = require("./editar")
const consultarTabla = require("./consultar_tabla")
const eliminar = require("./eliminar")
const { Client } = require("pg")

const config = {
  user: "postgres",
  host: "localhost",
  database: "estudiante",
  password: "alejandra",
  port: 5432,
}
const client = new Client(config)

const argumentos = process.argv.slice(2)
const accion = argumentos[0]
const valor1 = argumentos[1]
const valor2 = argumentos[2]
const valor3 = argumentos[3]
const valor4 = argumentos[4]

const programa = async () => {
  if (accion === "rut") {
    const rut = valor1
    await consultar(client, rut)
  }
  if (accion === "ingresar"){
    const rut = valor1
    const nombre = valor2
    const curso = valor3
    const nivel = valor4
    await ingresar(client, nombre, rut, curso, nivel)
  }
  if (accion === "consultar tabla"){
    const rut = valor1
    const nombre = valor2
    const curso = valor3
    const nivel = valor4
    await consultarTabla(client, nombre, rut, curso, nivel)
  }
  if (accion === "editar"){
    const rut = valor1
    const nivel = valor2
    await editar(client, rut, nivel)
  }
  if (accion === "eliminar"){
    const rut = valor1
    await eliminar(client, rut)
  }

}
programa()
