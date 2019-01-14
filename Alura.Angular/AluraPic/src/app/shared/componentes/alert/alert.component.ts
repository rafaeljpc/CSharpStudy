import { Component, OnInit, Input } from '@angular/core';
import { AlertService } from './alert.service';
import { Alert, AlertType } from './alert';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'ap-alert',
    templateUrl: './alert.component.html',
    // styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

    @Input() timeout = 3000;
    alerts: Alert[] = [];

    constructor(
        private alertService: AlertService
    ) { }

    ngOnInit(): void {
        this.alertService.getAlert().subscribe(alert => {
            if (!alert) {
                this.alerts = [];
                return;
            }
            this.alerts.push(alert);
            setTimeout(() => this.removeAlert(alert), this.timeout);
        });
    }

    removeAlert(inAlert: Alert) {
        this.alerts = this.alerts.filter(alert => alert !== inAlert);
    }

    getAlertClass(inAlert: Alert) {
        if (!inAlert) {
            return '';
        }

        switch (inAlert.alertType) {
            case AlertType.SUCCESS:
                return 'alert alert-success';
            case AlertType.INFO:
                return 'alert alert-info';
            case AlertType.WARNING:
                return 'alert alert-warning';
            case AlertType.DANGER:
                return 'alert alert-danger';
            default:
                return 'alert alert-info';
        }
    }
}
