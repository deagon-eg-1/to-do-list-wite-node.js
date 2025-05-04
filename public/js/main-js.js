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