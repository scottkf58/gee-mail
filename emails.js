for(var i=0; i<window.geemails.length; i++){

			var emailContainer = document.createElement('div');
			emailContainer.className = 'emailContainer';

        	var date = document.createElement('div');
        	date.className = 'dateDiv';
        	date.innerHTML = window.geemails[i].date;
    		emailContainer.appendChild(date);

			var sender = document.createElement('div');
			sender.className = 'senderDiv';
			sender.innerHTML = window.geemails[i].sender;
			emailContainer.appendChild(sender);

			// var body = document.createElement('div')
			// sender.innerHTML = window.geemails[i].body;
			// emailContainer.appendChild(body);

        	var container = document.getElementById('main');
        	container.appendChild(emailContainer);
        };