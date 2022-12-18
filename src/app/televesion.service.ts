import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const jsonHeader = {
  headers: new HttpHeaders({
    'Content-type': 'application/json',
  })
}



@Injectable({
  providedIn: 'root'
})
export class televesionservice {

  constructor(private http: HttpClient) { }

  register(data: any) {
    return this.http.post<any>('https://grylogic.azurewebsites.net:443/api/gryregister/triggers/manual/invoke?api-version=2022-05-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=4o8FgP4y4Lm0oOa2iasxSqLRvdUrqD4lwcLXwKvSiJ8',data,jsonHeader)
  }

  login(data: any) {
    return this.http.post<any>(' https://grylogic.azurewebsites.net:443/api/grylogin/triggers/manual/invoke?api-version=2022-05-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=JCkatn98EixjPj4i0k2Gq_28-uQyzVjXgYNmOvvOGeE',data,jsonHeader)
  }
  showalltv(){
    return this.http.get<any>('https://grylogic.azurewebsites.net:443/api/showpicture/triggers/manual/invoke?api-version=2022-05-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=tRCWJuoTBGcx6R4b4EDJvn1VMGFfRMH0Fiq_1NZYwPw',jsonHeader)
  }
  detail(id:any){
    return this.http.post<any>('https://grylogic.azurewebsites.net:443/api/picturedetail/triggers/manual/invoke?api-version=2022-05-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=Y1fYmrGSlgrJ6L_SEKHFnqTE-P8Qy4nCk4YMuohQ5SU',id)
  } 
  update(id:any,data:any){
    return this.http.put<any>('https://grylogic.azurewebsites.net/api/updatepicture/triggers/manual/invoke/put/'+id+'?api-version=2022-05-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=SuQ9gred-mFME_ZKDRNRqljo2YmDJE2YRfrWpBTyGnY',data)
  }
  delete(id:any){
    return this.http.delete<any>('https://grylogic.azurewebsites.net/api/deletepicture/triggers/manual/invoke/delete/'+id+'?api-version=2022-05-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=cyvmNwBXxYGE4x6mGXKxQtNYszhO4RqV3PbhaB0ezYo')
  }
  addreview(data:any){
    return this.http.post<any>('https://grylogic.azurewebsites.net:443/api/addreview/triggers/manual/invoke?api-version=2022-05-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=mckj2m34S2TQU9YC8wMvmVGsglvswP_m1E9wVvXnv7A',data)
  }


  userdetail(id : any){
    return this.http.post<any>('https://grylogic.azurewebsites.net:443/api/usserdetail/triggers/manual/invoke?api-version=2022-05-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=ZTUjSC4wznuq13HnkfaT6OO2P5pudkC_ZndGNgc3fDU',id)

  }

  userdetailinf(id : any){
    return this.http.get<any>('http://localhost:5000/user/'+id)

  }
  reviewlist(id:any){
    return this.http.post<any>('https://grylogic.azurewebsites.net:443/api/showreview/triggers/manual/invoke?api-version=2022-05-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=QeYSc0QzLyx-qsdV1yl5buxudCArejj9q-Ac0_hvDss',id)

  }
  deletereview(reviewid:any){
    return this.http.delete<any>('https://grylogic.azurewebsites.net/api/deletereview/triggers/manual/invoke/delete/'+reviewid+'?api-version=2022-05-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=bqcLnp3mdDtWsrlZrEwNHLtlWyWPE4MWb392IEDssLQ')
  }
  editereview(id:any,data:any){
    return this.http.put<any>('http://localhost:5000/updatereview/'+id,data)

  }
  add(data:any){
    return this.http.post<any>('https://grylogic.azurewebsites.net:443/api/postpicture/triggers/manual/invoke?api-version=2022-05-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=jc6pecN7nsdmeum_L5bUpd0wJOuYj6cyK4Wz5ELu24w',data)
  }

  deleteuser(id:any){
    return this.http.delete<any>('http://localhost:5000/deleteuser/'+id)
  }
  addfriends(id:any){
    return this.http.post<any>('https://grylogic.azurewebsites.net:443/api/addpeople/triggers/manual/invoke?api-version=2022-05-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=ELHUbaokpQuYSoC_cuT5djbCD_nl2XMmf3sa9X94uTU',id)
  }
  showallfriends(id:any){
    return this.http.post<any>('https://grylogic.azurewebsites.net:443/api/showpepole/triggers/manual/invoke?api-version=2022-05-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=9N5qRkLfFoNNGp5e2yFEGZAY2Xk0bzchlcTDAq0p9sg',id)
  }
  deletefriends(id:any){
    return this.http.delete<any>('https://grylogic.azurewebsites.net/api/deletepeople/triggers/manual/invoke/delete/'+id+'?api-version=2022-05-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=doYGpzlADgTMbKT25O_66En9YmbN59NqJ43zsFfloWA')
  }
}
