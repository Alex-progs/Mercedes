const forms = document.querySelectorAll('.form-test-drive, .modal__form');
// console.log(forms);
// console.dir(forms);

// fetch('https://jsonplaceholder.typicode.com/todos/1')

forms.forEach( (form) =>
{
	// console.log(form);
	// console.dir(form);


	form.addEventListener('submit', (event) =>
	{
		event.preventDefault();
		let data = {};
		let checkSpace = false;

		for (const { name, value } of form.elements)
		{
			if (name)
			{
				if (value.trim().length)/*Запретить отправку формы с пустыми полями или только пробелами */
				{
					data[name] = value;
				} else
				{
					checkSpace = true;
					break;
				}
				console.log(name);
			}
		}

		for (const key in data) 
		{
			{
				if (!data[key])
				{
					console.log(`${key}---${data[key].trim().length}`);
					data = undefined;
					break;
				}
			}
		}

		if (!checkSpace)
		{
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
		}
		else
		{
			alert("Заполните все поля");
		}
	});

});




//TODO: закрытие модального окна после отправки данных



