
$("input[name='options']").on('change',function(){
  checked() ; 
})
function checked(){
  $('input[name="options"]:checked').hasClass('opt_grid')?
    $('#pruduct').addClass('grid').removeClass('list'):
    $('#pruduct').removeClass('grid').addClass('list') ; 
}
checked() ; 