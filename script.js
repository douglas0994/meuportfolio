function initTab() {
	const tabMenu = document.querySelectorAll('.js-tabmenu li')
	const tabContent = document.querySelectorAll('.js-tabcontent section')
	tabContent[0].classList.add('ativo');
	
	if(tabContent.length && tabMenu.length) {
	 
		function activeTab(index) {
			tabContent.forEach((item) => {
				item.classList.remove('ativo')
			});
			tabMenu.forEach((item) => {
				item.classList.remove('ativo')
			});
			tabContent[index].classList.add('ativo')
			tabMenu[index].classList.add('ativo')
		}
	
		tabMenu.forEach((item, index) => {
			item.addEventListener('click', () => { 
				activeTab(index) 
			})
		})
	 }
	}
	initTab();