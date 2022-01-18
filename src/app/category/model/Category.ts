export interface DeviceType {
        nome: string,
        ip: string,
        comodo: string,
        consumo: string
}
export interface UpdateDeviceType {
    id: string,
    nome: string,
    comodo: string,
    ip: string,
    consumo: string

}
export interface RemoveDeviceType {
    id: string,
}

export interface ListDeviceType {
    devices: [
        comodo: string,
        consumo:string,
        ip: string,
        nome: string,
        _id: string  
    ]
}