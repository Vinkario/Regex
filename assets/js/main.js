const global = document.querySelector('#global')
const isensitive = document.querySelector('#isensitive')
const textArea = document.querySelector('#text-area')
const expressions = document.querySelector("#expressions")
const filter = document.querySelector('#filtrar')


global.addEventListener('change', function(){
    if(this.checked){
        expressions.value = '//gi'
    }
    else{
        expressions.value=''
    }
})

isensitive.addEventListener('change',function(){
    if(this.checked){
        expressions.value='//i'
    }else{
        expressions.value=''
    }
})


