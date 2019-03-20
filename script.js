// console.log('hi - script.js');
//----------------------------------------------------
function highlight_match(s, re, type){
  // assumes 'type' is valid class for highlight
  return s.replace(re, (g0,g1) => `<span class="${type}">${g1}</span>`)}

//----------------------------------------------------
function morph_list(id){
    console.log('hi from morph')
    let $e          = $(`#${id}`)
    let ar          = $e.html().split('\n')
    let sig       = []
    let re        = /a+/;
    ar.forEach((s,i)=>{
          let m             = re.exec(s)
          if (m) {
            let delta  = highlight_match(s, /(a)/g, 'blue')
            sig.push(delta)
          } else {
            sig.push(`${s}`)}})
  $e.replaceWith(`<span id="${id}" class="list">${sig.join('\n')}</span>`)
}

//----------------------------------------------------
function add_new_hi_item(){
  let s        = $('#new-hi-item').val()
  if (! (s === '')) {
    $('#hi-list').append(`[${s}]`)
    $('#new-hi-item').val('')}
}
