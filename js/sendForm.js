const form = document.querySelector('.form-test-drive');

// fetch('https://jsonplaceholder.typicode.com/todos/1')


form.addEventListener('submit', (event) =>
	{
			event.preventDefault();
			let data = {};
			for (const {name, value} of form.elements)
			{	
			if (name)
				{					
					data[name] = value;
				}
			}
				// 	fetch('https://jsonplaceholder.typicode.com/photos')
				// 		.then((response) =>
				// 		{
				// 		if (response.status === 200 || response.status === 201)
				// 				{
				// 					return response.json();
				// 				}
				// 		else  
				// 				{
				// 					throw new Error(response.status);
				// 				}
				// 		})
				// 		.then((data) => 
				// 		{
				// 			console.log(data)
				// 		})
				// 		.catch((error) => 
				// 			{
				// 				alert(`Произошла ошибка Erro ${error.message}`);
				// 			});
				// });
				/*-------POST---------------*/
				fetch('https://jsonplaceholder.typicode.com/posts',
					{
						method: 'POST',
						body: JSON.stringify(data)
					}
				)
					.then((response) =>
					{
						if (response.status === 200 || response.status === 201)
						{
							return response.json();
						}
						else  
						{
							throw new Error(response.status);
						}
					})
					.then((data) => 
					{
						alert("Данные успешно сохранены");// инфа про данные сохранены или редиректы
						form.reset();//очистка формы
					})
					.catch((error) => 
					{
						alert(`Произошла ошибка Error ${error.message}`);
					});
	});







