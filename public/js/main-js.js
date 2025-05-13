// استهداف كل الأزرار اللي بتفتح القوائم
const optionButtons = document.querySelectorAll('.task-opction');

// لكل زر من الأزرار دي
optionButtons.forEach(button => {
   // لما المستخدم يضغط عليه
   button.addEventListener('click', (e) => {
      // وقف انتشار الحدث علشان ميقفلش على طول
      e.stopPropagation();
      
      // اقفل كل القوائم المفتوحة قبل ما تفتح الجديد
      document.querySelectorAll('.task-dropDown').forEach(menu => {
         if (menu !== button.querySelector('.task-dropDown')) {
            menu.style.visibility = 'hidden';
            menu.style.opacity = '0';
            menu.style.transform = 'translateY(10px)';
         }
      });
      
      // استهدف القائمة اللي جوه الزر ده
      const dropdown = button.querySelector('.task-dropDown');
      
      // لو كانت مفتوحة، اقفلها، والعكس
      if (dropdown.style.visibility === 'visible') {
         dropdown.style.visibility = 'hidden';
         dropdown.style.opacity = '0';
         dropdown.style.transform = 'translateY(10px)';
      } else {
         dropdown.style.visibility = 'visible';
         dropdown.style.opacity = '1';
         dropdown.style.transform = 'translateY(0)';
      }
   });
});

// اقفل كل القوائم لما المستخدم يضغط في أي مكان بره
document.addEventListener('click', () => {
   document.querySelectorAll('.task-dropDown').forEach(menu => {
      menu.style.visibility = 'hidden';
      menu.style.opacity = '0';
      menu.style.transform = 'translateY(10px)';
   });
});


// جلب العناصر
const modal = document.getElementById('taskModal');
const openBtn = document.getElementById('newTaskBtn');
const openBtn2 = document.getElementById('newTaskBtn2');
const closeBtn = document.querySelector('.close-btn');

// فتح المودال
openBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
});
openBtn2.addEventListener('click', () => {
  modal.style.display = 'flex';
});

// غلق المودال
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// غلق بالضغط خارج المودال
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// جلب البيانات المدخلة في المودال
const form = document.getElementById('taskForm');
form.addEventListener('submit', (e) => {
   e.preventDefault(); // منع إعادة تحميل الصفحة

   const title = document.getElementById('taskTitle').value;
   const description = document.getElementById('taskDescription').value;

   // إرسال البيانات عبر API إلى الخادم
   fetch('/api/tasks', {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json'
      },
      body: JSON.stringify({
         title: title,
         description: description
      })
   })
   .then(response => response.json())
   .then(data => {
      console.log('Task added successfully:', data);
      modal.style.display = 'none'; // إغلاق المودال بعد الإضافة
   })
   .catch(error => {
      console.error('Error:', error);
   });
});
