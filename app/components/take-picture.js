import Component from '@ember/component';

export default Component.extend({

	photo:null,

	init() {
		
		this._super(arguments);
		
	},
	
	

	 cameraTakePict(){

	 	var componentscope = this;

	 	try{
			navigator.camera.getPicture(
			function(imageData){ 
				//do something if succesfull
				//imageData = 'data:image/jpeg;base64,'+imageData;
				//imageData = imageData.replace(/^file:\/\//, '');
				componentscope.set('photo',imageData);	

			}, function(message){
				//handle error if not
				alert("The operation failed because: "+message);

			},	{quality:50,destinationType:Camera.DestinationType.FILE_URI,correctOrientation:true,targetHeight:500,targetWidth:500}
		)
	 	}catch(err){
	 		console.log('Error: '+err)
	 	}

	},

	actions:{
		takePicture(){
			console.log('In action ')
			this.cameraTakePict();
		}
	}
	
});
