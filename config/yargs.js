const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea pendiente',
};

const completado = {
    alias: 'c',
    default: true,
    type: 'boolean',
    desc: 'Marca como completado o pendiente la tarea',
};


const argv = require('yargs')
    .command('crear', 'Creará una tarea pendiente', { descripcion })
    .command('actualizar', 'Completa una tarea y pasa su estado a completada', { descripcion, completado })
    .command('borrar', 'Borra una tarea', { descripcion })
    .help()
    .argv;

module.exports = {
    argv,
};