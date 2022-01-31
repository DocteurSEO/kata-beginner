const validate = document.querySelector('#validate')
	const input = document.querySelector('#array')	
	const list = document.querySelector('#list')

	var data = []


	validate.addEventListener('click',function(){
		if (input.value == '') {
			alert('oups ! ')
		
		}else{
			data.push(input.value)
			input.value = ''
		
			
			displayArray(data)

			
		}
	}) 
	
	function displayArray(data){


        list.innerText = ''
		for( i of data ){
            
			var li = document.createElement('li')
			list.appendChild(li)
			li.innerText = i
			

		}




	}