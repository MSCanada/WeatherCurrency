import { TestBed, inject } from '@angular/core/testing';
import { HttpModule,Http,Response, ResponseOptions, XHRBackend } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { SharedService } from './shared.service';

describe('SharedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SharedService,{ provide: XHRBackend, useClass: MockBackend }],
      imports:[HttpModule]
    });
  });

     const mockResponse = {
          
           "Title": "Titanic"
          
        };


  it('should ...', inject([SharedService], (service: SharedService) => {
    expect(service).toBeTruthy();
  }));


    it('test findMovie', inject([XHRBackend,SharedService], (mockBackend,service: SharedService) => {

   
      mockBackend.connections.subscribe((connection) => {
          connection.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify(mockResponse)
          })));
        });

  
       service.findMovie("").subscribe(lstresult =>{expect(lstresult.Title).toBe(mockResponse.Title);},error =>{});
        


  }));

      it('test findWeather', inject([XHRBackend,SharedService], (mockBackend,service: SharedService) => {

   
      mockBackend.connections.subscribe((connection) => {
          connection.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify(mockResponse)
          })));
        });

  
       service.findWeather("","").subscribe(lstresult =>{expect(lstresult.Title).toBe(mockResponse.Title);},error =>{});
        




  }));

      it('test getCurrencyExchRate', inject([XHRBackend,SharedService], (mockBackend,service: SharedService) => {

   
      mockBackend.connections.subscribe((connection) => {
          connection.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify(mockResponse)
          })));
        });

  
       service.getCurrencyExchRate("").subscribe(lstresult =>{expect(lstresult.Title).toBe(mockResponse.Title);},error =>{});
        

        


  }));


});
