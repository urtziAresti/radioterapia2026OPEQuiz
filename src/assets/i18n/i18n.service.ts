import { Injectable } from '@angular/core';
import { ES } from './es';

@Injectable({
  providedIn: 'root'
})
export class I18nService {

  readonly texts = ES;

}