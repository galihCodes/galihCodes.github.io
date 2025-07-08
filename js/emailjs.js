(function(){
      emailjs.init("pALxtp0KBcy9hD0eK"); // Public Key EmailJS kamu
    })();

    function sendEmail(e) {
      e.preventDefault();

      // Optional: tombol kirim disable agar tidak dobel klik
      const submitBtn = document.querySelector('#contact-form button[type="submit"]');
      submitBtn.disabled = true;
      submitBtn.textContent = "Mengirim...";

      emailjs.sendForm('service_iws7uw2', 'template_nqeq1oc', '#contact-form')
        .then(() => {
          Swal.fire({
            icon: 'success',
            title: 'Terkirim!',
            text: 'Email kamu sudah berhasil dikirim.',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Oke'
          });
          document.getElementById('contact-form').reset();
        }, (error) => {
          Swal.fire({
            icon: 'error',
            title: 'Gagal Mengirim',
            text: 'Ada masalah saat mengirim pesan.',
            footer: `<code>${error.text}</code>`,
            confirmButtonColor: '#d33'
          });
        })
        .finally(() => {
          submitBtn.disabled = false;
          submitBtn.textContent = "Send Message";
        });
    }