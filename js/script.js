document.addEventListener('DOMContentLoaded', function() {
    

    

    // Фильтрация участков
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            const filter = button.getAttribute('data-filter');
            displayProperties(filter);
        });
    });

    // Плавная прокрутка для навигации
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

 
    // Инициализация - показать все участки
    displayProperties();
});

 document.addEventListener('DOMContentLoaded', function() {
            // Инициализация всех каруселей
            document.querySelectorAll('.carousel-container').forEach(initCarousel);
            
            function initCarousel(container) {
                const slides = container.querySelectorAll('.carousel-slide');
                const prevBtn = container.querySelector('.prev');
                const nextBtn = container.querySelector('.next');
                const indicators = container.querySelectorAll('.indicator');
                
                let currentIndex = 0;
                
                // Функция обновления карусели
                function updateCarousel() {
                    slides.forEach((slide, index) => {
                        slide.classList.toggle('active', index === currentIndex);
                    });
                    
                    indicators.forEach((indicator, index) => {
                        indicator.classList.toggle('active', index === currentIndex);
                    });
                    
                }
                
                // Переключение на следующий слайд
                function nextSlide() {
                    currentIndex = (currentIndex + 1) % slides.length;
                    updateCarousel();
                }
                
                // Переключение на предыдущий слайд
                function prevSlide() {
                    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
                    updateCarousel();
                }
                
                // Обработчики событий
                nextBtn.addEventListener('click', nextSlide);
                prevBtn.addEventListener('click', prevSlide);
                
                // Клики по индикаторам
                indicators.forEach((indicator, index) => {
                    indicator.addEventListener('click', () => {
                        currentIndex = index;
                        updateCarousel();
                    });
                });
                
                // Автопрокрутка (опционально)
                let interval = setInterval(nextSlide, 5000);
                
                container.addEventListener('mouseenter', () => {
                    clearInterval(interval);
                });
                
                container.addEventListener('mouseleave', () => {
                    interval = setInterval(nextSlide, 5000);
                });
            }
        });





// Карусель фотографий
document.addEventListener('DOMContentLoaded', function() {
  const carousel = document.querySelector('.carousel-inner');
  const items = document.querySelectorAll('.carousel-item');
  const prevBtn = document.querySelector('.carousel-control.prev');
  const nextBtn = document.querySelector('.carousel-control.next');
  const indicators = document.querySelectorAll('.indicator');
  
  let currentIndex = 0;
  const totalItems = items.length;
  
  // Установка активного слайда
  function setActiveSlide(index) {
    items.forEach(item => item.classList.remove('active'));
    indicators.forEach(ind => ind.classList.remove('active'));
    
    currentIndex = (index + totalItems) % totalItems;
    items[currentIndex].classList.add('active');
    indicators[currentIndex].classList.add('active');
    
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
  }
  
  // Переключение на предыдущий слайд
  prevBtn.addEventListener('click', () => {
    setActiveSlide(currentIndex - 1);
  });
  
  // Переключение на следующий слайд
  nextBtn.addEventListener('click', () => {
    setActiveSlide(currentIndex + 1);
  });
  
  // Переключение по индикаторам
  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
      setActiveSlide(index);
    });
  });
  
  // Автопрокрутка (опционально)
  let autoSlide = setInterval(() => {
    setActiveSlide(currentIndex + 1);
  }, 5000);
  
  // Пауза при наведении
  carousel.addEventListener('mouseenter', () => {
    clearInterval(autoSlide);
  });
  
  carousel.addEventListener('mouseleave', () => {
    autoSlide = setInterval(() => {
      setActiveSlide(currentIndex + 1);
    }, 5000);
  });
  
  // Инициализация
  setActiveSlide(0);
});



document.addEventListener('DOMContentLoaded', function() {
            const showGalleryBtn = document.getElementById('showGallery');
            const gallerySection = document.getElementById('gallery');
            const galleryContent = document.getElementById('galleryContent');
            
            showGalleryBtn.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Показываем секцию галереи
                gallerySection.style.display = 'block';
                
                // Плавная прокрутка к галерее
                gallerySection.scrollIntoView({ behavior: 'smooth' });
                
                // Добавляем анимацию появления контента
                galleryContent.classList.add('fade-in');
                
                // Здесь можно добавить загрузку галереи через AJAX, если нужно
                // loadGalleryContent();
            });
            
            // Пример функции для загрузки контента
            function loadGalleryContent() {
                // Здесь может быть AJAX-запрос к серверу
                // для динамической загрузки фотографий участков
            }
        });



