function enviarFormulario() {
	var nombre = $("#nombre").val();
	
	if (nombre.length <= 0) {
		$("#descripcionNombre").removeClass('d-none');
		$("#descripcionNombre").addClass('text-danger');
		$("#nombre").addClass('is-invalid');
		$("#descripcionNombre").html('Debe introducir un nombre');
	} else {
		$("#descripcionNombre").removeClass('d-none');
		$("#descripcionNombre").removeClass('text-danger');
		$("#descripcionNombre").addClass('text-success');
		$("#nombre").removeClass('is-invalid');
		$("#descripcionNombre").html('¡Nombre correcto!');
	}
}