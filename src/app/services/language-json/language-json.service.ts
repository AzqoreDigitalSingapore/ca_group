import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageJsonService {
  constructor(private httpClient: HttpClient) { }
  async getLanguageJson(lang: string): Promise<string> {
    var json = "";
    try {
      var jsonData = await firstValueFrom(this.httpClient.get(`https://github.com/dannellim/CA-Group-Marketing/blob/main/src/assets/languages/${lang}.json`));
      if (jsonData)
        json = JSON.stringify(jsonData);
    }
    catch (err) {
      console.log(err);
    }
    return json;
  }
}