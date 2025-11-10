import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  submitMessage = '';

  onSubmit() {
    // En un caso real, aquí enviarías los datos a un servidor
    console.log('Formulario enviado:', this.formData);
    this.submitMessage = '¡Gracias! Tu mensaje ha sido enviado. Te contactaremos pronto.';

    // Limpiar el formulario después de 3 segundos
    setTimeout(() => {
      this.formData = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };
      this.submitMessage = '';
    }, 3000);
  }
}
