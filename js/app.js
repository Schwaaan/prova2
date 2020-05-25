$(document).ready(function() {	
    $('.mascaraCep').mask('99999-999');
    $('.mascaraCpf').mask('000.000.000-00');
    $('.dataNascimento').mask('00/00/0000');
    $('.money').mask('#.##0,00 R$', {reverse: true});
});