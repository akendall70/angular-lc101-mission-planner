import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {
  experiments: object[] = [
    {name: "Mars soil sample"},
    {name: "Plant growth in habitat"},
    {name: "Human bone density"}
  ];
  constructor() { }

  ngOnInit() {
  }
  add(studyName: string) {
    this.experiments.push({name: studyName});
  }
  remove(study: object) {
    let index = this.experiments.indexOf(study);
    this.experiments.splice(index, 1);
  }

  studyBeingEdited: object = null;
  
  edit(study: object) {
    this.studyBeingEdited = study;
}

save(name: string, study: object) {
  study['name'] = name;
  this.studyBeingEdited = null;
  }
}
