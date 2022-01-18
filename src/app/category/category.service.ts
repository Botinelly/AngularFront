import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { DeviceType, UpdateDeviceType, RemoveDeviceType, ListDeviceType} from './model/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private readonly CATEGORY_URL = 'core-manager';

  constructor(private httpClient: HttpClient) { }

  public getAllDevices(): Observable<any[]> {
    return this.httpClient.get<any[]>(
      this.CATEGORY_URL + '/lista_aparelho'
    );
  }


  public getAllDevice(): Promise< any[]> {
    return new Promise((resolve, reject) => {
      this.getAllDevices()
        .pipe(take(1))
        .subscribe(
          (Response) => {
            resolve(Response);
          },
          (error) => {
            reject(error);
          }
        );
    });
  }

  public setDevice( device: DeviceType ): Observable<DeviceType> {
    return this.httpClient.post<DeviceType>(
      this.CATEGORY_URL + '/cria_aparelho', device );
  }

  public setDevices(item: DeviceType): Promise<DeviceType> {
    return new Promise((resolve, reject) => {
      this.setDevice(item)
        .pipe(take(1))
        .subscribe(
          (Response) => {
            resolve(Response);
          },
          (error) => {
            reject(error);
          }
        );
    });
  }

  public updateDevice(newDevice: UpdateDeviceType): Observable<UpdateDeviceType> {
    return this.httpClient.post<UpdateDeviceType>(
      this.CATEGORY_URL + '/atualiza_aparelho', newDevice
    );
  }

  public updateDevices(item: UpdateDeviceType): Promise<UpdateDeviceType> {
    return new Promise((resolve, reject) => {
      this.updateDevice(item)
        .pipe(take(1))
        .subscribe(
          (Response) => {
            resolve(Response);
          },
          (error) => {
            reject(error);
          }
        );
    });
  }

  public removeDevice(device: RemoveDeviceType): Observable<RemoveDeviceType> {
    return this.httpClient.get<RemoveDeviceType>(
      this.CATEGORY_URL + '/remove_aparelho/' + device.id
    );
  }

  public removeDevices(item: RemoveDeviceType): Promise<RemoveDeviceType> {
    return new Promise((resolve, reject) => {
      this.removeDevice(item)
        .pipe(take(1))
        .subscribe(
          (Response) => {
            resolve(Response);
          },
          (error) => {
            reject(error);
          }
        );
    });
  }
}

