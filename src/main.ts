type Especialidad = "Medico de familia" | "Pediatra" | "Cardiólogo";

interface Pacientes {
  id: number;
  nombre: string;
  apellidos: string;
  sexo: string;
  temperatura: number;
  frecuenciaCardiaca: number;
  especialidad: Especialidad;
  edad: number;
}

const pacientes: Pacientes[] = [
  {
    id: 1,
    nombre: "John",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 80,
    especialidad: "Medico de familia",
    edad: 44,
  },
  {
    id: 2,
    nombre: "Jane",
    apellidos: "Doe",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 70,
    especialidad: "Medico de familia",
    edad: 43,
  },
  {
    id: 3,
    nombre: "Junior",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 90,
    especialidad: "Pediatra",
    edad: 8,
  },
  {
    id: 4,
    nombre: "Mary",
    apellidos: "Wien",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 120,
    especialidad: "Medico de familia",
    edad: 20,
  },
  {
    id: 5,
    nombre: "Scarlett",
    apellidos: "Somez",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 110,
    especialidad: "Cardiólogo",
    edad: 30,
  },
  {
    id: 6,
    nombre: "Brian",
    apellidos: "Kid",
    sexo: "Male",
    temperatura: 39.8,
    frecuenciaCardiaca: 80,
    especialidad: "Pediatra",
    edad: 11,
  },
];
//Apartado 1A


const obtenPacientesAsignadosAPediatria = (
  pacientes: Pacientes[]
): Pacientes[]  => {
  let pacientePediatria: Pacientes[] = [];
  for(let i = 0; i < pacientes.length; i++){
    if(pacientes[i].especialidad === 'Pediatra'){
      pacientePediatria.push(pacientes[i]);
    }
  }
  return pacientePediatria;
};

let pacientesPediatria: Pacientes[] = obtenPacientesAsignadosAPediatria(pacientes)
console.log("Pacientes de Pediatria:",pacientesPediatria)

//Apartado 2B


const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (
  pacientes: Pacientes[]
): Pacientes[] => {
  let pacientePediatriaMenorDiez: Pacientes[] = []
  for(let i = 0; i < pacientes.length; i++){
    if(pacientes[i].especialidad === 'Pediatra' && pacientes[i].edad < 10){
      pacientePediatriaMenorDiez.push(pacientes[i])
    }
  }
  return pacientePediatriaMenorDiez;
};

let pacientesPediatriaMenorDiez: Pacientes[] = obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes)
console.log("Pacientes de Pediatria menores de 10 años:",pacientesPediatriaMenorDiez);

//Apartado 2

const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
  let activarProtocolo = false;
  for(let i = 0; i < pacientes.length; i++){
    if(pacientes[i].temperatura > 39 && pacientes[i].frecuenciaCardiaca > 100)
      activarProtocolo = true;
  }
  return activarProtocolo;
};
let protocolo: boolean = activarProtocoloUrgencia(pacientes)
console.log("Hay que activar el protocolo?", protocolo);

//Apartado 3
const reasignacionMedicoDeFamilia = (
  pacientes: Pacientes[]
): Pacientes[]  => {
  let nuevaColeccion: Pacientes[] = [];
  for(let i = 0; i < pacientes.length; i++){
    if(pacientes[i].especialidad === 'Pediatra'){
      nuevaColeccion.push({
        ...pacientes[i],
        especialidad: 'Medico de familia'
      });
    }else{
      nuevaColeccion.push(pacientes[i])
    }
  }
  return nuevaColeccion;
};

let reasignacionPacientes: Pacientes[] = reasignacionMedicoDeFamilia(pacientes)
console.log("Esta es la lista con las reasignaciones:", reasignacionPacientes)


//Apartado 4
const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
  for(let i = 0; i < pacientes.length; i++){
    if (pacientes[i].especialidad === 'Pediatra') {
      return true;
    }
  }
  return false;
};

let hayTrabajoPediatria: boolean = HayPacientesDePediatria(pacientes)
console.log("Hay trabajo en Pediatria?", hayTrabajoPediatria)

//Apartado Opcional
interface NumeroPacientesPorEspecialidad {
  medicoDeFamilia: number;
  pediatria: number;
  cardiologia: number;
}

const cuentaPacientesPorEspecialidad = (
  pacientes: Pacientes[]
): NumeroPacientesPorEspecialidad => {
  let cantidadPacientesEspecialidad: NumeroPacientesPorEspecialidad = {
    medicoDeFamilia: 0,
    pediatria: 0,
    cardiologia: 0
  }
  for(let i = 0; i < pacientes.length; i++){
    switch(pacientes[i].especialidad){
      case 'Medico de familia':
        cantidadPacientesEspecialidad.medicoDeFamilia++;
      break;
      case 'Cardiólogo':
        cantidadPacientesEspecialidad.cardiologia++;
      break;
      case 'Pediatra':
        cantidadPacientesEspecialidad.pediatria++;
      break;
    }
  }
  return cantidadPacientesEspecialidad;
};

let PacientesEnEspecialidad = cuentaPacientesPorEspecialidad(pacientes)
console.log("Estos son los pacientes que hay por especialidad:", PacientesEnEspecialidad)