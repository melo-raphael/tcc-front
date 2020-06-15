import { HubConnectionBuilder } from '@aspnet/signalr'




let hubconnection;

export async function connectionStart(socketUrl) {
    hubconnection= new HubConnectionBuilder().withUrl(socketUrl).build();
    await hubconnection.start();

    return hubconnection;
}

export async function socketInvoke(functionName, value=null) {
    await hubconnection.invoke(functionName, value);
    return hubconnection;
}

export function socketOn(connectionName) {
    hubconnection.on(connectionName, (symbol, price, variation) => {
        const response = {symbol, price, variation};
        console.log(response)
        return response;
    });
}

export async function socketStop() {
    await hubconnection.stop();
    return hubconnection;
}


