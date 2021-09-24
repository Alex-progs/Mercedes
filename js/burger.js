// humburger-menu-active menu-active
const huburgerBtn = document.querySelector('.humburger-menu');
const humburgerMenu = document.querySelector('.menu');
const listMenu = document.querySelectorAll('.menu-list');





const toggleMenu = () =>
{
	humburgerMenu.classList.toggle('menu-active');
	huburgerBtn.classList.toggle('humburger-menu-active');
}

huburgerBtn.addEventListener('click', toggleMenu);

listMenu.forEach((listItem) => 
	{
		listItem.addEventListener('click', () => toggleMenu())
	}
);



