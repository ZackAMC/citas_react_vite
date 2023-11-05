import { useState, useEffect } from 'react'
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"


function App() {

  // Puente de los datos nuevos
  const [pacientes, setPacientes] = useState([])

  // Puente de los datos a editar
  const [paciente, setPaciente] = useState({})

  // Guardar en local storage

  useEffect(() => {
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? []
      setPacientes(pacientesLS)
    }
    obtenerLS()
  }, [])

  useEffect(()=>{
    localStorage.setItem('pacientes', JSON.stringify( pacientes ))
  }, [pacientes])


  // Eliminar paciente
  const eliminarPaciente = id =>{
    const pacientesActualizados = pacientes.filter( paciente => paciente.id !== id)

    setPacientes(pacientesActualizados)
  }



  return (
    <div className="container mx-auto h-screen pt-20">
      <Header />

      <div className="mt-12 md:flex md:align-top">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  )

}

export default App
