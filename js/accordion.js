// const btn = document.querySelector(".feature__link");
const lists = document.querySelectorAll('.feature-sub');
const btns = document.querySelectorAll(".feature__link");



//без сворачивания

// btns.forEach((btnItem,index) => {
// 	btnItem.addEventListener('click', () => {		
// 		btns.forEach((btnItem) => {
// 			btnItem.classList.remove('feature__link_active');
// 		})
// 		 btnItem.classList.add('feature__link_active');
// 		lists.forEach((listItem) => {
// 			listItem.classList.add('hidden');
// 		})
// 			 lists[index].classList.remove('hidden');
// 	})
// })

// При клике на активный элемент аккордеона, он должен закрываться 

btns.forEach((btn,index) => {
	btn.addEventListener('click', () => {
				btns.forEach((btnItem,idx) => {
						if(btnItem===btn)
						{
							btnItem.classList.toggle('feature__link_active');
							lists[idx].classList.toggle('hidden')
						}
						else
						{
							btnItem.classList.remove('feature__link_active');
							lists[idx].classList.add('hidden');
						}
					}
				);

			})
});

//другие варианты

// btns.forEach((btnItem,index) => 
// {
// 	btnItem.addEventListener('click', () => 
// 	{
// 		if(btnItem.classList.contains('feature__link_active') )
// 			{
// 				btnItem.classList.remove('feature__link_active');
// 				lists[index].classList.add('hidden');
// 			}
// 		else 
// 			{
// 				btns.forEach((btnItem) => 
// 					{
// 						btnItem.classList.remove('feature__link_active');
// 					})
// 				btnItem.classList.add('feature__link_active');
// 				lists.forEach((listItem) => 
// 					{
// 						listItem.classList.add('hidden');
// 					}
// 				);
// 				lists[index].classList.remove('hidden');
				
// 			}
		
// 	});
	
// });



