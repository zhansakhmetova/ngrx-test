import {Component, Input} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Observable} from 'rxjs';
import {Details} from '../../core/model';

@Component({
  selector: 'app-product-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class ProductDetailsComponent  {
  @Input() data$!: Observable<Details>;

  constructor(public activeModal: NgbActiveModal) { }


}
