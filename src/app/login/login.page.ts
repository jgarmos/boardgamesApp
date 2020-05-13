import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AuthService } from './../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user = { email: '', password: '' };

  constructor(public alertCtrl: AlertController, public auth: AuthService) { }

  ngOnInit() {
  }

  signUp() {
    this.auth.SignUp(this.user.email, this.user.password)
      .then((user) => {
        //el usuario se ha creado correctamente
        debugger
        this.user.email = '';
        this.user.password = '';
        this.alertCtrl.create({
          header: 'Nuevo Usuario',
          subHeader: 'El usuario se ha creado correctamente',
          buttons: ['Aceptar']
        }).then(alert => {
          alert.present();
        });
      }).catch(err => {
        this.alertCtrl.create({
          header: 'Error',
          subHeader: err.message,
          buttons: ['Aceptar']
        }).then(alert => {
          alert.present();
        });
      })
  }
}
