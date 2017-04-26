$(document).ready(function() {
	console.log('hi');
	var phaseName = "Precheck";
	$("#phases").val(phaseName);
	$('#phasesList').change(function(){
		console.log('cganged');
		phaseName = $('#phasesList option:selected').text();
		$("#phases").val(phaseName);
		if(phaseName == 'Precheck') {
			$('#checklist').show();
		} else {
			$('#checklist').hide();
		}
	});
});
