import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
getHobby(){
  return[
    {Hobby : "Hobby", Saya : "saya"}
  ];
}
getCourse(){
  return[
    {No : 1, hobby : "berlari", Keterangan : "lari 1 jam setiap sore"},
    {No : 2, hobby : "senam", Keterangan : "senam tiap sore"},
    {No : 3, hobby : "bermain musik", Keterangan : "bermain musik tiap waktu senggang"},
  ];
}
  constructor() { }
}
