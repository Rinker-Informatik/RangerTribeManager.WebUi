import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Allergy } from 'src/app/models/members/allergy';
import { Diseases } from 'src/app/models/members/diseases';
import { Medication } from 'src/app/models/members/medication';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.scss']
})
export class HealthComponent implements OnInit {

  diseasesColumns: string[] = ['name'];
  medicationsColumns: string[] = ['name', 'unit', 'morning', 'midday', 'evening', 'night', 'requirement', 'requirement_quantity'];
  allergiesColumns: string[] = ['name', 'strength'];

  diseasesForm = this.fb.group({
    name: ['']
  });

  healthInsuranceForm = this.fb.group({
    name: ['']
  });
  
  medicationsForm = this.fb.group({
    name: [''],
    unit: [''],
    morning: [''],
    midday: [''],
    evening: [''],
    night: [''],
    requirement: [''],
    requirement_quantity: [''],
  });
  
  allergiesForm = this.fb.group({
    name: [''],
    strength: ['']
  });

  @Input() diseases: Diseases[] = [];
  @Input() medications: Medication[] = [];
  @Input() allergies: Allergy[] = [];
  @Input() healthInsurance: string = "";

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.healthInsuranceForm.setValue({
      name: [this.healthInsurance]
    })
  }

}