// Модальное окно для проектов домов
document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('planModal');
  const modalImg = document.getElementById('modalPlanImage');
  const modalInfo = document.getElementById('modalPlanInfo');
  const zoomBtns = document.querySelectorAll('.zoom-btn');
  const closeModal = document.querySelector('.close-modal');
  
  // Данные о проектах (можно заменить на реальные)
  const plansData = {
    plan1: {
      title: 'Проект',
      specs: [
       
      ],
      description: ''
    },
    plan2: {
      title: 'Проект',
      specs: [
       
      ],
      description: ''
    },
    plan3: {
      title: 'Фасад',
      specs: [
       
      ],
      description: ''
    }
   
  };
  
  // Открытие модального окна
  zoomBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const planId = this.getAttribute('data-plan');
      const planCard = this.closest('.plan-card');
      const planImage = planCard.querySelector('.plan-image').src;
      const planTitle = planCard.querySelector('h3').textContent;
      
      modalImg.src = planImage;
      modalImg.alt = planTitle;
      
      // Заполнение информации о проекте
      const planData = plansData[planId];
      let infoHTML = `<h3>${planData.title}</h3>`;
      
      infoHTML += '<ul class="modal-specs">';
      planData.specs.forEach(spec => {
        infoHTML += `<li>${spec}</li>`;
      });
      infoHTML += '</ul>';
      
      infoHTML += `<p class="modal-description">${planData.description}</p>`;
      
      
      modalInfo.innerHTML = infoHTML;
      modal.style.display = 'block';
      document.body.style.overflow = 'hidden';
    });
  });
  
  // Закрытие модального окна
  close-modal.addEventListener('click', function() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  });
  
  // Закрытие при клике вне окна
  window.addEventListener('click', function(e) {
    if (e.target === modal) {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });
  
  // Кнопки "Подробнее" на карточках
  const detailBtns = document.querySelectorAll('.plan-details-btn');
  detailBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const planCard = this.closest('.plan-card');
      const zoomBtn = planCard.querySelector('.zoom-btn');
      zoomBtn.click();
    });
  });
});    


 document.addEventListener('DOMContentLoaded', function() {
            const form = document.getElementById('applicationForm');
            const successMessage = document.querySelector('.success-message');
            const closeBtn = document.querySelector('.close-btn');
            const phoneInput = document.getElementById('phone');
            
            // Маска для телефона
            phoneInput.addEventListener('input', function(e) {
                let x = e.target.value.replace(/\D/g, '').match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
                e.target.value = '+7' + (x[2] ? ' (' + x[2] : '') + (x[3] ? ') ' + x[3] : '') + (x[4] ? '-' + x[4] : '') + (x[5] ? '-' + x[5] : '');
            });
            
            // Отправка формы
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Здесь можно добавить AJAX-запрос для отправки данных
                // fetch('/send-form', { method: 'POST', body: new FormData(form) })
                //     .then(response => response.json())
                //     .then(data => { ... });
                
                // Показываем сообщение об успехе
                successMessage.classList.add('active');
            });
            
            // Закрытие сообщения
            closeBtn.addEventListener('click', function() {
                successMessage.classList.remove('active');
                form.reset();
            });
        });




 document.addEventListener('DOMContentLoaded', function() {
            const openModalBtn = document.getElementById('openModalBtn');
            const closeModalBtn = document.getElementById('closeModalBtn');
            const modalOverlay = document.getElementById('modalOverlay');
            const tourForm = document.getElementById('tourForm');
            const phoneInput = document.getElementById('phone');
            const formContainer = document.getElementById('formContainer');
            const succesMessage = document.getElementById('succesMessage');
            
            // Открытие модального окна
            openModalBtn.addEventListener('click', function() {
                modalOverlay.classList.add('active');
                // Сбрасываем форму и сообщение при каждом открытии
                tourForm.reset();
                formContainer.style.display = 'block';
                succesMessage.style.display = 'none';
            });
            
            // Закрытие модального окна
            closeModalBtn.addEventListener('click', function() {
                modalOverlay.classList.remove('active');
            });
            
            // Закрытие при клике вне окна
            modalOverlay.addEventListener('click', function(e) {
                if (e.target === modalOverlay) {
                    modalOverlay.classList.remove('active');
                }
            });
            
            // Маска для телефона
            phoneInput.addEventListener('input', function(e) {
                let x = e.target.value.replace(/\D/g, '').match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
                e.target.value = '+7' + (x[2] ? ' (' + x[2] : '') + (x[3] ? ') ' + x[3] : '') + (x[4] ? '-' + x[4] : '') + (x[5] ? '-' + x[5] : '');
            });
            
            // Отправка формы
            tourForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Здесь можно добавить AJAX-запрос для отправки данных
                fetch('/send-tour-request', {
                     method: 'POST',
                    body: JSON.stringify({ phone: phoneInput.value }),
                     headers: { 'Content-Type': 'application/json' }
                 })
                 .then(response => response.json())
                 .then(data => {
                     if(data.success) {
                        // Показываем сообщение об успехе
                        formContainer.style.display = 'none';
                        succesMessage.style.display = 'block';
                        
                        // Автоматическое закрытие через 3 секунды
                        setTimeout(function() {
                            modalOverlay.classList.remove('active');
                        }, 3000);
                     }
                 });
                
                // Для демонстрации сразу показываем успех
                formContainer.style.display = 'none';
                succesMessage.style.display = 'block';
                
                setTimeout(function() {
                    modalOverlay.classList.remove('active');
                }, 3000);
            });
        });