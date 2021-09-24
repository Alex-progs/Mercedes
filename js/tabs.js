const tabsHandlerElems = document.querySelectorAll('[data-tabs-handler]');
const tabsContentElems = document.querySelectorAll('[data-tabs-field]');
const designTitles = document.querySelectorAll('.design__title');



for (const btn of tabsHandlerElems) 
{
	btn.addEventListener('click', () => 
	{
		tabsHandlerElems.forEach(item => item.classList.remove('design-list__item_active'));
			btn.classList.toggle('design-list__item_active');

			 tabsContentElems.forEach(conttent => 
				{
					if (conttent.dataset.tabsField === btn.dataset.tabsHandler)
						{
							conttent.classList.remove('hidden');
						}
						else
						{
							conttent.classList.add('hidden');
						}
				});
	})
}

