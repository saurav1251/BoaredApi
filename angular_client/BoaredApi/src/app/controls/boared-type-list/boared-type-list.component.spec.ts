import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoaredTypeListComponent } from './boared-type-list.component';
import  { BoaredApiService} from '../../Services/boared-api.service';

describe('BoaredTypeListComponent', () => {
  let component: BoaredTypeListComponent;
  let fixture: ComponentFixture<BoaredTypeListComponent>;
  let boaredApiServiceStub: Partial<BoaredApiService>;
  let mockActivityType:{Key:string,Value:string}[]=[
    {Key:"", Value:"--Select--"},

    {Key:"education", Value:"Education"},
    {Key:"recreational", Value:"Recreational"},
    {Key:"social", Value:"Social"},
    {Key:"diy", Value:"Diy"},
    {Key:"charity", Value:"Charity"},
    {Key:"cooking", Value:"Cooking"},
    {Key:"relaxation", Value:"Relaxation"},
    {Key:"music", Value:"Music"},
    {Key:"busywork", Value:"Busywork"},
  ];
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoaredTypeListComponent ],
      providers: [ { provide: BoaredApiService, useValue: boaredApiServiceStub } ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoaredTypeListComponent);
    component = fixture.componentInstance;
    const boaredApiService = TestBed.inject(BoaredApiService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Boared api list should contain specified items', () => {
    expect(component.arrActvityType).toEqual(mockActivityType);
  });
});
