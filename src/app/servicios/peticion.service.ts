import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeticionService {

  constructor(private http:HttpClient) { }

  requestOptions:any = {}
  urlHost:string = "http://localhost:3000"

  post(url:string, payload:any){
    let promise = new Promise((resolve,reject) =>{

      this.requestOptions = {
        headers: new HttpHeaders({
          //"":""
        }),
        withCredentials:true
      }
      this.http.post(url,payload,this.requestOptions).toPromise()
      .then((respuesta:any) =>{
        console.log(respuesta)
        resolve(respuesta)
      }).catch((error) =>{
        console.log(error)
        reject(error)
      })
    })
    return promise
  }

  get(url:string, payload:any){
    let promise = new Promise((resolve,reject) =>{

      this.requestOptions = {
        headers: new HttpHeaders({
          //"":""
        }),
        withCredentials:true
      }
      this.http.get(url,this.requestOptions).toPromise()
      .then((respuesta:any) =>{
        console.log(respuesta)
        resolve(respuesta)
      }).catch((error) =>{
        console.log(error)
        reject(error)
      })
    })
    return promise
  }

  put(url:string, payload:any){
    let promise = new Promise((resolve,reject) =>{

      this.requestOptions = {
        headers: new HttpHeaders({
          //"":""
        }),
        withCredentials:true
      }
      this.http.put(url,payload,this.requestOptions).toPromise()
      .then((respuesta:any) =>{
        console.log(respuesta)
        resolve(respuesta)
      }).catch((error) =>{
        console.log(error)
        reject(error)
      })
    })
    return promise
  }

  delete(url:string, payload:any){
    let promise = new Promise((resolve,reject) =>{

      this.requestOptions = {
        headers: new HttpHeaders({
          //"":""
        }),
        withCredentials:true
      }
      this.http.delete(url,this.requestOptions).toPromise()
      .then((respuesta:any) =>{
        console.log(respuesta)
        resolve(respuesta)
      }).catch((error) =>{
        console.log(error)
        reject(error)
      })
    })
    return promise
  }

}
